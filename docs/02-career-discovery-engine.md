# Career Discovery Engine

> This document defines the most important interaction in Olikit. It is a complete product specification — not an engineering document. Every behavior, every transition, every edge case is defined here. This is the source of truth for what the Career Discovery Engine does and why.

---

## Purpose

Transform visitors from passive readers into active participants.

Every visitor should leave with:
- A personalized insight
- A recommended next action
- Curiosity to continue exploring

The Career Discovery Engine is the primary mechanism for converting casual visitors into engaged users. It is the first experience most users should have on Olikit. It is the product's heartbeat.

---

## Core Philosophy

The engine should feel like:

**"I am discovering my future."**

NOT:
- "I am filling out a form."
- "I am chatting with AI."
- "I am taking a survey."
- "I am completing a profile."

The experience must feel alive, personal, and revelatory. Every answer should feel like the product is learning something about the user — because it is. Every response from Oli should feel like genuine interest, not automated output.

The user should feel like they are uncovering something about themselves, not providing data to a machine.

---

## Interaction Rules

These rules are absolute. They do not bend.

1. **One question per screen.** Never show multiple questions at once. Never stack questions. One question, one screen, one focus.

2. **Every answer must immediately produce four things:**
   - **Animation** — visual confirmation that the input was received
   - **Feedback** — Oli reacts to the answer with context
   - **Progress update** — the progress bar moves, the count updates
   - **Oli reaction** — a brief, purposeful response that advances the journey

3. **The experience must feel alive.** No static screens. No loading spinners without context. Every transition has purpose.

4. **Answers must be tappable, not typable.** Minimize cognitive load. Maximize speed. The user should be able to complete the entire journey in under 60 seconds.

5. **Every question must earn the right to ask the next one.** If the user does not understand why a question is being asked, the question is wrong.

---

## Discovery Flow

```
Landing
    ↓
Welcome
    ↓
Question 1
    ↓
Question 2
    ↓
Question 3
    ↓
Question 4
    ↓
Question 5
    ↓
Question 6
    ↓
Question 7
    ↓
Question 8
    ↓
Question 9
    ↓
Question 10
    ↓
Analysis
    ↓
Career Snapshot
    ↓
Recommendation
    ↓
Another Discovery
```

The journey never naturally ends. The Career Snapshot always recommends one immediate next action. That action leads to another experience, which leads to another recommendation, which leads to another discovery. The loop is infinite.

---

## Question Principles

Questions must:
- Be answerable in under 3 seconds
- Use taps instead of typing whenever possible
- Reduce cognitive load with each answer
- Progressively personalize results as more data is collected
- Feel like the product is getting smarter with every answer

**Avoid:**
- Free-text inputs
- Multi-select with more than 6 options
- Questions that require domain knowledge
- Questions that feel like homework

**Prefer:**
- Single choice (tap one option)
- Multiple choice (tap up to 3 options)
- Sliders (drag to select range)
- Country picker (tap a flag)
- Salary slider (drag to select range)
- Experience selector (tap a level)

---

## Question Sequence

The first version uses exactly 10 questions. Each question is defined below with its complete specification.

---

### Question 1 — Profession

| Field | Definition |
|---|---|
| **Question ID** | `q1_profession` |
| **Purpose** | Identify the user's profession to personalize all salary, skill, and career data |
| **Question text** | "What do you do?" |
| **Input type** | Single choice — grid of profession cards with icons |
| **Available answers** | Software Engineer, Data Scientist, Product Manager, AI Engineer, Data Engineer, DevOps Engineer, Cloud Engineer, Cybersecurity Analyst, Machine Learning Engineer, Solutions Architect, Financial Analyst, Business Analyst, Project Manager, Doctor, Nurse, Other |
| **Validation** | Must select one option |
| **Data updated** | `user.profession`, `user.professionCategory` |
| **Why it exists** | Profession is the single most important variable for salary, skills, career paths, and recommendations. Everything downstream depends on this answer. |
| **Future recommendations unlocked** | Profession-specific salary data, skill premiums, career paths, AI readiness scores |

**Oli reaction:** "Great choice. Let me see what the data says about [profession]s."

---

### Question 2 — Country

