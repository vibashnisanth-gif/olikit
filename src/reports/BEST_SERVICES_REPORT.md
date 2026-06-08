# Best Services Framework Report

## Status: ✅ COMPLETE (Design Document)

## Framework Design

### Scoring Methodology
Every ranking and "best of" list must score services based on:

### 1. Scoring Factors (weighted 0-100)
| Factor | Weight | Description |
|--------|--------|-------------|
| Fees & Pricing | 25% | Setup fees, monthly fees, transaction fees, FX margins |
| Features | 20% | Key features, unique offerings, user experience |
| Coverage | 15% | Geographic reach, currency support, service availability |
| Security | 15% | Regulation, licensing, insurance, data protection |
| User Experience | 10% | App ratings, ease of use, customer support quality |
| Value for Money | 10% | Overall cost-benefit analysis |
| Transparency | 5% | Clear pricing, no hidden fees, honest marketing |

### 2. Review Methodology
- Services are tested anonymously
- All fees calculated from live rate data
- User reviews aggregated from multiple sources
- Each service is re-evaluated quarterly
- Methodology published on each ranking page

### 3. Data Sources
- Service provider websites (fee schedules, terms)
- Regulatory filings (licenses, complaints)
- User reviews (aggregated from app stores, Trustpilot)
- Independent testing by Olikit team

### 4. Affiliate Disclosure
- Clearly state when links are affiliate links
- Never rank by affiliate payout
- Disclose: "We may earn a commission if you sign up through our links. This does not affect our rankings or recommendations."
- Show disclosure prominently at top of every ranking page

### Implementation
- Create `src/lib/monetization/scoring.ts` with scoring engine
- Create `src/lib/monetization/methodology.ts` with methodology text
- Add affiliate disclosure component
- Apply to money transfer, tax software, and investment platform rankings

## Files to Create
- `src/lib/monetization/scoring.ts`
- `src/lib/monetization/methodology.ts`
- `src/components/affiliate-disclosure.tsx`
