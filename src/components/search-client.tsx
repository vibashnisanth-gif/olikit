"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { tools } from "@/lib/content/templates"
import { guides } from "@/lib/content/guide-templates"
import { glossaryEntries } from "@/lib/content/glossary"
import { researchReports } from "@/lib/content/research"
import { stateDataSets } from "@/lib/content/state-data"

type SearchResult = {
  label: string
  description: string
  href: string
  category: string
}

type Props = {
  localeSlug: string
}

export function SearchClient({ localeSlug }: Props) {
  const [query, setQuery] = useState("")

  const allResults: SearchResult[] = useMemo(() => {
    const results: SearchResult[] = []

    for (const tool of tools) {
      results.push({
        label: tool.name,
        description: tool.description.replace("{country}", "your country"),
        href: `/${localeSlug}/tools/${tool.slug}`,
        category: "Calculator",
      })
    }

    for (const guide of guides) {
      results.push({
        label: guide.name,
        description: guide.description.replace("{country}", "your country"),
        href: `/${localeSlug}/guides/${guide.slug}`,
        category: "Guide",
      })
    }

    for (const ds of stateDataSets) {
      results.push({
        label: `Average Salary in ${ds.stateName}`,
        description: `Average salary: $${ds.dataPoints.averageSalary.toLocaleString()} — Cost of living: ${ds.dataPoints.costOfLivingIndex}`,
        href: `/${localeSlug}/average-salary/${ds.stateSlug}`,
        category: "Salary Data",
      })
      results.push({
        label: `Cost of Living in ${ds.stateName}`,
        description: `Cost of living index: ${ds.dataPoints.costOfLivingIndex}`,
        href: `/${localeSlug}/cost-of-living/${ds.stateSlug}`,
        category: "Cost of Living",
      })
      results.push({
        label: `Salary vs Cost of Living in ${ds.stateName}`,
        description: `Compare salaries and living costs in ${ds.stateName}`,
        href: `/${localeSlug}/salary-vs-cost-of-living/${ds.stateSlug}`,
        category: "Comparison",
      })
    }

    for (const entry of glossaryEntries) {
      results.push({
        label: entry.term,
        description: entry.definition.substring(0, 120),
        href: `/${localeSlug}/glossary/${entry.slug}`,
        category: "Glossary",
      })
    }

    for (const report of researchReports) {
      results.push({
        label: report.title,
        description: report.metaDescription,
        href: `/${localeSlug}/research/${report.slug}`,
        category: "Research",
      })
    }

    results.push({ label: "Salary Hub", description: "Salary calculators, guides, and state-by-state salary data", href: `/${localeSlug}/salary`, category: "Salary" })
    results.push({ label: "Financial Data Library", description: "Verified financial data from official government sources", href: `/${localeSlug}/financial-data`, category: "Data" })
    results.push({ label: "State Rankings", description: "Best states for salary, cost of living, retirement, and home affordability", href: `/${localeSlug}/best-states-for-salary`, category: "Rankings" })
    results.push({ label: "Latest Updates", description: "Recent changes to data, tools, and content", href: `/${localeSlug}/updates`, category: "Site" })

    return results
  }, [localeSlug])

  const filtered = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return allResults.filter(
      (r) =>
        r.label.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q)
    ).slice(0, 20)
  }, [query, allResults])

  return (
    <div>
      <div className="relative mb-8">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search calculators, guides, states, glossary..."
          className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 pl-10 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          autoFocus
        />
        <svg className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {query.trim() && filtered.length === 0 && (
        <p className="text-center text-sm text-zinc-500 py-10">No results found for &ldquo;{query}&rdquo;. Try a different search term.</p>
      )}

      {!query.trim() && (
        <p className="text-center text-sm text-zinc-500 py-10">Start typing to search calculators, guides, salary data, glossary terms, and more.</p>
      )}

      {filtered.length > 0 && (
        <div className="space-y-2">
          {filtered.map((result) => (
            <Link key={result.href} href={result.href} className="block rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <div className="mb-1 flex items-center gap-2">
                <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600">{result.category}</span>
              </div>
              <p className="font-medium text-zinc-950">{result.label}</p>
              <p className="mt-0.5 text-sm text-zinc-600">{result.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
