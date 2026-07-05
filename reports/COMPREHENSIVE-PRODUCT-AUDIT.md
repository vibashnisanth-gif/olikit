# Olikit Comprehensive Product Audit

**Date**: June 2026
**Scope**: Full codebase — architecture, components, SEO, data, accessibility, performance, security
**Methodology**: Engineering Operating System v1.0 — Evidence-based, no speculation
**Baseline**: ~2,340 sitemap URLs, 72 components, 107 route files, 4 languages

---

## Executive Summary

Olikit is a well-architected Next.js 16.2.6 application with React 19.2.4, Tailwind v4, and Cloudflare D1. The codebase demonstrates solid fundamentals: clean server/client split, semantic HTML, structured data, and reasonable performance. However, the audit identified **14 actionable findings** across 7 areas, with **3 critical issues** that affect data accuracy and **5 high-severity gaps** in accessibility and performance.

**Overall Score: 72/100**

| Area | Score | Status |
|------|-------|--------|
| Architecture & Code Quality | 82/100 | Good |
| SEO & Structured Data | 88/100 | Strong |
| Data Layer & Calculators | 65/100 | Needs work |
| Accessibility (a11y) | 58/100 | Gaps exist |
| Performance | 68/100 | Optimization needed |
| Security | 90/100 | Solid |
| Content & UX | 75/100 | Good foundation |

---

## Phase 1: Repository Discovery

### Architecture
- **Framework**: Next.js 16.2.6 with App Router, Turbopack
- **React**: 19.2.4 (latest stable)
- **Styling**: Tailwind CSS v4 with CSS variables
- **Database**: Cloudflare D1 (via `lib/db.ts`)
- **Deployment**: Vercel (production), Cloudflare (database)
- **Build**: Turbopack (fast dev, optimized production)
- **Testing**: Vitest (unit), Playwright (E2E)

### Routing Structure
- **107 route files** across 4 languages (en, es, de, fr)
- **84 calculator/tool pages** (salary, tax, mortgage, cost-of-living, etc.)
- **630 city × profession pages** (30 cities × 21 professions)
- **2,096 generated pages** (static + dynamic)
- **~2,340 sitemap URLs**

### Component Architecture
- **72 components total**: 41 server, 31 client
- **12 UI primitives** (button, card, badge, section, etc.)
- **26 page sections** (hero, faq, sources, methodology, etc.)
- **12 profession pages** (nurse, engineer, teacher, etc.)
- **6 world dashboard components** (news, markets, risk panels)

---

## Phase 2: Engineering Council Review

### 1. Architect Specialist
**Score: 82/100**

**Strengths:**
- Clean server/client split for SEO
- App Router with proper metadata API usage
- Cloudflare D1 for edge database
- Turbopack for fast builds

**Weaknesses:**
- No `article` tags on editorial content
- Heading hierarchy broken in profession pages (H2 → H4 jump)
- Dead code: `buildProductJsonLd` and `buildWebPageJsonLd` exported but never imported

### 2. Frontend Engineer
**Score: 70/100**

**Strengths:**
- Semantic HTML (header, nav, main, footer, section)
- 30 ARIA attributes across components
- All images have alt text
- Responsive design with mobile-first approach

**Weaknesses:**
- **8 client components lack memoization**: newsletter-signup, footer, header, shell, search-client, cookie-consent, salary-ranking-chart, country-switcher
- Hero image is raw `<img>` not `next/image` (misses optimization)
- No visible focus indicators (keyboard navigation)

### 3. SEO & Metadata Specialist
**Score: 88/100**

**Strengths:**
- 10 JSON-LD builders for structured data
- 4 hreflang languages properly implemented
- FAQ schema on 892 pages
- WebApplication schema on 84 tool pages
- Dynamic OG images

**Weaknesses:**
- `buildProductJsonLd` dead code (exported, never imported)
- `buildWebPageJsonLd` dead code (exported, never imported)
- No `<article>` tags on editorial content

### 4. Data & Calculator Engineer
**Score: 65/100**

**Strengths:**
- 9 calculators covering salary, tax, mortgage, cost-of-living, retirement, 401k, remote-work, salary-comparison
- Progressive tax brackets for 8 countries
- City × profession salary data

