# Brand Disambiguation Plan — Olikit

**Date**: July 2026
**Scope**: Entity disambiguation (Phase 6)

---

## Current Brand Status

### Entity Recognition
- **Name**: Olikit
- **Domain**: olikit.com
- **Entity Type**: Organization (defined in JSON-LD)
- **Industry**: Financial tools, salary intelligence, tax calculators

### Disambiguation Assessment

**No confusion with similarly named products detected.** The name "Olikit" appears unique in the financial tools space. However, the entity is young and lacks external signals that help search engines disambiguate.

---

## Current Entity Signals

### On-Site Signals (Strong)
- Organization schema on homepage, about, contact
- Consistent brand name across all pages
- Consistent domain (olikit.com)
- Consistent description in footer, about, schemas
- Founder identity (Vibash, Sydney AU)

### Off-Site Signals (Weak)
- No `sameAs` schema (no social profile links)
- No Wikipedia/Wikidata entity (expected for new platform)
- No press mentions (no external entity validation)
- No Knowledge Panel in Google

---

## Disambiguation Strategy

### 1. Strengthen On-Site Entity Signals

**Fix Organization Schema**:
```json
{
  "@type": "Organization",
  "name": "Olikit",
  "url": "https://olikit.com",
  "logo": "https://olikit.com/logo.png",
  "description": "Free online financial tools for salary, tax, and cost of living comparisons across 7 countries.",
  "foundingDate": "2026",
  "founder": {
    "@type": "Person",
    "name": "Vibash",
    "url": "https://olikit.com/about"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "addressCountry": "AU"
  },
  "sameAs": [
    "https://x.com/olikit",
    "https://linkedin.com/company/olikit",
    "https://github.com/olikit"
  ]
}
```

**Consistent Entity Description Across All Pages**:
- Homepage: "Compare salaries, taxes, and cost of living across 7 countries"
- About: "A free online financial tools platform"
- Footer: "Compare salaries, taxes, compensation and living costs"
- Schema: "Free online financial tools for salary, tax, and cost of living comparisons"

**Standardize to**: "Olikit is a free online platform for comparing salaries, taxes, and cost of living across 7 countries using government-sourced data."

### 2. Create "What Is Olikit" Content

Add to About page:
- **What Olikit is**: Clear 1-sentence definition
- **What Olikit is NOT**: Not a bank, not a financial advisor, not a tax service
- **How it's different**: Government-sourced, transparent methodology, client-side calculations
- **Who it's for**: Professionals considering relocation, career changes, salary negotiations

### 3. Build External Entity Signals

**SameAs Links**:
- Create social profiles (X/Twitter, LinkedIn, GitHub)
- Add `sameAs` to Organization schema
- Ensure consistent brand name on all profiles

**Wikipedia/Wikidata** (Long-term):
- Not critical now but would help long-term
- Create when entity has press coverage and external references

**Press Mentions**:
- Earn editorial mentions through data quality
- Each mention reinforces entity identity

### 4. Monitor Entity Consistency

**Check Monthly**:
- Google Knowledge Panel (search "Olikit")
- Google entity recognition (search "Olikit salary")
- AI system responses (ask ChatGPT, Perplexity about Olikit)
- Social profile consistency

**Red Flags**:
- If "Olikit" returns unrelated results
- If entity is confused with another product
- If description varies across platforms

---

## Entity Description Template

Use this description consistently across all platforms:

**25 words**: "Olikit is a free online platform comparing salaries, taxes, and cost of living across 7 countries using government-sourced data."

**50 words**: "Olikit helps professionals make informed career and relocation decisions by providing free calculators and comparisons for salaries, taxes, and cost of living across 7 countries. Data is sourced from government agencies including the IRS, HMRC, ATO, and CRA."

**100 words**: "Olikit is a free online financial tools platform that helps professionals compare salaries, taxes, compensation, and living costs across 7 countries (US, UK, Australia, Canada, New Zealand, India, and Singapore). The platform uses government-sourced data from agencies including the IRS, HMRC, ATO, CRA, IRD, IRAS, and CBDT to provide transparent, verifiable calculations. Olikit offers 12+ interactive calculators, 21 profession-specific salary analyses, and 35 city-level cost of living comparisons. All calculations run client-side, ensuring user financial data never leaves their browser."

---

## Files Affected

| File | Changes |
|------|---------|
| `src/lib/seo/json-ld.ts` | Add `logo`, `sameAs` to `buildOrganizationJsonLd()` |
| `src/app/about/page.tsx` | Add "What Olikit Is / Is Not" section |
| `src/lib/seo/locales.ts` | Standardize description across locales |

---

## KPIs

| Metric | Target | Timeline |
|--------|--------|----------|
| Google Knowledge Panel | Appear | 6 months |
| Consistent entity description | 100% of pages | Immediate |
| sameAs links | 3+ social profiles | 1 month |
| Press mentions | 5+ | 6 months |
| AI recognition | Cited in responses | 3 months |
