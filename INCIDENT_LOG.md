# INCIDENT LOG — Olikit SEV-1 Recovery

Generated: 2026-06-19
Phase: 1 — Discovery (no changes made)
Branch: recovery/adsense-sev1

---

## P0 — Critical (blocking trust/correctness)

### P0-1: Mid-level salary calculation bug
- **File**: `src/app/software-engineer-salary-us/page.tsx:87`
- **Code**: `(SALARY.average + SALARY.experienced / 2)`
- **Issue**: Operator precedence: `experienced / 2` is evaluated first. Computes 120000 + 90000 = **$210,000** instead of (120000 + 180000) / 2 = **$150,000**.
- **Impact**: Incorrect mid-level salary shown on US page. Likely same pattern on all country pages.
- **Action**: FIX — add parentheses.

### P0-2: Shell locale parsing broken on root-level pages
- **File**: `src/components/shell.tsx:15`
- **Code**: `const slug = pathname?.split("/")[1] || null`
- **Issue**: On root-level pages (e.g., `/software-engineer-salary-us`), `split("/")[1]` extracts `"software-engineer-salary-us"` instead of a locale slug. `getCountry()` returns `undefined`.
- **Impact**: 29 root-level pages using `Shell` have broken ContextBar (empty currency/tax), broken Header (no locale), broken Footer. All display empty state instead of country context.
- **Action**: FIX — detect locale from path or pass locale explicitly.

### P0-3: Hardcoded placeholder AdSense slot IDs
- **Files**: `src/lib/monetization/placement-plans.ts:9-18`, `src/app/[locale]/tools/[tool]/page.tsx:199`, `src/app/[locale]/salary/[profession]/page.tsx:341`, `src/app/[locale]/comparisons/[type]/[slug]/page.tsx:179,327`, `src/app/[locale]/salary/page.tsx:93`
- **Issue**: 10 slot IDs are hardcoded as `"1234567890"` through `"1234567899"` — clearly placeholder values.
- **Impact**: If deployed, AdSense will either show no ads or render placeholder-blocked slots. Looks unprofessional in review.
- **Action**: FIX — replace with real AdSense slot IDs or conditionally render.

### P0-4: Mislabeled JSON-LD schema (WebSite called LocalBusiness)
- **File**: `src/lib/seo/json-ld.ts:229`
- **Code**: `buildLocalBusinessJsonLd(locale)` returns `WebSite` schema, not `LocalBusiness`.
- **Impact**: Schema type mismatch. Google may ignore or penalize incorrect schema types.
- **Action**: FIX — rename function to `buildWebSiteJsonLd` or fix return type.

### P0-5: Comparison page card shows locale name instead of salary value
- **File**: `src/app/[locale]/comparisons/[type]/[slug]/page.tsx:234-243`
- **Issue**: Shows `{content.localeA.name}` twice instead of showing salary figure.
- **Impact**: Broken comparison UI — users see country name twice, no salary data.
- **Action**: FIX — replace repeated name with salary value.

---

## P1 — High (quality/stability)

### P1-1: Hardcoded dates in freshness and JSON-LD
- **Files**: `src/lib/seo/freshness.ts` ("June 2026"), `src/lib/seo/json-ld.ts` ("2026-01-15"), root page.tsx ("2026-01-15")
- **Issue**: Dates are static literals that will go stale.
- **Impact**: Stale dates in schema markup over time.
- **Action**: FIX — derive from build time or data freshness.

### P1-2: Duplicate routes between locale and root-level pages
- **Issue**: Both `/[locale]/salary/software-engineer` and `/software-engineer-salary-us` exist for the same content in different URL schemes.
- **Impact**: Duplicate content risk. Two URLs for same content.
- **Action**: NOINDEX or canonicalize one set.

### P1-3: Potential 404s for missing locale×profession combinations
- **File**: `src/app/[locale]/salary/[profession]/page.tsx:18`
- **Issue**: `generateStaticParams` generates ALL 7×10=70 combinations but calls `notFound()` when data is missing for a locale.
- **Impact**: SSG generates 70 URLs, some return 404 at runtime.
- **Action**: FIX — filter generateStaticParams to only valid combinations.

