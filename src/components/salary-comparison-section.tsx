interface SalaryRow {
  label: string
  countryA: string
  countryB: string
}

interface SalaryComparisonSectionProps {
  title?: string
  countryA: { flag: string; name: string }
  countryB: { flag: string; name: string }
  rows: SalaryRow[]
  notes?: string
}

export function SalaryComparisonSection({ title = "Salary Comparison", countryA, countryB, rows, notes }: SalaryComparisonSectionProps) {
  return (
    <section className="rounded-xl border border-border-light bg-surface-primary shadow-sm">
      <div className="border-b border-border-light px-6 py-4 sm:px-8">
        <h2 className="text-xl font-semibold tracking-tight text-text-primary">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-muted">
              <th className="px-4 py-3 text-left font-medium text-text-secondary">Category</th>
              <th className="px-4 py-3 text-right font-medium text-text-secondary">
                <span className="flex items-center justify-end gap-1">
                  <span>{countryA.flag}</span>
                  {countryA.name}
                </span>
              </th>
              <th className="px-4 py-3 text-right font-medium text-text-secondary">
                <span className="flex items-center justify-end gap-1">
                  <span>{countryB.flag}</span>
                  {countryB.name}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-border-light">
                <td className="px-4 py-3 font-medium text-text-primary">{r.label}</td>
                <td className="px-4 py-3 text-right font-semibold text-text-primary tabular-nums">{r.countryA}</td>
                <td className="px-4 py-3 text-right font-semibold text-text-primary tabular-nums">{r.countryB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {notes && <p className="border-t border-border-light px-6 py-3 text-xs text-text-muted">{notes}</p>}
    </section>
  )
}
