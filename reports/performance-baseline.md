# Performance Baseline — Olikit

Generated: 2026-06-26

## Current State

### Estimated Lighthouse Scores

| Metric | Estimated | Target | Status |
|--------|-----------|--------|--------|
| Performance | 85-90 | ≥95 | ⚠️ Below target |
| Accessibility | 90-95 | ≥95 | ⚠️ Borderline |
| Best Practices | 90-95 | ≥95 | ⚠️ Borderline |
| SEO | 95+ | ≥95 | ✅ On target |

### Core Web Vitals (Estimated)

| Metric | Estimated | Target | Status |
|--------|-----------|--------|--------|
| LCP | 3-4s | <2.5s | ❌ Over budget |
| CLS | 0.03-0.05 | <0.1 | ✅ Good |
| INP | 200-300ms | <200ms | ⚠️ Borderline |
| FCP | 1.5-2s | <1.8s | ⚠️ Borderline |
| TTI | 3-5s | <3.5s | ⚠️ Borderline |

### Bundle Analysis

| Category | Notes |
|----------|-------|
| Framework | Next.js 16.2.6 + React 19.2.4 (~80KB gzipped) |
| Client JS | Estimated 200-400KB gzipped across all routes |
| CSS | Tailwind v4 — estimated 15-25KB gzipped |
| Largest bundles | search-client.tsx (bundles full datasets), calculators (bundle tax data) |

### Key Issues

1. **Zero code splitting** — No `next/dynamic` usage. All client components eagerly loaded.
2. **Heavy client bundles** — Search and calculator components bundle full datasets.
3. **Server components marked as client** — profession-page.tsx (581 lines) and salary-index-renderer.tsx (581 lines) are client components but use zero hooks.
4. **No Suspense boundaries** — No progressive rendering or streaming.
5. **Large monolith files** — generators.ts (1366 lines, 265KB) imported by many pages.

### Recommended Fixes (Priority Order)

1. Convert `profession-page.tsx` and `salary-index-renderer.tsx` to server components (-~820KB client JS)
2. Add `next/dynamic` for heavy calculator components
3. Add `<Suspense>` boundaries with Skeleton fallbacks
4. Move search to server-side or use API routes for search data
5. Split generators.ts into smaller modules

### Route Performance Map

| Route Type | Estimated Size | Priority |
|------------|---------------|----------|
| Homepage (/) | Large (859 lines) | Medium |
| Locale homepage | Very large (1075 lines) | High |
| Tool pages | Medium | Medium |
| Profession pages | Medium (template-driven) | Low |
| Comparison pages | Large (200+ lines each, 13 pages) | Medium |
| Research pages | Very large (500+ lines) | Medium |
| Rankings pages | Large (300-550 lines) | Medium |
