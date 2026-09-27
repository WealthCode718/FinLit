"""Build a module page from its source file.

Usage (from the repo root):  python3 src/build.py 34
       python3 src/build.py 34 --check   (only report whether the page matches its source)
Reads src/m34.js + src/template.html and writes the module page to the repo root.
Source file sections: //@@META (title, file, placeholder), //@@CSS, //@@CONTENT
(vocab, questions, CFG, tutor prompt), //@@LESSONS (the lesson screens).
Modules 1-21 were hand-built before this system and have no source file.
"""
import os, re, sys
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
n = int(sys.argv[1]); src = open(os.path.join(HERE, f"m{n}.js"), encoding="utf-8").read()
parts = dict(re.findall(r"//@@(\w+)\n(.*?)(?=\n//@@|\Z)", src, re.S))
meta = dict(re.findall(r"^(\w+)=(.*)$", parts["META"], re.M))
t = open(os.path.join(HERE, "template.html"), encoding="utf-8").read()
idx = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
prev_file = dict((int(k), v) for v, k in re.findall(r'file:"(module-(\d+)-[^"]+)"', idx))[n - 1]
for k, v in {"{{TITLE}}": meta["title"], "{{N}}": str(n), "{{PREV}}": str(n - 1), "{{PREV_FILE}}": prev_file, "{{PLACEHOLDER}}": meta["placeholder"],
             "{{EXTRA_CSS}}": parts.get("CSS", ""), "{{CONTENT}}": parts["CONTENT"], "{{LESSONS}}": parts["LESSONS"]}.items():
    t = t.replace(k, v)
assert "{{" not in t
out = os.path.join(ROOT, meta["file"])
if "--check" in sys.argv:
    same = os.path.exists(out) and open(out, encoding="utf-8").read() == t
    print(("matches source: " if same else "DIFFERS from source: ") + meta["file"]); sys.exit(0 if same else 1)
open(out, "w", encoding="utf-8").write(t)
print("wrote", meta["file"], len(t.splitlines()), "lines")
