interface ExecutiveSummarySectionProps {
  title?: string
  summary: string
  metrics?: { label: string; value: string }[]
}

export function ExecutiveSummarySection({ title = "Executive Summary", summary, metrics }: ExecutiveSummarySectionProps) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
      <p className="text-base leading-7 text-zinc-700">{summary}</p>
      {metrics && metrics.length > 0 && (
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-zinc-200 bg-white p-5 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">{m.label}</p>
              <p className="mt-1.5 text-3xl font-bold text-zinc-950">{m.value}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
