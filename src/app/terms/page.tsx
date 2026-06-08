import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"

export const metadata: Metadata = {
  title: "Terms of Service — Olikit",
  description:
    "Olikit terms of service govern the use of our free financial calculators. Important disclaimers about calculator accuracy and financial advice.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  openGraph: {
    title: "Terms of Service — Olikit",
    description:
      "Terms governing the use of Olikit's free financial calculators and services.",
    url: `${SITE_URL}/terms`,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service",
  description: "Terms governing use of Olikit's free financial calculators.",
  url: `${SITE_URL}/terms`,
  isPartOf: {
    "@type": "WebSite",
    name: "Olikit",
    url: SITE_URL,
  },
}

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl space-y-10">
        <section>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Terms of Service</h1>
          <p className="mt-3 text-sm text-zinc-500 mb-4">Last updated: June 2026</p>
          <p className="text-zinc-600">
            By using Olikit, you agree to these terms. If you do not agree, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">Use of Calculators</h2>
          <p className="text-zinc-600 leading-relaxed">
            Olikit provides free online financial calculators for informational and educational
            purposes only. All calculations are estimates based on published rates and tax brackets.
            Actual financial outcomes may differ based on your specific circumstances, jurisdiction,
            and the timing of your calculations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">Calculator Accuracy Disclaimer</h2>
          <p className="text-zinc-600 leading-relaxed">
            While we strive for accuracy, our calculators may contain errors, omissions, or
            outdated information. Tax laws, contribution rates, and financial regulations change
            frequently. We recommend verifying results with a qualified professional or consulting
            official government sources before making financial decisions based on our calculations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">No Financial Advice</h2>
          <p className="text-zinc-600 leading-relaxed">
            Olikit does not provide financial, tax, investment, legal, or accounting advice.
            Our calculators are tools for estimation and education only. They are not a substitute
            for professional advice from a qualified financial advisor, tax professional, accountant,
            or attorney. You should consult with appropriate professionals for advice tailored to
            your specific situation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">Limitation of Liability</h2>
          <p className="text-zinc-600 leading-relaxed">
            To the fullest extent permitted by law, Olikit and its operators shall not be liable
            for any direct, indirect, incidental, consequential, or punitive damages arising from
            your use of our calculators or reliance on any information provided on this site.
            This includes but is not limited to financial losses, tax penalties, missed investment
            opportunities, or incorrect financial decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">Intellectual Property</h2>
          <p className="text-zinc-600 leading-relaxed">
            All content, code, design, and functionality on Olikit are owned by or licensed to us
            and are protected by applicable intellectual property laws. You may not reproduce,
            distribute, modify, or create derivative works without our express written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">Changes to Terms</h2>
          <p className="text-zinc-600 leading-relaxed">
            We reserve the right to modify these terms at any time. Changes take effect immediately
            upon posting. Your continued use of Olikit after changes constitutes acceptance of the
            updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">Contact</h2>
          <p className="text-zinc-600 leading-relaxed">
            For questions about these terms, contact us at{" "}
            <a href="mailto:support@olikit.com" className="text-emerald-600 hover:text-emerald-700">support@olikit.com</a>.
          </p>
        </section>
      </div>
    </>
  )
}
