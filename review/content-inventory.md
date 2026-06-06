# Olikit Content Inventory

Generated: 2026-06-06
Site URL: https://olikit.com
Stack: Next.js, TypeScript, Tailwind CSS
Content: Dynamic (JS generators), all in `src/lib/content/`

---

## 1. Locales (7 countries)
| Slug | Name | Currency | Tax Year | VAT Name | VAT Rate |
|------|------|----------|----------|----------|----------|
| us | United States | $ USD | 2025-2026 | Sales Tax | 0% |
| uk | United Kingdom | £ GBP | 2025-2026 | VAT | 20% |
| au | Australia | A$ AUD | 2025-2026 | GST | 10% |
| ca | Canada | C$ CAD | 2025 | GST/HST | 5% |
| nz | New Zealand | NZ$ NZD | 2025-2026 | GST | 15% |
| in | India | ₹ INR | 2025-2026 | GST | 18% |
| sg | Singapore | S$ SGD | 2025 | GST | 9% |

## 2. Tools (7 calculators)
| Slug | Name | Category | Tier A? | State SEO? |
|------|------|----------|---------|-----------|
| salary-calculator | Salary Calculator | salary | Yes | Yes |
| tax-calculator | Tax Calculator | tax | Yes | Yes |
| mortgage-calculator | Mortgage Calculator | mortgage | Yes | Yes |
| investment-calculator | Investment Calculator | investment | No | No |
| retirement-calculator | Retirement Calculator | retirement | Yes | No |
| business-loan-calculator | Business Loan Calculator | loan | Yes | No |
| profit-margin-calculator | Profit Margin Calculator | business | No | No |

Tier A tools: mortgage, tax, salary, retirement, business-loan (5)
State SEO tools: salary, mortgage, tax (3)

## 3. Guides (5)
| Slug | Name | Related Tools |
|------|------|---------------|
| salary-after-tax-by-country | Salary After Tax by Country | salary-calculator |
| tax-brackets-by-country | Tax Brackets by Country | tax-calculator |
| how-much-house-can-i-afford | How Much House Can I Afford? | mortgage-calculator |
| retirement-planning-guide | Retirement Planning Guide | retirement-calculator, investment-calculator |
| compound-interest-examples | Compound Interest Examples | investment-calculator, retirement-calculator |

## 4. US States with content (10 of 50)
California, Texas, Florida, New York, Illinois, Pennsylvania, Ohio, Georgia, North Carolina, Washington

Each state has content for: salary-calculator, tax-calculator, mortgage-calculator

## 5. Non-US subregions (defined in `locales.ts` but NO content)
- UK: none
- Australia: NSW, VIC, QLD, WA, SA, TAS
- Canada: Ontario, BC, Alberta, Quebec
- India: Maharashtra, Delhi, Karnataka, Tamil Nadu, Uttar Pradesh, West Bengal, Gujarat, Rajasthan
- NZ: none
- SG: none

## 6. Trust Pages (5, static)
| Route | Title | Description |
|-------|-------|-------------|
| /about | About Olikit | Mission, data sources, methodology |
| /contact | Contact Olikit | Email support@olikit.com |
| /privacy-policy | Privacy Policy | GA4, AdSense, cookies, data handling |
| /terms | Terms of Service | No financial advice disclaimer |
| /disclaimer | Disclaimer | Educational purposes only |

## 7. Compare Content
Each tool page has a `/compare` route for cross-country comparison.

## 8. SEO Implementation
| Component | File | Status |
|-----------|------|--------|
| SITE_URL constant | `src/lib/seo/constants.ts` | Set to https://olikit.com |
| Locale definitions | `src/lib/seo/locales.ts` | 7 locales with subregions |
| Metadata builder | `src/lib/seo/metadata.ts` | Title, desc, OG, canonical, hreflang |
| Hreflang generator | `src/lib/seo/hreflang.ts` | 7 locales + x-default |
| JSON-LD schemas | `src/lib/seo/json-ld.ts` | WebApplication, FAQ, Breadcrumb, HowTo, Product, WebSite, Organization, WebPage, Speakable, Dataset |
| Sources & methodology | `src/lib/seo/sources.ts` | Per-locale official sources |
| Root layout metadata | `src/app/layout.tsx` | Template, verification, AdSense meta |

## 9. Content Volume Summary
- `generators.ts`: ~1,140 lines — main page, sections, FAQs, AI answers, states, compare
- `locale-content.ts`: ~655 lines — UK, AU, CA, NZ, IN, SG locale-specific overrides
- `state-data.ts`: ~155 lines — numerical data for 10 US states
- `guide-generators.ts`: ~339 lines — 5 guide generator functions
- `guide-templates.ts`: ~113 lines — guide definitions and SEO metadata
- `templates.ts`: ~192 lines — 7 tool definitions and SEO metadata

**Total: ~2,594 lines of content generation code**
