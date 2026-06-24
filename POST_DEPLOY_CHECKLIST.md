# POST-DEPLOY CHECKLIST

## Pre-Deployment ✅
- [x] All quality gates passed
- [x] TypeScript compiles clean
- [x] Lint passes
- [x] Build succeeds (1209 pages generated)
- [x] `release/adsense-ready` branch committed

## Deployment
- [ ] Run `npx vercel --prod` to deploy to production
- [x] Build already verified — no build errors

## Production Validation
- [ ] Visit homepage — confirm loads without errors
- [ ] Visit 20 random pages — check for broken links, missing data
- [ ] Test salary calculator — verify tool works
- [ ] Test break-even calculator — verify renamed tool works
- [ ] Visit /about, /contact, /methodology — confirm pages render
- [ ] Visit 3 profession salary pages — confirm unique hero descriptions
- [ ] Test mobile layout — responsive check
- [ ] Run `HOSTILE_AUDIT.md` against production URL (not preview)

## Trust Layer (Requires Human Action)
- [ ] Add founder name and bio to /about page
- [ ] Add postal address to /contact page
- [ ] Register legal entity
- [ ] Add LinkedIn company page or founder LinkedIn link

## AdSense Submission
- [ ] Ensure founder identity + address added (75% approval probability)
- [ ] Submit AdSense application
- [ ] Monitor Search Console for crawl errors

## Post-Submission
- [ ] If rejected, review rejection reason and fix
- [ ] Track approval status in Search Console
