# P1 RECOVERY REPORT

## Issues Fixed

### P1-1: Hardcoded dates ✅
- **Fix**: Derived dates dynamically from `new Date()` instead of static "June 2026" / "2026-01-15"
- **Files fixed**: `src/lib/seo/freshness.ts`, `src/lib/seo/json-ld.ts`
- **Result**: All freshness dates now auto-update

### P1-1b: Hardcoded /us/ links on root-level pages ✅
- **Fix**: Changed 18 hardcoded `/us/...` links to locale-agnostic pages
- **Files fixed**: 
  - 3 comparison pages (vs-data-scientist, vs-product-manager, vs-cybersecurity-analyst)
  - Professions/software-engineer hub
  - About page
  - Contact page
  - Root homepage
- **Result**: No broken locale-specific links on global pages

### P1-3: Potential 404 for missing locale×profession combos ✅ (downgraded)
- **Finding**: All 10 professions have salary data for all 7 locales. The `notFound()` guard is safety-only and never triggers. No fix needed.

## Issues Deferred

### P1-4: 1256 ESLint errors (<a> vs <Link>)
- **Status**: DEFERRED — cosmetic code quality, not a correctness/trust issue
- 1256 errors across 166 files. Would take significant effort to fix all.
- Fixed the most impactful cases (hardcoded locale links).

### P1-2: Duplicate routes (root-level vs locale pages)
- **Status**: DEFERRED — architectural decision requiring restructuring
- Root-level pages (`/software-engineer-salary-us`) duplicate `/[locale]/salary/software-engineer`
- Fixing requires choosing one URL scheme or implementing redirects
- Not blocking correctness but creates duplicate content
