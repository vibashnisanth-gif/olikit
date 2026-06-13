interface RankingRow {
  rank: number
  label: string
  value: string
  secondary?: string
  href?: string
  flag?: string
}

interface RankingTableSectionProps {
  title: string
  description?: string
  columns: string[]
  rows: RankingRow[]
}

export function RankingTableSection({ title, description, columns, rows }: RankingTableSectionProps) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white shadow-sm">
      <div className="border-b border-zinc-200 px-5 py-5 sm:px-8">
        <h2 className="text-2xl font-semibold text-zinc-950">{title}</h2>
        {description && <p className="mt-1.5 text-sm text-zinc-600">{description}</p>}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-zinc-50">
              {columns.map((col, i) => (
                <th key={i} className={`px-4 py-3 text-left font-medium text-zinc-700 ${i === columns.length - 1 ? "text-right" : ""}`}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-zinc-100">
                <td className="px-4 py-3">
                  <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${row.rank <= 3 ? "bg-emerald-100 text-emerald-800" : "bg-zinc-100 text-zinc-500"}`}>
                    {row.rank <= 3 ? ["🥇", "🥈", "🥉"][row.rank - 1] : `#${row.rank}`}
                  </span>
                </td>
                <td className="px-4 py-3 font-medium text-zinc-950">
                  {row.href ? (
                    <a href={row.href} className="flex items-center gap-2 hover:text-emerald-700">
                      {row.flag && <span>{row.flag}</span>}
                      {row.label}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2">
                      {row.flag && <span>{row.flag}</span>}
                      {row.label}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-right font-semibold text-zinc-950 tabular-nums">{row.value}</td>
                {row.secondary && <td className="px-4 py-3 text-right text-zinc-500 tabular-nums">{row.secondary}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