| Field | Definition |
|---|---|
| **Question ID** | `q2_country` |
| **Purpose** | Identify where the user currently works to calculate take-home pay and cost of living |
| **Question text** | "Where do you work?" |
| **Input type** | Single choice — country flags with names |
| **Available answers** | United States, United Kingdom, Australia, Canada, New Zealand, India, Singapore |
| **Validation** | Must select one option |
| **Data updated** | `user.country`, `user.currency`, `user.taxSystem` |
| **Why it exists** | Country determines tax brackets, social contributions, cost of living, and salary benchmarks. Without this, calculations are meaningless. |
| **Future recommendations unlocked** | Country-specific tax calculators, cost of living comparisons, relocation scoring |

**Oli reaction:** "Got it. [Country] has interesting tax dynamics for [profession]s."

---

### Question 3 — Experience Level

| Field | Definition |
|---|---|
| **Question ID** | `q3_experience` |
| **Purpose** | Determine career stage to calibrate salary expectations and recommendations |
| **Question text** | "How experienced are you?" |
| **Input type** | Single choice — horizontal option list |
| **Available answers** | Entry Level (0-2 years), Mid Level (3-5 years), Senior (6-10 years), Lead/Principal (10+ years), Executive/VP |
| **Validation** | Must select one option |
| **Data updated** | `user.experienceLevel`, `user.seniorityMultiplier` |
| **Why it exists** | Experience level determines salary range, career stage, and what recommendations are relevant. An entry-level engineer needs different guidance than a principal engineer. |
| **Future recommendations unlocked** | Experience-adjusted salary data, promotion readiness scoring, career progression paths |

**Oli reaction:** "Perfect. That puts you in the [level] range."

---

### Question 4 — Current Salary

| Field | Definition |
|---|---|
| **Question ID** | `q4_salary` |
| **Purpose** | Establish baseline for gap analysis and improvement recommendations |
| **Question text** | "What is your annual salary?" |
| **Input type** | Slider — range from $20,000 to $500,000 with country-appropriate currency |
| **Available answers** | Any value within range, displayed in local currency |
| **Validation** | Must set slider (cannot skip) |
| **Data updated** | `user.currentSalary`, `user.salaryCurrency`, `user.salaryPercentile` |
| **Why it exists** | Without knowing current salary, we cannot calculate gap, improvement potential, or whether the user is underpaid. This is the foundation of the Career Score. |
| **Future recommendations unlocked** | Underpaid detection, salary negotiation guidance, wealth accumulation projections |

**Oli reaction:** "Thanks. Let me compare that to what others at your level are earning."

---

### Question 5 — Salary Satisfaction

| Field | Definition |
|---|---|
| **Question ID** | `q5_satisfaction` |
| **Purpose** | Gauge emotional context to prioritize recommendations |
| **Question text** | "How do you feel about your salary?" |
| **Input type** | Single choice — emoji-enhanced options |
| **Available answers** | Way too low, Slightly low, About right, Good, Excellent |
| **Validation** | Must select one option |
| **Data updated** | `user.salarySatisfaction`, `user.urgencyLevel` |
| **Why it exists** | Satisfaction determines urgency. A user who feels "way too low" needs different recommendations than one who feels "about right." This also affects the tone of Oli's responses. |
| **Future recommendations unlocked** | Urgency-based prioritization, emotional framing of recommendations |

**Oli reaction:** "I hear you. Let's see what we can do about that."

---

### Question 6 — Career Goals

| Field | Definition |
|---|---|
| **Question ID** | `q6_goals` |
| **Purpose** | Identify what the user wants to achieve to align recommendations |
| **Question text** | "What matters most to you right now?" |
| **Input type** | Multiple choice — select up to 3 |
| **Available answers** | Earn more money, Get promoted, Change careers, Relocate internationally, Improve work-life balance, Learn new skills, Start a business, Retire early |
| **Validation** | Must select 1-3 options |
| **Data updated** | `user.goals[]`, `user.goalPriority` |
| **Why it exists** | Goals determine which modules to activate. A user who wants to relocate needs Country Intelligence. A user who wants to earn more needs Salary Intelligence. Goals drive the entire recommendation engine. |
| **Future recommendations unlocked** | Goal-specific journeys, module prioritization, personalized dashboards |

**Oli reaction:** "Those are solid goals. Let me build a plan around them."

---

### Question 7 — AI Concern

