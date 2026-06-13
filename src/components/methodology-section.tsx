interface MethodologySectionProps {
  title?: string
  methodology: string[]
  dataSources?: { label: string; url?: string }[]
}

export function MethodologySection({ title = "Methodology", methodology, dataSources }: MethodologySectionProps) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
      <ul className="space-y-3 text-sm leading-7 text-zinc-600">
        {methodology.map((item, i) => (
          <li key={i} className="flex items-start gap-3 border-l-2 border-emerald-400 pl-4">
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {dataSources && dataSources.length > 0 && (
        <>
          <div className="mt-6 border-t border-zinc-100 pt-4">
            <h3 className="mb-3 text-sm font-semibold text-zinc-950">Data Sources</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600">
              {dataSources.map((ds, i) => (
                <li key={i}>
                  {ds.url ? <a href={ds.url} className="font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800">{ds.label}</a> : ds.label}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  )
}
