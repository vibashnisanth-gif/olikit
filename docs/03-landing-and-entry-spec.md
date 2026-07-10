# Landing and Entry Specification

> This document defines exactly how users enter the Olikit Discovery Engine. It is the single source of truth for engineers building the first user experience. An engineer receiving this document should be able to build the complete landing experience without asking any product or UX questions.

---

## 1. Entry Strategy

Every possible way a user can enter the Discovery Engine is documented below. For each entry point, the document defines why the user arrived, what they expect, and how Olikit should respond.

---

### 1.1 Homepage

| Field | Definition |
|---|---|
| **Why the user arrived** | Browsing, exploring, or arrived from a brand search |
| **User intent** | Low — curious but not committed |
| **What Oli should know** | Nothing yet. This is a fresh start. |
| **Which journey starts** | Full 10-question journey from Q1 |
| **CTA shown** | "Discover Your Career Potential" — large, centered, primary button |
| **Welcome screen skipped?** | No. Full welcome sequence plays. |
| **Special behavior** | If user has completed a journey before (localStorage exists), show "Welcome back! Ready to continue?" with two options: "Continue" and "Start Fresh" |

---

### 1.2 Salary Pages

| Field | Definition |
|---|---|
| **Why the user arrived** | Searching for salary data for a specific profession |
| **User intent** | High — has a specific question about compensation |
| **What Oli should know** | Profession (from page context) |
| **Which journey starts** | Abbreviated 8-question journey. Q1 (Profession) is pre-filled from page context. Journey starts at Q2 (Country). |
| **CTA shown** | "See how your salary compares to the market" — inline banner below salary data |
| **Welcome screen skipped?** | Yes. User already has context. Jump to Q2 with message: "Let me learn a bit more about your situation." |
| **Pre-filled data** | `user.profession` = page profession |

---

### 1.3 Country Pages

| Field | Definition |
|---|---|
| **Why the user arrived** | Exploring a specific country's salary, tax, or cost of living data |
| **User intent** | Medium — interested in a specific market |
| **What Oli should know** | Country (from page context) |
| **Which journey starts** | Abbreviated 8-question journey. Q2 (Country) is pre-filled. Journey starts at Q1 (Profession). |
| **CTA shown** | "Find out what you'd earn in [Country]" — inline banner below country data |
| **Welcome screen skipped?** | Yes. Jump to Q1 with message: "Let me see what [Country] looks like for your profession." |
| **Pre-filled data** | `user.country` = page country |

---

### 1.4 Calculator Pages

| Field | Definition |
|---|---|
| **Why the user arrived** | Already using a tool — calculating take-home pay, tax, mortgage, etc. |
| **User intent** | Very high — actively doing calculations |
| **What Oli should know** | Tool type, country (from calculator context) |
| **Which journey starts** | Abbreviated 6-question journey. Q2 (Country) and Q4 (Salary) are pre-filled from calculator inputs. Journey starts at Q1 (Profession). |
| **CTA shown** | "Get a full career analysis" — floating CTA below calculator results |
| **Welcome screen skipped?** | Yes. Jump to Q1 with message: "I see you're calculating numbers for [Country]. Let me build a bigger picture." |
| **Pre-filled data** | `user.country` = calculator country, `user.currentSalary` = calculator input (if salary calculator) |

---

### 1.5 Comparison Pages

| Field | Definition |
|---|---|
| **Why the user arrived** | Comparing two countries, professions, or scenarios |
| **User intent** | High — actively evaluating options |
| **What Oli should know** | Countries or professions being compared (from page context) |
| **Which journey starts** | Abbreviated 7-question journey. Q1 (Profession) and Q2 (Country) are pre-filled from comparison context. Journey starts at Q3 (Experience). |
| **CTA shown** | "Get a personalized comparison" — inline CTA within comparison results |
| **Welcome screen skipped?** | Yes. Jump to Q3 with message: "You're comparing [Country A] and [Country B]. Let me personalize this for you." |
| **Pre-filled data** | `user.profession` = comparison profession (if applicable), `user.country` = primary comparison country |

---

### 1.6 Research Pages

