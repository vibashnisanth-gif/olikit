# Affiliate Attribution Report

## Architecture Overview

Affiliate click attribution is handled through a dedicated `TrackedLink` component that intercepts clicks, fires a GA4 event for reporting, and then follows the standard link navigation.

**Component chain:**

1. `TrackedLink` (`src/components/tracked-link.tsx`) — Wraps `<a>` tags and automatically extracts tracking parameters from the URL and page context.
2. `trackAffiliateClick()` (`src/lib/analytics/events.ts`) — Fires the `affiliate_click` event to GA4.
3. Monetization config (`src/lib/monetization/config.ts`) — Provides the product/provider metadata that the link renders.

---

## How Attribution Works

### Click Flow

1. User clicks a `TrackedLink` component (e.g., "Use Wise" button on a money transfer page).
2. The component reads its `href` and matches it against the monetization config to determine the `provider` name.
3. The component calls `getPageParams()` from `page-params.ts` to extract the current `country` and `pageType`.
4. The component calls `trackAffiliateClick(provider, country, pageType)`.
5. The event fires to GA4 with:
   - `event_name`: `affiliate_click`
   - `event_category`: `affiliate`
   - `event_label`: `{provider} - {country}`
   - Custom params: `provider`, `country`, `page_type`
6. The browser navigates to the affiliate URL (default link behavior — no `preventDefault()`).

### Event Parameters Detail

| Parameter | Source | Example Value |
|---|---|---|
| `provider` | Extracted from the link's href matched to monetization config | `"wise"` |
| `country` | From `getPageParams()` parsing the current URL pathname | `"us"` |
| `page_type` | From `getPageParams()` parsing the current URL pathname | `"tool"` |
| `event_category` | Hardcoded in `trackAffiliateClick` | `"affiliate"` |
| `event_label` | Auto-generated as `{provider} - {country}` | `"wise - us"` |

### What TrackedLink Auto-Detects

- **Provider:** The component receives a `provider` prop OR auto-detects by matching the `href` against the monetization config.
- **Country and pageType:** Derived from the current URL at click time via `getPageParams()`. This means the attribution reflects the page the user was on when they clicked — not the landing page of the affiliate link.

---

## What Is Wired

The following components/pages use `TrackedLink` for their affiliate links:

- **Tool pages** (`[locale]/tools/[tool]/page.tsx`) — "Use [Provider]" CTAs.
- **Guide pages** (`[locale]/guides/[guide]/page.tsx`) — "Get Started" provider buttons.
- **Comparison pages** (`[locale]/compare/...`) — Provider comparison tables with CTA links.
- **Salary pages** (`[locale]/salary/...`) — "Find better rates" provider links.
- **Research pages** (`[locale]/research/...`) — Sponsored provider links.

---

## What Is Missing

### Gap: Best Services Page

The best services listing page at `[locale]/guides/best/page.tsx` is a critical gap:

- This page renders all 12 affiliate products in a listing/comparison format.
- It is the most directly monetizable page on the site.
- Currently, provider links on this page use direct `<a>` tags or unspecified linking components.
- The `trackBestServicesClick()` event is defined but never called.

**Impact:** Clicks on the best services page will:
- Navigate to the placeholder affiliate URLs.
- NOT fire any GA4 event — making it impossible to measure click-through rates.
- NOT be attributed to any provider, country, or page type in analytics.

**Root cause:** The best services page was likely built before the `TrackedLink` component was created, or was not refactored to use it.

### Secondary Gaps

- Any page rendering affiliate links outside of the tracked tool/guide/comparison templates may also miss attribution if it does not use `TrackedLink`.
- Dynamic content (e.g., blog posts that embed provider links) would need manual `trackAffiliateClick()` calls or `TrackedLink` usage.

---

## Verification in GA4 DebugView

### Prerequisites

- Google Analytics Debugger Chrome extension active, or `?gtag_debug=1` on the page.
- Must have accepted cookies (Affiliate events are consent-gated via the same gtag check).

### Steps

1. **Open a page that uses `TrackedLink`:**
   - Example: `https://olikit.com/en/tools/currency-converter`.
   - Confirm the page has an affiliate CTA (e.g., "Try Wise" or "Use Revolut").

2. **Open GA4 DebugView:**
   - Navigate to **Configure > DebugView** in GA4.

3. **Click the affiliate link:**
   - Click the CTA button.
   - DebugView should show an `affiliate_click` event within seconds.

4. **Verify event parameters:**
   - Click the event in DebugView.
   - Confirm:
     - `provider` matches the expected provider name.
     - `country` matches the page's country context.
     - `page_type` matches the page type.
     - `event_category` is `affiliate`.
     - `event_label` is `{provider} - {country}`.

5. **Repeat for the best services page:**
   - Navigate to `https://olikit.com/en/guides/best`.
   - Click any provider link.
   - In DebugView, check if an `affiliate_click` or `best_services_click` event fires.
   - If no event fires, this confirms the gap.

### What a Missing Event Looks Like

- The GA4 DebugView shows no new events after clicking the link on the best services page.
- The browser navigates to the placeholder URL but no tracking occurs.
- This confirms the page is not using `TrackedLink` or calling any tracking function.

---

## Action Plan

### Immediate (High Priority)

1. **Audit best services page** — Open `[locale]/guides/best/page.tsx` and identify all `<a>` or `<Link>` elements that point to affiliate product URLs.
2. **Replace with `TrackedLink`** — Change each affiliate link to use the `TrackedLink` component. Pass the `provider` prop explicitly.
3. **Verify after deployment** — Use GA4 DebugView to confirm `affiliate_click` events fire from best services page clicks.

### Medium Priority

4. **Search the codebase** for any other pages that render affiliate links outside the known templates (tool pages, guide pages, comparison pages, salary pages).
5. **Refactor to use `TrackedLink`** or call `trackAffiliateClick()` manually.

### Low Priority

6. **Wire `trackBestServicesClick()`** as an alternative to using `TrackedLink` on the best services page, if `TrackedLink` cannot be used for some reason.
7. **Remove `trackBestServicesClick()`** if deemed redundant after full `TrackedLink` adoption (to reduce maintenance overhead).

---

## Measurement Plan After Wires Are Complete

Once all affiliate links use `TrackedLink`, the following GA4 reports become possible:

- **Event count report:** `affiliate_click` events over time, segmented by provider.
- **Top providers by clicks:** Which products generate the most interest.
- **Country performance:** Which country audiences click the most.
- **Page type performance:** Which page types (tool, guide, comparison) drive affiliate clicks.
- **Conversion rate:** Combined with GA4 conversion tracking, measure how many clicks lead to actual affiliate conversions (requires GA4 conversion setup or postback from affiliate networks).

---

## Code References

- `src/components/tracked-link.tsx` — The attribution component.
- `src/lib/analytics/events.ts` — `trackAffiliateClick()` and `trackBestServicesClick()` functions.
- `src/lib/analytics/page-params.ts` — `getPageParams()` used for country/page_type extraction.
- `src/lib/monetization/config.ts` — Product/provider definitions used for URL matching.
- `[locale]/guides/best/page.tsx` — The page needing audit and wiring.
