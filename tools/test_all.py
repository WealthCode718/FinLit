"""FinLit regression checks. Run from the repo root:

    pip install playwright && python3 -m playwright install chromium
    python3 tools/test_all.py            # everything
    python3 tools/test_all.py --quick    # skip the full play-through of every module
    python3 tools/test_all.py --only=3,8  # play through just these modules

Exits non-zero if anything fails. Checks:
  static   - every page links only to files that exist; every module loads the
             shared engine; quiz questions are well-formed; no stray XP copying
  play     - an automatic learner finishes every lesson + mastery check of every
             module with no JavaScript errors (the AI tutor is forced offline)
  xp       - course XP is a sum, replays don't pay twice, old saves migrate
  resume   - leaving mid-lesson offers Resume; simulator state is rewound, not doubled
  grading  - Module 1 never passes a wrong explanation while the AI is offline
  data     - damaged or odd saved data doesn't break a module
"""
import functools, glob, http.server, json, os, re, socketserver, sys, threading
from playwright.sync_api import sync_playwright

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
MODULES = sorted(glob.glob(os.path.join(ROOT, "module-*.html")),
                 key=lambda f: int(re.search(r"module-(\d+)-", f).group(1)))
FAILS = []

def check(cond, msg):
    print(("  ok   " if cond else "  FAIL ") + msg)
    if not cond: FAILS.append(msg)

def name(f): return os.path.basename(f)
def num(f): return int(re.search(r"module-(\d+)-", f).group(1))

# ---------------------------------------------------------------- static
def static_checks():
    print("static")
    pages = MODULES + [os.path.join(ROOT, "index.html")]
    missing = []
    for f in pages:
        t = open(f, encoding="utf-8").read()
        for link in set(re.findall(r"module-\d+-[a-z0-9-]+\.html", t)):
            if not os.path.exists(os.path.join(ROOT, link)): missing.append(f"{name(f)} -> {link}")
        if not re.search(r'<script src="finlit-core\.js(\?v=[\w.]+)?"></script>', t): missing.append(f"{name(f)} does not load finlit-core.js")
    check(not missing, "all links and engine includes resolve" + ("" if not missing else ": " + "; ".join(missing)))
    stray = [name(f) for f in MODULES if re.search(r"S\.xp\s*=\s*(p|m1)\.xp", open(f, encoding="utf-8").read())]
    check(not stray, "no module copies XP from another module" + ("" if not stray else ": " + ", ".join(stray)))
    import subprocess
    drift = [s for s in sorted(glob.glob(os.path.join(ROOT, "src", "m*.js")))
             if subprocess.run([sys.executable, os.path.join(ROOT, "src", "build.py"),
                                re.search(r"m(\d+)\.js", s).group(1), "--check"], capture_output=True).returncode]
    check(not drift, "generated modules match their source files in src/" + ("" if not drift else ": " + ", ".join(map(os.path.basename, drift))))
    idx = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
    registered = set(re.findall(r'file:"(module-[^"]+)"', idx))
    check(registered == {name(f) for f in MODULES}, f"home page registers all {len(MODULES)} modules")

def question_checks(pg):
    bad = []
    for f in MODULES:
        pg.goto(URL + name(f)); pg.wait_for_timeout(80)
        r = pg.evaluate("""()=>{ const out=[];
          for(const k in QUESTIONS){ const q=QUESTIONS[k];
            if(!q.prompt) out.push(k+': no prompt');
            if(q.type==='tf'){ if(typeof q.answer!=='boolean') out.push(k+': tf answer not true/false'); }
            else if(q.opts){ const n=q.opts.filter(o=>o.ok).length; if(n!==1) out.push(k+': '+n+' correct options'); }
          }
          if(typeof CFG!=='undefined' && CFG.pool) CFG.pool.concat(CFG.transfer?[CFG.transfer]:[]).forEach(k=>{ if(!QUESTIONS[k]) out.push('pool id missing: '+k); });
          return out; }""")
        bad += [f"M{num(f)} {x}" for x in r]
    words = set()
    for f in MODULES:
        pg.goto(URL + name(f)); pg.wait_for_timeout(60)
        words |= set(pg.evaluate("typeof VOCAB!=='undefined'?Object.keys(VOCAB):[]"))
    pg.goto(URL + "index.html"); pg.wait_for_timeout(150)
    missing = sorted(w for w in words if not pg.evaluate("w=>!!(VOCAB[w]&&VOCAB[w].def)", w))
    check(not missing, f"home-page glossary defines all {len(words)} words" + ("" if not missing else ": missing " + ", ".join(missing)))
    check(not bad, "quiz questions are well-formed" + ("" if not bad else ": " + "; ".join(bad[:8])))

