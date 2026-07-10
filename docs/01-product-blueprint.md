# Olikit Product Blueprint

> This document defines the entire Olikit product. It is the source of truth for designers, engineers, and AI coding agents. Every feature must be evaluated against this blueprint before development begins. If a feature is not described or supported by this blueprint, it should not be built until the blueprint is updated.

---

## 1. Core User Journey

Every user follows this flow. No step is optional. No step is skippable. The product must support every transition.

```
Discover
    ↓
Understand
    ↓
Analyze
    ↓
Compare
    ↓
Decide
    ↓
Improve
    ↓
Return
```

- **Discover** — The user arrives with a question or need.
- **Understand** — The user learns what the data means for them.
- **Analyze** — The user explores their specific situation.
- **Compare** — The user evaluates options side by side.
- **Decide** — The user commits to a direction.
- **Improve** — The user takes action and sees progress.
- **Return** — The user comes back with new questions.

No user should ever reach a dead end. Every page must answer: "What should I do next?"

---

## 2. Discovery Entry Points

Users can enter Olikit from multiple paths. Every entry point must immediately recommend the next best action.

| Entry Point | First Action | Second Action |
|---|---|---|
| **Homepage** | Select country → View salary data | Calculate take-home pay |
| **Salary Page** | View profession salary | Compare across countries |
| **Country Page** | Explore salary by profession | Calculate cost of living |
| **Company Page** | View required skills | Explore career roadmap |
| **Calculator** | Complete calculation | Compare result to another country |
| **Comparison Page** | Review side-by-side data | Calculate personal take-home |
| **Research Report** | Read key finding | Apply finding to own career |
| **Google Search** | Answer the search query | Recommend related tool |
| **AI Search** | Provide cited answer | Link to interactive tool |

Every entry point must immediately recommend the next best action. No page is a destination. Every page is a doorway.

---

## 3. Discovery Loop

Every interaction follows this loop. It never ends naturally. There is always another question to answer, another insight to uncover, another recommendation to follow.

```
Question
    ↓
Answer
    ↓
Insight
    ↓
Recommendation
    ↓
Next Question
    ↓
Result
    ↓
Another Recommendation
```

The loop is the product. The moment the loop stops, the user leaves. The moment the user leaves, we have failed.

**Example flow:**

1. User asks: "What do software engineers earn in Singapore?"
2. Olikit answers: "$120,000 average, $96,000 take-home."
3. Insight: "Singapore has the highest take-home pay of all 7 countries."
4. Recommendation: "Compare Singapore vs US for your profession."
5. User asks: "How does this compare to the US?"
6. Olikit answers: "US nets $74,000 after tax — $22,000 less."
7. Insight: "The gap widens at higher salaries."
8. Recommendation: "Calculate your exact take-home pay."

---

## 4. Product Layers

Olikit is built in three layers. Each layer depends on the layer below it. No layer can exist without its foundation.

### Layer 1 — Traffic

The foundation. How users find us.

| Component | Purpose |
|---|---|
| **SEO** | Organic discovery through search |
| **Calculators** | Interactive tools that rank for high-intent queries |
| **Research** | Original reports that earn backlinks and citations |
| **Landing Pages** | Targeted pages for specific professions, countries, comparisons |

### Layer 2 — Discovery

How we engage users once they arrive.

| Component | Purpose |
|---|---|
| **Oli** | AI assistant that answers career questions |
| **Journey** | Guided flows that walk users through decisions |
| **Questions** | Interactive prompts that surface user needs |
| **Recommendations** | Contextual next-best-actions on every page |
| **Career Snapshot** | Personalized overview of a user's career position |

### Layer 3 — Intelligence

The long-term moat. What makes Olikit irreplaceable.

| Component | Purpose |
|---|---|
| **Career Graph** | Map of how careers connect and evolve |
| **Career GPS** | Personalized navigation through career choices |
| **Career Score** | Quantified measure of career health and trajectory |
| **AI Readiness** | Assessment of automation risk and adaptation needs |
| **Promotion Readiness** | Assessment of readiness for next career step |
| **Wealth Intelligence** | How income translates to wealth across markets |

