interface ExecutiveSummarySectionProps {
  title?: string
  summary: string
  metrics?: { label: string; value: string }[]
}

export function ExecutiveSummarySection({ title = "Executive Summary", summary, metrics }: ExecutiveSummarySectionProps) {
  return (
    <section className="rounded-xl border border-border-light bg-surface-secondary px-6 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-text-primary">{title}</h2>
      <p className="text-sm leading-7 text-text-secondary">{summary}</p>
      {metrics && metrics.length > 0 && (
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-border-light bg-surface-primary p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">{m.label}</p>
              <p className="mt-1 text-2xl font-bold text-text-primary">{m.value}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
