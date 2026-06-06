import { readFileSync, writeFileSync, readdirSync, statSync } from "fs"
import { join, resolve, extname } from "path"
import { cwd } from "process"

const ROOT = resolve(cwd(), "src")
const IGNORE_DIRS = new Set(["node_modules", ".next", ".git", "review"])
const SUFFIXES = new Set([".ts", ".tsx", ".mjs"])
const yearRegex = /\b(20\d{2})\b/g

function walkFiles(dir) {
  const files = []
  let entries
  try {
    entries = readdirSync(dir)
  } catch {
    return files
  }
  for (const entry of entries) {
    const fullPath = join(dir, entry)
    let stat
    try {
      stat = statSync(fullPath)
    } catch {
      continue
    }
    if (stat.isDirectory()) {
      if (!IGNORE_DIRS.has(entry)) {
        files.push(...walkFiles(fullPath))
      }
    } else if (SUFFIXES.has(extname(entry))) {
      files.push(fullPath)
    }
  }
  return files
}

function checkFile(filePath) {
  const content = readFileSync(filePath, "utf-8")
  const lines = content.split("\n")
  const findings = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const matches = [...line.matchAll(yearRegex)]
    for (const match of matches) {
      const year = parseInt(match[1])
      findings.push({
        file: filePath.replace(ROOT, "src"),
        line: i + 1,
        year: match[1],
        context: line.trim().substring(Math.max(0, match.index - 20), match.index + 100).trim(),
      })
    }
  }
  return findings
}

function generateReport(allFindings) {
  const staleContent = allFindings.filter((f) => parseInt(f.year) < 2024 || parseInt(f.year) > 2028)
  const futureContent = allFindings.filter((f) => parseInt(f.year) > 2026)
  const currentContent = allFindings.filter((f) => parseInt(f.year) >= 2024 && parseInt(f.year) <= 2026)

  const reportPath = resolve(cwd(), "stale-content-report.json")
  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalYearReferences: allFindings.length,
      staleReferences: staleContent.length,
      futureReferences: futureContent.length,
      currentReferences: currentContent.length,
    },
    warnings: staleContent.map((f) => ({
      file: f.file,
      line: f.line,
      year: f.year,
      context: f.context,
      reason: parseInt(f.year) < 2024
        ? "Year is before 2024 — likely outdated"
        : "Year is after 2028 — verify this is intentional",
    })),
    info: {
      futureReferences: futureContent.map((f) => ({
        file: f.file,
        line: f.line,
        year: f.year,
        context: f.context,
        reason: `Year ${f.year} is beyond current tax year — verify correctness`,
      })),
    },
  }

  writeFileSync(reportPath, JSON.stringify(report, null, 2))
  console.log(`\nStale Content Report: ${reportPath}`)
  console.log(`  Total year references: ${report.summary.totalYearReferences}`)
  console.log(`  Stale references: ${report.summary.staleReferences}`)
  console.log(`  Future references: ${report.summary.futureReferences}`)

  if (report.warnings.length > 0) {
    console.log("\n  Warnings:")
    for (const w of report.warnings.slice(0, 20)) {
      console.log(`    ${w.file}:${w.line} — Year ${w.year} — ${w.context}`)
    }
    if (report.warnings.length > 20) {
      console.log(`    ... and ${report.warnings.length - 20} more warnings`)
    }
  }

  return report
}

const files = walkFiles(ROOT)
console.log(`Scanning ${files.length} files for year references...`)

const allFindings = []
for (const file of files) {
  const findings = checkFile(file)
  allFindings.push(...findings)
}

const report = generateReport(allFindings)

if (report.summary.staleReferences > 0) {
  console.log(`\n⚠ Found ${report.summary.staleReferences} potentially stale year references.`)
}
