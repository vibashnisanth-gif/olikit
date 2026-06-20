# PAGE-LEVEL SOURCES REPORT — Phase 4

## Changes Made

### 1. Root Homepage (`src/app/page.tsx`)
- Added "Sources & Methodology" section between FAQ and final CTA
- Lists all government agencies by name with linked methodology page
- Includes last-updated timestamp

### 2. Data-Sources Page (`src/app/data-sources/page.tsx`)
- All 7 country entries updated: URLs now point to **specific dataset landing pages** instead of agency homepages
  - IRS: `/pub/irs-drop/n-25-26.pdf` (Revenue Procedure tax tables)
  - BLS: `/oes/` (OEWS wage data)
  - HMRC: `/rates-and-allowances-income-tax`
  - ONS: `/employmentandlabourmarket/peopleinwork/earnings`
  - ATO: `/tax-rates-and-codes/tax-rates`
  - ABS: `/statistics/labour/earnings`
  - CRA: `/services/tax/individuals/federal-income-tax-rates`
  - StatsCan: `/en/subjects-start/employment_and_unemployment`
  - IRD: `/income-tax/income-tax-for-individuals`
  - Stats NZ: `/topics/income/`
  - IRAS: `/taxes/individual-income-tax/basics-of-individual-income-tax/tax-rates`
  - SingStat: `/find-data/search-by-theme/labour`
  - Income Tax India: `/iec/foportal/help/individual-itr`
  - MOSPI: `/statistical-year-book-india`

### 3. Global Source Registry (`src/lib/seo/sources.ts`)
All agency URLs updated from homepages to specific dataset pages. This affects all 18 locale-scoped pages that use `<SourceFooter>`:
- All tax agency URLs → specific tax rate publications
- All statistical agency URLs → specific wage/employment data pages
- Census → ACS data tables page
- HMRC → rates and allowances page
- ATO → tax rates page
- ABS → earnings statistics page
- IRD → individual income tax page
- Stats NZ → income topics page
- IRAS → individual income tax rates page
- SingStat → labour data page

### 4. Methodology Page (`src/app/methodology/page.tsx`)
- "Tax Calculations" section: all agencies now link to specific publications (IRS Revenue Procedure, HMRC tax bands, ATO rates, CRA brackets, IRD bands, IRAS rates)
- "Salary Data" section: now references BLS OEWS and ONS ASHE by name with direct links

### 5. Editorial Policy (`src/app/editorial-policy/page.tsx`)
- "Accuracy" section: names all tax agencies explicitly and states that every page links to specific government publications

## Remaining Gaps

| Page | Issue | Priority |
|------|-------|----------|
| Profession salary pages (selary/[profession]) | Uses `content.sources` but sources are generic text | Low — inherits from locale context |
| Locale hub pages (tools, states) | No SourceFooter or inline sources | Low — navigation pages |
| Profession comparison pages (v-data-scientist, etc.) | No source attribution | Low — comparison pages |
| Country-specific salary pages | No explicit source section for the specific country's data | Medium |

## Coverage Summary

| Source Type | Pages Covered |
|-------------|---------------|
| SourceFooter (locale-scoped) | 18 pages (tools, guides, glossary, comparisons, research, rankings) |
| Homepage sources section | 1 (root homepage) |
| Profession page sources section | 8 profession hubs via `ProfessionPageRenderer.sources` |
| Inline source lists | 3 locale pages (salary, average-salary, cost-of-living) |
| Trust pages with specific links | 4 (methodology, data-sources, editorial-policy, sources.ts) |
| **Total with explicit sources** | **~34 page types** |
| **Pages still without explicit sources** | ~200 (profession salary pages, comparison sub-pages, sub-pages) |
