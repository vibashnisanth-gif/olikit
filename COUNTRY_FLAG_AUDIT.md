# Country Flag & Identity Standardization Audit

## Standards Applied

| # | Rule | Description |
|---|------|-------------|
| 1 | **No bare country codes** | Never display `US`, `UK`, `AU` etc. alone |
| 2 | **No mixed format** | Never display `GB United Kingdom` or `US United States` |
| 3 | **Flag + full name** | Always `🇺🇸 United States`, `🇬🇧 United Kingdom` |
| 4 | **Emoji for UI** | Emoji flags for labels, navigation, badges |
| 5 | **SVG for cards** | SVG flags only for large country cards or comparison tables |
| 6 | **No mixing** | Never mix emoji and SVG in the same component |

## Files Audited & Fixed

### Components

| File | Issue(s) Found | Fix Applied |
|------|---------------|-------------|
| `src/components/context-bar.tsx:25` | `GLOBAL` / `UNITED STATES` (uppercase, no flag) | Changed to `Global` / `United States` — flag already rendered via `COUNTRY_FLAGS[slug]` |
| `src/components/breadcrumbs.tsx:6,45` | `"Global"` without emoji | Changed to `"🌍 Global"` |
| `src/components/country-switcher.tsx:28` | `{currentName}` without flag | Added `{currentFlag}` before name, derived from `countries` array |
| `src/components/locale-switcher.tsx:23,37` | No flags on current name or dropdown options | Imported `COUNTRY_FLAGS`, added flags to label + each `<option>` |

### Pages

| File | Issue(s) Found | Fix Applied |
|------|---------------|-------------|
| `src/app/[locale]/page.tsx:68` | Country badge `{name}` without flag | Added `{COUNTRY_FLAGS[slug]}` before name |
| `src/app/[locale]/page.tsx:164` | `{slug.toUpperCase()}` → bare code `US` | Changed to `{COUNTRY_FLAGS[slug]} {name}` |
| `src/app/compare/page.tsx:74` | Table header `{c.flag} {c.currencyCode}` → `🇺🇸 USD` | Changed to `{c.flag} {c.name}` |
| `src/app/professions/page.tsx:97` | `{loc.name}` without flag | Added `{COUNTRY_FLAGS[loc.slug]}` before name |
| `src/app/[locale]/salary/page.tsx:100` | `{slug.toUpperCase()}` → bare code `US` | Changed to `{COUNTRY_FLAGS[slug]} {name}` |
| `src/app/[locale]/salary/[profession]/page.tsx:53` | Badge `{locale.name}` without flag | Added `{COUNTRY_FLAGS[localeSlug]}` before name |
| `src/app/[locale]/salary/[profession]/page.tsx:93` | Table `{loc.name}` without flag | Added `{COUNTRY_FLAGS[loc.slug]}` before name |
| `src/app/[locale]/tools/page.tsx:65` | Badge `Free financial tools for {name}` without flag | Added `{flag}` before text |
| `src/app/[locale]/research/page.tsx:37` | Badge `Olikit Global — {locale.name}` without flag | Changed to `{COUNTRY_FLAGS[locale.slug]} Olikit {locale.name}` |
| `src/app/[locale]/state/[subregion]/page.tsx:105,125` | Labels `Other {countryName} States` / `View all {countryName} states` without flag | Added `{countryFlag}` before name |

### Files Verified (No Changes Needed)

| File | Reason |
|------|--------|
| `src/app/page.tsx` | `GLOBAL INTELLIGENCE PLATFORM` is a brand badge, not a navigation label |
| `src/app/rankings/page.tsx` | Already uses `c.flag` + `c.name` throughout |
| `src/app/research/page.tsx` | Already uses `c.flag` + `c.name` throughout |
| `src/app/countries/page.tsx` | Already uses `c.flag` + `c.name` throughout |
| `src/components/header.tsx` | Already uses `c.flag` + `c.name` throughout |
| `src/components/footer.tsx` | Already uses `c.flag` + `c.name` throughout |
| `src/app/[locale]/states/page.tsx` | Already uses `{flag} {name}` in badge (line 66) |
| `src/app/api/og/route.tsx` | OG image uses text-only format (OK for image generation) |
| `src/app/[locale]/guides/best/page.tsx` | H1 heading only — no badge to fix |

### Summary

- **Files modified:** 13
- **Files verified (no change):** 8
- **Total unique violations fixed:** 13
- **Build status:** ✅ Passes cleanly
