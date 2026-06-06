# Conversion & UX Audit

## Call-to-Action Analysis
Every tool page generates a CTA block:
```
text: "Try our free {tool name} for {locationName}"
buttonLabel: "Calculate Now"
buttonHref: "/{locale}/{state/}{tool/}{slug}"
```

**Issues:**
1. **Tool pages link to themselves** — `/us/tools/salary-calculator` has CTA pointing to `/us/tools/salary-calculator`. This is circular and pointless.
2. **No secondary CTAs** — No newsletter signup, no "share this calculator", no "save results"
3. **No social sharing** — No Facebook/Twitter/LinkedIn share buttons
4. **No email capture** — No lead generation mechanism
5. **No "print results" or "export to PDF"** — Results can't be saved
6. **No interstitial or inline conversion points** — Only bottom-of-page CTA

## URL Structure
- `/us/tools/salary-calculator` — Standard pattern
- `/us/state/california/salary-calculator` — State tool pages
- `/us/tools/salary-calculator/compare` — Compare pages
- `/us/guides/salary-after-tax-by-country` — Guide pages
- `/about`, `/contact`, `/privacy-policy`, `/terms`, `/disclaimer` — Trust pages

## User Journey
1. Homepage → `/us` (redirect)
2. Select tool → `/us/tools/{slug}`
3. Enter values → see results
4. (Optional) Compare → `/us/tools/{slug}/compare`
5. (Optional) State → `/us/state/{state}/{tool}`

**Missing journey steps:**
- No onboarding for first-time users
- No guided tutorial
- No save/share results
- No back-navigation breadcrumbs in UI (schema exists but likely not rendered)
- No related tools suggestions at bottom
