interface MethodologyDeepDiveSectionProps {
  title?: string
  sections: { heading: string; content: string[] }[]
}

export function MethodologyDeepDiveSection({ title = "Methodology Deep Dive", sections }: MethodologyDeepDiveSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-zinc-950">{title}</h2>
      {sections.map((s, i) => (
        <div key={i} className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h3 className="mb-3 text-lg font-semibold text-zinc-950">{s.heading}</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            {s.content.map((c, j) => <li key={j}>{c}</li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}
