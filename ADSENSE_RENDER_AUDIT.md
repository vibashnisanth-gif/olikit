# AdSense Render Audit

## Current State

### What Is Implemented

1. **Publisher meta tag**

   A `<meta name="google-adsense-account">` tag is present in the root layout and renders on every page. This associates the site with the AdSense account without needing the full ad script tag.

   ```
   <meta name="google-adsense-account" content="ca-pub-6685088922584083" />
   ```

   This is server-rendered in the `<head>` and is always present regardless of cookie consent.

2. **Ad script loading**

   The AdSense script is loaded in the `SiteScripts` component (`src/components/site-scripts.tsx`):

   ```
   https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6685088922584083
   ```

   - Strategy: `afterInteractive` (loads after the page is interactive, non-blocking).
   - Consent-gated: The script element is only rendered when the user has accepted all cookies. If only essential cookies are accepted, the script is not injected.

3. **Consent flow**

   - User visits site.
   - Cookie consent banner appears.
   - User clicks "Accept All".
   - Consent state updates.
   - `SiteScripts` re-renders and injects the AdSense script.
   - AdSense script loads and runs.

### What Is Missing: Ad Units

**Critical gap:** There are zero ad unit elements (`<ins>` or `<amp-ad>` tags) in the codebase. The AdSense script loads, but there are no ad containers for it to fill.

**Consequence:** When the script loads without any ad units:
- The AdSense script executes but finds no ad slots.
- A console warning appears: "No ad units found" or similar.
- No ads are displayed.
- No ad revenue is generated.

---

## How AdSense Works (Prerequisite Knowledge)

AdSense requires two things to display ads:

1. **The AdSense script** (`adsbygoogle.js`) — This is the runtime that manages ad fetching, rendering, and measurement. It is loaded and gated behind consent — this part is done.

2. **Ad unit elements** — HTML elements (`<ins>` tags with specific classes and data attributes) that define where ads should appear on the page. These are completely missing.

### Two Approaches for Ad Units

#### Option A: Auto Ads (Recommended for Initial Setup)

Auto ads let Google automatically place ads on your pages without you manually inserting ad units. You enable this in the AdSense dashboard and the script handles placement.

**How to enable:**

1. Log in to the AdSense dashboard at [google.com/adsense](https://google.com/adsense).
2. Go to **Ads > By site** and select olikit.com.
3. Enable **Auto ads**.
4. Configure which ad formats to allow (display, in-article, in-feed, anchor, vignette, etc.).
5. Optionally set page-level exclusions for pages where auto ads should not appear.

**Pros:**
- No code changes needed for initial setup.
- Google optimizes placement for revenue.
- Fastest path to showing ads.

**Cons:**
- Less control over exact placement.
- May place ads in suboptimal locations on content-heavy pages.

#### Option B: Manual Ad Units (For Ongoing Optimization)

Manual ad units give full control over ad placement, size, and formatting.

**How to implement:**

1. In the AdSense dashboard, go to **Ads > By ad unit** and click **Create ad unit**.
2. Choose ad type (Display, In-feed, In-article, Matched content).
3. Configure size (responsive recommended — lets AdSense choose the best size for the device).
4. AdSense generates an `<ins>` tag snippet like:

```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-6685088922584083"
     data-ad-slot="1234567890"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

5. Place this snippet in the React component where you want ads to appear.

**React implementation approach:**

Create a reusable `AdUnit` component:

```tsx
'use client'

import { useEffect, useRef } from 'react'

interface AdUnitProps {
  adSlot: string
  adFormat?: string
  fullWidthResponsive?: boolean
  className?: string
}

export function AdUnit({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  className
}: AdUnitProps) {
  const adRef = useRef<HTMLInsElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('AdSense error:', e)
    }
    initialized.current = true
  }, [])

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle ${className ?? ''}`}
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6685088922584083"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive}
    />
  )
}
```

**Pros:**
- Full control over placement.
- Can ad units between content sections.
- Better user experience control.
- Higher CPM for well-placed ads.

**Cons:**
- Requires code implementation and testing.
- More effort than auto ads.

---

## Recommended Implementation Path

### Phase 1: Auto Ads (1-2 days)

1. Enable auto ads in the AdSense dashboard.
2. No code changes to the ad rendering system — the existing script load is sufficient for auto ads to work.
3. Monitor revenue and auto-placement quality for 1-2 weeks.

### Phase 2: Manual Units (1 week)

1. Determine optimal ad placement locations based on page layout analysis:
   - Below the hero section on tool pages.
   - Between paragraphs on guide pages.
   - Sidebar on country hub pages.
   - After the first content block on salary pages.
   - Below comparison tables.
2. Create ad units in the AdSense dashboard (responsive size).
3. Build the `AdUnit` React component.
4. Place ad units in strategic locations.
5. Keep auto ads running — they work alongside manual units.

### Phase 3: Optimization (Ongoing)

- A/B test ad placements.
- Monitor page speed impact — ads increase load time and can affect Core Web Vitals.
- Use `data-ad-format="auto"` for responsive units.
- Ensure ads are not intrusive (follow Better Ads Standards).
- Review AdSense policy compliance regularly.

---

## Verification Checklist

### Technical Setup

- The meta tag is present on all pages (confirmed).
- The AdSense script loads only after "Accept All" consent (confirmed).
- The script URL includes the correct `client=ca-pub-6685088922584083` (confirmed).
- No console errors: after auto ads are enabled, verify `adsbygoogle.js` loads without warnings.
- Ads appear on the page after enabling auto ads or adding manual units.

### Compliance

- Ads only load after user consent (confirmed — this is correctly implemented).
- Ad placement complies with Google's ad placement policies (verify manually after units are placed).
- No ads on prohibited content types (all olikit.com content should be AdSense-safe — financial tools and guides are generally acceptable).

### Revenue

- After ads start serving, verify in AdSense dashboard that impressions and earnings begin reporting.
- Note: new AdSense accounts or newly enabled sites can take 24-48 hours to start showing live ads.

---

## Code Locations

- **Meta tag:** Root layout — server-rendered, always present.
- **Ad script loading:** `src/components/site-scripts.tsx` — consent-gated.
- **Future ad unit placement:** Create `src/components/ad-unit.tsx` and insert into page templates.

---

## Summary

| Component | Status | Action Required |
|---|---|---|
| Publisher meta tag | Done | None |
| Ad script loading | Done | None |
| Consent gating | Done | None |
| Auto ads enabled | Not done | Enable in AdSense dashboard |
| Manual ad units | Not done | Create and implement |
| Ad unit React component | Not done | Build reusable component |
| Ads displaying | No | Blocked by missing units |