### P1-4: 1256 ESLint errors (mostly <a> vs <Link>)
- **Impact**: Poor Next.js practices throughout the codebase. AdSense review flags unprofessional code.
- **Action**: FIX — convert <a> tags to Next.js <Link> where appropriate.

---

## P2 — Medium (programmatic noise, thin content)

### P2-1: NZ/IN/SG locale homepages content-limited
- **File**: `src/app/[locale]/page.tsx`
- **Issue**: NZ, IN, SG lack aiQuickAnswers, keyTakeaways, careerPaths, featuredResearch, salaryLandscape, trustItems, govSources.
- **Impact**: Thin, repetitive content on 3 of 7 locale homepages. Feels programmatic.
- **Action**: FIX or NOINDEX.

### P2-2: California-only state content
- **File**: `src/lib/content/generators.ts:652+`
- **Issue**: `generateStateContent()` only works for California. Other 49 states get generic.
- **Impact**: Thin state pages for 49 states.
- **Action**: FIX or NOINDEX.

### P2-3: 13 orphaned calculator classes
- **Files**: `src/calculators/bond-yield/`, `budget/`, `business-valuation/`, `credit-card-payoff/`, `currency-converter/`, `dividend/`, `inflation/`, `investment-return/`, `irr/`, `npv/`, `roi/`, `savings-goal/`, `stock-return/`
- **Issue**: Recognized by registry but have zero routes/pages.
- **Impact**: Dead code. Unnecessary build weight.
- **Action**: REMOVE or create pages.

### P2-4: Static exchange rates
- **File**: `src/lib/content/country-registry.ts:150`
- **Issue**: `USD_EXCHANGE_RATES` are hardcoded literals.
- **Impact**: Exchange rates go stale. Incorrect conversions.
- **Action**: FIX — source from API or document staleness.

### P2-5: Cannot clear calculator input to empty
- **File**: `src/components/calculator-interactive.tsx:115`
- **Code**: `parseFloat(e.target.value) || 0`
- **Impact**: User can never clear a field. UX annoyance.
- **Action**: FIX — allow empty state.

### P2-6: UK locale code hardcoded in calculator locale tag
- **File**: `src/components/calculator-interactive.tsx:98`
- **Code**: `localeSlug === 'uk' ? 'en-GB' : ...`
- **Impact**: Hardcoded edge case for UK locale. Any other edge cases would need same treatment.
- **Action**: FIX — derive from locale data.

---

## P3 — Low (cosmetic/informational)

### P3-1: Duplicate currency symbol maps
- **Files**: `src/components/calculator-interactive.tsx:8`, `src/lib/calculator-registry.ts:82`
- **Issue**: Two identical maps for same data.
- **Impact**: Maintenance burden if one is updated without the other.
- **Action**: FIX — consolidate.

### P3-2: Root layout uses hardcoded lang="en"
- **File**: `src/app/layout.tsx`
- **Issue**: Should be dynamic per locale.
- **Impact**: Minor accessibility/i18n concern.

### P3-3: No middleware for locale detection
- **Impact**: Users land on global homepage; no locale auto-detection.
- **Action**: DEFER — not critical for correctness.

---

## Summary by Severity

| Severity | Count | Key Items |
|----------|-------|-----------|
| P0 | 5 | Calc bug, Shell parsing, AdSense placeholders, JSON-LD mislabel, Comparison card |
| P1 | 4 | Hardcoded dates, Duplicate routes, 404 combos, ESLint errors |
| P2 | 6 | Thin locale content, CA-only state, Orphaned calculators, Exchange rates, Calculator UX, Hardcoded UK |
| P3 | 3 | Duplicate maps, Hardcoded lang, No middleware |
| **Total** | **18** | |

**No fixes applied yet. This is a discovery-only phase.**
