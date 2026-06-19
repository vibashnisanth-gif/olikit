interface Source {
  label: string
  url: string
}

interface SourcesSectionProps {
  title?: string
  sources: Source[]
}

export function SourcesSection({ title = "Sources", sources }: SourcesSectionProps) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-1 text-2xl font-semibold text-zinc-950">{title}</h2>
      <p className="mb-4 text-sm text-zinc-600">Data sources and references used in this analysis.</p>
      <ul className="space-y-2 text-sm leading-7 text-zinc-700">
        {sources.map((s, i) => (
          <li key={i} className="flex items-start gap-2 rounded-md bg-white px-4 py-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <a href={s.url} className="font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
