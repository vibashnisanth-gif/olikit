# Template Consistency Report — V11

## Scope

Audit every page template for ContextBar, Header, Breadcrumbs, Footer, CookieConsent, Country Identifier, and Country Switcher.

---

## Global Pages (14 total) — All Consistent

All 14 global pages use `Shell`:
```
ContextBar → Header (with country dropdown) → Breadcrumbs → Content → Footer → CookieConsent
```

| Requirement | Status |
|---|---|
| Context Bar | ✅ Via Shell |
| Header | ✅ Via Shell |
| Breadcrumbs | ✅ Via Shell |
| Footer | ✅ Via Shell |
| Cookie Consent | ✅ Via Shell |
| Country Identifier | ✅ ContextBar shows current page context |

---

## Locale Pages (26+ total) — No Shared Template

All locale pages use `[locale]/layout.tsx`:
```
Header (with LocaleSwitcher) → Content → Footer → CookieConsent
```

| Requirement | Status |
|---|---|
| Context Bar | ❌ Missing |
| Header | ✅ Inline in layout |
| Breadcrumbs | ❌ Missing from layout (some pages implement inline) |
| Footer | ✅ Inline in layout |
| Cookie Consent | ✅ In layout |
| Country Identifier | ✅ Header shows country flag via LocaleSwitcher |
| Country Switcher | ❌ LocaleSwitcher has no "Global" option |

---

## Breadcrumb Coverage

| Page | Visual Breadcrumbs | JSON-LD | Source |
|---|---|---|---|
| All global pages | ✅ | ✅ | Shared `<Breadcrumbs />` in Shell |
| `[locale]/page.tsx` | ❌ | ❌ | — |
| `[locale]/rankings/page.tsx` | ❌ | ❌ | — |
| `[locale]/research/page.tsx` | ❌ | ❌ | — |
| `[locale]/research/[report]/page.tsx` | ❌ | ❌ | — |
| `[locale]/salary/page.tsx` | ❌ | ❌ | — |
| `[locale]/salary/[profession]/page.tsx` | ✅ | ❌ | Inline nav (manual) |
| `[locale]/tools/page.tsx` | ❌ | ✅ | Inline JSON-LD |
| `[locale]/tools/[tool]/page.tsx` | ✅ | ❌ | Inline nav (manual) |
| `[locale]/tools/[tool]/compare/page.tsx` | ❌ | ❌ | — |
| `[locale]/guides/page.tsx` | ❌ | ❌ | — |
| `[locale]/guides/[guide]/page.tsx` | ✅ | ✅ | `buildBreadcrumbs` + `buildBreadcrumbJsonLd` |
| `[locale]/guides/best/page.tsx` | ❌ | ❌ | — |
| `[locale]/states/page.tsx` | ❌ | ✅ | Inline JSON-LD |
| `[locale]/state/[subregion]/page.tsx` | ❌ | ✅ | Inline JSON-LD |
| `[locale]/state/[subregion]/[tool]/page.tsx` | ✅ | ❌ | Inline nav (manual) |
| `[locale]/comparisons/page.tsx` | ❌ | ❌ | — |
| `[locale]/comparisons/[type]/[slug]/page.tsx` | ❌ | ✅ | Inline JSON-LD |
| `[locale]/best-states-for-salary/page.tsx` | ❌ | ❌ | — |
| `[locale]/best-states-for-cost-of-living/page.tsx` | ❌ | ❌ | — |
| `[locale]/best-states-for-retirement/page.tsx` | ❌ | ❌ | — |
| `[locale]/best-states-for-home-affordability/page.tsx` | ❌ | ❌ | — |
| `[locale]/average-salary/[state]/page.tsx` | ❌ | ❌ | — |
| `[locale]/cost-of-living/[state]/page.tsx` | ❌ | ❌ | — |
| `[locale]/salary-vs-cost-of-living/[state]/page.tsx` | ❌ | ❌ | — |
| `[locale]/financial-data/page.tsx` | ❌ | ❌ | — |
| `[locale]/glossary/page.tsx` | ❌ | ❌ | — |
| `[locale]/glossary/[entry]/page.tsx` | ❌ | ❌ | — |
| `[locale]/updates/page.tsx` | ❌ | ❌ | — |
| `[locale]/search/page.tsx` | ❌ | ❌ | — |

**Total: 20+ locale pages missing breadcrumbs entirely, 8 with partial inline implementations**

---

## Country Switcher Status

| Component | File | Used By | Global Option |
|---|---|---|---|
| `LocaleSwitcher` | `src/components/locale-switcher.tsx` | `[locale]/layout.tsx`, `mobile-nav.tsx` | ❌ |
| `CountrySwitcher` | `src/components/country-switcher.tsx` | NOWHERE (dead code) | ✅ |
| Header dropdown | `src/components/header.tsx` | Shell (global pages) | ❌ |

The `CountrySwitcher` component (with "Global" option) was created but never wired into any template.

---

## Known HTML Violation

- `src/app/[locale]/salary/page.tsx:71` — has its own `<main>` that nests inside `[locale]/layout.tsx`'s `<main>`

---

## Summary

| Component | Global Pages (Shell) | Locale Pages (Custom Layout) |
|---|---|---|
| ContextBar | ✅ | ❌ |
| Breadcrumbs | ✅ (auto) | ❌ (14/26 missing) |
| Header | ✅ (shared component) | ✅ (inline, diff implementation) |
| Footer | ✅ (shared component) | ✅ (inline, diff implementation) |
| CookieConsent | ✅ | ✅ |
| CountrySwitcher w/ Global | ❌ (header dropdown lacks Global) | ❌ (LocaleSwitcher lacks Global) |
| CountrySwitcher dead code | ✅ component exists but unused | same |
