# Internal Link Strategy — Olikit

**Date**: July 2026
**Scope**: Internal authority flow (Phase 11)

---

## Current Link Architecture

### Central Linking Module
`src/lib/linking/internal-links.ts` (318 lines)

| Function | Purpose | Status |
|----------|---------|--------|
| `getRelatedTools()` | Related tools within locale | ACTIVE |
| `getLocaleLinks()` | Same page in other locales | ACTIVE |
| `getComparisonLinks()` | Cross-country comparisons | ACTIVE |
| `getSubRegionLinks()` | State/region sub-pages | ACTIVE |
| `getContentLinks()` | Salary hub + 3 professions | ACTIVE (limited) |
| `getProfessionLinks()` | Profession sitemap | **DEAD CODE** |
| `getGlobalResearchLinks()` | Research + professions hub | **DEAD CODE** |
| `buildBreadcrumbs()` | Breadcrumb trail | ACTIVE |

---

## Critical Gaps

### 1. Dead Code: getProfessionLinks()
Defines `PROFESSION_SITEMAP` with detailed link structures for 12 professions (hub, salary, taxAdjusted, pppAdjusted, highestPaying, bestCountries, salaryByCountry, salaryIndex, highestPayingCities, comparisons). **Never imported or called.**

Profession pages define `relatedPages` inline instead — creating duplication and inconsistency.

**Fix**: Either use `getProfessionLinks()` in profession pages or delete it.

### 2. Dead Code: getGlobalResearchLinks()
Returns 5 research/profession links. **Never imported or called.**

**Fix**: Use in research page or delete.

### 3. ~80+ Orphaned Profession-by-Country Pages
Pages like `/ai-engineer-salary-us`, `/ai-engineer-salary-uk` exist but nothing links to them. Profession hubs link to `/[profession]-salary-by-country` but not individual country variants.

**Fix**: Add links from profession hubs to individual country salary pages.

### 4. No Profession Page Links to Calculators
Profession hubs link to salary data and research, but NOT to the salary/tax calculators that are the site's core tools.

**Fix**: Add calculator links to profession pages.

### 5. Inconsistent relatedPages Across Profession Pages
- software-engineer: 20 related pages
- ai-engineer: 7 related pages
- Other professions: varying amounts

**Fix**: Generate from centralized `PROFESSION_SITEMAP`.

---

## Recommended Link Structure

### Profession Pages Should Link To:
```
/[profession]
├── /us/tools/salary-calculator (calculator)
├── /us/tools/tax-calculator (calculator)
├── /us/tools/cost-of-living-calculator (calculator)
├── /compare (comparison)
├── /research/global-salary-index-2026 (research)
├── /methodology (methodology)
├── /[other-profession] (related professions)
└── /[country]/[profession] (country-specific)
```

### Country Pages Should Link To:
```
/[country]
├── /us/tools/[tool] (all tools)
├── /professions/[profession] (all professions)
├── /research/[report] (research)
├── /rankings (rankings)
├── /compare (comparisons)
├── /glossary (glossary)
└── /methodology (methodology)
```

### Tool Pages Should Link To:
```
/[locale]/tools/[tool]
├── /professions/[profession] (relevant professions)
├── /[locale]/tools/[other-tool] (related tools)
├── /compare (comparisons)
├── /research/[report] (research)
├── /methodology (methodology)
└── /[other-locale]/tools/[tool] (other countries)
```

---

## Orphan Page Fix

| Orphan Page | Link Source | Fix |
|-------------|-------------|-----|
| `/ai-engineer-salary-us` etc. | Profession hub | Add country-specific links from hub |
| `/embed` | Self-referential | Add from tool pages as "embed this tool" |
| `/methodology/olikit-scoring-system` | /methodology | Already linked, OK |
| Research sub-reports | /research hub | Link from research page |
| Infographics | /infographics hub | Link from research page |

---

## Dead-End Page Fix

| Dead-End Page | Fix |
|---------------|-----|
| `/contact` | Add "Related Tools" section |
| `/disclaimer` | Add link to /methodology |
| `/terms` | Add link to /methodology |
| `/privacy-policy` | Add link to /contact |
| `/editorial-policy` | Add link to /data-sources |

---

## Implementation Priority

1. **Use or delete `getProfessionLinks()`** — resolve dead code
2. **Add calculator links to profession pages** — high-value cross-link
3. **Fix orphaned profession-by-country pages** — 80+ pages unreachable
4. **Standardize `relatedPages` across professions** — consistency
5. **Add outgoing links to dead-end legal pages** — minor but easy

---

## KPIs

| Metric | Current | Target |
|--------|---------|--------|
| Orphan pages | ~80+ | 0 |
| Dead-end pages | 5 | 0 |
| Profession pages linking to calculators | 0/21 | 21/21 |
| Avg internal links per page | ~3 | ~6 |
