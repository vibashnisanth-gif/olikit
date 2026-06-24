import { CheerioCrawler } from "crawlee"
import * as fs from "fs"

const BASE = "https://olikit.com"
const visited = new Set()
const issues = []
const pageData = []
const MAX_PAGES = 150

const SEED_URLS = [
  "/", "/us", "/uk", "/au", "/ca", "/nz", "/in", "/sg",
  "/about", "/contact", "/methodology", "/data-sources",
  "/editorial-policy", "/privacy-policy", "/terms", "/disclaimer",
  "/countries", "/professions",
  "/compare", "/comparisons", "/rankings", "/research",
  "/software-engineer", "/data-scientist", "/product-manager",
  "/ai-engineer", "/business-analyst", "/cloud-engineer",
  "/cybersecurity-analyst", "/data-engineer", "/devops-engineer",
  "/financial-analyst", "/machine-learning-engineer",
  "/project-manager", "/solutions-architect",
  "/rankings/best-countries-for-software-engineers",
  "/rankings/highest-paying-countries-software-engineers",
  "/rankings/best-countries-for-data-scientists",
  "/rankings/highest-paying-countries-data-scientists",
  "/rankings/highest-paying-cities-software-engineers",
  "/rankings/highest-paying-cities-data-scientists",
  "/research/global-salary-index-2026",
  "/research/software-engineer-salary-index-2026",
  "/research/data-scientist-salary-index-2026",
  "/us/salary", "/us/salary/software-engineer", "/us/salary/data-scientist",
  "/us/tools/tax-calculator", "/us/tools/salary-calculator",
  "/us/comparisons", "/us/rankings", "/us/research",
  "/us/guides", "/us/glossary", "/us/search", "/us/updates",
  "/us/states", "/us/financial-data",
  "/uk/salary", "/uk/salary/software-engineer",
  "/uk/tools/tax-calculator", "/uk/comparisons", "/uk/guides",
  "/au/salary", "/au/salary/software-engineer", "/au/tools/tax-calculator",
  "/ca/salary", "/ca/tools/tax-calculator",
  "/nz/salary", "/nz/tools/tax-calculator",
  "/in/salary", "/in/tools/tax-calculator",
  "/sg/salary", "/sg/tools/tax-calculator",
  "/comparisons/data-scientist-us-vs-uk",
  "/comparisons/software-engineer-us-vs-australia",
  "/comparisons/data-scientist-us-vs-australia",
  "/comparisons/data-scientist-us-vs-canada",
  "/ai-engineer-salary", "/software-engineer-salary", "/data-scientist-salary",
  "/software-engineer-salary-by-country", "/software-engineer-best-countries",
  "/software-engineer-highest-paying-countries",
  "/software-engineer-ppp-adjusted-salary", "/software-engineer-tax-adjusted-salary",
  "/software-engineer-vs-data-scientist", "/software-engineer-vs-product-manager",
  "/data-scientist-vs-product-manager",
  "/software-engineer-us-vs-uk", "/software-engineer-us-vs-australia",
  "/data-scientist-us-vs-uk", "/data-scientist-us-vs-canada",
  "/us/state/california", "/us/state/texas",
  "/us/state/california/salary-calculator",
  "/us/best-states-for-salary", "/us/best-states-for-cost-of-living",
  "/us/average-salary/california", "/us/cost-of-living/california",
  "/ai-engineer-salary-us", "/software-engineer-salary-us",
  "/data-scientist-salary-uk", "/product-manager-salary-au",
  "/professions/software-engineer", "/professions/data-scientist",
]

const FORBIDDEN = ["{country}", "${locale.name}", "${locale.slug}", "NaN", "undefined"]
const BOILERPLATE = [
  "According to Olikit research", "Our free", "Whether you are", "Make informed decisions",
  "placeholder", "lorem ipsum", "dummy value",
]

