# Sprint 5 — Phase 4: Internal Linking Analysis

Generated: 2026-06-26

## Link Graph Overview

264 route files, ~370+ URL patterns across 7 locales.
Every page is reachable (no true orphans), but link depth varies significantly.

---

## Top 10 Pages by Inbound Links

| Rank | Page | Inbound Links | Role |
|------|------|---------------|------|
| 1 | `/tools` | ~340 | Calculator hub |
| 2 | `/software-engineer` | ~249 | Profession hub |
| 3 | `/salary` | ~233 | Salary hub |
| 4 | `/data-scientist` | ~227 | Profession hub |
| 5 | `/product-manager` | ~181 | Profession hub |
| 6 | `/software-engineer-salary` | ~127 | Salary page |
| 7 | `/research` | ~125 | Research hub |
| 8 | `/rankings` | ~103 | Rankings hub |
| 9 | `/professions` | ~94 | Professions hub |
| 10 | `/ai-engineer` | ~81 | Profession hub |

---

## Weakest Link Pages (only footer links)

| Page | Inbound Links | Issue |
|------|---------------|-------|
| `/disclaimer` | 3 | Footer only |
| `/terms` | 4 | Footer only |
| `/editorial-policy` | 5 | Footer + about |
| `/data-sources` | 6 | Methodology + footer |
| `/updates` | 4 | Search + footer |
| `/countries` | 3 | Footer only |

**Note**: After Sprint 5 Phase 3, `/countries` now has breadcrumbs and is better integrated.

---

## Link Cluster Analysis

### Cluster 1: Salary (strongest)
```
salary (hub)
  → salary/[profession] (21 pages)
  → average-salary/[state] (50 pages)
  → cost-of-living/[state] (50 pages)
  → salary-vs-cost-of-living/[state] (50 pages)
  → tools/salary-calculator
  → guides/salary-after-tax-by-country
```
**Status**: Well-connected. Every salary page links to the hub and to the calculator.

### Cluster 2: Tools (strongest)
```
tools (hub)
  → tools/[tool] (21 pages)
  → tools/[tool]/compare
  → state/[subregion]/[tool] (350+ pages)
```
**Status**: Excellent. Every tool page links to related tools, other countries, and salary resources.

### Cluster 3: Comparisons
```
comparisons (hub)
  → comparisons/[type]/[slug] (25+ pages)
  → compare (tool landing)
```
**Status**: Good. Each comparison links to related comparisons and back to the hub.

### Cluster 4: Research (weak)
```
research (hub)
  → research/[report] (4 pages)
```
**Issue**: Research pages don't cross-link to tools or salary pages. Research → tools link is missing.

### Cluster 5: Rankings (weak)
```
rankings (hub)
  → rankings/[page] (7 pages)
```
**Issue**: Rankings pages don't link back to the tools they rank. After Sprint 5 fix, the hub now links to tools.

### Cluster 6: Glossary (weak)
```
glossary (hub)
  → glossary/[entry] (50+ pages)
```
**Issue**: Glossary entries link to tools but not to salary pages or comparisons.

### Cluster 7: Guides
```
guides (hub)
  → guides/[guide] (10+ pages)
  → guides/best
```
**Status**: Good. Guides link to tools and salary hub.

---

## Recommended Link Additions

### High Priority
1. **Research → Tools**: Add "Use our calculator" CTA on each research report
2. **Rankings → Tools**: Already fixed in Sprint 5 (hub links to tools dynamically)
3. **Glossary → Salary**: Add "Explore salaries for [profession]" links

### Medium Priority
4. **Salary profession → Comparisons**: Add "Compare [profession] salaries across countries" link
5. **Tool page → Research**: Add "Read our research" section when relevant research exists
6. **Countries → Salary hub**: Already added via SourceFooter

### Low Priority
7. **Footer legal pages**: Add from methodology page (already linked from about)
8. **Updates page**: Add from locale homepages

---

## Topical Authority Flow

```
Homepage
  ↓
Locale Homepage (/{locale})
  ↓
Tools Hub → Individual Tools → State Tools
  ↓
Salary Hub → Profession Salary → State Salary
  ↓
Comparisons → Country Comparisons
  ↓
Research → Salary Index Reports
  ↓
Rankings → Best Countries / Highest Paying Cities
  ↓
Glossary → Financial Terms
  ↓
Guides → How-To Content
```

**Assessment**: The flow is logical. The main gap is Research → Tools (no CTA from research to calculators) and Glossary → Salary (no link from definitions to salary data).
