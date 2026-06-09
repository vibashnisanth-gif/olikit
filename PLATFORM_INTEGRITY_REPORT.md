# Platform Integrity Report — V11

## Scope

Platform-wide audit of data integrity, template consistency, breadcrumb completeness, country context switching, and internal linking.

## Bugs Found and Fixed

### P0 — Rankings Page Displays Local Currencies as USD (FIXED)

**File:** `src/app/rankings/page.tsx`

**Bug:** The "Highest Average Salaries by Country" section averaged profession salaries in local currency (INR, SGD, GBP, etc.) then displayed the result with a `$` prefix. India's ₹772k cross-profession average appeared as `$772k` — ranking India #1 with an impossible $745k average salary.

**Root cause:** No USD normalization before averaging or displaying.

**Fix:**
- Added `USD_EXCHANGE_RATES` map to `src/lib/content/country-registry.ts`
- Added `toUSD(amount, currencyCode)` helper
- Rankings page now converts every salary to USD via `toUSDForCountry()` before computing averages
- Rates: 1 USD = 1.27 GBP / 0.67 AUD / 0.73 CAD / 0.60 NZD / 0.012 INR / 0.74 SGD

**Before:** India ranked #1 with `$772k` displayed
**After:** India correctly ranks near the bottom, showing `~$14.4k` for software engineer

---

### P0 — Comparison Engine Cross-Currency Percentage Bug (FIXED)

**File:** `src/lib/content/comparison-engine.ts`

**Bug:** The `salaryDiff` and `purchasingPowerDiff` calculations used raw local-currency values. India vs Singapore comparison: INR 450k vs SGD 72k produced "India salaries are 525% higher" — completely wrong (Singapore is ~10x higher in real terms).

**Fix:**
- Imported `toUSD` from country-registry
- Added `getCurrencyCodeForLocale()` to get the currency code for each comparison pair
- All percentage calculations (`salaryDiff`, `ppDiff`) now use USD-normalized values
- Purchasing power values displayed with `$USD` label

**Before:** IN vs SG comparison: "India salaries are 525% higher"
**After:** IN vs SG comparison: "Singapore salaries are ~887% higher" (correct)

---

## Sanity Validation (NEW)

**File:** `scripts/validate-salary-sanity.ts`

Added build-time salary validation that checks:
- Software Engineer > $500k USD → ERROR
- Doctor > $1M USD → ERROR
- Integrated into `npm run build` via `package.json`

**Current status:** All 10 professions across 7 countries pass validation (0 errors).

---

## Bugs Found — Not Yet Fixed

### P1 — Locale Pages Missing Breadcrumbs

**Scope:** 26+ pages under `/[locale]/` have no automatic breadcrumbs.

**Affected pages:** rankings, research, research reports, salary hub, tools hub, tool detail pages, guides hub, guide detail pages, states, state detail, state tool, comparisons, comparisons detail, best-states-*, financial-data, glossary, updates, search, locale homepage

**Root cause:** `src/app/[locale]/layout.tsx` renders `<main>{children}</main>` without `<Breadcrumbs />`. The shared `Breadcrumbs` component exists in `src/components/breadcrumbs.tsx` but is only used by the Shell (global pages).

**Workaround:** Some pages have manual inline breadcrumbs (salary/profession, tools/tool, state/subregion/tool, guides/guide) but these are inconsistent, lack JSON-LD structured data, and use different markup.

### P1 — `CountrySwitcher` Component Is Dead Code

**File:** `src/components/country-switcher.tsx`

A complete `CountrySwitcher` component exists with a "Global" option but is imported by zero files. The locale layout still uses `LocaleSwitcher` which has no "Global" option, trapping locale-page users.

### P2 — Dual Layout Systems

Global pages use `Shell` (ContextBar → Header → Footer → CookieConsent → Breadcrumbs). Locale pages use `[locale]/layout.tsx` (inline header + LocaleSwitcher → no ContextBar → no Breadcrumbs → inline footer). These are completely independent implementations with different component instances, making consistent UX changes require double work.

### P2 — `salary/page.tsx` Has Nested `<main>`

`src/app/[locale]/salary/page.tsx:71` has its own `<main>` tag that nests inside the layout's `<main>`, producing invalid HTML.

---

## Summary

| Category | Found | Fixed | Pending |
|---|---|---|---|
| Data Integrity (rankings) | 1 | 1 | 0 |
| Data Integrity (comparisons) | 1 | 1 | 0 |
| Sanity validation | 0 | 1 (new) | 0 |
| Breadcrumbs (locale pages) | 26+ pages | 0 | 26+ |
| Country switcher (dead code) | 1 | 0 | 1 |
| Template divergence | 2 systems | 0 | 2 |
| Nested `<main>` | 1 | 0 | 1 |
