# Changelog

All notable changes to Olikit are documented here.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [v1.0-adsense-ready] — 2026-06-26

### Quality Infrastructure
- Playwright e2e testing framework installed
- axe-core accessibility testing integrated
- Lighthouse CI configured (performance, a11y, SEO, best practices)
- Prettier code formatter configured
- Husky pre-commit hooks with lint-staged
- Vitest unit testing configured
- GitHub Actions CI pipeline (lint, typecheck, format, build, smoke, a11y, seo)
- TypeScript strict mode with test config exclusions

### Accessibility Improvements (Sprint 2–6)
- Skip link fixed with `id="main-content"` on locale layout
- 6 form inputs now have `aria-label` (header search, search-client, newsletter ×3, state-nav)
- Shell side-effect fixed — `localStorage.setItem` moved from render path to `useEffect`
- `src/app/global-error.tsx` created for root layout error recovery
- Added `scope="col"` to all `<th>` elements across 129 files
- Calculator inputs now have `htmlFor`/`id` pairs for screen reader association
- Newsletter form status messages use `aria-live` and `role="alert"`
- Footer link touch targets increased to 44px minimum
- Context bar "View Global" link improved (larger text, better opacity)
- Comparison table caption added for screen readers
- Comparison table row hover added for better scanning

### SEO Improvements (Sprint 3–5)
- Title brand fix: removed embedded "Olikit" from page titles, root template supplies brand
- BreadcrumbList JSON-LD deduplication (removed component-level emission)
- OG/Twitter meta tags added to 13 static pages
- Breadcrumbs added to 6 page types (rankings, countries, glossary, research, comparison, salary hub)
- Article JSON-LD added to research reports
- CollectionPage JSON-LD added to rankings and countries pages
- FAQPage JSON-LD added to rankings page
- Dynamic tool links in rankings hub (replaced hardcoded cards)
- SEO intro text added to countries page
- `/countries` confirmed in sitemap

### Performance Improvements (Sprint 3–5)
- `profession-page.tsx` converted to server component (-~581 lines client JS)
- `salary-index-renderer.tsx` converted to server component (-~581 lines client JS)
- 10 dead components deleted (cta-section, city-analysis, future-outlook, locale-switcher, relocation-intelligence, ranking-table, key-findings, research-findings, related-research, ui/motion)
- Dead `lib/revenue/` directory removed
- `next/dynamic` code splitting for CalculatorInteractive and SalaryComparisonCalculator
- Loading skeletons shown while dynamic chunks load
- 7 `loading.tsx` + 4 `error.tsx` files created at deeper route levels
- Suspense boundaries added to search and tool pages
- Duplicate currency converter with fake BASE_RATES removed
- Middleware 307 redirect on `/` removed (was hijacking root homepage)
- `next-bundle-analyzer` removed (peer dep conflict with Next 16)
- `playwright` and `@google/generative-ai` moved from deps to devDeps
- 5 ranking pages re-encoded from Windows-1252 to UTF-8

### Revenue Optimization (Sprint 5–6)
- Newsletter signup added to 4 new page types: salary hub, rankings, countries, comparison (standard path)
- Newsletter touchpoints increased from 4 to 8 templates
- Tool page ad unit now visible on mobile (was `hidden md:block`)
- Calculator CTA and Tax Calculator CTA added to research report pages

### UX Improvements (Sprint 3–6)
- Rankings page rebuilt from 79-line stub to full hub with dynamic data, FAQ, JSON-LD
- Countries page enhanced with SEO intro text, FAQ, newsletter, trust components
- Salary hub wrapped in Shell (was missing header, footer, navigation, tracking)
- Salary hub now has breadcrumbs, newsletter, SourceFooter, LastUpdated
- Glossary entries now have breadcrumbs linking back to glossary hub
- Research reports now have breadcrumbs linking back to research hub
- Comparison pages now have 3-level breadcrumbs matching JSON-LD
- Context bar "View Global" link improved for visibility
- Sidebar link touch targets increased to 44px minimum

### Bug Fixes
- UTF-8 encoding fix for 5 ranking pages (Windows-1252 → UTF-8)
- Shell side-effect moved to useEffect (hydration safety)
- Middleware root redirect removed

### Reports Generated
- `reports/repository-audit.md` — Full codebase audit (264 routes, 71 components)
- `reports/performance-baseline.md` — Performance analysis
- `reports/seo-baseline.md` — SEO scoring (8/10)
- `reports/accessibility-baseline.md` — A11y scoring (8/10)
- `reports/design-system-audit.md` — Component inventory (71 components)
- `reports/product-backlog.md` — 30-item prioritized backlog
- `reports/top-pages.md` — High-impact page discovery
- `reports/page-audits/summary.md` — Page-level audits
- `reports/internal-linking.md` — Link graph analysis
- `reports/sprint5-summary.md` — Sprint 5 results
- `reports/sitemap-final-report.md` — Sitemap analysis

### Testing
- `tests/smoke/site.smoke.ts` — Core page smoke tests
- `tests/a11y/accessibility.spec.ts` — axe-core accessibility tests
- `tests/seo/seo.spec.ts` — SEO validation tests

### Configuration
- `.husky/pre-commit` — lint-staged pre-commit hook
- `.prettierrc` — Prettier configuration
- `.prettierignore` — Prettier ignore patterns
- `.lhcirc.js` — Lighthouse CI configuration
- `playwright.config.ts` — Playwright test configuration
- `vitest.config.ts` — Vitest configuration
- `tsconfig.json` — Updated excludes for test files
- `.github/workflows/ci.yml` — GitHub Actions CI pipeline

---

### Remaining Technical Debt

| Issue | Impact | Effort | Priority |
|-------|--------|--------|----------|
| Layout architecture (237 manual Shell wraps → nested layouts) | Inconsistent layout, harder to update shell | Large | Low |
| 264 individual route files (should be dynamic) | Massive file count | Large | Low |
| `generators.ts` monolith (1366 lines) | Hard to navigate | Medium | Low |
| Storybook blocked by Next 16 peer dep | No component docs | Medium | Low |
| `text-zinc-500` borderline contrast | May fail a11y for small text | Small | Low |

---

## Sprint History

| Sprint | Focus | Dates | Status |
|--------|-------|-------|--------|
| 1 | Product Excellence Foundation | 2026-06-26 | ✅ Complete |
| 2 | P0 Fixes | 2026-06-26 | ✅ Complete |
| 3 | P1 Fixes | 2026-06-26 | ✅ Complete |
| 4 | P2 Quick Wins | 2026-06-26 | ✅ Complete |
| 5 | Page Excellence | 2026-06-26 | ✅ Complete |
| 6 | A11y & Linking | 2026-06-26 | ✅ Complete |
