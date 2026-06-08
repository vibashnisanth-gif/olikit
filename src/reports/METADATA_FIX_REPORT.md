# Metadata Fix Report

## Status: ✅ COMPLETE

## Issue
Guide pages called `buildMetadata(locale, null, path)` which resulted in no guide-specific metadata being rendered. The function's `getPageType()` returned "home" for guide pages, and titles fell through to `locale.defaultTitle`.

Additionally, `metaTitleTemplate` and `metaDescriptionTemplate` on Guide objects were never used — the Guide type's metadata templates were dead code.

## Root Cause
The `buildMetadata()` and `buildSeoMetadata()` functions had no code path for Guide objects. They only handled:
1. Tool + subRegion
2. Tool
3. Fallback (locale default)

## Fix Applied
1. Added optional `guide?: Guide` parameter to both `buildMetadata()` and `buildSeoMetadata()`
2. Added new code path for guides that:
   - Replaces `{guide}` with guide name (with `{country}` replacement in name)
   - Replaces `{country}` with locale name
   - Uses `guide.metaTitleTemplate` and `guide.metaDescriptionTemplate`
   - Sets proper OG title/description
   - Sets proper keywords including guide category
3. Updated `getPageType()` to accept optional guide parameter
4. Updated `getPageTitle()` to accept optional guide parameter
5. Updated guide page `generateMetadata()` to pass the guide object

## Files Modified
- `src/lib/seo/metadata.ts` — added guide handling to `buildMetadata()` and `buildSeoMetadata()`
- `src/app/[locale]/guides/[guide]/page.tsx` — passes guide to `buildMetadata()`

## Verification
- No `{country}` or `{guide}` placeholders exist in any rendered metadata
- Guide pages now render proper titles: e.g., "Salary After Tax by Country - Compare Take-Home Pay Across 7 Countries"
- OG tags reflect actual guide content
- No unresolved template variables remain

## Note
The 6 existing guides do NOT have `{country}` in their `name` field. Any future guide templates should avoid putting template variables in `name` — use `description` + `.replace()` pattern instead.
