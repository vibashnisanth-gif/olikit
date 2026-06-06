# Hreflang Analysis

## Implementation
File: `src/lib/seo/hreflang.ts`

## Tags Generated
For each tool/guide/page path, hreflang generates:
- `en-US` → `/{locale}/...`
- `en-GB` → `/{locale}/...`
- `en-AU` → `/{locale}/...`
- `en-CA` → `/{locale}/...`
- `en-NZ` → `/{locale}/...`
- `en-IN` → `/{locale}/...`
- `en-SG` → `/{locale}/...`
- `x-default` → `/{path without locale}/`

## Issues
1. **x-default points to root-level path** — e.g., `/tools/salary-calculator` which may 302-redirect to `/us/tools/salary-calculator`. This could cause confusion.
2. **All locales use `en` language** — No translations exist; all content is English. This means hreflang tags don't differentiate by language, only by region/country.
3. **No self-referential hreflang** — Best practice says each page URL should also have a hreflang pointing to itself with its own locale code.
4. **All 7 locales included on every page** — Even if a page doesn't exist in a locale (e.g., state-specific pages for non-US locales), hreflang tags are still generated pointing to non-existent pages.

## Route Coverage
| Route Type | Example | x-default |
|------------|---------|-----------|
| Locale home | /us | / |
| Tool page | /us/tools/salary-calculator | /tools/salary-calculator |
| State home | /us/state/california | /state/california |
| State tool | /us/state/california/salary-calculator | /state/california/salary-calculator |
| Guide page | /us/guides/salary-after-tax-by-country | /guides/salary-after-tax-by-country |
| Trust page | /about | /about (no locale substitution) |