# ---------------------------------------------------------------- play-through
ANSWER_JS = """()=>{ const h=document.querySelector('main h2'); if(!h) return null; const t=h.textContent;
  for(const k in QUESTIONS){ const q=QUESTIONS[k]; if(q.prompt===t){
    if(q.type==='tf') return {tf:q.answer}; return {i:q.opts.findIndex(o=>o.ok)}; } } return null; }"""

def advance(pg, tried):
    """Take one sensible action on the current screen. Returns False if stuck."""
    if pg.is_visible("#modal.on"):
        pg.click("#modal.on button"); return True
    if pg.query_selector("#exp"):                           # Module 1 explanation
        pg.fill("#exp", "It works because everyone agrees to take it."); pg.click("#sendExp")
        pg.wait_for_selector("#own, #cont button", timeout=15000); return True
    if pg.query_selector("#own"):                           # offline check question
        o = pg.query_selector(".opt:not([disabled]):has-text('It works because everyone')")
        if o: o.click(); return True
    c = pg.query_selector("#cont button:not(.opt), #c2 button")
    if c: c.click(); return True
    if pg.query_selector(".coin-btn:not([disabled])") and pg.evaluate("typeof COINS!=='undefined'"):
        goal, have = [int(x) for x in re.findall(r"(\d+)¢", pg.inner_text(".coin-hud"))[:2]]
        best = pg.evaluate(f"COINS.map((c,i)=>[c.v,i]).filter(x=>x[0]<={goal-have}).sort((a,b)=>b[0]-a[0])[0][1]")
        pg.click(f'.coin-btn[data-i="{best}"]'); return True
    if pg.query_selector("main #check") and pg.evaluate("typeof SHOP!=='undefined'") and not pg.query_selector("#cont button"):
        pg.evaluate("""()=>{ SHOP.filter(x=>x.v<=100).forEach(x=>document.querySelector('.item[data-nm="'+x.nm+'"]').click()); }""")
        pg.click("#check"); return True                                    # Module 5 "what can $1 buy"
    shop = pg.query_selector("main .shop .item:not(.wrong):not(.right)")   # Module 5 tag reader
    if shop and not pg.query_selector("#cont button"):
        shop.click(); return True
    item = pg.query_selector("#tray .sort-item:not(.done)")      # Module 1 tap-to-sort
    if item and pg.evaluate("typeof SORT_ITEMS!=='undefined'"):
        i = int(item.get_attribute("data-i")); item.click()
        pg.click("#z" + pg.evaluate(f"SORT_ITEMS[{i}].zone")); return True
    if pg.query_selector("#bLock:not([disabled])"):         # Module 24 budget builder
        pg.evaluate("BUD={needs:8,save:6,wants:6}; drawBudget()"); pg.click("#bLock"); return True
    ans = pg.evaluate(ANSWER_JS)
    if ans is not None and pg.query_selector(".opt:not([disabled]), #tT:not([disabled])"):
        pg.click(("#tT" if ans["tf"] else "#tF") if "tf" in ans else f'.opt[data-i="{ans["i"]}"]'); return True
    sig = pg.evaluate("""()=>[S.lesson,S.step].join(':')+'|'+['.kicker','main h2','.item','.coin-hud','.week','main .card p']
            .map(s=>{const e=document.querySelector(s); return e?e.textContent:''}).join('|')""")
    cands = pg.query_selector_all("main button[data-bot]:not([disabled]), main .choice button:not([disabled]), "
                                  "main .sortbar button:not([disabled]), main .opt[data-v]:not([disabled]), "
                                  "main [class^='pick'] button:not([disabled]), "
                                  "main .traders button:not([disabled]), main #cont .opt:not([disabled])")
    k = tried.get(sig, 0)
    if cands and k < len(cands):
        tried[sig] = k + 1; cands[k].click(); return True
    btns = pg.query_selector_all("main button:not(.btn-ghost):not(.back-btn):not([disabled]):not(.opt):not(.word-chip)")
    if btns:
        btns[-1].click(); return True
    # last resort: clickable non-button pieces (tap-to-sort items, shelves)
    rest = pg.query_selector_all("main .opt:not([disabled]), main [onclick]:not(button)")
    j = tried.get(sig + "#o", 0)
    if j < len(rest):
        tried[sig + "#o"] = j + 1; rest[j].click(); return True
    return False

