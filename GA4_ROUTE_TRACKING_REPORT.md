# GA4 Route Tracking Report

## 1. Architecture Overview

Route tracking is implemented through three layers that work together to provide comprehensive pageview coverage across all 568 routes on olikit.com.

**Core files:**

- `src/lib/analytics/page-params.ts` — URL parsing and parameter extraction
- `src/lib/analytics/page-tracker.tsx` — Client component for SPA navigation tracking
- `src/components/site-scripts.tsx` — Initial page load tracking via gtag config
- `src/components/shell.tsx` — Mounts the PageTracker component in the app shell
- `src/lib/tracking.ts` — Re-exports for convenient imports

**Data flow:**

1. A page request arrives (initial load or SPA navigation).
2. `page-params.ts` parses the URL pathname to extract `country`, `locale`, `pageType`, and `pathname`.
3. On initial load, `site-scripts.tsx` calls `gtag('config', ...)` with `send_page_view: true` and the enhanced params inline via a `<script>` tag.
4. On SPA navigation, `page-tracker.tsx` detects the `usePathname()` change and fires `gtag('event', 'page_view', {...})` with the same enhanced params.
5. All events flow to the GA4 property configured via `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

---

## 2. How Route Tracking Works

### Initial Page Load

The `site-scripts.tsx` component renders an inline `<script>` that executes a gtag config call with `send_page_view: true`. This handles the very first pageview before React hydration completes.

```
gtag('config', '${measurementId}', {
  send_page_view: true,
  page_path: '${pageParams.pathname}',
  page_title: '${pageTitle}',
  page_location: '${fullUrl}',
  country: '${pageParams.country}',
  page_type: '${pageParams.pageType}'
})
```

Key design decisions:

- `send_page_view: true` tells GA4 to fire the pageview automatically — no separate `gtag('event', 'page_view')` call is needed on initial load.
- Enhanced params (`country`, `page_type`) are included at config time so every subsequent event automatically inherits them as part of the session context.
- The script renders with `strategy="afterInteractive"` so it does not block page render.

### SPA Navigation

The `page-tracker.tsx` component is a client component mounted in `shell.tsx`. It:

1. Uses `usePathname()` from `next/navigation` to subscribe to route changes.
2. On mount, sets a `hasMounted` ref to `true` after the first render (skips initial mount because SiteScripts already handled it).
3. In a `useEffect` dependent on `pathname`, fires a manual page_view event:

```
gtag('event', 'page_view', {
  page_path: params.pathname,
  page_title: document.title,
  page_location: window.location.href,
  country: params.country,
  page_type: params.pageType
})
```

This covers:

- Link clicks that change the route (Next.js client-side navigation).
- Browser back/forward buttons (`usePathname()` updates on `popstate`).
- Programmatic route changes via `router.push()` or `<Link>` components.

### Why Two Mechanisms?

- Initial load must work before React hydration. An inline script in the `<head>` or `<body>` guarantees the gtag call fires immediately.
- SPA navigations do not trigger a full page load, so no new `<script>` executes. The `PageTracker` component fills this gap by watching `usePathname()`.

Both paths emit the same event shape, ensuring consistent data in GA4.

---

## 3. Page Params Extraction Logic

The `getPageParams(pathname: string)` function in `page-params.ts` is the single source of truth for URL-to-metadata mapping.

**Extraction algorithm:**

1. Split the pathname by `/` and filter empty segments.
2. The first segment is always the locale (e.g., `en`, `fr`, `de`). Extract as `locale`.
3. The second segment determines the page type. A lookup map translates segment values to canonical page types:

| URL Segment | pageType | Example |
|---|---|---|
| (none after locale) | home | /en |
| [country-code] | country_hub | /en/us |
| tools | tools_hub | /en/tools |
| [tool-slug] | tool | /en/tools/currency-converter |
| salary | salary_hub | /en/salary |
| [profession] | salary_profession | /en/salary/software-engineer |
| guides | guides_hub | /en/guides |
| [guide-slug] | guide | /en/guides/moving-to-canada |
| best | best_services | /en/guides/best |
| compare | comparisons | /en/compare |
| rankings | rankings | /en/rankings |
| research | research | /en/research |
| countries | countries | /en/countries |
| professions | professions | /en/professions |
| methodology | methodology | /en/methodology |
| about | about | /en/about |
| search | search | /en/search |
| data-sources | data_sources | /en/data-sources |
| editorial-policy | editorial_policy | /en/editorial-policy |
| state | state | /en/us/ca |
| [state]/[tool] | state_tool | /en/us/ca/currency-converter |

4. The `country` param is derived from the pathname by checking if any segment is a known two-letter country code (e.g., `us`, `uk`, `ca`, `au`, `nz`, `in`, `sg`). If found, that value is used; otherwise it falls back to `'none'`.

5. The `pathname` is stored as-is for the `page_path` dimension.

**Edge cases handled:**

- Unknown segments map to `pageType: 'other'` rather than throwing.
- Locale-only paths (`/en`) correctly resolve to `home`.
- Deeply nested paths like `/en/us/ca/currency-converter` resolve to `state_tool` with `country: 'us'`.

---

## 4. Verification Instructions

### Prerequisites

- Access to the GA4 property linked to `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
- User must have at minimum "Analyst" role in GA4.

