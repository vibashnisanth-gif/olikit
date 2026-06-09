# Rankings Audit Report — V11

## Scope

Audit every page that computes or displays salary/country/profession rankings.

---

## Global Rankings Page (`/rankings`)

### Before Fix (PRODUCTION BUG)

**Country average salary logic (lines 31-38):**
```typescript
const salaries = professions
  .map((p) => p.salaries[c.slug]?.average)
  .filter((s): s is number => typeof s === "number")
const avg = Math.round(salaries.reduce((a, b) => a + b, 0) / salaries.length)
```

Bug: Values in INR (India), SGD (Singapore), etc. were treated as USD. India's ₹772k average appeared as `$772k`.

**Resulting ranking order (BROKEN):**
1. India — $772k (₹772k INR, actually ~$9.3k USD)
2. Singapore — $83k (S$83k, actually ~$61k USD)
3. Australia — $96k (A$96k, actually ~$64k USD)
4. US — $106k
5. NZ — $94k (NZ$94k, actually ~$56k USD)
6. Canada — $83k (C$83k, actually ~$61k USD)
7. UK — $46k (£46k, actually ~$58k USD)

### After Fix

All salaries converted to USD before averaging.

**Correct ranking order:**
1. US — ~$106k USD
2. Australia — ~$64k USD
3. Canada — ~$61k USD
4. Singapore — ~$61k USD
5. UK — ~$58k USD
6. New Zealand — ~$56k USD
7. India — ~$9k USD

---

## Profession Rankings (Software Engineer / Doctor)

### Before Fix
| Country | Raw Value | Displayed As | Rank |
|---|---|---|---|
| India | ₹1,200,000 | $1,200k | #1 |
| US | $120,000 | $120k | #3 |
| UK | £55,000 | $55k | #7 |

### After Fix
| Country | Raw Value | USD | Rank |
|---|---|---|---|
| US | $120,000 | $120k | #1 |
| Australia | A$110,000 | $74k | #2 |
| Singapore | S$72,000 | $53k | #3 |
| New Zealand | NZ$95,000 | $57k | #4 |
| Canada | C$85,000 | $62k | #5 |
| UK | £55,000 | $70k | #6 |
| India | ₹1,200,000 | $14.4k | #7 |

---

## Locale Rankings Page (`/[locale]/rankings`)

This page is a **hub page with navigation links** — it does NOT compute any salary/country rankings. No bug.

---

## Comparison Engine Rankings

### Before Fix
India vs Singapore salary comparison claimed "India salaries are 525% higher" — completely inverted.

### After Fix
Singapore salaries correctly shown as ~887% higher (S$72k ≈ $53k USD vs ₹450k ≈ $5.4k USD).

---

## Homepage Rankings/Widgets

The homepage (`src/app/page.tsx`) renders salary data with correct currency symbols:
- US → `$120k`
- India → `₹12.0L`
- Singapore → `S$72k`

No ranking computation on homepage — only display. No bug.

---

## Verification Method

- Static analysis of all ranking computation code
- Manual USD conversion validation against exchange rates
- Build-time sanity validation (`scripts/validate-salary-sanity.ts`) now catches future violations