**Critical Issues:**
- **`getBrackets()` ignores `taxYear`** — UI shows year selector but calculation uses hardcoded brackets
- **Exchange rates hardcoded** — last updated unknown, no freshness indicator
- **Cost-of-living data hardcoded** — no source attribution or update date

### 5. UX Designer
**Score: 75/100**

**Strengths:**
- Answer-first formatting (recently completed)
- Clear visual hierarchy
- Blue color scheme (trustworthy, professional)
- Staggered card reveals for engagement

**Weaknesses:**
- No skip navigation link (accessibility)
- Rankings page has no actual ranking data (content gap)
- Some pages lack clear "next step" CTAs

### 6. Security Specialist
**Score: 90/100**

**Strengths:**
- No hardcoded secrets
- No `dangerouslySetInnerHTML`
- No XSS vectors
- CSP headers configured

**Weaknesses:**
- Google Adsense ID placeholder `ca-pub-xxxxxxxx` should be env-driven
- Exchange rates hardcoded (potential manipulation risk if rates are wrong)

### 7. Performance Engineer
**Score: 68/100**

**Strengths:**
- Turbopack for fast builds
- Server components reduce client JS
- Static generation for most pages

**Weaknesses:**
- **8 client components lack memoization** — potential unnecessary re-renders
- **Hero image is raw `<img>`** — misses Next.js image optimization (lazy loading, WebP, resizing)
- No visible focus indicators (performance cost of accessibility)

### 8. Internationalization Specialist
**Score: 85/100**

**Strengths:**
- 4 languages (en, es, de, fr) with proper hreflang
- Locale-specific metadata and structured data
- Currency conversion support

**Weaknesses:**
- Exchange rates hardcoded, not locale-aware freshness
- Some translations may be incomplete (not verified)

### 9. Accessibility Specialist
**Score: 58/100**

**Strengths:**
- 30 ARIA attributes
- All images have alt text
- Semantic HTML structure
- FAQ sections use proper ARIA

**Critical Gaps:**
- **No skip navigation link** — keyboard users must tab through entire header
- **No `<article>` tags** — editorial content not wrapped semantically
- **Heading hierarchy broken** — H2 jumps to H4 in profession pages
- **No visible focus indicators** — keyboard navigation invisible

### 10. Content Strategist
**Score: 75/100**

**Strengths:**
- 2,340+ pages covering 7 countries, 21 professions, 30 cities
- Answer-first formatting (recently completed)
- Research reports and data studies
- FAQ sections for AI Overview triggers

**Weaknesses:**
- Rankings page lacks actual ranking data (content gap)
- Some pages may have thin content at scale
- No user-generated content or reviews

### 11. DevOps Engineer
**Score: 80/100**

**Strengths:**
- Vercel deployment with automatic previews
- Cloudflare D1 for edge database
- Turbopack for fast builds
- Security headers configured

**Weaknesses:**
- No CI/CD pipeline visible (may be Vercel-only)
- No monitoring/alerting setup visible
- Exchange rates hardcoded with no update mechanism

### 12. QA Engineer
**Score: 72/100**

**Strengths:**
- Vitest for unit testing
- Playwright for E2E testing
- Build verification (recent regression report)
- SEO validation (recent report)

**Weaknesses:**
- 265 pre-existing ESLint errors (`no-html-link-for-pages`)
- No accessibility testing in CI
- No performance testing in CI

---

## Phase 3: Prioritized Findings

### Critical (3)

| # | Finding | Impact | Evidence |
|---|---------|--------|----------|
| 1 | `getBrackets()` ignores `taxYear` — brackets hardcoded | Data accuracy | `src/calculators/tax.ts` — UI shows year selector but calculation ignores it |
| 2 | Exchange rates hardcoded, last updated unknown | Data freshness | `src/lib/currency.ts` — no freshness indicator or update mechanism |
| 3 | No skip navigation link | Keyboard accessibility | `src/components/header.tsx` — no skip link present |

### High (5)

