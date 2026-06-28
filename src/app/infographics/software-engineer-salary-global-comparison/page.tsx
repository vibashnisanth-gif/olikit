import {Metadata} from "next";
import Link from "next/link";
import {SITE_URL} from "@/lib/seo/constants";

export const metadata: Metadata = {
  title: "Software Engineer Salary: US vs UK vs Australia vs Canada (2026)",
  description:
    "Visual comparison of software engineer salaries across 7 countries. Original data with cost of living adjustments, tax impact, and purchasing power analysis.",
  openGraph: {
    title: "Software Engineer Salary: Global Comparison 2026",
    description:
      "How much do software engineers earn in each country? Visual salary comparison with cost of living adjustments.",
    url: `${SITE_URL}/infographics/software-engineer-salary-global-comparison`,
    siteName: "Olikit",
    type: "article",
  },
};

const salaryData = [
  {
    country: "United States",
    flag: "🇺🇸",
    salary: 120000,
    taxRate: 26,
    colIndex: 78,
    takeHome: 88800,
    purchasingPower: 113846,
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    salary: 110000,
    taxRate: 28,
    colIndex: 74,
    takeHome: 79200,
    purchasingPower: 107027,
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    salary: 85000,
    taxRate: 30,
    colIndex: 66,
    takeHome: 59500,
    purchasingPower: 90152,
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    salary: 95000,
    taxRate: 29,
    colIndex: 68,
    takeHome: 67450,
    purchasingPower: 99191,
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    salary: 55000,
    taxRate: 32,
    colIndex: 62,
    takeHome: 37400,
    purchasingPower: 60323,
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    salary: 72000,
    taxRate: 11,
    colIndex: 84,
    takeHome: 64080,
    purchasingPower: 76286,
  },
  {
    country: "India",
    flag: "🇮🇳",
    salary: 12000,
    taxRate: 18,
    colIndex: 28,
    takeHome: 9840,
    purchasingPower: 35143,
  },
];

const maxSalary = Math.max(...salaryData.map((d) => d.salary));

