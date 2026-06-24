# Target Architecture — Phase 5

## Principles
1. `/` is the GLOBAL homepage — always serves content, never redirects
2. `/{country}` are country hubs — reached by choice, not by redirect
3. Every page has exactly ONE wrapper (no double header/footer)
4. Every page self-canonicalizes
5. Every page has hreflang alternates
6. Internal links are balanced across all countries
7. Navigation distinguishes "Global" from "Country" context

## Target Route Structure

```
/                               GLOBAL homepage (serves content)
├── /compare                    Global: country comparison tool
├── /comparisons                Global: salary comparisons hub
├── /rankings                   Global: rankings hub
├── /research                   Global: research hub
├── /professions                Global: profession hub
├── /software-engineer          Global: profession page
├── /data-scientist             Global: profession page
├── /product-manager            Global: profession page
├── /about, /contact, /methodology, /data-sources
├── /editorial-policy, /privacy-policy, /terms, /disclaimer
├── /countries                  Global: country directory
│
├── /us                         US country hub
├── /uk                         UK country hub
├── /au                         Australia hub
├── /ca                         Canada hub
├── /nz                         New Zealand hub
├── /in                         India hub
├── /sg                         Singapore hub
│
└── [locale]/                   Under each country:
    ├── /salary/[profession]    Country-profession salary page
    ├── /tools/[tool]           Country tool/calculator
    ├── /tools/[tool]/compare   Country tool comparison
    ├── /guides                 Country guides hub
    ├── /guides/[guide]         Country guide
    ├── /guides/best            Country best-of guides
    ├── /rankings               Country rankings hub
    ├── /research               Country research hub
    ├── /research/[report]      Country research report
    ├── /comparisons            Country comparisons hub
    ├── /comparisons/[type]/[slug]
    ├── /state/[subregion]      State/province page
    ├── /state/[subregion]/[tool]
    ├── /states                 State directory
    ├── /average-salary/[state]
    ├── /cost-of-living/[state]
    ├── /salary-vs-cost-of-living/[state]
    ├── /best-states-for-salary, /best-states-for-cost-of-living
    ├── /best-states-for-home-affordability, /best-states-for-retirement
    ├── /glossary               Country glossary hub
    ├── /glossary/[entry]       Country glossary entry
    ├── /financial-data         Country financial data
    ├── /search                 Country search
    └── /updates                Country updates
```

## Deleted Routes
Root-level country-specific pages (143 files) should be REMOVED:
```
/ai-engineer-salary-us          → DELETE (canonical: /us/salary/ai-engineer)
/ai-engineer-salary-uk          → DELETE (canonical: /uk/salary/ai-engineer)
/software-engineer-salary-us    → DELETE (canonical: /us/salary/software-engineer)
/software-engineer-salary-au    → DELETE (canonical: /au/salary/software-engineer)
... 139 more
```

These are duplicate content competing with locale versions.

## Migration: URL Mappings
```
/ai-engineer-salary-us          → 301 → /us/salary/ai-engineer
/software-engineer-salary-au    → 301 → /au/salary/software-engineer
/data-scientist-salary-uk       → 301 → /uk/salary/data-scientist
... (all 143 country-profession pages)
```

## Template Architecture (Fixed)

```
RootLayout (layout.tsx)
├── <SkipLink>
├── <CurrencyProvider>
│   └── {children} — NO shell wrapper, NO duplicate structure
└── <SiteScripts>

Global pages (/, /about, /rankings, /professions, etc.):
  <Shell> (single wrapper: ContextBar? + Header + main + Footer)
  └── Uses Shell with localeSlug=null for global context

Locale pages (/[locale]/...):
  [locale]/layout.tsx → REMOVED or simplified to just metadata/context
  <Shell localeSlug={slug}> (single wrapper)
  └── Shell handles ALL wrapping (ContextBar, Header, main, CurrencyToggle, Footer, CookieConsent)
```

**Decision**: Eliminate `[locale]/layout.tsx` as a wrapper. Keep root `layout.tsx` for global concerns (CurrencyProvider, fonts). Let `Shell` handle all visual structure. This eliminates the double-wrap bug.

## Navigation (Fixed)
- **Global context**: Home → `/` (global), Countries → dropdown, Professions, Comparisons, Rankings, Research, Guides, About
- **Country context**: Home → `/{country}` (country hub), Global Home → `/`, links to other countries, Professions, Comparisons, Rankings, Research, Guides, About

## Canonical Matrix
| URL | Canonical | Status |
|-----|-----------|--------|
| `/` | `olikit.com/` | ✅ Self |
| `/us` | `olikit.com/us` | ✅ Self |
| `/us/salary/software-engineer` | `olikit.com/us/salary/software-engineer` | ✅ Self |
| `/ai-engineer-salary-us` | N/A (deleted) | ❌ Remove |
| `/about` | `olikit.com/about` | ✅ Self |
| `/compare` | `olikit.com/compare` | ✅ Self |
| `/rankings/best-countries-for-software-engineers` | `olikit.com/rankings/...` | ✅ Self |

## Hreflang Matrix
| Path | x-default | en-US | en-GB | en-AU | en-CA | en-NZ | en-IN | en-SG |
|------|-----------|-------|-------|-------|-------|-------|-------|-------|
| `/` | `/` | `/us` | `/uk` | `/au` | `/ca` | `/nz` | `/in` | `/sg` |
| `/compare` | `/compare` | `/us/compare` | `/uk/compare` | ... | | | | |
| `/salary/software-engineer` | `...` | `/us/salary/software-engineer` | ... | | | | | |

## Implementation Order
1. Stop middleware redirect of `/` → serve global homepage
2. Eliminate `[locale]/layout.tsx` visual wrapper, consolidate into Shell
3. Add CurrencyToggle to Shell (already there)
4. Fix navigation: add "Global Home" link in country context
5. Redirect 143 country-profession pages → locale equivalents (via middleware)
6. Add hreflang to all global pages
7. Fix internal links: balance across countries (no US bias on root page)
8. Update sitemap to exclude deleted pages
9. Verify live: no double wraps, no broken links, all pages render
