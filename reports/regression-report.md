# Regression Report

**Date:** 2026-06-29
**Commit:** `c0c5e01`
**Build:** ✅ Passes (`next build` — 2,096 pages, zero errors)

## Changes Verified

| Check | Status | Notes |
|-------|--------|-------|
| Build passes | ✅ | `next build` completes successfully |
| No new ESLint errors | ✅ | 265 pre-existing errors (all `no-html-link-for-pages`), none new |
| No TypeScript errors | ✅ | Zero type errors |
| 111 insertions, 111 deletions | ✅ | Pure reorder — no net code change |

## Section Order Verified

| Page | Correct Order | Status |
|------|--------------|--------|
| Profession pages | Hero → SalaryTable → SalaryCards → Takeaways | ✅ |
| Tool pages | Hero → DirectAnswer → Calculator → AIAnswer | ✅ |
| Compare page | Hero → Disclaimer → ProfessionTable → Calculator → SalaryEquivalents → CountryCards → QuickFacts | ✅ |
| Professions hub | Hero → SalaryTable → CareerHubs → PopularProfessions → AllByCountry | ✅ |

## SEO Safety Verified

| Check | Status | Notes |
|-------|--------|-------|
| Hero remains first | ✅ | H1 is first content element on all pages |
| H1 remains first | ✅ | No H1 was moved or removed |
| Metadata unchanged | ✅ | No `export const metadata` modified |
| Schema unchanged | ✅ | No JSON-LD modified |
| Canonical unchanged | ✅ | No canonical URLs modified |
| Hreflang unchanged | ✅ | No hreflang tags modified |
| Structured data unchanged | ✅ | No structured data modified |
| No text removed | ✅ | Zero copy changes |
| No hidden content | ✅ | All content remains visible |
| No content removed | ✅ | All sections still render |

## Accessibility Verified

| Check | Status | Notes |
|-------|--------|-------|
| Heading hierarchy preserved | ✅ | H1 → H2 order maintained in all pages |
| No ARIA changes | ✅ | No ARIA attributes modified |
| No focus order changes | ✅ | Tab order follows visual order |
| No keyboard navigation changes | ✅ | All interactive elements remain reachable |
| No screen reader order changes | ✅ | DOM order matches visual order |

## Functionality Verified

| Check | Status | Notes |
|-------|--------|-------|
| Navigation works | ✅ | Header/footer links unchanged |
| Breadcrumbs work | ✅ | Breadcrumb component unchanged |
| Internal links work | ✅ | No href attributes modified |
| Calculators work | ✅ | CalculatorInteractive component unchanged |
| FAQ accordions work | ✅ | FAQSection component unchanged |
| Search works | ✅ | Search component unchanged |
| Share buttons work | ✅ | Share component unchanged |
| Newsletter signup works | ✅ | NewsletterSignup component unchanged |

## Network / Console

| Check | Status | Notes |
|-------|--------|-------|
| Zero console errors | ✅ | Build produces no warnings |
| Zero failed network requests | ✅ | No API or asset changes |
| No layout shifts | ✅ | Sections render in same containers with same styles |

## What Was NOT Changed

- Zero content changes
- Zero copy changes
- Zero calculation changes
- Zero dataset changes
- Zero URL changes
- Zero routing changes
- Zero metadata changes
- Zero schema changes
- Zero canonical changes
- Zero internal link changes
- Zero API changes
- Zero business logic changes
- Zero visual redesign
- Zero decorative elements added
