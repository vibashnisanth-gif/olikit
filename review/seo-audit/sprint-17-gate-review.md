# Sprint 17 Gate Review: SEO Readiness Audit

**Date:** 2026-06-13
**Pages Built:** 1,167 (0 errors)
**Scope:** Full SEO, structured data, E-E-A-T, content depth, duplicate content, stale content

---

## 1. Site Architecture & Inventory

| Category | Count | Notes |
|----------|-------|-------|
| page.tsx files | 110 | Route files |
| API routes | 8 | Next.js API handlers |
| Total routes | 118 | |
| Sitemap | Dynamic (sitemap.ts) | 303 lines, generates all route types |
| robots.txt | **MISSING** | No `/robots.txt` found |
| Organization JSON-LD | Homepage + locale pages | Minimal — missing logo, sameAs, contactPoint |

---

## 2. Duplicate Content — CRITICAL

### A. Hub Pages: `/software-engineer` vs `/professions/software-engineer`

| Aspect | `/software-engineer` (131 lines) | `/professions/software-engineer` (378 lines) |
|--------|----------------------------------|-----------------------------------------------|
| Template | ProfessionPageRenderer | Old inline JSX |
| Canonical | `buildProfessionMetadata` → auto | Manual `alternates.canonical` |
| Metadata Has | SEO, OG, Twitter, robots | OG only — no Twitter, no robots |
| Internal Links | Standalone salary pages (`/software-engineer-salary-us`) | Locale pages (`/us/salary/data-scientist`) |
| Article Schema | **Missing** | Present via `buildArticleJsonLd` |
| Breadcrumb Schema | Present | Present |

> **Risk:** Both page types serve similar hub purpose but link to different destinations. This splits internal link equity between two competing hubs.

### B. Comparison Pages: `/data-scientist-us-vs-uk` vs `/comparisons/data-scientist-us-vs-uk`

| Aspect | Old (`/data-scientist-us-vs-uk`) | New (`/comparisons/data-scientist-us-vs-uk`) |
|--------|----------------------------------|----------------------------------------------|
| Lines | 65 | 210 |
| SEO Metadata | None (no metadata export) | Full (title, OG, canonical) |
| Article Schema | Missing | Present |
| Content | Thin (3 pros, 1 table, 2 FAQs) | Rich (hero, 4 FAQs, full sections) |
| Canonical | Not set | Set |

> **Risk:** Two URLs serving nearly identical topic. Old version is thin (65 lines) and should redirect (301) to the new `/comparisons/` version.

---

## 3. Metadata Audit

### Strengths
- `buildProfessionMetadata()` consistently generates title, description, canonical, OG, Twitter, robots for all ProfessionPageRenderer pages
- Homepage has explicit `robots: { index: true, follow: true }`
- All profession pages have valid canonical tags (verified across 22 sampled routes)

### Weaknesses
- **OG type always "website"** — even on article-type pages (comparisons, research reports, hub pages). Should be `"article"` where appropriate.
- **No Twitter metadata on old-template pages** — `/professions/software-engineer`, old comparison pages, some SE salary pages
- **No robots metadata on old-template pages** — some pages lack explicit index/follow directives
- **Titles inconsistent on year labeling** — Some use "(2026)", some use no year, some use "2025-2026"

---

## 4. Structured Data (JSON-LD) Audit

| Schema Type | Coverage | Issues |
|-------------|----------|--------|
| Organization | Homepage + locale pages only | Minimal: `name`, `url`, `description` only. Missing: `logo`, `sameAs`, `contactPoint`, `foundingDate`, `knowsAbout` |
| WebSite | Not present | No `WebSite` schema with `potentialAction` (site search) — missed opportunity |
| WebPage | Homepage only | No other pages have WebPage schema |
| Article | Old-template pages only | ProfessionPageRenderer pages **MISSING** Article JSON-LD |
| BreadcrumbList | All pages | Consistent structure. **Labels inconsistent** (some "Salaries", some "Salary Intelligence") |
| FAQPage | Homepage, comparison pages, some hub pages | Present where needed |
| Product/SoftwareApp | Not present | Could apply for salary/tax tools |

### Key Gap: Article Schema on ProfessionPageRenderer
Pages using `ProfessionPageRenderer` (PM hub, salary country pages, analysis pages) have NO `Article` JSON-LD. Google uses this for rich snippets and news/labelled article features.

---

## 5. E-E-A-T Audit

### Weaknesses (All Critical for YMYL-adjacent content)
1. **No author bios or bylines** — Every page uses `publisher: { "@type": "Organization", name: "Olikit" }`. No human author attribution.
2. **No contributor pages** — No `/authors/` or team page
3. **About page has Organization schema but no individual attribution**
4. **No editorial review dates on content pages** — Only `sourceRegistry` timestamp
5. **No external references to author credentials** — No LinkedIn, no academic profiles
6. **Google's March 2025 Core Update rewards authoritative authors** — Current site is invisible to this signal

### Existing Strengths
- Editorial policy page exists
- Data sources transparently cited
- Methodology available on all tool/calculator pages

---

## 6. Content Depth / Thin Content Audit

| Page Type | Lines | Word Count Est. | Verdict |
|-----------|-------|-----------------|---------|
| SE salary country pages (inline) | 84-160 | ~900-1800 | Acceptable |
| ProfessionPageRenderer pages | 54-62 | ~500-700 | **THIN** |
| PM salary country pages | ~55 | ~450-600 | **THIN** |
| Hub pages (SE hub, DS hub, PM hub) | 131-154 | ~1200-1800 | Good |
| Comparisons (new, `/comparisons/`) | 175-210 | ~1500-2000 | Good |
| Comparisons (old) | 60-70 | ~500-700 | **THIN** |
| Rankings pages | 145-175 | ~1200-1600 | Good |
| Research reports | 200-400 | ~2000-4000 | Excellent |

