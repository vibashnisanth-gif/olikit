import { Button } from "./ui/button"

interface RecommendationSectionProps {
  title?: string
  recommendation: string
  reasons: string[]
  cta?: { label: string; href: string }
}

export function RecommendationSection({ title = "Recommendation", recommendation, reasons, cta }: RecommendationSectionProps) {
  return (
    <section className="rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-8 shadow-sm sm:px-10">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-text-primary">{title}</h2>
      <p className="text-sm leading-7 text-text-secondary mb-4">{recommendation}</p>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-text-secondary">
        {reasons.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
      {cta && <Button href={cta.href} variant="primary" className="mt-4">{cta.label}</Button>}
    </section>
  )
}
