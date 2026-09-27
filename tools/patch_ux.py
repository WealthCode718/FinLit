"""Apply the island UX polish (first done by Cursor on Modules 1-19) to a module page
or the build template. Idempotent. Usage: python3 tools/patch_ux.py FILE...

Adds: a "← Modules / Lessons" bar at the top, 44px tap targets, visible focus
rings, no sideways scrolling on phones, reduced-motion-friendly scrolling, and
a "← previous module" button on the module's home screen.
"""
import re, subprocess, sys

MARK = "/* Shared island UX"

def css():
    t = subprocess.run(["git", "show", "5c5e98a:module-7-subtracting-money.html"],
                       capture_output=True, text=True, check=True).stdout
    return t[t.index("\n  " + MARK):t.index("\n</style>")]

def once(t, a, b):
    assert t.count(a) == 1, (a[:60], t.count(a)); return t.replace(a, b)

def patch(t, prev_link, prev_n):
    if MARK in t: return t, False
    t = once(t, "--good:#2e7d5b; --bad:#a94436;", "--good:#2e7d5b; --bad:#a94436; --locked:#3d6166;")
    t = re.sub(r"<title>(?!FinLit)", "<title>FinLit — ", t, count=1)
    t = once(t, "\n</style>", CSS + "\n</style>")
    t = once(t, '      <div class="dots" id="dots"></div>\n      <div class="xp" id="xpBox">0 XP</div>\n    </div>\n',
             '      <div class="hrow-nav">\n        <a class="back-hub" href="index.html">← Modules</a>\n'
             '        <button type="button" class="back-lessons" onclick="goHome()">Lessons</button>\n      </div>\n'
             '      <div class="xp" id="xpBox">0 XP</div>\n    </div>\n'
             '    <div class="dots" id="dots" aria-label="Lesson progress"></div>\n')
    t = once(t, 'const d=document.getElementById("dots"); d.innerHTML="";',
                'const d=document.getElementById("dots"); if(!d) return; d.innerHTML="";')
    rm = '(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)?"auto":"smooth"'
    t = once(t, 'scrollIntoView({behavior:"smooth", block:"nearest"})', 'scrollIntoView({behavior:' + rm + ', block:"nearest"})')
    t = once(t, 'd.scrollIntoView({behavior:"smooth"}); }', 'd.scrollIntoView({behavior:' + rm + '}); }')
    back = "  html+='<button class=\"btn-ghost\" style=\"margin-top:14px\" onclick=\"window.location.href=\\'index.html\\'\">🗺️ Back to all modules</button>';"
    t = once(t, back,
        "  html+='<button class=\"btn-ghost\" style=\"margin-top:14px\" onclick=\"window.location.href=\\'" + prev_link + "\\'\">← Module " + prev_n + "</button>';\n"
        "  html+='<button class=\"btn-ghost\" style=\"margin-top:10px\" onclick=\"window.location.href=\\'index.html\\'\">🗺️ Back to all modules</button>';")
    return t, True

if __name__ == "__main__":
    CSS = css()
    idx = open("index.html", encoding="utf-8").read()
    files = dict((int(n), f) for f, n in re.findall(r'file:"(module-(\d+)-[^"]+)"', idx))
    for f in sys.argv[1:]:
        m = re.search(r"module-(\d+)-", f)
        if m:
            n = int(m.group(1)); prev_link, prev_n = files[n - 1], str(n - 1)
        else:  # build template: filled in per module by src/build.py
            prev_link, prev_n = "{{PREV_FILE}}", "{{PREV}}"
        t = open(f, encoding="utf-8").read()
        t2, changed = patch(t, prev_link, prev_n)
        if changed: open(f, "w", encoding="utf-8").write(t2)
        print(("patched " if changed else "already  ") + f)
