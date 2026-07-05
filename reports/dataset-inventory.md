# Dataset Inventory — Olikit

**Date**: July 2026
**Scope**: All proprietary datasets (Phase 3)

---

## Dataset Registry

| Dataset | File | Coverage | Sources | Quality |
|---------|------|----------|---------|---------|
| Salary Data | `src/lib/content/professions-data.ts` | 21 professions × 7 countries (147 points) | None cited | 4/10 |
| Tax Brackets | `src/calculators/tax.ts` | 7 countries (US: 3 statuses) | None cited | 6/10 |
| State Tax Brackets | `src/lib/content/state-tax-brackets.ts` | 51 jurisdictions (50 states + DC) | None cited | 6/10 |
| Country Registry | `src/lib/content/country-registry.ts` | 7 countries + exchange rates | None cited | 5/10 |
| City Data | `src/lib/content/cities-data.ts` | 35 cities across 7 countries | BLS, ONS, ABS (prose) | 4/10 |
| Cost of Living | `src/calculators/cost-of-living.ts` | 32 cities | None cited | 5/10 |
| State Data | `src/lib/content/state-data.ts` | 11 states | BLS, Census (prose strings) | 7/10 |
| State Cost of Living | `src/lib/content/state-expansion.ts` | 11 states | BLS, BEA, Census (prose) | 5/10 |
| State SEO Content | `src/lib/content/state-seo-content.ts` | 51 jurisdictions | None cited | 6/10 |
| Research Reports | `src/lib/content/research.ts` | 5 reports | 12+ sources (prose) | 7/10 |
| Exchange Rates | `src/lib/currency/rates.ts` | 9 currencies | None cited | 5/10 |

---

## Critical Gaps

### 1. No Source Attribution on Salary Data
147 salary data points with zero attribution. Homepage claims "government labor statistics" but no numbers can be traced.

**Fix**: Add `source` field to each profession's salary entry. At minimum: "BLS Occupational Employment Statistics, 2025".

### 2. No Historical Data
Everything is a single snapshot. No time series, no trend data.

**Fix**: Add `lastUpdated` field to each dataset. Consider year-over-year comparison pages.

### 3. City Data Duplication
`cities-data.ts` (35 cities) and `cost-of-living.ts` (32 cities) overlap with different indices.

**Fix**: Consolidate into single source of truth.

### 4. State Data Covers Only 11 of 50 States
`state-data.ts` and `state-expansion.ts` have 11 states. 39 states have thin content.

**Fix**: Expand to all 50 states + DC using BLS data.

### 5. No PPP Standalone Dataset
PPP adjustments mentioned in research but no dedicated dataset file.

**Fix**: Create `src/lib/content/ppp-data.ts`.

### 6. Exchange Rates Are Static Snapshot
Hardcoded rates dated 2026-06-21. No API fallback. EUR included but no EU country.

**Fix**: Add API-based rate refresh or at minimum document the snapshot date.

---

## Dataset Improvement Roadmap

### Sprint 1: Source Attribution
- Add `source` and `lastUpdated` to `professions-data.ts`
- Add `source` and `lastUpdated` to `tax.ts`
- Add `source` to `state-tax-brackets.ts`

### Sprint 2: Consolidation
- Merge `cities-data.ts` and `cost-of-living.ts` into single dataset
- Create `ppp-data.ts` from research report data

### Sprint 3: Coverage
- Expand `state-data.ts` to all 50 states + DC
- Expand `state-expansion.ts` to all 50 states + DC

### Sprint 4: freshness
- Add `lastUpdated` to all datasets
- Document update cadence per dataset
- Create dataset versioning system

---

## Reusable Dataset Structure

Every dataset should expose:
```typescript
interface Dataset {
  name: string
  description: string
  source: string
  sourceUrl?: string
  lastUpdated: string
  coverage: string
  methodology: string
  version: string
}
```

This enables:
- Google Dataset Search eligibility
- AI citation with source attribution
- Automated freshness checks
- Version history tracking
