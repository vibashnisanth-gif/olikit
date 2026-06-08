# Search Console Audit Report

## Overview

This report documents the current state of Google Search Console integration for olikit.com, what has been verified, and step-by-step instructions for manual review.

---

## What Is Confirmed

### 1. Site Ownership Verification

**Method:** HTML meta tag in `<head>`.

**Tag value:** `<meta name="google-site-verification" content="G-zqYpV3qRnw" />`

**Status:** Active. The tag is present in the root layout and renders on every page. Verification was completed at the time the tag was added to Search Console.

**How to confirm:** View page source on any page of olikit.com — the meta tag appears within the `<head>` element on every response.

### 2. Sitemap

**URL:** `https://olikit.com/sitemap.xml`

**Status:** Publicly accessible, returns HTTP 200 OK, contains 532 URLs.

**How to confirm:**

```bash
curl -s -o /dev/null -w "%{http_code}" https://olikit.com/sitemap.xml
# Returns: 200

curl -s https://olikit.com/sitemap.xml | head -20
# Verify the XML structure and presence of <url> entries
```

**What the sitemap contains:** 532 URLs covering all public pages — locale homepages, country hubs, tool pages, salary pages, guides, comparisons, rankings, research pages, and supporting pages.

**Submitted to Search Console:** The sitemap should be submitted via Search Console UI (see Manual Review Instructions below). Verify whether this has been done by checking the Sitemaps report.

### 3. Robots.txt

**URL:** `https://olikit.com/robots.txt`

**Status:** Publicly accessible, returns HTTP 200 OK.

**Content:**

```
User-agent: *
Allow: /

Sitemap: https://olikit.com/sitemap.xml
```

**Assessment:** Correct. Allows all crawlers full access. References the sitemap location.

---

## Automated Audit Limitations

Without Search Console API OAuth credentials, the following data cannot be retrieved programmatically:

| Metric | How to Access |
|---|---|
| Indexed page count | Search Console > Pages |
| Excluded pages (non-indexed) | Search Console > Pages > Not indexed |
| Discovered pages | Search Console > Pages > Discovered but not indexed |
| Crawl errors | Search Console > Pages > Error |
| Core Web Vitals | Search Console > Core Web Vitals |
| Mobile usability | Search Console > Mobile Usability |
| Coverage report | Search Console > Pages (full report) |
| Search queries / impressions | Search Console > Search Results |
| Click-through rate (CTR) | Search Console > Search Results |
| Average position | Search Console > Search Results |
| Sitemap status | Search Console > Sitemaps |
| Manual actions | Search Console > Manual Actions |

**Recommendation:** Set up automated monitoring once OAuth credentials are configured. Use the Google Search Console API with a service account to export daily coverage and performance data into a dashboard.

---

## Step-by-Step Manual Search Console Review

### Access Prerequisites

- A Google account with owner-level access to the Search Console property for olikit.com.
- The property must be verified (already confirmed — see above).

### Step 1: Check Sitemap Status

