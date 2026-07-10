# User Data Model

> This document defines the complete User Data Model for Olikit. It is the single source of truth for every engineer, API, calculator, recommendation engine, and AI system. Every field collected, calculated, or inferred is defined here. Nothing should be left to engineering interpretation.

---

## 1. Design Principles

These principles govern every field in the data model. They do not change.

1. **Collect the minimum data needed.** Every field must earn its place. If a field does not directly power a recommendation, calculation, or insight, it does not exist.

2. **Never ask the same question twice.** If data is collected once, it is reused everywhere. The user should never feel like they are repeating themselves.

3. **Derive whenever possible.** If a field can be calculated from other fields, it is calculated, not collected. Collection is expensive (user effort). Calculation is cheap (server/browser compute).

4. **Every field must have a purpose.** No field exists "for later." No field exists "just in case." Every field powers at least one recommendation, calculation, or insight.

5. **Every field must power at least one recommendation.** If a field does not influence what Oli says or does, it is removed.

6. **Every field should be reusable across multiple modules.** A field that powers only one feature is a candidate for removal. A field that powers Salary Intelligence, Career Intelligence, and Wealth Intelligence is worth collecting.

---

## 2. User Profile

The User Profile is the complete representation of what Olikit knows about a user. Every field is defined below.

---

### 2.1 Collected Fields

These fields are collected directly from user input during the Discovery Engine journey or from page context.

---

#### `profession`

| Attribute | Definition |
|---|---|
| **Description** | The user's current profession or primary occupation |
| **Data Type** | String (enum) |
| **Allowed Values** | `software-engineer`, `data-scientist`, `product-manager`, `ai-engineer`, `data-engineer`, `devops-engineer`, `cloud-engineer`, `cybersecurity-analyst`, `machine-learning-engineer`, `solutions-architect`, `financial-analyst`, `business-analyst`, `project-manager`, `doctor`, `nurse`, `other` |
| **Required?** | Yes — cannot be skipped |
| **Default Value** | None |
| **Collected or Calculated?** | Collected |
| **Source** | Discovery Engine Q1, or page context (salary/country pages) |
| **Modules Using It** | Salary Intelligence, Career Intelligence, Skill Intelligence, AI Intelligence, Recommendation Engine |
| **Example Value** | `software-engineer` |

---

#### `professionCategory`

| Attribute | Definition |
|---|---|
| **Description** | The category grouping for the user's profession |
| **Data Type** | String (enum) |
| **Allowed Values** | `technology`, `healthcare`, `finance`, `business`, `other` |
| **Required?** | Yes (derived from `profession`, not collected) |
| **Default Value** | `other` |
| **Collected or Calculated?** | Calculated |
| **Source** | Mapping from `profession` to category |
| **Modules Using It** | Skill Intelligence, Career Intelligence, Recommendation Engine |
| **Example Value** | `technology` |

**Mapping:**

| Profession | Category |
|---|---|
| software-engineer, data-scientist, ai-engineer, data-engineer, devops-engineer, cloud-engineer, cybersecurity-analyst, machine-learning-engineer, solutions-architect | technology |
| doctor, nurse | healthcare |
| financial-analyst | finance |
| product-manager, business-analyst, project-manager | business |
| other | other |

---

#### `country`

| Attribute | Definition |
|---|---|
| **Description** | The country where the user currently works |
| **Data Type** | String (enum) |
| **Allowed Values** | `us`, `uk`, `au`, `ca`, `nz`, `in`, `sg` |
| **Required?** | Yes — cannot be skipped |
| **Default Value** | None |
| **Collected or Calculated?** | Collected |
| **Source** | Discovery Engine Q2, or page context, or geo-detection (middleware) |
| **Modules Using It** | Salary Intelligence, Wealth Intelligence, Relocation Intelligence, Decision Intelligence, Recommendation Engine |
| **Example Value** | `us` |

---

#### `city`

| Attribute | Definition |
|---|---|
| **Description** | The city where the user currently works |
| **Data Type** | String (free-text, validated against city database) |
| **Allowed Values** | Any city in the Olikit city database (30 cities currently) |
| **Required?** | No |
| **Default Value** | None |
| **Collected or Calculated?** | Collected (future — not collected in V1 Discovery Engine) |
| **Source** | User input (future feature) |
| **Modules Using It** | Salary Intelligence (city-level), Cost of Living, Relocation Intelligence |
| **Example Value** | `new-york` |

---

#### `experienceLevel`

| Attribute | Definition |
|---|---|
| **Description** | The user's career experience level |
| **Data Type** | String (enum) |
| **Allowed Values** | `entry`, `mid`, `senior`, `lead`, `executive` |
| **Required?** | Yes — cannot be skipped |
| **Default Value** | None |
| **Collected or Calculated?** | Collected |
| **Source** | Discovery Engine Q3 |
| **Modules Using It** | Salary Intelligence, Career Intelligence, Promotion Readiness, Recommendation Engine |
| **Example Value** | `senior` |

**Mapping to display labels:**

| Value | Display Label | Year Range |
|---|---|---|
| `entry` | Entry Level | 0-2 years |
| `mid` | Mid Level | 3-5 years |
| `senior` | Senior | 6-10 years |
| `lead` | Lead/Principal | 10+ years |
| `executive` | Executive/VP | 10+ years |

---

#### `currentSalary`

| Attribute | Definition |
|---|---|
| **Description** | The user's current annual gross salary |
| **Data Type** | Number (integer) |
| **Allowed Values** | 0 to 1000000 (in local currency) |
| **Required?** | Yes — cannot be skipped |
| **Default Value** | None |
| **Collected or Calculated?** | Collected |
| **Source** | Discovery Engine Q4 (slider input) |
| **Modules Using It** | Salary Intelligence, Wealth Intelligence, Career Score, Salary Gap, Recommendation Engine |
| **Example Value** | 120000 |

---

#### `currency`

