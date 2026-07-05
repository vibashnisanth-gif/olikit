# AI Search Readiness — Olikit

**Date**: July 2026
**Scope**: AI search optimization (Phase 12)

---

## Current AI Readiness Score: 72/100

### Strengths
- FAQ sections on 892 pages with JSON-LD FAQPage schema
- Speakable schema on tool pages (`.direct-answer`, `.quick-answer`)
- Direct Answer boxes on tool pages ("At a Glance")
- Quick Answer boxes on tool pages ("Quick Answer")
- Structured tables on profession and comparison pages
- Methodology documentation
- Clear page structure with consistent terminology

### Gaps
- No glossary definitions embedded in pages
- Compare page lacks FAQ and JSON-LD
- Some pages use FAQAccordion (no JSON-LD) instead of FAQSection
- Lowercase profession names in FAQ answers
- No machine-readable data downloads

---

## AI-Friendly Page Structure

### Current Structure (Good)
```
[H1: Clear question-oriented title]
[Direct Answer: 1-2 sentence answer]
[Calculator/Interactive Tool]
[Quick Answer: Detailed explanation]
[Structured Data Table]
[Methodology Section]
[FAQ Section with JSON-LD]
[Related Pages]
```

### What AI Systems Need

1. **Clear Summary at Top** — First 2 sentences answer the primary question
2. **Structured Tables** — Data in `<table>` format, not images
3. **Consistent Terminology** — Same term for same concept across all pages
4. **Definitions** — Glossary terms embedded where used
5. **FAQ Sections** — Common questions with JSON-LD
6. **Methodology** — How data is calculated
7. **Sources** — Where data comes from
8. **Machine-readable Data** — CSV/JSON downloads for researchers

---

## Fixes Needed

### 1. Add Glossary Definitions to Key Pages
Embed glossary definitions inline where terms are used:
- "Take-home pay" — defined on tax calculator pages
- "Purchasing power parity" — defined on comparison pages
- "Effective tax rate" — defined on tax pages
- "Cost of living index" — defined on cost-of-living pages

### 2. Fix Compare Page
- Add FAQ section
- Add JSON-LD (FAQPage, WebApplication)
- Add methodology section

### 3. Standardize FAQ Component
Use `FAQSection` (server-rendered with JSON-LD) everywhere. Replace `FAQAccordion` (client-side, no JSON-LD).

### 4. Fix Lowercase Profession Names
"ai engineer" → "AI Engineer" in FAQ answers.

### 5. Add Machine-Readable Data Downloads
Add CSV/JSON download links to:
- Salary dataset
- Tax brackets
- Cost of living indices
- Exchange rates

---

## AI Citation Optimization

### How AI Systems Cite Sources

AI systems (ChatGPT, Perplexity, Gemini) cite sources that:
1. Have clear, concise answers
2. Provide structured data
3. Have authoritative methodology
4. Are well-cited by other sources
5. Have consistent entity information

### Olikit's Citation Advantages
- Government-sourced data (IRS, HMRC, ATO, etc.)
- Transparent methodology
- Structured data tables
- Multiple JSON-LD schemas
- Clear page structure

### Olikit's Citation Weaknesses
- No historical data (can't cite trends)
- Limited research reports (only 5)
- No downloadable datasets
- Thin profession content (templated)

---

## Implementation Checklist

- [ ] Add glossary definitions to top 20 pages
- [ ] Fix compare page (add FAQ, JSON-LD, methodology)
- [ ] Replace FAQAccordion with FAQSection everywhere
- [ ] Fix lowercase profession names in FAQs
- [ ] Add CSV/JSON download links to datasets
- [ ] Add "Last updated" timestamps to all pages
- [ ] Ensure all pages have JSON-LD
- [ ] Add Speakable schema to profession pages
- [ ] Create /statistics page with quotable stats
- [ ] Add citation guidance to research reports

---

## KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| AI citations | 10+ per flagship report | Manual monitoring |
| Pages with JSON-LD | 100% of important pages | Automated check |
| FAQ coverage | 90% of content pages | Automated check |
| Glossary definitions embedded | 50+ | Manual count |
| Downloadable datasets | 5+ | Manual count |
