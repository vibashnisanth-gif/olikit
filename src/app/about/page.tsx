import Link from "next/link"
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"

export const metadata: Metadata = {
  title: "About Olikit — Free Online Finance & Business Calculators",
  description:
    "Olikit provides free, accurate financial calculators for the United States, United Kingdom, Australia, Canada, India, New Zealand, and Singapore. Learn about our mission, data sources, and localization methodology.",
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
    foundingDate: "2025",
  },
}

export default function AboutPage() {
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
            official government publications for each country:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            <li>United States — IRS Publication 15, state revenue departments</li>
            <li>United Kingdom — HMRC rates and allowances, gov.uk</li>
            <li>Australia — ATO tax rates, Super Guarantee legislation</li>
            <li>Canada — CRA tax brackets, CPP/EI contribution rates</li>
            <li>India — Income Tax Act, CBDT notifications, EPFO orders</li>
            <li>New Zealand — IRD tax rates, ACC levy schedules</li>
            <li>Singapore — IRAS tax rates, CPF Board contribution schedules</li>
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
            retirement accounts. We update our data whenever governments publish
            new rates or fiscal legislation.
          </p>
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
            Last updated: June 2025 — Data reflects 2024-2025 tax years.
          </p>
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
