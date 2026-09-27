"""Connect module HTML files to finlit-core.js (idempotent).

Usage: python3 tools/patch_core.py module-*.html [build/template.html]
Each change asserts it matched exactly once, so a module that doesn't fit
the expected shape fails loudly instead of being half-patched.
"""
import re, sys

MARK = '<script src="finlit-core.js"></script>'

def span_of_function(t, header):
    """Return (start, end) of a top-level function whose text starts with header."""
    i = t.index(header)
    j = t.index("{", i)
    depth = 0
    for k in range(j, len(t)):
        c = t[k]
        if c == "{": depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return i, k + 1
    raise ValueError("unbalanced: " + header)

def replace_function(t, header, new):
    assert t.count(header) == 1, (header, t.count(header))
    a, b = span_of_function(t, header)
    return t[:a] + new + t[b:]

def once(t, old, new):
    assert t.count(old) == 1, (old[:70], t.count(old))
    return t.replace(old, new)

def patch(t, n):
    if MARK in t:
        return t, False
    # 1. load the shared engine before the module's own script
    t = once(t, "<script>\n", MARK + "\n<script>\n")
    # 2. saving and loading go through the engine (no more copying XP between modules)
    t = replace_function(t, "async function loadState(){",
        "async function loadState(){ S = await FL.load(MODULE_N, S); }")
    t = replace_function(t, "async function saveState(){",
        "async function saveState(){ await FL.save(MODULE_N, S); }")
    # 3. XP goes into this module's award ledger; the box shows the course total
    t = replace_function(t, "function addXP(n){",
        'function addXP(n){ FL.award(S, n); document.getElementById("xpBox").textContent = FL.displayXP(S)+" XP"; saveState(); }')
    # 4. every screen entry is a possible resume point
    t = once(t, "  les.steps[S.step]();\n", "  FL.checkpoint(S, LESSONS); saveState();\n  les.steps[S.step]();\n")
    # 5. finishing a lesson clears the resume point
    a, b = span_of_function(t, "function lessonComplete(){")
    body = t[a:b]
    assert body.count("saveState();") == 1, body
    t = t[:a] + body.replace("saveState();", "FL.lessonDone(S); saveState();") + t[b:]
    # 6. choosing a lesson starts it over (restoring its starting state); Resume is separate
    t = once(t, "function startLesson(i){ S.lesson=i; S.step=0; saveState(); render(); }",
                "function startLesson(i){ FL.startLesson(S, i); saveState(); render(); }")
    a, b = span_of_function(t, "function goHome(){")
    body = t[a:b]
    assert body.count("LESSONS.forEach((l,i)=>{") == 1
    body = body.replace("LESSONS.forEach((l,i)=>{", "html+=FL.resumeCard(S, LESSONS);\n  LESSONS.forEach((l,i)=>{")
    body = body.replace(" mastered · '+S.xp+' XP</p>", " mastered · '+S.xp+' XP earned here</p>")
    t = t[:a] + body + t[b:]
    # 7. boot shows the course total
    t = re.sub(r'(document\.getElementById\("xpBox"\)\.textContent\s*=\s*)S\.xp\+" XP"', r'\1FL.displayXP(S)+" XP"', t)
    # module number constant, right after the core script tag's following <script>
    t = once(t, MARK + "\n<script>\n", MARK + "\n<script>\nconst MODULE_N = %s;\n" % n)
    return t, True

if __name__ == "__main__":
    for f in sys.argv[1:]:
        m = re.search(r"module-(\d+)-", f)
        n = m.group(1) if m else "{{N}}"   # the build template fills in {{N}}
        t = open(f, encoding="utf-8").read()
        t2, changed = patch(t, n)
        if changed:
            assert "S.xp = p.xp" not in t2 and "m1.xp" not in t2, f
            open(f, "w", encoding="utf-8").write(t2)
        print(("patched " if changed else "already  ") + f)
