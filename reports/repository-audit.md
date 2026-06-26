# Olikit Repository Audit — Sprint 1

Generated: 2026-06-26

---

## Executive Summary

Olikit is a Next.js 16.2.6 / React 19.2.4 career intelligence platform with 264 routes, 71 components, and 7 locale variants. The SEO infrastructure is mature. The codebase has significant technical debt from rapid feature growth: a dual-layout architecture (237 pages manually wrapping `<Shell>`), heavy client-side components that should be server components, zero Suspense usage, and ~2600 lines of copy-pasted comparison templates. No CI/CD pipeline exists — deployments are manual Vercel CLI. No automated tests. No Storybook. No accessibility testing.

**Overall Score: 5/10** — Strong content/SEO foundation, weak engineering infrastructure.

---

## 1. Architecture

### Folder Structure

```
src/
├── app/              # 277 directories, 264 page.tsx files
├── components/       # 58 files flat + ui/ (11 files)
├── lib/              # 13 subdirectories (content, seo, currency, db, etc.)
├── calculators/      # 7 calculator implementations
├── types/            # 4 TypeScript type files
├── middleware.ts      # Locale detection
```

### App Router Health

| Metric | Value |
|--------|-------|
| Total routes | 264 |
| Layouts | 2 (root + [locale]) |
| Loading files | 2 (root + [locale]) |
| Error files | 2 (root + [locale]) |
| API routes | 7 |
| Dynamic routes | ~30 (via generateStaticParams) |

**Issues:**
- Dual layout: 200+ root-level pages manually wrap `<Shell>` while [locale] pages use the layout
- No route groups — non-locale routes have no shared layout
- Middleware does NOT rewrite to [locale]; it only sets cookies

### Component Organization

**58 components in flat `src/components/`** — no grouping by category.

| Category | Count | Examples |
|----------|-------|---------|
| Shell/Layout | 9 | shell, header, footer, breadcrumbs |
| Comparison sections | 9 | country-comparison, salary-comparison, tax-comparison |
| Calculator/Interactive | 4 | calculator-interactive, salary-comparison-calculator |
| Content sections | 13 | faq-section, sources-section, methodology-section |
| Data sections | 6 | state-data-table, state-nav, country-analysis |
| Monetization | 6 | ad-unit, affiliate-disclosure, sponsored-placement |
| UI primitives | 11 | badge, button, card, currency-salary, skeleton |

### Dead Code

| File | Issue |
|------|-------|
| `components/cta-section.tsx` | 0 imports |
| `components/city-analysis-section.tsx` | 0 imports |
| `components/future-outlook-section.tsx` | 0 imports |
| `components/locale-switcher.tsx` | 0 imports |
| `components/relocation-intelligence-section.tsx` | 0 imports |
| `components/ranking-table-section.tsx` | 0 imports |
| `components/key-findings-section.tsx` | 0 imports |
| `components/research-findings-section.tsx` | 0 imports |
| `components/related-research-section.tsx` | 0 imports |
| `components/ui/motion.ts` | 0 imports |
| `lib/revenue/placement-plans.ts` | Duplicate of monetization/placement-plans.ts |
| `lib/pipeline/index.ts` | No-op main() |

### Large Files (>500 lines)

| Lines | File |
|-------|------|
| 1366 | `lib/content/generators.ts` |
| 1075 | `app/[locale]/page.tsx` |
| 859 | `app/page.tsx` |
| 646 | `lib/content/locale-content.ts` |
| 583 | `app/research/global-salary-index-2026/page.tsx` |
| 576 | `lib/content/professions-data.ts` |
| 554 | `app/rankings/highest-paying-countries-software-engineers/page.tsx` |
| 528 | `components/salary-index-renderer.tsx` |

### Duplicate Code

1. **Comparison pages**: 13 pages × ~200 lines = ~2600 lines of copy-pasted template
2. **Salary vs TakeHome calculators**: ~90% identical, ~370 lines duplicated
3. **Revenue vs Monetization**: Two incompatible placement-plans files

---

## 2. Frontend Quality

### Client/Server Boundaries

| Category | Count | Notes |
|----------|-------|-------|
| Client components ("use client") | 26 | 2 should be server components |
| Server components | ~240 | All other pages/layouts |

**False positives (should be server components):**
- `profession-page.tsx` (581 lines) — zero hooks, purely presentational
- `salary-index-renderer.tsx` (581 lines) — zero hooks, purely presentational

**Hydration risks:**
- `shell.tsx` calls `localStorage.setItem` in render path (side effect during render)
- `cookie-consent.tsx`, `site-scripts.tsx`, `currency-context.tsx` use localStorage in useState initializers (guarded with `typeof window` check)

### Loading States

