# BASELINE SNAPSHOT

Generated: 2026-06-19
Branch: recovery/adsense-sev1
Commit: Current working tree (pre-recovery)

## Repository Stats

- TS/TSX source files: 166
- Page routes (page.tsx): 58
- Components: 29
- Lib modules: 43
- Calculator classes: 20 (7 used, 13 orphaned)
- Reports: 39 in src/reports/

## Route Architecture

### Static pages (29 root-level pages)
- / (homepage)
- /about
- /contact
- /privacy-policy
- /terms
- /disclaimer
- /editorial-policy
- /methodology
- /data-sources
- /countries
- /compare
- /professions
- /professions/software-engineer
- /rankings
- /rankings/best-countries-for-software-engineers
- /rankings/highest-paying-cities-software-engineers
- /rankings/highest-paying-countries-software-engineers
- /research
- /research/software-engineer-salary-index-2026
- /software-engineer-salary-us
- /software-engineer-salary-uk
- /software-engineer-salary-canada
- /software-engineer-salary-australia
- /software-engineer-salary-new-zealand
- /software-engineer-salary-india
- /software-engineer-salary-singapore
- /software-engineer-vs-data-scientist
- /software-engineer-vs-product-manager
- /software-engineer-vs-cybersecurity-analyst

### Dynamic locale pages (7 locales × N routes)
Locales: us, uk, au, ca, nz, in, sg
- /[locale]/
- /[locale]/salary/
- /[locale]/salary/[profession]
- /[locale]/tools/
- /[locale]/tools/[tool]
- /[locale]/tools/[tool]/compare
- /[locale]/comparisons/
- /[locale]/comparisons/[type]/[slug]
- /[locale]/rankings/
- /[locale]/research/
- /[locale]/research/[report]
- /[locale]/guides/
- /[locale]/guides/[guide]
- /[locale]/guides/best
- /[locale]/states/
- /[locale]/state/[subregion]
- /[locale]/state/[subregion]/[tool]
- /[locale]/best-states-for-salary/
- /[locale]/best-states-for-cost-of-living/
- /[locale]/best-states-for-home-affordability/
- /[locale]/best-states-for-retirement/
- /[locale]/average-salary/[state]
- /[locale]/cost-of-living/[state]
- /[locale]/salary-vs-cost-of-living/[state]
- /[locale]/financial-data/
- /[locale]/glossary/
- /[locale]/glossary/[entry]
- /[locale]/search/
- /[locale]/updates/

## Sitemap

- File: src/app/sitemap.ts (306 lines)
- All 7 locales get entries for: /, /tools, /guides, /salary, /financial-data, /best-states-for-*, /glossary, /research, /updates, /search, /rankings, /comparisons
- 20 static page entries
- State pages for us (50+DC), au (6), ca (4), in (8)
- No state pages for uk, nz, sg
- Robots.txt allows all user agents, disallows /api/ and /_next/

## Deployment

- Framework: Next.js 16.2.6
- Not static export (no output: 'export')
- Server-rendered (next start / Cloudflare Workers)
- Database: D1 (exists with schema/seed but unused for page generation)

## I18n / Locales

- 7 locales: us, uk, au, ca, nz, in, sg
- Primary: us, uk, au, ca, nz
- Expansion: in, sg
- No middleware for locale detection
- Root layout hardcodes lang="en"
- Locale codes: en-US, en-GB, en-AU, en-CA, en-NZ, en-IN, en-SG

## Current State of Working Tree

18 files modified, 2 untracked:
- package.json (opencode-ponytail dep added)
- package-lock.json
- salary-sanity-report.json
- 14 page files (new comparison content, salary integration)
- src/proxy.ts
- opencode.json (untracked)
- src/app/research/software-engineer-salary-index-2026/ (untracked, new research page)

## Known Issues (from audit)

### P0 (Critical)
1. Mid-level salary calculation bug: (SALARY.average + SALARY.experienced / 2) → $210K instead of $150K
2. Shell locale parsing broken on 29 root-level pages → undefined country in ContextBar

### P1 (High)
3. 1256 ESLint errors (mostly <a> vs <Link>)
4. Potential 404 for missing locale×profession combos

### P2 (Medium)
5. Hardcoded AdSense placeholder slots (1234567890/93/95)
6. 13 orphaned calculator classes
7. California-only state content
8. Hardcoded 2026 dates
9. Mislabeled JSON-LD function (WebSite called LocalBusiness)
10. NZ/IN/SG homepages content-limited

### P3 (Low)
11. Cannot clear calculator input to empty
12. UK locale code hardcoded in locale tag logic
13. Duplicate currency symbol maps
14. Static exchange rates