1. Open [Google Search Console](https://search.google.com/search-console).
2. Select the olikit.com property.
3. In the left sidebar, go to **Sitemaps**.
4. Check if `sitemap.xml` is listed:
   - If listed, confirm the "Submitted" count matches 532 URLs and "Discovered" count is similar.
   - If not listed, enter `sitemap.xml` in the "Enter a sitemap URL" field and click **Submit**.
5. Check the "Errors" column — any errors here indicate the sitemap could not be parsed.

### Step 2: Review Index Coverage

1. Go to **Pages** (formerly Coverage) in the left sidebar.
2. Review the chart at the top — it shows total indexed pages over time.
3. Examine the four status categories:

   **Valid (Indexed):**
   - This is the count of pages currently in Google's index.
   - Compare to the 532 URLs in the sitemap — ideally they are close.
   - Click the "Valid" row to see which specific pages are indexed.

   **Valid with warnings:**
   - Pages indexed but with issues (e.g., indexed without `meta description`).
   - Review these to determine if fixes are needed.

   **Excluded:**
   - Pages Google chose not to index (canonicalized, noindex, redirected, etc.).
   - Review to ensure no important pages are being excluded.

   **Error:**
   - Pages Google could not index (server errors, not found, redirect errors, blocked by robots.txt).
   - These require immediate attention.

4. For each error, click the row to see specific URLs and the error reason.

### Step 3: Review Core Web Vitals

1. Go to **Core Web Vitals** in the left sidebar.
2. Check status for both mobile and desktop:
   - **Poor URLs:** Pages failing LCP, FID/INP, or CLS thresholds.
   - **Needs improvement:** Pages near thresholds.
   - **Good URLs:** Pages passing all thresholds.
3. Click into each section to see specific page-level data.
4. If poor URLs exist, prioritize fixes (common issues: large images, render-blocking resources, CLS from layout shifts).

### Step 4: Check Mobile Usability

1. Go to **Mobile Usability** in the left sidebar.
2. Check for any "Usability errors" — these are pages with mobile-specific issues (text too small, content wider than screen, clickable elements too close, etc.).
3. Fix any errors found — mobile usability is a ranking factor for mobile search.

### Step 5: Review Search Results Performance

1. Go to **Search Results** (Performance) in the left sidebar.
2. Configure the date range — start with the last 90 days.
3. Review key metrics:
   - **Total clicks** — how many users clicked through from search.
   - **Total impressions** — how many times olikit.com appeared in search results.
   - **Average CTR** — clicks / impressions.
   - **Average position** — average ranking position.
4. Filter by page, query, country, and device to identify:
   - Top-performing pages and queries.
   - Pages with high impressions but low CTR (consider improving titles/meta descriptions).
   - Pages with declining trends.
5. Check the **Queries** tab to see which search terms drive traffic. Look for opportunities to create content around high-impression, low-position queries.

### Step 6: Inspect Specific URLs

1. At the top of Search Console, use the **URL Inspection** bar.
2. Enter a specific URL (e.g., `https://olikit.com/en/tools/currency-converter`).
3. Review the results:
   - **Index coverage:** Is the page indexed? If not, what's the reason?
   - **Canonical URL:** Is the correct canonical set?
   - **Sitemap:** Which sitemap includes this URL?
   - **Rich results:** Are any rich results detected (FAQ, How-to, etc.)?
4. Click **TEST LIVE URL** to check the current version (useful after changes).
5. If the page is not indexed and should be, click **REQUEST INDEXING**.

### Step 7: Review Links

1. Go to **Links** in the left sidebar.
2. Review **External links** — which sites link to olikit.com.
3. Review **Top linked pages** — which pages have the most backlinks.
4. Review **Internal links** — which internal linking patterns exist. Look for orphaned pages (pages with few or no internal links).

---

## Checklist for Regular Search Console Review

Use this checklist weekly or bi-weekly during the initial growth phase:

- Check **Pages** report for new errors or spikes in excluded pages.
- Check **Core Web Vitals** for any degradations (especially after deployments).
- Review **Mobile Usability** for new errors.
- Check **Sitemaps** report for any submission errors.
- Review **Search Results** for traffic trends — investigate any sudden drops.
- Inspect **3-5 important URLs** (homepage, top landing pages) to confirm they are indexed.
- Check **Manual Actions** to ensure no penalties have been applied.

---

## Action Items

1. **Confirm sitemap is submitted.** If not, submit `sitemap.xml` in Search Console Sitemaps report.
2. **Set up email notifications.** In Search Console > Settings > Preferences, enable email notifications for critical issues.
3. **Address any Errors** in the Pages report — these are pages Google cannot index.
4. **If Core Web Vitals show Poor URLs,** create a performance improvement plan.
5. **Optional: Configure API access.** Set up a Google Cloud project, enable the Search Console API, and create a service account for automated data pulls. This will allow scripted monitoring in the future.
6. **Export baseline data.** Download the Search Results report as a CSV for the last 90 days to establish a performance baseline.