| Field | Definition |
|---|---|
| **Question ID** | `q7_ai_concern` |
| **Purpose** | Assess AI anxiety and automation risk to provide relevant guidance |
| **Question text** | "How worried are you about AI replacing your job?" |
| **Input type** | Single choice — slider with labels |
| **Available answers** | Not worried at all, Slightly concerned, Moderately worried, Very worried, Extremely worried |
| **Validation** | Must set slider |
| **Data updated** | `user.aiConcernLevel`, `user.aiReadinessPriority` |
| **Why it exists** | AI anxiety is a major driver of career decisions. Users who are worried about AI need different guidance than those who are not. This also determines whether AI Intelligence recommendations are prioritized. |
| **Future recommendations unlocked** | AI readiness assessment, skill adaptation plans, future-proofing strategies |

**Oli reaction:** "That's a fair concern. Let me show you where your profession stands."

---

### Question 8 — Relocation Interest

| Field | Definition |
|---|---|
| **Question ID** | `q8_relocation` |
| **Purpose** | Determine if relocation is a factor to activate Country and Relocation Intelligence |
| **Question text** | "Would you consider moving to another country for better pay?" |
| **Input type** | Single choice — two large buttons |
| **Available answers** | Yes, I'm open to it / No, I'm staying put |
| **Validation** | Must select one option |
| **Data updated** | `user.relocationOpen`, `user.relocationPriority` |
| **Why it exists** | Relocation is the highest-leverage career move. If a user is open to it, Relocation Intelligence becomes the primary recommendation path. If not, we focus on domestic optimization. |
| **Future recommendations unlocked** | Country comparison journeys, relocation scoring, visa pathway guidance |

**Oli reaction (if yes):** "Smart thinking. Let me find the best countries for your profession."
**Oli reaction (if no):** "Totally understand. Let's maximize what you can earn right where you are."

---

### Question 9 — Top Skill

| Field | Definition |
|---|---|
| **Question ID** | `q9_skill` |
| **Purpose** | Identify the user's primary skill to calculate skill premium and learning recommendations |
| **Question text** | "What is your strongest skill?" |
| **Input type** | Single choice — grid of skill cards |
| **Available answers** | Dynamic based on profession. For Software Engineers: Python, JavaScript, TypeScript, React, Node.js, AWS, Docker, Machine Learning, System Design, Leadership. For other professions: profession-specific skill sets. |
| **Validation** | Must select one option |
| **Data updated** | `user.topSkill`, `user.skillPremium`, `user.skillCategory` |
| **Why it exists** | Skills drive salary premiums. A software engineer with ML skills earns 30% more than one without. This question determines skill-specific recommendations and learning paths. |
| **Future recommendations unlocked** | Skill premium analysis, learning roadmaps, certification recommendations |

**Oli reaction:** "Strong pick. [Skill] commands a solid premium in the market."

---

### Question 10 — Next Step

| Field | Definition |
|---|---|
| **Question ID** | `q10_next_step` |
| **Purpose** | Let the user choose their preferred next action to personalize the final recommendation |
| **Question text** | "What would you like to explore first?" |
| **Input type** | Single choice — option cards with icons |
| **Available answers** | See my salary breakdown, Compare countries, Check my AI risk, Explore career paths, Calculate take-home pay |
| **Validation** | Must select one option |
| **Data updated** | `user.preferredNextStep`, `user.initialRecommendation` |
| **Why it exists** | This question gives the user agency and ensures the first recommendation matches their interest. It also provides data on what users want most, informing product priorities. |
| **Future recommendations unlocked** | Direct path to chosen module, personalized dashboard layout |

**Oli reaction:** "Perfect. Let me put that together for you."

---

## Progress System

### Progress Bar

