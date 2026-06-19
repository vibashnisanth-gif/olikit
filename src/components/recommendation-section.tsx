interface RecommendationSectionProps {
  title?: string
  recommendation: string
  reasons: string[]
  cta?: { label: string; href: string }
}

export function RecommendationSection({ title = "Recommendation", recommendation, reasons, cta }: RecommendationSectionProps) {
  return (
    <section className="rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-8 shadow-sm sm:px-10">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
      <p className="text-sm leading-7 text-zinc-800 mb-4">{recommendation}</p>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
        {reasons.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
      {cta && (
        <a href={cta.href} className="mt-4 inline-block rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800">
          {cta.label}
        </a>
      )}
    </section>
  )
}
