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
    <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-600">
        {sources.map((s, i) => (
          <li key={i}>
            <a href={s.url} className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