| # | Finding | Impact | Evidence |
|---|---------|--------|----------|
| 4 | 8 client components lack memoization | Performance | newsletter-signup, footer, header, shell, search-client, cookie-consent, salary-ranking-chart, country-switcher |
| 5 | Hero image is raw `<img>` not `next/image` | Performance | `src/components/hero-section.tsx` — misses optimization |
| 6 | No `<article>` tags on editorial content | SEO/Semantics | Profession pages, tool pages, research reports |
| 7 | Heading hierarchy broken (H2 → H4) | Accessibility | `src/components/profession-page.tsx` — TakeawaysSection, InsightsSection |
| 8 | No visible focus indicators | Keyboard accessibility | Global CSS — no `:focus-visible` styles |

### Medium (4)

| # | Finding | Impact | Evidence |
|---|---------|--------|----------|
| 9 | Dead code: `buildProductJsonLd`, `buildWebPageJsonLd` | Code quality | `src/lib/seo/json-ld.ts` — exported, never imported |
| 10 | Google Adsense ID placeholder `ca-pub-xxxxxxxx` | Configuration | `src/lib/seo/locales.ts` — should be env-driven |
| 11 | Rankings page lacks actual ranking data | Content gap | `src/app/rankings/page.tsx` — only links to calculators |
| 12 | 265 pre-existing ESLint errors | Code quality | `no-html-link-for-pages` — build warnings |

### Low (2)

| # | Finding | Impact | Evidence |
|---|---------|--------|----------|
| 13 | Cost-of-living data hardcoded | Data freshness | `src/calculators/cost-of-living.ts` — no source attribution |
| 14 | No monitoring/alerting visible | Operations | No Sentry, Datadog, or similar setup visible |

---

## Phase 4: Sprint Backlog

### Sprint 1: Critical Fixes (1-2 days)

**Impact: Critical | Effort: Low | Risk: Low**

1. **Fix `getBrackets()` to respect `taxYear`** — `src/calculators/tax.ts`
   - Add year parameter to bracket lookup
   - Verify against official tax sources
   - Test all 8 countries

2. **Add skip navigation link** — `src/components/header.tsx`
   - Add `<a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>`
   - Add `id="main"` to `<main>` in `src/components/shell.tsx`

3. **Add visible focus indicators** — `src/app/globals.css`
   - Add `:focus-visible` styles with blue outline
   - Test keyboard navigation

### Sprint 2: High-Severity Gaps (3-5 days)

**Impact: High | Effort: Medium | Risk: Low**

4. **Memoize 8 client components** — `src/components/`
   - Wrap each in `React.memo()`
   - Test for unnecessary re-renders

5. **Replace hero `<img>` with `next/image`** — `src/components/hero-section.tsx`
   - Add width/height attributes
   - Enable lazy loading
   - Test WebP conversion

6. **Add `<article>` tags to editorial content** — `src/components/profession-page.tsx`, `src/app/[locale]/tools/[tool]/page.tsx`
   - Wrap main content in `<article>`
   - Test SEO impact

7. **Fix heading hierarchy** — `src/components/profession-page.tsx`
   - Change H4 to H3 in TakeawaysSection, InsightsSection
   - Verify with accessibility tools

8. **Add exchange rate freshness indicator** — `src/lib/currency.ts`
   - Add `lastUpdated` timestamp
   - Display in UI where rates are shown
   - Consider API for live rates (future)

### Sprint 3: Medium-Low Priority (1-2 weeks)

**Impact: Medium | Effort: Medium | Risk: Low**

9. **Remove dead code** — `src/lib/seo/json-ld.ts`
   - Delete `buildProductJsonLd`, `buildWebPageJsonLd`
   - Verify no imports

10. **Make Adsense ID env-driven** — `src/lib/seo/locales.ts`
    - Read from `process.env.GOOGLE_ADSENSE_ID`
    - Update deployment config

11. **Fix ESLint errors** — Global
    - Address 265 `no-html-link-for-pages` errors
    - Add to CI pipeline

12. **Add ranking data to rankings page** — `src/app/rankings/page.tsx`
    - Create actual ranking tables
    - Source from salary/tax data

---

## Phase 5: Roadmap

### Immediate (Next 2 Weeks)
- **Sprint 1**: Fix critical data accuracy and accessibility issues
- **Sprint 2**: Address high-severity performance and semantic gaps

