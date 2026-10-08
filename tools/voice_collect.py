"""List every sentence the read-aloud feature can say, per module, so they can be
recorded once with a studio voice (tools/voice_make.py).

  python3 tools/voice_collect.py            # all modules -> audio/sentences.json
  python3 tools/voice_collect.py --only=1,2

How: each module is played start to finish by the test bot with read-aloud on
(the device voice is mocked, so every sentence it would say is captured). Then
every text string in the module (quiz feedback for wrong answers, Tell me more
boxes, game messages) is run through the same text cleaning in the browser, so
the sentence ids match exactly what the app looks up at run time.
"""
import functools, http.server, json, os, re, socketserver, sys, threading
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import test_all as T
from playwright.sync_api import sync_playwright

MOCK = """
window.__said = [];
class U{ constructor(t){ this.text = t; setTimeout(()=>{ this.onend && this.onend(); }, 0); } }
window.SpeechSynthesisUtterance = U;
Object.defineProperty(window, 'speechSynthesis', {value:{
  speak: u => { if(u.text && u.text.trim()) window.__said.push(u.text); },
  cancel: ()=>{}, getVoices: ()=>[], onvoiceschanged: null }});
try{ localStorage.setItem('finlit-read','1'); }catch(e){}
"""
STATIC_JS = """(strs)=>{
  const out = new Set();
  const box = document.createElement('div');
  // textOf lives inside the read-aloud closure; rebuild the same cleaning via a hidden screen
  for(const s of strs){
    box.innerHTML = s;
    const t = FL.readAloud.textOf(box);
    for(const x of FL.readAloud.sentences(t)) out.add(x);
  }
  return [...out];
}"""

def literals(src):
    i = src.find("const QUESTIONS"); j = src.rfind("const LESSONS=[")
    body = src[i:j] if i >= 0 and j > i else src
    out = []
    for a, b in re.findall(r"'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\"", body):
        s = (a or b).replace("\\'", "'").replace('\\"', '"')
        txt = re.sub(r"<[^>]+>", " ", s)
        if len(re.findall(r"[A-Za-z]{2,}", txt)) < 3: continue           # code bits, ids, class names
        if re.search(r"[{}();=]|\.opt|querySelector|function|=>", s): continue
        out.append(s)
    return out

def main():
    only = next((a.split("=")[1].split(",") for a in sys.argv if a.startswith("--only=")), None)
    httpd = socketserver.TCPServer(("127.0.0.1", 0), functools.partial(T.Quiet, directory=T.ROOT))
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    T.URL = f"http://127.0.0.1:{httpd.server_address[1]}/"
    path = os.path.join(T.ROOT, "audio", "sentences.json")
    allm = json.load(open(path)) if os.path.exists(path) else {}
    with sync_playwright() as p:
        b = p.chromium.launch()
        for f in T.MODULES:
            n = T.num(f)
            if only and str(n) not in only: continue
            ctx, pg, errs = T.fresh(b)
            pg.add_init_script(MOCK)
            pg.route("**/audio/**", lambda r: r.abort())   # ignore existing recordings: capture every sentence
            pg.goto(T.URL + T.name(f)); pg.wait_for_timeout(200)
            for les in range(4): T.play_lesson(pg, les, f"M{n}")
            # open every Tell me more box that the bot passed is not guaranteed; static pass covers them
            said = pg.evaluate("window.__said")
            sents = set()
            for t in said:
                for x in pg.evaluate("t=>FL.readAloud.sentences(t)", t): sents.add(x)
            src = open(f, encoding="utf-8").read()
            sents |= set(pg.evaluate(STATIC_JS, literals(src)))
            sents = {x for x in sents if re.search(r'[A-Za-z]{2,}|\d', x) and not re.search(r'[{}<>]|\.length|\+\w|\w\+', x)}
            allm[str(n)] = sorted(sents)
            print(f"M{n}: {len(sents)} sentences, {sum(len(s) for s in sents)} chars" + (f" errors={errs}" if errs else ""))
            ctx.close()
        b.close()
    os.makedirs(os.path.dirname(path), exist_ok=True)
    json.dump(allm, open(path, "w"), indent=0, ensure_ascii=False)
    tot = sum(len(s) for v in allm.values() for s in v)
    print(f"TOTAL {sum(len(v) for v in allm.values())} sentences, {tot} characters")

if __name__ == "__main__":
    main()