const crawler = new CheerioCrawler({
  maxRequestsPerCrawl: MAX_PAGES,
  maxConcurrency: 5,
  requestHandler: async ({ request, $, body }) => {
    const path = request.url.replace(BASE, "") || "/"
    if (visited.has(path)) return
    visited.add(path)

    const html = body.toString()
    const title = $("title").text().trim() || "(no title)"
    const status = request.url.includes("/nonexistent") ? 404 : 200

    const entry = { url: path, status, title: title.slice(0, 120), htmlLen: html.length, issues: [] }
    pageData.push(entry)

    // Detect redirects (30x)
    if (body.length < 200 && html.includes("window.location")) {
      issues.push({ severity: "low", page: path, detail: "Client-side redirect detected" })
      entry.issues.push("JS redirect")
    }

    // Visible body text (skip scripts/styles — avoids "typeof window !== 'undefined'" false positives)
    const bodyText = $("body").text().trim()

    // Template leaks
    for (const f of FORBIDDEN) {
      if (bodyText.includes(f)) {
        issues.push({ severity: "critical", page: path, detail: `Template leak: "${f}"` })
        entry.issues.push(`Template leak: ${f}`)
        break
      }
    }

    // Boilerplate
    for (const b of BOILERPLATE) {
      if (bodyText.includes(b)) {
        issues.push({ severity: "medium", page: path, detail: `Boilerplate: "${b}"` })
        entry.issues.push(`Boilerplate: ${b}`)
        break
      }
    }

    // Empty H2s
    $("h2").each((_, el) => {
      const t = $(el).text().trim()
      if (!t) {
        issues.push({ severity: "high", page: path, detail: "Empty H2 tag" })
        entry.issues.push("Empty H2")
        return false
      }
    })

    // Thin content
    if (bodyText.length < 200) {
      issues.push({ severity: "high", page: path, detail: `Thin content: ${bodyText.length} chars` })
      entry.issues.push(`Thin: ${bodyText.length}c`)
    }

    // Missing H1
    const h1s = $("h1").length
    if (h1s === 0) {
      issues.push({ severity: "medium", page: path, detail: "No H1 tag" })
      entry.issues.push("No H1")
    } else if (h1s > 1) {
      issues.push({ severity: "low", page: path, detail: `Multiple H1s (${h1s})` })
      entry.issues.push(`${h1s}x H1`)
    }

    // Images without alt
    $("img:not([alt])").each(() => {
      issues.push({ severity: "medium", page: path, detail: "Image missing alt attribute" })
      entry.issues.push("img no alt")
      return false
    })

    // Check meta description
    const metaDesc = $("meta[name='description']").attr("content")
    if (!metaDesc || metaDesc.length < 20) {
      issues.push({ severity: "low", page: path, detail: "Missing or thin meta description" })
      entry.issues.push("No meta desc")
    }

    // Check canonical
    const canonical = $("link[rel='canonical']").attr("href")
    if (!canonical) {
      issues.push({ severity: "medium", page: path, detail: "Missing canonical link" })
      entry.issues.push("No canonical")
    }

    const marker = `${status}`
    console.log(`[${marker}] ${path} "${title.slice(0, 60)}"`)

    // Enqueue internal links
    if (status === 200 && visited.size < MAX_PAGES) {
      const links = []
      $("a[href]").each((_, el) => {
        const href = $(el).attr("href")
        if (href && href.startsWith("/") && !href.startsWith("//") && !href.includes("#")) {
          const clean = href.split("?")[0].replace(/\/$/, "") || "/"
          if (!visited.has(clean) && clean.length > 1 && !clean.startsWith("/_")) {
            links.push(clean)
          }
        }
      })
      for (const link of links.slice(0, 10)) {
        await crawler.addRequests([BASE + link])
      }
    }
  },
  failedRequestHandler: async ({ request }) => {
    const path = request.url.replace(BASE, "") || "/"
    issues.push({ severity: "critical", page: path, detail: `Failed to load` })
    console.log(`[FAIL] ${path}`)
  },
})

console.log(`\nCrawling ${BASE}...\n`)

// Add seed URLs
const seedFull = SEED_URLS.map(p => BASE + p)
await crawler.run(seedFull)

// Generate report
const lines = []
lines.push("# Stage 1: Production Crawl Report")
lines.push("")
lines.push(`**Target:** ${BASE}`)
lines.push(`**Pages visited:** ${visited.size}`)
lines.push(`**Issues found:** ${issues.length}`)
lines.push(`**Date:** ${new Date().toISOString().split("T")[0]}`)
lines.push("")
lines.push("---")
lines.push("")

const bySev = {}
for (const i of issues) {
  (bySev[i.severity] ??= []).push(i)
}
for (const sev of ["critical", "high", "medium", "low"]) {
  if (bySev[sev]) {
    lines.push(`## ${sev.toUpperCase()} (${bySev[sev].length})`)
    lines.push("")
    for (const i of bySev[sev]) {
      lines.push(`- **${i.page}**: ${i.detail}`)
    }
    lines.push("")
  }
}

if (issues.length === 0) {
  lines.push("**No issues detected.**")
}

lines.push("")
lines.push("---")
lines.push("")
lines.push("## All Pages")
lines.push("")
lines.push("| URL | Title | Issues |")
lines.push("|-----|-------|--------|")
for (const p of pageData) {
  const iss = p.issues.length ? p.issues.join("; ") : "—"
  lines.push(`| ${p.url} | ${p.title.slice(0, 60)} | ${iss} |`)
}

const report = lines.join("\n")
fs.writeFileSync("qa/PRODUCTION_CRAWL_REPORT.md", report)
console.log(`\nReport: qa/PRODUCTION_CRAWL_REPORT.md (${issues.length} issues, ${visited.size} pages)`)
