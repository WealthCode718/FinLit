"""Record the read-aloud sentences with a studio voice (smallest.ai Lightning v3.1 Pro).

  python3 tools/voice_make.py --key-file=PATH [--only=1,2] [--voice=chelsea] [--dry-run]

Reads audio/sentences.json (from tools/voice_collect.py). For each module N writes
audio/c/<id>.mp3 (small 40 kbps mono files, shared by all modules) and audio/mN.json, the list of ids the
app may play. Already-recorded sentences are skipped, so it is safe to re-run after
editing lessons: only new or changed sentences are recorded (and paid for).
The API key is read from a file and never printed or saved in the repo.
"""
import json, os, subprocess, sys, tempfile, time, urllib.request, concurrent.futures as cf

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
API = "https://api.smallest.ai/waves/v1/tts"

def clip_id(sentence):
    """Same as clipId() in finlit-core.js: FNV-1a over UTF-16 code units of the normalized text."""
    n = " ".join(sentence.split()).strip().lower()
    h = 0x811c9dc5
    b = n.encode("utf-16-le")
    for i in range(0, len(b), 2):
        h ^= b[i] | (b[i+1] << 8)
        h = (h * 0x01000193) & 0xffffffff
    return f"{h:08x}"

def tts(key, voice, text, out):
    body = json.dumps({"text": text, "voice_id": voice, "model": "lightning_v3.1_pro",
                       "sample_rate": 24000, "output_format": "mp3"}).encode()
    for attempt in range(5):
        req = urllib.request.Request(API, data=body, headers={"Authorization": "Bearer " + key,
                                     "Content-Type": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=90) as r:
                raw = r.read()
            with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as t:
                t.write(raw); tmp = t.name
            subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", tmp, "-ac", "1", "-ar", "24000",
                            "-b:a", "40k", out], check=True)
            os.unlink(tmp); return len(text)
        except urllib.error.HTTPError as e:
            msg = e.read()[:300].decode("utf-8", "replace")
            if e.code in (429, 500, 502, 503, 504): time.sleep(2 * (attempt + 1)); continue
            raise RuntimeError(f"HTTP {e.code}: {msg}")
        except Exception:
            if attempt == 4: raise
            time.sleep(2 * (attempt + 1))
    raise RuntimeError("gave up")

def main():
    arg = lambda k, d=None: next((a.split("=", 1)[1] for a in sys.argv if a.startswith(f"--{k}=")), d)
    voice = arg("voice", "chelsea"); only = arg("only"); dry = "--dry-run" in sys.argv
    key = open(arg("key-file")).read().strip() if not dry else ""
    allm = json.load(open(os.path.join(ROOT, "audio", "sentences.json")))
    todo = []
    for n, sents in sorted(allm.items(), key=lambda kv: int(kv[0])):
        if only and n not in only.split(","): continue
        d = os.path.join(ROOT, "audio", "c"); os.makedirs(d, exist_ok=True)
        for s in sents:
            out = os.path.join(d, clip_id(s) + ".mp3")
            if not os.path.exists(out) and out not in {t[2] for t in todo}: todo.append((n, s, out))
    print(f"{len(todo)} new clips, {sum(len(s) for _, s, _ in todo)} characters to record")
    if dry: return
    done = 0; chars = 0
    with cf.ThreadPoolExecutor(4) as ex:
        futs = {ex.submit(tts, key, voice, s, out): (n, s) for n, s, out in todo}
        for f in cf.as_completed(futs):
            n, s = futs[f]
            try: chars += f.result(); done += 1
            except Exception as e:
                print(f"M{n} FAILED: {s[:50]!r}: {e}")
                if "401" in str(e) or "402" in str(e) or "403" in str(e): ex.shutdown(cancel_futures=True); break
            if done % 50 == 0: print(f"  {done}/{len(todo)} clips")
    # manifests: only ids that really have an audio file
    for n, sents in allm.items():
        d = os.path.join(ROOT, "audio", "c")
        ids = sorted({clip_id(s) for s in sents if os.path.exists(os.path.join(d, clip_id(s) + ".mp3"))})
        json.dump(ids, open(os.path.join(ROOT, "audio", f"m{n}.json"), "w"))
    print(f"recorded {done} clips ({chars} characters)")

if __name__ == "__main__":
    main()
