import Link from "next/link"
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { getLastUpdated } from "@/lib/seo/freshness"
import { Shell } from "@/components/shell"

export const metadata: Metadata = {
  title: "About Olikit — Free Online Finance & Business Calculators",
  description:
    "Olikit provides free, accurate financial calculators for the United States, United Kingdom, Australia, Canada, India, New Zealand, and Singapore. Learn about our mission, data sources, and methodology.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Olikit — Free Online Finance & Business Calculators",
    description:
      "Olikit provides free, accurate financial calculators across major economies. Learn about our mission, data sources, and methodology.",
    url: `${SITE_URL}/about`,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Olikit",
  description:
    "Olikit provides free, accurate financial calculators across major economies with localized tax, salary, mortgage, and investment tools.",
  url: `${SITE_URL}/about`,
  mainEntity: {
    "@type": "Organization",
    name: "Olikit",
    url: SITE_URL,
    description:
      "Free online finance and business calculators with multi-country support.",
    foundingDate: "2026",
  },
}

export default function AboutPage() {
  const lastUpdated = getLastUpdated()
  return (
    <Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <section>
          <h1 className="text-4xl font-bold mb-4">About Olikit</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Free, accurate financial calculators designed for every country we serve. Olikit helps you understand your salary, taxes, mortgage, investments, and retirement across major economies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">What Is Olikit?</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Olikit is a free online financial tools platform that provides salary calculators, tax calculators, mortgage calculators, investment calculators, retirement planners, business loan calculators, and profit margin calculators. Every tool is fully localized for the United States, United Kingdom, Australia, Canada, India, New Zealand, and Singapore. We also provide state-level calculators for regions with sub-national tax systems.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mt-3">
            Our mission is to make financial planning accessible to everyone, regardless of where they live. We do not sell user data, require accounts, or charge for any calculator. Every tool is free to use, ad-supported, and updated annually to reflect the latest tax laws and financial regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Methodology</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Every calculator on Olikit applies country-specific rules sourced from official government publications. Salary calculators use the correct progressive tax brackets, social contribution rates, and deduction rules for each jurisdiction. Mortgage calculators factor in local stamp duty, transfer taxes, and loan-to-value limits. Retirement calculators model each country&apos;s state pension system and tax-advantaged retirement accounts.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mt-3">
            State-level calculators for the US, Australia, Canada, and India incorporate regional income tax rates, minimum wage laws, and property tax rules. When tax years change, all affected rates, thresholds, and limits are updated in a coordinated release to prevent mixed-year calculations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Data Sources</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            Tax brackets, contribution rates, and financial thresholds are sourced from official government publications for each country. Every calculator uses the most recent published data from the relevant national authority:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            <li>United States — IRS Publication 15, state revenue departments, Bureau of Labor Statistics, Social Security Administration</li>
            <li>United Kingdom — HMRC rates and allowances, Office for National Statistics, gov.uk</li>
            <li>Australia — Australian Taxation Office tax rates, Super Guarantee legislation, Australian Bureau of Statistics</li>
            <li>Canada — Canada Revenue Agency tax brackets, CPP/EI contribution rates, Statistics Canada</li>
            <li>India — Income Tax Act, CBDT notifications, EPFO orders, Ministry of Statistics</li>
            <li>New Zealand — Inland Revenue Department tax rates, ACC levy schedules, Stats NZ</li>
            <li>Singapore — IRAS tax rates, CPF Board contribution schedules, Department of Statistics</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Review and Update Process</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            All financial data goes through a structured process before publication:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mt-3 text-zinc-700 dark:text-zinc-300">
            <li><strong>Source Verification</strong> — Every tax rate, threshold, and contribution limit is traced to its official government publication (IRS revenue procedure, HMRC legislation, ATO ruling, etc.).</li>
            <li><strong>Cross-Reference</strong> — Rates are cross-referenced against at least two independent sources where available, including official government calculators and verified third-party references.</li>
            <li><strong>Calculation Testing</strong> — Each calculator is tested against known scenarios using published government examples or verified third-party calculations to confirm accuracy.</li>
            <li><strong>Build-Time Validation</strong> — Automated tests at build time validate calculator output against known expected values derived from official government examples.</li>
            <li><strong>Regression Detection</strong> — Build-time validation compares current tax rates against previous values to flag unexpected changes that may indicate data entry errors.</li>
            <li><strong>Post-Deployment Validation</strong> — After each update, calculators are re-tested with sample inputs to confirm the correct rates are applied.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Update Frequency</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Financial data is reviewed and updated at least annually following each country&apos;s budget cycle. Emergency updates are published within 48 hours of any unannounced rate changes. Each page displays the tax year it references, so you always know which rates are being applied.
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
            Last updated: {lastUpdated} — Data reflects current tax years.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Why Trust Olikit?</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Olikit is designed for accuracy and transparency. Every calculation is based on official government data, not estimates. Our calculators are tested against published examples from tax authorities. When rates change, we update them promptly and flag which tax year each calculator references. We do not fabricate data or use unofficial sources.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mt-3">
            Olikit is ad-supported, which means all calculators remain free to use. We do not require accounts, email sign-ups, or personal information to use any tool. Our privacy policy outlines exactly what data we collect and how it is used.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li><strong>Salary Calculators</strong> — Take-home pay after income tax, social contributions, and deductions in each country. State-level calculators for the US, Australia, Canada, and India.</li>
            <li><strong>Tax Calculators</strong> — Estimate your income tax liability with progressive brackets, credits, and offsets.</li>
            <li><strong>Mortgage Calculators</strong> — Monthly payments, affordability, stamp duty, and amortization schedules.</li>
            <li><strong>Investment Calculators</strong> — Compound interest projections with regular contributions.</li>
            <li><strong>Retirement Calculators</strong> — Pension readiness with state pension and retirement account projections.</li>
            <li><strong>Business Loan Calculators</strong> — Loan payments, total interest, and affordability analysis.</li>
            <li><strong>Profit Margin Calculators</strong> — Margin, markup, and break-even analysis for businesses.</li>
            <li><strong>Salary Guides</strong> — Average salary data, cost of living comparisons, and salary by state pages.</li>
          </ul>
        </section>

        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-3">Start Calculating</h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Browse our calculators by country:{" "}
            <Link href="/us" className="text-blue-600 hover:underline">United States</Link>,{" "}
            <Link href="/uk" className="text-blue-600 hover:underline">United Kingdom</Link>,{" "}
            <Link href="/au" className="text-blue-600 hover:underline">Australia</Link>,{" "}
            <Link href="/ca" className="text-blue-600 hover:underline">Canada</Link>,{" "}
            <Link href="/in" className="text-blue-600 hover:underline">India</Link>,{" "}
            <Link href="/nz" className="text-blue-600 hover:underline">New Zealand</Link>,{" "}
            <Link href="/sg" className="text-blue-600 hover:underline">Singapore</Link>.
          </p>
          <p className="mt-4">
            <Link href="/us/salary" className="text-blue-600 hover:underline font-medium">Explore Salary Resources</Link>
            {" "}&mdash; Average salary data, cost of living comparisons, and salary guides.
          </p>
        </section>
      </div>
    </Shell>
  )
}
