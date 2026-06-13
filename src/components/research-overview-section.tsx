import type { ReactNode } from "react"

interface ResearchOverviewSectionProps {
  title?: string
  summary: string
  highlights: string[]
  children?: ReactNode
}

export function ResearchOverviewSection({ title = "Research Overview", summary, highlights, children }: ResearchOverviewSectionProps) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
      <p className="text-base leading-7 text-zinc-700 mb-4">{summary}</p>
      <h3 className="mb-2 text-sm font-semibold text-zinc-950">Key Highlights</h3>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-7 text-zinc-700">
        {highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
      {children}
    </section>
  )
}
