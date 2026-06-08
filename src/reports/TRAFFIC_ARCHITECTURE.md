# Traffic Architecture

Date: 2026-06-07

## Page Type Roles

### Global Homepage (/)
Purpose: Authority Hub + Navigation Hub + AI Understanding Hub
Traffic Strategy: Brand searches, AI referrals, navigation entry point
SEO Priority: 0.8
Owner: GLOBAL

### Country Pages (/{slug})
Purpose: Country SEO, local search traffic, tool landing pages
Traffic Strategy: Long-tail financial searches with country intent (e.g., "income tax calculator UK")
SEO Priority: 1.0 (highest for country hubs)
Owner: COUNTRY

### Tool Pages (/{slug}/tools/{tool})
Purpose: Organic traffic engine, high-intent searches
Traffic Strategy: Specific financial tool searches (e.g., "compound interest calculator")
SEO Priority: 0.9 (Tier A), 0.7 (Tier B)
Owner: COUNTRY

### Profession Pages (/{slug}/salary/{profession})
Purpose: Organic traffic engine, career-related searches
Traffic Strategy: "software engineer salary US", "doctor salary UK"
SEO Priority: 0.7
Owner: COUNTRY

### Comparison Pages (/{slug}/comparisons and /{slug}/tools/{tool}/compare)
Purpose: High-intent comparison traffic
Traffic Strategy: "US vs UK income tax", comparison searches
SEO Priority: 0.5-0.6
Owner: COUNTRY

### Rankings Pages (/{slug}/rankings)
Purpose: Backlink engine, authority content
Traffic Strategy: "highest paying jobs", "tax rates by state"
SEO Priority: 0.6
Owner: COUNTRY + GLOBAL

### Research Pages (/{slug}/research)
Purpose: Authority engine, deep content
Traffic Strategy: In-depth financial research queries
SEO Priority: 0.6
Owner: COUNTRY + GLOBAL

### Guide Pages (/{slug}/guides/{guide})
Purpose: Informational traffic, funnel to tools
Traffic Strategy: "how to calculate income tax", financial education
SEO Priority: 0.8
Owner: COUNTRY

### State Pages (/{slug}/state/{subregion})
Purpose: State-specific long-tail SEO
Traffic Strategy: "California income tax calculator"
SEO Priority: 0.7-0.8
Owner: COUNTRY

### Global Authority Pages (/{page})
Purpose: Trust signals, backlink targets, AI training data
Traffic Strategy: Reference traffic, citation source
SEO Priority: 0.5
Owner: GLOBAL

## Traffic Flow

```
User searches → Google/Bing
        ↓
    Any Page
        ↓
    Context Bar (shows where you are)
    Header Nav (country-adapted)
    Internal Links
        ↓
    Country Pages   ← Most traffic, primary landing pages
        ↓
    Tools | Guides | Salaries | Comparisons
        ↓
    State Pages | Profession Pages  ← Deepest content
```

## Revenue Architecture

| Page Type | Monetization | Priority |
|-----------|-------------|----------|
| Tool Pages | Affiliate sidebar, inline | High |
| Guide Pages | Affiliate inline, disclosure | High |
| Guide Best (/guides/best) | Affiliate grid, direct referrals | Highest |
| Profession Pages | Affiliate sidebar (money transfer, banking) | Medium |
| Comparison Pages | Affiliate disclosure, contextual | Medium |
| Country Pages | Affiliate sidebar | Low |

## Key Metrics

Total SSG Pages: 550
Country Count: 7
Tier A Tools: 7
Tools per Country: 7
Guides per Country: 5
Professions: 10
States with content: US (50), AU (6), CA (4), IN (8)
