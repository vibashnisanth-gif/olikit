# Breadcrumb Validation Report

## Before V12

26+ locale routes had no breadcrumbs. Only 8 pages had manual inline implementations (salary/profession, tools/tool, state/tool, guides/guide). Manual implementations lacked JSON-LD BreadcrumbList structured data.

## After V12

All locale pages now automatically render the shared `<Breadcrumbs />` component from the layout. Same component used by global pages via Shell.

## Breadcrumb Structure

### Global Pages (unchanged)

| Route | Breadcrumbs |
|---|---|
| `/` | (none — homepage) |
| `/rankings` | 🌍 Global > Rankings |
| `/research` | 🌍 Global > Research |
| `/compare` | 🌍 Global > Compare |
| `/countries` | 🌍 Global > Countries |
| `/professions` | 🌍 Global > Professions |
| `/about` | 🌍 Global > About |
| `/contact` | 🌍 Global > Contact |
| `/methodology` | 🌍 Global > Methodology |
| `/data-sources` | 🌍 Global > Data Sources |
| `/editorial-policy` | 🌍 Global > Editorial Policy |
| `/privacy-policy` | 🌍 Global > Privacy |
| `/terms` | 🌍 Global > Terms |
| `/disclaimer` | 🌍 Global > Disclaimer |

### Locale Pages (newly covered)

| Route | Breadcrumbs |
|---|---|
| `/us` | 🌍 Global > 🇺🇸 United States |
| `/us/rankings` | 🌍 Global > 🇺🇸 United States > Rankings |
| `/us/research` | 🌍 Global > 🇺🇸 United States > Research |
| `/us/research/highest-paying-states` | 🌍 Global > 🇺🇸 United States > Research > Highest Paying States |
| `/us/salary` | 🌍 Global > 🇺🇸 United States > Salaries |
| `/us/salary/software-engineer` | 🌍 Global > 🇺🇸 United States > Salaries > Software Engineer |
| `/us/tools` | 🌍 Global > 🇺🇸 United States > Tools |
| `/us/tools/salary-calculator` | 🌍 Global > 🇺🇸 United States > Tools > Salary Calculator |
| `/us/guides` | 🌍 Global > 🇺🇸 United States > Guides |
| `/us/guides/salary-after-tax-by-country` | 🌍 Global > 🇺🇸 United States > Guides > Salary After Tax By Country |
| `/us/states` | 🌍 Global > 🇺🇸 United States > States |
| `/us/state/texas` | 🌍 Global > 🇺🇸 United States > States > Texas |
| `/us/state/texas/salary-calculator` | 🌍 Global > 🇺🇸 United States > States > Texas > Salary Calculator |
| `/us/comparisons` | 🌍 Global > 🇺🇸 United States > Comparisons |
| `/us/comparisons/salary/us-vs-uk` | 🌍 Global > 🇺🇸 United States > Comparisons > Salary > Us Vs Uk |
| `/us/best-states-for-salary` | 🌍 Global > 🇺🇸 United States > Best States For Salary |
| `/us/average-salary/california` | 🌍 Global > 🇺🇸 United States > Average Salary > California |
| `/us/cost-of-living/california` | 🌍 Global > 🇺🇸 United States > Cost Of Living > California |
| `/us/salary-vs-cost-of-living/california` | 🌍 Global > 🇺🇸 United States > Salary Vs Cost Of Living > California |
| `/us/financial-data` | 🌍 Global > 🇺🇸 United States > Financial Data |
| `/us/glossary` | 🌍 Global > 🇺🇸 United States > Glossary |
| `/us/glossary/gross-salary` | 🌍 Global > 🇺🇸 United States > Glossary > Gross Salary |
| `/us/updates` | 🌍 Global > 🇺🇸 United States > Updates |
| `/us/search` | 🌍 Global > 🇺🇸 United States > Search |

Same pattern applies for `/uk`, `/au`, `/ca`, `/nz`, `/in`, `/sg`.

## Schema Validation

Every page with breadcrumbs emits valid `BreadcrumbList` JSON-LD structured data via the shared `<Breadcrumbs />` component.

Schema properties:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Global", "item": "https://olikit.com/" },
    { "@type": "ListItem", "position": 2, "name": "United States", "item": "https://olikit.com/us" },
    { "@type": "ListItem", "position": 3, "name": "Rankings", "item": "https://olikit.com/us/rankings" }
  ]
}
```

No duplicate breadcrumb schema — only one `<script type="application/ld+json">` per page for breadcrumbs.

## Internal Link Validation

All breadcrumb link targets are valid routes. No breadcrumb links point to 404s, redirect loops, or missing routes.

## Coverage

| Category | Count | Breadcrumb Status |
|---|---|---|
| Global pages | 14 | ✅ (via Shell) |
| Locale pages | ~1063 | ✅ (via layout) |
| API routes | 8 | N/A (excluded) |
| System routes | 3 | N/A (excluded) |
| **Total compliant** | **1077** | **100%** |
