# OLIKIT Free Tools Directory: MVP Strategy

**Status:** Proposed MVP; implementation should follow the existing platform's conventions.
**Goal:** Validate a trustworthy free-online-tools directory that can earn organic search traffic and revenue without disrupting OLIKIT's existing financial calculators and localized finance content.

## Decision

Build the directory as a **separate section within OLIKIT**, not as a replacement for the existing finance platform and not as a second brand/domain during validation.

Use a distinct route namespace such as `/free-tools`, with category pages beneath it (for example, `/free-tools/developer-tools`) and detail pages beneath a stable slug route (for example, `/free-tools/tools/json-formatter`). Confirm route conventions and locale behavior in the codebase before implementation. Do not reuse the existing `/[locale]/tools` routes, which already represent financial calculators.

Keep the section visually coherent with OLIKIT while making its purpose explicit in navigation. Revisit a separate domain only if user research demonstrates a distinct audience or the section creates brand/SEO conflicts.

## Why this is the lower-risk decision

- Preserves existing finance pages, route architecture, analytics, and monetization work.
- Allows a small directory MVP to be tested without a full platform pivot.
- Reuses the existing Next.js, SEO, analytics, and consent infrastructure where appropriate.
- Gives OLIKIT a clear experiment: does the directory earn qualified visits and outbound clicks?
- Avoids building hundreds of thin pages before search demand is demonstrated.

## Positioning

**Working proposition:** "Find useful online tools. Know the limits before you click."

The directory should prioritize:
1. Signup requirement and what core functionality is available without an account.
2. Pricing model and meaningful free-tier limits.
3. Browser-based versus install-required experience.
4. Privacy/data-processing notes only where supported by credible evidence.
5. Official destination, last-checked date, evidence source, and known limitations.

Do not label a tool "private", "secure", "free", "open source", or "no signup" without a defined rule and evidence. Represent unknown facts as unknown. Sponsored placement must be clearly disclosed and must not change verification status.

## Validation before broad implementation

### First 14 days
- Inspect NoSignups and 3–5 relevant competitors using REA and normal authorized browser interaction.
- Collect 30–50 real query ideas and inspect actual search results and intent; do not rely on keyword volume estimates alone.
- Compare three candidate starting categories: developer utilities, image/PDF tools, and privacy-friendly browser tools.
- Score each category for search intent, competitive strength, ability to verify claims, repeat usefulness, and monetization fit.
- Manually review 20 candidate listings and identify a specific gap OLIKIT can fill.
- Choose one category only after this review.

**Gate:** Proceed only if there is a clear audience and at least one differentiated user benefit that can be supported with evidence.

## MVP scope

Build only these capabilities for the first release:

- Directory homepage with search and a small number of reviewed featured listings.
- Search across names, descriptions, tags, and category.
- Filters for category, signup requirement, platform, and pricing where known.
- Category landing page with unique, useful editorial context.
- Tool detail page with description, use cases, limitations, signup/pricing evidence, official link, source links, and last-checked date.
- Submission/correction path with manual review.
- Responsive layout, accessible keyboard navigation, useful empty states, and clear outbound-link behavior.
- Sitemap/canonical metadata and internal linking for published pages.
- Analytics for search, filter use, outbound clicks, and page type, respecting the existing consent implementation.

Start with **30–50 reviewed listings**. Do not mass-import the entire reference directory or generate hundreds of pages for launch.

## Suggested data model

Each listing should support:

- `id`, `slug`, `name`, `summary`, `description`
- `categories[]`, `tags[]`, `useCases[]`
- `officialUrl`, `platform`
- `signupRequirement`: `none`, `optional`, `required`, `varies`, `unknown`
- `pricingStatus`: `free`, `freemium`, `paid`, `trial`, `varies`, `unknown`
- `openSourceStatus` and `license` only when verified
- `dataProcessingNotes` and `privacyEvidenceUrl` only when supported
- `verificationStatus`: `verified`, `needs-review`, `community-suggested`
- `evidenceUrls[]`, `lastCheckedAt`, `reviewNotes`
- `sponsored` and sponsorship disclosure metadata where applicable

