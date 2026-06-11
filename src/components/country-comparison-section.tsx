interface CountryComparisonSectionProps {
  title?: string
  countries: { flag: string; name: string; slug: string }[]
  overview: string
}

export function CountryComparisonSection({ title = "Country Comparison Overview", countries, overview }: CountryComparisonSectionProps) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {countries.map((c, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-2xl">{c.flag}</span>
            <span className="text-sm font-semibold text-zinc-950">{c.name}</span>
          </div>
        ))}
      </div>
      <p className="text-sm leading-7 text-zinc-600">{overview}</p>
    </section>
  )
}
