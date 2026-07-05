# Architecture — Phase 2: Capability-Based Product OS

**Date:** 2026-07-05
**Design Principle:** Capabilities, not job titles

---

## Design Rationale

Job-title architecture (CEO, CTO, VP Engineering) breaks down because:
- One agent can only do one "job" at a time
- Titles don't map to what the system actually needs to do
- New capabilities require new agents with new titles
- No clear ownership of cross-cutting concerns

Capability-based architecture fixes this because:
- Each capability is a self-contained function
- Capabilities can be assigned to any agent
- New capabilities slot in without renaming existing ones
- Clear input/output contracts between capabilities

---

## The Pipeline

Every engineering decision flows through this pipeline:

```
Research → Analysis → Prioritization → Engineering → QA → Review → Deploy
   ↓          ↓           ↓              ↓           ↓       ↓
Evidence   Gaps      Scored         Tickets     Validated  Approved
```

No step may be skipped. Each step produces evidence that the next step consumes.

---

## Capability Definitions

### Layer 1: Intelligence (Research + Analysis)

| # | Capability | Purpose | Inputs | Outputs |
|---|-----------|---------|--------|---------|
| 01 | Competitor Intelligence | Monitor competitors continuously | Ahrefs, Cloak Browser, web | competitor-report.md |
| 02 | SEO Intelligence | Keyword gaps, technical SEO, schema, internal linking | Search Console, crawlers, Ahrefs | seo-report.md |
| 03 | UX Intelligence | Accessibility, navigation, mobile, performance | Lighthouse, Playwright, a11y tools | ux-report.md |
| 04 | Dataset Intelligence | Detect missing data, broken calculations, coverage gaps | Data pipelines, test suites | dataset-report.md |
| 05 | Analytics Intelligence | Traffic patterns, conversion funnels, user behavior | GA4, PostHog, server logs | analytics-report.md |

**Why each exists:**
- Competitor Intelligence prevents building what competitors already dominate
- SEO Intelligence ensures we capture search demand before engineering
- UX Intelligence catches usability issues before they reach users
- Dataset Intelligence prevents broken data from undermining trust
- Analytics Intelligence proves what's working and what's not

### Layer 2: Strategy (Analysis + Prioritization)

| # | Capability | Purpose | Inputs | Outputs |
|---|-----------|---------|--------|---------|
| 06 | Product Strategist | Read every report, generate opportunities | All intelligence reports | product-backlog.md |
| 07 | Priority Engine | Score every opportunity objectively | Opportunities + scorecard | priority-report.md |

**Why each exists:**
- Product Strategist synthesizes raw intelligence into actionable opportunities
- Priority Engine removes bias from prioritization by scoring every opportunity

### Layer 3: Execution (Engineering + QA)

| # | Capability | Purpose | Inputs | Outputs |
|---|-----------|---------|--------|---------|
| 08 | Engineering Lead | Convert approved opportunities into engineering tickets | Approved opportunities | engineering-backlog.md |
| 09 | QA Lead | Validate every implementation | Code changes, test suites | qa-report.md |

**Why each exists:**
- Engineering Lead ensures tickets are well-defined before implementation
- QA Lead provides independent validation that implementation meets requirements

### Layer 4: Governance (Review + Continuous Improvement)

| # | Capability | Purpose | Inputs | Outputs |
|---|-----------|---------|--------|---------|
| 10 | Executive Review | Approve or reject work based on evidence | QA reports, scorecards | executive-review.md |
| 11 | Continuous Improvement | Retrospective, process refinement | Sprint data, metrics | retrospective.md |

**Why each exists:**
- Executive Review ensures every change has business justification
- Continuous Improvement prevents the same mistakes from recurring

---

## Capability Ownership Model

Each capability has:
- **Owner:** The agent responsible for producing the output
- **Reviewer:** The agent that validates the output before it moves downstream
- **Gate:** The condition that must be met before work proceeds

| Capability | Owner | Reviewer | Gate |
|-----------|-------|----------|------|
| Competitor Intelligence | Competitor Agent | Product Strategist | Report exists and is < 7 days old |
| SEO Intelligence | SEO Agent | Product Strategist | Report exists and covers target keywords |
| UX Intelligence | UX Agent | QA Lead | Report exists with scores |
| Dataset Intelligence | Dataset Agent | QA Lead | Report exists with coverage data |
| Analytics Intelligence | Analytics Agent | Product Strategist | Report exists with 30-day data |
| Product Strategist | Strategist Agent | Priority Engine | Backlog exists with scored items |
| Priority Engine | Priority Agent | Executive Review | Top items have scores > threshold |
| Engineering Lead | Engineering Agent | QA Lead | Tickets have acceptance criteria |
| QA Lead | QA Agent | Executive Review | Tests pass, no regressions |
| Executive Review | Executive Agent | Board | Evidence exists for approve/reject |
| Continuous Improvement | Any Agent | Product Strategist | Retrospective completed |

---

## Agent Count

**Current:** 3 agents (CEO, CTO, General)
**Target:** 9 capability agents + 1 orchestrator = 10 agents

The orchestrator (replaces CEO) coordinates the pipeline but doesn't execute capabilities.

---

## Information Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        ORCHESTRATOR                              │
│  Coordinates pipeline, resolves conflicts, manages handoffs     │
└──────────┬──────────────────────────────────────────────────────┘
           │
    ┌──────▼──────┐
    │  INTELLIGENCE │
    │  LAYER        │
    │  ┌─────────┐  │
    │  │Competitor│  │
    │  │SEO       │  │
    │  │UX        │  │
    │  │Dataset   │  │
    │  │Analytics │  │
    │  └────┬────┘  │
    └───────┼───────┘
            │ reports
    ┌───────▼───────┐
    │   STRATEGY     │
    │   LAYER        │
    │  ┌──────────┐  │
    │  │Product   │  │
    │  │Strategist│  │
    │  │Priority  │  │
    │  │Engine    │  │
    │  └────┬─────┘  │
    └───────┼────────┘
            │ scored opportunities
    ┌───────▼───────┐
    │  EXECUTION     │
    │  LAYER         │
    │  ┌──────────┐  │
    │  │Engineer  │  │
    │  │Lead      │  │
    │  │QA Lead   │  │
    │  └────┬─────┘  │
    └───────┼────────┘
            │ validated code
    ┌───────▼───────┐
    │  GOVERNANCE    │
    │  LAYER         │
    │  ┌──────────┐  │
    │  │Executive │  │
    │  │Review    │  │
    │  │Continuous│  │
    │  │Improve   │  │
    │  └──────────┘  │
    └────────────────┘
```

---

## Pipeline Rules

1. **No skipping:** Every change must pass through all layers
2. **Evidence required:** No layer may proceed without evidence from the previous layer
3. **Blocked means blocked:** If a layer cannot produce output, the pipeline stops
4. **Rollback always possible:** Every change has a documented rollback path
5. **History preserved:** No existing work is deleted or renamed without mapping
