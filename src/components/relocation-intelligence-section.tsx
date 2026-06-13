interface RelocationFactor {
  label: string
  value: string
}

interface RelocationIntelligenceSectionProps {
  title?: string
  description?: string
  countries: { flag: string; name: string; summary: string; factors: RelocationFactor[]; href?: string }[]
}

export function RelocationIntelligenceSection({ title = "Relocation Intelligence", description, countries }: RelocationIntelligenceSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-zinc-950">{title}</h2>
      {description && <p className="text-sm leading-7 text-zinc-700">{description}</p>}
      <div className="grid gap-6 sm:grid-cols-2">
        {countries.map((c, i) => (
          <div key={i} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{c.flag}</span>
              <div>
                <h3 className="text-sm font-semibold text-zinc-950">{c.name}</h3>
                {c.href && <a href={c.href} className="text-xs text-emerald-700 hover:underline">View details →</a>}
              </div>
            </div>
            <p className="mb-3 text-xs leading-6 text-zinc-600">{c.summary}</p>
            <div className="space-y-1.5">
              {c.factors.map((f) => (
                <div key={f.label} className="flex items-center justify-between border-t border-zinc-100 pt-1.5">
                  <span className="text-xs text-zinc-500">{f.label}</span>
                  <span className="text-xs font-semibold text-zinc-950">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
