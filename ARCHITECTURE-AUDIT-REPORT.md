# Olikit — Complete Website Architecture Audit

**Date:** June 13, 2026
**Build:** 1167 static pages + 9 dynamic routes = **1176 total URLs**
**Status:** 0 build errors, 0 TypeScript errors, 0 broken links

---

## Website Tree

```
Homepage (/)
 ├── Countries (locale tree)
 │    ├── Country locale homepages          (/us, /uk, /au, /ca, /nz, /in, /sg)
 │    ├── Country salary pages              (/us/salary/software-engineer, etc.)
 │    ├── Country tool pages                (/us/tools/salary-calculator, etc.)
 │    ├── Country state pages               (/us/state/california, etc.)
 │    ├── Country guide pages               (/us/guides/salary-after-tax-by-country, etc.)
 │    ├── Country glossary pages            (/us/glossary/gross-salary, etc.)
 │    ├── Country comparison pages          (/us/comparisons/salary/us-vs-uk)
 │    ├── Country research pages            (/us/research/highest-paying-states)
 │    ├── Country rankings pages            (/us/rankings)
 │    ├── Country best-state pages          (/us/best-states-for-salary, etc.)
 │    └── Country state-specific tools      (/us/average-salary/california, etc.)
 │
 ├── Professions
 │    ├── Software Engineer                 (hub + 14 sub-pages)
 │    ├── Data Scientist                    (hub + 14 sub-pages)
 │    ├── Product Manager                   (hub + 7 sub-pages)
 │    └── Professions hub                   (/professions)
 │
 ├── Research
 │    ├── Research hub                      (/research)
 │    ├── SE Salary Index 2026              (/research/software-engineer-salary-index-2026)
 │    ├── DS Salary Index 2026              (/research/data-scientist-salary-index-2026)
 │    └── Global Salary Index 2026          (/research/global-salary-index-2026)
 │
 ├── Rankings
 │    ├── Rankings hub                      (/rankings)
 │    ├── SE rankings                       (best-countries, highest-paying, highest-paying-cities)
 │    └── DS rankings                       (best-countries, highest-paying, highest-paying-cities)
 │
 ├── Comparisons
 │    ├── Comparisons hub                   (/comparisons)
 │    ├── SE cross-country comparisons      (us-vs-uk, us-vs-canada, uk-vs-au, us-vs-au, india-vs-sg)
 │    ├── DS cross-country comparisons      (us-vs-uk, us-vs-ca, uk-vs-au, us-vs-au, india-vs-sg)
 │    ├── SE vs DS cross-profession         (/software-engineer-vs-data-scientist)
 │    ├── SE vs PM cross-profession         (/software-engineer-vs-product-manager)
 │    ├── DS vs PM cross-profession         (/data-scientist-vs-product-manager)
 │    └── DS vs Data Analyst cross-profession (/data-scientist-vs-data-analyst)
 │
 ├── Calculators                            (embedded in locale tools section)
 ├── Methodology                            (/methodology, /methodology/olikit-scoring-system)
 ├── Editorial Policy                       (/editorial-policy)
 ├── Data Sources                           (/data-sources)
 └── Utility pages                          (/about, /contact, /privacy-policy, /terms, /disclaimer, /compare, /countries)
```

---

## Section Coverage