| Field | Definition |
|---|---|
| **Why the user arrived** | Reading a research report or salary index |
| **User intent** | Medium-high — seeking authoritative information |
| **What Oli should know** | Research topic (from page context) |
| **Which journey starts** | Full 10-question journey. No pre-filling. User is in learning mode. |
| **CTA shown** | "Apply this research to your career" — end-of-article CTA |
| **Welcome screen skipped?** | No. Full welcome sequence. Message: "You just read about [topic]. Want to see how it applies to you?" |
| **Pre-filled data** | None |

---

### 1.7 Direct URL

| Field | Definition |
|---|---|
| **Why the user arrived** | Navigated directly to `/discover` — possibly from a saved link, email, or share |
| **User intent** | Variable — could be returning or new |
| **What Oli should know** | Check localStorage for existing journey data |
| **Which journey starts** | If returning: offer "Continue" or "Start Fresh". If new: full 10-question journey. |
| **CTA shown** | "Discover Your Career Potential" (new) or "Continue your journey" (returning) |
| **Welcome screen skipped?** | If returning and choosing "Continue": yes. Otherwise: no. |
| **Pre-filled data** | All previously saved answers (if continuing) |

---

### 1.8 Returning Visitor

| Field | Definition |
|---|---|
| **Why the user arrived** | Came back to continue or start a new journey |
| **User intent** | High — has demonstrated interest |
| **What Oli should know** | All previously saved answers from localStorage |
| **Which journey starts** | If journey was completed: offer "Start a new journey" or "Review your snapshot". If partially completed: offer "Continue where you left off" or "Start fresh". |
| **CTA shown** | "Welcome back!" with contextual options |
| **Welcome screen skipped?** | If continuing: yes. If starting fresh: no. |
| **Special behavior** | Oli says: "Welcome back! Last time you were exploring [profession] in [country]. Want to continue?" |

---

### 1.9 AI Search

| Field | Definition |
|---|---|
| **Why the user arrived** | Clicked a link from ChatGPT, Claude, Perplexity, or Google AI Overview |
| **User intent** | High — asked a specific question, got an answer with a link |
| **What Oli should know** | Likely profession and country (from search context if available via referrer) |
| **Which journey starts** | If referrer suggests specific profession/country: abbreviated journey with pre-filled Q1/Q2. Otherwise: full journey. |
| **CTA shown** | "Calculate your exact take-home pay" or "Compare this to your situation" — contextual to the AI answer |
| **Welcome screen skipped?** | Yes. User arrived from a specific answer. Skip to first relevant question with message: "You just learned about [topic]. Want to see what this means for you personally?" |
| **Pre-filled data** | Inferred from referrer context when possible |

---

### 1.10 Google Search

| Field | Definition |
|---|---|
| **Why the user arrived** | Clicked an organic search result |
| **User intent** | High — searched for a specific query, found Olikit |
| **What Oli should know** | Search query context (from landing page topic) |
| **Which journey starts** | If landing on a profession/country/tool page: abbreviated journey with pre-filling. If landing on homepage: full journey. |
| **CTA shown** | Contextual to the page they landed on (see entry points above) |
| **Welcome screen skipped?** | If landing on a specific page: yes. If homepage: no. |
| **Pre-filled data** | From page context |

---

## 2. URL Strategy

### Decision

The Discovery Engine lives at `/discover`.

### Justification

| Option | Verdict | Reason |
|---|---|---|
| `/` | ❌ | Homepage must remain the public-facing marketing page. Discovery is a separate experience. |
| `/discover` | ✅ | Clear, memorable, action-oriented. Matches the product philosophy of "discovery." |
| `/start` | ❌ | Implies a one-time action. The journey is repeatable. |
| `/onboarding` | ❌ | Implies setup, not discovery. Users don't "set up" a career. |
| `/quiz` | ❌ | Implies a test, not a journey. Users don't want to be quizzed. |
| `/journey` | ⚠ | Close second. But "discover" is more active and specific. |

### URL Behaviors

