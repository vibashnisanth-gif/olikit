# Dashboard Design — Phase 9

**Date:** 2026-07-05

---

## Layout: Left-to-Right Pipeline View

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ORLIKIT PRODUCT OS                                          [Pipeline] [↓]│
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  RESEARCH          ANALYSIS          PRIORITIZATION       ENGINEERING       │
│  ─────────         ────────          ──────────────       ───────────       │
│  ┌─────────┐       ┌─────────┐       ┌─────────┐         ┌─────────┐       │
│  │Competitor│  ──▶  │Product  │  ──▶  │Priority │   ──▶   │Eng Lead │       │
│  │  3 new   │       │Strategist│       │ Engine  │         │  5 tickets│     │
│  └─────────┘       │  12 opps │       │ 12 scored│        └─────────┘       │
│  ┌─────────┐       └─────────┘       └─────────┘         ┌─────────┐       │
│  │   SEO   │                                               │   QA    │       │
│  │  7 gaps │                                               │  2 pending│     │
│  └─────────┘                                               └─────────┘       │
│  ┌─────────┐       ┌─────────┐       ┌─────────┐         ┌─────────┐       │
│  │   UX    │       │         │       │         │         │Executive│       │
│  │  4 issues│       │         │       │         │         │ Review  │       │
│  └─────────┘       └─────────┘       └─────────┘         │  1 pending│     │
│  ┌─────────┐                                               └─────────┘       │
│  │ Dataset │                                                                 │
│  │  2 gaps │       ┌─────────────────────────────────────────────────────┐   │
│  └─────────┘       │  CONTINUOUS IMPROVEMENT                              │   │
│  ┌─────────┐       │  Last retro: 2026-07-04 | 3 action items | 2 done  │   │
│  │Analytics│       └─────────────────────────────────────────────────────┘   │
│  │  5 insi│                                                                 │
│  └─────────┘                                                                 │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  METRICS                                                                    │
│  ───────                                                                    │
│  Traffic: 12.4K/mo ▲ 15% │ Revenue: $0 │ Pages: 232 │ Agents: 13 active   │
│  Tasks: 18 open │ Blocked: 5 │ In Progress: 3 │ Done this week: 7          │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Card States

| State | Color | Meaning |
|-------|-------|---------|
| Active | Green | Agent producing output |
| Pending | Yellow | Waiting for input |
| Blocked | Red | Cannot proceed |
| Idle | Gray | No work assigned |
| Error | Red pulse | Needs attention |

---

## Interactions

1. **Click agent card** → See agent details, recent outputs, current task
2. **Click pipeline arrow** → See handoff status, blockers
3. **Click metric** → Drill down to source data
4. **Drag between columns** → Reassign priority (board only)
5. **Filter by agent** → See single agent's pipeline view
6. **Filter by time** → See historical pipeline states

---

## Mobile Layout

```
┌───────────────────────┐
│  ORLIKIT PRODUCT OS   │
├───────────────────────┤
│  ▼ Research (5 active)│
│  ▼ Analysis (12 opps) │
│  ▼ Prioritize (12)    │
│  ▼ Engineer (5 tick)  │
│  ▼ QA (2 pending)     │
│  ▼ Review (1 pending) │
│  ▼ Improve (3 items)  │
├───────────────────────┤
│  Metrics Summary      │
└───────────────────────┘
```

Accordion style on mobile — tap to expand each pipeline stage.

---

## Data Sources

| Section | Source | Refresh |
|---------|--------|---------|
| Intelligence agents | Agent outputs | On completion |
| Priority scores | Priority Engine | Weekly |
| Engineering tickets | Engineering Lead | On creation |
| QA status | QA Lead | On submission |
| Executive decisions | Executive Review | On decision |
| Metrics | GA4 + PostHog + AdSense | Daily |
| Retrospectives | Continuous Improvement | Weekly |
