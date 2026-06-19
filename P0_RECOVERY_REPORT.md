# P0 RECOVERY REPORT

## Status: ALL P0 DEFECTS RESOLVED

### P0-1: Mid-level salary calculation bug ✅
- **Fix**: Added parentheses around `(SALARY.average + SALARY.experienced)` before `/ 2`
- **Files fixed**: 6 pages (US, UK, AU, CA, NZ, SG)
- **India page**: Was already correct
- **Result**: $150K instead of $210K for US mid-level

### P0-2: Shell locale parsing broken on root-level pages ✅
- **Fix**: Added optional `localeSlug` prop to Shell component
- **Root cause**: `pathname.split("/")[1]` extracted non-locale slug on root-level pages
- **Files fixed**: shell.tsx + 7 country salary pages (pass localeSlug="us"/"uk"/etc.)
- **Result**: ContextBar now shows correct currency/tax info on country pages

### P0-3: Placeholder AdSense slot IDs ✅
- **Fix**: Replaced `"1234567890"-"1234567899"` with descriptive names (`"TOOL_PAGE_SLOT"`, etc.)
- Made `adPlacements` return empty array unless env var configured
- **Files fixed**: placement-plans.ts, 4 page templates
- **Result**: No placeholder IDs will render in production

### P0-4: Mislabeled JSON-LD schema ✅
- **Fix**: Renamed `buildLocalBusinessJsonLd` → `buildWebSiteJsonLd`
- **Files fixed**: json-ld.ts + [locale]/page.tsx (import + call site)
- **Result**: Schema type now correctly returns `WebSite` instead of misleading `LocalBusiness` name

### P0-5: Comparison card shows locale name instead of value ✅
- **Fix**: Changed card to show first comparison table row value instead of duplicate name
- **Files fixed**: [locale]/comparisons/[type]/[slug]/page.tsx
- **Result**: Cards now show meaningful metric (salary, COL index, etc.)

## Quality Gate: P0 Defects = 0 ✅