---

## 5. Core Product Modules

Each module has a defined purpose, inputs, outputs, and relationships. Every feature belongs to at least one module.

---

### Salary Intelligence

**Purpose:** Help users understand what they should earn and how to maximize take-home pay.

**Inputs:**
- Profession, country, city, experience level
- Tax brackets, social contributions, exchange rates
- Cost of living indices

**Outputs:**
- Gross salary by profession and location
- Take-home pay after tax
- Tax-adjusted salary comparisons
- PPP-adjusted purchasing power

**Related Modules:** Country Intelligence, Wealth Intelligence, Decision Intelligence

**Future Expansion:**
- Salary negotiation calculators
- Equity and bonus modeling
- Industry-specific salary benchmarks
- Company-level salary data

---

### Country Intelligence

**Purpose:** Help users understand how countries compare for career and life decisions.

**Inputs:**
- Tax systems, cost of living, salary data
- Immigration policies, healthcare systems
- Quality of life indices

**Outputs:**
- Country comparison pages
- Relocation scoring
- Tax system breakdowns
- Cost of living rankings

**Related Modules:** Relocation Intelligence, Wealth Intelligence, Decision Intelligence

**Future Expansion:**
- Immigration pathway analysis
- Healthcare system comparisons
- Education system ratings
- Safety and stability indices

---

### Company Intelligence

**Purpose:** Help users understand how specific companies compensate and what they require.

**Inputs:**
- Company salary data, job postings
- Skill requirements, career ladders
- Industry benchmarks

**Outputs:**
- Company salary profiles
- Skill gap analysis
- Career progression paths
- Offer evaluation tools

**Related Modules:** Skill Intelligence, Career Intelligence, Decision Intelligence

**Future Expansion:**
- Company culture ratings
- Benefits comparison
- Stock option modeling
- Interview preparation data

---

### Skill Intelligence

**Purpose:** Help users understand which skills increase earning potential and how to acquire them.

**Inputs:**
- Skill salary premiums by profession
- Market demand data
- Learning resource availability
- Automation risk assessments

**Outputs:**
- Skill premium rankings
- Learning roadmaps
- Certification recommendations
- Skill gap analysis

**Related Modules:** Career Intelligence, AI Intelligence, Career GPS

**Future Expansion:**
- Skill obsolescence tracking
- Learning ROI calculator
- Skill-based career pivots
- Industry skill trend analysis

---

### Career Intelligence

**Purpose:** Help users understand career trajectories and make strategic moves.

**Inputs:**
- Career progression data
- Industry growth trends
- Automation risk assessments
- Market demand signals

**Outputs:**
- Career path visualizations
- Growth trajectory analysis
- Career pivot recommendations
- Promotion readiness scoring

**Related Modules:** Skill Intelligence, AI Intelligence, Career GPS

**Future Expansion:**
- Career graph visualization
- Mentor matching
- Industry transition analysis
- Leadership readiness assessment

---

### AI Intelligence

**Purpose:** Help users understand how AI impacts their career and how to adapt.

**Inputs:**
- AI adoption rates by industry
- Task automation probability
- New role emergence data
- Skill demand shifts

**Outputs:**
- AI readiness scores
- Automation risk assessments
- Adaptation recommendations
- Future-proofing strategies

**Related Modules:** Skill Intelligence, Career Intelligence, Career GPS

**Future Expansion:**
- AI tool proficiency assessment
- AI-augmented career planning
- Industry AI adoption tracking
- AI skill learning paths

---

### Wealth Intelligence

**Purpose:** Help users understand how to build wealth from their income.

**Inputs:**
- Tax rates, cost of living, savings potential
- Investment returns, retirement systems
- Property markets, currency exchange

**Outputs:**
- Savings potential by location
- Wealth accumulation projections
- Retirement readiness scores
- Investment context

**Related Modules:** Salary Intelligence, Country Intelligence, Decision Intelligence

**Future Expansion:**
- Investment portfolio modeling
- Property affordability analysis
- Tax optimization strategies
- Financial independence calculator

