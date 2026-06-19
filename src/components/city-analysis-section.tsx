interface CityAnalysis {
  name: string
  flag: string
  country: string
  summary: string
  metrics: { label: string; value: string }[]
}

interface CityAnalysisSectionProps {
  title?: string
  cities: CityAnalysis[]
}

export function CityAnalysisSection({ title = "City Analysis", cities }: CityAnalysisSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-zinc-950">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((c, i) => (
          <div key={i} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{c.flag}</span>
              <div>
                <h3 className="text-sm font-semibold text-zinc-950">{c.name}</h3>
                <p className="text-xs text-zinc-500">{c.country}</p>
              </div>
            </div>
            <p className="mb-3 text-xs leading-6 text-zinc-700">{c.summary}</p>
            <div className="space-y-2">
              {c.metrics.map((m) => (
                <div key={m.label} className="flex items-center justify-between border-t border-zinc-100 pt-2">
                  <span className="text-xs text-zinc-500">{m.label}</span>
                  <span className="text-xs font-semibold text-zinc-950 tabular-nums">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
