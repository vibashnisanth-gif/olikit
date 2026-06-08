# Revenue Guide Promotion Report

## Status: ⚠️ PARTIALLY COMPLETE

## Current State
The 3 revenue guides (Best Money Transfer Services, Best Tax Software, Best Investment Platforms) claimed in V1 do **not exist** in the codebase. The current guide set has 6 educational guides.

## What Exists
- Guide hub at `[locale]/guides/page.tsx` — lists all guides
- Guides appear on homepage "Financial Guides" section
- Guides appear in "Research" hub
- Guide sidebar on guide detail pages shows "All Guides" list

## What Is Needed
To promote revenue guides:
1. Add 3 revenue guides to `guide-templates.ts` (best-money-transfer-services, best-tax-software, best-investment-platforms)
2. Add content generators in `guide-generators.ts`
3. Surface on homepage with revenue category badge
4. Surface on tool pages that relate to money/tax/investment
5. Create "Revenue Guides" section on country hubs

## Current Workaround
- 6 educational guides are displayed on homepage and guide hub
- No affiliate/revenue content exists
- Placeholder mentions of "guides" in nav and homepage
