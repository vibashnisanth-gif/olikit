# Folder Structure — Phase 5

**Date:** 2026-07-05

---

## New Directory Structure

```
olikit/
├── src/                          (existing — do not move)
├── db/                           (existing)
├── public/                       (existing)
├── scripts/                      (existing)
├── tests/                        (existing)
├── qa/                           (existing)
├── review/                       (existing)
├── reports/                      (existing)
├── content-requests/             (existing)
├── content/                      (existing)
├── QualityMesh/                  (existing)
│
├── pos/                          (NEW — Product OS)
│   ├── architecture/             (system design docs)
│   │   ├── current-state.md
│   │   ├── architecture.md
│   │   ├── gap-analysis.md
│   │   ├── migration-plan.md
│   │   ├── folder-structure.md
│   │   ├── workflow-diagrams.md
│   │   ├── capability-definitions.md
│   │   ├── dashboard-design.md
│   │   └── final-review.md
│   │
│   ├── templates/                (standardized document templates)
│   │   ├── competitor-report.md
│   │   ├── seo-report.md
│   │   ├── ux-report.md
│   │   ├── dataset-report.md
│   │   ├── analytics-report.md
│   │   ├── gap-analysis.md
│   │   ├── engineering-ticket.md
│   │   ├── qa-report.md
│   │   ├── weekly-review.md
│   │   ├── decision-log.md
│   │   ├── sprint-review.md
│   │   ├── adr.md
│   │   └── retrospective.md
│   │
│   ├── workflows/                (pipeline process docs)
│   │   ├── research-workflow.md
│   │   ├── analysis-workflow.md
│   │   ├── prioritization-workflow.md
│   │   ├── engineering-workflow.md
│   │   ├── qa-workflow.md
│   │   └── review-workflow.md
│   │
│   ├── scorecards/               (completed priority scores)
│   │   └── (populated by Priority Engine)
│   │
│   ├── decisions/                (decision log)
│   │   └── (populated by Executive Review)
│   │
│   └── retrospectives/           (weekly retrospectives)
│       └── (populated by Continuous Improvement)
│
├── *.md                          (existing — keep in place)
│   ├── current-architecture.md   (KEEP — historical record)
│   ├── future-architecture.md    (KEEP — historical record)
│   ├── CHANGELOG.md              (KEEP)
│   ├── README.md                 (KEEP)
│   └── ... (80+ existing files)
```

---

## Rules

1. **Existing files stay put.** No moving, renaming, or deleting existing documentation.
2. **New system docs go in `/pos/`.** Clear separation between old and new.
3. **Templates are reusable.** Each capability agent references templates by path.
4. **Scorecards accumulate.** `/pos/scorecards/` grows over time.
5. **Decisions are permanent.** `/pos/decisions/` is append-only.
6. **Retrospectives are weekly.** `/pos/retrospectives/YYYY-MM-DD.md`

---

## File Naming Convention

| Type | Pattern | Example |
|------|---------|---------|
| Templates | `{type}.md` | `seo-report.md` |
| Scorecards | `score-{issue-id}.md` | `score-LIK-43.md` |
| Decisions | `{date}-{slug}.md` | `2026-07-05-use- cloaking-browser.md` |
| Retrospectives | `{date}.md` | `2026-07-05.md` |
| ADRs | `adr-{number}-{slug}.md` | `adr-001-capability-based-agents.md` |
