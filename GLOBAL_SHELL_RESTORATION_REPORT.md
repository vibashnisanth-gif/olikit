# Global Shell Restoration Report

## Result

All 13 global pages now render inside the shared Shell (ContextBar → Header → Footer → CookieConsent). Build output confirms every page is static (`○`) with zero type errors.

## Pages Fixed

| Page | Wrapper | Edge Case 
|------|---------|----------
| `/` (homepage) | `<Shell>` | Already done in V8.5 |
| `/about` | `<Shell>` | `<main>` → `<div>` to avoid nested main |
| `/compare` | `<Shell>` | None |
| `/contact` | `<Shell>` | Fragment → Shell |
| `/countries` | `<Shell>` | None |
| `/data-sources` | `<Shell>` | None |
| `/disclaimer` | `<Shell>` | Fragment → Shell |
| `/editorial-policy` | `<Shell>` | None |
| `/methodology` | `<Shell>` | None |
| `/privacy-policy` | `<Shell>` | Fragment → Shell |
| `/professions` | `<Shell>` | None |
| `/rankings` | `<Shell>` | None |
| `/research` | `<Shell>` | None |
| `/terms` | `<Shell>` | Fragment → Shell |

## Edge Cases Handled

1. **`/about`** — had its own `<main>` which would nest inside Shell's `<main>`. Converted to `<div>`.
2. **5 pages with JSON-LD fragments** (`/about`, `/contact`, `/disclaimer`, `/privacy-policy`, `/terms`) — used `<>...</>` surrounding both a `<script>` tag and content. Replaced `<>` with `<Shell>` so the JSON-LD script still renders inside Shell.

## Not in Scope

- `/[locale]/layout.tsx` — locale pages have their own inline header/footer; not touched.

## Build Stats

- TypeScript: 0 errors
- Static pages generated: 1092
