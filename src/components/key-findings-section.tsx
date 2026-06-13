interface KeyFindingsSectionProps {
  title?: string
  findings: { title: string; description: string }[]
}

export function KeyFindingsSection({ title = "Key Findings", findings }: KeyFindingsSectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {findings.map((f, i) => (
          <div key={i} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <h3 className="mb-2 text-base font-semibold text-zinc-950">{f.title}</h3>
            <p className="text-sm leading-6 text-zinc-700">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
