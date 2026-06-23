# Current State — Olikit Production Site
Generated: 2026-06-23 | Source: Production fetch + codebase analysis

## Overview
- Framework: Next.js 14+ (App Router)
- Host: Vercel (production: olikit.com)
- Locales: 7 (us, uk, au, ca, nz, in, sg)
- Tools: 8 registered (salary, tax, mortgage, investment, retirement, business-loan, break-even, currency-converter)
- Professions: 12+
- Middleware: Locale detection + legacy URL redirects

## HTTP Status (all 200)
| Page | Title | Canonical | Hreflang |
|------|-------|-----------|----------|
| `/` | Compare Salaries, Taxes and Cost of Living Across Major Economies | ok | 8 tags |
| `/us` | Free Online Finance & Business Tools \| Olikit | ok | 8 tags |
| `/uk` | Free Online Finance & Business Tools United Kingdom \| Olikit | ok | 8 tags |
| `/about` | About — Free Online Finance & Business Calculators \| Olikit | ok | none |
| `/comparisons` | Salary Comparisons — ... \| Olikit | ok | none |
| `/software-engineer` | Software Engineer Salary & Career Intelligence (2026) | ok | none |
| `/us/salary/software-engineer` | Software Engineer Salary in United States (2025) | ok | none |
| `/us/tools/salary-calculator` | Salary Calculator United States - Free Take-Home Pay Calculator | ok | 8 tags |
| `/us/tools/currency-converter` | Currency Converter United States - Free Online Currency Exchange Rate Converter | ok | 8 tags |
| `/us/guides` | Financial Guides for United States \| Olikit | ok | none |

## Known Issues (unfixed)
1. **Sitemap incomplete** — only `/us/` and root URLs; missing `/uk/`, `/au/`, `/ca/`, `/in/`, `/nz/`, `/sg/`
2. **Hreflang gaps** — missing on profession hubs, comparisons, about, guides
3. **Year inconsistency** — `/software-engineer` says 2026, `/us/salary/software-engineer` says 2025
4. **Currency converter rates** — hardcoded in `BASE_RATES`, not real exchange rates
5. **Currency converter symbol** — input shows locale `$` regardless of selected currency

## Quality Gates
| Gate | Status |
|------|--------|
| Critical UX bugs | 0 |
| Broken flows | 0 |
| Dead ends | 0 |
| Mobile overflow | 0 |
| Template leaks | 0 |
| 404s | 0 |
| 500s | 0 |
