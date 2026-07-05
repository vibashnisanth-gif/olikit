# QA Report — {ticket-id} — {date}

**Author:** QA Lead
**Status:** pass/fail/conditional

---

## Summary

{one-line summary of QA result}

---

## Test Results

| Test Type | Passed | Failed | Skipped | Coverage |
|-----------|--------|--------|---------|----------|
| Unit | {pass} | {fail} | {skip} | {pct}% |
| Integration | {pass} | {fail} | {skip} | {pct}% |
| E2E | {pass} | {fail} | {skip} | {pct}% |

---

## Accessibility Check

| Check | WCAG Level | Result |
|-------|-----------|--------|
| Keyboard navigation | AA | {pass/fail} |
| Screen reader | AA | {pass/fail} |
| Color contrast | AA | {pass/fail} |
| Focus indicators | AA | {pass/fail} |

---

## SEO Check

| Check | Result |
|-------|--------|
| Meta tags | {pass/fail} |
| Schema markup | {pass/fail} |
| Hreflang | {pass/fail} |
| Canonical | {pass/fail} |
| Sitemap | {pass/fail} |

---

## Performance Check

| Metric | Target | Actual | Result |
|--------|--------|--------|--------|
| LCP | < 2.5s | {actual} | {pass/fail} |
| FID | < 100ms | {actual} | {pass/fail} |
| CLS | < 0.1 | {actual} | {pass/fail} |
| Bundle size | < {target} | {actual} | {pass/fail} |

---

## Regression Check

| Previously Working | Now Broken | Severity |
|-------------------|-----------|----------|
| {feature} | {yes/no} | {severity} |

---

## Issues Found

| # | Issue | Severity | Page/Area |
|---|-------|----------|-----------|
| 1 | {issue} | {severity} | {area} |

---

## Verdict

**{PASS/FAIL/CONDITIONAL}**

{Detailed reasoning if conditional or fail}

---

## Recommendation

- [ ] Approve for deployment
- [ ] Fix issues before deployment
- [ ] Re-test after fixes
