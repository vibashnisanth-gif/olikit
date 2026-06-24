import { test, expect } from "@playwright/test"

const ROUTES = [
  // Global pages
  "/", "/about", "/contact", "/methodology", "/privacy-policy", "/terms",
  "/disclaimer", "/data-sources", "/editorial-policy", "/countries",
  "/compare", "/comparisons", "/rankings", "/research", "/professions",
  "/software-engineer", "/data-scientist", "/product-manager",
  "/professions/software-engineer", "/professions/data-scientist",

  // Rankings
  "/rankings/best-countries-for-software-engineers",
  "/rankings/best-countries-for-data-scientists",
  "/rankings/highest-paying-countries-software-engineers",
  "/rankings/highest-paying-countries-data-scientists",
  "/rankings/highest-paying-cities-software-engineers",
  "/rankings/highest-paying-cities-data-scientists",
  "/rankings/highest-paying-cities-product-managers",

  // Research
  "/research/global-salary-index-2026",
  "/research/software-engineer-salary-index-2026",
  "/research/data-scientist-salary-index-2026",
  "/research/product-manager-salary-index-2026",

  // Profession hubs
  "/ai-engineer", "/business-analyst", "/cloud-engineer",
  "/cybersecurity-analyst", "/data-engineer", "/devops-engineer",
  "/financial-analyst", "/machine-learning-engineer",
  "/project-manager", "/solutions-architect",

  // Country-specific pages (root level - should 301 redirect)
  "/ai-engineer-salary-us", "/software-engineer-salary-us",
  "/data-scientist-salary-uk", "/product-manager-salary-au",
  "/software-engineer-salary-australia", "/data-scientist-salary-canada",

  // Country hubs
  "/us", "/uk", "/au", "/ca", "/nz", "/in", "/sg",

  // US locale pages
  "/us/salary", "/us/salary/software-engineer", "/us/salary/data-scientist",
  "/us/salary/doctor", "/us/tools/tax-calculator",
  "/us/tools/salary-calculator", "/us/tools/mortgage-calculator",
  "/us/comparisons", "/us/rankings", "/us/research",
  "/us/guides", "/us/glossary", "/us/search", "/us/updates",
  "/us/states", "/us/financial-data",

  // UK locale pages
  "/uk/salary", "/uk/salary/software-engineer",
  "/uk/tools/tax-calculator", "/uk/comparisons", "/uk/guides",

  // AU locale pages
  "/au/salary", "/au/salary/software-engineer",
  "/au/tools/tax-calculator", "/au/comparisons", "/au/guides",

  // CA locale pages
  "/ca/salary", "/ca/tools/tax-calculator",

  // NZ locale pages
  "/nz/salary", "/nz/tools/tax-calculator",

  // IN locale pages
  "/in/salary", "/in/tools/tax-calculator",

  // SG locale pages
  "/sg/salary", "/sg/tools/tax-calculator",

  // US state pages
  "/us/state/california", "/us/state/texas", "/us/state/new-york",
  "/us/state/california/salary-calculator",
  "/us/state/texas/tax-calculator",
  "/us/best-states-for-salary", "/us/best-states-for-cost-of-living",
  "/us/average-salary/california", "/us/cost-of-living/california",

  // Comparisons
  "/comparisons/data-scientist-us-vs-uk",
  "/comparisons/software-engineer-us-vs-australia",

  // Profession salary pages (root level hubs - should NOT redirect)
  "/ai-engineer-salary", "/business-analyst-salary",
  "/software-engineer-salary", "/data-scientist-salary",
  "/software-engineer-salary-by-country",
  "/software-engineer-best-countries",
  "/software-engineer-highest-paying-countries",
  "/software-engineer-ppp-adjusted-salary",
  "/software-engineer-tax-adjusted-salary",

  // Comparison pages
  "/software-engineer-vs-data-scientist",
  "/software-engineer-vs-product-manager",
  "/data-scientist-vs-product-manager",
  "/data-scientist-vs-software-engineer",

  // Profession + country comparison
  "/software-engineer-us-vs-uk", "/software-engineer-us-vs-australia",
  "/data-scientist-us-vs-uk", "/data-scientist-us-vs-canada",
  "/product-manager-us-vs-uk", "/product-manager-uk-vs-australia",
]

const FORBIDDEN_PATTERNS = [
  "{country}", "${locale.name}", "${locale.slug}",
  "NaN", "undefined",
  "placeholder", "lorem ipsum",
]

test.describe("Olikit 100-page smoke test", () => {
  for (const route of ROUTES) {
    test(`${route} renders without errors`, async ({ page }) => {
      const response = await page.goto(route, { waitUntil: "networkidle" })
      const status = response?.status() ?? 0

      // Country-specific root pages should 301 redirect
      if (route.match(/salary-(us|uk|au|ca|nz|in|sg|australia|canada|india|new-zealand|singapore)$/)) {
        expect(status).toBe(301)
        return
      }

      // Everything else should be 200
      expect(status).toBe(200)

      const html = await page.content()

      // No template leaks
      for (const pattern of FORBIDDEN_PATTERNS) {
        expect(html).not.toContain(pattern)
      }

      // No empty H2s
      const h2s = await page.locator("h2").all()
      for (const h2 of h2s) {
        const text = await h2.textContent()
        expect(text?.trim()).toBeTruthy()
      }

      // Has valid title
      const title = await page.title()
      expect(title?.trim()).toBeTruthy()
      expect(title).not.toContain("{")
    })
  }
})