- **Position:** Top of screen, below header
- **Style:** Thin horizontal bar, fills left to right
- **Color:** Primary blue (#2563eb) on light gray (#e5e7eb)
- **Animation:** Smooth fill on each answer, not instant jump
- **Visibility:** Always visible, never hidden

### Percentage

- **Display:** "X%" next to or below the progress bar
- **Calculation:** `(currentQuestion / totalQuestions) × 100`
- **Rounding:** Round to nearest integer
- **Updates:** Animate from previous percentage to new percentage

### Question Count

- **Display:** "Question X of 10"
- **Position:** Below progress bar or integrated with percentage
- **Format:** Bold number for current, regular for total

### Estimated Remaining Time

- **Display:** "About X seconds left"
- **Calculation:** Based on average completion time per question (target: 5 seconds)
- **Updates:** Recalculate after each answer
- **Messaging:**
  - Questions 1-3: "About 40 seconds left"
  - Questions 4-6: "About 25 seconds left"
  - Questions 7-9: "About 15 seconds left"
  - Question 10: "Almost done!"

### Completion Celebration

- **Trigger:** After Question 10 is answered and analysis begins
- **Animation:** Progress bar fills to 100% with a subtle pulse
- **Message:** "Building your Career Snapshot..."
- **Duration:** 2-3 seconds before analysis screen appears

### Partial Completion

- **Save behavior:** Auto-save after every answer
- **Resume trigger:** User returns to the same URL
- **Resume behavior:** Start from last answered question, show "Welcome back" message
- **Data persistence:** Store all answers in localStorage and session

### Resume Later

- **If user closes mid-journey:** Save progress automatically
- **If user refreshes:** Resume from last saved question
- **If user returns days later:** Resume with "Picking up where you left off" message
- **If user clears localStorage:** Start fresh, no error message

---

## Oli Behavior

Oli is the voice of the Career Discovery Engine. Every reaction must feel purposeful, warm, and intelligent.

### Welcome

- **Message:** "Hey! I'm Oli. I'm going to help you discover your career potential. It takes about 60 seconds."
- **Tone:** Friendly, casual, confident
- **Animation:** Fade in with slight delay

### Question Transitions

- **Before each question:** Brief transition animation (slide or fade)
- **After each answer:** Immediate visual confirmation
- **Oli reaction:** 1-2 sentences, always contextual, never generic

### Correct Answer

- **No reaction.** The answer is always "correct." There are no wrong answers. Oli does not judge.

### Interesting Answer

- **If salary is notably high:** "Wow, that's impressive for your experience level."
- **If salary is notably low:** "Interesting. I think I can help you with that."
- **If goals are ambitious:** "I love the ambition. Let's build a plan."
- **If AI concern is high:** "That's a valid concern. Let me show you the data."
- **If relocation is open:** "Great option. The data has some surprises."

### Thinking

- **During analysis:** "Crunching the numbers..." / "Looking at the data..." / "Building your snapshot..."
- **Duration:** 2-3 seconds maximum
- **Animation:** Subtle pulse or dots animation

### Analysis

- **During Career Snapshot build:** "Here's what I found..." (with progressive reveal)
- **Tone:** Revelatory, not clinical

### Result

- **Message:** "Here's your Career Snapshot."
- **Tone:** Confident, clear, actionable

### Celebration

- **After recommendation click:** "Great choice. Let's dig in."
- **Tone:** Encouraging, supportive

### Return Visit

- **Message:** "Welcome back! Ready to continue exploring?"
- **Tone:** Warm, familiar, not repetitive

---

## Analysis Screen

Never instantly reveal results. The analysis screen creates anticipation and makes the results feel earned.

### Loading Sequence

| Step | Duration | Message | Animation |
|---|---|---|---|
| 1 | 0.5s | "Analyzing your data..." | Spinner with pulsing dots |
| 2 | 0.8s | "Comparing to [X] professionals..." | Counter incrementing |
| 3 | 0.7s | "Calculating your Career Score..." | Score counter counting up |
| 4 | 0.5s | "Building your Career Snapshot..." | Cards assembling |
| 5 | 0.5s | "Ready." | Fade to results |

**Total duration:** 3.0 seconds (not adjustable, not skippable)

### Animation

- Progressive reveal of Career Snapshot sections
- Each section fades in from bottom
- Staggered timing (0.2s between sections)
- Score counter animates from 0 to final value
- Salary numbers count up from 0

### Dataset Analysis Order

1. Match profession to salary database
2. Match country to tax brackets
3. Calculate take-home pay
4. Compare to profession average
5. Calculate percentile
6. Assess AI readiness
7. Calculate skill premium
8. Generate recommendations
9. Build Career Snapshot

### Transition

- Analysis screen fades out
- Career Snapshot fades in
- First recommendation highlights with subtle glow

---

## Career Snapshot

The Career Snapshot is the primary output of the Career Discovery Engine. It is a personalized dashboard that shows the user their career position and next steps.

### Section 1 — Career Score

| Field | Definition |
|---|---|
| **Title** | "Your Career Score" |
| **Value** | 0-100 score |
| **Display** | Large number with ring/gauge visualization |
| **Color coding** | Red (0-40), Yellow (40-60), Green (60-80), Blue (80-100) |
| **Source** | Composite of salary percentile, skill premium, AI readiness, goal alignment |
| **Calculation** | `salaryPercentile × 0.3 + skillPremiumScore × 0.25 + aiReadinessScore × 0.25 + goalAlignmentScore × 0.2` |
| **Context** | "You're ahead of X% of [profession]s" |

### Section 2 — Salary Potential

| Field | Definition |
|---|---|
| **Title** | "Your Salary Potential" |
| **Current salary** | User-provided value, displayed in local currency |
| **Market average** | Average for profession + country + experience |
| **Top 10%** | Salary at 90th percentile for profession + country |
| **Display** | Three horizontal bars, visual comparison |
| **Source** | Olikit salary database, filtered by profession + country + experience |
| **Gap indicator** | Arrow showing direction and magnitude of gap |

### Section 3 — Take-Home Pay

| Field | Definition |
|---|---|
| **Title** | "What You Actually Take Home" |
| **Gross salary** | User-provided value |
| **Income tax** | Calculated from country tax brackets |
| **Social contributions** | Calculated from country-specific rates |
| **Net pay** | Final take-home amount |
| **Effective tax rate** | Percentage of gross paid in taxes |
| **Display** | Horizontal stacked bar (tax, contributions, net) |
| **Source** | Olikit tax calculator, official 2025-2026 brackets |

### Section 4 — Top Countries

| Field | Definition |
|---|---|
| **Title** | "Best Countries for Your Profession" |
| **Content** | Top 3 countries ranked by take-home pay for user's profession |
| **Display** | Three country cards with flags, salary, take-home, tax rate |
| **Source** | Olikit salary database × tax calculator |
| **Conditional** | Only shown if user indicated relocation openness |

### Section 5 — Top Skills

| Field | Definition |
|---|---|
| **Title** | "Skills That Increase Your Earning" |
| **Content** | Top 3 skills with highest salary premium for user's profession |
| **Display** | Three skill cards with premium percentage and learning time |
| **Source** | Olikit skill premium database |
| **Conditional** | Always shown |

### Section 6 — AI Readiness

| Field | Definition |
|---|---|
| **Title** | "Your AI Readiness" |
| **Score** | 0-100 score based on profession automation risk + skill alignment |
| **Risk level** | Low / Medium / High / Critical |
| **Recommendation** | One specific action to improve AI readiness |
| **Display** | Gauge visualization with risk label |
| **Source** | Olikit AI readiness model, profession automation data |
| **Conditional** | Always shown |

### Section 7 — Promotion Readiness

| Field | Definition |
|---|---|
| **Title** | "Your Promotion Readiness" |
| **Score** | 0-100 score based on experience + skills + market signals |
| **Readiness level** | Not Ready / Getting Ready / Ready / Overdue |
| **Key gap** | One specific skill or experience needed |
| **Display** | Progress bar with label |
| **Source** | Olikit career progression model |
| **Conditional** | Only shown if experience level is Mid or Senior |

### Section 8 — Confidence Level

| Field | Definition |
|---|---|
| **Title** | "How Confident Should You Be?" |
| **Score** | Based on data quality, sample size, profession coverage |
| **Display** | Label: High / Medium / Low confidence |
| **Context** | "Based on X data points for [profession]s in [country]" |
| **Source** | Data quality metrics from Olikit database |

### Section 9 — Recommended Next Action

| Field | Definition |
|---|---|
| **Title** | "Your Next Step" |
| **Content** | ONE specific, contextual recommendation |
| **Display** | Large action card with icon, title, description, CTA button |
| **Source** | Recommendation engine based on all user data |
| **Priority rules** | See Recommendation Engine Integration section below |

---

## Recommendation Engine Integration

Every result must recommend ONE immediate next action. The recommendation must be contextual, relevant, and compelling.

### Priority Rules

Recommendations are selected based on the following priority hierarchy:

| Priority | Condition | Recommendation |
|---|---|---|
| 1 | User selected "See my salary breakdown" | Open Salary Intelligence dashboard |
| 2 | User is underpaid (below 40th percentile) | "You're underpaid. See what others earn." → Salary Comparison |
| 3 | User is open to relocation | "Your salary could be X% higher in [country]." → Country Comparison |
| 4 | User has high AI concern | "Here's how to future-proof your career." → AI Career Report |
| 5 | User wants to get promoted | "You're X months from promotion readiness." → Career Roadmap |
| 6 | User has low skill premium | "Adding [skill] could increase your salary by X%." → Skill Learning Path |
| 7 | User has good salary but low savings potential | "You earn well, but where does the money go?" → Wealth Calculator |
| 8 | User has high salary satisfaction | "You're doing well. Here's how to compound it." → Wealth Intelligence |
| 9 | Default | "Compare your salary to [related profession]." → Profession Comparison |

### Recommendation Display

- **Position:** Bottom of Career Snapshot, always visible
- **Style:** Large card with icon, title, one-line description, CTA button
- **CTA text:** Action-oriented ("Compare Countries", "Calculate Take-Home", "Explore Career Path")
- **Animation:** Subtle glow or pulse to draw attention

### Post-Click Behavior

- **If user clicks recommendation:** Navigate to recommended tool/page with pre-filled context from Career Snapshot
- **If user dismisses recommendation:** Show secondary recommendation (next priority in list)
- **If user ignores recommendation:** Recommendation stays visible, does not expire

---

## Completion Rules

A journey is successful if all three conditions are met:

1. **The user receives a personalized insight.** The Career Snapshot must contain at least one data point that is unique to the user's answers. Generic content is a failure.

2. **The user clicks at least one recommendation.** The recommendation must be compelling enough to earn a click. If the user does not click, the recommendation was wrong.

3. **The user leaves knowing what to do next.** The final screen must leave the user with a clear, specific next action. "Explore more" is not a next action. "Compare your salary to Singapore" is.

---

## Edge Cases

### Skip

- **Behavior:** Allow skipping any question except Q1 (Profession) and Q2 (Country)
- **Impact:** Skipped questions produce less personalized results
- **Message:** "No problem. I'll work with what I have."
- **UI:** "Skip" link below options, smaller than primary options

### Back

- **Behavior:** Allow going back to any previous question
- **Impact:** All subsequent answers are preserved but may be re-evaluated
- **UI:** Back arrow in top-left corner, always visible after Q1

### Close

- **Behavior:** Auto-save all answers. Show "Your progress is saved" toast.
- **Resume:** Next visit resumes from last answered question
- **No error message.** Closing is normal behavior.

### Refresh

- **Behavior:** Resume from last saved question
- **Message:** "Picking up where you left off..."
- **No data loss.** All answers are preserved.

### Resume

- **Trigger:** User returns to discovery URL
- **Behavior:** Skip Welcome, start from last answered question
- **Message:** "Welcome back! Let's continue."
- **Progress bar:** Shows correct progress based on saved answers

### Mobile Interruption

- **Behavior:** Same as refresh — auto-save and resume
- **Phone call:** Pause journey, save state, resume when user returns
- **App switch:** Pause journey, save state, resume when user returns
- **No timeout.** Journey never expires.

### Offline

- **Behavior:** Allow completing journey with cached data
- **Limitation:** Cannot fetch real-time salary data
- **Fallback:** Use last-known cached data
- **Message:** "Working offline. Results may be slightly outdated."

### No Data Available

- **Trigger:** Profession + country combination has insufficient data
- **Behavior:** Show best available data with confidence indicator
- **Message:** "I don't have enough data for [profession]s in [country] yet. Here's what I can tell you based on similar professions."
- **Alternative:** Show global average for the profession

---

## Success Metrics

Track every interaction to optimize the engine over time.

### Journey Metrics

| Metric | Definition | Target |
|---|---|---|
| **Journey Starts** | Number of users who begin the discovery flow | Track growth |
| **Journey Completion Rate** | % of users who complete all 10 questions | > 70% |
| **Drop-off by Question** | % of users who abandon at each question | < 10% per question |
| **Average Completion Time** | Time from Q1 to Career Snapshot | < 60 seconds |
| **Skip Rate** | % of users who skip any question | < 15% |
| **Back Rate** | % of users who go back to a previous question | < 20% |

### Engagement Metrics

| Metric | Definition | Target |
|---|---|---|
| **Recommendation CTR** | % of users who click the recommended next action | > 40% |
| **Next Tool Click** | % of users who click through to a tool after Career Snapshot | > 50% |
| **Pages per Journey** | Average pages visited after completing discovery | > 3 |
| **Return Journey Rate** | % of users who complete a second journey within 30 days | > 20% |

### Quality Metrics

| Metric | Definition | Target |
|---|---|---|
| **Personalization Score** | % of Career Snapshot that is unique to user answers | > 80% |
| **Data Confidence** | Average confidence level across all metrics | > 70% |
| **Recommendation Relevance** | % of users who rate recommendation as "helpful" | > 60% |

---

*Last updated: July 2026*
*Owner: Olikit Product Team*
