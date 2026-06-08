# AI SEO / GEO SEO Report

Date: 2026-06-07
Target: LLMs (ChatGPT, Gemini, Claude, Perplexity, Bing AI)

## Global Homepage FAQ — LLM Ready

The Global homepage now contains 7 structured Q&A pairs that explicitly answer what AI systems look for:

1. What is Olikit?
2. What countries does Olikit support?
3. What tools does Olikit provide?
4. How does Olikit calculate salaries?
5. How does Olikit calculate taxes?
6. How often is data updated?
7. What are Olikit's data sources?

## Schema.org Markup

FAQPage JSON-LD injected into the Global homepage with all 7 Q&A pairs. This structure is recognized by Google, Bing, and AI crawlers.

## Country Hreflang

The proxy middleware sets hreflang link headers on every page response:
- `rel="alternate" hreflang="en-US"` for US pages
- `rel="alternate" hreflang="en-GB"` for UK pages
- `rel="alternate" hreflang="x-default"` for the non-locale version

## GEO SEO Signals

| Signal | Implementation |
|--------|---------------|
| Country-specific URLs | `/{slug}/...` pattern for all country pages |
| Hreflang tags | Set via response headers in proxy middleware |
| Canonical URLs | Every page has explicit canonical |
| OpenGraph tags | Every page has OG title, description, URL |
| Structured data | FAQPage + LocalBusiness + Organization schemas |
| Last updated date | Shown on homepage and in page metadata |
| Data sources | Dedicated page with official government source links |
| Methodology | Dedicated page explaining calculation methods |

## LLM Friendliness

The FAQ text is written in clear, declarative sentences optimized for LLM extraction:
- "Olikit is a free salary, tax, cost-of-living and compensation intelligence platform covering 7 countries..."
- Each answer is self-contained with specific details
- Country names include both full name and slug abbreviation
- Tax authority names are explicit (IRS, HMRC, ATO, CRA, IRD, IRAS)

## AI Crawler Coverage

All global authority pages are static (○) and linked from the homepage:
- /methodology
- /data-sources
- /editorial-policy
- /compare
- /rankings
- /research

This ensures AI crawlers can discover all authority content from the homepage in one hop.
