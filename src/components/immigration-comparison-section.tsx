interface ImmigrationRow {
  factor: string
  countryA: string
  countryB: string
}

interface ImmigrationComparisonSectionProps {
  title?: string
  countryA: { flag: string; name: string }
  countryB: { flag: string; name: string }
  rows: ImmigrationRow[]
}

export function ImmigrationComparisonSection({ title = "Immigration Comparison", countryA, countryB, rows }: ImmigrationComparisonSectionProps) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white shadow-sm">
      <div className="border-b border-zinc-200 px-5 py-5 sm:px-8">
        <h2 className="text-2xl font-semibold text-zinc-950">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-zinc-50">
              <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-900">Factor</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold text-zinc-900">{countryA.name}</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold text-zinc-900">{countryB.name}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-zinc-100">
                <td className="px-4 py-3 font-medium text-zinc-950">{r.factor}</td>
                <td className="px-4 py-3 text-right text-zinc-950 tabular-nums">{r.countryA}</td>
                <td className="px-4 py-3 text-right text-zinc-950 tabular-nums">{r.countryB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