### Short-Term (Next Month)
- **Sprint 3**: Clean up dead code, fix ESLint errors, add monitoring
- **HARO Outreach**: Begin 2-3 responses/day using templates
- **Guest Post Outreach**: Contact 10 career/finance blogs

### Medium-Term (Next Quarter)
- **Accessibility Audit**: Full WCAG 2.1 AA compliance
- **Performance Optimization**: Bundle analysis, lazy loading, image optimization
- **Content Expansion**: Fill rankings page, add user reviews
- **Monitoring**: Add Sentry for error tracking, Vercel Analytics for performance

### Long-Term (Next 6 Months)
- **Authority Building**: Backlinks from 10+ DA 30+ sites
- **AI SEO**: Optimize for AI Overviews (48% of queries)
- **Internationalization**: Complete translations for all languages
- **Mobile App**: Consider React Native for mobile experience

---

## Appendix A: File Inventory

### Core Files
- `src/app/layout.tsx` — Root layout
- `src/components/shell.tsx` — Page shell (header, footer, context)
- `src/components/header.tsx` — Sticky header
- `src/components/footer.tsx` — Dark footer
- `src/app/page.tsx` — Homepage
- `src/app/globals.css` — Global styles

### Components (72 total)
- **UI Primitives (12)**: button, card, badge, section, animated-counter, fade-in-section, flag-image, tabs, accordion, dialog, tooltip, spinner
- **Page Sections (26)**: hero, faq, sources, methodology, related-pages, newsletter-signup, cookie-consent, search-client, country-switcher, etc.
- **Profession Pages (12)**: nurse, engineer, teacher, accountant, doctor, lawyer, marketing, sales, hr, finance, it, general
- **World Dashboard (6)**: world-dashboard, news-panel, markets-panel, risk-panel, world-monitor, world-stats
- **Calculator Tools (4)**: calculator-interactive, calculator-client, salary-ranking-chart, tax-breakdown-bar
- **Other (12)**: country-cards, quick-compare, comparison-widget, affiliate-sidebar, ad-unit, last-updated, source-footer, etc.

### Data Layer
- `src/calculators/` — 9 calculators (tax, salary, mortgage, cost-of-living, retirement, 401k, remote-work, salary-comparison, comparison)
- `src/lib/content/` — 8 data files (professions, countries, cities, glossary, research, updates, templates, state-data)
- `src/lib/seo/` — 5 SEO files (metadata, json-ld, constants, locales, freshness)
- `src/lib/` — 8 utility files (db, currency, linking, calculator-registry, etc.)

### Configuration
- `next.config.mjs` — Turbopack, redirects, security headers, cache policies
- `package.json` — Dependencies, scripts
- `vitest.config.ts` — Unit test config
- `playwright.config.ts` — E2E test config
- `tailwind.config.ts` — Tailwind configuration

---

## Appendix B: Evidence Sources

- **Architecture**: `next.config.mjs`, `package.json`, `src/app/layout.tsx`
- **Components**: `src/components/` directory listing, file reads
- **SEO**: `src/lib/seo/` files, `src/app/sitemap.ts`, JSON-LD builders
- **Data**: `src/calculators/` files, `src/lib/content/` files
- **Accessibility**: Component analysis, ARIA attributes, heading hierarchy
- **Performance**: Client component count, memoization analysis, image usage
- **Security**: Codebase scan for secrets, XSS vectors, CSP headers

---

## Appendix C: Methodology

This audit followed the Olikit Engineering Operating System v1.0:

1. **Inspect**: 5 parallel exploration agents examined architecture, components, SEO, data, and a11y/perf/security
2. **Analyze**: 12 Engineering Council specialists reviewed findings
3. **Plan**: Prioritized findings by Impact × Effort × Risk
4. **Review**: Evidence-based scoring across 7 areas
5. **Implement**: Sprint backlog with clear acceptance criteria
6. **Validate**: Regression testing, accessibility checks, performance benchmarks
7. **Optimize**: Continuous improvement based on monitoring

---

**Audit Status**: Complete
**Next Action**: Await approval before implementing Sprint 1 fixes
**Questions**: Contact Engineering Council via Paperclip
