# Design System Audit — Olikit

Generated: 2026-06-26

## Component Inventory

### UI Primitives (`src/components/ui/`)

| Component | Lines | Purpose | Duplications |
|-----------|-------|---------|-------------|
| badge.tsx | ~30 | Status/category badges | None |
| button.tsx | ~60 | Primary/secondary/disabled button with variants | None |
| card.tsx | ~40 | Content card container | None |
| currency-salary.tsx | ~50 | Currency-aware salary display | None |
| currency-toggle.tsx | ~40 | Currency switcher (USD/GBP/AUD) | None |
| data-block.tsx | ~80 | Metric display with label/value | None |
| fade-in-section.tsx | ~40 | IntersectionObserver fade-in | None |
| logo.tsx | ~30 | SVG logo | None |
| motion.ts | ~10 | Animation constants (DEAD CODE) | None |
| section.tsx | ~20 | Generic section wrapper | None |
| skeleton.tsx | ~30 | Loading skeleton with shimmer (UNUSED) | None |

### Shell/Layout Components

| Component | Lines | Purpose | Notes |
|-----------|-------|---------|-------|
| shell.tsx | ~50 | Main layout wrapper (client component) | Has side-effect in render |
| header.tsx | ~180 | Navigation, search, mobile menu | Complex, well-structured |
| footer.tsx | ~120 | Footer links, legal | Touch target issue |
| breadcrumbs.tsx | ~105 | Breadcrumb navigation + JSON-LD | Duplicate schema |
| context-bar.tsx | ~49 | Locale context bar | Too small |
| cookie-consent.tsx | ~80 | GDPR cookie consent | localStorage in useState |
| site-scripts.tsx | ~60 | GA4, AdSense script loading | localStorage in useState |
| locale-switcher.tsx | ~40 | Locale dropdown (DEAD CODE) | Never imported |
| country-switcher.tsx | ~60 | Country dropdown | Used in header |

### Content Section Components

| Component | Lines | Import Count | Purpose |
|-----------|-------|-------------|---------|
| hero-section.tsx | ~100 | ~50+ | Page hero with H1 and intro |
| faq-section.tsx | ~60 | ~50+ | FAQ display |
| faq-accordion.tsx | ~50 | 1 (by faq-section) | Individual FAQ item |
| sources-section.tsx | ~40 | ~50+ | Data sources display |
| methodology-section.tsx | ~50 | ~50+ | Methodology explanation |
| methodology-deep-dive-section.tsx | ~80 | 1 (by salary-index-renderer) | Detailed methodology |
| related-pages-section.tsx | ~50 | ~50+ | Related content links |
| related-research-section.tsx | ~40 | 0 (DEAD CODE) | Never imported |
| key-takeaways.tsx | ~40 | 7 | Key takeaways list |
| key-findings-section.tsx | ~40 | 0 (DEAD CODE) | Never imported |
| research-findings-section.tsx | ~40 | 0 (DEAD CODE) | Never imported |
| research-overview-section.tsx | ~50 | 1 | Research overview |
| last-updated.tsx | ~20 | ~20+ | "Last updated" timestamp |
| source-footer.tsx | ~30 | 18 | Source attribution footer |
| executive-summary-section.tsx | ~60 | 13 | Comparison executive summary |
| recommendation-section.tsx | ~50 | 13 | Comparison recommendation |
| cta-section.tsx | ~40 | 0 (DEAD CODE) | Never imported |

### Comparison Section Components (13 imports each)

| Component | Lines | Purpose |
|-----------|-------|---------|
| country-comparison-section.tsx | ~80 | Country overview comparison |
| salary-comparison-section.tsx | ~100 | Salary data comparison |
| tax-comparison-section.tsx | ~80 | Tax comparison |
| cost-of-living-comparison-section.tsx | ~80 | Cost of living comparison |
| purchasing-power-comparison-section.tsx | ~60 | Purchasing power comparison |
| career-opportunity-comparison-section.tsx | ~60 | Career opportunity comparison |
| immigration-comparison-section.tsx | ~60 | Immigration comparison |

### Calculator/Interactive Components

| Component | Lines | Purpose | Duplication |
|-----------|-------|---------|-------------|
| calculator-interactive.tsx | ~197 | Generic calculator UI | None |
| salary-comparison-calculator.tsx | ~185 | Salary comparison table | ~90% duplicate with takehome-comparison |
| takehome-comparison.tsx | ~189 | Take-home pay comparison | ~90% duplicate with salary-comparison-calculator |
| calculator-share.tsx | ~60 | Copy calculator results | None |

### Data Display Components

| Component | Lines | Purpose |
|-----------|-------|---------|
| state-data-table.tsx | ~100 | State data table with sorting |
| state-nav.tsx | ~80 | State navigation with search |
| country-analysis-section.tsx | ~80 | Country analysis display |
| country-profile-section.tsx | ~60 | Country profile |
| city-analysis-section.tsx | ~60 | City analysis (DEAD CODE) |
| future-outlook-section.tsx | ~50 | Future outlook (DEAD CODE) |
| salary-index-renderer.tsx | ~528 | Complex salary index display |
| profession-page.tsx | ~581 | Profession page renderer |
| ranking-table-section.tsx | ~60 | Ranking table (DEAD CODE) |

### Monetization Components

| Component | Lines | Purpose |
|-----------|-------|---------|
| ad-unit.tsx | ~60 | Google AdSense ad unit |
| affiliate-disclosure.tsx | ~20 | FTC affiliate disclosure |
| affiliate-inline.tsx | ~40 | Inline affiliate links |
| affiliate-products.tsx | ~60 | Affiliate product grid |
| affiliate-sidebar.tsx | ~40 | Sidebar affiliate display |
| sponsored-placement.tsx | ~30 | Sponsored content marker |

### Other Components

| Component | Lines | Purpose |
|-----------|-------|---------|
| newsletter-signup.tsx | ~100 | Email newsletter form |
| search-client.tsx | ~143 | Client-side search |
| tracked-link.tsx | ~30 | Analytics-tracked link |
| relocation-intelligence-section.tsx | ~60 | Relocation info (DEAD CODE) |
| page-tracker.tsx | ~30 | GA4 page view tracking |

## Consolidation Recommendations

### 1. Merge salary-comparison-calculator + takehome-comparison
These are ~90% identical. Create a single `comparison-table.tsx` with a `mode` prop.

### 2. Delete 10 dead components
- cta-section.tsx
- city-analysis-section.tsx
- future-outlook-section.tsx
- locale-switcher.tsx
- relocation-intelligence-section.tsx
- ranking-table-section.tsx
- key-findings-section.tsx
- research-findings-section.tsx
- related-research-section.tsx
- ui/motion.ts

### 3. Move shell.tsx side-effect to useEffect
The localStorage.setItem in render path should be in a useEffect.

### 4. Organize components into subdirectories
```
src/components/
├── ui/           # Primitives (button, card, badge, etc.)
├── layout/       # Shell, header, footer, breadcrumbs
├── content/      # FAQ, sources, methodology, etc.
├── comparison/   # Country, salary, tax comparison sections
├── calculator/   # Interactive calculators
├── data/         # Tables, charts, data display
└── monetization/ # Ads, affiliates, sponsorship
```

### 5. Create shared ComparisonTemplate component
Replace 13 copy-pasted comparison pages with a single dynamic route + template.
