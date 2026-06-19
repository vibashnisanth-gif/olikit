# Search Console Operating System

## Overview

The Search Console Operating System defines how Olikit uses Search Console data to make expansion decisions. It prevents random page creation by requiring data-backed signals before any new content is built.

## 1. Impression Tracking

- Monitor impressions per query family in Google Search Console
- Track impression trends weekly and monthly
- Minimum threshold: 100 impressions over 90 days before considering expansion

## 2. CTR Tracking

- Measure click-through rate per query family
- Baseline expectation: CTR >= 2% indicates strong relevance signal
- Low CTR (< 1%) with high impressions suggests metadata/title mismatch — fix existing page before expanding

## 3. Position Tracking

- Track average position per query family
- Position < 10: page is ranking well — no expansion needed
- Position 10–20: expansion candidate if trend is positive
- Position > 20: impressions exist but page not ranking — do not expand

## 4. Winning Page Identification

A page qualifies as "winning" when:
- Impressions > 500 in 90 days
- CTR > 3%
- Position < 15
- Ranking trend is stable or improving (3-month slope positive)

Winning pages may be candidates for:
- Internal link reinforcement
- Related page creation
- Content depth expansion

## 5. Expansion Rules

Only expand when ALL conditions are met:
1. **Impressions exist** — at least 50 impressions/month for the target query family
2. **Ranking trend is positive** — 3-month position trajectory is improving or stable
3. **Query family shows demand** — search volume is stable or growing

### Do NOT expand when:
- No impressions in the query family
- Ranking position is declining
- Query family has no sustained demand signal
- The expansion would create an orphan page (no internal links)

## 6. Implementation

### Weekly Workflow

1. Export Search Console data for the last 90 days
2. Group queries by profession family (e.g., "product manager salary", "software engineer salary")
3. Identify query families meeting impression + position thresholds
4. Cross-reference with existing page coverage
5. Only create new pages for uncovered query families that pass all three expansion rules

### Monthly Review

1. Audit pages created under expansion rules
2. Measure their impression/CTR/position performance
3. Archive or improve underperforming pages
4. Update expansion rules based on learnings

## 7. Governance

- No page may be created without a Search Console signal
- All new pages must receive inbound and outbound internal links
- Orphan pages are prohibited
- Expansion decisions must be documented with evidence (screenshots or exports)
