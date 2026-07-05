# Research Roadmap — Olikit

**Date**: July 2026
**Scope**: Content authority and research assets (Phase 5)

---

## Current Content Assessment

| Page Type | Count | Quality | Notes |
|-----------|-------|---------|-------|
| Homepage | 1 | SUBSTANTIVE | Strong, 18+ sections, 6 JSON-LD schemas |
| Country Pages | 7 | SUBSTANTIVE but TEMPLATED | Good depth, identical trust items |
| Profession Pages | 21 | THIN/TEMPLATED | 100% generated boilerplate |
| Tool Pages | 84 | GOOD | Interactive calculators with FAQ |
| Comparisons | 16 | THIN | Link hubs, no on-page data |
| Rankings | 1 | SUBSTANTIVE | Data-driven, computed at build |
| Research | 5 | MODERATE | Thin coverage, misleading breadth |
| World Monitor | 1 | GOOD | News, markets, risk panels |

---

## Content Quality Issues

### 1. Profession Pages Are 100% Templated
Every profession page for every country gets identical prose with only names swapped. No profession-specific insights, industry data, or unique content.

**Fix**: Add profession-specific sections for top 6 professions (SE, DS, PM, AI Engineer, Nurse, Teacher):
- Industry trends
- Skill demand analysis
- Career progression paths
- Industry-specific benefits
- Remote work landscape

### 2. Research Page Misrepresents Breadth
10 listed "publications" collapse to ~3 actual destinations. "Global Tax Comparison," "Cost of Living Index," etc. all link to the same report.

**Fix**: Either create the missing report pages or reduce card count to match reality.

### 3. Country Pages Have Identical Trust Items
All 7 countries share the same `trustItems` array. Should be country-specific.

**Fix**: Customize trust items per country (e.g., US: IRS data, UK: HMRC data, AU: ATO data).

### 4. Comparisons Are Link Hubs
No on-page comparison data. Users must click through to see results.

**Fix**: Add inline comparison tables for top 5 comparison types.

---

## Research Content Roadmap

### Q3 2026: Foundation

1. **Expand Global Salary Index** — currently thin, needs YoY trends, city breakdowns
2. **Create Tax Comparison Report** — currently links to salary index
3. **Create Cost of Living Report** — currently links to salary index
4. **Deduplicate Research page** — match cards to actual destinations

### Q4 2026: Depth

5. **Profession-specific research** for top 6 professions
6. **City-level research** for top 10 cities
7. **PPP analysis report**
8. **Remote work salary trends**

### 2027: Scale

9. **Quarterly data updates** for all research reports
10. **Historical trend reports** (2025→2026→2027)
11. **Industry-specific reports** (tech, healthcare, finance)
12. **Regional deep dives** (Asia-Pacific, Europe, North America)

---

## Content Quality Standards

Every important page must answer:
1. **What is the question?** — Clear H1 and intro
2. **What is the answer?** — Direct answer in first 2 sentences
3. **What data supports it?** — Tables, charts, sources
4. **What should the user do next?** — CTA to calculator or related page

### Anti-patterns to avoid:
- Generic filler paragraphs
- Keyword stuffing
- Rewritten competitor content
- Template-heavy pages with no unique value
- Thin link hubs with no on-page data

### Quality markers to implement:
- Original insights and analysis
- Decision-support tools
- Side-by-side comparisons
- Visual data summaries
- Reusable data tables
- Source attribution
- Methodology documentation
