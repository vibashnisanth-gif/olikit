interface ExecutiveSummarySectionProps {
  title?: string
  summary: string
  metrics?: { label: string; value: string }[]
}

export function ExecutiveSummarySection({ title = "Executive Summary", summary, metrics }: ExecutiveSummarySectionProps) {
  const hasMetrics = metrics && metrics.length > 0
  const primaryMetric = hasMetrics ? metrics[0] : null
  const supportingMetrics = hasMetrics ? metrics.slice(1) : []

  return (
    <section className="rounded-xl border border-zinc-200 bg-white shadow-sm">
      <div className="flex">
        <div className="w-1 shrink-0 rounded-l-xl bg-emerald-500" />
        <div className="min-w-0 flex-1 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{title}</p>

          {primaryMetric && (
            <div className="mt-4">
              <p className="max-sm:text-4xl sm:text-5xl font-bold text-zinc-950">{primaryMetric.value}</p>
              <p className="mt-1 text-lg font-medium text-zinc-800">{primaryMetric.label}</p>
            </div>
          )}

          <p className="mt-4 text-sm leading-7 text-zinc-600">{summary}</p>

          {supportingMetrics.length > 0 && (
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {supportingMetrics.map((m) => (
                <div key={m.label}>
                  <p className="text-sm text-zinc-600">{m.label}</p>
                  <p className="mt-0.5 text-xl font-semibold text-zinc-900">{m.value}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 border-t border-zinc-100 pt-3">
            <p className="text-xs text-zinc-500">Updated June 2026 · Government Data Sources</p>
          </div>
        </div>
      </div>
    </section>
  )
}
