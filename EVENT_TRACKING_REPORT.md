# Custom Event Tracking Report

## Overview

Ten custom events are defined in `src/lib/analytics/events.ts`. These events allow tracking of user interactions beyond standard page views — covering affiliate clicks, conversions, navigation changes, and tool/guide engagement.

**Consent gating:** All events require cookie consent. The `SiteScripts` component manages the consent state and only loads gtag after the user accepts cookies. If consent has not been given, `window.gtag` is undefined and all event functions return early with a no-op.

**Defensive checks:** Every event function checks `typeof window.gtag === 'function'` before firing. This prevents errors in environments where gtag has not loaded (e.g., during SSR, after consent denial, or if the ad-blocker blocks gtag).

**GA4 conventions:** Events use `event_category` and `event_label` following GA4's recommended schema. All events include `country` and `page_type` as custom parameters for segmentation in reports.

---

## Event Catalog

### 1. `affiliate_click`

| Property | Value |
|---|---|
| Function | `trackAffiliateClick(provider, country, pageType)` |
| GA4 Event Name | `affiliate_click` |
| event_category | `affiliate` |
| event_label | `{provider} - {country}` |
| Custom Params | `provider`, `country`, `page_type` |

**Trigger mechanism:** Called by the `TrackedLink` component (`src/components/tracked-link.tsx`) when a user clicks an affiliate link. The component auto-detects the `provider` from the URL, the `country` from the current pathname, and the `pageType` via `getPageParams()`.

**Where it fires:** Any `<TrackedLink>` component rendered on the page. Currently used on tool pages, guide pages, comparison pages, and salary pages.

**Verification:** Click an affiliate link in DebugView — look for `affiliate_click` event with `provider`, `country`, `page_type` params.

---

### 2. `newsletter_signup`

| Property | Value |
|---|---|
| Function | `trackNewsletterSignup(country, pageType)` |
| GA4 Event Name | `newsletter_signup` |
| event_category | `conversion` |
| event_label | `newsletter - {country} - {pageType}` |
| Custom Params | `country`, `page_type` |

**Trigger mechanism:** Intended to be called on newsletter form submission.

**Status:** Function defined but NOT yet wired to any newsletter form component. Requires implementation in the newsletter signup form handler.

**Action needed:** Locate the newsletter component, add an `onSubmit` handler that calls `trackNewsletterSignup(country, pageType)`.

---

### 3. `country_switch`

| Property | Value |
|---|---|
| Function | `trackCountrySwitch(fromCountry, toCountry, pageType)` |
| GA4 Event Name | `country_switch` |
| event_category | `navigation` |
| event_label | `{fromCountry} → {toCountry}` |
| Custom Params | `country` (the destination country), `page_type` |

**Trigger mechanism:** Called when a user changes the selected country via the country switcher UI component.

**Where it fires:** Country selector/dropdown component's change handler.

**Verification:** Switch country in the UI — look for `country_switch` event in DebugView with `label` showing `"us → uk"` (for example).

---

### 4. `calculator_complete`

| Property | Value |
|---|---|
| Function | `trackCalculatorComplete(tool, country, pageType)` |
| GA4 Event Name | `calculator_complete` |
| event_category | `calculator` |
| event_label | `{tool} - {country} - {pageType}` |
| Custom Params | `tool`, `country`, `page_type` |

**Trigger mechanism:** Called when a user completes a calculation on any interactive tool page (currency converter, salary calculator, etc.).

**Where it fires:** Tool component's calculation result handler.

**Verification:** Use a tool (e.g., currency converter) to generate a result — look for `calculator_complete` event with `tool` param.

---

### 5. `guide_cta_click`

| Property | Value |
|---|---|
| Function | `trackGuideCtaClick(guide, country, pageType)` |
| GA4 Event Name | `guide_cta_click` |
| event_category | `engagement` |
| event_label | `{guide} - {country} - {pageType}` |
| Custom Params | `guide`, `country`, `page_type` |

**Trigger mechanism:** Called when a user clicks a CTA button or link within a guide article.

**Where it fires:** CTA buttons inside guide content pages.

**Verification:** Click a CTA inside a guide — look for `guide_cta_click` event with `guide` param.

---

### 6. `comparison_cta_click`

| Property | Value |
|---|---|
| Function | `trackComparisonCtaClick(tool, country, pageType)` |
| GA4 Event Name | `comparison_cta_click` |
| event_category | `engagement` |
| event_label | `{tool} - {country} - {pageType}` |
| Custom Params | `tool`, `country`, `page_type` |

**Trigger mechanism:** Called when a user clicks a CTA on a comparison page (e.g., "Compare" button).

**Where it fires:** CTA elements on comparison pages.

**Verification:** Click a CTA on a comparison page — look for `comparison_cta_click` event.

---

### 7. `salary_page_cta_click`

