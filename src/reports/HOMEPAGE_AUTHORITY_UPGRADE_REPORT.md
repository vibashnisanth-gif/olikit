# Homepage Authority Upgrade Report

## Before / After Comparison

### Sections Changed

| Section | Before | After |
|---|---|---|
| Hero | Navigation hub with CTAs only | CTAs retained + **Global Salary Snapshot** showing real platform data for Software Engineer, Doctor, Registered Nurse across countries |
| Featured Insights | Not present | 3 insight cards: Software Engineer rankings, Tax burden comparison, Healthcare professional research — each with CTA |
| Popular Research & Rankings | Not present | 8-card grid linking to Highest Paying Jobs (US/CA/AU), Best Countries lists, Global Rankings, Tax Comparisons, Cost of Living |
| Explore Salaries by Profession | Not present | 8 profession cards linking to `/professions` hub — Software Engineer, Data Scientist, Product Manager, Doctor, Registered Nurse, Accountant, Financial Analyst, Mechanical Engineer |
| Authority Callout | "What Makes Olikit Different?" — generic copy | **"Trusted Financial Intelligence"** — specific methodology, data sources, editorial policy with 3 CTAs |
| FAQ | 8 generic Q&A items | 7 upgraded Q&As with specific references to IRS, HMRC, CRA, ATO, IRD, IRAS |
| Schema / JSON-LD | FAQPage, WebPage, Organization | Added: `BreadcrumbList`, `lastReviewed`, `dateModified`, `publisher`, `author` on WebPage schema. All schemas retained. |

### Sections Preserved (unchanged)

- Hero layout, CTAs, trust micro-signals
- Trust strip
- Financial Intelligence for Real-World Decisions
- Why People Use Olikit
- Localized Financial Intelligence (country cards)
- Transparent Data / Clear Methodology / Independent Research
- Compare More Than Salaries
- Beyond Calculators
- Where The Data Comes From
- Final CTA

### Internal Linking Added

**Direct links from homepage to:**
- Countries — via Localized Financial Intelligence (7 country cards)
- Professions — via Explore Salaries by Profession (8 cards) + Beyond Calculators
- Rankings — via Popular Research & Rankings (8 cards) + Featured Insights
- Research — via Featured Insights + Popular Research
- Comparisons — via Compare CTAs + Beyond Calculators
- Methodology — via Trusted Financial Intelligence + footer trust line
- Data Sources — via Trusted Financial Intelligence + footer trust line
- Editorial Policy — via Trusted Financial Intelligence + footer trust line

### Schema Audit

| Schema Type | Added |
|---|---|
| FAQPage | ✓ Upgraded questions/answers |
| WebPage | ✓ Added `lastReviewed`, `dateModified`, `publisher`, `author` |
| Organization | ✓ Retained |
| BreadcrumbList | ✓ New — Home position |

### Build Verification

- TypeScript: ✅ Pass (0 errors)
- Build: ✅ Pass (568 static pages generated)
- All links resolve to existing routes

### Recommendations for Next Iteration

1. Create dedicated landing pages for "Highest Paying Jobs in X" to serve the Popular Research links
2. Add profession-specific hub pages (e.g., `/professions/software-engineer`) to support direct deep-linking
3. Wire up `lastReviewed` and `dateModified` dynamically from a CMS or data freshness pipeline
4. Add `Lighthouse` CI check to maintain ≥90 score
