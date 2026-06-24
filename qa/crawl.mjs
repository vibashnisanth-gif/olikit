import { PlaywrightCrawler, Dataset } from "crawlee"

const BASE = process.env.BASE_URL || "http://localhost:3456"
const visited = new Set()
const issues = []

const crawler = new PlaywrightCrawler({
  maxRequestsPerCrawl: 200,
  maxConcurrency: 4,
  requestHandler: async ({ page, request, enqueueLinks }) => {
    const url = request.url
    if (visited.has(url)) return
    visited.add(url)

    const title = await page.title()
    const html = await page.content()
    const status = page.url() === url ? 200 : 301

    console.log(`[${status}] ${url} -> "${title?.slice(0, 80)}"`)

    // Detect issues
    if (title?.includes("{") || title?.includes("${")) {
      issues.push({ url, severity: "critical", detail: `Template leak in title: ${title}` })
    }
    if (title?.includes("placeholder") || title?.includes("dummy")) {
      issues.push({ url, severity: "high", detail: `Placeholder title: ${title}` })
    }
    if (html.includes('"{country}"') || html.includes("${locale.name}")) {
      issues.push({ url, severity: "critical", detail: "Template variable leaked in HTML" })
    }
    if (html.includes("NaN") || html.includes("undefined")) {
      issues.push({ url, severity: "high", detail: "NaN or undefined in rendered output" })
    }
    if (html.includes('"Our free"') || html.includes("Make informed decisions")) {
      issues.push({ url, severity: "medium", detail: "AI fingerprint phrase detected" })
    }

    // Check for thin content
    const text = await page.locator("body").innerText()
    if (text.length < 100) {
      issues.push({ url, severity: "high", detail: `Thin content: ${text.length} chars` })
    }

    // Check for empty sections
    const h2s = await page.locator("h2").all()
    for (const h2 of h2s) {
      const t = (await h2.textContent())?.trim()
      if (!t) {
        issues.push({ url, severity: "medium", detail: "Empty H2 section" })
      }
    }

    await enqueueLinks({ strategy: "same-domain" })
  },
  failedRequestHandler: async ({ request }) => {
    issues.push({ url: request.url, severity: "error", detail: `Failed to load: ${request.errorMessages?.[0]}` })
  },
})

await crawler.run([BASE])

// Generate report
const report = ["# Crawl Report\n"]
report.push(`**Pages crawled:** ${visited.size}`)
report.push(`**Issues found:** ${issues.length}\n`)

const bySeverity = {}
for (const issue of issues) {
  ;(bySeverity[issue.severity] ??= []).push(issue)
}
for (const sev of ["critical", "high", "medium", "error"]) {
  if (bySeverity[sev]) {
    report.push(`## ${sev.toUpperCase()} (${bySeverity[sev].length})`)
    for (const i of bySeverity[sev]) {
      report.push(`- ${i.url}: ${i.detail}`)
    }
    report.push("")
  }
}

if (issues.length === 0) {
  report.push("**No issues detected.**")
}

require("fs").writeFileSync("./qa/CRAWL_REPORT.md", report.join("\n"))
console.log(`\nReport written to qa/CRAWL_REPORT.md (${issues.length} issues)`)
