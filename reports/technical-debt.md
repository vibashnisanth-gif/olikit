# Technical Debt Register

Created: 2026-06-26
Status: Growth Mode — all items deferred unless backed by measurable business evidence.

---

## Rules

1. No item begins without evidence it unlocks business value
2. Every item must have a measurable ROI estimate
3. Developer convenience is not a business metric
4. Production protection is the first priority

---

## Registered Items

### 1. Layout Architecture (237 Shell Wraps)

| Field | Value |
|-------|-------|
| Issue | 237 manual `<Shell>` wraps instead of Next.js nested layouts |
| Impact | Inconsistent layout behavior, harder to update shell globally |
| Risk | HIGH — touching layout affects every page |
| Business Value | Low — no user-facing improvement |
| Estimated Effort | 2–3 sprints |
| Priority | **P3 — Deferred** |
| Evidence Required | User complaints about layout inconsistency, or measurable UX regression |
| Recommendation | Do not refactor. Current approach works. |

### 2. 264 Route Files → Dynamic Routes

| Field | Value |
|-------|-------|
| Issue | 264 individual page.tsx files instead of ~30 dynamic routes |
| Impact | Large file count, harder to maintain |
| Risk | HIGH — changing routing structure |
| Business Value | Low — no user-facing improvement |
| Estimated Effort | 2–3 sprints |
| Priority | **P3 — Deferred** |
| Evidence Required | Developer productivity complaints, or measurable build time improvement |
| Recommendation | Do not refactor. Current approach works and is deployed. |

### 3. generators.ts Monolith (1366 Lines)

| Field | Value |
|-------|-------|
| Issue | Single file with all page generation logic |
| Impact | Hard to navigate, edit, test |
| Risk | Medium — internal only |
| Business Value | Very low — no user-facing impact |
| Estimated Effort | 1 sprint |
| Priority | **P3 — Deferred** |
| Evidence Required | Developer complaints, or measurable test coverage improvement |
| Recommendation | Do not split. Tightly coupled, only 3 import sites. |

### 4. Storybook (Blocked by Next 16)

| Field | Value |
|-------|-------|
| Issue | @storybook/nextjs requires Next 13–15, incompatible with Next 16.2.6 |
| Impact | No component documentation, no visual testing |
| Risk | Low |
| Business Value | Low — developer experience only |
| Estimated Effort | 1 sprint |
| Priority | **P3 — Deferred** |
| Evidence Required | Team grows beyond 3 developers, or visual regression bugs become frequent |
| Recommendation | Wait for Storybook to support Next 16. |

### 5. text-zinc-500 Borderline Contrast

| Field | Value |
|-------|-------|
| Issue | `text-zinc-500` (#71717a) has ~4.6:1 contrast ratio, borderline for small text |
| Impact | May fail WCAG AAA for small text |
| Risk | Very low |
| Business Value | Minimal — already passes AA |
| Estimated Effort | 1 hour (global find/replace) |
| Priority | **P4 — Monitor** |
| Evidence Required | Accessibility audit failure, or user complaint |
| Recommendation | Monitor. Do not change without evidence. |

### 6. AffiliateSidebar Unused on Comparison Standard Path

| Field | Value |
|-------|-------|
| Issue | AffiliateSidebar imported but not rendered on standard comparison path |
| Impact | Missing affiliate revenue on ~50% of comparison pages |
| Risk | Low |
| Business Value | Medium — potential revenue increase |
| Estimated Effort | Small (render component) |
| Priority | **P2 — Schedule if revenue data shows comparison traffic** |
| Evidence Required | Search Console data showing comparison page traffic > 1000 clicks/month |
| Recommendation | Implement when traffic justifies it. |

### 7. Calculator Input Type Coercion

| Field | Value |
|-------|-------|
| Issue | Calculator uses `parseFloat` which silently returns NaN for invalid input |
| Impact | Minor UX issue |
| Risk | Very low |
| Business Value | Very low |
| Estimated Effort | Small |
| Priority | **P4 — Monitor** |
| Recommendation | Do not fix unless user complaints. |

---

## Summary

| Priority | Count | Action |
|----------|-------|--------|
| P1 — Immediate | 0 | — |
| P2 — Schedule | 1 | AffiliateSidebar (when traffic justifies) |
| P3 — Deferred | 4 | Layout, routes, generators, Storybook |
| P4 — Monitor | 2 | Contrast, input coercion |

**Total debt items**: 7
**Items requiring immediate action**: 0
**Items with business value**: 1 (AffiliateSidebar — conditional)
