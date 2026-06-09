# Country Homepage QA Report — V13

**Date:** 2026-06-09  
**Tester:** Automated build pipeline  
**Scope:** All 7 locale homepages

---

## 1. Build Verification

| Check | Result |
|-------|--------|
| Compilation | ✅ Pass |
| TypeScript errors | 0 |
| Salary sanity validation errors | 0 |
| Static route generation | ✅ All routes |

---

## 2. Content Checklist per Locale

### US (`/en`)
| Check | Pass/Fail |
|-------|-----------|
| Hero mentions "US salary intelligence platform" | ✅ |
| Snapshot uses $ currency | ✅ |
| Featured insights: US-specific BLS, skills gap, tech hubs | ✅ |
| Profession groups: Healthcare, Technology, Finance etc. | ✅ |
| Relocation: "moving to the United States" | ✅ |
| FAQ: 6 questions with `<details>` | ✅ |
| FAQPage JSON-LD present | ✅ |
| Government sources section with 8 agencies | ✅ |
| No country-count or page-count marketing | ✅ |

### UK (`/en-gb`)
| Check | Pass/Fail |
|-------|-----------|
| Hero mentions "UK salary intelligence platform" | ✅ |
| Snapshot uses £ currency | ✅ |
| Featured insights: London weighting, HMRC tax | ✅ |
| Relocation: "moving to the United Kingdom" | ✅ |
| No USD/$, only £ | ✅ |

### Australia (`/en-au`)
| Check | Pass/Fail |
|-------|-----------|
| Hero mentions "Australian salary intelligence platform" | ✅ |
| Snapshot uses A$ currency | ✅ |
| Relocation: "moving to Australia" | ✅ |
| No USD/$, only A$ | ✅ |

### Canada (`/en-ca`)
| Check | Pass/Fail |
|-------|-----------|
| Hero mentions "Canadian salary intelligence platform" | ✅ |
| Snapshot uses C$ currency | ✅ |
| Relocation: "moving to Canada" | ✅ |
| No USD/$, only C$ | ✅ |

### New Zealand (`/en-nz`)
| Check | Pass/Fail |
|-------|-----------|
| Hero mentions "NZ salary intelligence platform" | ✅ |
| Snapshot uses NZ$ currency | ✅ |
| Relocation: "moving to New Zealand" | ✅ |
| No USD/$, only NZ$ | ✅ |

### India (`/en-in`)
| Check | Pass/Fail |
|-------|-----------|
| Hero mentions "Indian salary intelligence platform" | ✅ |
| Snapshot uses ₹ currency | ✅ |
| Relocation: "moving to India" | ✅ |
| No USD/$, only ₹ | ✅ |

### Singapore (`/en-sg`)
| Check | Pass/Fail |
|-------|-----------|
| Hero mentions "Singapore salary intelligence platform" | ✅ |
| Snapshot uses S$ currency | ✅ |
| Relocation: "moving to Singapore" | ✅ |
| No USD/$, only S$ | ✅ |

---

## 3. Schema Validation

| Check | Status |
|-------|--------|
| FAQPage JSON-LD exists per locale page | ✅ |
| JSON-LD contains all 6 FAQ items | ✅ |
| `@type` is `FAQPage` | ✅ |
| `mainEntity` array with `Question`/`AcceptedAnswer` pairs | ✅ |
| No JSON-LD errors in build output | ✅ |

---

## 4. Marketing Count Audit

| Pattern | Status |
|---------|--------|
| "7 Countries" in any source file | ❌ Removed |
| "464 Pages" | ❌ Removed |
| "400+ Pages" | ❌ Removed |
| "500+ Pages" | ❌ Removed |
| "7 supported countries" | ❌ Removed |
| "Available across supported countries" | ❌ Remove→"Government-sourced salary data" |
| "for all 7 supported countries" | ❌ Removed |

---

## 5. Currency Audit

| Page | USD Appears? | Local Only? |
|------|-------------|-------------|
| `/en` | ✅ (is local) | ✅ |
| `/en-gb` | ❌ None | ✅ |
| `/en-au` | ❌ None | ✅ |
| `/en-ca` | ❌ None | ✅ |
| `/en-nz` | ❌ None | ✅ |
| `/en-in` | ❌ None | ✅ |
| `/en-sg` | ❌ None | ✅ |

---

## 6. Regression Check

| Area | Status |
|------|--------|
| Global homepage `/` still renders correctly | ✅ |
| Rankings page uses USD normalized values | ✅ |
| Comparison engine cross-currency OK | ✅ |
| Shell renders on all 13 global pages | ✅ |
| Country Switcher includes Global option | ✅ |
| Breadcrumbs on locale pages | ✅ |
| Footer renders on all pages | ✅ |
| Header + CountrySwitcher on all pages | ✅ |

---

## Conclusion

**V13 Country Authority Upgrade: PASS**

All 7 country homepages are upgraded to financial intelligence hubs with:
- Local-currency-only financial snapshots
- Authority copy with country-specific data sources
- No marketing page/country counts
- FAQPage JSON-LD schema
- Government agency sourcing across 8 authorities

The platform is ready for deployment. Proceeding to commit, push, and deploy.
