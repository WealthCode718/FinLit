"""Add the 'Tell me more' helper (more(html) -> <details class="more">) to the template and hand-built modules 2-21."""
import glob
CSS=open('module-1-what-is-money.html').read()
start=CSS.index("  /* optional deeper explanation for kids who want more */"); end=CSS.index("  details.more p{font-size:15px; margin:0 0 10px}\n")+len("  details.more p{font-size:15px; margin:0 0 10px}\n")
CSS=CSS[start:end]
FN="function more(html){ return '<details class=\"more\"><summary>🤔 Tell me more</summary>'+html+'</details>'; }\n"
files=["src/template.html"]+[glob.glob(f"module-{i}-*.html")[0] for i in range(2,22)]
for f in files:
    s=open(f).read()
    if "function more(" in s: print(f,"already"); continue
    i=s.index("</style>"); s=s[:i]+CSS+s[i:]
    assert s.count("function earnWord(k){")==1, f
    s=s.replace("function earnWord(k){", FN+"function earnWord(k){")
    open(f,'w').write(s); print(f,"ok")
