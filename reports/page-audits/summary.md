# Sprint 5 — Phase 2: Page Audit Summary

## Audit Methodology
Each page audited against 6 dimensions: UX, SEO, Performance, Accessibility, Mobile, Revenue.
Benchmark: `tools/[tool]/page.tsx` (gold standard — 308 lines, full feature set).

---

## Tool Page (`tools/[tool]/page.tsx`) — Score: 7/10

| Area | Score | Key Issues |
|------|-------|------------|
| UX | 7/10 | No CTA after calculator results; no data tables |
| SEO | 8/10 | No page-specific OG; schema uses WebApplication not SoftwareApplication |
| Perf | 9/10 | Calculator is dynamic import; minimal client JS |
| A11y | 6/10 | Calculator inputs missing htmlFor/id; breadcrumb links missing focus states |
| Mobile | 6/10 | Ad unit hidden on mobile (`hidden md:block`); sidebar links below 44px touch target |
| Revenue | 5/10 | Only 1 ad unit (desktop sidebar); no post-calc CTA |

**Critical fixes**: Mobile ad visibility, touch targets, calculator input labels

## Comparison Page (`comparisons/[type]/[slug]/page.tsx`) — Score: 6/10

| Area | Score | Key Issues |
|------|-------|------------|
| UX | 6/10 | No winner highlight in table; no row hover |
| SEO | 6/10 | No Article schema on standard path; breadcrumb nav/schema mismatch |
| Perf | 8/10 | Minimal client JS |
| A11y | 5/10 | No table caption; no scope="row" on td |
| Mobile | 7/10 | Table scrolls; touch targets borderline |
| Revenue | 4/10 | **No newsletter on standard path**; AffiliateSidebar imported but unused |

**Critical fixes**: Add newsletter, render affiliate sidebar, fix table accessibility

## Salary Hub (`salary/page.tsx`) — Score: 4/10

| Area | Score | Key Issues |
|------|-------|------------|
| UX | 5/10 | No Shell wrapping; flat sections |
| SEO | 7/10 | CollectionPage schema; good internal links |
| Perf | 8/10 | Minimal client JS |
| A11y | 5/10 | No breadcrumbs; no FAQ markup |
| Mobile | 7/10 | Responsive grid |
| Revenue | 3/10 | **No newsletter**; **no Shell** (no header/footer/tracking) |

**Critical fixes**: Wrap in Shell, add newsletter

## Salary Profession (`salary/[profession]/page.tsx`) — Score: 7/10

| Area | Score | Key Issues |
|------|-------|------------|
| UX | 8/10 | Excellent salary snapshot, good CTAs |
| SEO | 8/10 | Article + FAQ schema; good internal links |
| Perf | 8/10 | Minimal client JS |
| A11y | 6/10 | Breadcrumbs use `<a>` not `<Link>`; no table caption; separator spans need aria-hidden |
| Mobile | 8/10 | Responsive grid and table |
| Revenue | 7/10 | 2 newsletter placements + affiliate sidebar |

**Critical fixes**: Fix breadcrumb links, add table caption

## Rankings (`rankings/page.tsx`) — Score: 2/10

| Area | Score | Key Issues |
|------|-------|------------|
| UX | 2/10 | Only 3 hardcoded cards; no data |
| SEO | 3/10 | No JSON-LD; no breadcrumbs |
| Perf | 9/10 | Minimal |
| A11y | 3/10 | No semantic structure |
| Mobile | 5/10 | Cards stack |
| Revenue | 1/10 | No ads, no newsletter, no affiliates |

**Critical fix**: Full rebuild needed — replace hardcoded cards with dynamic data

## Countries (`countries/page.tsx`) — Score: 3/10

| Area | Score | Key Issues |
|------|-------|------------|
| UX | 3/10 | Generic card text; no real content |
| SEO | 4/10 | No intro text for crawlers; no JSON-LD |
| Perf | 9/10 | Minimal |
| A11y | 4/10 | No breadcrumbs |
| Mobile | 6/10 | Cards stack |
| Revenue | 1/10 | No ads, no newsletter |

**Critical fix**: Add SEO intro text, add trust components

## Glossary Entry (`glossary/[entry]/page.tsx`) — Score: 6/10

| Area | Score | Key Issues |
|------|-------|------------|
| UX | 7/10 | Good content structure |
| SEO | 6/10 | FAQPage schema; no breadcrumbs; no OG |
| Perf | 8/10 | Minimal |
| A11y | 6/10 | No breadcrumbs |
| Mobile | 7/10 | Responsive |
| Revenue | 2/10 | No newsletter, no ads |

**Critical fix**: Add breadcrumbs, newsletter, OG tags

## Research Report (`research/[report]/page.tsx`) — Score: 6/10

| Area | Score | Key Issues |
|------|-------|------------|
| UX | 7/10 | Good methodology + sources sections |
| SEO | 5/10 | No JSON-LD; no breadcrumbs |
| Perf | 8/10 | Minimal |
| A11y | 5/10 | No breadcrumbs |
| Mobile | 7/10 | Responsive |
| Revenue | 2/10 | No newsletter, no ads |

**Critical fix**: Add Article JSON-LD, breadcrumbs, newsletter

## About (`about/page.tsx`) — Score: 7/10

| Area | Score | Key Issues |
|------|-------|------------|
| UX | 7/10 | Full content but 8 lines of body |
| SEO | 8/10 | AboutPage + Organization schema |
| Perf | 9/10 | Minimal |
| A11y | 6/10 | No breadcrumbs |
| Mobile | 7/10 | Responsive |
| Revenue | 2/10 | No newsletter |

**Critical fix**: Add breadcrumbs, newsletter, LastUpdated component
