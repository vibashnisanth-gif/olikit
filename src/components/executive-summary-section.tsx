interface ExecutiveSummarySectionProps {
  title?: string
  summary: string
  metrics?: { label: string; value: string }[]
}

export function ExecutiveSummarySection({ title = "Executive Summary", summary, metrics }: ExecutiveSummarySectionProps) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
      <p className="text-sm leading-7 text-zinc-600">{summary}</p>
      {metrics && metrics.length > 0 && (
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-md bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">{m.label}</p>
              <p className="mt-1 text-2xl font-bold text-zinc-950">{m.value}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