| Behavior | Specification |
|---|---|
| **Deep-link** | `/discover` loads the Landing screen. No query parameters needed for fresh start. |
| **Deep-link with state** | `/discover?continue=true` loads the Resume screen if data exists in localStorage. |
| **Browser refresh** | Resume from last saved state. No data loss. No restart. |
| **Browser back** | If mid-journey: go to previous question. If at Q1: go to Landing screen. If at Landing: navigate to previous page (browser history). |
| **Shareable URL** | `/discover` is the shareable URL. It always starts a fresh journey for the recipient unless they have their own localStorage data. |
| **Resume URL** | Not a separate URL. Resume behavior is determined by localStorage, not URL parameters. |
| **Post-completion URL** | After Career Snapshot, the URL remains `/discover`. The Career Snapshot is a screen state, not a separate route. |
| **After clicking recommendation** | URL changes to the recommended tool/page (e.g., `/us/tools/salary-calculator`). Discovery journey state is preserved in localStorage. |

---

## 3. Landing Screen

### Purpose

Convert a visitor into a participant. The Landing Screen must answer three questions in under 3 seconds:
1. What is this?
2. Why should I care?
3. What do I do next?

### Exact Copy

| Element | Copy |
|---|---|
| **Headline** | "Discover Your Career Potential" |
| **Subheadline** | "Answer 10 quick questions. Get a personalized career snapshot with salary insights, skill premiums, and your next best move." |
| **Supporting copy** | "Takes about 60 seconds. No signup required." |
| **Primary CTA** | "Start Discovering" |
| **Secondary CTA** | "See how it works" (links to methodology page) |

### Trust Indicators

- "Based on data from 7 countries"
- "21 professions tracked"
- "2,340+ data points"
- Small flag icons (US, UK, AU, CA, NZ, IN, SG)

### Expected Emotional Response

Curiosity + low commitment. The user should feel: "This is quick, easy, and might tell me something useful."

### Layout Hierarchy

1. Oli avatar (top center) — establishes personality
2. Headline (large, bold) — communicates value
3. Subheadline (medium, supporting) — explains what happens
4. Trust indicators (small, below subheadline) — builds confidence
5. Primary CTA (large, prominent) — drives action
6. Secondary CTA (small, below primary) — provides alternative

### Screen Goal

User clicks "Start Discovering."

### Success Condition

User clicks primary CTA within 10 seconds of page load.

### Failure Condition

User bounces without clicking any CTA. Bounce rate > 60% indicates copy or layout failure.

### Maximum Reading Time

5 seconds. If the user has not clicked within 5 seconds, the copy is too long or the value proposition is unclear.

---

## 4. Welcome Screen

### Purpose

Introduce Oli, set expectations, and transition to the first question. The Welcome Screen must feel like meeting a helpful guide, not starting a form.

### Exact Copy

| Element | Copy |
|---|---|
| **Oli message** | "Hey! I'm Oli. I'm going to help you discover your career potential." |
| **Oli follow-up** | "I'll ask you 10 quick questions about your career. Each one takes about 5 seconds." |
| **Oli closing** | "Ready? Let's go." |
| **CTA** | "Let's Go" |

### Dismiss Option

No dismiss option. The Welcome Screen is part of the journey. The only action is "Let's Go."

### Continue Option

If returning user with saved data: replace "Let's Go" with "Continue Where You Left Off." Add: "Welcome back! You were on question [X]. Ready to pick up where you left off?"

### Skip Option

No skip option. The Welcome Screen takes 3 seconds maximum. Skipping would feel abrupt.

### Animation

- Oli avatar fades in first (0.3s delay)
- Message appears with typing animation (0.5s)
- Follow-up appears after 1s pause
- CTA button fades in after closing message (0.3s)

### Transition

- User clicks "Let's Go"
- Welcome content slides up and fades out (0.3s)
- Question 1 slides in from bottom (0.3s)
- Progress bar appears (0.2s delay)

### What Oli Says

Exactly the three messages above. No variations. No dynamic content.

### What Oli Looks Like

- Circular avatar, 64px diameter
- Friendly, abstract character (not a face, not a robot)
- Subtle idle animation (gentle float or pulse)
- Located at top center of screen

### When It Disappears

After user clicks "Let's Go." Oli avatar remains visible throughout the journey but the Welcome message disappears.