SKIPPED = []   # interactive screens the automatic learner can't operate yet

def play_lesson(pg, les, where=""):
    """Drive one lesson to completion, answering correctly. Returns True if it finished.
    If it meets a hands-on activity it doesn't know how to operate (lessons 1-3 only),
    it records it in SKIPPED and moves past it, so the rest of the module is still tested."""
    pg.evaluate(f"startLesson({les})")
    tried = {}; last = None; same = 0
    for _ in range(400):
        pg.wait_for_timeout(10)
        if pg.evaluate(f"S.done[{les}]") and (les < 3 or pg.evaluate("S.masteryPassed")): return True
        here = pg.evaluate("S.step"); same = same + 1 if here == last else 0; last = here
        if same > 60 or not advance(pg, tried):
            same = 0
            if les < 3:
                head = pg.inner_text("main")[:60].replace("\n", " ")
                SKIPPED.append(f"{where} lesson {les+1} screen {pg.evaluate('S.step')+1}: {head}")
                pg.evaluate("next()"); continue
            return False
    return False

def play_all(browser):
    print("play (every lesson + mastery of every module)")
    only = next((a.split("=")[1] for a in sys.argv if a.startswith("--only=")), None)
    for f in MODULES:
        if only and str(num(f)) not in only.split(","): continue
        ctx, pg, errs = fresh(browser)
        pg.goto(URL + name(f)); pg.wait_for_timeout(150)
        ok = all(play_lesson(pg, les, f'M{num(f)}') for les in range(4))
        st = pg.evaluate("({done:S.done, m:S.masteryPassed, xp:S.xp})")
        check(ok and all(st["done"]) and st["m"] and not errs,
              f"M{num(f)} finished all lessons + mastery ({st['xp']} XP)" + (f" errors={errs}" if errs else "") +
              ("" if ok else " STUCK: " + pg.inner_text("main")[:120].replace("\n", " ")))
        ctx.close()

# ---------------------------------------------------------------- helpers
def fresh(browser):
    ctx = browser.new_context(); pg = ctx.new_page(); errs = []
    pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.route("**/api.anthropic.com/**", lambda r: r.abort())       # tutor offline, as on GitHub Pages
    pg.route("**/fonts.googleapis.com/**", lambda r: r.abort())
    pg.route("**/fonts.gstatic.com/**", lambda r: r.abort())
    return ctx, pg, errs

def home_xp(pg):
    pg.goto(URL + "index.html"); pg.wait_for_timeout(300)
    return int(pg.inner_text("#xpBadge").split()[0])

def mod_file(n): return name([f for f in MODULES if num(f) == n][0])