---

### Relocation Intelligence

**Purpose:** Help users evaluate whether relocating improves their career and financial position.

**Inputs:**
- Salary differentials, tax differentials
- Cost of living changes, quality of life data
- Immigration requirements, visa processes

**Outputs:**
- Relocation scoring
- Net financial impact analysis
- Quality of life comparison
- Immigration pathway guidance

**Related Modules:** Country Intelligence, Salary Intelligence, Wealth Intelligence

**Future Expansion:**
- Visa requirement databases
- Relocation cost calculators
- Community and network data
- Cultural adjustment scoring

---

### Decision Intelligence

**Purpose:** Help users make better career and financial decisions by providing structured analysis.

**Inputs:**
- User context (profession, location, goals)
- Market data, historical trends
- Comparative analysis

**Outputs:**
- Decision frameworks
- Trade-off analysis
- Risk assessment
- Recommendation scoring

**Related Modules:** All modules feed into Decision Intelligence

**Future Expansion:**
- Decision journaling
- Outcome tracking
- A/B career testing
- Group decision support

---

### Recommendation Engine

**Purpose:** Surface the next best action for every user on every page.

**Inputs:**
- User context, page context, journey history
- Popular paths, conversion data
- Content relationships

**Outputs:**
- Contextual recommendations
- Next-best-action prompts
- Related content suggestions
- Journey continuation guidance

**Related Modules:** All modules. The Recommendation Engine connects everything.

**Future Expansion:**
- Personalized recommendation algorithms
- Collaborative filtering
- Predictive recommendations
- Cross-module journey optimization

---

### Career Graph

**Purpose:** Map how careers connect, evolve, and relate to each other.

**Inputs:**
- Career progression data
- Skill overlap analysis
- Industry transition patterns
- Market demand shifts

**Outputs:**
- Career path visualizations
- Transition probability scores
- Skill transferability maps
- Career cluster analysis

**Related Modules:** Career Intelligence, Skill Intelligence, Career GPS

**Future Expansion:**
- Interactive career graph explorer
- Career pivot probability calculator
- Industry transition guides
- Career clustering algorithms

---

### Career GPS

**Purpose:** Provide personalized navigation through career choices based on user context and goals.

**Inputs:**
- User profile (skills, experience, goals)
- Market data, salary data, demand signals
- Career graph relationships

**Outputs:**
- Personalized career recommendations
- Next-step guidance
- Progress tracking
- Goal alignment scoring

**Related Modules:** Career Graph, Career Intelligence, Skill Intelligence, AI Intelligence

**Future Expansion:**
- Voice-guided career coaching
- Team-based career planning
- Career milestone tracking
- Adaptive recommendation algorithms

---

## 6. Infinite Discovery Philosophy

Every page must recommend ONE next action. The recommendation must be contextual, relevant, and compelling. The goal is to keep the user in the discovery loop indefinitely.

### Example Flows

| Current Page | Recommendation | Next Page |
|---|---|---|
| Salary | "Compare countries" | Country Comparison |
| Country | "Calculate take-home pay" | Tax Calculator |
| Company | "View required skills" | Skill Analysis |
| Skill | "Explore career roadmap" | Career Path |
| Career Path | "Open Career GPS" | Career GPS |
| Career GPS | "View your dashboard" | Dashboard |
| Calculator | "See how this compares" | Comparison |
| Comparison | "Explore relocation options" | Relocation Guide |
| Research | "Apply this to your career" | Personalized Analysis |
| Ranking | "Check your profession" | Profession Page |
| Profession | "Compare to alternatives" | Career Comparison |
| Glossary | "Use this in a calculation" | Relevant Calculator |

No page is allowed to terminate the journey. Every page is a stepping stone to the next insight.

---

## 7. User Psychology

The product should trigger positive emotional states that drive continued engagement.

### Target Emotions

| Emotion | How It Is Triggered | Why It Matters |
|---|---|---|
| **Curiosity** | Unexpected insights, "what if" scenarios | Drives exploration |
| **Progress** | Visible movement through journeys | Drives completion |
| **Achievement** | Completed calculations, saved results | Drives return visits |
| **Confidence** | Data-backed recommendations | Drives decision making |
| **Discovery** | New information about own career | Drives engagement |

