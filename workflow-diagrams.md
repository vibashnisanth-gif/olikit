# Workflow Diagrams — Phase 6

**Date:** 2026-07-05

---

## Master Pipeline

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  RESEARCH          ANALYSIS         PRIORITIZATION                  │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐                    │
│  │Competitor │────▶│Product   │────▶│Priority  │                    │
│  │SEO        │     │Strategist│     │Engine    │                    │
│  │UX         │     │          │     │          │                    │
│  │Dataset    │     └──────────┘     └────┬─────┘                    │
│  │Analytics  │                           │                          │
│  └──────────┘                           │                          │
│                                         ▼                          │
│  DEPLOY            REVIEW            ENGINEERING                    │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐                    │
│  │Production │◀───│Executive │◀───│QA Lead   │◀───│Engineering│     │
│  │           │    │Review    │    │          │    │Lead      │     │
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘     │
│                                                                     │
│                    ┌──────────┐                                     │
│                    │Continuous│◀─── (feeds back to Research)        │
│                    │Improve   │                                     │
│                    └──────────┘                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Intelligence Workflow

```
Trigger: Weekly schedule OR new keyword opportunity detected

1. Competitor Intelligence Agent
   ├── Scrape competitor sites (Cloak Browser)
   ├── Pull Ahrefs data
   └── Output: competitor-report.md

2. SEO Intelligence Agent
   ├── Pull Search Console data
   ├── Analyze keyword gaps
   ├── Check technical SEO
   └── Output: seo-report.md

3. UX Intelligence Agent
   ├── Run Lighthouse audits
   ├── Check accessibility
   ├── Test mobile experience
   └── Output: ux-report.md

4. Dataset Intelligence Agent
   ├── Check data freshness
   ├── Validate calculations
   ├── Find coverage gaps
   └── Output: dataset-report.md

5. Analytics Intelligence Agent
   ├── Pull GA4 metrics
   ├── Analyze conversion funnels
   ├── Identify traffic patterns
   └── Output: analytics-report.md

All reports → Product Strategist
```

---

## Analysis Workflow

```
Input: 5 intelligence reports

Product Strategist Agent:
1. Read all reports
2. Identify overlapping signals
3. Find gaps between reports
4. Generate opportunity list
5. For each opportunity:
   ├── What problem does it solve?
   ├── What evidence supports it?
   ├── What's the expected impact?
   └── What's the effort estimate?
6. Output: product-backlog.md

Priority Engine Agent:
1. Read product-backlog.md
2. Score each opportunity (1-10):
   ├── Traffic Impact
   ├── Revenue Impact
   ├── User Value
   ├── SEO Impact
   ├── AI Citation Impact
   ├── Engineering Complexity (inverse)
   ├── Regression Risk (inverse)
   ├── Dataset Reuse
   └── Strategic Alignment
3. Compute weighted average
4. Rank by score
5. Output: priority-report.md

All scored items → Executive Review
```

---

## Engineering Workflow

```
Input: Scored opportunities from Priority Engine

Executive Review:
1. Review top-scored items
2. Approve/reject with evidence
3. Approved items → Engineering Lead

Engineering Lead:
1. Read approved opportunity
2. Create engineering ticket:
   ├── Title
   ├── Description
   ├── Acceptance criteria
   ├── Technical approach
   ├── Estimated complexity
   ├── Dependencies
   └── Rollback plan
3. Output: engineering-backlog.md

Developers:
1. Pick ticket from backlog
2. Implement
3. Write tests
4. Self-review
5. Submit for QA

QA Lead:
1. Run test suite
2. Check accessibility
3. Validate SEO
4. Check performance
5. Verify no regressions
6. Output: qa-report.md

If pass → Executive Review
If fail → Back to developer
```

---

## Review Workflow

```
Input: QA report + engineering changes

Executive Review:
1. Read QA report
2. Check scorecard:
   ├── Does this improve traffic?
   ├── Does this improve revenue?
   ├── Does this strengthen a moat?
   ├── Does this improve UX?
   ├── Does this improve AI citation readiness?
   └── Does this improve datasets?
3. Decision:
   ├── Approve → Deploy
   ├── Reject → Back to Engineering Lead
   └── Defer → Back to Priority Engine

Deploy:
1. Merge to main
2. Deploy to production
3. Monitor for 24h
4. Log in decision log
5. Trigger retrospective if issues found
```

---

## Continuous Improvement Workflow

```
Trigger: Weekly (Friday 3pm) OR after production incident

Continuous Improvement Agent:
1. Review this week's:
   ├── Deployed changes
   ├── QA reports
   ├── Executive decisions
   ├── Production issues
   └── Metric changes
2. Identify:
   ├── What went well?
   ├── What went wrong?
   ├── What should we change?
3. Output: retrospective.md
4. Update workflow docs if process changes needed
5. Feed insights back to Intelligence layer
```