export default function SalaryInfographicPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Infographics</span>
      </nav>

      <h1 className="mb-2 text-3xl font-bold text-gray-900">
        Software Engineer Salary: Global Comparison 2026
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        How much do software engineers earn in each country? Original data with cost of living and
        tax adjustments.
      </p>

      {/* Main comparison chart */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          Average Software Engineer Salary by Country
        </h2>
        <div className="space-y-4">
          {salaryData.map((d) => (
            <div key={d.country} className="flex items-center gap-4">
              <div className="w-32 text-right text-sm font-medium text-gray-700">
                {d.flag} {d.country}
              </div>
              <div className="flex-1">
                <div className="relative h-8 rounded bg-gray-100">
                  <div
                    className="absolute left-0 top-0 flex h-full items-center rounded bg-blue-600 pl-3 text-sm font-bold text-white"
                    style={{width: `${(d.salary / maxSalary) * 100}%`}}
                  >
                    ${d.salary.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key insights */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">Key Insights</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-2 text-lg font-bold text-blue-900">🇺🇸 Highest Nominal Salary</h3>
            <p className="text-3xl font-bold text-blue-700">$120,000</p>
            <p className="mt-1 text-sm text-blue-600">United States leads in raw salary terms</p>
          </div>
          <div className="rounded-lg border border-green-200 bg-green-50 p-6">
            <h3 className="mb-2 text-lg font-bold text-green-900">🇸🇬 Best Tax Efficiency</h3>
            <p className="text-3xl font-bold text-green-700">89% Take-Home</p>
            <p className="mt-1 text-sm text-green-600">Singapore: $72K → $64K after tax</p>
          </div>
          <div className="rounded-lg border border-purple-200 bg-purple-50 p-6">
            <h3 className="mb-2 text-lg font-bold text-purple-900">🇮🇳 Best Purchasing Power</h3>
            <p className="text-3xl font-bold text-purple-700">2.9x Multiplier</p>
            <p className="mt-1 text-sm text-purple-600">$12K in India = $35K lifestyle in NYC</p>
          </div>
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-6">
            <h3 className="mb-2 text-lg font-bold text-orange-900">🇦🇺 Best Salary-to-COL Ratio</h3>
            <p className="text-3xl font-bold text-orange-700">1.49x</p>
            <p className="mt-1 text-sm text-orange-600">Salary outpaces cost of living by 49%</p>
          </div>
        </div>
      </section>

      {/* Detailed breakdown table */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">Detailed Breakdown</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-medium text-gray-900">Country</th>
                <th className="px-4 py-3 font-medium text-gray-900">Salary</th>
                <th className="px-4 py-3 font-medium text-gray-900">Tax Rate</th>
                <th className="px-4 py-3 font-medium text-gray-900">Take-Home</th>
                <th className="px-4 py-3 font-medium text-gray-900">CoL Index</th>
                <th className="px-4 py-3 font-medium text-gray-900">Purchasing Power</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {salaryData.map((d) => (
                <tr key={d.country}>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {d.flag} {d.country}
                  </td>
                  <td className="px-4 py-3">${d.salary.toLocaleString()}</td>
                  <td className="px-4 py-3">{d.taxRate}%</td>
                  <td className="px-4 py-3 font-medium text-green-700">
                    ${d.takeHome.toLocaleString()}
                  </td>
                  <td className="px-4 py-3">{d.colIndex}</td>
                  <td className="px-4 py-3 font-medium text-blue-700">
                    ${d.purchasingPower.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Purchasing power = take-home pay adjusted for cost of living. Higher = more purchasing
          power.
        </p>
      </section>

      {/* Tax comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          Tax Impact: Where Does Your Money Go?
        </h2>
        <div className="space-y-3">
          {salaryData
            .sort((a, b) => a.taxRate - b.taxRate)
            .map((d) => (
              <div key={d.country} className="flex items-center gap-4">
                <div className="w-32 text-right text-sm font-medium text-gray-700">
                  {d.flag} {d.country}
                </div>
                <div className="flex-1">
                  <div className="relative h-6 rounded bg-gray-100">
                    <div
                      className="absolute left-0 top-0 flex h-full items-center rounded bg-green-500 pl-2 text-xs font-bold text-white"
                      style={{width: `${100 - d.taxRate}%`}}
                    >
                      {100 - d.taxRate}%
                    </div>
                    <div
                      className="absolute right-0 top-0 flex h-full items-center justify-end rounded bg-red-400 pr-2 text-xs font-bold text-white"
                      style={{width: `${d.taxRate}%`}}
                    >
                      {d.taxRate}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Green = take-home pay. Red = tax. Singapore has the lightest tax burden.
        </p>
      </section>

      {/* Embed this infographic */}
      <section className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">Embed This Infographic</h2>
        <p className="mb-3 text-sm text-gray-600">
          Share this data on your website or blog. Link back to Olikit for the full dataset.
        </p>
        <code className="block rounded bg-gray-900 p-3 text-sm text-green-400">
          {`<a href="https://olikit.com/infographics/software-engineer-salary-global-comparison">Software Engineer Salary: Global Comparison 2026</a> — Data from Olikit`}
        </code>
      </section>

      {/* CTA */}
      <section className="mb-8">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
          <h3 className="mb-2 text-lg font-semibold text-blue-900">Explore the Full Dataset</h3>
          <p className="mb-4 text-blue-700">
            30 professions, 7 countries, cost of living adjustments, and tax calculations.
          </p>
          <Link
            href="/us/research/global-salary-report-2026"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Read the Full Report
          </Link>
        </div>
      </section>

      {/* Methodology */}
      <section className="text-sm text-gray-500">
        <p>
          <strong>Methodology:</strong> Salary data from BLS, ONS, ABS, Statistics Canada, Stats NZ.
          Tax rates from OECD. Cost of living from Numbeo. All figures in USD equivalent. June 2026.
        </p>
      </section>
    </div>
  );
}
