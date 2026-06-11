interface SourcesSectionProps {
  title?: string
  sources: { label: string; url?: string }[]
}

export function SourcesSection({ title = "Sources", sources }: SourcesSectionProps) {
  return (
    <section className="rounded-xl border border-border-light bg-surface-primary px-6 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-text-primary">{title}</h2>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-text-secondary">
        {sources.map((source, i) => (
          <li key={i}>
            {source.url ? <a href={source.url} className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800">{source.label}</a> : source.label}
          </li>
        ))}
      </ul>
    </section>
  )
}
