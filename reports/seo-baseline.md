# SEO Baseline — Olikit

Generated: 2026-06-26

## Current State: STRONG (Score: 8/10)

### Coverage Summary

| Element | Coverage | Score |
|---------|----------|-------|
| Titles | 100% | 10/10 |
| Meta Descriptions | 100% | 10/10 |
| Canonicals | 100% | 10/10 |
| OpenGraph | 97% | 9/10 |
| Twitter Cards | 85% | 8/10 |
| Structured Data | 95% | 9/10 |
| Sitemap | 99% | 9/10 |
| Robots | 100% | 10/10 |
| Hreflang | 100% | 10/10 |
| H1 Hierarchy | 100% | 10/10 |
| Internal Linking | Strong | 9/10 |

### Issues Found

#### Medium Priority

1. **Duplicate BreadcrumbList JSON-LD** on tool/state pages
   - Both `breadcrumbs.tsx` component AND page-level `buildBreadcrumbJsonLd()` emit BreadcrumbList schema
   - Fix: Remove JSON-LD from one source (prefer page-level for accuracy)

#### Low Priority

2. **~15 static pages lack explicit OG/Twitter tags**
   - /methodology, /editorial-policy, /data-sources, /disclaimer, /terms, /privacy-policy, /about, /contact, /countries, /compare, /professions, /research, /rankings
   - They inherit from root layout but won't have custom OG titles/descriptions
   - Fix: Add explicit openGraph and twitter to each page's metadata export

3. **`/countries` missing from sitemap**
   - The page exists but isn't in the sitemap's staticPages list
   - Fix: Add to sitemap.ts

4. **`buildProductJsonLd()` exists but unused**
   - Available in json-ld.ts but never called
   - Either use it on product-like pages or remove dead code

### What's Working Well

- Centralized metadata generation via `buildMetadata()` / `buildSeoMetadata()`
- Dynamic OG images via `/api/og`
- Comprehensive FAQ schema on tool pages
- Strong internal linking via `getAllInternalLinks()` and `getProfessionLinks()`
- Proper hreflang with x-default for all 7 locales
- Clean robots.txt allowing AI crawlers
- No orphan pages detected
- Consistent H1 usage across all pages

### Structured Data Inventory

| Schema | Where Used | Status |
|--------|-----------|--------|
| WebApplication | Tool pages | ✅ Active |
| FAQPage | Homepage, guides, tools, profession pages | ✅ Active |
| BreadcrumbList | Tool, guide, state pages + component | ⚠️ Duplicate |
| HowTo | Guide pages with steps | ✅ Active |
| WebSite | Homepage | ✅ Active |
| Organization | Homepage | ✅ Active |
| WebPage | Guides, state pages | ✅ Active |
| Article | Guides, profession pages, comparisons | ✅ Active |
| Speakable | Tool pages, guides | ✅ Active |
| Dataset | State tool pages | ✅ Active |
| Product | Available but unused | ⚠️ Dead code |