| Attribute | Definition |
|---|---|
| **Description** | The currency of the user's salary |
| **Data Type** | String (enum) |
| **Allowed Values** | `USD`, `GBP`, `AUD`, `CAD`, `NZD`, `INR`, `SGD` |
| **Required?** | Yes |
| **Default Value** | Determined by `country` |
| **Collected or Calculated?** | Calculated |
| **Source** | Derived from `country` — each country maps to one currency |
| **Modules Using It** | All salary calculations, Currency Toggle, Take-Home Pay |
| **Example Value** | `USD` |

**Mapping:**

| Country | Currency |
|---|---|
| `us` | `USD` |
| `uk` | `GBP` |
| `au` | `AUD` |
| `ca` | `CAD` |
| `nz` | `NZD` |
| `in` | `INR` |
| `sg` | `SGD` |

---

#### `salarySatisfaction`

| Attribute | Definition |
|---|---|
| **Description** | How the user feels about their current salary |
| **Data Type** | String (enum) |
| **Allowed Values** | `way-too-low`, `slightly-low`, `about-right`, `good`, `excellent` |
| **Required?** | Yes — cannot be skipped |
| **Default Value** | None |
| **Collected or Calculated?** | Collected |
| **Source** | Discovery Engine Q5 |
| **Modules Using It** | Recommendation Engine (urgency prioritization), Oli behavior (tone adjustment) |
| **Example Value** | `slightly-low` |

---

#### `goals`

| Attribute | Definition |
|---|---|
| **Description** | What the user wants to achieve in their career |
| **Data Type** | Array of Strings (enum) |
| **Allowed Values** | `earn-more`, `get-promoted`, `change-careers`, `relocate`, `work-life-balance`, `learn-skills`, `start-business`, `retire-early` |
| **Required?** | Yes — must select at least 1 |
| **Default Value** | None |
| **Collected or Calculated?** | Collected |
| **Source** | Discovery Engine Q6 (multiple choice, max 3) |
| **Modules Using It** | Recommendation Engine (primary driver), Career Intelligence, Wealth Intelligence, Relocation Intelligence |
| **Example Value** | `["earn-more", "relocate", "learn-skills"]` |

---

#### `aiConcernLevel`

| Attribute | Definition |
|---|---|
| **Description** | How worried the user is about AI replacing their job |
| **Data Type** | String (enum) |
| **Allowed Values** | `not-worried`, `slightly-concerned`, `moderately-worried`, `very-worried`, `extremely-worried` |
| **Required?** | Yes — cannot be skipped |
| **Default Value** | None |
| **Collected or Calculated?** | Collected |
| **Source** | Discovery Engine Q7 |
| **Modules Using It** | AI Intelligence, Recommendation Engine, AI Readiness Score |
| **Example Value** | `moderately-worried` |

---

#### `relocationOpen`

| Attribute | Definition |
|---|---|
| **Description** | Whether the user would consider relocating internationally |
| **Data Type** | Boolean |
| **Allowed Values** | `true`, `false` |
| **Required?** | Yes — cannot be skipped |
| **Default Value** | None |
| **Collected or Calculated?** | Collected |
| **Source** | Discovery Engine Q8 |
| **Modules Using It** | Relocation Intelligence, Country Intelligence, Recommendation Engine |
| **Example Value** | `true` |

---

#### `topSkill`

| Attribute | Definition |
|---|---|
| **Description** | The user's strongest or most prominent skill |
| **Data Type** | String (enum, dynamic per profession) |
| **Allowed Values** | Dynamic — see Skill Lists by Profession below |
| **Required?** | Yes — cannot be skipped |
| **Default Value** | None |
| **Collected or Calculated?** | Collected |
| **Source** | Discovery Engine Q9 |
| **Modules Using It** | Skill Intelligence, Skill Premium, Recommendation Engine |
| **Example Value** | `machine-learning` |

---

#### `preferredNextStep`

| Attribute | Definition |
|---|---|
| **Description** | What the user wants to explore first after completing the journey |
| **Data Type** | String (enum) |
| **Allowed Values** | `salary-breakdown`, `compare-countries`, `check-ai-risk`, `career-paths`, `take-home-pay` |
| **Required?** | Yes — cannot be skipped |
| **Default Value** | None |
| **Collected or Calculated?** | Collected |
| **Source** | Discovery Engine Q10 |
| **Modules Using It** | Recommendation Engine (Priority 1), Career Snapshot |
| **Example Value** | `compare-countries` |

---

### 2.2 Inferred Fields

These fields are not collected directly but are inferred from collected fields and external data.

---

#### `taxSystem`

| Attribute | Definition |
|---|---|
| **Description** | The tax system applicable to the user |
| **Data Type** | String (enum) |
| **Allowed Values** | `us-federal`, `uk-paye`, `au-atp`, `ca-federal`, `nz-paye`, `in-new-regime`, `sg-iras` |
| **Required?** | Yes |
| **Default Value** | Determined by `country` |
| **Collected or Calculated?** | Inferred |
| **Source** | Mapping from `country` to tax system |
| **Modules Using It** | Tax Calculator, Take-Home Pay, Wealth Intelligence |
| **Example Value** | `us-federal` |

---

#### `seniorityMultiplier`

| Attribute | Definition |
|---|---|
| **Description** | The salary multiplier for the user's experience level relative to entry level |
| **Data Type** | Number (float) |
| **Allowed Values** | 1.0 to 3.0 |
| **Required?** | Yes |
| **Default Value** | Determined by `experienceLevel` |
| **Collected or Calculated?** | Inferred |
| **Source** | Mapping from `experienceLevel` to multiplier |
| **Modules Using It** | Salary Potential calculation, Market Average calculation |
| **Example Value** | 1.8 |

**Mapping:**

| Experience Level | Multiplier |
|---|---|
| `entry` | 1.0 |
| `mid` | 1.4 |
| `senior` | 1.8 |
| `lead` | 2.2 |
| `executive` | 2.8 |

