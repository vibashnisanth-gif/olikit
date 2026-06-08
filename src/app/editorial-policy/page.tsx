import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"

export const metadata: Metadata = {
  title: "Editorial Policy — Accuracy & Transparency",
  description: "Olikit's editorial policy covers our commitment to accuracy, transparency, and independence in financial data and calculations.",
  alternates: { canonical: `${SITE_URL}/editorial-policy` },
}

export default function EditorialPolicyPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Editorial Policy</h1>
        <p className="mt-3 text-lg leading-8 text-zinc-600">
          Our commitment to accuracy, transparency, and independence.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Accuracy</h2>
        <p className="text-sm leading-7 text-zinc-600">
          Olikit is committed to providing accurate and up-to-date financial data. All calculations are based on official government tax brackets, rates, and thresholds. We verify our calculations against official government calculators and published tax tables. Data is reviewed and updated at least annually, or when significant tax law changes occur.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Transparency</h2>
        <p className="text-sm leading-7 text-zinc-600">
          We clearly cite all data sources on relevant pages. Our methodology is documented and publicly available. Users can verify any calculation using the official government resources we link to. We disclose any affiliate relationships and clearly mark sponsored content or affiliate links.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Independence</h2>
        <p className="text-sm leading-7 text-zinc-600">
          Olikit operates independently. Our financial data and calculations are not influenced by advertisers, affiliates, or any third parties. Affiliate partnerships are clearly disclosed and do not affect the accuracy or objectivity of our content.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Corrections</h2>
        <p className="text-sm leading-7 text-zinc-600">
          If you identify an error in our data or calculations, please contact us. We investigate all reports promptly and correct verified errors. We maintain a record of significant corrections and updates.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-zinc-950 mb-3">Updates</h2>
        <p className="text-sm leading-7 text-zinc-600">
          This policy is reviewed and updated as needed. The last update was June 2026. Major changes to our editorial practices will be noted here.
        </p>
      </section>
    </div>
  )
}