> **Risk:** PM salary pages at ~55 lines each (~450-600 words) are below the 800-word minimum for competitive salary content.

---

## 7. Stale Content / Freshness Audit

- Source registry: "June 2026" for all locales (consistent timestamp)
- Tax year labels: Mix of "2025-2026" and "2025" across locales
- No per-page `dateModified` schema except via `getDateModified()` (uses a single global timestamp)
- No visible "last updated" on content pages — only on About and trust pages
- State datasets reference "2025" sources — may need 2026 update
- Glossary entries have no freshness indicators

---

## 8. Template Fragmentation

| Template | Pages Using | Lines Per Page | Has Article Schema | Has Twitter | Has Robots | Has Canonical |
|----------|------------|----------------|-------------------|-------------|------------|---------------|
| **A (old inline)** | SE salary countries, DS salary pages, old comparisons, `/professions/software-engineer` | 84-378 | ✅ Some | ❌ | ❌ | ✅ Manual |
| **B (ProfessionPageRenderer)** | Hubs, PM pages, new analysis pages | 54-62 | ❌ | ✅ | ✅ | ✅ Auto |
| **C (new comparisons)** | `/comparisons/*` pages | 175-210 | ✅ | ✅ | ✅ | ✅ |
| **D (rankings)** | `/rankings/*` | 145-175 | ✅ | ✅ | ✅ | ✅ |
| **E (research)** | `/research/*` | 200-400+ | ✅ | ✅ | ✅ | ✅ |

> **Maintenance burden:** 5 parallel template systems with inconsistent SEO outputs. Template B (ProfessionPageRenderer) is the thinnest content and lacks Article schema.

---

## 9. Sitemap & Robots

| Item | Status | Notes |
|------|--------|-------|
| sitemap.ts | ✅ Present | 303 lines, dynamic generation for all route types |
| robots.txt | ❌ **MISSING** | No file at `/src/app/robots.txt` |
| Hreflang in sitemap | ✅ | Present via locale generation |

> **Missing robots.txt** means crawlers have no explicit directives. Critical for production launch.

---

## 10. Internal Linking Post-Consolidation Audit

| Metric | Result |
|--------|--------|
| Orphan pages | **0** — all 74 Sprint 16/16.5 routes have 2+ inbound links |
| Weak pages (<2 inbound) | **0** |
| Max crawl depth | 3 hops from homepage |
| Typical depth | 2 hops |
| Footer links | Every page links to SE/DS/PM hubs + comparisons |
| Hub relatedPages | Complete for all 3 professions (SE: 18, DS: 16, PM: 14) |

> **Consolidation successful.** No improvement needed here.

---

## Critical Issues (Must Fix)

| # | Issue | Impact | Effort | Suggested Sprint |
|---|-------|--------|--------|------------------|
| 1 | Duplicate hub pages (`/software-engineer` vs `/professions/software-engineer`) | Link equity split, potential duplicate content penalty | Medium | 18 |
| 2 | Old thin comparison pages (e.g., `/data-scientist-us-vs-uk`) vs new `/comparisons/` pages | Duplicate content, thin pages indexed | Low | 18 |
| 3 | Missing robots.txt | No crawl directives | Low | 18 |
| 4 | Missing Article schema on ProfessionPageRenderer pages | No article rich snippets for 30+ pages | Medium | 18 |
| 5 | OG type always "website" | Suboptimal social sharing for article pages | Low | 18 |

## High-Impact Improvements

| # | Issue | Impact | Effort | Suggested Sprint |
|---|-------|--------|--------|------------------|
| 6 | No author bios or bylines | Weak E-E-A-T signal for YMYL content | Medium | 19 |
| 7 | Thin content on ProfessionPageRenderer (54-62 lines) | May not compete for competitive salary queries | High | 19 |
| 8 | Inconsistent breadcrumb labels ("Salaries" vs "Salary Intelligence") | User confusion, inconsistent SERP breadcrumbs | Low | 18 |
| 9 | Missing Organization schema details (logo, sameAs, contactPoint) | Weaker brand presence in knowledge panels | Low | 19 |
| 10 | No WebSite schema with searchAction | No SERP sitelinks search box | Low | 19 |
| 11 | 5 parallel template systems | High maintenance cost, inconsistent SEO outputs | High | 19-20 |

## Summary Score

| Category | Score | Trend |
|----------|-------|-------|
| Architecture | 8/10 | ✅ Strong after Sprint 16.5 |
| Duplicate Content | 5/10 | ⚠️ Needs template convergence |
| Metadata | 7/10 | ✅ Good core, inconsistent old pages |
| Structured Data | 6/10 | ⚠️ Missing Article schema on modern pages |
| E-E-A-T | 3/10 | ❌ Critical gap — no author system |
| Content Depth | 6/10 | ⚠️ ProfessionPageRenderer pages too thin |
| Freshness | 5/10 | ⚠️ No per-page freshness signals |
| Internal Linking | 9/10 | ✅ Sprint 16.5 consolidation resolved |
| **Overall** | **6.1/10** | **Needs 2-3 sprints of cleanup** |

> **Gate Verdict:** NOT READY for full Search Console expansion. Fix critical issues (template convergence, missing Article schema, robots.txt, duplicate content) and establish author/E-E-A-T system before scaling.
