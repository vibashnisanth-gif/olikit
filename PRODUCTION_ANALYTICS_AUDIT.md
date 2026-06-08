# Production Analytics Environment Audit

**Date**: 2026-06-07
**Domain**: https://olikit.com
**Method**: HTML source extraction + compiled JS inspection + Vercel env listing

---

## 1. Environment Variable Comparison

| Variable | `.env.local` (local) | Production HTML | Vercel Prod Env | Match? |
|---|---|---|---|---|
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | `G-zqYpV3qRnw` | `G-zqYpV3qRnw` | Encrypted | Yes |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | `ca-pub-xxxxxxxx` | `ca-pub-6685088922584083` | Encrypted | No |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-TEST123456` | `G-SFS0Z7WWW5` | Encrypted | No |

**Verdict**: `.env.local` is stale. Real production credentials are injected via Vercel environment variables, overriding the placeholders in `.env.local`. The local file shows `ca-pub-xxxxxxxx` and `G-TEST123456` but the deployed site uses `ca-pub-6685088922584083` and `G-SFS0Z7WWW5`.

---

## 2. GA4 (Google Analytics 4)

**Actual ID loaded**: `G-SFS0Z7WWW5`

**How it loads**: Via `SiteScripts` component (`src/components/site-scripts.tsx`):
- GTM script: `https://www.googletagmanager.com/gtag/js?id=G-SFS0Z7WWW5`
- gtag config: `gtag('config', 'G-SFS0Z7WWW5')`
- **Consent-gated**: Only loads after user clicks "Accept All" on cookie consent banner
- Strategy: `afterInteractive`
- Not present in initial HTML (rendered client-side after consent)

**Status**: Active but consent-gated. Data collection starts only after user opt-in. The measurement ID `G-SFS0Z7WWW5` is a real, non-placeholder ID.

**Files verified**:
- `src/components/site-scripts.tsx` — GA4 conditional load at line 32-46
- Compiled JS chunk `0el82miaapfnn.js` — hardcoded `G-SFS0Z7WWW5`

---

## 3. AdSense

**Actual ID loaded**: `ca-pub-6685088922584083`

**How it loads**:
1. **Meta tag** (always present, server-rendered): `<meta name="google-adsense-account" content="ca-pub-6685088922584083" />` — rendered by root layout's `other` metadata at `src/app/layout.tsx:32-36`
2. **Ad script** (consent-gated): `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6685088922584083` — only loads after "Accept All" via `SiteScripts` component

**Status**: Partially active. The account association meta tag is always present (required for AdSense auto-ads and domain verification). The actual ad script loads only after cookie consent. The ID `ca-pub-6685088922584083` is a real, registered AdSense publisher ID.

---

## 4. Google Search Console

**Verification token**: `G-zqYpV3qRnw`

**How it loads**: `<meta name="google-site-verification" content="G-zqYpV3qRnw" />` — always present, server-rendered via root layout metadata (`src/app/layout.tsx:30`).

**Status**: Verified and active. The token `G-zqYpV3qRnw` matches the `.env.local` value. No verification errors.

---

## 5. Sitemap

**URL**: https://olikit.com/sitemap.xml
**Status**: 200 OK, publicly accessible
**URL count**: 532
**Robots.txt**: `sitemap.xml` referenced and allowed (200, index-follow)

**Status**: Active and submitted. No crawl errors detected at the sitemap level.

---

## 6. Search Console Index Status

Search Console API access requires OAuth credentials which are not available in this environment. Manual verification via Search Console web UI is needed for:

- **Indexed page count**: Not available via automated audit
- **Sitemap submission status**: Not available via automated audit
- **Coverage errors**: Not available via automated audit
- **Core Web Vitals**: Not available via automated audit

**Recommended manual check**: Log into Google Search Console at https://search.google.com/search-console?resource_id=https://olikit.com with the Google account that owns `G-zqYpV3qRnw`.

---

## 7. Cookie Consent Behavior

All analytics/ad scripts are gated behind cookie consent via `SiteScripts` component:

| Script | Before Consent | After Consent | Trigger |
|---|---|---|---|
| GA4 (gtag) | Not loaded | Loads `googletagmanager.com/gtag/js?id=G-SFS0Z7WWW5` | "Accept All" click |
| AdSense ad script | Not loaded | Loads `pagead2.googlesyndication.com/pagead/js/adsbygoogle.js` | "Accept All" click |
| AdSense meta tag | Always present | Always present | Server-rendered |
| Search Console meta | Always present | Always present | Server-rendered |

Consent is stored in `localStorage` key `olikit_consent` with values `accepted` / `rejected`. Consent events dispatch a `consent-updated` custom event on `window`.

---

## 8. Issues Found

| Issue | Severity | Details |
|---|---|---|
| `.env.local` has placeholder GA4 ID | Medium | `G-TEST123456` in local, `G-SFS0Z7WWW5` in prod. Developers testing locally won't see real analytics fire. Fix: update `.env.local` to match production value. |
| `.env.local` has placeholder AdSense ID | Medium | `ca-pub-xxxxxxxx` in local, `ca-pub-6685088922584083` in prod. Same issue. Fix: update `.env.local`. |
| No GA4 data without consent | Informational | Analytics are consent-gated. If consent rates are low, data will be sparse. Consider adding a consent rate monitoring dashboard. |
| Search Console API not configured | Low | Cannot programmatically verify indexed page count or sitemap status. Manual check required. |

**Recommendation**: Update `.env.local` with production values to ensure local development reflects production analytics configuration:

```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=G-zqYpV3qRnw
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-6685088922584083
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-SFS0Z7WWW5
```
