# US State Data Summary

Source: `src/lib/content/state-data.ts`
States with content: 10 (California, Texas, Florida, New York, Illinois, Pennsylvania, Ohio, Georgia, North Carolina, Washington)

## Numerical Data Points

| State | Avg Salary | Median HH Income | Min Wage | Income Tax | Prop Tax % | Median Home | COL Index |
|-------|------------|-----------------|----------|------------|-----------|-------------|-----------|
| California | $73,220 | $92,000 | $16.00 | 1.0–13.3% | 0.71% | $750,000 | 142 |
| Texas | $60,000 | $73,000 | $7.25 | None | 1.60% | $310,000 | 92 |
| Florida | $55,000 | $67,000 | $13.00 | None | 0.80% | $395,000 | 100 |
| New York | $68,000 | $81,000 | $16.00 | 4.0–10.9% | 1.40% | $370,000 | 130 |
| Illinois | $62,000 | $78,000 | $14.00 | 4.95% flat | 2.07% | $250,000 | 92 |
| Pennsylvania | $56,000 | $72,000 | $7.25 | 3.07% flat | 1.49% | $240,000 | 97 |
| Ohio | $55,000 | $66,000 | $10.45 | 0–3.99% | 1.36% | $200,000 | 88 |
| Georgia | $58,000 | $71,000 | $7.25 | 1.0–5.75% | 0.80% | $320,000 | 94 |
| North Carolina | $58,000 | $66,000 | $7.25 | 4.75% flat | 0.70% | $310,000 | 96 |
| Washington | $77,000 | $91,000 | $16.28 | None | 0.80% | $570,000 | 120 |

## Content per state (in `generators.ts`)
Each state has 3 tool pages (salary-calculator, tax-calculator, mortgage-calculator) with:
- **Overview** — Economy, major employers, labor laws
- **TaxInfo** — State income tax, deductions, credits
- **Statistics** — Income, COL, housing, population
- **FAQs** — 6-7 state-specific questions per state per tool (~20 state FAQs per state)
