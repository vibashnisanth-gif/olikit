interface CareerOpportunityComparisonSectionProps {
  title?: string
  countryA: { flag: string; name: string }
  countryB: { flag: string; name: string }
  rows: { category: string; countryA: string; countryB: string }[]
}

export function CareerOpportunityComparisonSection({ title = "Career Opportunity Comparison", countryA, countryB, rows }: CareerOpportunityComparisonSectionProps) {
  return (
    <section className="rounded-xl border border-border-light bg-surface-primary shadow-sm">
      <div className="border-b border-border-light px-6 py-4 sm:px-8">
        <h2 className="text-xl font-semibold tracking-tight text-text-primary">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-muted">
              <th className="px-4 py-3 text-left font-medium text-text-secondary">Factor</th>
              <th className="px-4 py-3 text-right font-medium text-text-secondary">{countryA.name}</th>
              <th className="px-4 py-3 text-right font-medium text-text-secondary">{countryB.name}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-border-light">
                <td className="px-4 py-3 font-medium text-text-primary">{r.category}</td>
                <td className="px-4 py-3 text-right text-text-primary tabular-nums">{r.countryA}</td>
                <td className="px-4 py-3 text-right text-text-primary tabular-nums">{r.countryB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
