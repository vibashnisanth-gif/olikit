# Country Switcher Audit

## Before V12

Three different country navigation implementations existed:

| Method | Location | Global Option | Status |
|---|---|---|---|
| `LocaleSwitcher` (select) | `[locale]/layout.tsx`, `mobile-nav.tsx` | ❌ | Active |
| `CountrySwitcher` (select) | `src/components/country-switcher.tsx` | ✅ | Dead code (0 imports) |
| Countries dropdown (links) | `src/components/header.tsx` | ❌ | Active in Shell |

Users on locale pages could NOT navigate back to Global.

## After V12

Single standard: `CountrySwitcher` component in Header.

| Method | Location | Global Option | Status |
|---|---|---|---|
| `CountrySwitcher` (select) | `src/components/header.tsx` (used by ALL pages) | ✅ | Active (standard) |

## Available Options

🌍 Global
🇺🇸 United States
🇬🇧 United Kingdom
🇦🇺 Australia
🇨🇦 Canada
🇳🇿 New Zealand
🇮🇳 India
🇸🇬 Singapore

## Navigation Behavior Verified

| From | To | Result |
|---|---|---|
| Global | United States | ✅ — navigates to /us |
| United States | United Kingdom | ✅ — navigates to /uk with path preservation |
| United Kingdom | Global | ✅ — navigates to / |
| Australia | Singapore | ✅ — navigates to /sg with path preservation |
| Singapore | Canada | ✅ — navigates to /ca with path preservation |
| Canada | Global | ✅ — navigates to / |

## Removed

- `LocaleSwitcher` — no longer imported anywhere
- `MobileNav` — no longer needed (Header has built-in mobile menu)
