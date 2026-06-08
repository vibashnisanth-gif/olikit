# Global Homepage Rebuild Report

Date: 2026-06-07
Build: 550 SSG pages, 0 TS errors

## Previous State
The root `/` was a single line: `redirect("/us")`. The Global homepage simply redirected all users to the US country page, creating immediate confusion and failing the 3-second identity test.

## New Structure (Section by Section)

### SECTION 1: Olikit Global Identity
- Flag + "GLOBAL" badge (not country-specific)
- H1: "Olikit Global — Global salary, tax, cost-of-living and compensation intelligence platform"
- Stats row: countries, pages, tools, guides, professions, last updated
- No country-specific content above the fold

### SECTION 2: Choose Country
- Grid of all 7 country cards with flags
- Each links to its country hub with page count

### SECTION 3: Global Comparisons
- Links to per-country comparison pages
- "All Countries" CTA

### SECTION 4: Global Rankings
- Links to per-country rankings
- "Professions by Salary" CTA

### SECTION 5: Global Research
- Links to per-country research pages

### SECTIONS 6-7: Methodology, Data Sources, Editorial Policy
- Three-card grid linking to authority pages
- Each card has a description of what the page covers

### SECTION 8: AI SEO FAQ
- 7 structured Q&A pairs covering: What is Olikit, countries supported, tools provided, salary calculation methodology, tax calculation methodology, update frequency, data sources
- Matches FAQPage JSON-LD schema
- LLM-friendly plain text format

## AI/SEO Optimization
- FAQPage schema.org JSON-LD injected
- hreflang tags via proxy middleware
- Canonical URL set to SITE_URL
- All sections link to country-specific hubs

## Verification
- `/` now returns HTTP 200 (not 301 redirect)
- No country-specific content above the fold
- AI can immediately understand what Olikit is and does
