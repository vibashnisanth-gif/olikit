interface CountryProfileSectionProps {
  title?: string
  countries: { flag: string; name: string; slug: string; summary: string; metrics: { label: string; value: string }[] }[]
}

export function CountryProfileSection({ title = "Country Profiles", countries }: CountryProfileSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-text-primary">{title}</h2>
      {countries.map((c, i) => (
        <div key={i} className="rounded-xl border border-border-light bg-surface-primary p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{c.flag}</span>
            <h3 className="text-lg font-semibold text-text-primary">{c.name}</h3>
          </div>
          <p className="text-sm leading-7 text-text-secondary mb-4">{c.summary}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {c.metrics.map((m) => (
              <div key={m.label} className="rounded-xl bg-surface-muted p-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">{m.label}</p>
                <p className="mt-1 text-lg font-bold text-text-primary">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
