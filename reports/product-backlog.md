# Product Backlog — Olikit

Generated: 2026-06-26

---

## P0 — Critical (Blocks production quality)

| # | Issue | Type | Impact | Effort |
|---|-------|------|--------|--------|
| 1 | Skip link broken on locale pages (missing `id="main-content"`) | A11y | Screen reader users can't skip navigation on 95% of pages | Small |
| 2 | 4 inputs missing labels/aria-label | A11y | Screen readers can't identify search/newsletter inputs | Small |
| 3 | Shell side-effect in render (localStorage.setItem in render path) | Hydration | Potential hydration mismatch, React warnings | Small |
| 4 | No global-error.tsx | Reliability | Unhandled layout errors crash the entire page | Small |
| 5 | playwright in production dependencies | Bundle | ~50MB unnecessary in production install | Small |
| 6 | @google/generative-ai in production dependencies | Bundle | ~150KB+ unused in client code | Small |

## P1 — High (Quality & Performance)

| # | Issue | Type | Impact | Effort |
|---|-------|------|--------|--------|
| 7 | profession-page.tsx marked "use client" but needs no hooks | Performance | ~581 lines of unnecessary client JS | Small |
| 8 | salary-index-renderer.tsx marked "use client" but needs no hooks | Performance | ~581 lines of unnecessary client JS | Small |
| 9 | Zero Suspense usage — no progressive rendering | Performance | Users see nothing until full page loads | Medium |
| 10 | No loading states below root level | UX | No feedback during navigation to sub-pages | Medium |
| 11 | No error boundaries below root level | Reliability | Unhandled errors crash entire route segments | Medium |
| 12 | Duplicate BreadcrumbList JSON-LD (component + page-level) | SEO | Confuses search engines with duplicate schemas | Small |
| 13 | ~15 static pages lack explicit OG/Twitter tags | SEO | Social sharing previews use default fallbacks | Small |
| 14 | No scope="col" on table headers | A11y | Screen readers can't associate data cells with headers | Medium |
| 15 | 10 dead components (zero imports) | Code Health | Confusing codebase, increased bundle scanning | Small |
| 16 | lib/revenue/placement-plans.ts duplicate of lib/monetization/ | Code Health | Conflicting interfaces, dead code | Small |

## P2 — Medium (Polish & Scale)

| # | Issue | Type | Impact | Effort |
|---|-------|------|--------|--------|
| 17 | Comparison pages: 13 pages × 200 lines of copy-pasted template | Maintainability | ~2600 lines duplicated, changes require 13 edits | Large |
| 18 | generators.ts monolith (1366 lines) | Maintainability | Hard to navigate, edit, test | Medium |
| 19 | Dual layout architecture (237 manual Shell wraps) | Architecture | Inconsistent layout behavior, hard to update shell | Large |
| 20 | 264 individual route files (should be dynamic) | Architecture | Massive file count, template-driven pages as individual files | Large |
| 21 | No code splitting (zero next/dynamic usage) | Performance | All components load eagerly on every page | Medium |
| 22 | No Storybook | DX | No component documentation, no visual testing | Medium |
| 23 | Search bundles full datasets client-side | Performance | Large client JS payload for search feature | Medium |
| 24 | Calculator components bundle tax data client-side | Performance | Tax data loaded even when not needed | Medium |
| 25 | Footer touch target too small | Mobile | Hard to tap on mobile | Small |
| 26 | Context bar "View Global" too small + low opacity | Mobile/UX | Hard to see and tap | Small |
| 27 | text-zinc-500 borderline contrast for small text | A11y | May fail contrast checks for small text | Small |
| 28 | No aria-live for newsletter form status | A11y | Screen readers don't announce form submission results | Small |
| 29 | /countries missing from sitemap | SEO | Page not discoverable by search engines via sitemap | Small |
| 30 | 50+ root-level report markdown files | Code Health | Cluttered project root | Small |

## Summary

| Priority | Count | Theme |
|----------|-------|-------|
| P0 | 6 | Accessibility blockers, hydration, bundle waste |
| P1 | 10 | Performance, SEO, reliability, code cleanup |
| P2 | 14 | Architecture, maintainability, polish |
| **Total** | **30** | |

### Recommended Sprint 2 Focus

1. Fix all P0 issues (6 items, all small effort)
2. Fix P1 items 7-8 (server component conversions — biggest performance win)
3. Fix P1 items 1-2 (a11y quick wins)
4. Fix P1 item 12 (duplicate schema)
5. Begin P2 item 19 (layout architecture study)
