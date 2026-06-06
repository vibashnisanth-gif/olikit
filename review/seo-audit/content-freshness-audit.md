# Content Freshness Audit

## Tax Year Coverage
| Locale | Tax Year | Status |
|--------|----------|--------|
| US | 2025-2026 | Current |
| UK | 2025-2026 | Current |
| AU | 2025-2026 | Current |
| CA | 2025 | Current |
| NZ | 2025-2026 | Current |
| IN | 2025-2026 | Current |
| SG | 2025 | Current |

## Last Updated Dates
- `sourceRegistry` in `sources.ts`: "June 2026" for all locales
- About page: "June 2026"
- Trust pages: "June 2026"

## Data Sources Cited
| Locale | # Sources | Top Source |
|--------|-----------|------------|
| US | 5 | IRS, BLS, Census Bureau, SSA, FHFA |
| UK | 3 | HMRC, ONS, MoneyHelper |
| AU | 3 | ATO, ABS, RBA |
| CA | 3 | CRA, Statistics Canada, Bank of Canada |
| NZ | 3 | IRD, Stats NZ, RBNZ |
| IN | 4 | Income Tax Dept, Data.gov.in, Ministry of Finance, RBI |
| SG | 4 | IRAS, SingStat, Ministry of Finance, CPF Board |

## Freshness Issues
1. **All data states "June 2026"** — Same date for all locales, may be inaccurate
2. **No per-page last-updated metadata** — Schema.org dateModified not set
3. **No visible "last updated" on tool pages** — Only on About and trust pages
4. **Source methodology text is identical across all locales** — Template-based, not locale-specific
5. **No changelog or version history** — No way to verify what changed between updates
6. **State data says "2025" sources** — State data points reference "Bureau of Labor Statistics, US Census Bureau (2025)" — these may need 2026 updates
