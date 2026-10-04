"""Phone-layout review: plays every module at phone width (390px) and flags
screens with sideways scrolling, content spilling off the right edge, or
low-contrast button/label text. Run from the repo root:

    python3 tools/layout_check.py              # all modules
    python3 tools/layout_check.py --only=3,8   # just these
Writes a report to stdout. Exits 0 always (it's a review aid, not a gate).
"""
import functools, socketserver, sys, threading, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import test_all as T
from playwright.sync_api import sync_playwright

PROBE = """()=>{
  const out=[]; const vw=document.documentElement.clientWidth;
  if(document.documentElement.scrollWidth>vw+1) out.push('page scrolls sideways ('+document.documentElement.scrollWidth+'px)');
  const lum=c=>{const m=c.match(/[\\d.]+/g); if(!m) return null; const [r,g,b]=m.slice(0,3).map(v=>{v/=255; return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)}); return {L:.2126*r+.7152*g+.0722*b, a:m.length>3?+m[3]:1};};
  const bgOf=el=>{ for(let e=el;e;e=e.parentElement){ const st=getComputedStyle(e); if(st.backgroundImage.includes('gradient')){ const g=st.backgroundImage.match(/rgba?\\([^)]*\\)/); if(g) return lum(g[0]); } const l=lum(st.backgroundColor); if(l&&l.a>0.5) return l; } return lum('rgb(255,255,255)'); };
  document.querySelectorAll('main *').forEach(el=>{
    const r=el.getBoundingClientRect(); if(!r.width||!r.height) return;
    if(getComputedStyle(el).visibility==='hidden') return;
    if(r.right>vw+2 && !el.closest('.word-row,.words-row')) out.push('spills off right: <'+el.tagName.toLowerCase()+' class="'+el.className+'"> '+(el.textContent||'').trim().slice(0,40));
    const own=[...el.childNodes].some(n=>n.nodeType===3&&n.textContent.trim().length>1);
    if(!own) return;
    const cs=getComputedStyle(el); if(cs.color==='rgba(0, 0, 0, 0)') return;
    if(el.closest('.hide,.hidden')) return;
    const f=lum(cs.color), b=bgOf(el); if(!f||!b) return;
    const ratio=(Math.max(f.L,b.L)+.05)/(Math.min(f.L,b.L)+.05);
    if(ratio<2.6) out.push('low contrast '+ratio.toFixed(1)+': '+el.textContent.trim().slice(0,40));
  });
  return [...new Set(out)].slice(0,6);
}"""

issues = {}
orig_advance = T.advance
def advance(pg, tried):
    try:
        found = pg.evaluate(PROBE)
        if found:
            key = pg.evaluate("[S.lesson+1,S.step+1].join('.')")
            for x in found: issues.setdefault(CUR[0], {}).setdefault(x, key)
    except Exception: pass
    return orig_advance(pg, tried)
T.advance = advance
CUR = [None]

if __name__ == "__main__":
    httpd = socketserver.TCPServer(("127.0.0.1", 0), functools.partial(T.Quiet, directory=T.ROOT))
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    T.URL = f"http://127.0.0.1:{httpd.server_address[1]}/"
    only = next((a.split("=")[1].split(",") for a in sys.argv if a.startswith("--only=")), None)
    with sync_playwright() as p:
        b = p.chromium.launch()
        for f in T.MODULES:
            n = T.num(f)
            if only and str(n) not in only: continue
            CUR[0] = n
            ctx = b.new_context(viewport={"width": 390, "height": 844}); pg = ctx.new_page()
            pg.route("**/api.anthropic.com/**", lambda r: r.abort())
            pg.route("**/fonts.g*/**", lambda r: r.abort())
            pg.goto(T.URL + T.name(f)); pg.wait_for_timeout(150)
            found = pg.evaluate(PROBE)
            for x in found: issues.setdefault(n, {}).setdefault(x, "home")
            for les in range(4): T.play_lesson(pg, les, f"M{n}")
            ctx.close()
            print(f"M{n}: {len(issues.get(n, {}))} issue(s)", flush=True)
        b.close()
    httpd.shutdown()
    print("\n==== REPORT ====")
    for n in sorted(issues):
        for x, where in issues[n].items(): print(f"M{n} [{where}] {x}")
