# Current Architecture — Phase 1 & 4 Report

## Root Causes Found

### RC1: Global Homepage Redirect (CRITICAL)
- **File**: `src/middleware.ts:73-83`
- **Behavior**: `GET /` → 307 → `/{locale}` (defaults to `/us`)
- **Impact**: The global homepage at `src/app/page.tsx` (1,290 lines) is NEVER served. All users land on a country-specific page.
- **Code**: `middleware.ts` line 73-74: `if (pathname === "/") { url.pathname = "/" + locale; return NextResponse.redirect(url, 307) }`
- **Evidence**: The root `page.tsx` is fully built (hero, global salary index, all-country snapshots, research, FAQ) — all dead code behind the redirect.

### RC2: Layout/Shell Double-Wrap (CRITICAL)
- **Two competing wrappers exist**:
  - `src/app/[locale]/layout.tsx` (47 lines) — renders ContextBar, Header, `<main>`, Breadcrumbs, Footer, CookieConsent
  - `src/components/shell.tsx` (41 lines) — renders ContextBar, Header, `<main>`, Breadcrumbs, **CurrencyToggle**, Footer, CookieConsent
- **Pages using BOTH** (e.g., `[locale]/page.tsx`, `[locale]/salary/[profession]/page.tsx`): Get **double** header, footer, breadcrumbs, context bar, cookie consent → broken DOM
- **Pages using NEITHER/only layout** (e.g., `[locale]/tools/[tool]/page.tsx`): Miss **CurrencyToggle**
- **Root page** (`/`): Uses Shell ONLY (no `[locale]/layout.tsx`) → correct but unreachable
- **Root pages** (e.g., `/software-engineer-salary-us`): Use neither → no shell, no layout

### RC3: Internal Link US Bias
- `src/app/page.tsx` popularResearchLinks at lines 279-292 hardcode `/us/...` URLs:
  - `/us/salary` — "Highest Paying Jobs in the United States"
  - `/us/salary/software-engineer` — "Software Engineer Salary"
  - `/us/tools/tax-calculator` — "Salary After Tax"
- Zero non-US country links in the "Popular Research & Rankings" section
- Creates US-centric internal link graph

### RC4: Canonical Fragmentation
- **Root-level country salary pages** (143 files under `src/app/` like `ai-engineer-salary-us/page.tsx`): Hardcoded canonical to themselves (e.g., `olikit.com/ai-engineer-salary-us`)
- **Locale versions** (`/[locale]/salary/[profession]`): Canonical to locale path (e.g., `olikit.com/us/salary/ai-engineer`)
- **Result**: Duplicate content competition between `/ai-engineer-salary-us` and `/us/salary/ai-engineer`

### RC5: Missing Hreflang on Non-Locale Pages
- Root-level pages (`/software-engineer`, `/rankings`, etc.) do NOT call `generateHreflangTags()`
- Only pages using `buildMetadata()` from `src/lib/seo/metadata.ts` get hreflang
- Hundreds of pages have no language alternates

### RC6: Navigation "Home" Ambiguity
- `src/components/header.tsx:28`: `{ label: "Home", href: isGlobal ? "/" : "/" + currentSlug }`
- From a locale page like `/us/salary/software-engineer`: Home → `/us` (fine)
- From global context: Home → `/` → 307 → `/us` (confusing)
- No way to navigate TO the global homepage

### RC7: No Route Groups
- 147 directories under `src/app/`, zero route group `(group)` folders
- No logical separation between locale and global routes
- Everything is flat — mixed concerns

## Current Route Structure

```
/ (global homepage — redirected away)
├── /about, /contact, /methodology, /disclaimer, /terms, /privacy-policy, /data-sources, /editorial-policy, /countries, /professions
├── /compare (country comparison tool)
├── /comparisons (hub + detail pages)
├── /rankings (hub + detail pages)
├── /research (hub + detail pages)
├── /software-engineer, /data-scientist, /product-manager, etc. (profession hubs)
├── /{profession}-salary-{country} (143 country-profession pages)
├── /{profession}-best-countries, /{profession}-highest-paying-countries (rankings)
├── /{profession}-vs-{other} (comparison pages)
├── /{profession}-ppp-adjusted-salary, /{profession}-tax-adjusted-salary
├── [locale]/
│   ├── / (country hub — 7 pages)
│   ├── /salary/[profession] (country-profession pages)
│   ├── /tools/[tool] (calculators)
│   ├── /tools/[tool]/compare
│   ├── /guides, /guides/[guide], /guides/best
│   ├── /comparisons, /comparisons/[type]/[slug]
│   ├── /rankings, /research, /research/[report]
│   ├── /state/[subregion], /state/[subregion]/[tool]
│   ├── /states, /average-salary/[state], /cost-of-living/[state]
│   ├── /glossary, /glossary/[entry]
│   ├── /financial-data, /search, /updates, /best-states-*
│   └── /salary-vs-cost-of-living/[state]
```

## Current Template/Layout Flow

```
RootLayout (layout.tsx)
├── <CurrencyProvider>
│   ├── {children}
│   ├── AdSense script (conditional)
│   └── <SiteScripts>

For global pages (/, /about, /rankings, /software-engineer, etc.):
  page.tsx may or may not wrap in <Shell>

For locale pages (/[locale]/...):
  LocaleLayout ([locale]/layout.tsx)
  ├── <ContextBar>
  ├── <Header>
  ├── <main>
  │   ├── <Breadcrumbs>
  │   └── {children} — page may also wrap in <Shell>
  ├── <Footer>
  └── <CookieConsent>
```

## Counts
- Total `page.tsx`: 232
- Root-level pages: ~200
- Locale pages: 32 (7 countries × variable sub-routes)
- Countries: 7 (us, uk, au, ca, nz, in, sg)
- Route groups: 0
- Layout files: 2 (root + [locale])

## Key Files
| File | Function |
|------|----------|
| `src/middleware.ts` | Locale detection + 307 redirect of `/` → `/{locale}` |
| `src/app/layout.tsx` | Root layout: fonts, meta, CurrencyProvider |
| `src/app/page.tsx` | Global homepage (1,290 lines, unreachable) |
| `src/app/[locale]/layout.tsx` | Locale layout: header, footer, breadcrumbs |
| `src/app/[locale]/page.tsx` | Country hub (1,290 lines per locale, 7× data) |
| `src/components/shell.tsx` | Client wrapper: duplicates [locale]/layout + CurrencyToggle |
| `src/lib/seo/metadata.ts` | Central SEO metadata builder (canonical, hreflang) |
| `src/lib/seo/hreflang.ts` | Hreflang tag generator |
| `src/lib/seo/locales.ts` | 7 locale definitions |
| `src/lib/content/country-registry.ts` | Country metadata (flags, currencies, themes) |
| `src/lib/site-intelligence.ts` | Static page count analytics |