### Emotions to Avoid

| Emotion | Cause | Prevention |
|---|---|---|
| **Anxiety** | Overwhelming data, bad news without context | Frame data positively, always provide actionable next steps |
| **Information Overload** | Too much data, no hierarchy | Progressive disclosure, clear visual hierarchy |
| **Decision Paralysis** | Too many options, no guidance | ONE recommendation per page, clear "best" option |

The product should feel like a trusted advisor, not a data dump. Every interaction should leave the user feeling smarter, more capable, and more confident about their career.

---

## 8. User States

Users progress through states as their relationship with Olikit deepens. The product must support every state and facilitate transitions between them.

### State Progression

```
New Visitor
    ↓
Explorer
    ↓
Learner
    ↓
Planner
    ↓
Decision Maker
    ↓
Returning User
    ↓
Power User
```

### State Definitions

| State | Behavior | Olikit Response |
|---|---|---|
| **New Visitor** | Arrives from search, has a specific question | Answer immediately, recommend one next action |
| **Explorer** | Browsing multiple pages, comparing options | Surface patterns, suggest focused exploration |
| **Learner** | Reading research, understanding context | Provide depth, build expertise signals |
| **Planner** | Using calculators, building scenarios | Offer personalization, save progress |
| **Decision Maker** | Comparing final options, ready to choose | Provide clear recommendation, reduce friction |
| **Returning User** | Has history, building on previous work | Recognize context, continue journey |
| **Power User** | Frequent visitor, deep engagement | Offer advanced features, exclusive data |

### Transition Facilitation

- **New → Explorer:** First recommendation must be compelling enough to click.
- **Explorer → Learner:** Surface research when user shows depth interest.
- **Learner → Planner:** Offer calculator when user has enough context.
- **Planner → Decision Maker:** Provide comparison tools when user is narrowing options.
- **Decision Maker → Returning User:** Send email/export with clear return trigger.
- **Returning → Power User:** Unlock advanced features, personalized dashboard.

---

## 9. Success Definition

A successful visit means the user has accomplished all of the following:

1. **The user discovers at least one valuable insight.** Not "reads about data" — discovers something new about their specific situation.

2. **The user completes at least one interactive journey.** Not "views a page" — completes a calculation, comparison, or assessment.

3. **The user clicks at least one recommendation.** Not "sees a link" — actively chooses to continue their journey.

4. **The user leaves with a clear next step.** Not "might come back" — has a specific reason to return.

If any of these four conditions are not met, the visit has failed. The product must be designed to make all four conditions inevitable.

---

## 10. Permanent Product Rules

These rules are permanent. They do not change with trends, technology, or competition. They are the foundation of every decision.

1. **Never build dead-end pages.** Every page must have at least one clear, compelling next action.

2. **Never create isolated tools.** Every tool must connect to at least two other tools or experiences.

3. **Every tool connects to another tool.** The product is a web, not a collection of standalone features.

4. **Every dataset powers multiple experiences.** A single salary dataset should power calculators, comparisons, rankings, research, and AI answers.

5. **Every interaction teaches something useful.** A user who completes a calculation should know something they did not know before.

6. **Recommendations are always contextual.** Never show generic "related pages." Show the ONE best next action for this user on this page.

7. **Discovery is more important than navigation.** Users should find what they need through recommendations, not menus.

8. **Personalization increases over time.** The more a user interacts, the more relevant the experience becomes.

9. **Data is the product.** Words support the numbers. If the data is not compelling, the writing will not save it.

10. **Trust is earned through transparency.** Show sources, explain methodology, admit limitations. Transparency builds trust. Trust builds revenue.

11. **Every page must answer the One Question.** "How can I increase my earning potential?" If a page does not answer this question, it should not exist.

12. **Simplicity beats feature overload.** One feature done well is worth ten features done poorly.

---

*Last updated: July 2026*
*Owner: Olikit Product Team*
