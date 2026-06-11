interface MethodologySectionProps {
  title?: string
  methodology: string[]
  dataSources?: { label: string; url?: string }[]
}

export function MethodologySection({ title = "Methodology", methodology, dataSources }: MethodologySectionProps) {
  return (
    <section className="rounded-xl border border-border-light bg-surface-primary px-6 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-text-primary">{title}</h2>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-text-secondary">
        {methodology.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {dataSources && dataSources.length > 0 && (
        <>
          <h3 className="mb-2 mt-5 text-sm font-semibold text-text-primary">Data Sources</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-text-secondary">
            {dataSources.map((ds, i) => (
              <li key={i}>
                {ds.url ? <a href={ds.url} className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800">{ds.label}</a> : ds.label}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
