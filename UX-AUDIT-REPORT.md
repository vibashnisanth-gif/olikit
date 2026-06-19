# Olikit V15.4 — UX Audit Report

## Overview

Audit of all major template families and shared components.

---

## 1. QuickAnswer / Direct Answer Components

### Current State
- **QuickAnswersSection** (`salary-index-renderer.tsx`): Plain `bg-white border-zinc-200` card. Question text `text-sm font-semibold text-zinc-950`, answer text `text-sm leading-7 text-zinc-600`. Low visual impact.
- **Inline `.quick-answer`** (tool pages): `bg-emerald-50 border-emerald-200`. Better but could use stronger hierarchy.
- **`.direct-answer`** (tool pages): `bg-blue-50 border-blue-200`. Good color distinction.
- **Inline `aiQuickAnswers`** (locale homepage): Rendered in list form without distinct callout styling.

### Issues
- QuickAnswersSection blends into page — no visual anchor
- Low contrast between question and answer
- No visual hierarchy between the section title and content

### Recommendation
Transform QuickAnswersSection into an Executive Summary Card with strong visual anchor.

---

## 2. Data Presentation — Metadata, Metrics, Rankings

### Current State
- **ResearchMetadataBlock**: `text-xs text-zinc-500 bg-zinc-50` — extremely muted, easy to skip
- **ExecutiveSummaryRenderer metrics**: `text-zinc-400` labels on white bg — low contrast
- **SalaryCardsSection** (profession-page): Mixed `bg-blue-50`/`bg-zinc-50` — inconsistent, `text-zinc-400` labels
- **CountryProfileSection metrics**: `text-zinc-400` labels, `text-lg font-bold` values — good value visibility, weak label contrast

### Issues
- `text-zinc-400` fails WCAG AA for normal text (ratio ~2.3:1 on white)
- Metadata block is too small (`text-xs`) and low contrast
- Card background inconsistency undermines professionalism

### Recommendation
- Darken label text to `text-zinc-500` minimum
- Increase metadata text size to `text-sm`
- Use consistent `bg-white` card backgrounds for metric cards

---

## 3. Typography & Hierarchy

### Current State
- H1: `text-3xl font-bold tracking-tight` — strong
- H2: `text-2xl font-semibold` throughout — consistent, good
- Body: `text-sm leading-7 text-zinc-600` — consistent but `text-sm` is small for long-form reading
- Card headings: `text-sm` or `text-base` — adequate but could be more prominent
- Section spacing: `space-y-12` — generous, good

### Issues
- Body text at `text-sm` on desktop could be `text-base` or at least better spaced
- Card heading sizes could be stepped up for better scanning

### Recommendation
- Increase body text to `text-base` where possible
- Increase card headings to `text-base` minimum

---

## 4. Authority Signals — Methodology, Sources, Research

### Current State
- **MethodologySection**: Basic bordered card with list items — `text-zinc-600` body
- **SourcesSection**: Basic list with `text-emerald-700` links — functional but not prominent
- **SourceFooter**: Mixed link styling — `text-blue-600` (standard) and `text-emerald-700` (accent) — inconsistent
- **MethodologyDeepDiveSection**: `bg-zinc-50` cards with `text-zinc-600` content
- **ResearchLimitationsSection**: `bg-amber-50 border-amber-200` — good visual distinction

### Issues
- No visual differentiation between methodology and regular prose sections
- Source links use inconsistent brand colors (blue vs. emerald)
- Methodology content blends into rest of page

### Recommendation
- Use subtle visual cues (borders, icons, badge labels) for authority sections
- Standardize link colors across all source/sections
- Add visual grouping for data sources

---

## 5. Internal Linking

### Current State
- **RelatedPagesSection**: `bg-zinc-100` pills with `text-zinc-700` — small targets, low scanability
- **RelatedResearchSection**: Card-style links with border — better, good hover state
- **Tool page sidebar links**: `text-zinc-700 hover:bg-zinc-100` — adequate
- **Comparison links** (tool page footer): Ring buttons — good

### Issues
- Related page pills are small touch targets (poor mobile UX)
- No visual grouping for multiple related sections

### Recommendation
- Increase pill size / touch targets
- Add card-style containers for related links

---

## 6. Spacing & Scanability

### Current State
- Section spacing (`space-y-12`): Excellent
- Card padding (`px-5 py-6 sm:px-8`): Good
- List item spacing (`space-y-2`): Good
- FAQ item spacing: Adequate

### Issues
- No significant spacing issues found

### Recommendation
- Minor: increase internal card padding on mobile

---

## 7. Mobile UX

### Current State
- Shell: `px-4 py-8 sm:py-10` — good responsive padding
- Cards: `sm:px-8` — good responsive behavior
- Tables: `overflow-x-auto` — correctly handled
- Header: sticky with hamburger at `lg:hidden` — adequate

### Issues
- Related page pills may be narrow touch targets on mobile
- Some card padding could be tighter on mobile

### Recommendation
- Increase touch target sizes on mobile
- Verify all interactive elements have min 44px tap targets

---

## 8. Accessibility & Contrast

### Current State
| Usage | Class | Ratio on White | WCAG AA |
|-------|-------|----------------|---------|
| Body text | `text-zinc-600` | ~5.5:1 | Pass |
| Muted text | `text-zinc-500` | ~4.0:1 | Pass (large) |
| Labels | `text-zinc-400` | ~2.3:1 | **Fail** |
| Links | `text-emerald-700` | ~4.7:1 | Pass |
| Links (blue) | `text-blue-600` | ~5.8:1 | Pass |
| Muted labels | `text-zinc-400` on `bg-zinc-50` | ~2.1:1 | **Fail** |

### Issues
- `text-zinc-400` fails WCAG AA for both normal and large text
- Multiple components use `text-zinc-400` for labels

### Recommendation
- Bump all `text-zinc-400` to `text-zinc-500` minimum
- Bump `text-zinc-500` body text where used for normal-size content

---

## Summary of Findings by Page Family

| Page Family | Key Issues |
|-------------|------------|
| **Homepage** | Quick answers blend into content; fast-snapshot labels low contrast |
| **Country/Locale pages** | Same QA issues; trust items low visual impact |
| **Profession pages** | SalaryCards inconsistent; metric labels low contrast |
| **Research pages** | QuickAnswersSection weak; metadata barely visible |
| **Comparison pages** | Consistent patterns; minor label contrast issues |
| **Rankings pages** | Good presentation; minor rank badge sizing |
| **Calculator/Tool pages** | Quick answer/direct answer decent; sidebar links small |
| **State pages** | Data table labels could be stronger |

---

## Risk Classification Framework

**LOW RISK** — Pure CSS/Tailwind class changes in components. No logic, routing, schema, or content impact.
- Spacing, typography, contrast, card styling, hierarchy improvements

**MEDIUM RISK** — Changes that touch multiple components or could affect layout reflow.
- Structural layout changes, grid modifications

**HIGH RISK** — Changes that affect routing, metadata, schema, data, or content.
- Not implemented in this pass

---

## Implementation Plan

All changes classified as **LOW RISK** — pure presentational Tailwind class modifications in existing components. No routes, URLs, metadata, schema, or content affected.