---

#### `salaryPercentile`

| Attribute | Definition |
|---|---|
| **Description** | The user's salary percentile relative to others in the same profession + country + experience level |
| **Data Type** | Number (integer, 0-100) |
| **Allowed Values** | 0 to 100 |
| **Required?** | Yes |
| **Default Value** | 50 (if data unavailable) |
| **Collected or Calculated?** | Calculated |
| **Source** | Comparison of `currentSalary` against Olikit salary database for matching profession + country + experienceLevel |
| **Modules Using It** | Career Score, Salary Gap, Underpaid Detection, Recommendation Engine |
| **Example Value** | 65 |

---

#### `urgencyLevel`

| Attribute | Definition |
|---|---|
| **Description** | How urgently the user needs career action based on satisfaction and goals |
| **Data Type** | String (enum) |
| **Allowed Values** | `low`, `medium`, `high`, `critical` |
| **Required?** | Yes |
| **Default Value** | `medium` |
| **Collected or Calculated?** | Calculated |
| **Source** | Combination of `salarySatisfaction` and `goals` |
| **Modules Using It** | Recommendation Engine (priority adjustment), Oli tone |
| **Example Value** | `high` |

**Calculation rules:**

| Salary Satisfaction | Goals include `earn-more` | Urgency |
|---|---|---|
| `way-too-low` | Yes | `critical` |
| `way-too-low` | No | `high` |
| `slightly-low` | Yes | `high` |
| `slightly-low` | No | `medium` |
| `about-right` | Yes | `medium` |
| `about-right` | No | `low` |
| `good` | Any | `low` |
| `excellent` | Any | `low` |

---

#### `aiReadinessPriority`

| Attribute | Definition |
|---|---|
| **Description** | Whether AI readiness should be prioritized in recommendations |
| **Data Type** | Boolean |
| **Allowed Values** | `true`, `false` |
| **Required?** | Yes |
| **Default Value** | `false` |
| **Collected or Calculated?** | Calculated |
| **Source** | `aiConcernLevel` in (`very-worried`, `extremely-worried`) |
| **Modules Using It** | Recommendation Engine (Priority 4) |
| **Example Value** | `true` |

---

#### `relocationPriority`

| Attribute | Definition |
|---|---|
| **Description** | Whether relocation should be prioritized in recommendations |
| **Data Type** | Boolean |
| **Allowed Values** | `true`, `false` |
| **Required?** | Yes |
| **Default Value** | `false` |
| **Collected or Calculated?** | Calculated |
| **Source** | `relocationOpen` = `true` AND `goals` includes `relocate` |
| **Modules Using It** | Recommendation Engine (Priority 3) |
| **Example Value** | `true` |

---

#### `skillCategory`

| Attribute | Definition |
|---|---|
| **Description** | The category of the user's top skill (technical, leadership, domain) |
| **Data Type** | String (enum) |
| **Allowed Values** | `technical`, `leadership`, `domain`, `soft` |
| **Required?** | Yes |
| **Default Value** | `technical` |
| **Collected or Calculated?** | Inferred |
| **Source** | Mapping from `topSkill` to skill category |
| **Modules Using It** | Skill Intelligence, Career Path recommendations |
| **Example Value** | `technical` |

---

#### `goalPriority`

| Attribute | Definition |
|---|---|
| **Description** | The user's primary goal (first selected) |
| **Data Type** | String (enum) |
| **Allowed Values** | Same as `goals` allowed values |
| **Required?** | Yes |
| **Default Value** | First item in `goals` array |
| **Collected or Calculated?** | Derived |
| **Source** | First element of `goals` array |
| **Modules Using It** | Recommendation Engine (primary goal matching) |
| **Example Value** | `earn-more` |

---

## 3. Computed Fields

These fields are never collected from the user. They are always calculated from collected and inferred fields. They power the Career Snapshot and recommendations.

---

### 3.1 `careerScore`

| Attribute | Definition |
|---|---|
| **Description** | A composite score (0-100) representing the user's overall career position |
| **Data Type** | Number (integer, 0-100) |
| **Formula** | `salaryPercentile × 0.30 + skillPremiumScore × 0.25 + aiReadinessScore × 0.25 + goalAlignmentScore × 0.20` |
| **Dependencies** | `salaryPercentile`, `skillPremiumScore`, `aiReadinessScore`, `goalAlignmentScore` |
| **Update Trigger** | Any change to dependencies. Recalculated on every question answer. |
| **Consumers** | Career Score section, Recommendation Engine, Career Snapshot |

---

### 3.2 `skillPremiumScore`

| Attribute | Definition |
|---|---|
| **Description** | A score (0-100) representing how much the user's top skill increases their earning potential |
| **Data Type** | Number (integer, 0-100) |
| **Formula** | `(skillPremiumPercentage / maxSkillPremiumForProfession) × 100` |
| **Dependencies** | `topSkill`, `profession` |
| **Update Trigger** | Change to `topSkill` or `profession` |
| **Consumers** | Career Score, Top Skills section, Skill Learning recommendations |
| **Source Data** | Olikit skill premium database (skill premium percentage per skill per profession) |

---

### 3.3 `aiReadinessScore`

| Attribute | Definition |
|---|---|
| **Description** | A score (0-100) representing how well-prepared the user is for AI-driven changes in their profession |
| **Data Type** | Number (integer, 0-100) |
| **Formula** | `100 - (professionAutomationRisk × 0.6) + (skillAiAlignment × 0.4)` |
| **Dependencies** | `profession`, `topSkill`, `aiConcernLevel` |
| **Update Trigger** | Change to any dependency |
| **Consumers** | Career Score, AI Readiness section, AI Career Report recommendation |
| **Source Data** | Olikit AI readiness model (automation risk per profession, AI alignment per skill) |

**Sub-components:**

| Component | Definition | Source |
|---|---|---|
| `professionAutomationRisk` | 0-100 risk score for the profession being automated | Olikit AI readiness database |
| `skillAiAlignment` | 0-100 score for how well the skill works with AI tools | Olikit skill database |