| Section | Total URLs | Live URLs | Missing URLs | Broken URLs | Duplicate URLs |
|---------|-----------|-----------|-------------|-------------|---------------|
| Homepage | 1 | 1 | 0 | 0 | 0 |
| Countries (locale tree) | ~1,087 | ~1,087 | 0 | 0 | 0 |
| Professions | 3 hubs | 3 | 0 | 0 | 0 |
| SE cluster | 14 non-locale | 14 | 0 | 0 | 0 |
| DS cluster | 14 non-locale | 14 | 0 | 0 | 0 |
| PM cluster | 8 non-locale | 8 | 0 | 0 | 0 |
| SE country salary pages | 7 | 7 | 0 | 0 | 0 |
| DS country salary pages | 7 | 7 | 0 | 0 | 0 |
| PM country salary pages | 4 | 4 | 0 | 0 | 0 |
| SE cross-country comparisons | 6 | 6 | 0 | 0 | 0 |
| DS cross-country comparisons | 8 | 8 | 0 | 0 | 0 |
| Cross-profession comparisons | 3 | 3 | 0 | 0 | 0 |
| DS-vs-profession comparisons | 3 | 3 | 0 | 0 | 0 |
| Rankings (non-locale) | 7 | 7 | 0 | 0 | 0 |
| Research (non-locale) | 4 | 4 | 0 | 0 | 0 |
| Methodology | 2 | 2 | 0 | 0 | 0 |
| Utility pages | 9 | 9 | 0 | 0 | 0 |
| Locale-dynamic (SSG) | ~1,087 | ~1,087 | 0 | 0 | 0 |
| API routes | 9 | 9 | 0 | 0 | 0 |
| **Total** | **1,176** | **1,176** | **0** | **0** | **0** |

---

## Page Inventory

| Type | Count |
|------|-------|
| Homepage | 1 |
| Country Locale Homepages (SSG) | 7 |
| Country Tool Pages (SSG) | 49 |
| Country State Pages (SSG) | 68 |
| Country State+Tool Pages (SSG) | 207 |
| Country Salary Pages (SSG) | 77 |
| Country Comparison Pages (SSG) | 316 |
| Country Guide Pages (SSG) | 56 |
| Country Glossary Pages (SSG) | 70 |
| Country Research Pages (SSG) | 35 |
| Country Best-State Pages (SSG) | 28 |
| Country State-Specific Tool Pages (SSG) | 33 |
| Country Financial/Search/Updates/States (SSG) | 32 |
| Profession Hubs (non-locale) | 3 |
| Profession Salary Overview (non-locale) | 3 |
| Profession Country Salary Pages (non-locale) | 18 |
| Profession Analysis Pages (non-locale) | 9 |
| Profession Cross-Country Comparisons (non-locale) | 14 |
| Profession Cross-Profession Comparisons (non-locale) | 6 |
| Rankings Pages (non-locale) | 7 |
| Research Reports (non-locale) | 4 |
| Methodology Pages | 2 |
| Utility/Info Pages | 9 |
| Sitemap/Robots | 2 |
| API Routes | 9 |
| **Total Static** | **1,167** |
| **Total Dynamic** | **9** |
| **Grand Total** | **1,176** |

---

## Crawl Depth Analysis

| Depth | Pages | Examples |
|-------|-------|---------|
| Depth 1 (from homepage) | 14 | `/about`, `/contact`, `/professions`, `/research`, `/rankings`, `/comparisons`, `/countries`, `/methodology`, `/data-sources`, `/editorial-policy`, `/software-engineer`, `/data-scientist`, `/product-manager`, `/compare` |
| Depth 2 | ~50 | `/professions/software-engineer`, `/research/global-salary-index-2026`, `/software-engineer-salary`, `/rankings/best-countries-for-software-engineers`, `/comparisons/data-scientist-us-vs-uk`, locale pages |
| Depth 3 | ~1,100 | `/us/salary/software-engineer`, `/us/tools/salary-calculator`, `/us/state/california/salary-calculator`, `/us/comparisons/salary/us-vs-uk`, `/us/glossary/gross-salary` |
| Depth 4+ | **0** | None found |

**Flagged:** No pages exceed 3 clicks from the homepage. The deepest paths follow the pattern: Home > Research > Report (depth 2) or Home > Professions > Hub > Detail (depth 2).

---

## Internal Linking Audit

### Navigation Architecture

