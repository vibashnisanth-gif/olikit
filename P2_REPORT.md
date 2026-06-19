# P2 RECOVERY REPORT

## Issues Fixed

### P2-1: NZ/IN/SG locale homepages content-limited ✅
- **Fix**: Added NOINDEX metadata for nz, in, sg locale homepages
- These 3 locales have reduced content (missing aiQuickAnswers, keyTakeaways, careerPaths, trustItems, govSources)
- **Files fixed**: `src/app/[locale]/page.tsx`
- **Result**: Thin locale homepages are noindexed but still accessible

### P2-3: Orphaned calculator classes removed ✅
- **Files removed**: 13 unused calculator implementations
  - bond-yield.ts, budget.ts, business-valuation.ts, credit-card-payoff.ts
  - currency-converter.ts, dividend.ts, inflation.ts, investment-return.ts
  - irr.ts, npv.ts, roi.ts, savings-goal.ts, stock-return.ts
- **Result**: Dead code eliminated. 7 active calculators remain.

### P2-6: Hardcoded UK locale code in calculator ✅
- **Fix**: Look up locale from `getLocale()` instead of hardcoding `localeSlug === 'uk' ? 'en-GB' : ...`
- **Files fixed**: `src/components/calculator-interactive.tsx`
- **Result**: Locale codes for all 7 locales derived from locale registry

### P2-4: Static exchange rate staleness noted ✅
- **Fix**: Added comment noting rates are static and should be reviewed periodically
- **Files fixed**: `src/lib/content/country-registry.ts`

## Issues Deferred

### P2-2: California-only state content
- **Status**: DEFERRED — would require content creation for 49 states
- Non-CA state pages have generic content
- Not blocking correctness; thin content is still factually correct

### P2-5: Cannot clear calculator input
- **Status**: VERIFIED FIXED — already used `e.target.value === '' ? '' : parseFloat(...)` pattern
- Empty string is properly handled
