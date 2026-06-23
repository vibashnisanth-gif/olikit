# Route Map — Olikit
Generated: 2026-06-23

## Root Routes
```
/                              → root page (global hub)
/about                         → static about page
/contact                       → static contact page
/countries                     → country listing
/compare                       → redirect to /comparisons
/comparisons                   → comparison hub
/data-sources                  → static data sources
/data-scientist                → profession hub
/software-engineer             → profession hub
/product-manager               → profession hub
/{profession}                  → individual profession hubs
/{profession}-salary           → profession salary landing
/{profession}-salary-{country} → middleware redirect to /{locale}/salary/{profession}
/{profession}-vs-{profession}  → comparison pages
/data-sources                  → static
/editorial-policy              → static
/methodology                   → static
/privacy-policy                → static
/terms                         → static
/disclaimer                    → static
/research/*                    → research pages
/rankings/*                    → rankings pages
```

## Locale Routes
```
/{locale}                              → locale homepage
/{locale}/salary                       → salary hub
/{locale}/salary/{profession}          → profession salary page
/{locale}/tools                        → tools hub
/{locale}/tools/{tool}                 → tool page (calculator)
/{locale}/tools/{tool}/compare         → cross-country tool comparison
/{locale}/guides                       → guides hub
/{locale}/guides/{guide}               → guide page
/{locale}/states                       → states/regions hub
/{locale}/state/{subregion}            → state hub
/{locale}/state/{subregion}/{tool}     → state tool page
/{locale}/search                       → search page (noindex)
/{locale}/rankings                     → rankings page
/{locale}/research                     → research hub
/{locale}/research/{report}            → research report
/{locale}/comparisons                  → locale comparisons hub
/{locale}/glossary                     → glossary hub
/{locale}/glossary/{entry}             → glossary entry
/{locale}/updates                      → changelog (noindex)
/{locale}/financial-data               → financial data library
/{locale}/average-salary/{state}       → state average salary
/{locale}/cost-of-living/{state}       → state cost of living
/{locale}/salary-vs-cost-of-living/{state} → salary vs COL
/{locale}/best-states-for-salary       → best states ranking
```

## Middleware Redirects
- `/{profession}-salary-{country}` → `/{locale}/salary/{profession}` (301)
- `www.olikit.com/*` → `olikit.com/*` (301)
- Trailing slash removal (308)
- Locale detection: path > cookie > geo > accept-language > fallback us