---

### 3.4 `goalAlignmentScore`

| Attribute | Definition |
|---|---|
| **Description** | A score (0-100) representing how well the user's current position aligns with their stated goals |
| **Data Type** | Number (integer, 0-100) |
| **Formula** | Average of individual goal alignment scores |
| **Dependencies** | `goals`, `currentSalary`, `salaryPercentile`, `experienceLevel`, `aiConcernLevel`, `relocationOpen` |
| **Update Trigger** | Change to any dependency |
| **Consumers** | Career Score, Recommendation Engine |
| **Goal alignment rules** | See below |

**Goal Alignment Rules:**

| Goal | Alignment is HIGH when | Alignment is LOW when |
|---|---|---|
| `earn-more` | salaryPercentile >= 60 | salaryPercentile < 40 |
| `get-promoted` | experienceLevel in (`senior`, `lead`) AND salaryPercentile >= 50 | experienceLevel = `entry` |
| `change-careers` | Always 50 (neutral — cannot assess without more data) | — |
| `relocate` | relocationOpen = true | relocationOpen = false |
| `work-life-balance` | Always 50 (neutral — not measured) | — |
| `learn-skills` | skillPremiumScore >= 60 | skillPremiumScore < 40 |
| `start-business` | Always 50 (neutral — not measured) | — |
| `retire-early` | salaryPercentile >= 70 | salaryPercentile < 30 |

---

### 3.5 `marketAverage`

| Attribute | Definition |
|---|---|
| **Description** | The average salary for the user's profession + country + experience level |
| **Data Type** | Number (integer, in local currency) |
| **Formula** | Lookup from Olikit salary database: `avg(profession, country, experienceLevel)` |
| **Dependencies** | `profession`, `country`, `experienceLevel` |
| **Update Trigger** | Change to any dependency |
| **Consumers** | Salary Potential section, Salary Gap calculation |
| **Source Data** | Olikit salary database |

---

### 3.6 `topTenPercent`

| Attribute | Definition |
|---|---|
| **Description** | The salary at the 90th percentile for the user's profession + country + experience level |
| **Data Type** | Number (integer, in local currency) |
| **Formula** | Lookup from Olikit salary database: `percentile90(profession, country, experienceLevel)` |
| **Dependencies** | `profession`, `country`, `experienceLevel` |
| **Update Trigger** | Change to any dependency |
| **Consumers** | Salary Potential section |
| **Source Data** | Olikit salary database |

---

### 3.7 `salaryGap`

| Attribute | Definition |
|---|---|
| **Description** | The difference between the user's salary and the market average |
| **Data Type** | Number (integer, in local currency). Negative = underpaid. Positive = overpaid. |
| **Formula** | `currentSalary - marketAverage` |
| **Dependencies** | `currentSalary`, `marketAverage` |
| **Update Trigger** | Change to either dependency |
| **Consumers** | Salary Potential section, Underpaid Detection, Recommendation Engine |

---

### 3.8 `takeHomePay`

| Attribute | Definition |
|---|---|
| **Description** | The user's estimated annual take-home pay after taxes and social contributions |
| **Data Type** | Number (integer, in local currency) |
| **Formula** | Calculated from `currentSalary` + `country` using Olikit tax calculator with official tax brackets |
| **Dependencies** | `currentSalary`, `country` |
| **Update Trigger** | Change to either dependency |
| **Consumers** | Take-Home Pay section, Wealth Intelligence, Country Comparison |
| **Source Data** | Olikit tax calculator, official 2025-2026 tax brackets |

---

### 3.9 `effectiveTaxRate`

| Attribute | Definition |
|---|---|
| **Description** | The percentage of gross salary paid in taxes and social contributions |
| **Data Type** | Number (float, 0-100) |
| **Formula** | `((currentSalary - takeHomePay) / currentSalary) × 100` |
| **Dependencies** | `currentSalary`, `takeHomePay` |
| **Update Trigger** | Change to either dependency |
| **Consumers** | Take-Home Pay section, Tax Optimization recommendations |

---

### 3.10 `skillPremium`

| Attribute | Definition |
|---|---|
| **Description** | The percentage salary premium associated with the user's top skill |
| **Data Type** | Number (float, 0-100) |
| **Formula** | Lookup from Olikit skill premium database: `premium(topSkill, profession)` |
| **Dependencies** | `topSkill`, `profession` |
| **Update Trigger** | Change to either dependency |
| **Consumers** | Top Skills section, Skill Learning recommendations, Career Score |
| **Source Data** | Olikit skill premium database |

---

### 3.11 `confidenceScore`

| Attribute | Definition |
|---|---|
| **Description** | A score (0-100) representing how confident Olikit is in its recommendations for this user |
| **Data Type** | Number (integer, 0-100) |
| **Formula** | `dataQualityScore × 0.4 + sampleSizeScore × 0.3 + professionCoverageScore × 0.3` |
| **Dependencies** | `profession`, `country`, `experienceLevel` |
| **Update Trigger** | Change to any dependency |
| **Consumers** | Confidence Level section, Data Quality indicator |

**Sub-components:**

| Component | Definition | Source |
|---|---|---|
| `dataQualityScore` | 0-100 score for how complete and recent the data is for this combination | Olikit data quality metrics |
| `sampleSizeScore` | 0-100 score for how many data points exist for this combination | Olikit database statistics |
| `professionCoverageScore` | 0-100 score for how well this profession is covered in the database | Olikit profession coverage metrics |

---

### 3.12 `promotionReadinessScore`

| Attribute | Definition |
|---|---|
| **Description** | A score (0-100) representing how ready the user is for a promotion |
| **Data Type** | Number (integer, 0-100) |
| **Formula** | `(experienceScore × 0.4) + (skillScore × 0.3) + (marketSignalScore × 0.3)` |
| **Dependencies** | `experienceLevel`, `topSkill`, `profession`, `salaryPercentile` |
| **Update Trigger** | Change to any dependency |
| **Consumers** | Promotion Readiness section, Career Roadmap recommendation |
| **Conditional** | Only calculated if `experienceLevel` is `mid` or `senior` |

