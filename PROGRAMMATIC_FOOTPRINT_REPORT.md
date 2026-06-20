# PROGRAMMATIC FOOTPRINT REPORT — Phase 1

## Cluster A: "According to Olikit research" (162 matches)
**Severity: CRITICAL — Most recognizable AI/programmatic signal**

| File | Count | Example |
|------|-------|---------|
| `src/app/rankings/best-countries-for-software-engineers/` | 18 | "According to Olikit research, the United States scores well..." |
| `src/app/rankings/best-countries-for-data-scientists/` | 18 | Same structural pattern, profession swapped |
| `src/app/rankings/highest-paying-cities-software-engineers/` | 25 | per-city descriptions with identical closing formula |
| `src/app/rankings/highest-paying-cities-data-scientists/` | 27 | Same pattern with Melbourne/Berlin additions |
| `src/app/rankings/highest-paying-cities-product-managers/` | 25 | Same pattern, profession swapped |

**Similarity: ~95% across all 5 ranking files** — Each city block follows identical template:
1. "Direct Answer: According to Olikit research, [City] [verb] as a [adjective] [hub/center]..."
2. Paragraph about tech ecosystem
3. "However, wealth accumulation is affected by housing costs and state taxation."
4. Closing: "According to Olikit research, [City] can be a suitable environment for [profession]..."

## Cluster B: "Our free [tool] helps you make informed financial decisions" (9 matches)
**Severity: HIGH — Template leak in generators.ts**

| File | Line | Pattern |
|------|------|---------|
| `src/lib/content/generators.ts` | 60 | `Our free ${tool.name.toLowerCase()} helps you make informed financial decisions in ${locationName}. Whether you are planning your budget, evaluating a loan, or projecting investment growth...` |
| `src/lib/content/generators.ts` | 639 | `Our free salary calculator does this instantly for any salary amount` |
| `src/lib/content/generators.ts` | 813 | `Our free tax calculator applies current rates instantly` |
| `src/lib/content/locale-content.ts` | 7 places | `Our free salary calculator handles all ${ty} rates automatically` |

**Similarity: ~90%** — Same "Our free X helps you/does this/calculates" pattern with locale substitution.

## Cluster C: "Whether you are" / "Whether you're" (36 matches)
**Severity: HIGH — Repeated paragraph opener**

| File | Count | Example |
|------|-------|---------|
| `src/app/[locale]/page.tsx` | 5 | "Whether you are evaluating a new role in London, comparing salaries across the UK or planning a relocation..." |
| `src/app/page.tsx` | 1 | "Whether you are evaluating a job offer, planning an international move..." |
| `src/lib/content/generators.ts` | 2 | "Whether you are planning your budget, evaluating a loan..." |
| `src/lib/content/state-expansion.ts` | 2 | "Whether you are starting a new job, negotiating a raise..." |

**Similarity: ~85%** — Each locale heroDesc follows identical formula: "Research salaries, estimate take-home pay, compare [regions/provinces/professions]. Olikit combines salary benchmarks, tax insights, affordability research... Whether you are evaluating a role in [city], comparing opportunities across [country] or planning an international relocation..."

## Cluster D: "is suitable for" / "can be a suitable" (37 matches)
**Severity: MEDIUM — Repeated closing formula on city/country descriptions**

Every city description across 3 highest-paying-cities files closes with:
- "San Francisco can be a suitable environment for [profession] seeking career development..."
- "Singapore is suitable for experienced [profession] in the wealth accumulation phase."
- "[City] is suitable for [profession] prioritizing work-life balance..."
- "[City] can be a suitable destination for [profession] prioritizing tax efficiency..."

**Similarity: ~90%** — Same grammatical pattern, same position (final paragraph), same semantic closing.

## Cluster E: "make informed decisions" (36 matches)
**Severity: MEDIUM — Pervasive filler phrase**

Appears across: layout.tsx, generators.ts, locale-content.ts, page.tsx, state-expansion.ts, salary-vs-col.ts, comparison-engine.ts, profession pages

**Similarity: ~100%** — Exact same phrase, no variation.

## Cluster F: "comprehensive" as generic intensifier (59 matches)
**Severity: LOW-MEDIUM — Overused modifier**

Appears in: research page descriptions, guide descriptions, glossary, state overviews, comparison pages

## Cluster G: "Direct Answer: According to Olikit research" (69 matches)
**Severity: HIGH — Redundant framing**

Every explanatory paragraph on rankings pages begins with "Direct Answer: According to Olikit research," — this is the most robotic construction.

## Cluster H: Identical FAQ structure (7 matches in locale-content.ts)
**Severity: MEDIUM**

"How do I calculate my take-home pay after tax in [loc]?" follows identical answer template:
1. Start with gross salary
2. Deduct [tax type] using [year] progressive brackets
3. Subtract [specific deductions]
4. "Our free salary calculator applies all [year] rates automatically"

---

## Summary

| Cluster | Phrase | Count | Severity | Action |
|---------|--------|-------|----------|--------|
| A | "According to Olikit research" | 162 | CRITICAL | Remove or vary drastically |
| B | "Our free [tool] helps you..." | 9 | HIGH | Rewrite generator, remove template feel |
| C | "Whether you are/you're" | 36 | HIGH | Rewrite locale hero descriptions uniquely |
| D | "is suitable for" | 37 | MEDIUM | Vary closing formulas per city |
| E | "make informed decisions" | 36 | MEDIUM | Replace with specific language |
| F | "comprehensive" | 59 | LOW-MEDIUM | Replace with specific descriptors |
| G | "Direct Answer: According to Olikit research" | 69 | HIGH | Remove "Direct Answer:" prefix |
| H | "How do I calculate take-home pay" | 7 | MEDIUM | Vary FAQ questions per country |

**Total programmatic signals: ~415**
**Continue to remediation: YES — clusters identified.**
