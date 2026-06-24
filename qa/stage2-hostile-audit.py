"""Stage 2: Hostile Browser Audit — cloakbrowser (stealth Chromium)"""

import os, json, textwrap, re, pathlib
from datetime import datetime

import cloakbrowser
from cloakbrowser import human
from playwright.sync_api import Page

BASE = "https://olikit.com"
OUT = pathlib.Path("qa/HOSTILE_BROWSER_REPORT.md")
SCREENSHOTS = pathlib.Path("qa/screenshots")
SCREENSHOTS.mkdir(exist_ok=True)

PAGES = [
    ("/", "Homepage"),
    ("/us", "US Hub"),
    ("/software-engineer", "Profession: Software Engineer"),
    ("/data-scientist", "Profession: Data Scientist"),
    ("/us/salary/software-engineer", "US Salary: Software Engineer"),
    ("/comparisons/software-engineer-us-vs-uk", "Comparison: US vs UK"),
    ("/us/tools/salary-calculator", "Calculator: Salary"),
    ("/us/tools/tax-calculator", "Calculator: Tax"),
    ("/about", "About"),
    ("/methodology", "Methodology"),
    ("/contact", "Contact"),
    ("/rankings", "Rankings"),
]

MOBILE_WIDTHS = [375, 390, 414, 768]

class AuditIssue:
    def __init__(self, severity, page, category, detail):
        self.severity = severity  # critical, high, medium, low
        self.page = page
        self.category = category
        self.detail = detail

issues = []

def check(page: Page, path: str, label: str):
    url = BASE + path
    page.goto(url, wait_until="networkidle", timeout=15000)
    page.wait_for_timeout(2000)

    title = page.title()
    body_text = page.inner_text("body")
    html = page.content()

    # Check for template leaks in visible text
    for token in ["{country}", "${locale.name}", "NaN"]:
        if token in body_text:
            issues.append(AuditIssue("critical", label, "Template leak", f'"{token}" found in visible text'))

    # Check for broken images
    imgs = page.query_selector_all("img")
    for img in imgs:
        src = img.get_attribute("src") or ""
        if not img.get_attribute("alt"):
            issues.append(AuditIssue("medium", label, "Missing alt", f"img src={src[:60]}"))

    # Check for empty sections
    h2s = page.query_selector_all("h2")
    for h2 in h2s:
        if not h2.inner_text().strip():
            issues.append(AuditIssue("high", label, "Empty H2", "H2 tag with no text"))

    # Check for placeholder text
    for p in ["placeholder", "lorem ipsum", "coming soon"]:
        if p in body_text.lower():
            issues.append(AuditIssue("high", label, "Placeholder", f'Found "{p}" in visible text'))

    # Check for weak copy / AI fingerprints
    for phrase in ["as an AI", "I cannot", "I am unable", "I don't have access"]:
        if phrase in body_text.lower():
            issues.append(AuditIssue("critical", label, "AI fingerprint", f'Found "{phrase}"'))

    # Check for contact info on trust pages
    if path in ["/contact"]:
        if not re.search(r"team@|hello@|support@|contact@|slack|discord", body_text, re.I):
            issues.append(AuditIssue("high", label, "Missing contact method", "No email or chat link found"))

    # Check for broken links
    links = page.query_selector_all("a[href]")
    for a in links[:50]:
        href = a.get_attribute("href") or ""
        if href.startswith("/") and "#" not in href and "?" not in href:
            clean = re.sub(r"/$", "", href)
            if clean and clean != path and not clean.startswith("//"):
                if clean.startswith("/_"):
                    continue
                issues.append(AuditIssue("low", label, "Unchecked link", f"{clean} (not verified)"))

    # Mobile viewport checks
    for width in MOBILE_WIDTHS:
        page.set_viewport_size({"width": width, "height": 812})
        page.wait_for_timeout(1000)
        overflow = page.evaluate("document.body.scrollWidth > window.innerWidth")
        if overflow and width <= 414:
            issues.append(AuditIssue("high", label, f"Mobile overflow at {width}px", "Horizontal scroll detected"))

    # Screenshot at desktop
    page.set_viewport_size({"width": 1280, "height": 800})
    page.wait_for_timeout(500)
    safe = re.sub(r"[^a-z0-9]+", "-", path.lower()).strip("-") or "root"
    page.screenshot(path=str(SCREENSHOTS / f"{safe}.png"))

    print(f"  [{label}] {title[:80]}")

def run():
    print("=== Stage 2: Hostile Browser Audit ===")
    browser = cloakbrowser.launch(headless=True, humanize=True)
    ctx = browser.new_context(
        viewport={"width": 1280, "height": 800},
        user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
    )
    page = ctx.new_page()

    for path, label in PAGES:
        try:
            check(page, path, label)
        except Exception as e:
            issues.append(AuditIssue("critical", label, "Page error", str(e)[:200]))
            print(f"  [FAIL] {label}: {e}")

    # Generate report
    lines = [
        "# Stage 2: Hostile Browser Audit Report",
        "",
        f"**Target:** {BASE}",
        f"**Pages audited:** {len(PAGES)}",
        f"**Issues found:** {len(issues)}",
        f"**Date:** {datetime.now().strftime('%Y-%m-%d')}",
        "",
        "---",
        "",
    ]

    by_sev = {}
    for i in issues:
        by_sev.setdefault(i.severity, []).append(i)

    for sev in ["critical", "high", "medium", "low"]:
        if sev in by_sev:
            lines.append(f"## {sev.upper()} ({len(by_sev[sev])})")
            lines.append("")
            for i in by_sev[sev]:
                lines.append(f"- **{i.page}**: {i.category} — {i.detail}")
            lines.append("")

    if not issues:
        lines.append("**No issues detected.**")

    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## Screenshots")
    lines.append("")
    for p in sorted(SCREENSHOTS.glob("*.png")):
        lines.append(f"![{p.stem}](screenshots/{p.name})")

    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"\nReport: {OUT} ({len(issues)} issues)")
    browser.close()

if __name__ == "__main__":
    run()
