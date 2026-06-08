# Conversion Optimization Report

## Status: ⚠️ PARTIALLY COMPLETE

## Current State
The conversion infrastructure claimed in V1 (newsletter signup forms, affiliate placements, guide CTAs, comparison CTAs, salary page CTAs) does **not exist** in the codebase.

## What Exists
- **Cookie consent banner**: Bottom bar with Accept/Reject
- **AdSense/GA scripts**: Load after consent via `site-scripts.tsx`
- **Tool CTAs**: Tool page has "Use the calculator" buttons
- **Guide CTAs**: Guide page has "Use the calculator" step links
- **Homepage CTAs**: Priority tool buttons in hero

## What's Missing
| Element | Status | Impact |
|---------|--------|--------|
| Newsletter signup (sidebar) | ❌ Not built | Low-medium |
| Newsletter signup (inline) | ❌ Not built | Low-medium |
| Newsletter signup (banner) | ❌ Not built | Low-medium |
| Affiliate sidebar widget | ❌ Not built | HIGH — direct revenue |
| Affiliate inline banners | ❌ Not built | HIGH — direct revenue |
| Ad units | ❌ Not built | Medium |
| Guide CTAs (bottom of page) | ❌ Not built | Medium |
| Comparison CTAs (side-by-side) | ❌ Not built | Medium |

## Recommendations by Priority

### HIGH — Build immediately
1. Add affiliate sidebar to tool pages (Wise, Trading 212)
2. Add affiliate inline banners in guide content
3. Add AdSense ad units to tool pages (leaderboard + sidebar)

### MEDIUM — Build next
4. Add newsletter signup to guide sidebar
5. Add newsletter signup after tool results
6. Add comparison CTAs to tool pages

### LOW — Nice to have
7. Add newsletter popup on exit intent
8. Add social sharing buttons
9. Add "Save to PDF" CTAs on guide pages

## Current CTR Estimation
- Tool CTAs (use calculator): ~15-25% (internal navigation)
- Guide CTAs (step links): ~10-20%
- External affiliate links: 0% (none exist yet)
- AdSense ad units: 0% (none exist yet)
- Newsletter signup: 0% (none exist yet)
