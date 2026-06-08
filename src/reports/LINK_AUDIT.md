# Internal Link Audit

Date: 2026-06-07

## Global Homepage → Outgoing Links

| Link | Status |
|------|--------|
| `/countries` | OK |
| `/us`, `/uk`, `/au`, `/ca`, `/in`, `/nz`, `/sg` | OK |
| `/us/comparisons`, `/uk/comparisons`, etc. | OK |
| `/us/rankings`, `/uk/rankings`, etc. | OK |
| `/us/research`, `/uk/research`, etc. | OK |
| `/compare` | NEW |
| `/rankings` | NEW |
| `/research` | NEW |
| `/methodology` | NEW (self-link) |
| `/data-sources` | NEW (self-link) |
| `/editorial-policy` | NEW (self-link) |
| `/professions` | OK |

## Country Hub → Outgoing Links

| Link | Status |
|------|--------|
| `/{slug}/salary/{profession}` (profession cards) | OK |
| `/{slug}/tools/{tool}` (tool grid) | OK |
| `/{slug}/guides/{guide}` (guide grid) | OK |
| `/{slug}/guides/best` | OK |
| `/{slug}/tools/salary/compare` and others | OK |
| `/countries` | OK |
| `/{slug}/state/{subregion}` (if states exist) | OK |
| `/professions` | OK |

## Footer → Outgoing Links

| Link | Status |
|------|--------|
| Country links (all 7) | OK |
| `/countries` | OK |
| `/professions` | OK |
| `/methodology` | NEW |
| `/data-sources` | NEW |
| `/editorial-policy` | NEW |
| `/{slug}/comparisons` | OK |
| `/{slug}/rankings` | OK |
| `/{slug}/research` | OK |
| `/{slug}/guides` | OK (country pages only) |
| `/{slug}/guides/best` | OK (country pages only) |
| `/about` | OK |
| `/contact` | OK |
| `/privacy-policy` | OK |
| `/terms` | OK |
| `/disclaimer` | OK |

## Missing / Dead Ends

No dead ends found. All internal links point to existing routes.

## Improvements Made

1. **Global home** now links to all 6 new authority pages instead of redirecting to /us
2. **Header nav** adapts to current context — global nav for global pages, country nav for country pages
3. **Footer** adds links to methodology, data-sources, editorial-policy for all pages
4. **Context bar** adds "View Global" link on country pages
5. **Compare, Rankings, Research global pages** link back to country-specific versions
6. **Country pages** link to /professions (was missing from country hub)
