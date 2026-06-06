# Top 50 Improvement Recommendations for Olikit

## CRITICAL — Launch Blockers (P0)

### 1. Set environment variables
Populate `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, and `NEXT_PUBLIC_ADSENSE_CLIENT_ID` in Vercel. Without these, GSC, GA4, and AdSense are all dead.

### 2. Verify DNS and SSL
`olikit.com` and `www.olikit.com` still point to default TLD nameservers; SSL certs pending. Complete DNS cutover to Vercel nameservers.

### 3. Fix circular CTAs on tool pages
Tool page CTAs link to the tool page itself (e.g., `/us/tools/salary-calculator` → `/us/tools/salary-calculator`). Change to a different action (e.g., scroll to calculator, open comparison, or download results).

### 4. Add robots.txt
Create `public/robots.txt` with proper sitemap reference, crawl rules for staging/dev environments.

### 5. Add sitemap.xml
Generate an XML sitemap covering all locale/tool/guide/state/trust pages (potentially hundreds of URLs). Use `next-sitemap` or dynamic `app/sitemap.ts`.

### 6. Replace placeholder AdSense ID
The hardcoded `googleAdsId: "ca-pub-xxxxxxxx"` in `locales.ts` is unused. Remove or replace with actual ID.

## TECHNICAL SEO (P1)

### 7. Add OpenGraph images
All pages lack `og:image`. Generate per-page OG images or use a default branded image.

### 8. Add Twitter Card meta tags
Add `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` to metadata.

### 9. Filter hreflang by page existence
State pages (e.g., `/us/state/california/...`) should NOT generate hreflang for UK/AU/CA etc. Add `validLocaleSlugs` filtering to all page types.

### 10. Add x-default self-reference
Ensure each page's own URL is included in its hreflang set (best practice).

### 11. Add canonical for trust pages
Trust pages currently have canonical set in metadata. Verify these are correct (they skip locale prefix).

### 12. Add breadcrumb navigation to UI
Breadcrumb JSON-LD exists but likely no visible breadcrumb UI. Add visible breadcrumbs for UX and SEO.

### 13. Add `dateModified` to schema.org
All pages should expose `dateModified` in their JSON-LD for freshness signals.

### 14. Add `lastReviewed` for YMYL pages
Financial calculators are YMYL (Your Money or Your Life). Add `lastReviewed` to demonstrate content governance.

### 15. Verify `max-snippet:-1`
Currently set to `-1` (no limit). Consider limiting snippets to prevent thin content in SERPs.

## CONTENT & STRUCTURED DATA (P1-P2)

### 16. Implement Product schema
`buildProductJsonLd` exists but is never called. Use it on tool pages for rich results.

### 17. Add Article schema to guide pages
Guides currently have no structured data. Add Article or NewsArticle schema.

### 18. Add AggregateRating schema
Let users rate calculators; expose as AggregateRating in schema.

### 19. Add Organization schema site-wide
Currently only on `/about`. Add Organization schema to all pages for brand signals.

### 20. Add per-page last-updated timestamps
Tool pages should display "Last updated: [date]" to show freshness. Currently only trust pages have this.

### 21. Add external authority links in content
FAQ answers and sections cite official sources in methodology but don't link to them inline. Add outbound links to IRS.gov, HMRC, etc.

### 22. Create non-US subregion content
Australia (6 states), Canada (4 provinces), India (8 states) have subregion definitions but zero localized content. Fill these for GEO wins.

### 23. Add structured comparison tables
Compare pages use prose. Replace with `<table>` elements for better SEO and AI extraction.

### 24. Add financial glossary pages
Create a `/glossary` with financial terms (e.g., "What is marginal tax rate?") for topical authority.

### 25. Add "Key Takeaways" summaries
Every tool/guide page should have a 3-bullet key takeaways section for AI snippets.

## GEO & AI READINESS (P2)

### 26. Build topical authority clusters
Group calculators → guides → glossary into topic clusters (salary, tax, mortgage, investment, retirement) with internal links.

### 27. Optimize for "People also ask"
Analyze SERP PAAs for each tool page; add corresponding Q&A pairs.

### 28. Add TL;DR boxes
For guides, add a quick-reference box summarizing key points (good for AI extraction).

### 29. Remove generic fallback FAQs
Generic FAQs ("How does the {tool} work?") add no value. Replace with country-specific content or remove.

### 30. Add numerical examples in FAQs
FAQs like "How much house can I afford on $80,000?" use static text. Dynamically include the locale currency amount from the example data.

## TRUST & AUTHORITY (P2)

### 31. Add team/company information to About page
Currently no founder, team, or company details. Add real information for trust.

### 32. Add physical address
List a business address for legal compliance and trust signals.

### 33. Add social media profiles
Link to Twitter/LinkedIn/Facebook profiles for social proof.

### 34. Add customer testimonials
If any users exist, add testimonials or case studies.

### 35. Add privacy policy link in footer
Ensure privacy, terms, and disclaimer links appear in the site footer.

### 36. Implement cookie consent banner
Required for GDPR (UK/AU/CA/EU visitors). Use a lightweight consent solution.

### 37. Add accessibility statement
Financial tools should be accessible. Add an accessibility page or statement.

## CONVERSION & UX (P2-P3)

### 38. Add email newsletter signup
Capture leads with a "Get monthly tax updates" or similar email form.

### 39. Add "Save results" or "Share results" feature
Allow users to save/email/print their calculator results.

### 40. Add related tools at bottom of each tool page
"Try our Tax Calculator" or "Plan your retirement" below the current tool.

### 41. Add social share buttons
Facebook, Twitter, LinkedIn, WhatsApp share buttons on tool and guide pages.

### 42. Add onboarding tooltips for first-time users
Guide users through calculator inputs with tooltips or help icons.

### 43. Add progress indicator for multi-step calculators
Salary calculator has 5 steps; show step progress visually.

### 44. Add comparison table for cross-country data
On the home locale page, show a country comparison table of key metrics.

## PERFORMANCE & TECHNICAL (P3)

### 45. Audit calculator JavaScript bundle size
Ensure calculators aren't blocking page load. Consider dynamic imports for non-critical calculators.

### 46. Add service worker for offline access
PWA features would add stickiness for repeat calculator users.

### 47. Implement proper error boundaries
Add fallback UI for calculator errors rather than blank screens.

### 48. Add analytics events for calculator usage
Track which calculators are used most, input values (anonymized), and result interactions.

### 49. Add A/B testing capability
For CTA text, placement, and calculator UX optimization.

### 50. Set up UTM tracking and conversion goals
Define conversion events in GA4 (e.g., "calculator used", "guide viewed") for marketing optimization.
