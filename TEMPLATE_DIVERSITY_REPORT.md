# TEMPLATE DIVERSITY REPORT — Phase 2

## Current State

| Family | Page Types | Distinct Structure | Unique Sections |
|--------|-----------|-------------------|-----------------|
| 1. Ranking: Best Countries | best-countries-for-* (2 files) | Yes | Quick Answers → Methodology → Per-Country → PPP → Relocation → Key Findings → Limitations |
| 2. Ranking: Highest Paying Cities | highest-paying-cities-* (3 files) | Yes (variant of Family 1) | Same 16-section structure, 2 heading labels differ |
| 3. Ranking: Highest Paying Countries | highest-paying-countries-* (2 files) | Yes (different from 1 & 2) | Introduction → Per-Country Breakdown → Related Research (no Quick Answers) |
| 4. Locale Homepage | [locale]/page.tsx (7 locales) | Completely unique | Snapshot → Quick Answers → Takeaways → Insights → Groups → Research → Gov Sources |
| 5. Profession Hub | professions/*/page.tsx | Unique | Snapshot → Salary Landscape → Career Levels → Highest Paying Countries/Cities |
| 6. Comparison | comparisons/*/page.tsx | Unique | Comparison → Salary → Tax → COL → PPP → Career → Immigration components |
| 7. Guide | [locale]/guides/[guide]/page.tsx | Dynamic, unique | Direct Answer → How to Use → Dynamic sections → Takeaways |
| 8. Tool | [locale]/tools/[tool]/page.tsx | Calculator-first, unique | Calculator → How to Use → Compare → Sidebar tools |
| 9. Country Salary | software-engineer-salary-*/page.tsx | Simple standalone | Hero → Takeaways → Salary Landscape → Experience → FAQ |
| 10. State | [locale]/state/[subregion]/page.tsx | Minimal | Tools → Other States → Sources |

**Total: ~10 distinct template families** — exceeds the "at least 4" requirement.

## Identical Section Order Within Families

| Family | Files | Issue |
|--------|-------|-------|
| Best Countries | SE + Data Scientist | Identical. Profession-only difference |
| Highest Paying Cities | SE + DS + PM | Near-identical. City names and data differ |
| Comparisons | All 5+ comparison pages | Identical component ordering |
| Country Salary | All 7 countries | Identical structure, country data differs |

## Recommendations

1. Rotate Rankings: Variant order for Best Countries vs Highest Paying Cities (progress section before methodology, swap FAQ and Sources, etc.)
2. Vary order in Comparisons: Shift RecommendationSection before CostOfLiving on some comparisons
3. Country Salary pages: These are intentionally identical (same UX for each country) — acceptable

## Verdict: PASS — sufficient template diversity exists. Minor rotations optional.