**Sub-components:**

| Component | Definition |
|---|---|
| `experienceScore` | Based on years in current level (estimated from `experienceLevel`) |
| `skillScore` | Based on `skillPremiumScore` — higher premium skills signal readiness |
| `marketSignalScore` | Based on `salaryPercentile` — being at market average suggests readiness |

---

### 3.13 `recommendationPriority`

| Attribute | Definition |
|---|---|
| **Description** | The calculated priority recommendation for the user based on all profile data |
| **Data Type** | String (enum) |
| **Allowed Values** | `salary-breakdown`, `salary-comparison`, `country-comparison`, `ai-career-report`, `career-roadmap`, `skill-learning`, `wealth-calculator`, `wealth-intelligence`, `profession-comparison` |
| **Required?** | Yes |
| **Default Value** | `profession-comparison` |
| **Collected or Calculated?** | Calculated |
| **Source** | Recommendation Engine priority rules (see Career Discovery Engine spec) |
| **Dependencies** | `preferredNextStep`, `salaryPercentile`, `relocationOpen`, `aiReadinessPriority`, `goals`, `skillPremiumScore`, `salarySatisfaction`, `takeHomePay` |
| **Update Trigger** | Change to any dependency |
| **Consumers** | Career Snapshot Next Best Action section |

---

## 4. Journey State

The Journey State tracks the user's progress through the Discovery Engine. It is separate from the User Profile.

---

### 4.1 `currentQuestion`

| Attribute | Definition |
|---|---|
| **Description** | The question the user is currently viewing |
| **Data Type** | Number (integer, 1-10) |
| **Allowed Values** | 1 to 10 |
| **Default Value** | 1 |
| **Update Trigger** | User navigates to next/previous question |

---

### 4.2 `completedQuestions`

| Attribute | Definition |
|---|---|
| **Description** | List of questions the user has answered |
| **Data Type** | Array of Numbers |
| **Allowed Values** | Any subset of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] |
| **Default Value** | Empty array |
| **Update Trigger** | User answers or skips a question |

---

### 4.3 `skippedQuestions`

| Attribute | Definition |
|---|---|
| **Description** | List of questions the user has explicitly skipped |
| **Data Type** | Array of Numbers |
| **Allowed Values** | Any subset of [3, 4, 5, 6, 7, 8, 9, 10] (Q1 and Q2 cannot be skipped) |
| **Default Value** | Empty array |
| **Update Trigger** | User clicks "Skip" on a question |

---

### 4.4 `progressPercentage`

| Attribute | Definition |
|---|---|
| **Description** | The user's completion percentage |
| **Data Type** | Number (integer, 0-100) |
| **Formula** | `(completedQuestions.length / 10) × 100` |
| **Default Value** | 0 |
| **Update Trigger** | Change to `completedQuestions` |

---

### 4.5 `startedAt`

| Attribute | Definition |
|---|---|
| **Description** | Timestamp when the journey was first started |
| **Data Type** | ISO 8601 timestamp |
| **Default Value** | Current time on first question answer |
| **Update Trigger** | Set once, never updated |

---

### 4.6 `lastActivity`

| Attribute | Definition |
|---|---|
| **Description** | Timestamp of the last user interaction |
| **Data Type** | ISO 8601 timestamp |
| **Default Value** | Current time |
| **Update Trigger** | Every user interaction (answer, skip, back, click) |

---

### 4.7 `completedJourney`

| Attribute | Definition |
|---|---|
| **Description** | Whether the user has completed all 10 questions |
| **Data Type** | Boolean |
| **Default Value** | `false` |
| **Update Trigger** | Set to `true` when `completedQuestions.length` = 10 |

---

### 4.8 `recommendedTool`

| Attribute | Definition |
|---|---|
| **Description** | The tool or page recommended to the user after completing the journey |
| **Data Type** | String (URL path) |
| **Allowed Values** | Any valid Olikit tool/page path |
| **Default Value** | None |
| **Update Trigger** | Set after Career Snapshot is generated |

---

### 4.9 `dismissedRecommendations`

| Attribute | Definition |
|---|---|
| **Description** | List of recommendation types the user has dismissed |
| **Data Type** | Array of Strings |
| **Allowed Values** | Same as `recommendationPriority` allowed values |
| **Default Value** | Empty array |
| **Update Trigger** | User clicks "dismiss" on a recommendation |

---

### 4.10 `journeyVersion`

| Attribute | Definition |
|---|---|
| **Description** | The version of the Discovery Engine journey this data was collected with |
| **Data Type** | String |
| **Allowed Values** | Semantic version string (e.g., `1.0.0`) |
| **Default Value** | Current version |
| **Update Trigger** | Set on journey start, compared on resume |

---

### 4.11 `resumeAvailable`

| Attribute | Definition |
|---|---|
| **Description** | Whether the user can resume a partially completed journey |
| **Data Type** | Boolean |
| **Formula** | `completedJourney = false AND completedQuestions.length > 0 AND journeyVersion = currentVersion` |
| **Default Value** | `false` |
| **Update Trigger** | Recalculated on page load |

---

## 5. Recommendation State

The Recommendation State tracks how the user interacts with recommendations.

---

### 5.1 `currentRecommendation`

| Attribute | Definition |
|---|---|
| **Description** | The recommendation currently displayed to the user |
| **Data Type** | Object |
| **Shape** | `{ type: string, title: string, description: string, cta: string, url: string }` |
| **Default Value** | None |
| **Update Trigger** | Set after Career Snapshot generation |

---

### 5.2 `recommendationHistory`

