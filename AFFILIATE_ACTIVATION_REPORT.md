# Affiliate Activation Report

## Current Status

All 12 products in `src/lib/monetization/config.ts` have `placeholder: true`. No real referral URLs are configured. The monetization system is fully built and ready — but no affiliate revenue can be generated until each product has a valid referral link.

**Common blocker across all products:** The config contains placeholder URLs like `wise.com/invite/` — these are missing the referral ID parameter that identifies olikit.com as the referrer. Each affiliate program requires application, approval, and a unique tracked link.

---

## Product Activation Details

### 1. Wise (formerly TransferWise)

| Field | Value |
|---|---|
| Category | money-transfer |
| Priority | high |
| PLG Countries | us, uk, au, ca, nz, in, sg |
| Current URL | `placeholder: true` → wise.com/invite/ |
| Commission | Varies by region. Typically a one-time fee per referred customer who completes a transfer. Average £5-£50 per referral. |
| Cookie Duration | 90 days |

**Program details:** Wise operates its own affiliate program (no third-party network). Referral fees are paid when the referred user makes their first transfer above a minimum threshold.

**Application process:**

1. Go to [wise.com/affiliates](https://wise.com/affiliates/) or search for "Wise affiliate program".
2. Sign up with the olikit.com domain and provide site traffic information.
3. Wait for approval (typically 3-10 business days).
4. Once approved, generate tracked referral links in the affiliate dashboard.

**Credentials needed:**
- Wise affiliate account login.
- Unique referral ID or tracking parameter (e.g., `?ref=olikit`).

**Action plan:**

1. Apply to the Wise affiliate program at wise.com/affiliates.
2. Prepare site statistics (monthly visitors, page views, audience geography) to expedite approval.
3. Once approved, create a tracked link and replace the placeholder URL in `src/lib/monetization/config.ts`.
4. Set `placeholder: false` for the Wise entry.
5. Test the affiliate link end-to-end.

---

### 2. Revolut

| Field | Value |
|---|---|
| Category | banking |
| Priority | high |
| PLG Countries | us, uk, au, ca, nz, in, sg |
| Current URL | `placeholder: true` → revolut.com/referral/ |
| Commission | Varies. Typically £5-£15 per referral who signs up and meets minimum activity requirements. |
| Cookie Duration | 30-90 days |

**Program details:** Revolut offers an in-app referral program for users and also works with affiliate networks.

**Application process:**

1. Join Revolut's affiliate program via networks like Awin, Impact, or Partnerize — search for "Revolut affiliate program".
2. Alternatively, use Revolut's partner portal at [revolut.com/partners](https://www.revolut.com/partners/).
3. Submit an application with site details and traffic stats.

**Credentials needed:**
- Affiliate network account (e.g., Awin).
- Referral tracking code.

**Action plan:**

1. Register on an affiliate network that lists Revolut (check Awin first).
2. Apply to the Revolut program through that network.
3. Upon approval, generate the tracking link and update the config.

---

### 3. Remitly

| Field | Value |
|---|---|
| Category | money-transfer |
| Priority | medium |
| PLG Countries | us, uk, au, ca, nz, in, sg |
| Current URL | `placeholder: true` → remitly.com/invite/ |
| Commission | Typically $10-$30 per referred customer who completes a transfer. |
| Cookie Duration | 30 days |

**Program details:** Remitly operates through affiliate networks like Impact and Partnerize.

**Application process:**

1. Find Remitly on Impact or Partnerize affiliate networks.
2. Apply with site information.
3. Approval usually takes 1-2 weeks.

**Credentials needed:**
- Affiliate network access.
- Campaign ID or tracking link.

**Action plan:**

1. Locate Remitly on a major affiliate network.
2. Apply and await approval.
3. Generate tracked link, update config.

---

### 4. Trading 212

| Field | Value |
|---|---|
| Category | investment |
| Priority | high |
| PLG Countries | us, uk, au, ca, nz, in, sg |
| Current URL | `placeholder: true` → trading212.com/invite/ |
| Commission | Revenue share or CPA. Typically up to £100 per referred customer who deposits and trades. |
| Cookie Duration | 30-90 days |

**Program details:** Trading 212 has a well-known affiliate program with competitive commissions.

**Application process:**

1. Apply via the Trading 212 affiliate program landing page or through networks like Partnerize.
2. Complete the application form with site details.
3. Provide proof of traffic and audience demographics.

**Credentials needed:**
- Affiliate partner ID.
- Tracking sub-ID for performance analysis.

**Action plan:**

1. Apply to Trading 212 affiliate program.
2. Upon approval, generate the unique tracking URL.
3. Update config and test.

---

### 5. Interactive Brokers

| Field | Value |
|---|---|
| Category | investment |
| Priority | medium |
| PLG Countries | us, uk, au, ca, nz, in, sg |
| Current URL | `placeholder: true` → interactivebrokers.com/referral/ |
| Commission | Tiered. Lower of 50% of commission revenue or $200 per referred account. |
| Cookie Duration | 365 days (industry-leading) |

**Program details:** IB's affiliate program ("IBKR Referral Program") is generous but requires quality traffic.

**Application process:**

1. Visit [interactivebrokers.com/referral](https://www.interactivebrokers.com/en/index.php?f=5041).
2. Sign up for the Referral program.
3. Wait for manual review.

**Credentials needed:**
- IBKR Referral ID.
- Tracking code.

**Action plan:**

1. Apply directly via IBKR's referral program page.
2. Note that IB's approval process may be stricter — ensure the olikit.com domain has professional content and clear value.
3. Once approved, update config.

---

### 6. Wealthsimple

| Field | Value |
|---|---|
| Category | investment |
| Priority | medium |
| PLG Countries | ca, uk |
| Current URL | `placeholder: true` → wealthsimple.com/invite/ |
| Commission | Typically $25-$50 CAD per referred user who funds an account. |
| Cookie Duration | 90 days |

**Program details:** Wealthsimple's affiliate program is available through referral networks. Focus on Canada and UK traffic.

**Application process:**

1. Find Wealthsimple on Impact or Awin.
2. Apply with focus on Canadian and UK audience fit.
3. Approval may be quicker given the geographic alignment.

**Credentials needed:**
- Referral link with tracking parameter.

**Action plan:**

1. Locate Wealthsimple on an affiliate network.
2. Apply, highlighting Canadian/UK traffic.
3. Update config.

---

### 7. TurboTax

| Field | Value |
|---|---|
| Category | tax |
| Priority | high |
| PLG Countries | us, ca |
| Current URL | `placeholder: true` → turbotax.intuit.com/referral/ |
| Commission | CPA or revenue share. Can be $5-$20 per free user, $20-$50 per paid user. |
| Cookie Duration | 30 days |

**Program details:** TurboTax (Intuit) runs through the Intuit Affiliate Program on Impact.

**Application process:**

1. Join the Intuit affiliate program on the Impact platform.
2. Apply specifically for the TurboTax product.
3. Approval requires a website with tax-relevant content (olikit's salary and guide pages qualify well).

**Credentials needed:**
- Impact account with Intuit.
- Product-specific tracking links.

**Action plan:**

1. Register on Impact and find the Intuit/TurboTax program.
2. Highlight tax-relevant content during application.
3. Once approved, configure the TurboTax tracking link.

---

### 8. eToro

| Field | Value |
|---|---|
| Category | investment |
| Priority | medium |
| PLG Countries | us, uk, au, ca, nz, in, sg |
| Current URL | `placeholder: true` → etoro.com/invite/ |
| Commission | CPA or revenue share. Up to $1,000 per funded account in some regions. |
| Cookie Duration | 30 days |

**Program details:** eToro has a well-established affiliate program through networks like Partnerize or directly.

**Application process:**

1. Apply via eToro's partner portal.
2. Complete the application with site and audience details.
3. Approval may require a minimum traffic threshold.

**Credentials needed:**
- eToro partner ID.
- Tracking parameters.

**Action plan:**

1. Apply to eToro affiliate program.
2. Prepare site traffic documentation.
3. Update config upon approval.

---

### 9. Coinbase

| Field | Value |
|---|---|
| Category | crypto |
| Priority | low |
| PLG Countries | us, uk, au, ca, nz, in, sg |
| Current URL | `placeholder: true` → coinbase.com/invite/ |
| Commission | Typically $10-$50 per referred user who trades a minimum amount. |
| Cookie Duration | 30 days |

**Program details:** Coinbase runs its affiliate program through networks like ShareASale and Impact.

**Application process:**

1. Find Coinbase on ShareASale or Impact.
2. Apply — approval may be selective for crypto programs.
3. Some jurisdictions have restrictions; verify compatibility first.

**Credentials needed:**
- Tracking ID.
- Affiliate network account.

**Action plan:**

1. Locate Coinbase on an affiliate network.
2. Apply with site information.
3. Update config on approval.

---

### 10. PayPal

| Field | Value |
|---|---|
| Category | banking |
| Priority | low |
| PLG Countries | us, uk, au, ca, nz, in, sg |
| Current URL | `placeholder: true` → paypal.com/invite/ |
| Commission | Variable. Often CPA-based, $5-$10 per new active account. |
| Cookie Duration | 30 days |

**Program details:** PayPal's affiliate program is available through networks like Commission Junction (CJ) and Impact.

**Application process:**

1. Find PayPal on CJ Affiliate or Impact.
2. Apply — PayPal is selective and may require significant traffic.
3. Prioritize other products first due to PayPal's selectivity.

**Credentials needed:**
- Network affiliate ID.
- PayPal-specific tracking link.

**Action plan:**

1. Apply through a major affiliate network.
2. Expect a longer review cycle.
3. Update config on approval.

---

### 11. H&R Block

| Field | Value |
|---|---|
| Category | tax |
| Priority | medium |
| PLG Countries | us, ca |
| Current URL | `placeholder: true` → hrblock.com/referral/ |
| Commission | CPA. Typically $10-$25 per paid tax filing customer. |
| Cookie Duration | 30 days |

**Program details:** H&R Block's affiliate program is available through networks like Impact.

**Application process:**

1. Find H&R Block on Impact.
2. Apply with emphasis on US and Canadian tax-season traffic.
3. Approval is generally easier if the site has tax-related content.

**Credentials needed:**
- Tracking link with affiliate ID.

**Action plan:**

1. Locate H&R Block on Impact.
2. Apply during tax season for faster processing.
3. Update config.

---

### 12. NerdWallet

| Field | Value |
|---|---|
| Category | banking |
| Priority | low |
| PLG Countries | us |
| Current URL | `placeholder: true` → nerdwallet.com/invite/ |
| Commission | Typically CPA. Varies by product (credit cards, loans, banking). |
| Cookie Duration | 30 days |

**Program details:** NerdWallet is itself an affiliate publisher — their referral program may be through a network.

**Application process:**

1. NerdWallet's affiliate/referral program details are less publicly documented.
2. Investigate via the NerdWallet partner portal or through networks.

**Credentials needed:**
- Referral program tracking link.

**Action plan:**

1. Research NerdWallet's referral options — contact their partner team.
2. If unavailable, consider deprioritizing or removing the NerdWallet listing.
3. Update config if a program is found.

---

## Activation Priority Matrix

Tier 1 (High impact, apply immediately):
- Wise, Revolut, Trading 212, TurboTax

Tier 2 (Medium impact, apply within first month):
- Remitly, Interactive Brokers, Wealthsimple, eToro, H&R Block

Tier 3 (Nice to have, apply when time permits):
- Coinbase, PayPal, NerdWallet

**Rationale:** Tier 1 products align with the highest-traffic pages on olikit.com (money transfer, banking tools, investment calculators, tax guides). Activating these first will generate the quickest revenue with the most relevant audience.

---

## Global Configuration Change

Once each affiliate program is approved and a real URL is obtained, the change in `src/lib/monetization/config.ts` is:

```
{
  id: 'wise',
  name: 'Wise',
  // ...
  url: 'https://wise.com/invite/u/olikit123',  // real referral URL
  placeholder: false,  // set to false
}
```

This change alone activates the affiliate link throughout the site — all `TrackedLink` components and best-services listings will automatically use the real URL.
