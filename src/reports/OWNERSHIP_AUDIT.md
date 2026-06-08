# Ownership Audit

Date: 2026-06-07
Auditor: V3 Sprint

## Ownership Rules

GLOBAL ONLY:
- `/` (global homepage)
- `/compare`
- `/rankings`
- `/research`
- `/methodology`
- `/data-sources`
- `/editorial-policy`
- `/search`
- `/countries`
- `/professions`

COUNTRY ONLY:
- `/[locale]/*` (all pages under country slug)

## Page Type Audit

| Page | Current Owner | Correct Owner | Status |
|------|--------------|---------------|--------|
| `/` | GLOBAL | GLOBAL | FIXED — was redirecting to /us, now a proper Global homepage |
| `/about` | GLOBAL | GLOBAL | OK |
| `/contact` | GLOBAL | GLOBAL | OK |
| `/privacy-policy` | GLOBAL | GLOBAL | OK |
| `/terms` | GLOBAL | GLOBAL | OK |
| `/disclaimer` | GLOBAL | GLOBAL | OK |
| `/countries` | GLOBAL | GLOBAL | OK |
| `/professions` | GLOBAL | GLOBAL | OK |
| `/compare` | GLOBAL | GLOBAL | NEW |
| `/rankings` | GLOBAL | GLOBAL | NEW |
| `/research` | GLOBAL | GLOBAL | NEW |
| `/methodology` | GLOBAL | GLOBAL | NEW |
| `/data-sources` | GLOBAL | GLOBAL | NEW |
| `/editorial-policy` | GLOBAL | GLOBAL | NEW |
| `/[locale]` / country hubs | COUNTRY | COUNTRY | OK |
| `/[locale]/tools/*` | COUNTRY | COUNTRY | OK |
| `/[locale]/guides/*` | COUNTRY | COUNTRY | OK |
| `/[locale]/salary/*` | COUNTRY | COUNTRY | OK |
| `/[locale]/state/*` | COUNTRY | COUNTRY | OK |
| `/[locale]/comparisons` | COUNTRY | COUNTRY | OK |
| `/[locale]/rankings` | COUNTRY | COUNTRY | OK |
| `/[locale]/research` | COUNTRY | COUNTRY | OK |
| `/[locale]/search` | COUNTRY | COUNTRY | OK |

## Violations Found and Fixed

1. **CRITICAL: `/` was redirecting to `/us`** — The Global homepage was acting as a US homepage redirect. FIXED: `/` is now a proper Global authority hub with no country-specific content above the fold.

2. **No global authority pages existed** — `/compare`, `/rankings`, `/research`, `/methodology`, `/data-sources`, `/editorial-policy` were missing. FIXED: All 6 pages created.

3. **Country identity was hidden** — Country name was in a dropdown, not visible at all times. FIXED: Context bar now shows flag + country name on every page.

4. **Country content was leaking into Global homepage** — The country locale page showed tools, guides, and profession data with country-specific context. The Global homepage now shows only global content.

## Remaining Concerns

- Country pages still reference `{country}` in tool/guide descriptions, which is appropriate.
- The `/professions` page is global (no locale prefix) but links to country-specific salary pages. This is correct — it's a global hub pointing to localized content.
