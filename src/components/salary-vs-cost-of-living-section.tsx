import { FlagImage } from "@/components/ui/flag-image"
interface SalaryVsCostOfLivingSectionProps {
  title?: string
  description?: string
  rows: { city: string; country: string; slug: string; flag: string; salary: string; costOfLiving: string; colIndex: string }[]
}

export function SalaryVsCostOfLivingSection({ title = "Salary vs Cost of Living", description, rows }: SalaryVsCostOfLivingSectionProps) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white shadow-sm">
      <div className="border-b border-zinc-200 px-5 py-5 sm:px-8">
        <h2 className="text-2xl font-semibold text-zinc-950">{title}</h2>
        {description && <p className="mt-1.5 text-sm text-zinc-700">{description}</p>}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-zinc-50">
              <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-900">City</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold text-zinc-900">Avg Salary (USD)</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold text-zinc-900">Cost of Living</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold text-zinc-900">Cost of Living Index</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-zinc-100">
                <td className="px-4 py-3 font-medium text-zinc-950">
                  <span className="flex items-center gap-2">
                    <span><FlagImage code={r.slug} name={r.country} size="lg" /></span>
                    {r.city}, {r.country}
                  </span>
                </td>
                <td className="px-4 py-3 text-right font-semibold text-zinc-950 tabular-nums">{r.salary}</td>
                <td className="px-4 py-3 text-right font-semibold text-zinc-950 tabular-nums">{r.costOfLiving}</td>
                <td className="px-4 py-3 text-right text-zinc-500 tabular-nums">{r.colIndex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
