interface ResearchFindingsSectionProps {
  title?: string
  findings: { title: string; description: string; metric?: string }[]
}

export function ResearchFindingsSection({ title = "Research Findings", findings }: ResearchFindingsSectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {findings.map((f, i) => (
          <div key={i} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            {f.metric && (
              <p className="text-3xl font-bold text-emerald-700 mb-2">{f.metric}</p>
            )}
            <h3 className="mb-1.5 text-base font-semibold text-zinc-950">{f.title}</h3>
            <p className="text-sm leading-6 text-zinc-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