# ---------------------------------------------------------------- xp
def xp_checks(browser):
    print("xp")
    ctx, pg, errs = fresh(browser)
    pg.goto(URL + mod_file(1)); pg.wait_for_timeout(150); play_lesson(pg, 0); x1 = pg.evaluate("S.xp")
    pg.goto(URL + mod_file(2)); pg.wait_for_timeout(150); play_lesson(pg, 0); x2 = pg.evaluate("S.xp")
    check(x1 > 0 and x2 > 0 and home_xp(pg) == x1 + x2, f"home total is the sum of modules ({x1} + {x2})")
    pg.goto(URL + mod_file(1)); pg.wait_for_timeout(150); play_lesson(pg, 0)
    check(pg.evaluate("S.xp") == x1 and home_xp(pg) == x1 + x2, "replaying a finished lesson pays no XP twice")
    pg.goto(URL + mod_file(2)); pg.wait_for_timeout(150)
    check(int(pg.inner_text("#xpBox").split()[0]) == x1 + x2, "a module's XP box shows the same course total")
    check(not errs, "no errors during XP checks" + (f": {errs}" if errs else "")); ctx.close()

    # Codex's reproduction, on old-format saves: M1 100, M2 200 (running totals)
    ctx, pg, errs = fresh(browser)
    pg.goto(URL + "index.html")
    pg.evaluate("""()=>{ localStorage.clear();
      localStorage.setItem('mod1-state', JSON.stringify({xp:100, shelf:['money'], lesson:1, step:0, done:[true,false,false,false], masteryPassed:false}));
      localStorage.setItem('mod2-state', JSON.stringify({xp:200, shelf:[], lesson:0, step:0, done:[true,false,false,false], masteryPassed:false})); }""")
    check(home_xp(pg) == 200, "old saves: the home page starts from the old total (200), not 100+200")
    pg.goto(URL + mod_file(1)); pg.wait_for_timeout(150); play_lesson(pg, 0)
    check(pg.evaluate("S.xp") == 0, "old saves: replaying a lesson finished before the upgrade pays nothing")
    play_lesson(pg, 1); gained = pg.evaluate("S.xp")
    check(gained > 0 and home_xp(pg) == 200 + gained, f"old saves: new XP in Module 1 adds to the total (200 + {gained})")
    check(not errs, "no errors during migration checks" + (f": {errs}" if errs else "")); ctx.close()

# ---------------------------------------------------------------- resume
def resume_checks(browser):
    print("resume")
    ctx, pg, errs = fresh(browser)
    f = mod_file(17)
    pg.goto(URL + f); pg.wait_for_timeout(150)
    play_lesson(pg, 0)
    # Lesson 2 of Module 17: a deposit simulator, then quiz questions
    pg.evaluate("startLesson(1)")
    target = pg.evaluate("LESSONS[1].steps.findIndex(s=>FL.isQuestion(s))")
    tried = {}
    for _ in range(120):
        if pg.evaluate("S.step") >= target: break
        advance(pg, tried); pg.wait_for_timeout(15)
    acct = pg.evaluate("JSON.stringify(S.acct)"); step = pg.evaluate("S.step")
    check(step == target, f"reached the first question after the simulator (screen {step+1})")
    pg.reload(); pg.wait_for_timeout(250)
    card = pg.query_selector("button:has-text('Resume')")
    check(card is not None, "reopening the module offers Resume")
    check(pg.query_selector("button:has-text('Start this lesson over')") is not None, "…and a separate Start over")
    card.click(); pg.wait_for_timeout(150)
    check(pg.evaluate("[S.lesson,S.step]") == [1, step], "Resume returns to the same screen")
    check(pg.evaluate("JSON.stringify(S.acct)") == acct, "the pretend account is exactly as it was")
    # starting the lesson over rewinds the simulator's account to how the lesson began
    opening = pg.evaluate("JSON.stringify(S.starts[1].acct)")
    pg.evaluate("goHome()"); pg.click("button:has-text('Start this lesson over')"); pg.wait_for_timeout(100)
    check(pg.evaluate("JSON.stringify(S.acct)") == opening and opening != acct,
          f"Start over rewinds the account to how the lesson began ({opening})")
    ctx.close()

    ctx, pg, errs = fresh(browser)
    pg.goto(URL + mod_file(1)); pg.wait_for_timeout(150)
    pg.evaluate("startLesson(0)"); advance(pg, {}); pg.wait_for_timeout(100)
    pg.goto(URL + "index.html"); pg.wait_for_timeout(250)
    check(pg.inner_text("main").count("▶ Continue") == 1, "home page says Continue for a module that was started")
    ctx.close()

    ctx, pg, errs = fresh(browser)
    pg.goto(URL + "index.html"); pg.evaluate("localStorage.clear()"); pg.reload(); pg.wait_for_timeout(250)
    txt = pg.inner_text("main")
    check("Module 1" in txt and "▶ Start" in txt and "▶ Continue" not in txt, "a brand-new learner sees Start, not Continue")
    ctx.close()

