/* =====================================================================
   finlit-core.js — shared progress engine for every FinLit module
   and the home page. One place for: saving/loading, XP, and Resume.

   XP POLICY
   - Each module stores only the XP earned IN that module (S.xp), as a
     ledger of awards (S.awards), keyed by where the award happened:
     "lesson:step:n" (the n-th award on that screen).
   - Each award slot pays out at most once. Replaying a lesson never pays
     twice, but a learner can still earn a slot they missed the first time.
   - Course total = legacy XP (see MIGRATION) + the sum of every module's
     own XP. The home page and every module show the same total.

   MIGRATION (saves from before this engine, i.e. no S.v)
   - Old saves stored a running total copied between modules, so they can't
     be summed. The first time this engine runs in a browser, it takes the
     largest old total (what the home page used to show) as a one-time
     starting balance: "finlit-legacy-xp".
   - Each old module save is then converted: its own XP starts at 0, and
     lessons already finished before the upgrade pay no XP if replayed, so
     nothing is counted twice.

   RESUME
   - Safe points: the start of a lesson, and every quiz question screen in
     lessons 1–3 (the mastery check only resumes from its start).
   - At each safe point, the module's own extra state (e.g. the pretend bank
     account) is snapshotted, and restored on Resume. Simulators restart
     from their beginning, never from a half-finished middle.
   - Starting a lesson over restores the state it had when first begun, so
     a replayed simulator can't double-count deposits.
===================================================================== */
(function(){
  const PLANNED_TOTAL = 52;
  const LEGACY_KEY = "finlit-legacy-xp";
  const ENGINE_KEYS = ["v","xp","awards","shelf","lesson","step","firstTry","done","masteryPassed",
                       "legacyXP","legacyDone","resume","starts"];
  const stateKey = n => "mod"+n+"-state";

  /* ---------- storage: same order the modules always used ---------- */
  async function get(k){
    try{ const r = await window.storage.get(k); if(r && r.value) return r.value; }catch(e){}
    try{ return localStorage.getItem(k); }catch(e){ return null; }
  }
  async function set(k, v){
    try{ await window.storage.set(k, v); return; }catch(e){}
    try{ localStorage.setItem(k, v); }catch(e){}
  }
  function parse(s){ try{ const o = JSON.parse(s); return (o && typeof o === "object" && !Array.isArray(o)) ? o : null; }catch(e){ return null; } }
  const num = (x, d) => (typeof x === "number" && isFinite(x)) ? x : d;
  const clone = o => JSON.parse(JSON.stringify(o));

  /* ---------- one-time legacy XP, computed before any module migrates ---------- */
  async function legacyXP(){
    const v = await get(LEGACY_KEY);
    if(v !== null && v !== undefined && v !== "") return Math.max(0, num(+v, 0));
    let max = 0;
    for(let i = 1; i <= PLANNED_TOTAL; i++){
      const s = parse(await get(stateKey(i)));
      if(s && !(s.v >= 2)) max = Math.max(max, num(s.xp, 0));
    }
    await set(LEGACY_KEY, String(max));
    return max;
  }

  /* ---------- clean up any saved state, old or damaged ---------- */
  function normalize(defaults, saved){
    const S = Object.assign(clone(defaults), saved || {});
    if(!(S.v >= 2)){                       // migrate an old save
      S.legacyXP = num(S.xp, 0);
      S.legacyDone = (Array.isArray(S.done) ? S.done : []).map(Boolean);
      S.awards = {}; S.resume = null; S.starts = {};
      S.v = 2;
    }
    const d = Array.isArray(S.done) ? S.done : [];
    S.done = [0,1,2,3].map(i => !!d[i]);
    S.legacyDone = (Array.isArray(S.legacyDone) ? S.legacyDone : []).map(Boolean);
    S.shelf = (Array.isArray(S.shelf) ? S.shelf : []).filter(w => typeof w === "string");
    S.firstTry = (S.firstTry && typeof S.firstTry === "object") ? S.firstTry : {};
    S.masteryPassed = !!S.masteryPassed;
    const aw = (S.awards && typeof S.awards === "object") ? S.awards : {};
    S.awards = {}; for(const k in aw) S.awards[k] = Math.max(0, num(aw[k], 0));
    S.xp = Object.values(S.awards).reduce((a, b) => a + b, 0);
    S.lesson = Math.min(3, Math.max(0, Math.floor(num(S.lesson, 0))));
    S.step = Math.max(0, Math.floor(num(S.step, 0)));
    const r = S.resume;
    S.resume = (r && typeof r === "object" && Number.isInteger(r.lesson) && r.lesson >= 0 && r.lesson <= 3 &&
                Number.isInteger(r.step) && r.step >= 0) ? r : null;
    S.starts = (S.starts && typeof S.starts === "object") ? S.starts : {};
    return S;
  }

  let others = 0;          // legacy + every OTHER module's own XP
  let moduleN = 0;
  let screen = "", slot = 0;

  const FL = {
    PLANNED_TOTAL,

    async load(n, defaults){
      moduleN = n;
      const legacy = await legacyXP();
      const S = normalize(defaults, parse(await get(stateKey(n))));
      let sum = legacy;
      for(let i = 1; i <= PLANNED_TOTAL; i++){
        if(i === n) continue;
        const s = parse(await get(stateKey(i)));
        if(s && s.v >= 2 && s.awards && typeof s.awards === "object")
          sum += Object.values(s.awards).reduce((a, b) => a + Math.max(0, num(b, 0)), 0);
      }
      others = sum;
      await set(stateKey(n), JSON.stringify(S));
      return S;
    },

    async save(n, S){ await set(stateKey(n), JSON.stringify(S)); },

    /* award n XP for the current screen; each slot pays at most once */
    award(S, n){
      const here = S.lesson + ":" + S.step;
      if(here !== screen){ screen = here; slot = 0; }
      const key = here + ":" + (slot++);
      if(key in S.awards) return 0;
      const pay = S.legacyDone[S.lesson] ? 0 : Math.max(0, num(n, 0));
      S.awards[key] = pay;
      S.xp = Object.values(S.awards).reduce((a, b) => a + b, 0);
      return pay;
    },

    displayXP(S){ return others + S.xp; },

    /* home page: course total and per-module summaries */
    async courseProgress(modules){
      const legacy = await legacyXP();
      let total = legacy; const out = {};
      for(const m of modules){
        const s = parse(await get(m.stateKey));
        if(!s) continue;
        const own = (s.v >= 2 && s.awards && typeof s.awards === "object")
          ? Object.values(s.awards).reduce((a, b) => a + Math.max(0, num(b, 0)), 0) : 0;
        total += own;
        const d = Array.isArray(s.done) ? s.done : [];
        out[m.id] = { xp: own, mastered: !!s.masteryPassed, lessonsDown: d.filter(Boolean).length,
                      shelf: (Array.isArray(s.shelf) ? s.shelf : []).filter(w => typeof w === "string"),
                      started: d.some(Boolean) || !!s.resume || num(s.step, 0) > 0 };
      }
      return { totalXP: total, progress: out };
    },

    /* ---------- resume ---------- */
    isQuestion(fn){ return /^\(\)\s*=>\s*render(MC|TF)\(/.test(String(fn)); },
    extras(S){ const o = {}; for(const k in S) if(!ENGINE_KEYS.includes(k)) o[k] = S[k]; return clone(o); },
    restore(S, snap){ if(snap && typeof snap === "object") for(const k in snap) S[k] = clone(snap[k]); },

    /* called by render() just before a screen is drawn */
    checkpoint(S, lessons){
      screen = S.lesson + ":" + S.step; slot = 0;   // every (re)entry of a screen reuses its award slots
      const les = lessons[S.lesson]; if(!les) return;
      const fn = les.steps[S.step];
      if(S.step === 0 && !S.starts[S.lesson]) S.starts[S.lesson] = FL.extras(S);
      const safe = S.step === 0 || (S.lesson < 3 && FL.isQuestion(fn));
      if(safe) S.resume = { lesson: S.lesson, step: S.step, snap: FL.extras(S) };
    },

    startLesson(S, i){
      if(S.starts[i]) FL.restore(S, S.starts[i]);
      S.lesson = i; S.step = 0;
    },

    canResume(S, lessons){
      const r = S.resume; if(!r || !lessons[r.lesson]) return false;
      if(r.step >= lessons[r.lesson].steps.length) return false;
      if(r.lesson === 3 && S.masteryPassed) return false;
      return r.step > 0 || !S.done[r.lesson];
    },

    resume(S){
      const r = S.resume; if(!r) return;
      FL.restore(S, r.snap);
      S.lesson = r.lesson; S.step = r.step;
    },

    resumeCard(S, lessons){
      if(!FL.canResume(S, lessons)) return "";
      const r = S.resume, les = lessons[r.lesson];
      return '<div class="card" style="border:2px solid var(--good,#2e7d5b)">'+
        '<p style="margin:0 0 8px"><strong>Pick up where you left off</strong><br>'+
        '<span class="muted">'+les.title+' · screen '+(r.step+1)+' of '+les.steps.length+'</span></p>'+
        '<button onclick="resumeLesson()">▶ Resume</button>'+
        '<button class="btn-ghost" style="margin-top:8px" onclick="startLesson('+r.lesson+')">Start this lesson over</button></div>';
    },

    lessonDone(S){ S.resume = null; }
  };

  window.FL = FL;
  /* global helper used by the Resume button; S, saveState and render are
     the module's own top-level names */
  window.resumeLesson = function(){ FL.resume(S); saveState(); render(); };
})();