### Steps to Verify in GA4 DebugView

1. **Enable Google Analytics Debug Mode in your browser:**
   - Install the "Google Analytics Debugger" Chrome extension.
   - Or add `?gtag_debug=1` to any URL on olikit.com.

2. **Open GA4 DebugView:**
   - Navigate to your GA4 property.
   - Go to **Configure > DebugView** in the left sidebar.
   - You should see your device appear in the debug device list within 30 seconds.

3. **Verify initial page load:**
   - Open a new tab and navigate to `https://olikit.com/en`.
   - In DebugView, look for a `page_view` event with.
     - `page_path`: `/en`
     - `page_type`: `home`
     - `country`: `none`
     - `page_title`: `<your page title>`

   - Repeat for a country hub page like `https://olikit.com/en/us`.
     - `page_type`: `country_hub`
     - `country`: `us`

4. **Verify SPA navigation:**
   - With the debugger still active, click a link to navigate to another page (e.g., click "Tools" from the nav).
   - DebugView should show a new `page_view` event with updated `page_path` and `page_type`.
   - Confirm there is no duplicate `page_view` from the initial load mechanism.

5. **Verify browser back/forward:**
   - Click the browser back button.
   - A new `page_view` event should appear for the previous route.
   - Click forward to verify the pattern holds.

6. **Verify all page types are covered:**
   - Navigate to at least one URL from each page type category in the table above.
   - Confirm the `page_type` param matches what is expected.

7. **Check the params panel:**
   - In DebugView, click any `page_view` event to open the event details panel.
   - Confirm all enhanced params (`country`, `page_type`, `page_path`, `page_location`) are present and correctly populated.

### Common Issues and Fixes

| Symptom | Likely Cause | Fix |
|---|---|---|
| No events in DebugView | Debug mode not active | Install GA Debugger extension or add `?gtag_debug=1` |
| Duplicate page_view on initial load | `send_page_view: true` AND manual `page_view` event on first mount | PageTracker skips initial mount via `hasMounted` ref — verify this logic |
| `country` always shows `'none'` on certain pages | URL segment does not contain a recognized country code | Check that the path includes the country code or update the extraction logic |
| Events on initial load but not on SPA nav | PageTracker not mounted | Verify `shell.tsx` includes `<PageTracker />` |

---

## Appendix: Code References

- `src/lib/analytics/page-params.ts` — `getPageParams()` function
- `src/lib/analytics/page-tracker.tsx` — `PageTracker` component
- `src/components/site-scripts.tsx` — Initial load gtag config
- `src/components/shell.tsx` — App shell (mounts PageTracker)
- `src/lib/tracking.ts` — Public re-exports