### When It Returns

Oli avatar never disappears. Oli messages change with each question. The Welcome-specific copy never reappears.

---

## 5. First Question

### Why This Is Question 1

Profession is the single most important variable. Every calculation, recommendation, and insight depends on it. It must be collected first because:
- It enables immediate personalization from Q2 onward
- It creates the strongest "this is about me" signal
- It is the easiest question to answer (one tap)

### Why It Appears First

- Lowest cognitive load (everyone knows their profession)
- Highest data value (everything downstream depends on it)
- Creates immediate investment (user has answered something, now they want results)

### Expected Completion Time

3 seconds. Single tap on a profession card.

### What User Emotion It Creates

Recognition. The user sees their profession and thinks "Yes, that's me." This creates the first moment of personalization.

### What Data It Unlocks

- Profession-specific salary ranges
- Profession-specific skill premiums
- Profession-specific AI readiness scores
- Profession-specific career paths
- Profession-specific recommendations

### Transition to Question 2

- User taps profession card
- Card highlights with animation (0.2s)
- Oli message appears: "Great choice. Let me see what the data says about [profession]s." (0.3s)
- Progress bar fills to 10% (0.2s)
- Question 1 content slides up and fades out (0.3s)
- Question 2 slides in from bottom (0.3s)

---

## 6. Returning Users

### Journey Completed

| Scenario | Behavior |
|---|---|
| **Returns to `/discover`** | Show "Welcome back! You completed your Career Snapshot." Two options: "Review Your Snapshot" (loads Career Snapshot with saved data) and "Start a New Journey" (clears data, starts fresh). |
| **Returns to any other page** | No special behavior. Journey data is preserved but not surfaced. |

### Journey Partially Completed

| Scenario | Behavior |
|---|---|
| **Returns within 7 days** | Show "Welcome back! You were on question [X]. Ready to continue?" Two options: "Continue" and "Start Fresh." |
| **Returns after 7-30 days** | Same as above, but add: "Your answers from [date] are saved." |
| **Returns after 30+ days** | Show "Welcome back! Your previous journey is still saved, but the data may be outdated." Two options: "Use My Saved Answers" and "Start Fresh." Default to "Start Fresh." |

### Journey Abandoned

| Scenario | Behavior |
|---|---|
| **Abandoned at Q1-Q3** | Data is saved but considered low-value. If user returns within 7 days: offer continue or fresh start. If after 7 days: default to fresh start. |
| **Abandoned at Q4-Q7** | Data is saved with medium value. Offer continue or fresh start for 30 days. |
| **Abandoned at Q8-Q10** | Data is saved with high value. Offer continue for 90 days. |

### Different Browser

- No localStorage data exists
- Treated as a new visitor
- Full 10-question journey from Q1
- No reference to previous journey

### Incognito Mode

- No localStorage persistence
- Journey completes but data is lost on close
- If user completes journey: show Career Snapshot with message "Note: Your results are only saved for this session."
- No resume capability

### Expired Local Storage

- Data cleared or corrupted
- Treated as a new visitor
- No error message
- Full journey from Q1

### New Version of Journey

- If question count changes (e.g., 10 → 12 questions)
- If question order changes
- If scoring formula changes
- **Behavior:** Old saved data is invalidated. User starts fresh. No error message. Silent reset.
- **Detection:** Store a `version` field in localStorage. If version doesn't match current version, clear data.

### Returning After One Day

- Same as "Journey Partially Completed within 7 days"
- Offer continue or fresh start
- Oli: "Welcome back! Ready to continue where you left off?"

### Returning After One Month

- Same as "Journey Partially Completed after 30+ days"
- Warn about outdated data
- Default to fresh start
- Oli: "Welcome back! Your previous answers are still here, but the data may have changed. Want to start fresh?"

### Returning After Six Months

- Same as "Journey Partially Completed after 30+ days"
- Strongly recommend fresh start
- Oli: "Welcome back! It's been a while. Let's get you updated data."
- Default to "Start Fresh" with only a small "Use Old Data" link

---

## 7. Entry From Existing Pages

### 7.1 Salary Pages

