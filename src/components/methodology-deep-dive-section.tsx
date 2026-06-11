interface MethodologyDeepDiveSectionProps {
  title?: string
  sections: { heading: string; content: string[] }[]
}

export function MethodologyDeepDiveSection({ title = "Methodology Deep Dive", sections }: MethodologyDeepDiveSectionProps) {
  return (
    <section className="space-y-4 mt-4">
      <h2 className="text-2xl font-semibold tracking-tight text-text-primary">{title}</h2>
      {sections.map((s, i) => (
        <div key={i} className="rounded-xl border border-border-light bg-surface-muted px-6 py-6 shadow-sm sm:px-8">
          <h3 className="mb-3 text-lg font-semibold text-text-primary">{s.heading}</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-text-secondary">
            {s.content.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
