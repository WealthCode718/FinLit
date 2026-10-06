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

/* =====================================================================
   READ ALOUD — the app reads each lesson screen to the child.
   Uses the browser's built-in voice (Web Speech API): free, no account,
   works offline on most phones. Nothing is sent anywhere.
   - A 🔊 button in the module header turns it on/off (remembered).
   - On by default in Modules 1–11 (young readers), off later on.
   - Reads each new screen, feedback after an answer, a "Tell me more"
     box when opened, and the new-word card. Emoji and buttons are
     skipped, except answer choices, which are read as a list.
===================================================================== */
(function(){ function initReadAloud(){
  const synth = window.speechSynthesis;
  const main = document.getElementById("main");
  const xpBox = document.getElementById("xpBox");
  if(!synth || !window.SpeechSynthesisUtterance || !main || !xpBox) return;   // home page / old browsers
  const KEY = "finlit-read";
  const modN = (typeof MODULE_N !== "undefined") ? MODULE_N : 99;
  function getPref(){ try{ const v = localStorage.getItem(KEY); if(v === "1") return true; if(v === "0") return false; }catch(e){} return modN <= 11; }
  function setPref(on){ try{ localStorage.setItem(KEY, on ? "1" : "0"); }catch(e){} }
  let on = getPref();

  /* ---- voice ---- */
  let voice = null;
  function pickVoice(){
    const vs = synth.getVoices() || [];
    const en = vs.filter(v => /^en(-|_)/i.test(v.lang));
    const prefer = ["Samantha","Google US English","Microsoft Aria","Microsoft Jenny","Karen","Daniel","Moira"];
    voice = prefer.map(n => en.find(v => v.name.indexOf(n) === 0)).find(Boolean)
         || en.find(v => /en(-|_)US/i.test(v.lang) && v.localService) || en.find(v => /en(-|_)US/i.test(v.lang)) || en[0] || null;
  }
  pickVoice(); if(synth.onvoiceschanged !== undefined) synth.onvoiceschanged = pickVoice;

  /* ---- turn a piece of the page into speakable text ---- */
  const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{2300}-\u{23FF}\u{2190}-\u{21FF}\u{25A0}-\u{25FF}\u{FE0F}\u{200D}\u{20E3}]/gu;
  function clean(t){
    return t.replace(EMOJI, " ")
      .replace(/(\d)¢/g, "$1 cents").replace(/¢/g, " cents")
      .replace(/×/g, " times ").replace(/÷/g, " divided by ").replace(/\s=\s?/g, " equals ")
      .replace(/[→⟶➡←⬅]/g, " ").replace(/·/g, ". ").replace(/[“”"]/g, "")
      .replace(/\s+/g, " ").trim();
  }
  function textOf(root, opts){
    const c = root.cloneNode(true);
    c.querySelectorAll(".back-btn, .kicker, script, style, [aria-hidden='true'], .hud").forEach(e => e.remove());
    c.querySelectorAll("details").forEach(d => { if(!(opts && opts.keepDetails)) d.remove(); });
    c.querySelectorAll("summary").forEach(e => e.remove());
    // answer choices become a spoken list; every other button is skipped
    const choices = [];
    c.querySelectorAll("button").forEach(b => {
      if(b.classList.contains("opt") || b.closest(".choice") || b.hasAttribute("data-bot")){
        const t = clean(b.textContent); if(t) choices.push(t);
      }
      b.remove();
    });
    c.querySelectorAll("p.muted").forEach(p => { if(/^\s*\d+\s+of\s+\d+\s*$/.test(p.textContent)) p.remove(); });
    // keep block boundaries as sentence breaks
    c.querySelectorAll("p,div,li,h1,h2,h3,h4,br").forEach(e => e.insertAdjacentText("afterend", ". "));
    let t = clean(c.textContent).replace(/([.!?])(\s*\.)+/g, "$1").replace(/^\.\s*/, "");
    if(choices.length) t += (t ? " " : "") + "Choices: " + choices.join(". ") + ".";
    return t;
  }

  /* ---- speaking (short chunks: some phones cut long ones off) ---- */
  function speak(text){
    if(!on || !text) return;
    synth.cancel();
    const parts = text.match(/[^.!?]+[.!?]*/g) || [text];
    parts.map(s => s.trim()).filter(s => s.length > 1).forEach(s => {
      const u = new SpeechSynthesisUtterance(s);
      if(voice) u.voice = voice;
      u.lang = voice ? voice.lang : "en-US"; u.rate = 0.9; u.pitch = 1.05;
      synth.speak(u);
    });
  }
  function readScreen(){ const s = main.querySelector(".screen"); if(s) speak(textOf(s)); }
  // iPhone/iPad only allow speech after a tap: unlock on the first touch
  let unlocked = false;
  document.addEventListener("pointerdown", function(){
    if(unlocked) return; unlocked = true;
    try{ const u = new SpeechSynthesisUtterance(" "); u.volume = 0; synth.speak(u); }catch(e){}
  }, {capture:true});

  /* ---- header buttons ---- */
  const wrap = document.createElement("div"); wrap.className = "read-wrap";
  wrap.innerHTML = '<button type="button" class="read-again" aria-label="Read this screen again">🔁</button>'+
                   '<button type="button" class="read-btn" aria-pressed="false"></button>';
  const dotsEl = document.getElementById("dots");
  if(dotsEl){ const row = document.createElement("div"); row.className = "read-row";
    dotsEl.parentNode.insertBefore(row, dotsEl); row.appendChild(dotsEl); row.appendChild(wrap); }
  else xpBox.parentNode.insertBefore(wrap, xpBox);
  const btn = wrap.querySelector(".read-btn"), again = wrap.querySelector(".read-again");
  const css = document.createElement("style");
  css.textContent = ".read-row{display:flex; align-items:center; justify-content:space-between; gap:8px; margin-top:6px}"+
    ".read-row .dots{margin:0}"+
    ".read-wrap{display:flex; gap:6px; margin-left:auto; align-items:center}"+
    ".read-wrap button{width:auto; min-height:36px; min-width:44px; padding:4px 10px; border-radius:999px; font-size:14px; font-weight:700;"+
    " background:var(--card,#fff); color:var(--ink,#123a3f); border:2px solid #cfdcd8; white-space:nowrap}"+
    ".read-wrap .read-btn[aria-pressed='true']{background:var(--shell,#c96f4a); border-color:var(--shell,#c96f4a); color:#fff}"+
    ".read-wrap .read-again[hidden]{display:none}";
  document.head.appendChild(css);
  function paint(){
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.textContent = on ? "🔊 On" : "🔈 Read to me";
    btn.setAttribute("aria-label", on ? "Reading aloud is on. Tap to turn it off." : "Read the lesson out loud");
    again.hidden = !on;
  }
  btn.addEventListener("click", function(){
    on = !on; setPref(on); paint();
    if(on) readScreen(); else synth.cancel();
  });
  again.addEventListener("click", readScreen);
  paint();

  /* ---- react to the page changing ---- */
  let lastScreen = null, said = new Set();
  new MutationObserver(function(){
    if(!on) return;
    const s = main.querySelector(".screen");
    if(s && s !== lastScreen){
      lastScreen = s; said = new Set();
      s.querySelectorAll(".feedback, .bubble, #fb2, .chain-beat").forEach(el => said.add(textOf(el)));
      if(!modalOpen()) readScreen();
      return;
    }
    // same screen, new feedback (after an answer or a game step)
    const bits = [];
    main.querySelectorAll(".feedback, .bubble, #fb2, .chain-beat").forEach(el => {
      const t = textOf(el); if(t && !said.has(t)){ said.add(t); bits.push(t); }
    });
    if(bits.length) speak(bits.join(" "));
  }).observe(main, {childList:true, subtree:true});
  main.addEventListener("toggle", function(e){
    const d = e.target; if(on && d.tagName === "DETAILS" && d.open) speak(textOf(d, {keepDetails:true}));
  }, true);
  const wc = document.getElementById("wordCard");
  if(wc) new MutationObserver(function(){ if(on && wc.textContent.trim()) speak("New word. " + textOf(wc)); }).observe(wc, {childList:true});
  const modal = document.getElementById("modal");
  function modalOpen(){ return !!(modal && modal.classList.contains("on")); }
  if(modal){ let was = modalOpen();
    new MutationObserver(function(){ const now = modalOpen(); if(was && !now && on) readScreen(); was = now; })
      .observe(modal, {attributes:true, attributeFilter:["class"]}); }
  window.addEventListener("pagehide", function(){ synth.cancel(); });
}
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", initReadAloud); else setTimeout(initReadAloud, 0);
})();