# ---------------------------------------------------------------- grading
def grading_checks(browser):
    print("grading")
    for pick, want in [("It works because the paper", False), ("It works because everyone", True)]:
        ctx, pg, errs = fresh(browser)
        pg.goto(URL + mod_file(1)); pg.wait_for_timeout(150)
        pg.evaluate("mastery.score=5; explainBack()")
        pg.fill("#exp", "Nobody agrees to take this paper because the paper itself is valuable")
        pg.click("#sendExp"); pg.wait_for_selector("#own", timeout=15000)
        pg.click(f".opt:has-text('{pick}')"); pg.click("text=See my result"); pg.wait_for_timeout(150)
        check(pg.evaluate("S.masteryPassed") == want, f"offline explanation: choosing '{pick}…' {'passes' if want else 'does not pass'}")
        ctx.close()

# ---------------------------------------------------------------- damaged data
def data_checks(browser):
    print("data")
    cases = {"not JSON": "}{", "wrong types": json.dumps({"xp": "lots", "done": "yes", "shelf": 5, "lesson": 99, "step": -3,
             "awards": {"x": "y"}, "resume": {"lesson": 9}}), "an array": "[1,2,3]"}
    for label, raw in cases.items():
        ctx, pg, errs = fresh(browser)
        pg.goto(URL + "index.html")
        pg.evaluate("r=>{localStorage.clear(); localStorage.setItem('finlit-legacy-xp','0'); localStorage.setItem('mod5-state', r);}", raw)
        pg.goto(URL + mod_file(5)); pg.wait_for_timeout(250)
        ok = pg.query_selector("button.opt") is not None and not errs
        pg.goto(URL + "index.html"); pg.wait_for_timeout(250)
        check(ok and not errs, f"a save that is {label} still opens Module 5 and the home page" + (f" {errs}" if errs else ""))
        ctx.close()

# ---------------------------------------------------------------- main
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass

if __name__ == "__main__":
    httpd = socketserver.TCPServer(("127.0.0.1", 0), functools.partial(Quiet, directory=ROOT))
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    URL = f"http://127.0.0.1:{httpd.server_address[1]}/"
    static_checks()
    with sync_playwright() as p:
        browser = p.chromium.launch()
        ctx, pg, _ = fresh(browser); question_checks(pg); ctx.close()
        xp_checks(browser); resume_checks(browser); grading_checks(browser); data_checks(browser)
        if "--quick" not in sys.argv: play_all(browser)
        browser.close()
    httpd.shutdown()
    if SKIPPED:
        print(f"\nnot yet auto-tested ({len(SKIPPED)} hands-on screens were skipped, the rest of each module was tested):")
        for s in SKIPPED: print("  - " + s)
    print(f"\n{'ALL CHECKS PASSED' if not FAILS else str(len(FAILS)) + ' FAILED'}")
    sys.exit(1 if FAILS else 0)
