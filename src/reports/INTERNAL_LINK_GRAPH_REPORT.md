# INTERNAL LINK GRAPH REPORT

**Date:** 2026-06-07
**Status:** ✅ PASS

## Link Types

| Type | Source | Target | Example |
|------|--------|--------|---------|
| Related Tools | Tool page sidebar | Other tool pages | salary-calculator ↔ tax-calculator |
| Cross-Country | Tool page sidebar | Same tool, other countries | /us/tools/salary → /uk/tools/salary |
| Comparison | Tool page footer | Other country compare pages | /us/tools/salary/compare?with=uk |
| Subregion | Tool page sidebar | State-specific tool pages | /us/state/california/salary-calculator |
| Salary → Tools | Salary profession sidebar | Salary + Tax calculator | /us/salary/software-engineer → /us/tools/salary-calculator |
| Guides → Tools | Guide page | Related calculators | /us/guides/retirement → /us/tools/retirement-calculator |
| Country Hub → Tools | Homepage | All tools | /us → /us/tools |
| Country Hub → Salary | Homepage | All professions | /us → /us/salary |
| Country Hub → States | Homepage | State hub | /us → /us/states |
| Footer → All | Footer | Every country + state hub | /us/states, /au/states |

## Topical Clusters

### Salary Cluster
Profession page → Related tools → Other professions → Cross-country versions

### Tool Cluster
Tool page → Related tools → Guides → State versions → Comparison versions

### Guide Cluster
Guide page → Related calculators → Related guides → All guides

### State Cluster
State page → All tools → Other states → State hub → Country hub

## Authority Flow

```
Country Hub → Tools Hub → Tool Pages → Compare Pages
                  ↓             ↓
            Salary Hub → Profession Pages
                  ↓
            Guides Hub → Guide Pages
                  ↓
            States Hub → State Pages → State Tool Pages
```

All hubs link to all sub-pages. All pages link to related content. Zero orphan pages (after Phase 1 deploy). Authority flows naturally from hubs to detail pages.
