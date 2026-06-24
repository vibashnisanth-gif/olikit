# OLIKIT FULL SITE UI/UX RECOVERY SYSTEM v1.0 (LOCKED)

STATUS: LOCKED

MISSION

Audit the ENTIRE live website like a hostile human.

Not SEO.

Not code coverage.

Not Lighthouse scores.

The goal is to discover everything that causes:

* confusion
* distrust
* poor UX
* broken flows
* visual bugs
* dead ends
* template patterns
* low-value experiences

Fix one issue at a time.

Verify.

Re-audit.

Repeat until no major defects remain.

Never optimize blindly.

────────────────────────────────

# GOLDEN RULE

Do not fix pages.

Fix systems.

Do not fix symptoms.

Fix root causes.

Never assume.

Trust browser behavior over code.

Trust production over localhost.

Wrong UX is worse than missing UX.

Broken trust is worse than missing features.

────────────────────────────────

# EXECUTION MODEL

Work cluster by cluster.

Every cluster:

Audit
↓

Evidence
↓

Fix
↓

Verify
↓

Commit
↓

Re-audit

Never move forward until current cluster passes.

────────────────────────────────

# STAGE 1 — PRODUCTION CRAWL

Use:

Crawlee

Playwright

Target:

https://olikit.com

Sample:

Homepage

50 profession pages

50 comparison pages

20 calculators

20 country pages

10 trust pages

Random pages

Detect:

404

500

Missing content

Duplicate sections

Thin tables

Empty H2

Broken cards

Missing images

Template leaks

Output:

PRODUCTION_CRAWL_REPORT.md

Commit.

────────────────────────────────

# STAGE 2 — HOSTILE BROWSER AUDIT

Use Browser-Use.

Role:

Google AdSense reviewer

Competitor analyst

Real user

Mobile user

Questions:

Would I trust this?

Would I understand this?

Would I stay?

Would I bookmark this?

Would I reject this?

Look for:

Broken flows

Confusing layouts

Weak copy

AI fingerprints

Empty areas

Dead ends

Overloaded pages

Bad spacing

Output:

HOSTILE_BROWSER_REPORT.md

Severity:

Critical

High

Medium

Low

Commit.

────────────────────────────────

# STAGE 3 — HOMEPAGE

Audit:

Hero

Cards

Trust

Navigation

Mission

Methodology

Footer

Sources

Compare against:

Glassdoor

Levels.fyi

Numbeo

Questions:

Why Olikit?

Why trust Olikit?

What should I do next?

Output:

HOMEPAGE_REPORT.md

Fix root causes.

Commit.

────────────────────────────────

# STAGE 4 — NAVIGATION

Audit:

Desktop

Mobile

Footer

Breadcrumbs

Country switchers

Dead ends

Duplicate menus

Dropdowns

Questions:

Can users always continue?

Can users recover?

Output:

NAVIGATION_REPORT.md

Commit.

────────────────────────────────

# STAGE 5 — PROFESSION PAGES

Audit:

Hero

Salary tables

Take-home sections

FAQs

Sources

Interpretation

Comparison blocks

Look for:

Repetition

Thin sections

Weak insights

Output:

PROFESSION_REPORT.md

Commit.

────────────────────────────────

# STAGE 6 — COMPARISON PAGES

Audit:

Math

Tables

Currency logic

PPP

Interpretation

Sources

Look for:

Wrong percentages

Confusing wording

Weak explanations

Output:

COMPARE_REPORT.md

Commit.

────────────────────────────────

# STAGE 7 — CALCULATORS

Audit:

Inputs

Labels

Outputs

Validation

Mobile behavior

Naming

Look for:

Misleading tools

Broken forms

Wrong defaults

Output:

CALCULATOR_REPORT.md

Commit.

────────────────────────────────

# STAGE 8 — TRUST PAGES

Audit:

About

Contact

Methodology

Editorial Policy

Data Sources

Privacy

Terms

Look for:

Missing identity

Weak transparency

Broken links

Output:

TRUST_REPORT.md

Commit.

────────────────────────────────

# STAGE 9 — MOBILE UX

Use Playwright.

Widths:

375

390

414

768

1024

Look for:

Overflow

Table clipping

Spacing

Touch targets

Sticky elements

Output:

MOBILE_REPORT.md

Commit.

────────────────────────────────

# STAGE 10 — ACCESSIBILITY

Use Lighthouse.

Audit:

Contrast

Headings

ARIA

Focus

Labels

Output:

ACCESSIBILITY_REPORT.md

Commit.

────────────────────────────────

# STAGE 11 — INTERNAL GRAPH

Use Crawlee.

Find:

Dead ends

Orphans

Broken loops

Pages with no next action

Output:

GRAPH_REPORT.md

Commit.

────────────────────────────────

# STAGE 12 — FINAL HUMAN REVIEW

Forget previous reports.

Act as:

Google reviewer

New visitor

Competitor user

Mobile user

Try to reject.

Look for:

Anything annoying

Anything confusing

Anything low quality

Anything repetitive

Anything suspicious

Generate:

FINAL_UIUX_REPORT.md

Severity:

Critical

High

Medium

Low

────────────────────────────────

# QUALITY GATES

Deployment fails if:

Critical UX bugs >0

Broken flows >0

Dead ends >0

Mobile overflow >0

Misleading tools >0

Broken calculations >0

Template leaks >0

Empty sections >0

404s >0

500s >0

NO EXCEPTIONS.

────────────────────────────────

# FIXING RULE

Never attempt to fix everything.

Fix only one cluster at a time.

Commit.

Re-audit.

Move to next cluster.

────────────────────────────────

# FINAL JUDGE

Ignore effort.

Ignore optimism.

Ignore traffic.

Question:

Can a skeptical human break trust within 30 seconds?

If YES

Continue.

If NO

APPROVE.

Generate:

FINAL_JUDGE.md

MISSION COMPLETE ONLY WHEN:

The website feels trustworthy, understandable, useful, and difficult to reject.

LOCKED.
