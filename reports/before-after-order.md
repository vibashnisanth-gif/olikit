# Before-After Section Order

**Date:** 2026-06-29

## 1. Profession Pages (`src/components/profession-page.tsx`)

### Before
```
1. HeroSection
2. SalaryCardsSection       ← supporting data
3. KeyTakeawaysSection      ← editorial framing
4. InsightsSection          ← editorial framing
5. ProseSection             ← long-form explanation
6. SalaryTableSection       ← PRIMARY ANSWER (section 6 of 13)
7. ComparisonTableSection
8. CountryRankingSection
9. CountryCardsSection
10. FAQSection
11. MethodologySection
12. SourcesSection
13. RelatedPagesSection
```

### After
```
1. HeroSection
2. SalaryTableSection       ← PRIMARY ANSWER (section 2 of 13) ↑ moved up
3. SalaryCardsSection
4. KeyTakeawaysSection
5. InsightsSection
6. ProseSection
7. ComparisonTableSection
8. CountryRankingSection
9. CountryCardsSection
10. FAQSection
11. MethodologySection
12. SourcesSection
13. RelatedPagesSection
```

---

## 2. Tool Pages (`src/app/[locale]/tools/[tool]/page.tsx`)

### Before
```
1. Hero card (badge + H1 + intro)
2. DirectAnswer ("At a Glance")
3. AIAnswer ("Quick Answer")
4. Pills ("Also explore")
5. CalculatorInteractive    ← PRIMARY TOOL (section 5 of 8)
6. Steps ("How to Use")
7. Content sections + sidebar
8. Compare section
```

### After
```
1. Hero card (badge + H1 + intro)
2. DirectAnswer ("At a Glance")
3. CalculatorInteractive    ← PRIMARY TOOL (section 3 of 8) ↑ moved up
4. AIAnswer ("Quick Answer")
5. Pills ("Also explore")
6. Steps ("How to Use")
7. Content sections + sidebar
8. Compare section
```

---

## 3. Compare Page (`src/app/compare/page.tsx`)

### Before
```
1. Hero (H1 + description)
2. Disclaimer ("How to Interpret")
3. Country-to-Country Comparisons (link cards)
4. Salary Equivalent Comparisons (6 hardcoded pairs)
5. SalaryComparisonCalculator  ← PRIMARY TOOL (section 5 of 7)
6. Salary Comparison by Profession table  ← PRIMARY DATA (section 6 of 7)
7. Quick Country Facts
```

### After
```
1. Hero (H1 + description)
2. Disclaimer ("How to Interpret")
3. Salary Comparison by Profession table  ← PRIMARY DATA (section 3 of 7) ↑ moved up
4. SalaryComparisonCalculator            ← PRIMARY TOOL (section 4 of 7) ↑ moved up
5. Salary Equivalent Comparisons
6. Country-to-Country Comparisons
7. Quick Country Facts
```

---

## 4. Professions Hub (`src/app/professions/page.tsx`)

### Before
```
1. Hero (H1 + description)
2. Career Intelligence Hubs (3 link cards)
3. Popular Professions (card grid)
4. Highest Paying Professions table  ← PRIMARY DATA (section 4 of 5)
5. All Professions by Country
```

### After
```
1. Hero (H1 + description)
2. Highest Paying Professions table  ← PRIMARY DATA (section 2 of 5) ↑ moved up
3. Career Intelligence Hubs
4. Popular Professions
5. All Professions by Country
```

---

## Summary

| Page | Primary Answer Position Before | Primary Answer Position After | Improvement |
|------|-------------------------------|------------------------------|-------------|
| Profession pages | Section 6 of 13 | Section 2 of 13 | ↑ 4 positions |
| Tool pages | Section 5 of 8 | Section 3 of 8 | ↑ 2 positions |
| Compare page | Sections 5-6 of 7 | Sections 3-4 of 7 | ↑ 2 positions |
| Professions hub | Section 4 of 5 | Section 2 of 5 | ↑ 2 positions |