| Pattern | Status |
|---------|--------|
| Root loading.tsx | Spinner only |
| [locale] loading.tsx | Spinner only |
| Skeleton component | Exists but **unused** |
| Suspense | **Zero usage** |
| next/dynamic | **Zero usage** |
| Lazy loading | **None** |

### Error Boundaries

| Pattern | Status |
|---------|--------|
| Root error.tsx | Generic "Something went wrong" |
| [locale] error.tsx | Same |
| Global error.tsx | **Missing** |
| Deeper route errors | **Missing** |
| Error logging | **None** (no error.digest usage) |

### Bundle Concerns

| Package | Issue |
|---------|-------|
| `playwright` | In production dependencies (~50MB). Should be devDependency |
| `@google/generative-ai` | In production deps (~150KB+), zero imports in src/ |
| `search-client.tsx` | Bundles full datasets for client-side search |
| Calculator components | Bundle full profession + tax data client-side |

---

## 3. Performance

| Metric | Current | Target |
|--------|---------|--------|
| Lighthouse Performance | ~85-90 (estimated) | ≥95 |
| LCP | ~3-4s (estimated) | <2.5s |
| CLS | ~0.05 (estimated) | <0.1 |
| INP | ~250ms (estimated) | <200ms |

**Key issues:**
- Zero code splitting — all components eagerly loaded
- Heavy client bundles (search, calculators)
- No image optimization (no editorial images, but SVG/CSS not optimized)
- 1366-line generators.ts shipped to every page that imports it

---

## 4. SEO

### Coverage

| Element | Coverage | Notes |
|---------|----------|-------|
| Titles | 100% | All pages have titles |
| Descriptions | 100% | All pages have descriptions |
| Canonicals | 100% | All indexable pages |
| OpenGraph | ~97% | 3 utility pages missing OG |
| Twitter Cards | ~85% | Dynamic pages have, static pages mostly missing |
| Structured Data | 95% | Comprehensive (FAQ, Breadcrumb, Article, etc.) |
| Sitemap | 99% | `/countries` missing |
| Robots | 100% | Clean configuration |
| Hreflang | 100% | All 7 locales + x-default |
| H1 | 100% | One per page, descriptive |
| Internal Linking | Strong | Programmatic cross-linking |

### Issues

| # | Severity | Issue |
|---|----------|-------|
| 1 | Medium | Duplicate BreadcrumbList JSON-LD (component + page-level) |
| 2 | Low | ~15 static pages lack explicit OG/Twitter |
| 3 | Low | `/countries` missing from sitemap |

---

## 5. Accessibility

### Pass

- Skip-to-content link present
- prefers-reduced-motion handled in CSS
- Semantic HTML landmarks (header, nav, main, footer, section)
- Tables wrapped in overflow-x-auto
- Mobile hamburger with ARIA
- Focus-visible on Button component
- Responsive breakpoints consistent

### Issues

| Priority | Issue | Location |
|----------|-------|----------|
| **P1** | Skip link broken on locale pages (missing `id="main-content"` on `[locale]/layout.tsx` `<main>`) | `src/app/[locale]/layout.tsx:39` |
| **P1** | 4 inputs missing labels/aria-label | header.tsx:99, search-client.tsx:107, newsletter-signup.tsx, state-nav.tsx:40 |
| **P2** | No aria-live for newsletter form status | newsletter-signup.tsx |
| **P2** | No scope="col" on table headers | ~147 table instances |
| **P2** | Footer link too small for touch | footer.tsx:44 |
| **P3** | Context bar "View Global" too small + low opacity | context-bar.tsx |
| **P3** | text-zinc-500 borderline contrast for small text | Multiple |

---

## 6. Mobile

| Area | Status |
|------|--------|
| Viewport meta | PASS |
| Navigation | PASS (hamburger menu with ARIA) |
| Tables | PASS (overflow-x-auto on all) |
| Fixed widths | PASS (no overflow risk) |
| Touch targets | MOSTLY PASS (2 small targets) |
| Horizontal scroll | PASS |
| Responsive breakpoints | Excellent (1000+ responsive classes) |

---

## 7. Technical Debt Summary

| # | Debt Item | Severity | Effort |
|---|-----------|----------|--------|
| 1 | Dual layout architecture (237 manual Shell wraps) | HIGH | Large |
| 2 | 264 individual route files (should be dynamic) | HIGH | Large |
| 3 | generators.ts monolith (1366 lines) | HIGH | Medium |
| 4 | No CI/CD pipeline | HIGH | Medium |
| 5 | Zero automated tests | HIGH | Medium |
| 6 | No Storybook | MEDIUM | Medium |
| 7 | 10 dead components | MEDIUM | Small |
| 8 | 90% duplicate calculator components | MEDIUM | Small |
| 9 | Shell side-effect in render | MEDIUM | Small |
| 10 | playwright in production deps | LOW | Small |