| Attribute | Definition |
|---|---|
| **Description** | All recommendations shown to the user across sessions |
| **Data Type** | Array of Objects |
| **Shape** | `[{ type, shownAt, clicked, dismissed }]` |
| **Default Value** | Empty array |
| **Update Trigger** | Every time a recommendation is shown, clicked, or dismissed |

---

### 5.3 `clickedRecommendations`

| Attribute | Definition |
|---|---|
| **Description** | List of recommendation types the user has clicked |
| **Data Type** | Array of Strings |
| **Default Value** | Empty array |
| **Update Trigger** | User clicks a recommendation CTA |

---

### 5.4 `ignoredRecommendations`

| Attribute | Definition |
|---|---|
| **Description** | List of recommendation types shown but not clicked or dismissed |
| **Data Type** | Array of Strings |
| **Default Value** | Empty array |
| **Update Trigger** | Recalculated — recommendation shown for > 30 seconds without click or dismiss |

---

### 5.5 `recommendationReason`

| Attribute | Definition |
|---|---|
| **Description** | The reason this recommendation was selected |
| **Data Type** | String |
| **Allowed Values** | Free-text explanation (e.g., "User is underpaid below 40th percentile") |
| **Default Value** | None |
| **Update Trigger** | Set when recommendation is generated |

---

### 5.6 `priority`

| Attribute | Definition |
|---|---|
| **Description** | The priority level of the current recommendation |
| **Data Type** | Number (integer, 1-9) |
| **Allowed Values** | 1 (highest) to 9 (default) |
| **Default Value** | 9 |
| **Update Trigger** | Set when recommendation is generated |

---

## 6. Oli State

The Oli State controls the AI assistant's behavior and appearance during the journey.

---

### 6.1 `expression`

| Attribute | Definition |
|---|---|
| **Description** | The current facial expression or emotional state of Oli |
| **Data Type** | String (enum) |
| **Allowed Values** | `neutral`, `happy`, `excited`, `thinking`, `concerned`, `celebrating` |
| **Default Value** | `neutral` |
| **Update Trigger** | Changes based on user answers and journey state |

---

### 6.2 `animation`

| Attribute | Definition |
|---|---|
| **Description** | The current animation playing on Oli |
| **Data Type** | String (enum) |
| **Allowed Values** | `idle`, `typing`, `pulse`, `fade-in`, `celebrate`, `thinking-dots` |
| **Default Value** | `idle` |
| **Update Trigger** | Changes based on conversation stage |

---

### 6.3 `mood`

| Attribute | Definition |
|---|---|
| **Description** | The overall tone Oli should use in responses |
| **Data Type** | String (enum) |
| **Allowed Values** | `friendly`, `encouraging`, `analytical`, `excited`, `reassuring` |
| **Default Value** | `friendly` |
| **Update Trigger** | Changes based on `salarySatisfaction` and `aiConcernLevel` |

**Mood rules:**

| Condition | Mood |
|---|---|
| `salarySatisfaction` = `way-too-low` OR `slightly-low` | `reassuring` |
| `aiConcernLevel` = `very-worried` OR `extremely-worried` | `reassuring` |
| `salarySatisfaction` = `excellent` | `excited` |
| Career Score >= 80 | `excited` |
| Default | `friendly` |

---

### 6.4 `conversationStage`

| Attribute | Definition |
|---|---|
| **Description** | The current stage of the conversation |
| **Data Type** | String (enum) |
| **Allowed Values** | `welcome`, `question`, `thinking`, `analysis`, `result`, `recommendation`, `return` |
| **Default Value** | `welcome` |
| **Update Trigger** | Changes at each transition in the Discovery Flow |

---

### 6.5 `lastMessage`

| Attribute | Definition |
|---|---|
| **Description** | The last message Oli displayed to the user |
| **Data Type** | String |
| **Default Value** | Welcome message |
| **Update Trigger** | Every time Oli speaks |

---

### 6.6 `lastInteraction`

| Attribute | Definition |
|---|---|
| **Description** | Timestamp of the last user interaction with Oli |
| **Data Type** | ISO 8601 timestamp |
| **Default Value** | Current time |
| **Update Trigger** | Every user click, answer, or navigation |

---

### 6.7 `context`

| Attribute | Definition |
|---|---|
| **Description** | The contextual data Oli uses to generate personalized responses |
| **Data Type** | Object |
| **Shape** | `{ profession: string, country: string, skill: string, goal: string }` |
| **Default Value** | `{}` |
| **Update Trigger** | Updated after each question answer to include latest data |

---

## 7. Storage Strategy

### 7.1 In-Memory Only (Never Persisted)

| Field | Reason |
|---|---|
| `oli.expression` | Ephemeral UI state |
| `oli.animation` | Ephemeral UI state |
| `oli.context` | Recomputed from User Profile on each load |
| `progressPercentage` | Recomputed from `completedQuestions` |
| `resumeAvailable` | Recomputed from journey state |
| `recommendationPriority` | Recomputed from User Profile |

---

### 7.2 Local Storage (Persisted)

| Field | Reason |
|---|---|
| User Profile (all collected + inferred fields) | Must survive page refresh and return visits |
| Journey State (all fields) | Must survive page refresh and enable resume |
| Recommendation State (all fields) | Must survive page refresh and track history |
| `oli.lastMessage` | Resumed on return visit |
| `oli.mood` | Resumed on return visit |
| `oli.conversationStage` | Resumed on return visit |

---

### 7.3 Never Persisted

| Field | Reason |
|---|---|
| Raw salary input before validation | May contain invalid data |
| Browser fingerprint | Privacy — not collected |
| IP address | Privacy — not collected |
| Full name | Privacy — not collected in V1 |
| Email | Privacy — not collected in V1 |

---

### 7.4 Expiration Policy

| Data | Expiration | Reason |
|---|---|---|
| Journey State (partial) | 90 days | Stale journey data loses value |
| Journey State (completed) | 365 days | Completed snapshots may be revisited |
| Recommendation History | 365 days | Useful for tracking engagement |
| User Profile | Never expires | Core data, user-controlled |

