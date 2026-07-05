# Authority Roadmap — Olikit

**Date**: July 2026
**Scope**: Flagship authority assets (Phase 4)

---

## Current Authority Assets

| Asset | Status | Quality |
|-------|--------|---------|
| Salary Ranking Chart (interactive) | LIVE | HIGH — data-driven, shareable |
| Tax Breakdown Bar (visual) | LIVE | GOOD — 7 countries |
| Quick Compare Widget | LIVE | GOOD — interactive |
| Country Cards | LIVE | GOOD — visual |
| Methodology Page | LIVE | HIGH — detailed |
| Scoring System Page | LIVE | HIGH — 5 scores documented |
| Research Reports (5) | LIVE | MODERATE — thin coverage |

---

## Flagship Asset Roadmap

### Tier 1: Create Now (Q3 2026)

#### 1. Olikit Global Salary Index 2026
**Type**: Annual flagship report
**Content**:
- Salary rankings for 21 professions across 7 countries
- Year-over-year trends (vs 2025 data)
- PPP-adjusted comparisons
- Regional breakdowns
- Downloadable PDF summary
- Press-ready statistics
- Citation guidance for journalists

**Data needed**: Historical salary data (2025 vs 2026)
**Files affected**: New `src/app/research/global-salary-index-2026/page.tsx` (exists, needs expansion)
**Impact**: HIGH — primary linkable asset

#### 2. Olikit Global Tax Index 2026
**Type**: Annual report
**Content**:
- Tax burden comparison across 7 countries
- Effective tax rate by income level
- Take-home pay analysis
- Tax efficiency ranking
- Visual charts and tables

**Data needed**: Already have tax brackets for all 7 countries
**Files affected**: New page under `src/app/research/`
**Impact**: HIGH — unique dataset, highly shareable

#### 3. Software Engineer Take-Home Pay Report
**Type**: Focused profession report
**Content**:
- Take-home pay in 7 countries for SE salary range
- Tax-adjusted comparisons
- PPP analysis
- City-level breakdowns for top cities
- Career ROI analysis

**Data needed**: Already have SE salary + tax data
**Files affected**: New page under `src/app/research/`
**Impact**: HIGH — targets highest-volume profession

### Tier 2: Create in Q4 2026

#### 4. Olikit Global PPP Index
**Type**: Purchasing power parity analysis
**Content**:
- PPP conversion factors for 7 countries
- Cost-adjusted salary comparisons
- Real purchasing power by profession
- Geographic arbitrage opportunities

**Data needed**: OECD PPP data (publicly available)
**Files affected**: New `src/lib/content/ppp-data.ts` + research page
**Impact**: MEDIUM-HIGH — unique angle

#### 5. Global Relocation Index
**Type**: Relocation decision tool
**Content**:
- Score: salary, tax, cost of living, safety, healthcare, quality of life
- City rankings for 35 cities
- Profession-specific recommendations
- Interactive scoring tool

**Data needed**: Expand beyond salary/tax to include safety, healthcare indices
**Files affected**: New research page + scoring expansion
**Impact**: MEDIUM-HIGH — differentiator

### Tier 3: Create in 2027

#### 6. AI Engineer Salary Report
**Type**: Emerging profession report
**Content**:
- AI/ML engineer salaries across 7 countries
- Trend analysis (emerging role premium)
- Comparison with traditional software engineering
- City-level breakdowns for tech hubs

#### 7. Olikit Global Wealth Index
**Type**: Wealth accumulation analysis
**Content**:
- Savings potential by country and profession
- Investment capacity after tax and cost of living
- Wealth accumulation trajectories
- Retirement readiness scores

---

## Each Flagship Asset Must Include

- [ ] Original analysis (not just data tables)
- [ ] Methodology section with sources
- [ ] Charts and visualizations
- [ ] Summary tables
- [ ] Downloadable PDF or summary
- [ ] Press-ready statistics (quotable one-liners)
- [ ] Citation guidance ("How to cite this report")
- [ ] Journalist summary (200 words)
- [ ] JSON-LD Dataset schema
- [ ] Internal links to calculators and profession pages
- [ ] FAQ section
- [ ] Social sharing cards

---

## KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| Backlinks to flagship reports | 50+ in first 6 months | Ahrefs/SEMrush |
| Citations in AI responses | 10+ per report | Manual monitoring |
| Press mentions | 5+ per flagship asset | Google Alerts |
| Organic traffic to research | 10K+ monthly | GSC |
| Download counts | 500+ per report | Analytics |
