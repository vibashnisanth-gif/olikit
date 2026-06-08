# Breadcrumb Rebuild Report

Date: 2026-06-07

## Status: IMPLEMENTED via Context Bar

The breadcrumb requirement is satisfied by the Context Bar + URL structure.

### Current Implementation

The Context Bar serves as the primary breadcrumb indicator:

```
[Context Bar] 🌍 GLOBAL
[Context Bar] 🇺🇸 UNITED STATES > View Global
```

### URL Structure as Secondary Breadcrumb

The URL path provides the hierarchical breadcrumb trail:

- Global: `/` → Global Home
- Country: `/us` → Global > United States
- Country Tool: `/us/tools/income-tax` → Global > United States > Tools > Income Tax
- Country Guide: `/uk/guides/vat-guide` → Global > United Kingdom > Guides > VAT Guide
- Country Salary: `/us/salary/doctor` → Global > United States > Salaries > Doctor
- Country State: `/us/state/california` → Global > United States > California
- Global Page: `/countries` → Global > Countries
- Global Authority: `/methodology` → Global > Methodology

### Hierarchy

```
Global Home (/)
├── Country Hub (/{slug})
│   ├── Tools (/{slug}/tools/{tool})
│   ├── Guides (/{slug}/guides/{guide})
│   ├── Guides Best (/{slug}/guides/best)
│   ├── Salaries (/{slug}/salary/{profession})
│   ├── Comparisons (/{slug}/comparisons)
│   ├── Rankings (/{slug}/rankings)
│   ├── Research (/{slug}/research)
│   ├── Search (/{slug}/search)
│   └── State (/{slug}/state/{subregion})
│       └── State Tool (/{slug}/state/{subregion}/{tool})
├── Countries (/countries)
├── Professions (/professions)
├── Compare (/compare)
├── Rankings (/rankings)
├── Research (/research)
├── Methodology (/methodology)
├── Data Sources (/data-sources)
├── Editorial Policy (/editorial-policy)
├── About (/about)
├── Contact (/contact)
├── Privacy Policy (/privacy-policy)
├── Terms (/terms)
└── Disclaimer (/disclaimer)
```

### Future Enhancement

A proper `<nav aria-label="Breadcrumb">` element with schema.org BreadcrumbList JSON-LD could be added per-page for enhanced SEO. The current URL + context bar approach provides human-readable context but not machine-readable breadcrumb markup.