| Field | Definition |
|---|---|
| **Trigger** | User scrolls past salary data or hovers on comparison section |
| **CTA** | "See how your salary compares to the market" — inline banner, appears after salary table |
| **Oli message** | "You're looking at [profession] salaries. Want me to personalize this for you?" |
| **Journey entry point** | Q2 (Country pre-filled from page context) |
| **Pre-filled data** | `user.profession` = page profession |

### 7.2 Country Pages

| Field | Definition |
|---|---|
| **Trigger** | User scrolls past salary overview or cost of living section |
| **CTA** | "Find out what you'd earn in [Country]" — inline banner below country data |
| **Oli message** | "You're exploring [Country]. Want to see how your career fits here?" |
| **Journey entry point** | Q1 (Profession — user selects) |
| **Pre-filled data** | `user.country` = page country |

### 7.3 Calculator Pages

| Field | Definition |
|---|---|
| **Trigger** | After user completes a calculation (not before — don't interrupt) |
| **CTA** | "Get a full career analysis" — floating CTA below calculator results |
| **Oli message** | "You just calculated your [take-home pay / tax / mortgage]. Want the bigger picture?" |
| **Journey entry point** | Q1 (Profession — user selects) |
| **Pre-filled data** | `user.country` = calculator country, `user.currentSalary` = calculator input (if applicable) |

### 7.4 Company Pages

| Field | Definition |
|---|---|
| **Trigger** | After user views company salary data or skill requirements |
| **CTA** | "Compare this to the market" — inline CTA below company data |
| **Oli message** | "You're looking at [Company]. Want to see how you compare to the market?" |
| **Journey entry point** | Q1 (Profession — user selects) |
| **Pre-filled data** | None (company context is not used in journey) |

### 7.5 Research Pages

| Field | Definition |
|---|---|
| **Trigger** | End of article, after user has scrolled to bottom |
| **CTA** | "Apply this research to your career" — full-width banner at article end |
| **Oli message** | "You just read about [topic]. Want to see how it applies to you?" |
| **Journey entry point** | Q1 (Profession — user selects) |
| **Pre-filled data** | None |

### 7.6 Comparison Pages

| Field | Definition |
|---|---|
| **Trigger** | After user views comparison results |
| **CTA** | "Get a personalized comparison" — inline CTA within comparison results |
| **Oli message** | "You're comparing [A] and [B]. Let me personalize this for your situation." |
| **Journey entry point** | Q3 (Experience — user selects) |
| **Pre-filled data** | `user.profession` = comparison profession (if applicable), `user.country` = primary comparison country |

### 7.7 Homepage

| Field | Definition |
|---|---|
| **Trigger** | Below the fold, after user scrolls past hero section |
| **CTA** | "Discover Your Career Potential" — large hero CTA |
| **Oli message** | None (Landing Screen handles messaging) |
| **Journey entry point** | Q1 (full journey) |
| **Pre-filled data** | None |

---

## 8. Local Storage Behavior

### When Progress Is Saved

- After every question answer
- After every "Skip" action
- After Welcome screen completion
- After Career Snapshot load
- Before user navigates away from `/discover`
- Before browser tab closes

### When Progress Is Restored

- On page load at `/discover`
- On browser refresh at `/discover`
- On back-navigation to `/discover`
- On resume link click (e.g., email link with `?continue=true`)

### When Progress Is Deleted

- When user clicks "Start Fresh"
- When journey version changes (old version incompatible)
- When user explicitly clears their data (settings page, if built)
- When localStorage exceeds 5MB (oldest journey data deleted first)

### When Progress Is Ignored

- When user navigates to any page other than `/discover`
- When user is on a pre-filled entry page (salary, country, calculator) — local journey data is not loaded, page context is used instead
- When user opens a new tab to a different page

### When Progress Is Updated

- After every question answer (overwrite previous state)
- After every Skip action (mark question as skipped)
- After every Back navigation (update current question index)
- After Career Snapshot load (mark journey as completed)

---

## 9. User Decision Tree

### New Visitor

```
New Visitor
    ↓
Arrives at /discover (or clicks CTA from another page)
    ↓
Landing Screen
    ↓
Clicks "Start Discovering"
    ↓
Welcome Screen
    ↓
Clicks "Let's Go"
    ↓
Q1 (Profession) — must answer
    ↓
Q2 (Country) — must answer
    ↓
Q3 (Experience) — must answer
    ↓
Q4 (Salary) — must answer
    ↓
Q5 (Satisfaction) — must answer
    ↓
Q6 (Goals) — must answer
    ↓
Q7 (AI Concern) — must answer
    ↓
Q8 (Relocation) — must answer
    ↓
Q9 (Skill) — must answer
    ↓
Q10 (Next Step) — must answer
    ↓
Analysis Screen (3 seconds)
    ↓
Career Snapshot
    ↓
Clicks Recommendation
    ↓
Navigates to Recommended Tool/Page
    ↓
Tool/Page may re-enter Discovery Engine (see Entry Strategy)
```

### Returning Visitor — Journey Completed

```
Returning Visitor (completed journey)
    ↓
Arrives at /discover
    ↓
Resume Screen: "Welcome back! You completed your Career Snapshot."
    ↓
Option A: "Review Your Snapshot"
    ↓
Career Snapshot loads with saved data
    ↓
Clicks Recommendation → Navigates to tool/page

Option B: "Start a New Journey"
    ↓
Clears saved data
    ↓
Landing Screen
    ↓
(continues as New Visitor)
```

### Returning Visitor — Journey Partially Completed

```
Returning Visitor (partial journey)
    ↓
Arrives at /discover
    ↓
Resume Screen: "Welcome back! You were on question [X]."
    ↓
Option A: "Continue"
    ↓
Loads at last answered question
    ↓
(continues journey from Q[X+1])

Option B: "Start Fresh"
    ↓
Clears saved data
    ↓
Landing Screen
    ↓
(continues as New Visitor)
```

### Pre-Filled Entry (from salary page, country page, etc.)

```
User on salary/country/calculator page
    ↓
Clicks inline CTA
    ↓
Navigates to /discover with page context
    ↓
Welcome Screen (abbreviated): "Let me learn a bit more about your situation."
    ↓
First un-prefilled question loads
    ↓
(continues journey with pre-filled data)
```

---

## 10. Success Criteria

The Landing Experience succeeds if:

1. **The visitor immediately understands Olikit's purpose.** Within 3 seconds of landing, the user knows Olikit helps with career intelligence. The headline and subheadline communicate this instantly.

2. **The visitor starts the journey.** The primary CTA is compelling enough to click. Click-through rate > 40% indicates success.

3. **The visitor never feels overwhelmed.** Each screen has one clear focus. No screen has more than one CTA. The user never has to make more than one decision at a time.

4. **The visitor understands why answering questions benefits them.** The Welcome Screen and each question's context make it clear: "Answering this helps me give you better insights." The user never feels like they're providing data for no reason.

5. **The visitor wants to continue.** After Q1, the user is curious enough to answer Q2. After Q2, curious enough for Q3. Drop-off rate per question must be < 10%.

---

## 11. Acceptance Criteria

This document is complete if:

| Criterion | Status |
|---|---|
| Every entry point is documented | ✅ 10 entry points defined |
| Every first-screen interaction is specified | ✅ Landing + Welcome fully specified |
| Every CTA is defined | ✅ All CTAs with exact copy |
| Every transition is documented | ✅ Entry → Landing → Welcome → Q1 transitions defined |
| Every returning-user scenario is documented | ✅ 9 scenarios defined |
| Engineers can build without asking product questions | ⚠ Most scenarios covered. Remaining gaps below. |

### Remaining Gaps (Minor)

| # | Gap | Impact |
|---|---|---|
| 1 | Oli avatar visual design not specified | Low — design team handles this |
| 2 | "See how it works" link destination not specified | Low — links to methodology page |
| 3 | Resume screen layout not fully specified | Medium — engineers need layout |
| 4 | Pre-filled question transition message variations not fully listed | Low — one example given per entry point |
| 5 | Version change detection logic not fully specified | Low — simple version field comparison |

---

*Last updated: July 2026*
*Owner: Olikit Product Team*
