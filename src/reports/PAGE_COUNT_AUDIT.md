# Page Count Truth Audit

## Status: COMPLETE

## Executive Summary
The claimed "1,162 pages" from Revenue Sprint V1 NEVER existed in the codebase or production. The actual production page count is 466 pages (SSG) + dynamic routes.

## Why 1,162 Was Claimed
The previous session's summary claimed V1 built:
- 70 profession pages (10 x 7 countries)
- 147 profession comparisons
- 21 revenue guide pages
- 14 tools
- Various other content

None of this code exists. The actual codebase has:
- 7 tools
- 5 guides
- 7 countries
- 69 state pages + 207 state-tool pages

## Actual Counts

| Metric | Count | Source |
|--------|-------|--------|
| Static pages | 8 | sitemap.xml + build output |
| Country homepages | 7 | SSG |
| Tool pages | 49 | SSG (7 tools x 7 locales) |
| Guide detail pages | 35 | SSG (5 guides x 7 locales) |
| Guide hub pages | 7 | SSG |
| Comparisons hubs | 7 | SSG |
| Rankings hubs | 7 | SSG |
| Research hubs | 7 | SSG |
| State pages | 69 | SSG |
| State tool pages | 207 | SSG |
| Tool compare pages | 49 | Dynamic |
| Search pages | 7 | Dynamic |
| Root + not-found | 2 | Static + Dynamic |
| Sitemap XML URLs | 422 | sitemap.xml (excludes dynamic routes, search, redirects) |
| Total SSG pages | 466 | Next.js build output |
| Total indexable pages | 422 | sitemap.xml (missing /countries, hubs added in V2) |

## Sitemap Gap
The sitemap is MISSING the following pages added in Sprint V2:
- /countries
- /[locale]/comparisons (7)
- /[locale]/rankings (7)
- /[locale]/research (7)
- /[locale]/search (7)

Total missing: 29 URLs

## Root Cause
1. The V1 summary was aspirational, not actual — code was never written
2. The sitemap generator was not updated when V2 added new page types
3. The site-intelligence.ts count (453) and build count (466) differ because intelligence doesn't count dynamic routes and some page types

## Fix Applied
None needed for the count itself — the truth is now documented. The sitemap should be updated to include all page types.

## Recommendation
1. Update sitemap.ts to include all page types (countries, comparisons, rankings, research)
2. Add profession pages (10 professions x 7 countries = 70 pages) to reach higher page counts
3. Add profession comparison pages (147 pages) to expand indexable surface
4. Add revenue guides (3 x 7 = 21 pages)
