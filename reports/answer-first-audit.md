# Answer-First UX Audit

**Date:** 2026-06-29
**Scope:** Presentation-layer render-order optimization across 4 page templates

## Pages Changed

| # | File | Page Type | Change |
|---|------|-----------|--------|
| 1 | `src/components/profession-page.tsx` | Profession salary pages | SalaryTable moved from position 6 to position 2 (after Hero) |
| 2 | `src/app/[locale]/tools/[tool]/page.tsx` | All calculator/tool pages | CalculatorInteractive moved from position 5 to position 3 (after DirectAnswer) |
| 3 | `src/app/compare/page.tsx` | Comparison page | ProfessionTable + Calculator moved from positions 5-6 to positions 3-4 (after Disclaimer) |
| 4 | `src/app/professions/page.tsx` | Professions hub | Salary table moved from position 4 to position 2 (after Hero) |

## Audit Summary

### Profession Pages (before → after)

**Before:** Hero → SalaryCards → Takeaways → Insights → Prose → **SalaryTable** → ...
**After:** Hero → **SalaryTable** → SalaryCards → Takeaways → Insights → Prose → ...

**Rationale:** The salary-by-country table is the primary answer for "software engineer salary by country" queries. Users had to scroll past 4 sections of framing content to reach it.

### Tool Pages (before → after)

**Before:** Hero → DirectAnswer → AIAnswer → **Calculator** → Steps → ...
**After:** Hero → DirectAnswer → **Calculator** → AIAnswer → Steps → ...

**Rationale:** The calculator is the primary interactive tool. Users came to calculate, not read about it. DirectAnswer stays first because it satisfies search intent immediately (per plan specification).

### Compare Page (before → after)

**Before:** Hero → Disclaimer → CountryCards → SalaryEquivalents → **Calculator** → **ProfessionTable** → QuickFacts
**After:** Hero → Disclaimer → **ProfessionTable** → **Calculator** → SalaryEquivalents → CountryCards → QuickFacts

**Rationale:** The profession comparison table and interactive calculator contain the actual comparison data. Users searching "compare software engineer salary US vs UK" need these first.

### Professions Hub (before → after)

**Before:** Hero → CareerHubs → PopularProfessions → **SalaryTable** → AllByCountry
**After:** Hero → **SalaryTable** → CareerHubs → PopularProfessions → AllByCountry

**Rationale:** The "Highest Paying Professions" table is the ranked salary data. Users searching "highest paying professions" want the table, not navigation cards.

## Pages Audited (no changes needed)

| Page | Verdict | Reason |
|------|---------|--------|
| Country pages (`[locale]/page.tsx`) | ✅ Good | Hero + Snapshot + QuickAnswers in positions 1-3 |
| Research hub (`research/page.tsx`) | ✅ Good | Report cards are the primary content, appear after Hero |
| Salary hub (`[locale]/salary/page.tsx`) | ✅ Good | Takeaways + QuickAnswer in positions 2-3 |
| Rankings page (`[locale]/rankings/page.tsx`) | ⚠️ Content gap | No actual rankings data displayed — only links to calculators. Needs content, not reorder (out of scope) |

## Changes NOT Made (by design)

- No copy rewritten
- No calculations changed
- No datasets modified
- No URLs changed
- No routing changed
- No metadata changed
- No schema changed
- No canonicals changed
- No internal links changed
- No APIs changed
- No business logic changed
- No content removed
- No content hidden
- No SEO text changed
- No visual redesign
- No decorative elements added
