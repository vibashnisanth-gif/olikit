interface SalaryVsPurchasingPowerSectionProps {
  title?: string
  description?: string
  rows: { country: string; flag: string; salary: string; purchasingPower: string; rank: number }[]
}

export function SalaryVsPurchasingPowerSection({ title = "Salary vs Purchasing Power", description, rows }: SalaryVsPurchasingPowerSectionProps) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white shadow-sm">
      <div className="border-b border-zinc-200 px-5 py-4 sm:px-8">
        <h2 className="text-xl font-semibold text-zinc-950">{title}</h2>
        {description && <p className="mt-1 text-sm text-zinc-500">{description}</p>}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-zinc-50">
              <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-900">Rank</th>
              <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-900">Country</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold text-zinc-900">Avg Salary (USD)</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold text-zinc-900">Purchasing Power</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-zinc-100">
                <td className="px-4 py-3">
                  <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${r.rank <= 3 ? "bg-emerald-100 text-emerald-800" : "bg-zinc-100 text-zinc-500"}`}>
                    {r.rank <= 3 ? ["🥇", "🥈", "🥉"][r.rank - 1] : `#${r.rank}`}
                  </span>
                </td>
                <td className="px-4 py-3 font-medium text-zinc-950">
                  <span className="flex items-center gap-2">
                    <span>{r.flag}</span>
                    {r.country}
                  </span>
                </td>
                <td className="px-4 py-3 text-right font-semibold text-zinc-950 tabular-nums">{r.salary}</td>
                <td className="px-4 py-3 text-right font-semibold text-zinc-950 tabular-nums">{r.purchasingPower}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
