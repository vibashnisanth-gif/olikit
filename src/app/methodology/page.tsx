import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { Shell } from "@/components/shell"

export const metadata: Metadata = {
  title: "Methodology — How Olikit Calculates Data",
  description: "Learn how Olikit calculates taxes, salaries, and financial metrics. Our methodology covers data collection, formulas, verification processes, and update frequency.",
  alternates: { canonical: `${SITE_URL}/methodology` },
}

export default function MethodologyPage() {
  return (
    <Shell>
      <div className="space-y-8 max-w-3xl">
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Methodology</h1>
        <p className="mt-3 text-lg leading-8 text-zinc-600">
          How Olikit calculates taxes, salaries, and financial metrics.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Scoring Systems</h2>
        <p className="text-sm leading-7 text-zinc-600">
          Olikit uses five proprietary scoring systems to evaluate compensation, purchasing power, relocation feasibility, career opportunities, and net earning potential. These scores power our country comparisons, rankings, and global research reports. <a href="/methodology/olikit-scoring-system" className="text-emerald-700 hover:text-emerald-600 font-medium">View the full scoring methodology →</a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Tax Calculations</h2>
        <p className="text-sm leading-7 text-zinc-600">
          Income tax calculations use official tax brackets, rates, and thresholds published by each country's tax authority. For the United States, we use <a href="https://www.irs.gov/pub/irs-drop/n-25-26.pdf" className="text-emerald-700 hover:text-emerald-600 font-medium">IRS Revenue Procedure tax tables</a> plus state-specific brackets where applicable. For the United Kingdom, we use <a href="https://www.gov.uk/government/publications/rates-and-allowances-income-tax/rates-and-allowances-income-tax" className="text-emerald-700 hover:text-emerald-600 font-medium">HMRC tax bands</a> including personal allowance, basic rate, higher rate, and additional rate. Australian calculations use <a href="https://www.ato.gov.au/tax-rates-and-codes/tax-rates" className="text-emerald-700 hover:text-emerald-600 font-medium">ATO tax rates</a> including the Medicare levy. Canadian calculations use <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/federal-income-tax-rates.html" className="text-emerald-700 hover:text-emerald-600 font-medium">CRA federal and provincial tax brackets</a>. New Zealand uses <a href="https://www.ird.govt.nz/income-tax/income-tax-for-individuals" className="text-emerald-700 hover:text-emerald-600 font-medium">IRD tax bands</a>. India uses Indian Income Tax Department slabs with cess. Singapore uses <a href="https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-rates" className="text-emerald-700 hover:text-emerald-600 font-medium">IRAS progressive tax rates</a>.
        </p>
        <p className="text-sm leading-7 text-zinc-600 mt-3">
          Sales tax, VAT, and GST calculations use the applicable rates for each country and state. US sales tax rates include state and local components. UK VAT is calculated at the standard 20% rate with applicable reduced rates. Australian GST is 10%. Canadian GST/HST varies by province. New Zealand GST is 15%. Indian GST has multiple slabs. Singapore GST is 9%.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Salary Data</h2>
        <p className="text-sm leading-7 text-zinc-600">
          Salary figures represent average annual salaries aggregated from government labor statistics, industry compensation surveys, and publicly available data sources for each country. Key sources include the <a href="https://www.bls.gov/oes/" className="text-emerald-700 hover:text-emerald-600 font-medium">BLS Occupational Employment and Wage Statistics (OEWS)</a> for the US, <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earnings" className="text-emerald-700 hover:text-emerald-600 font-medium">ONS Annual Survey of Hours and Earnings (ASHE)</a> for the UK, and equivalent statistical publications in Australia, Canada, New Zealand, India, and Singapore. Data is updated on a periodic basis. Figures are indicative averages and may vary based on experience, location, industry, and other factors.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Update Frequency</h2>
        <p className="text-sm leading-7 text-zinc-600">
          Tax data is updated annually when governments release new tax year brackets and rates. Salary data is reviewed periodically with major updates before each tax year. Each page displays its last updated date. We monitor official government announcements for changes that affect our calculations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Verification</h2>
        <p className="text-sm leading-7 text-zinc-600">
          All calculations are verified against official government tax calculators and published tax tables where available. Sample calculations are run manually each update cycle to ensure accuracy. Users can verify calculations using official government resources linked on each page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Best Services Selection Methodology</h2>
        <p className="text-sm leading-7 text-zinc-600">
          Our recommended financial services (money transfer, tax software, investment platforms) are selected based on a transparent scoring framework across six criteria:
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-600">
          <li><strong className="text-zinc-950">Fees (25%)</strong> — Total cost of using the service including transfer fees, transaction fees, monthly fees, and hidden charges. Lower-weighted services score higher.</li>
          <li><strong className="text-zinc-950">Exchange Rate (25%)</strong> — How close the offered exchange rate is to the mid-market rate. Services offering real or near-real exchange rates score highest.</li>
          <li><strong className="text-zinc-950">Speed (15%)</strong> — How quickly transfers or transactions are completed. Same-day or instant services score highest.</li>
          <li><strong className="text-zinc-950">Coverage (15%)</strong> — Number of countries, currencies, and payment methods supported. Broader coverage scores higher.</li>
          <li><strong className="text-zinc-950">Trust &amp; Regulation (10%)</strong> — Regulatory oversight, licensing, user reviews, and company history. FCA, FCA-regulated, and equivalent bodies add points.</li>
          <li><strong className="text-zinc-950">User Experience (10%)</strong> — App ratings, website usability, customer support quality, and ease of onboarding.</li>
        </ul>
        <p className="mt-3 text-sm leading-7 text-zinc-600">
          Services are evaluated for each country independently, as availability, fees, and features vary by market. We prioritize services that offer tangible value to users (lower fees, better rates, faster service) over commission rates. Some links are affiliate links — we may earn a commission if you sign up through these links, at no additional cost to you. Our recommendations are based on the scoring framework above, not on affiliate commission rates.
        </p>
        <p className="mt-3 text-sm leading-7 text-zinc-600">
          Scores are reviewed quarterly to account for fee changes, new feature releases, and market developments. Services that no longer meet our criteria are replaced with better alternatives.
        </p>
      </section>
    </div>
    </Shell>
  )
}
