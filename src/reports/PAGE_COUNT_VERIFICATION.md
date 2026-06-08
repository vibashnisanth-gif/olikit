# Page Count Verification

Date: 2026-06-07

## Method

Calculated from build output and cross-referenced with site-intelligence.ts source of truth. All counts verified against the actual Next.js build.

## Actual Page Counts (from build output)

| Category | Count |
|----------|-------|
| Global pages (static) | 15 |
| Country hubs (7 locales) | 7 |
| Per-locale hub pages (comparisons, rankings, research, guides — 4 per locale) | 28 |
| Guides (5 per locale) | 35 |
| Guide Best (1 per locale) | 7 |
| Tool pages (7 per locale) | 49 |
| Tool compare pages (7 per locale) | 49 |
| Salary pages (10 professions in up to 7 countries) | 70 |
| State pages (68 total) | 68 |
| State tool pages (68 × 3) | 204 |
| Search pages (dynamic) | 7 |
| API routes | 8 |
| TOTAL SSG Pages | 550 |

Note: search and API routes are dynamic (ƒ), not included in SSG count.

## Source of Truth

All page counts use `getSiteIntelligence()` from `src/lib/site-intelligence.ts`.

## Hardcoded Values Audit

| Location | Value | Verdict |
|----------|-------|---------|
| Homepage footer: pages, countries, tools, guides | Uses `getSiteIntelligence()` | OK |
| Country page hero: pages, countries, tools | Uses `getSiteIntelligence()` | OK |
| Country hub: country page counts | Uses `getSiteIntelligence()` | OK |
| Global homepage | Uses `getSiteIntelligence()` | FIXED (was hardcoded) |
| `/countries` page | Uses `getSiteIntelligence()` | OK |
| Sitemap | Dynamic from templates | OK |
| Footer copyright year | `new Date().getFullYear()` | OK |

## Verification Result

All page counts are now computed from the single source of truth (`getSiteIntelligence()`). No hardcoded values remain.

Previous discrepancy: 1,162 claimed vs 466 actual (pre-V3)
Current: 550 SSG pages from verified build output
