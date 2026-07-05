# Entity Audit — Olikit

**Date**: July 2026
**Scope**: Entity Foundation (Phase 1)

---

## Current State

### Existing Trust Pages (8)

| Page | Path | Quality | Key Gaps |
|------|------|---------|----------|
| About | `src/app/about/page.tsx` | HIGH (193 lines) | Strongest page. JSON-LD (AboutPage + Organization). Covers: what, why, how, sources, process, trust. |
| Contact | `src/app/contact/page.tsx` | GOOD (116 lines) | Real email + physical address. JSON-LD ContactPage. Data correction workflow. |
| Editorial Policy | `src/app/editorial-policy/page.tsx` | MODERATE (68 lines) | Covers accuracy, transparency, independence, corrections. No JSON-LD. |
| Methodology | `src/app/methodology/page.tsx` | GOOD (92 lines) | Tax calculation methodology, data sources, verification process. |
| Scoring System | `src/app/methodology/olikit-scoring-system/page.tsx` | HIGH (446 lines) | 5 proprietary scores fully documented. JSON-LD (Article, FAQ). |
| Data Sources | `src/app/data-sources/page.tsx` | MODERATE (60 lines) | 7 countries with government agency links. No JSON-LD. |
| Privacy Policy | `src/app/privacy-policy/page.tsx` | GOOD (146 lines) | Client-side only disclosure. JSON-LD WebPage. |
| Terms | `src/app/terms/page.tsx` | GOOD (125 lines) | Standard legal. JSON-LD WebPage. |

### Missing Trust Pages (3)

| Page | Status | Impact |
|------|--------|--------|
| **Corrections Policy** | MISSING | Editorial Policy claims "we maintain a record of significant corrections" — no such record exists. **Unfulfilled promise.** |
| **Update Policy** | MISSING | Update cadence scattered across 3+ pages with slightly different wording. No single authoritative source. |
| **Brand Guidelines / Press Kit** | MISSING | No brand assets, press materials, or media kit. Blocks PR readiness. |

---

## Entity Description

**What Olikit is**: A free online financial tools platform helping professionals compare salaries, taxes, compensation, and living costs across 7 countries using government-sourced data.

**What Olikit is NOT**: Not a financial advisor. Not a bank. Not a tax preparation service.

**Differentiators**:
- Government-sourced data (IRS, HMRC, ATO, CRA, IRD, IRAS, CBDT)
- Client-side calculations (no personal financial data sent to servers)
- 5 proprietary scoring systems
- 7 countries, 21 professions, 35 cities
- Transparent methodology with linked sources
- Free, no accounts required

---

## Problems Discovered

1. **No corrections log** — promised in editorial policy but doesn't exist
2. **No standalone update policy** — cadence info scattered
3. **No press kit** — blocks media outreach
4. **About page title mismatch** — says "Free Online Finance & Business Calculators" but site positioning is "Global Salary Intelligence"
5. **No "sameAs" schema** — entity can't be linked to social profiles in Knowledge Graph

---

## Recommendations

1. Create `/corrections` page with a log of significant data corrections
2. Create `/update-policy` page with single authoritative update cadence
3. Create `/press` page with brand assets, company description, boilerplate
4. Fix About page title to match site positioning
5. Add `sameAs` to Organization schema linking to social profiles
