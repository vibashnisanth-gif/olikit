# Capability Definitions — Phase 5 Detail

**Date:** 2026-07-05

---

## Agent 00: Orchestrator

**Purpose:** Coordinate the pipeline. Resolve conflicts. Manage handoffs between capabilities.

**Does NOT:** Execute any capability directly. Make product decisions. Write code.

**Owns:**
- Pipeline health monitoring
- Agent status tracking
- Conflict resolution
- Handoff validation

**Receives:** Status updates from all agents
**Sends:** Coordination signals, conflict resolutions

---

## Agent 01: Competitor Intelligence

**Purpose:** Continuously monitor competitor landscape. Detect new entrants, feature changes, pricing shifts, content strategies.

**Inputs:**
- Ahrefs MCP (backlink data, keyword rankings, traffic estimates)
- Cloak Browser (site structure, UX patterns, feature inventory)
- Web search (news, press releases, product launches)

**Outputs:**
- `competitor-report.md` — structured competitor analysis

**Schedule:** Weekly minimum, triggered on competitor detected change

**Metrics:**
- Competitors tracked: target 10+
- Data freshness: < 7 days
- Actionable insights per report: target 3+

---

## Agent 02: SEO Intelligence

**Purpose:** Identify keyword opportunities, technical SEO issues, schema gaps, internal linking problems.

**Inputs:**
- Google Search Console (impressions, clicks, position)
- Ahrefs (keyword difficulty, volume, CPC)
- Site crawler (broken links, meta issues, page speed)
- Sitemap analysis

**Outputs:**
- `seo-report.md` — keyword opportunities + technical issues

**Schedule:** Weekly minimum, triggered on ranking changes

**Metrics:**
- Keywords tracked: target 500+
- Technical issues found: target 10+/week
- Opportunity score: calculated from volume × difficulty inverse

---

## Agent 03: UX Intelligence

**Purpose:** Detect accessibility issues, navigation problems, mobile experience gaps, performance degradation.

**Inputs:**
- Lighthouse scores (performance, a11y, best practices, SEO)
- Playwright tests (navigation flows, form submissions)
- Core Web Vitals (LCP, FID, CLS)
- User behavior analytics (if available)

**Outputs:**
- `ux-report.md` — UX issues ranked by severity

**Schedule:** Weekly minimum, triggered on deployment

**Metrics:**
- Pages audited: target all key pages
- Issues found: target 5+/week
- Severity distribution: critical/high/medium/low

---

## Agent 04: Dataset Intelligence

**Purpose:** Detect missing data, broken calculations, coverage gaps in salary/tax/cost-of-living datasets.

**Inputs:**
- Data pipeline outputs (Cloudflare D1)
- Calculation test suites
- Coverage matrices (country × profession × data type)
- Competitor data comparison

**Outputs:**
- `dataset-report.md` — data quality issues + coverage gaps

**Schedule:** Weekly minimum, triggered on data update

**Metrics:**
- Data freshness: < 30 days for salary data
- Calculation accuracy: 100% (test suite)
- Coverage: target 95% for top 20 countries

---

## Agent 05: Analytics Intelligence

**Purpose:** Analyze traffic patterns, conversion funnels, user behavior, revenue metrics.

**Inputs:**
- Google Analytics 4 (traffic, conversions, user behavior)
- PostHog (product analytics, session replay)
- AdSense (revenue, RPM, CTR)
- Server logs (performance, errors)

**Outputs:**
- `analytics-report.md` — traffic + conversion insights

**Schedule:** Weekly minimum, triggered on significant metric change

**Metrics:**
- Data freshness: < 7 days
- Insights per report: target 5+
- Actionable recommendations: target 3+

---

## Agent 06: Product Strategist

**Purpose:** Synthesize all intelligence reports into a prioritized product backlog.

**Inputs:**
- All 5 intelligence reports
- Current product backlog
- Business goals and constraints

**Outputs:**
- `product-backlog.md` — ranked list of opportunities

**Schedule:** After each intelligence sweep (weekly)

**Metrics:**
- Opportunities generated: target 10+/week
- Evidence coverage: 100% (every opportunity backed by report)
- Duplication rate: < 10%

---

## Agent 07: Priority Engine

**Purpose:** Score every opportunity using the universal scorecard. Remove bias from prioritization.

**Inputs:**
- `product-backlog.md`
- Scorecard dimensions (11 factors)
- Strategic weight configuration

**Outputs:**
- `priority-report.md` — scored and ranked opportunities

**Schedule:** After each product backlog update

**Metrics:**
- Scoring consistency: same input → same score
- Time to score: < 5 minutes per opportunity
- Board override rate: target < 20%

---

## Agent 08: Engineering Lead

**Purpose:** Convert approved opportunities into well-defined engineering tickets. Never implement directly.

**Inputs:**
- Approved opportunities from Executive Review
- Technical architecture constraints
- Team capacity

**Outputs:**
- `engineering-backlog.md` — ready-to-implement tickets

**Schedule:** After each Executive Review approval

**Metrics:**
- Ticket clarity: developer can implement without clarification > 80%
- Estimate accuracy: within 20% of actual
- Rollback plan: 100% of tickets have one

---

## Agent 09: QA Lead

**Purpose:** Validate every implementation against requirements. Catch regressions before production.

**Inputs:**
- Code changes (git diff)
- Engineering ticket acceptance criteria
- Test suites (unit, integration, e2e)
- Accessibility standards (WCAG 2.1 AA)
- SEO requirements (meta, schema, hreflang)

**Outputs:**
- `qa-report.md` — validation results

**Schedule:** After each code submission

**Metrics:**
- Test coverage: target 80%+
- Regression detection: 100% of known issues caught
- False positive rate: < 5%

---

## Agent 10: Executive Review

**Purpose:** Approve or reject work based on evidence. Ensure every change has business justification.

**Inputs:**
- QA report
- Scorecard
- Business context

**Outputs:**
- `executive-review.md` — decision with reasoning

**Schedule:** After each QA pass

**Decision criteria:**
1. Does this improve traffic? (evidence required)
2. Does this improve revenue? (evidence required)
3. Does this strengthen a moat? (evidence required)
4. Does this improve user experience? (evidence required)
5. Does this improve AI citation readiness? (evidence required)
6. Does this improve datasets? (evidence required)

**Rule:** Approve only if ≥ 3 criteria have evidence.

---

## Agent 11: Continuous Improvement

**Purpose:** Learn from every sprint. Prevent the same mistakes from recurring.

**Inputs:**
- Sprint data (completed issues, metrics)
- Production incidents
- QA reports
- Executive decisions

**Outputs:**
- `retrospective.md` — what went well, what to change

**Schedule:** Weekly (Friday 3pm)

**Metrics:**
- Action items per retro: target 3+
- Action item completion rate: target 80%+
- Process improvements implemented: target 1+/month