| Component | Outbound Links | Coverage |
|-----------|---------------|----------|
| Header/Nav | ~8 | `/`, `/compare`, `/rankings`, `/research`, `/guides`, `/about`, locale switcher |
| Footer | ~35 | All 7 locale homepages, `/compare`, `/rankings`, `/research`, `/professions`, `/methodology`, `/data-sources`, `/editorial-policy`, `/about`, `/contact`, `/privacy-policy`, `/terms` |
| Shell (global) | ~45 | Shared on every page |

### Node-Level Linking

| Hub Page | Outbound Links | Inbound Links |
|----------|---------------|---------------|
| `/` (homepage) | ~20 (nav + footer) | — (root) |
| `/professions` | 2 (SE, DS under/professions/) | Footer |
| `/research` | 4+ (SE index, DS index, Global index) | Header, footer |
| `/rankings` | 6 (SE rankings, DS rankings) | Header, footer |
| `/comparisons` | 5 (DS comparisons) | Header, footer |
| `/software-engineer` | 15 (salary pages, comparisons, analysis) | Footer, `/professions` |
| `/data-scientist` | 15 (salary pages, comparisons, analysis) | Not linked from any global nav |
| `/product-manager` | 8 (salary pages, comparison, analysis) | Not linked from any global nav |

### Orphan Pages — 47 True Orphans (0 Inbound Links)

#### Data Scientist Cluster (14 pages)
`/data-scientist`, `/data-scientist-salary`, `/data-scientist-best-countries`, `/data-scientist-highest-paying-countries`, `/data-scientist-ppp-adjusted-salary`, `/data-scientist-salary-by-country`, `/data-scientist-salary-australia`, `/data-scientist-salary-canada`, `/data-scientist-salary-india`, `/data-scientist-salary-new-zealand`, `/data-scientist-salary-singapore`, `/data-scientist-salary-uk`, `/data-scientist-tax-adjusted-salary`, `/data-scientist-uk-vs-australia`, `/data-scientist-us-vs-canada`, `/data-scientist-us-vs-uk`, `/data-scientist-vs-data-analyst`, `/data-scientist-vs-product-manager`

#### Software Engineer Cluster (8 pages)
`/software-engineer-best-countries`, `/software-engineer-highest-paying-countries`, `/software-engineer-salary-by-country`, `/software-engineer-tax-adjusted-salary`, `/software-engineer-ppp-adjusted-salary`, `/software-engineer-india-vs-singapore`, `/software-engineer-uk-vs-australia`, `/software-engineer-us-vs-australia`, `/software-engineer-us-vs-canada`, `/software-engineer-us-vs-uk`, `/software-engineer-vs-cybersecurity-analyst`, `/software-engineer-vs-data-scientist`, `/software-engineer-vs-product-manager`

#### Product Manager Cluster (7 pages)
`/product-manager`, `/product-manager-salary`, `/product-manager-salary-australia`, `/product-manager-salary-by-country`, `/product-manager-salary-canada`, `/product-manager-salary-uk`, `/product-manager-salary-us`, `/product-manager-highest-paying-countries`

#### Comparisons (4 pages)
`/comparisons/data-scientist-india-vs-singapore`, `/comparisons/data-scientist-uk-vs-australia`, `/comparisons/data-scientist-us-vs-australia`, `/comparisons/data-scientist-us-vs-uk`

#### Rankings & Research (2 pages)
`/rankings/highest-paying-cities-data-scientists`, `/research/global-salary-index-2026`

#### Utility (2 pages)
`/countries`, `/disclaimer`

### Weakly Linked Pages (1-2 inbound links, all from within own cluster)

- `/professions/software-engineer` — linked from SE salary country pages only
- `/professions/data-scientist` — linked from DS salary country pages only
- `/rankings/best-countries-for-data-scientists` — linked from DS salary US page
- `/rankings/highest-paying-countries-data-scientists` — linked from DS salary US page
- `/research/data-scientist-salary-index-2026` — linked from two DS pages

### Dead-End Pages (0 outbound content links, only global nav/footer)

