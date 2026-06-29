import { FlagImage } from "@/components/ui/flag-image"
interface CountryComparisonSectionProps {
  title?: string
  countries: { flag: string; name: string; slug: string }[]
  overview: string
}

export function CountryComparisonSection({ title = "Country Comparison Overview", countries, overview }: CountryComparisonSectionProps) {
  return (
    <section className="rounded-xl border border-border-light bg-surface-primary px-6 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-text-primary">{title}</h2>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {countries.map((c, i) => (
          <div key={i} className="flex items-center gap-2">
            <FlagImage code={c.slug} size="xl" />
            <span className="text-sm font-semibold text-text-primary">{c.name}</span>
          </div>
        ))}
      </div>
      <p className="text-sm leading-7 text-text-secondary">{overview}</p>
    </section>
  )
}
