# FinLit

A financial-literacy course told as one continuous story: Kai, a kid on an island, learns money from "what is money" through banking, credit, earning, taxes, and insurance.

Live site: https://wealthcode718.github.io/FinLit/

## How it's built

- **`index.html`**: the home page. It lists every module in the `MODULES` registry, shows progress, and unlocks modules in order.
- **`module-N-*.html`**: one self-contained page per module. Each module has three lessons and a mastery check.
- **`finlit-core.js`**: the shared engine every page loads. It handles saving and loading progress, XP, and Resume. The top of the file explains the rules.
- **`tools/test_all.py`**: the regression checks (see below).
- **`src/`**: the source files for Modules 22 onward, plus the page template. To change one of those modules, edit `src/mN.js` and run `python3 src/build.py N`. Don't edit the generated page directly; the checks catch a page that no longer matches its source. Modules 1–21 were hand-built and have no source file.
- **`tools/patch_core.py`**: connects a module page to the shared engine. It has already been applied to every module.

Progress is saved in the learner's browser (localStorage). Nothing is sent to a server.

### Progress rules

- **XP:**
  - Each module records the XP earned in that module.
  - The course total adds them up.
  - Each activity pays out at most once, so replaying a lesson never pays twice. A learner can still earn points they missed the first time.
- **Old saves:** the first time a browser runs the current engine, its old running total becomes a one-time starting balance. Lessons already finished before the upgrade don't pay again if replayed.
- **Resume:**
  - Leaving mid-lesson offers a separate "Resume" and "Start this lesson over".
  - Resume returns to the last safe point: the start of the lesson, or its last quiz question. Any simulator state, such as the pretend bank account, is put back exactly as it was at that point.
  - Starting over restores the state the lesson began with.

### Curriculum rules

- **Vocabulary gating:** a module only uses words unlocked by earlier modules. Each tutor prompt lists the forbidden later words.
- **Concept over computation:** questions test *why* and *whether*, not arithmetic. The exception is modules where the math is the concept.
- **Show-then-name:** an idea is shown in one module and named in a later one.

## Checks

```
pip install playwright
python3 -m playwright install chromium
python3 tools/test_all.py          # full run (about 20 minutes)
python3 tools/test_all.py --quick  # everything except the full play-through
```

The checks cover:

- links between modules and the home page
- well-formed quiz questions
- XP adding up correctly, with no double payment and correct migration of old saves
- Resume and start-over
- Module 1 never passing a wrong explanation while the AI is offline
- damaged saved data not breaking any page
- an automatic learner finishing every lesson and mastery check of every module

GitHub runs the same checks on every push (`.github/workflows/checks.yml`). A red ✗ next to a commit means a check failed; click it to see which one.

## Known limitations

- **AI tutor:** it can't work on GitHub Pages, because the page has no safe place for an API key. The lessons and quizzes work without it. Connecting the tutor needs a small server, which is planned with the move to Netlify.
- **Duplicated styling:** each module still carries its own copy of the page styles and question screens. Only the progress engine is shared so far.
