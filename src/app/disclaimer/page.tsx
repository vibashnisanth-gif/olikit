import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
export const metadata: Metadata = {
  title: "Disclaimer — Olikit",
  description:
    "Olikit disclaimer — all calculators are for educational purposes only. We do not provide financial, investment, tax, or legal advice.",
  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
  },
  openGraph: {
    title: "Disclaimer — Olikit",
    description:
      "Olikit calculators are for educational purposes only. No financial, investment, tax, or legal advice is provided.",
    url: `${SITE_URL}/disclaimer`,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer — Olikit",
    description: "Olikit calculators are for educational purposes only. No financial, investment, tax, or legal advice is provided.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Disclaimer",
  description: "Olikit disclaimer — educational purposes only. No financial advice.",
  url: `${SITE_URL}/disclaimer`,
  isPartOf: {
    "@type": "WebSite",
    name: "Olikit",
    url: SITE_URL,
  },
}

export default function DisclaimerPage() {
  return (
      <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl space-y-10">
        <section>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Disclaimer</h1>
          <p className="mt-3 text-sm text-zinc-500 mb-4">Last updated: June 2026</p>
          <p className="text-zinc-600">
            Olikit provides financial calculators for educational and informational purposes only.
            The information on this website does not constitute professional advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">Educational Purposes Only</h2>
          <p className="text-zinc-600 leading-relaxed">
            All content, calculators, and tools on Olikit are provided for educational and
            informational purposes only. They are designed to help you understand financial
            concepts and estimate potential outcomes, not to make definitive financial decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">No Investment Advice</h2>
          <p className="text-zinc-600 leading-relaxed">
            Olikit does not provide investment advice. Our investment calculators project
            potential returns based on user-input assumptions. These projections are hypothetical
            and do not guarantee actual results. Past performance of any investment vehicle
            does not predict future returns. Always consult a qualified financial advisor before
            making investment decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">No Tax Advice</h2>
          <p className="text-zinc-600 leading-relaxed">
            Our tax calculators estimate tax liabilities based on published brackets and rates.
            Actual tax liability depends on your specific circumstances, deductions, credits,
            and applicable legislation. Tax laws vary by jurisdiction and change frequently.
            Consult a qualified tax professional for advice specific to your situation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">No Legal Advice</h2>
          <p className="text-zinc-600 leading-relaxed">
            Olikit does not provide legal advice. Our mortgage and property calculators provide
            estimates that may help you understand potential costs, but they do not constitute
            legal guidance. Consult a qualified attorney for legal advice regarding property
            transactions, contracts, or other legal matters.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">Accuracy of Information</h2>
          <p className="text-zinc-600 leading-relaxed">
            We make reasonable efforts to ensure the accuracy of the data used in our calculators,
            including tax brackets, contribution rates, and financial thresholds. However, we
            do not guarantee that all information is current, complete, or error-free. Financial
            regulations change, and there may be delays in updating our data. Users should verify
            critical information with official government sources.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">No Professional Relationship</h2>
          <p className="text-zinc-600 leading-relaxed">
            Use of this website does not create a professional relationship between you and
            Olikit, its operators, or its contributors. We are not a financial advisory firm,
            tax preparation service, or law firm.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">Contact</h2>
          <p className="text-zinc-600 leading-relaxed">
            If you have questions about this disclaimer, contact us at{" "}
            <a href="mailto:support@olikit.com" className="text-blue-600 hover:text-blue-700">support@olikit.com</a>.
          </p>
        </section>
      </div>
      </>
  )
}