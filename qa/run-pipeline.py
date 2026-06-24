"""Olikit Quality Mesh Pipeline runner.
Usage: python qa/run-pipeline.py [--skip-semgrep] [--skip-playwright] [--skip-linkinator] [--skip-lighthouse] [--skip-crawl]
"""
import subprocess, sys, os, argparse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

STEPS = []

def step(name, cmd, shell=False):
    STEPS.append((name, cmd, shell))

step("Semgrep Static Analysis", ["semgrep", "--config=.semgrep.yaml", "--error", "--output=qa/SEMGREP_REPORT.md", "src/"])
step("Playwright Smoke Test", ["npx.cmd", "playwright", "test", "--config=qa/playwright.config.ts"])
step("Linkinator Link Check", ["npx.cmd", "linkinator", "http://localhost:3456", "--config", "qa/linkinator.config.json"])
step("Lighthouse CI Audit", ["npx.cmd", "lhci", "autorun", "--config=qa/lighthouserc.json"])
step("Crawlee Site Crawl", ["node", "qa/crawl.mjs"])

def run():
    parser = argparse.ArgumentParser()
    for name, _, _ in STEPS:
        key = name.lower().replace(" ", "_").replace("-", "_")
        parser.add_argument(f"--skip-{key}", action="store_true")
    args = parser.parse_args()

    failed = False
    for name, cmd, shell in STEPS:
        key = name.lower().replace(" ", "_").replace("-", "_")
        if getattr(args, f"skip_{key}", False):
            print(f"[SKIP] {name}")
            continue
        print(f"\n{'='*50}")
        print(f"  {name}")
        print(f"{'='*50}")
        r = subprocess.run(cmd, shell=shell)
        if r.returncode == 0:
            print(f"\n  [PASS] {name}")
        else:
            print(f"\n  [FAIL] {name} (exit {r.returncode})")
            failed = True

    print(f"\n{'='*50}")
    if failed:
        print("  PIPELINE FAILED")
        sys.exit(1)
    else:
        print("  PIPELINE PASSED")

if __name__ == "__main__":
    run()
