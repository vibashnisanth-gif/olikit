# Knowledge Graph Audit — Olikit

**Date**: July 2026
**Scope**: Structured Data (Phase 2)

---

## Schema Inventory

### Implemented

| Schema | Location | Quality | Issues |
|--------|----------|---------|--------|
| **Organization** | `json-ld.ts`, homepage, about, contact | PARTIAL | No `logo`, no `sameAs`. Inconsistent across pages. |
| **WebSite** | `json-ld.ts`, homepage, trust pages | GOOD | SearchAction present. Missing `publisher`. |
| **SearchAction** | `json-ld.ts`, homepage | GOOD | Correct `urlTemplate`. **UI mismatch**: no visible search box on site. |
| **FAQPage** | 15+ pages | GOOD | Widely deployed. **Duplicate on comparison pages** (lines 101 + 211). |
| **BreadcrumbList** | `json-ld.ts`, ~20 pages | GOOD | Historical duplicate issue resolved. Minor label inconsistency. |
| **Dataset** | `json-ld.ts`, homepage, world page | MODERATE | Missing `dateModified`. `variableMeasured` lacks `@type: "PropertyValue"` in builder. |
| **WebApplication** | `json-ld.ts`, tool pages | EXCELLENT | Complete: category, OS, offers, author, dateModified, inLanguage. |
| **Person** | `about/page.tsx` | MINIMAL | Only `name: "Vibash"`. Missing: `url`, `jobTitle`, `sameAs`, `image`. |
| **Article** | `json-ld.ts`, ~20 pages | MODERATE | `datePublished` = build date, not actual publish date. |
| **HowTo** | `json-ld.ts` | GOOD | Used via `buildAggregateJsonLd()` for tool pages. |
| **Speakable** | `json-ld.ts` | GOOD | CSS selectors `.direct-answer`, `.quick-answer`. |
| **WebPage** | `json-ld.ts`, trust pages | GOOD | `isPartOf` links to WebSite. |
| **AboutPage** | `about/page.tsx` | GOOD | Rich `mainEntity` with founder, address. |
| **ContactPage** | `contact/page.tsx` | GOOD | `contactPoint` with email. |

### Missing

| Schema | Priority | Impact |
|--------|----------|--------|
| **Logo** in Organization | HIGH | No Knowledge Panel branding |
| **sameAs** in Organization | HIGH | No social profile linking |
| **Publisher** on WebSite | LOW | Minor consistency |

---

## Critical Issues

### 1. No Logo in Organization Schema
Zero occurrences of `"logo"` in any schema. Google uses Organization logo for Knowledge Panel.

**Fix**: Add `logo: "${SITE_URL}/logo.png"` to `buildOrganizationJsonLd()`.

### 2. No sameAs in Organization Schema
No social profile links. Entity can't be disambiguated.

**Fix**: Add `sameAs: ["https://x.com/olikit", "https://linkedin.com/company/olikit"]` to Organization.

### 3. Duplicate FAQPage on Comparison Pages
`src/app/[locale]/comparisons/[type]/[slug]/page.tsx` emits two FAQPage schemas (line 101 inline + line 211 from builder). Google flags duplicates.

**Fix**: Remove one of the two FAQPage schemas.

### 4. SearchAction/UI Mismatch
Schema declares `/search?q={search_term_string}` but no visible search input exists on the site (only a search overlay triggered by button click).

**Impact**: Google may validate SearchAction against visible UI. Low risk but noted.

### 5. Organization Schema Inconsistency
- Homepage: name + url + description (thin)
- About page: name + url + description + founder + address (rich)
- No single canonical Organization object

**Fix**: Create canonical Organization in `json-ld.ts` with all fields, reuse everywhere.

---

## Files Affected

| File | Changes Needed |
|------|----------------|
| `src/lib/seo/json-ld.ts` | Add `logo`, `sameAs` to `buildOrganizationJsonLd()`. Fix `buildDatasetJsonLd()` to add `dateModified` and `PropertyValue` types. |
| `src/app/[locale]/comparisons/[type]/[slug]/page.tsx` | Remove duplicate FAQPage schema. |
| `src/app/about/page.tsx` | Enrich Person schema with `url`, `jobTitle`, `sameAs`. |

---

## Expected Impact

- Knowledge Panel branding (logo)
- Entity disambiguation (sameAs)
- Reduced duplicate schema warnings
- Consistent entity signals across all pages
