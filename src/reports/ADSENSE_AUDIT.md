# ADSENSE AUDIT

**Date:** 2026-06-07
**Status:** ⚠️ PARTIAL (needs real client ID)

## Infrastructure

| Component | Status | Notes |
|-----------|--------|-------|
| AdSense script loading | ✅ Built | `SiteScripts` component loads adsbygoogle.js after consent |
| Cookie consent | ✅ Built | `SiteScripts` checks `olikit_consent` localStorage key |
| Responsive units | ⚠️ Not placed | No AdSense unit slots in page templates |
| Client ID | ⛔ Placeholder | `ca-pub-xxxxxxxx` in `.env.local` |

## Required Actions

1. Replace `NEXT_PUBLIC_ADSENSE_CLIENT_ID` in `.env.local` with real AdSense client ID
2. Add AdSense unit slots to key page templates (sidebar, between sections)
3. Verify ads render without console errors
4. Test on mobile and desktop
5. Verify no policy violations (minimal ad density, above-fold limitations)

## AdSense Integration Points

Recommended ad placements:
- Sidebar on tool pages (below affiliate sidebar)
- Sidebar on salary profession pages
- Between sections on guide pages
- Below hero on hub pages

No automatic ad injection — only manually placed units for policy compliance.
