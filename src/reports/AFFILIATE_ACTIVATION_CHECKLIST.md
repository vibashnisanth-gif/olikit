# Affiliate Activation Checklist

## Status: ⚠️ DEFERRED

## Current State
The affiliate infrastructure claimed in V1 (monetization config, affiliate sidebar, affiliate inline components, product registry) does **not exist** in the codebase. The only monetization-related code is AdSense via `site-scripts.tsx` and `cookie-consent.tsx`.

## Providers to Audit
| Provider | Type | Priority | Status |
|----------|------|----------|--------|
| Wise (TransferWise) | Money Transfer | HIGH | No affiliate code exists |
| Revolut | Money/Finance | HIGH | No affiliate code exists |
| Remitly | Money Transfer | MEDIUM | No affiliate code exists |
| Trading 212 | Investment | HIGH | No affiliate code exists |
| TurboTax | Tax Software | HIGH | No affiliate code exists |
| Wealthsimple | Investment | MEDIUM | No affiliate code exists |
| Interactive Brokers | Investment | MEDIUM | No affiliate code exists |
| eToro | Investment | MEDIUM | No affiliate code exists |
| Coinbase | Crypto | LOW | No affiliate code exists |
| PayPal | Payments | LOW | No affiliate code exists |

## Activation Steps Required
1. Create `src/lib/monetization/config.ts` with product definitions
2. Create `src/lib/monetization/registry.ts` for smart filtering
3. Create `src/lib/monetization/types.ts` for type definitions
4. Create affiliate sidebar component
5. Create affiliate inline component
6. Insert affiliate placements on relevant pages
7. Add affiliate disclosure component
8. Test affiliate links
9. Set up click tracking
10. Monitor conversion rates

## Highest Revenue Opportunities (Estimated)
1. **Trading 212** — High-value referral fees (£50-100 per funded account)
2. **TurboTax** — Commission per tax filing ($5-15 per referral)
3. **Wise** — Fee-free transfer referrals ($10-50 per new customer)
4. **Interactive Brokers** — Per-account referral fees

## Recommendation
Build monetization infrastructure as a separate sprint. Estimated: 2-3 days.
