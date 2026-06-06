import Link from "next/link"
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { getLastUpdated } from "@/lib/seo/freshness"

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
      "Olikit provides free, accurate financial calculators for 7 countries. Learn about our mission, data sources, and methodology.",
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
    "Olikit provides free, accurate financial calculators for 7 countries with localized tax, salary, mortgage, and investment tools.",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <section>
          <h1 className="text-4xl font-bold mb-4">About Olikit</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Free, accurate financial calculators designed for every country we serve.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Olikit makes financial planning accessible to everyone. We provide
            free online calculators that help you understand your salary, taxes,
            mortgage affordability, investment growth, and retirement readiness.
            Every calculator is localized for the country you live in, using
            up-to-date tax brackets, contribution rates, and financial regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li><strong>Salary Calculators</strong> — Take-home pay after income tax, social contributions, and deductions in each country.</li>
            <li><strong>Tax Calculators</strong> — Estimate your income tax liability with progressive brackets, credits, and offsets.</li>
            <li><strong>Mortgage Calculators</strong> — Monthly payments, affordability, stamp duty, and amortization schedules.</li>
            <li><strong>Investment Calculators</strong> — Compound interest projections with regular contributions.</li>
            <li><strong>Retirement Calculators</strong> — Pension readiness with state pension and retirement account projections.</li>
            <li><strong>Business Loan Calculators</strong> — Loan payments, total interest, and affordability analysis.</li>
            <li><strong>Profit Margin Calculators</strong> — Margin, markup, and break-even analysis for businesses.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Data Sources & Methodology</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            Tax brackets, contribution rates, and financial thresholds are sourced from
            official government publications for each country. Every calculator uses
            the most recent published data from the relevant national authority.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            <li>United States — IRS Publication 15, state revenue departments, BLS, SSA</li>
            <li>United Kingdom — HMRC rates and allowances, ONS, gov.uk</li>
            <li>Australia — ATO tax rates, Super Guarantee legislation, ABS</li>
            <li>Canada — CRA tax brackets, CPP/EI contribution rates, Statistics Canada</li>
            <li>India — Income Tax Act, CBDT notifications, EPFO orders, MOSPI</li>
            <li>New Zealand — IRD tax rates, ACC levy schedules, Stats NZ</li>
            <li>Singapore — IRAS tax rates, CPF Board contribution schedules, SingStat</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Localization Methodology</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Every calculator applies country-specific rules. Salary calculators use
            the correct progressive tax brackets, social contribution rates, and
            deduction rules for each jurisdiction. Mortgage calculators factor in
            local stamp duty, transfer taxes, and loan-to-value limits. Retirement
            calculators model each country&apos;s state pension system and tax-advantaged
            retirement accounts. State-level calculators for the US, Australia, Canada, and India
            incorporate regional income tax rates, minimum wage laws, and property tax rules.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Review Process</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            All financial data goes through a structured review process before publication:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mt-3 text-zinc-700 dark:text-zinc-300">
            <li><strong>Source Verification</strong> — Every tax rate, threshold, and contribution limit is traced to its official government publication (IRS revenue procedure, HMRC legislation, ATO ruling, etc.).</li>
            <li><strong>Cross-Reference</strong> — Rates are cross-referenced against at least two independent sources where available, including official government calculators and verified third-party references.</li>
            <li><strong>Calculation Testing</strong> — Each calculator is tested against known scenarios using published government examples or verified third-party calculations to confirm accuracy.</li>
            <li><strong>Peer Review</strong> — Data updates are reviewed by at least one additional team member before deployment to catch errors, omissions, or misinterpretations.</li>
            <li><strong>Post-Deployment Validation</strong> — After each update, calculators are re-tested with sample inputs to confirm the correct rates are applied and results are consistent with expected outcomes.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Update Process</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Financial data is reviewed and updated at least annually following each
            country&apos;s budget cycle. Emergency updates are published within 48 hours
            of any unannounced rate changes. Each page displays the tax year it
            references, so you always know which rates are being applied.
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
            Last updated: {lastUpdated} — Data reflects current tax years.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Data Validation</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Our data validation process ensures accuracy across all 7 countries:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-zinc-700 dark:text-zinc-300">
            <li><strong>Automated Tests</strong> — Each calculator includes scenario-based tests that validate output against known expected values derived from official government examples.</li>
            <li><strong>Tax Year Boundaries</strong> — When tax years change, all affected rates, thresholds, and limits are updated in a coordinated release to prevent mixed-year calculations.</li>
            <li><strong>Regression Detection</strong> — Build-time validation compares current tax rates against previous values to flag unexpected changes that may indicate data entry errors.</li>
            <li><strong>User Feedback Loop</strong> — Data correction reports from users are reviewed and validated against official sources before any adjustments are made.</li>
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
        </section>
      </main>
    </>
  )
}