---

### 7.5 Versioning Strategy

- `journeyVersion` is stored with all journey data
- On resume, `journeyVersion` is compared to current version
- If versions differ: all journey data is cleared silently, user starts fresh
- No migration logic — version mismatch = reset
- Version format: `major.minor.patch` (e.g., `1.0.0`)
- Major version change = question count or order changed = full reset
- Minor version change = wording or options changed = soft reset (offer fresh start)
- Patch version change = no user-facing changes = no reset

---

### 7.6 Migration Strategy

- V1 has no migration needs (first version)
- Future versions: if `journeyVersion` is older than current, clear data and start fresh
- No backward compatibility — old data is not migrated, it is discarded
- This is intentional: journey data is disposable, the value is in the Career Snapshot

---

## 8. Data Flow

The complete flow from user input to rendered UI.

---

### Step 1: Question Answer

User taps an option, slider, or button.

- Input is validated against allowed values
- Invalid input is rejected (no data updated)
- Valid input is written to the appropriate User Profile field

---

### Step 2: Update User Profile

The collected field is written to the User Profile.

- `profession` is written
- `professionCategory` is recalculated from `profession`
- `currency` is recalculated from `country` (if country changed)
- `taxSystem` is recalculated from `country` (if country changed)
- All other User Profile fields are updated as needed

---

### Step 3: Recalculate Scores

All computed fields are recalculated in dependency order:

1. `marketAverage` (depends on profession, country, experienceLevel)
2. `topTenPercent` (depends on profession, country, experienceLevel)
3. `salaryPercentile` (depends on currentSalary, marketAverage)
4. `salaryGap` (depends on currentSalary, marketAverage)
5. `takeHomePay` (depends on currentSalary, country)
6. `effectiveTaxRate` (depends on currentSalary, takeHomePay)
7. `skillPremium` (depends on topSkill, profession)
8. `skillPremiumScore` (depends on skillPremium)
9. `aiReadinessScore` (depends on profession, topSkill, aiConcernLevel)
10. `goalAlignmentScore` (depends on all goals and profile fields)
11. `careerScore` (depends on salaryPercentile, skillPremiumScore, aiReadinessScore, goalAlignmentScore)
12. `promotionReadinessScore` (depends on experienceLevel, skillPremium, salaryPercentile)
13. `confidenceScore` (depends on profession, country, experienceLevel)
14. `urgencyLevel` (depends on salarySatisfaction, goals)
15. `recommendationPriority` (depends on all profile and computed fields)

---

### Step 4: Generate Recommendation

Based on `recommendationPriority`, the Recommendation Engine selects one recommendation:

1. Look up priority rules (see Career Discovery Engine spec)
2. Check `dismissedRecommendations` — skip any dismissed types
3. Select highest-priority non-dismissed recommendation
4. Generate recommendation object: `{ type, title, description, cta, url }`
5. Generate `recommendationReason` explaining why this was selected

---

### Step 5: Update Journey State

- `completedQuestions` is updated with the answered question number
- `currentQuestion` advances to next question
- `progressPercentage` is recalculated
- `lastActivity` is updated
- `completedJourney` is set to `true` if all 10 questions answered

---

### Step 6: Update Oli

- `oli.expression` changes based on the answer
- `oli.animation` changes based on conversation stage
- `oli.mood` changes based on profile data
- `oli.lastMessage` is updated with the new Oli reaction
- `oli.context` is updated with latest profile data

---

### Step 7: Render UI

- Progress bar updates to new percentage
- Oli avatar animates to new expression
- Oli message appears with typing animation
- Current question fades out
- Next question fades in
- Career Snapshot sections update if visible

---

## 9. Validation Rules

---

### `profession`

| Rule | Value |
|---|---|
| **Minimum** | N/A (enum) |
| **Maximum** | N/A (enum) |
| **Allowed formats** | Exact match to allowed values |
| **Invalid values** | Any string not in the enum |
| **Fallback behavior** | Reject input, do not advance |
| **Missing value behavior** | Cannot advance to Q2 without valid profession |

---

### `country`

| Rule | Value |
|---|---|
| **Minimum** | N/A (enum) |
| **Maximum** | N/A (enum) |
| **Allowed formats** | Exact match to allowed values |
| **Invalid values** | Any string not in the enum |
| **Fallback behavior** | Reject input, do not advance |
| **Missing value behavior** | Cannot advance to Q3 without valid country |

---

### `experienceLevel`

| Rule | Value |
|---|---|
| **Minimum** | N/A (enum) |
| **Maximum** | N/A (enum) |
| **Allowed formats** | Exact match to allowed values |
| **Invalid values** | Any string not in the enum |
| **Fallback behavior** | Reject input, do not advance |
| **Missing value behavior** | Cannot advance to Q4 without valid experience |

---

### `currentSalary`

| Rule | Value |
|---|---|
| **Minimum** | 0 |
| **Maximum** | 1000000 |
| **Allowed formats** | Integer |
| **Invalid values** | Negative numbers, non-numeric, NaN |
| **Fallback behavior** | Clamp to nearest valid value (0 or 1000000) |
| **Missing value behavior** | Cannot advance to Q5 without valid salary |

---

### `salarySatisfaction`

| Rule | Value |
|---|---|
| **Minimum** | N/A (enum) |
| **Maximum** | N/A (enum) |
| **Allowed formats** | Exact match to allowed values |
| **Invalid values** | Any string not in the enum |
| **Fallback behavior** | Reject input, do not advance |
| **Missing value behavior** | Cannot advance to Q6 without valid satisfaction |

---

### `goals`

| Rule | Value |
|---|---|
| **Minimum** | 1 item |
| **Maximum** | 3 items |
| **Allowed formats** | Array of enum values |
| **Invalid values** | Empty array, items not in enum, more than 3 items |
| **Fallback behavior** | Reject input, do not advance |
| **Missing value behavior** | Cannot advance to Q7 without at least 1 goal |