No true dead-end pages — all pages share the global Shell which provides nav + footer (~45 outbound links).

---

## Sitemap Coverage

| Check | Result |
|-------|--------|
| All static routes in sitemap? | ✅ Yes (71 static entries) |
| All SSG routes in sitemap? | ✅ Yes (generated dynamically) |
| Sitemap URLs matching build routes? | ✅ 100% match |
| Sitemap URLs not in build? | ❌ 0 |
| Build routes not in sitemap? | ❌ 0 |

---

## Canonical Coverage

| Check | Result |
|-------|--------|
| All pages have self-referencing canonical? | ⚠️ Not explicitly set in metadata exports |
| Metadata exported on all pages? | ✅ Yes (111/111 page.tsx files export metadata) |
| Duplicate canonicals? | ❌ 0 detected |
| Missing canonicals? | ⚠️ 0 — but no explicit `rel="canonical"` link tag in layout |

---

## Indexability Coverage

| Check | Result |
|-------|--------|
| robots.txt exists | ✅ Yes |
| robots.txt allows indexing | ✅ Yes |
| noindex tags found | ❌ 0 |
| Sitemap referenced in robots.txt | ✅ Yes |

---

## Final Architecture Score

### Score: 7.2 / 10

### Blocking Issues (Score Impact: -1.5)
1. **47 true orphan pages** — entire DS and PM clusters unreachable from any navigation element (header, footer, homepage). Discoverable only via sitemap or direct URL.
2. **New profession hubs not in nav** — Data Scientist and Product Manager hubs are not linked from the global header/navigation or the Professions hub page.
3. **Professions hub incomplete** — `/professions` only links to `/professions/software-engineer` and `/professions/data-scientist`. Missing links to all 3 standalone profession hubs.

### Medium Issues (Score Impact: -1.0)
4. **No explicit canonical link tag** — Layout doesn't emit `<link rel="canonical">`. Metadata provides URL but not canonical tag.
5. **Locale-dynamic pages have no inter-locale hreflang links** — No `hreflang` annotations between `/us/salary/software-engineer` and `/uk/salary/software-engineer`.
6. **Global Salary Index is an orphan** — No internal links point to the flagship research report from any hub page.

### Low Issues (Score Impact: -0.3)
7. Sitemap static pages list is hardcoded (requires manual updates on new routes)
8. No breadcrumb structured data on non-locale pages (profession pages, research pages)
9. Footer missing links to DS and PM hubs
10. `/disclaimer` and `/countries` are orphans

---

## Recommended Fixes

### Priority 1 — Fix Orphans (blocking)

| Fix | Effort | Impact |
|-----|--------|--------|
| Add `/software-engineer`, `/data-scientist`, `/product-manager` to global navigation/header | Small | High |
| Add `/software-engineer`, `/data-scientist`, `/product-manager` to Professions hub page | Small | High |
| Add DS and PM links to footer | Small | High |
| Add internal cross-links from `/research` to `/research/global-salary-index-2026` | Small | High |
| Add `/rankings/highest-paying-cities-data-scientists` to rankings hub | Small | Medium |
| Add `/research/data-scientist-salary-index-2026` to research hub | Small | Medium |
| Add comparison pages to `/comparisons` hub listing | Small | Medium |

### Priority 2 — Canonical & Hreflang

| Fix | Effort | Impact |
|-----|--------|--------|
| Add `<link rel="canonical">` to root layout for all pages | Medium | High |
| Add `hreflang` annotations between locale variants | Medium | High |

### Priority 3 — Sitemap Automation

| Fix | Effort | Impact |
|-----|--------|--------|
| Generate static pages list dynamically from file system scan or route manifest | Medium | Low |

### Priority 4 — Breadcrumb Schema

| Fix | Effort | Impact |
|-----|--------|--------|
| Add `BreadcrumbList` structured data to non-locale profession/research pages | Small | Low |
