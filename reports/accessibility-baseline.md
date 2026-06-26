# Accessibility Baseline — Olikit

Generated: 2026-06-26

## Current State: GOOD (Score: 8/10)

### WCAG 2.2 AA Compliance

| Criterion | Status | Notes |
|-----------|--------|-------|
| 1.1.1 Non-text Content | ✅ PASS | No meaningful images (text-heavy site) |
| 1.3.1 Info and Relationships | ⚠️ PARTIAL | Tables missing scope/headers |
| 1.3.2 Meaningful Sequence | ✅ PASS | DOM order matches visual order |
| 1.4.1 Use of Color | ✅ PASS | Color not sole means of conveying info |
| 1.4.3 Contrast (Minimum) | ⚠️ PARTIAL | text-zinc-500 borderline for small text |
| 1.4.4 Resize Text | ✅ PASS | Responsive design, no fixed text |
| 2.1.1 Keyboard | ✅ PASS | All interactive elements use native HTML |
| 2.1.2 No Keyboard Trap | ✅ PASS | No traps detected |
| 2.4.1 Bypass Blocks | ⚠️ BROKEN | Skip link missing id="main-content" on locale pages |
| 2.4.3 Focus Order | ✅ PASS | Logical tab order |
| 2.4.6 Headings and Labels | ✅ PASS | Descriptive headings throughout |
| 2.4.7 Focus Visible | ✅ PASS | focus-visible:ring on Button component |
| 2.5.5 Target Size | ⚠️ PARTIAL | 2 small touch targets (footer, context bar) |
| 3.1.1 Language of Page | ✅ PASS | lang attribute set via locale |
| 3.3.2 Labels or Instructions | ⚠️ PARTIAL | 4 inputs missing labels |
| 4.1.2 Name, Role, Value | ✅ PASS | ARIA attributes used correctly |

### Critical Issues (P1)

| # | Issue | Location | Fix |
|---|-------|----------|-----|
| 1 | Skip link broken on locale pages — `<main>` missing `id="main-content"` | `src/app/[locale]/layout.tsx:39` | Add `id="main-content"` to `<main>` |
| 2 | Search input missing label/aria-label | `src/components/header.tsx:99` | Add `aria-label="Search"` |
| 3 | Search client input missing label | `src/components/search-client.tsx:107` | Add `aria-label="Search tools and guides"` |
| 4 | Newsletter email input missing label (3 variants) | `src/components/newsletter-signup.tsx:65,79,92` | Add `aria-label="Email address"` |
| 5 | State search input missing label | `src/components/state-nav.tsx:40` | Add `aria-label="Search states"` |

### Medium Issues (P2)

| # | Issue | Location | Fix |
|---|-------|----------|-----|
| 6 | No aria-live region for newsletter form status | `src/components/newsletter-signup.tsx` | Add `aria-live="polite"` on status messages |
| 7 | No scope="col" on table headers | ~147 table instances | Add `scope="col"` to `<th>` in `<thead>` |
| 8 | Footer touch target too small | `src/components/footer.tsx:44` | Increase padding to 44x44px minimum |

### Low Issues (P3)

| # | Issue | Location | Fix |
|---|-------|----------|-----|
| 9 | Context bar "View Global" too small + low opacity | `src/components/context-bar.tsx:42-44` | Increase touch target, raise opacity |
| 10 | text-zinc-500 borderline contrast for small text | Multiple files | Consider text-zinc-600 for helper text |

### What's Working Well

- Skip-to-content link present in root layout
- prefers-reduced-motion fully handled in CSS
- Semantic HTML landmarks (header, nav, main, footer, section)
- Tables all wrapped in overflow-x-auto for mobile
- Mobile hamburger menu with proper ARIA (aria-expanded, aria-label)
- focus-visible ring on Button component
- Responsive breakpoints consistent
- No keyboard traps
- All interactive elements use native HTML (button, a, select, input)

### Testing Tools Installed

- @axe-core/playwright — automated WCAG testing
- Playwright a11y project — runs axe on 15 key pages
- CI pipeline runs a11y tests on every PR
