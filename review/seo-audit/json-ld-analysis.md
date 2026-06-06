# JSON-LD Structured Data Analysis

## Schemas Implemented (in `src/lib/seo/json-ld.ts`)

| Schema Type | Tool Pages | Guide Pages | State Pages | Trust Pages |
|-------------|-----------|-------------|-------------|-------------|
| WebApplication | ✓ | — | — | — |
| FAQPage | ✓ | — | ✓ | — |
| BreadcrumbList | ✓ | — | — | — |
| HowTo | ✓ | — | — | — |
| WebSite | ✓ | — | — | — |
| Organization | — | — | — | ✓ (About) |
| WebPage | — | — | — | ✓ (Privacy, Terms, Disclaimer) |
| Speakable | ✓ | — | — | — |
| Dataset | — | — | ✓ | — |
| Product | — | — | — | — |
| LocalBusiness | ✓ | — | — | — |
| AboutPage | — | — | — | ✓ (About) |
| ContactPage | — | — | — | ✓ (Contact) |

## Aggregate JSON-LD (tool pages)
Function `buildAggregateJsonLd` bundles: WebApplication + BreadcrumbList + LocalBusiness + Speakable + FAQPage + HowTo

## Issues
1. **Product schema defined but never used** — `buildProductJsonLd` exists but is not called anywhere
2. **No Article schema** — Guide pages should have Article schema
3. **No Review schema** — Could add for calculators
4. **No VideoObject or ImageObject** — Not critical for calculators
5. **No AggregateRating** — Could add for user engagement signals
6. **LocalBusiness typed as WebSite** — Misleading; should be WebSite or SoftwareApplication for a calculator site
7. **Organization schema used only on /about** — Should appear on all pages
8. **State pages get Dataset schema** — Good for data-rich state pages