---

### `aiConcernLevel`

| Rule | Value |
|---|---|
| **Minimum** | N/A (enum) |
| **Maximum** | N/A (enum) |
| **Allowed formats** | Exact match to allowed values |
| **Invalid values** | Any string not in the enum |
| **Fallback behavior** | Reject input, do not advance |
| **Missing value behavior** | Cannot advance to Q8 without valid concern level |

---

### `relocationOpen`

| Rule | Value |
|---|---|
| **Minimum** | N/A (boolean) |
| **Maximum** | N/A (boolean) |
| **Allowed formats** | `true` or `false` |
| **Invalid values** | Any non-boolean |
| **Fallback behavior** | Reject input, do not advance |
| **Missing value behavior** | Cannot advance to Q9 without valid relocation answer |

---

### `topSkill`

| Rule | Value |
|---|---|
| **Minimum** | N/A (enum, dynamic) |
| **Maximum** | N/A (enum, dynamic) |
| **Allowed formats** | Exact match to skill list for selected profession |
| **Invalid values** | Any string not in the profession's skill list |
| **Fallback behavior** | Reject input, do not advance |
| **Missing value behavior** | Cannot advance to Q10 without valid skill |

---

### `preferredNextStep`

| Rule | Value |
|---|---|
| **Minimum** | N/A (enum) |
| **Maximum** | N/A (enum) |
| **Allowed formats** | Exact match to allowed values |
| **Invalid values** | Any string not in the enum |
| **Fallback behavior** | Reject input, do not advance |
| **Missing value behavior** | Cannot complete journey without valid next step |

---

## 10. Privacy

### What Data Is Stored

- Career information (profession, experience, salary, goals)
- Preferences (skills, relocation interest, AI concern)
- Journey progress (questions answered, recommendations shown)
- No personally identifiable information (name, email, phone, address)

### Why It Is Stored

- To provide personalized career insights
- To enable journey resume across sessions
- To track recommendation engagement for product improvement

### How Long It Is Stored

- Journey data: 90 days (partial) or 365 days (completed)
- User Profile: indefinitely (until user deletes)
- Recommendation History: 365 days

### How Users Reset

- "Start Fresh" button clears all journey data and User Profile
- Confirmation dialog: "This will erase all your data. Are you sure?"
- After reset, user is treated as a new visitor

### How Users Restart

- "Start a New Journey" clears journey state but preserves User Profile
- User can retake questions with existing profile data
- Previous Career Snapshot is replaced

### How Users Delete Everything

- V1: No explicit delete UI. User clears browser localStorage.
- Future: "Delete My Data" button in settings page
- Deletion is immediate and irreversible
- All localStorage keys are removed

### No Personal Data Leaves the Browser in V1

- All calculations happen client-side
- No API calls are made with user data
- No analytics events include user salary or profession
- No server-side storage of user profiles

---

## 11. Future Extensibility

### Accounts

- Add `userId` field linked to authentication system
- Migrate localStorage data to server-side storage on account creation
- Enable cross-device sync
- Add `email`, `name` fields (optional)

### Career GPS

- Add `careerGoals` array with structured goal objects
- Add `milestones` array tracking progress toward goals
- Add `timeline` field for goal deadlines
- Add `careerPath` field for planned career moves

### Saved Dashboards

- Add `savedSnapshots` array storing multiple Career Snapshots over time
- Add `snapshotHistory` for tracking changes
- Enable comparison between snapshots

### AI Companion

- Add `conversationHistory` array storing all Oli interactions
- Add `personalityProfile` for Oli to remember user preferences
- Add `proactiveInsights` for Oli to surface unprompted recommendations

### Weekly Reports

- Add `reportPreferences` object for notification settings
- Add `weeklyDigest` array storing generated reports
- Add `alertThresholds` for triggering proactive notifications

### Community Data

- Add `anonymizedContribution` flag for contributing data to community insights
- Add `communityBenchmark` fields for comparing against anonymized peers
- No personal data is ever shared — only aggregated statistics

### Premium Features

- Add `subscriptionTier` field for access control
- Add `premiumFeatures` object for feature flags
- Add `usageLimits` for rate limiting premium features

---

## 12. Acceptance Criteria

| Criterion | Status |
|---|---|
| Every collected field is defined | ✅ 11 fields defined |
| Every inferred field is defined | ✅ 7 fields defined |
| Every computed field is defined | ✅ 13 fields defined |
| Every journey state field is defined | ✅ 11 fields defined |
| Every recommendation state field is defined | ✅ 6 fields defined |
| Every Oli state field is defined | ✅ 7 fields defined |
| Every field has data type | ✅ All fields typed |
| Every field has allowed values | ✅ All fields constrained |
| Every field has default value | ✅ All fields defaulted |
| Every field has source | ✅ All fields sourced |
| Every field has consumers | ✅ All fields consumed |
| Every computed field has formula | ✅ All formulas defined |
| Every computed field has dependencies | ✅ All dependencies listed |
| Every field has validation rules | ✅ All collected fields validated |
| Storage strategy defined | ✅ In-memory, localStorage, never-persisted categorized |
| Privacy policy defined | ✅ Full privacy section |
| Future extensibility mapped | ✅ 7 expansion paths documented |
| Engineers can build without asking Product questions | ⚠ Most gaps covered. Skill lists by profession need expansion. |

### Remaining Gaps

| # | Gap | Impact |
|---|---|---|
| 1 | Skill lists for professions beyond Software Engineer not fully enumerated | Medium — engineers need complete lists for Q9 |
| 2 | Oli expression/animation mapping to exact UI states not fully specified | Low — design team handles |
| 3 | `goalAlignmentScore` rules for `change-careers`, `work-life-balance`, `start-business` are neutral (50) — may need refinement | Low — can be improved in V2 |

---

*Last updated: July 2026*
*Owner: Olikit Product Team*
