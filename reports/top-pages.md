# Sprint 5 — Phase 1: High-Impact Page Discovery

Generated: 2026-06-26

## Executive Summary

264 physical route files → ~370+ unique URL patterns across 7 locales.
4 revenue-bearing page templates cover the majority of traffic.
8 critical gaps identified across all page types.

---

## Revenue-Bearing Page Templates (ranked by business impact)

| Rank | Template | Routes | Revenue | Conversion | Monetization | Gap |
|------|----------|--------|---------|------------|--------------|-----|
| 1 | `tools/[tool]/page.tsx` | ~100+ | AdUnit | Newsletter (banner+sidebar) | AffiliateSidebar | No page-specific OG/Twitter |
| 2 | `comparisons/[type]/[slug]/page.tsx` | ~50+ | AdUnit (2 slots) | Newsletter (banner) | AffiliateSidebar | No methodology section |
| 3 | `salary/[profession]/page.tsx` | ~100+ | AdUnit | Newsletter (banner+sidebar) | AffiliateSidebar | Inconsistent Shell usage |
| 4 | `salary/page.tsx` (hub) | 7 locales | AdUnit | None | None | **No newsletter**, no breadcrumbs |

---

## Highest-Impact Pages for Optimization

### Tier 1 — Direct Revenue Impact (optimize first)

| Page | Why | Current Score | Quick Wins |
|------|-----|---------------|------------|
| `tools/[tool]/page.tsx` | Highest traffic template, 2 conversion points | 7/10 | Add page-specific OG/Twitter, add methodology section |
| `comparisons/[type]/[slug]/page.tsx` | 2 ad slots, high engagement | 7/10 | Add methodology/data-source section, add breadcrumbs |
| `salary/[profession]/page.tsx` | Revenue + conversion | 7/10 | Fix Shell inconsistency, add SourceFooter |
| `salary/page.tsx` (hub) | Gateway page | 5/10 | **Add newsletter**, add breadcrumbs, add comparison highlights |

### Tier 2 — Traffic & Authority Impact

| Page | Why | Current Score | Quick Wins |
|------|-----|---------------|------------|
| `[locale]/page.tsx` (homepage) | Entry point, 1075 lines | 8/10 | Add newsletter, ensure all CTAs are visible |
| `/page.tsx` (root) | Global entry | 7/10 | Add newsletter signup |
| `research/[report]/page.tsx` | AI citation potential | 6/10 | **Add breadcrumbs**, **add newsletter**, add tables |
| `rankings/page.tsx` | Authority signal | 3/10 | **Stub — needs full rebuild** (79 lines) |
| `countries/page.tsx` | Authority signal | 3/10 | **Stub — needs full rebuild** (78 lines) |

### Tier 3 — Completeness & Trust

| Page | Why | Current Score | Quick Wins |
|------|-----|---------------|------------|
| `guides/[guide]/page.tsx` | Content depth | 7/10 | **Render visible breadcrumbs**, add newsletter |
| `glossary/[entry]/page.tsx` | Topical authority | 6/10 | Add breadcrumbs, add newsletter, add SourceFooter |
| `search/page.tsx` | UX | 5/10 | Add popular pages section |
| `about/page.tsx` | Trust | 3/10 | **Extremely thin** (8 lines content) |
| `methodology/` | Trust + AI | 8/10 | Already strong — verify schema completeness |

---

## Critical Gaps Across All Pages

### 1. Missing Newsletter Signup (8 page types)
- Homepage (`[locale]/page.tsx`)
- Salary hub (`salary/page.tsx`)
- Rankings (`rankings/page.tsx`)
- Research (`research/[report]/page.tsx`)
- Glossary (`glossary/[entry]/page.tsx`)
- Guides (`guides/[guide]/page.tsx`)
- Search (`search/page.tsx`)
- Countries (`countries/page.tsx`)

**Impact**: Lost conversion opportunities on every non-tool, non-comparison page.

### 2. Missing Visible Breadcrumbs (6 page types)
- Rankings, Research, Glossary, Search, Countries, Guides (computed but not rendered)

**Impact**: Worse UX, weaker internal linking signals, missing structured breadcrumb navigation.

### 3. Missing SourceFooter (4 page types)
- Glossary, Rankings, Countries, Search

**Impact**: Weaker trust signals, less data-source transparency.

### 4. Stub Pages Needing Rebuild (2 pages)
- `rankings/page.tsx` — 79 lines, no actual rankings data, no tables, no FAQ
- `countries/page.tsx` — 78 lines, generic card text, no real content

**Impact**: These pages look incomplete to users and search engines.

### 5. Missing FAQPage JSON-LD (visible FAQs but no schema)
- `best-states-for-salary/page.tsx`
- `best-states-for-cost-of-living/page.tsx`
- `best-states-for-retirement/page.tsx`
- `best-states-for-home-affordability/page.tsx`
- Rankings sub-pages

**Impact**: Missing rich result eligibility for FAQ snippets.

### 6. Thin Content Pages
- `about/page.tsx` — 8 lines of content
- `search/page.tsx` — 47 lines (functional but no content)
- `countries/page.tsx` — 78 lines (generic cards)
- `rankings/page.tsx` — 79 lines (stub)

**Impact**: Low-quality signals to search engines.

### 7. Orphan-Adjacent Pages (only footer links)
- `/disclaimer` — 3 references
- `/terms` — 4 references
- `/editorial-policy` — 5 references
- `/data-sources` — 6 references

**Impact**: Weak internal linking, rarely crawled.

---

## Recommended Sprint 5 Execution Order

### Phase 3A — Quick Wins (1-2 hours)
1. Add newsletter signup to: salary hub, homepage, research, glossary, guides
2. Add visible breadcrumbs to: research, glossary, guides, rankings
3. Add SourceFooter to: glossary, rankings, countries
4. Add FAQPage JSON-LD to: best-states-for-* pages

### Phase 3B — Page Rebuilds (2-3 hours)
5. Rebuild `rankings/page.tsx` — full hub with table, FAQ, newsletter, breadcrumbs
6. Rebuild `countries/page.tsx` — full hub with table, FAQ, newsletter, breadcrumbs
7. Flesh out `about/page.tsx` — team, mission, methodology overview

### Phase 3C — Revenue Optimization (1-2 hours)
8. Add page-specific OG/Twitter to `tools/[tool]/page.tsx`
9. Add methodology section to comparison pages
10. Add newsletter to salary hub with prominent placement

### Phase 4 — Internal Linking (1 hour)
11. Add cross-links from research → tools, glossary → tools, rankings → tools
12. Add "related profession" links to salary pages
13. Add "popular pages" section to search page

### Phase 5 — AI Optimization (1 hour)
14. Add concise definitions to tool pages
15. Add comparison tables to research pages
16. Ensure all FAQ sections have JSON-LD
