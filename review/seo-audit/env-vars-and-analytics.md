# Environment Variables & Third-Party Services Audit

## Current State (all empty)
```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION = "" (empty)
NEXT_PUBLIC_GA_MEASUREMENT_ID = "" (empty)
NEXT_PUBLIC_ADSENSE_CLIENT_ID = "" (empty)
```

## Impact

| Feature | File | Status | Risk |
|---------|------|--------|------|
| Google Search Console verification | `layout.tsx` — `verification.google` | **Not active** | No GSC data collection |
| Google Analytics 4 | `site-scripts.tsx` — GA4 script | **Not loaded** | No visitor analytics |
| Google AdSense | `site-scripts.tsx` — AdSense script | **Not loaded** | No ad revenue |
| AdSense meta tag | `layout.tsx` — `google-adsense-account` | **Not present** | No AdSense domain verification |

## Hardcoded Placeholder Values (in `locales.ts`)
- `googleAdsId: "ca-pub-xxxxxxxx"` — Placeholder, unused

## Recommendations
1. Set GSC verification via DNS TXT record or HTML tag
2. Set GA4 measurement ID to begin analytics collection
3. Set AdSense client ID for revenue generation
4. Consider cookie consent implementation (GDPR for UK/AU/EU visitors)
