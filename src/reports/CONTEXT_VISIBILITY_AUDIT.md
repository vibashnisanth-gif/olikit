# Context Visibility Audit

Date: 2026-06-07
Standard: 3-Second Identity Test

## Criteria
User must be able to answer "Where am I?" within 3 seconds on any page, distinguishing between GLOBAL and each of the 7 countries.

## Page Type Results

| Page | Pre-Fix Result | Post-Fix Result |
|------|---------------|-----------------|
| Global Homepage `/` | FAIL - redirected to /us | PASS - GLOBAL badge + context bar |
| Country Hub `/us` | FAIL - no persistent indicator | PASS - US flag + name in sticky bar |
| Country Hub `/uk` | FAIL - no persistent indicator | PASS - UK flag + name in sticky bar |
| Country Hub `/au` | FAIL - no persistent indicator | PASS - AU flag + name in sticky bar |
| Country Hub `/ca` | FAIL - no persistent indicator | PASS - CA flag + name in sticky bar |
| Country Hub `/in` | FAIL - no persistent indicator | PASS - IN flag + name in sticky bar |
| Country Hub `/nz` | FAIL - no persistent indicator | PASS - NZ flag + name in sticky bar |
| Country Hub `/sg` | FAIL - no persistent indicator | PASS - SG flag + name in sticky bar |
| Tool Page `/us/tools/income-tax` | FAIL - country only in URL | PASS - context bar shows US |
| Guide Page `/uk/guides/vat-guide` | FAIL - country only in URL | PASS - context bar shows UK |
| Salary Page `/us/salary/doctor` | FAIL - country only in h1 | PASS - context bar shows US |
| Profession Page `/professions` | FAIL - no global indicator | PASS - context bar shows GLOBAL |
| Country Compare `/us/comparisons` | FAIL - no persistent indicator | PASS - context bar shows US |
| Global Authority `/countries` | FAIL - no global indicator | PASS - context bar shows GLOBAL |
| Global Authority `/about` | FAIL - no global indicator | PASS - context bar shows GLOBAL |

## Context Bar Design

- Position: sticky, top-0, z-40 (above header at z-30)
- Visibility: always visible, survives scrolling
- Content: flag + country name (uppercase) in bold
- Global: gray background (zinc-100), "🌍 GLOBAL"
- Countries: colored backgrounds matching country flag themes
- "View Global" link on country pages for quick navigation
- Cannot be hidden inside dropdowns

## Signals Present on Every Page

1. Context Bar: flag + country name, sticky, always visible
2. Header: logo + nav links adapted to current context
3. URL structure: `/[country-slug]/...` or `/` for global
4. H1 title: includes country or global context
5. Footer: links to all countries

## Pass Rate

Pre-fix: 0% — no page had a persistent, always-visible context indicator
Post-fix: 100% — every page has the sticky context bar