Keep the first version in the repository's simplest maintainable source of truth (typed data or the existing data layer). Do not add a new database solely for the MVP unless the current architecture requires it.

## SEO and content rules

- Publish indexable pages only when they have distinct value for a visitor.
- Give every category and tool page a unique title, description, canonical URL, and meaningful internal links.
- Add the directory to the sitemap only after pages are complete and eligible for indexing.
- Avoid doorway pages, keyword-stuffed copy, programmatic near-duplicates, fake ratings, and unsubstantiated superlatives.
- Prefer comparison pages only when attributes are consistently researched and the comparison helps a real choice.
- Record sources and review dates so claims can be maintained.
- Monitor Search Console indexing, queries, impressions, clicks, and page-level performance before expanding.

## Revenue approach

Do not optimize for revenue before confirming useful engagement.

1. First: measure qualified visits and official outbound clicks.
2. Next: evaluate relevant affiliate programs and apply only where the fit is genuine; use real approved referral URLs, never placeholders.
3. Consider display advertising only after the site has useful original content and meets the ad provider's current policies.
4. Consider clearly labeled sponsorships only after the directory has a relevant audience.
5. Keep editorial selection and verification independent from payment.

Track revenue per 1,000 pageviews, outbound clicks per 100 visits, affiliate conversion where available, and maintenance cost. Do not assume an ad RPM or affiliate conversion rate in forecasts.

## 30/60/90-day milestones

### Days 1–14: Validate
- Competitor audit and REA observation notes.
- Search-intent sample and category scorecard.
- First 20 manually reviewed listings.
- One selected launch category.

### Days 15–30: Build and release
- Homepage, search, filters, category page, detail template.
- 30–50 reviewed listings.
- Submission/correction workflow.
- Analytics, consent checks, metadata, sitemap, responsive/accessibility tests.

### Days 31–60: Learn
- Publish 6–10 useful category guides or comparisons only where research supports them.
- Review Search Console and outbound engagement weekly.
- Fix pages with impressions but weak search snippets, and listings with weak outbound engagement.
- Do not expand the taxonomy simply to increase URL count.

### Days 61–90: Monetization experiment
- Review which pages attract relevant visitors.
- Apply to suitable affiliate programs and replace no placeholder with a live referral URL unless approved.
- Test one appropriate revenue channel and clearly disclose it.
- Expand only if demand, accuracy, and engagement justify the maintenance cost.

These are operational milestones, not promises of rankings, traffic, or revenue.

## Success metrics and decision gates

### Product quality (launch blockers)
- All published tool links checked.
- Every signup/pricing claim has evidence or is marked unknown.
- Search and filters work on mobile and keyboard.
- No fabricated ratings, testimonials, counts, verification dates, or privacy claims.
- Existing finance routes, analytics, consent, and build checks remain functional.

### Growth signals
- Search Console impressions and organic clicks trend upward over time.
- Pages indexed are useful and not substantially duplicated.
- Outbound clicks per 100 visits and search-result engagement are measurable.
- Zero-result searches and user corrections inform the next content iteration.

### Revenue signals
- At least one real, approved monetization mechanism is live before counting revenue potential.
- Affiliate clicks are attributed on all relevant placements.
- Report actual gross revenue separately from expenses and estimates.

At day 90, decide to expand, refine, or stop based on measured demand and user value—not on the number of pages published.

## Repository implementation guardrails

Before coding:
- Inspect existing route conventions, shell/navigation, metadata helpers, sitemap, analytics events, consent management, and data structures.
- Confirm the current production build and typecheck status.
- Implement in a feature branch and preserve the existing finance platform.
- Use the existing styling and component conventions where suitable.
- Add tests or verification steps for route generation, filtering, outbound links, metadata, and listing claims.
- Run the repository's real build, typecheck, and lint commands when the execution environment supports them.
- Do not claim tests passed unless they were actually run.

## Reference and tool boundaries

- Reference website: https://nosignups.net/
- Reverse-engineering toolkit: https://github.com/morluto/rea
- REA can help inspect observable website structure and behavior; it is not a UI framework and does not automatically clone a website.
- Build an original OLIKIT design and content. Do not copy the reference brand or proprietary copy.