| Property | Value |
|---|---|
| Function | `trackSalaryPageCtaClick(profession, country, pageType)` |
| GA4 Event Name | `salary_page_cta_click` |
| event_category | `engagement` |
| event_label | `{profession} - {country} - {pageType}` |
| Custom Params | `profession`, `country`, `page_type` |

**Trigger mechanism:** Called when a user clicks a CTA on a salary page.

**Where it fires:** CTA elements on salary pages (e.g., salary lookup results, profession detail pages).

**Verification:** Click a CTA on a salary page — look for `salary_page_cta_click` event with `profession` param.

---

### 8. `research_page_cta_click`

| Property | Value |
|---|---|
| Function | `trackResearchPageCtaClick(country, pageType)` |
| GA4 Event Name | `research_page_cta_click` |
| event_category | `engagement` |
| event_label | `research - {country} - {pageType}` |
| Custom Params | `country`, `page_type` |

**Trigger mechanism:** Called when a user clicks a CTA on a research/methodology page.

**Where it fires:** CTA elements on research or data-sources pages.

**Verification:** Click a CTA on a research page — look for `research_page_cta_click` event.

---

### 9. `best_services_click`

| Property | Value |
|---|---|
| Function | `trackBestServicesClick(provider, country, pageType)` |
| GA4 Event Name | `best_services_click` |
| event_category | `affiliate` |
| event_label | `{provider} - {country} - {pageType}` |
| Custom Params | `provider`, `country`, `page_type` |

**Trigger mechanism:** Intended to be called when a user clicks a provider listing on the "best services" pages.

**Status:** Function defined but NOT yet wired. The best services page (`[locale]/guides/best/page.tsx`) renders provider listings but currently uses direct `<a>` links instead of `TrackedLink` components.

**Action needed:** Audit best services page and replace `<a>` links with `TrackedLink` components, or manually call `trackBestServicesClick()` in the click handler.

---

### 10. `trackEvent` (Generic)

| Property | Value |
|---|---|
| Function | `trackEvent(eventName, params)` |
| GA4 Event Name | Dynamic (passed as argument) |
| event_category | Optional (included in params if desired) |
| event_label | Optional (included in params if desired) |
| Custom Params | Any key-value pairs passed in `params` object |

**Trigger mechanism:** Manual call from any component for custom/one-off events not covered by the named functions above.

**Usage example:**

```ts
trackEvent('video_play', {
  video_title: 'How to Transfer Money',
  duration: '120s',
  event_category: 'engagement'
})
```

---

## Implementation Details

### Event Function Pattern

Every event function follows the same pattern:

```ts
export function trackSomeEvent(param1: string, param2: string) {
  if (typeof window.gtag !== 'function') return

  window.gtag('event', 'event_name', {
    event_category: 'category',
    event_label: 'label',
    custom_param: param1,
    country: currentCountry,
    page_type: currentPageType
  })
}
```

### Country and Page Type Resolution

Event functions that need `country` and `page_type` derive them from the current URL pathname using `getPageParams()`. This ensures consistency with the page tracking system — the same country/page_type values appear in page_view events and interaction events.

### Error Handling

- No events fire if gtag is unavailable (silent failure — no console errors).
- Events do not block UI interaction (fire-and-forget).
- No retry logic (if gtag loads late, events from before its load are lost — acceptable for analytics).

---

## Verification in GA4 DebugView

1. **Enable debug mode** via the Google Analytics Debugger Chrome extension or `?gtag_debug=1` query parameter.

2. **Open GA4 DebugView** at Configure > DebugView.

3. **Trigger the event** on the live site.

4. **Check the event appears** in DebugView's event stream. Verify the following for every event:
   - Event name matches the expected GA4 event name (e.g., `affiliate_click`).
   - `event_category` and `event_label` are present.
   - `country` and `page_type` custom params are populated correctly.
   - Custom params specific to the event are present (e.g., `provider`, `tool`, `profession`).

5. **Verify consent gating:**
   - Clear site data and accept only "Essential" cookies.
   - Perform the same interaction — no gtag events should appear.
   - Accept "All" cookies.
   - Perform the interaction again — events should now appear.

---

## Wiring Status Summary

| Event | Function Defined | Wired to UI | Testable |
|---|---|---|---|
| affiliate_click | Yes | Yes (via TrackedLink) | Yes |
| newsletter_signup | Yes | No | No |
| country_switch | Yes | Yes | Yes |
| calculator_complete | Yes | Yes | Yes |
| guide_cta_click | Yes | Yes | Yes |
| comparison_cta_click | Yes | Yes | Yes |
| salary_page_cta_click | Yes | Yes | Yes |
| research_page_cta_click | Yes | Yes | Yes |
| best_services_click | Yes | No | No |
| trackEvent (generic) | Yes | N/A | On-demand |

**Unwired events to prioritize:**
- `newsletter_signup` — wire to newsletter form submission handler.
- `best_services_click` — audit and convert best services page links to `TrackedLink` or add manual event call.
