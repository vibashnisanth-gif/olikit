# SEO Structure Audit

## Metadata Implementation
- **SITE_URL:** `https://olikit.com`
- **Metadata builder:** `src/lib/seo/metadata.ts`
- **Root layout metadata template:** `%s | Olikit`
- **Default title:** `Olikit - Free Online Finance & Business Tools`
- **Default description:** "Free finance, salary, tax, mortgage and business calculators..."
- **OG tags:** title, description, url, siteName (Olikit), locale, type (website)
- **Canonical:** Per-page, absolute URL
- **Robots:** index, follow, max-snippet:-1, max-image-preview:large
- **Hreflang:** 7 locales + x-default via `src/lib/seo/hreflang.ts`

## Tool Page Metadata
- **Title pattern:** `{tool} {country} - Free Take-Home Pay Calculator`
- **Description pattern:** "Calculate your take-home pay in {country} with our free salary calculator. Get accurate after-tax salary estimates with {country} tax rates for {taxYear}."
- **Keywords:** Per tool + locale name

## State Page Metadata
- **Title pattern:** `{tool} {state}, {country} - Free...`
- **Description pattern:** Same template with state inserted
- **Keywords:** tool name + state name + country name + tool keywords

## Guide Page Metadata
- **Title pattern:** `{guide} - Compare Take-Home Pay Across 7 Countries`
- **Description pattern:** Per guide definition
- **Keywords:** Per guide

## JSON-LD Schemas (on tool pages)
1. WebApplication — name, url, category (FinanceApplication), free offer
2. BreadcrumbList — Home > Tool name
3. FAQPage — All FAQs rendered as schema
4. HowTo — Steps rendered as schema
5. WebSite — SearchAction potential action
6. Speakable — cssSelector `.direct-answer`, `.quick-answer`

## Trust Page Metadata
Each trust page has its own metadata export:
- About: "About Olikit — Free Online Finance & Business Calculators" + AboutPage JSON-LD
- Contact: "Contact Olikit — Get in Touch" + ContactPage JSON-LD + support@olikit.com
- Privacy: "Privacy Policy — Olikit" + WebPage JSON-LD
- Terms: "Terms of Service — Olikit" + WebPage JSON-LD
- Disclaimer: "Disclaimer — Olikit" + WebPage JSON-LD

## Missing/Optimization Opportunities
1. **No images/OG images** — OpenGraph images not set anywhere
2. **No Twitter cards** — Twitter meta tags absent
3. **No article:published_time/modified_time** — For guides/blog content
4. **State pages have no distinct OG description** — Uses generic tool description with state inserted
5. **Robots.txt** — Not checked (standard Next.js `/robots.txt`)
6. **Sitemap.xml** — Not checked (standard Next.js `/sitemap.xml`)
7. **Schema types limited** — No Article schema for guides, no Review schema
8. **Speakable cssSelector** — Uses classes `.direct-answer` and `.quick-answer` — verify these exist in rendered HTML
