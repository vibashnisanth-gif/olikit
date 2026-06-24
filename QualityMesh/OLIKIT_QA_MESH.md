# OLIKIT QUALITY ASSURANCE MESH (LOCKED)

You are setting up a permanent pre-production quality system for Olikit.

This is not a feature.

This is infrastructure.

The objective is to prevent SEV-1 trust failures forever.

Every PR, every commit, every deployment must pass through this mesh.

────────────────────────

# PLAYWRIGHT

Repository:

microsoft/playwright

Role:

Runtime truth.

Owns:

Template leaks

Wrong calculations

Broken routes

Missing sections

Broken schema

Empty tables

Interactive tools

Requirements:

Random page sampling.

100-page smoke test.

Assertions:

No "{country}"

No "${locale.name}"

No undefined

No NaN

No placeholder text

No empty H2 sections

Comparison math must match expected values.

Salary calculations must remain correct.

Generate:

PLAYWRIGHT_REPORT.md

Deployment blocked on failures.

────────────────────────

# BROWSER-USE

Repository:

browser-use/browser-use

Role:

Human reviewer simulation.

Act as:

Google AdSense reviewer

Skeptical user

Competitor analyst

Mobile user

Tasks:

Browse naturally.

Inspect random pages.

Look for:

Boilerplate

AI fingerprints

Broken UX

Weak trust

Poor navigation

Misleading tools

Confusing language

Visual bugs

Dead ends

Output:

HOSTILE_BROWSER_AUDIT.md

Severity:

Critical

High

Medium

Low

Deployment blocked on critical findings.

────────────────────────

# OPENHANDS

Repository:

All-Hands-AI/OpenHands

Role:

Autonomous repair engineer.

Allowed to:

Fix bugs

Refactor generators

Update links

Repair templates

Run tests

Commit fixes

Not allowed to:

Invent data

Create new pages

Expand countries

Create professions

Guess formulas

Low confidence <80%

Generate BLOCKED_REPORT.md

────────────────────────

# SEMGREP

Repository:

semgrep/semgrep

Role:

Static leak detector.

Ban:

{country

${locale

undefined

NaN

TODO

FIXME

placeholder

dummy

sample

test

政府对

According to Olikit research

Our free

Whether you are

Make informed decisions

Output:

SEMGREP_REPORT.md

Any leak blocks deployment.

────────────────────────

# LINKINATOR

Repository:

JustinBeckwith/linkinator

Role:

Link integrity.

Find:

404s

Broken internal links

Broken external links

Redirect chains

Output:

LINK_REPORT.md

Broken links >0

Deployment fails.

────────────────────────

# LIGHTHOUSE CI

Repository:

GoogleChrome/lighthouse-ci

Role:

UX quality.

Audit:

Accessibility

CLS

Performance

Mobile experience

Output:

LIGHTHOUSE_REPORT.md

Warnings only.

Critical failures block release.

────────────────────────

# CRAWLEE

Repository:

apify/crawlee

Role:

Site-wide crawler.

Inspect:

Titles

Descriptions

Canonicals

Thin pages

Duplicate pages

Empty sections

Orphan pages

Output:

CRAWL_REPORT.md

────────────────────────

# RELEASE PIPELINE

Every PR:

Semgrep
↓

Playwright
↓

Linkinator
↓

OpenHands repair
↓

Browser-Use hostile audit
↓

Lighthouse
↓

Crawlee
↓

Final Judge

────────────────────────

# FINAL JUDGE

Forget effort.

Forget optimism.

Act as hostile Google AdSense reviewer.

Randomly inspect pages.

Try to reject.

Questions:

Can I break trust within 30 seconds?

Can I find wrong numbers?

Can I find placeholders?

Can I find misleading tools?

Can I find AI fingerprints?

Decision:

APPROVE

or

REJECT

Generate:

FINAL_JUDGE.md

────────────────────────

# GOLDEN RULE

Wrong > remove.

Broken > remove.

Misleading > rename.

Uncertain > block.

Trust restoration comes before growth.

No deployment reaches production unless the Quality Mesh passes.

LOCKED.
