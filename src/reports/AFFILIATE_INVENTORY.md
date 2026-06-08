# AFFILIATE INVENTORY

**Date:** 2026-06-07
**Status:** ⛔ ALL PLACEHOLDER

## Products

| Product | Category | Priority | Countries | Referral URL | Status |
|---------|----------|----------|-----------|-------------|--------|
| Wise | money-transfer | 🔴 high | all 7 | `https://wise.com/invite/` | ⛔ placeholder |
| Revolut | banking | 🔴 high | all 7 | `https://revolut.com/referral/` | ⛔ placeholder |
| Remitly | money-transfer | 🟡 medium | all 7 | `https://remitly.com/invite/` | ⛔ placeholder |
| Trading 212 | investment | 🔴 high | all 7 | `https://trading212.com/invite/` | ⛔ placeholder |
| TurboTax | tax | 🔴 high | us, ca | `https://turbotax.intuit.com/referral/` | ⛔ placeholder |
| Wealthsimple | investment | 🟡 medium | ca, uk | `https://wealthsimple.com/invite/` | ⛔ placeholder |
| Interactive Brokers | investment | 🟡 medium | all 7 | `https://interactivebrokers.com/referral/` | ⛔ placeholder |
| eToro | investment | 🟡 medium | all 7 | `https://etoro.com/invite/` | ⛔ placeholder |
| Coinbase | crypto | 🟢 low | all 7 | `https://coinbase.com/invite/` | ⛔ placeholder |
| PayPal | banking | 🟢 low | all 7 | `https://paypal.com/invite/` | ⛔ placeholder |
| H&R Block | tax | 🟡 medium | us, ca | `https://hrblock.com/referral/` | ⛔ placeholder |
| NerdWallet | banking | 🟢 low | us | `https://nerdwallet.com/invite/` | ⛔ placeholder |

## Required Actions

For each product, obtain a real affiliate referral URL and update `src/lib/monetization/config.ts`:

1. Register for each affiliate program
2. Replace `referralUrl` with the real tracked URL
3. Set `placeholder: false`
4. Verify links resolve

## Infrastructure Status

- Affiliate sidebar component: ✅ Built, shown on tool pages
- Best Services page: ✅ Built, shown at `/${slug}/guides/best`
- Disclosure component: ✅ Built, shown on all affiliate-linked pages
- GA4 click tracking: ⛔ Not implemented (Phase 3)
- Placeholder badge: ⛔ Still showing (remove after activation)
