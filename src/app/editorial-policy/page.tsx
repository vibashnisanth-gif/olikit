import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
export const metadata: Metadata = {
  title: "Editorial Policy — Accuracy & Transparency",
  description: "Olikit's editorial policy covers our commitment to accuracy, transparency, and independence in financial data, salary research, and tax calculations.",
  alternates: { canonical: `${SITE_URL}/editorial-policy` },
  openGraph: {
    title: "Editorial Policy — Accuracy & Transparency",
    description: "Olikit's editorial policy covers our commitment to accuracy, transparency, and independence in financial data, salary research, and tax calculations.",
    url: `${SITE_URL}/editorial-policy`,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Policy — Accuracy & Transparency",
    description: "Olikit's editorial policy covers our commitment to accuracy, transparency, and independence in financial data, salary research, and tax calculations.",
  },
}

export default function EditorialPolicyPage() {
  return (
      <div className="space-y-8 max-w-3xl">
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Editorial Policy</h1>
        <p className="mt-3 text-lg leading-8 text-zinc-600">
          Our commitment to accuracy, transparency, and independence in financial data and salary research.
        </p>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Content Review Process</h2>
        <p className="text-sm leading-7 text-zinc-600 mb-3">
          Every page on Olikit goes through a structured review process before publication. Our team verifies that all salary figures, tax calculations, and cost-of-living data are sourced from official government publications. We cross-reference each calculation against published tax tables, government calculators, and statistical releases to ensure accuracy.
        </p>
        <p className="text-sm leading-7 text-zinc-600">
          Content is reviewed by at least one team member with relevant domain expertise. Pages covering tax law changes, new salary data releases, or regulatory updates are flagged for priority review and updated within 48 hours of the source publication.
        </p>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Data Sources & Verification</h2>
        <p className="text-sm leading-7 text-zinc-600 mb-3">
          All financial data on Olikit is derived from publicly available government sources. We do not use proprietary databases, paid data feeds, or unverified crowd-sourced data. Our primary sources include:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm leading-7 text-zinc-600 mb-3">
          <li>Internal Revenue Service (IRS) — United States federal tax brackets and standard deductions</li>
          <li>Bureau of Labor Statistics (BLS) — U.S. salary and employment data</li>
          <li>HM Revenue & Customs (HMRC) — United Kingdom tax rates and National Insurance</li>
          <li>Office for National Statistics (ONS) — UK salary and economic data</li>
          <li>Australian Taxation Office (ATO) — Australian tax rates and Medicare Levy</li>
          <li>Australian Bureau of Statistics (ABS) — Australian salary and cost data</li>
          <li>Canada Revenue Agency (CRA) — Canadian federal and provincial tax brackets</li>
          <li>Statistics Canada — Canadian salary and employment data</li>
          <li>Inland Revenue Department (IRD) — New Zealand tax rates and ACC levy</li>
          <li>Stats NZ — New Zealand salary and economic data</li>
          <li>Indian Income Tax Department — Indian tax regimes and cess</li>
          <li>Inland Revenue Authority of Singapore (IRAS) — Singapore CPF and tax rates</li>
          <li>Singapore Department of Statistics (SingStat) — Singapore salary data</li>
        </ul>
        <p className="text-sm leading-7 text-zinc-600">
          Each data source is linked on the relevant page. Users can independently verify any figure by following the source link to the original government publication.
        </p>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Calculation Methodology</h2>
        <p className="text-sm leading-7 text-zinc-600 mb-3">
          Olikit uses progressive tax bracket calculations for all jurisdictions. We apply the current-year tax brackets, standard deductions, and social contribution rates published by each government. Our calculators account for:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm leading-7 text-zinc-600 mb-3">
          <li>Federal/national income tax with progressive marginal rates</li>
          <li>State/provincial income tax where applicable</li>
          <li>Social security and national insurance contributions</li>
          <li>Healthcare levies (e.g., Medicare Levy in Australia, IRAS contributions in Singapore)</li>
          <li>Retirement contributions (e.g., 401(k) in the US, superannuation in Australia, CPF in Singapore)</li>
        </ul>
        <p className="text-sm leading-7 text-zinc-600">
          Our detailed methodology for each calculation is documented on the methodology page. We do not make simplifying assumptions that would materially alter the result. Where official data is unavailable or incomplete, we clearly note the limitation.
        </p>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Salary Data Methodology</h2>
        <p className="text-sm leading-7 text-zinc-600 mb-3">
          Salary figures on Olikit are compiled from government labor statistics, compensation surveys, and official employment data. We normalize salaries for cross-country comparison using the following approach:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm leading-7 text-zinc-600 mb-3">
          <li>Entry-level, average, and experienced salary figures are sourced from official statistics</li>
          <li>Salaries are presented in local currency and converted to USD for comparison</li>
          <li>Purchasing power parity (PPP) adjustments are applied using World Bank data</li>
          <li>Cost-of-living adjustments use official government cost indices</li>
        </ul>
        <p className="text-sm leading-7 text-zinc-600">
          Individual outcomes vary based on experience, industry, employer, location within a country, and negotiation. Our figures represent population-level averages and medians, not individual guarantees.
        </p>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Editorial Independence</h2>
        <p className="text-sm leading-7 text-zinc-600 mb-3">
          Olikit operates independently. Our financial data, salary research, and tax calculations are not influenced by advertisers, affiliates, or any third parties. We maintain a strict separation between our editorial content and any commercial relationships.
        </p>
        <p className="text-sm leading-7 text-zinc-600">
          Affiliate partnerships, where they exist, are clearly disclosed with a visible label on the relevant page. Affiliate relationships never affect the accuracy, objectivity, or ranking of our financial data or editorial recommendations. We do not accept payment for favorable rankings, data placement, or editorial coverage.
        </p>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Advertising Disclosure</h2>
        <p className="text-sm leading-7 text-zinc-600 mb-3">
          Olikit displays advertisements to support our free content. Ads are clearly labeled and do not influence our editorial content, salary data, or tax calculations. We do not allow advertisers to dictate, review, or approve our editorial content.
        </p>
        <p className="text-sm leading-7 text-zinc-600">
          Advertisements are served through Google AdSense and are subject to Google&apos;s advertising policies. The presence of an ad does not constitute an endorsement of the advertised product or service by Olikit.
        </p>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Corrections & Updates</h2>
        <p className="text-sm leading-7 text-zinc-600 mb-3">
          We take accuracy seriously. If you identify an error in our data, calculations, or editorial content, please contact us at <a href="mailto:editorial@olikit.com" className="text-blue-700 underline underline-offset-2 hover:text-blue-800">editorial@olikit.com</a>. We investigate all reports promptly and correct verified errors within 48 hours.
        </p>
        <p className="text-sm leading-7 text-zinc-600 mb-3">
          We maintain a record of significant corrections and updates on our <a href="/corrections" className="text-blue-700 underline underline-offset-2 hover:text-blue-800">corrections page</a>. Minor formatting changes, typographical fixes, and non-material updates are not listed individually.
        </p>
        <p className="text-sm leading-7 text-zinc-600">
          Tax data and salary figures are reviewed and updated at least annually, or when significant government revisions become available. When data is updated, the &quot;Last updated&quot; date on the relevant page is revised to reflect the change.
        </p>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">User Trust & Safety</h2>
        <p className="text-sm leading-7 text-zinc-600 mb-3">
          Olikit does not collect sensitive personal financial information from users. Our calculators process inputs locally in the browser and do not store individual salary or tax data on our servers.
        </p>
        <p className="text-sm leading-7 text-zinc-600">
          Our <a href="/privacy-policy" className="text-blue-700 underline underline-offset-2 hover:text-blue-800">privacy policy</a> details how we handle analytics data, cookies, and advertising. We comply with applicable privacy regulations including GDPR and CCPA.
        </p>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Limitations & Disclaimers</h2>
        <p className="text-sm leading-7 text-zinc-600 mb-3">
          Olikit provides financial data and calculations for informational and educational purposes only. Our content does not constitute financial advice, tax advice, or career advice. Users should consult qualified professionals for decisions based on their individual circumstances.
        </p>
        <p className="text-sm leading-7 text-zinc-600">
          Salary figures represent population-level averages and may not reflect individual outcomes. Tax calculations are estimates based on published brackets and may not account for all deductions, credits, or special circumstances applicable to individual taxpayers.
        </p>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 sm:px-8">
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Policy Updates</h2>
        <p className="text-sm leading-7 text-zinc-600">
          This editorial policy is reviewed and updated periodically. The last update was June 2026. Major changes to our editorial practices, data sources, or methodology will be noted here and on our <a href="/updates" className="text-blue-700 underline underline-offset-2 hover:text-blue-800">updates page</a>.
        </p>
      </section>
    </div>
  )
}
