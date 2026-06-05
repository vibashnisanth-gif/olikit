import type { StateDataPoints } from "@/types/seo"

function formatCurrency(n: number): string {
  if (n >= 1000) return `$${(n / 1000).toFixed(0)},000`
  return `$${n.toFixed(0)}`
}

const rows: { label: string; format: (d: StateDataPoints) => string; tooltip: string }[] = [
  { label: "Average Salary", format: (d) => formatCurrency(d.averageSalary) + "/year", tooltip: "Mean annual wage across all occupations" },
  { label: "Median Household Income", format: (d) => formatCurrency(d.medianHouseholdIncome) + "/year", tooltip: "Median annual income for all households" },
  { label: "Minimum Wage", format: (d) => `$${d.minimumWage.toFixed(2)}/hour`, tooltip: "State minimum wage per hour" },
  { label: "State Income Tax", format: (d) => d.stateIncomeTaxRate, tooltip: "Personal income tax rate range" },
  { label: "Effective Property Tax Rate", format: (d) => `${d.effectivePropertyTaxRate}%`, tooltip: "Annual property tax as percentage of home value" },
  { label: "Median Home Value", format: (d) => formatCurrency(d.medianHomeValue), tooltip: "Median home value estimate" },
  { label: "Cost of Living Index", format: (d) => `${d.costOfLivingIndex} (US=100)`, tooltip: "Overall cost of living relative to US average" },
]

export function StateDataTable({ dataPoints, stateName }: { dataPoints: StateDataPoints; stateName: string }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-zinc-50">
            <th className="px-4 py-3 text-left font-semibold text-zinc-700">Metric</th>
            <th className="px-4 py-3 text-left font-semibold text-zinc-700">{stateName} Value</th>
            <th className="px-4 py-3 text-left font-semibold text-zinc-700">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200">
          {rows.map((row) => (
            <tr key={row.label} className="even:bg-zinc-50">
              <td className="px-4 py-3 font-medium text-zinc-900">{row.label}</td>
              <td className="px-4 py-3 text-zinc-800">{row.format(dataPoints)}</td>
              <td className="px-4 py-3 text-zinc-500">{row.tooltip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
