"""Add a Back button to every lesson screen (not on the first step, not in the mastery check).
Applies to src/template.html and the hand-built modules 1-21. Generated modules are rebuilt with build.py."""
import sys,glob,re
SHOW="function show(html){ M.innerHTML='<div class=\"screen on\">'+html+'</div>'; window.scrollTo(0,0); }"
NEWSHOW=("function show(html){ const canBack = S.lesson!==3 && S.step>0;\n"
 "  M.innerHTML='<div class=\"screen on\">'+html+(canBack?'<button type=\"button\" class=\"back-btn\" onclick=\"back()\">← Back</button>':'')+'</div>'; window.scrollTo(0,0); }\n"
 "/* Back: replay the previous step. Steps revisited this way give no extra XP. */\n"
 "const _far = {}; let _replay = false;\n"
 "function back(){ if(S.lesson!==3 && S.step>0){ S.step--; saveState(); render(); } }")
XP="function addXP(n){ FL.award(S, n);"
NEWXP="function addXP(n){ if(_replay) return; FL.award(S, n);"
RENDER="  FL.checkpoint(S, LESSONS); saveState();\n"
NEWRENDER="  { const f=_far[S.lesson]||0; _replay = S.step < f; _far[S.lesson]=Math.max(f, S.step); }\n"+RENDER
CSS="  .back-btn{background:transparent; color:var(--ink); border:2px solid #cfdcd8; margin-top:12px; min-height:44px}\n  .back-btn:hover{border-color:var(--ink)}\n"
def patch(f):
    s=open(f).read()
    if "function back()" in s: return "already"
    for a,b in [(SHOW,NEWSHOW),(XP,NEWXP),(RENDER,NEWRENDER)]:
        assert s.count(a)==1,(f,a[:40]); s=s.replace(a,b)
    i=s.index("</style>"); s=s[:i]+CSS+s[i:]
    open(f,'w').write(s); return "ok"
files=["src/template.html"]+[glob.glob(f"module-{i}-*.html")[0] for i in range(1,22)]
for f in files: print(f, patch(f))
