import type {Metadata} from "next";
import {SITE_URL} from "@/lib/seo/constants";
import {getLastUpdated} from "@/lib/seo/freshness";

export const metadata: Metadata = {
  title: "Update Policy — Olikit",
  description:
    "How often Olikit updates tax brackets, salary data, and financial calculations across 7 countries.",
  alternates: {canonical: `${SITE_URL}/update-policy`},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Update Policy",
  url: `${SITE_URL}/update-policy`,
  isPartOf: {"@type": "WebSite", name: "Olikit", url: SITE_URL},
};

export default function UpdatePolicyPage() {
  const lastUpdated = getLastUpdated();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <section>
          <h1 className="text-4xl font-bold mb-4">Update Policy</h1>
          <p className="text-lg text-zinc-600">
            Olikit maintains accurate, current financial data across all 7 countries. This page
            explains when and how data is updated.
          </p>
          <p className="text-sm text-zinc-500 mt-2">Last updated: {lastUpdated}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Annual Update Cycle</h2>
          <p className="text-zinc-700 leading-relaxed">
            All tax brackets, contribution rates, and financial thresholds are reviewed and updated
            annually following each country&apos;s budget cycle:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-zinc-700">
            <li>
              <strong>United States</strong> — Updated after IRS publishes annual revenue procedures
              (typically January)
            </li>
            <li>
              <strong>United Kingdom</strong> — Updated after HMRC publishes annual rates and
              allowances (typically April)
            </li>
            <li>
              <strong>Australia</strong> — Updated after ATO publishes new financial year rates
              (typically July)
            </li>
            <li>
              <strong>Canada</strong> — Updated after CRA publishes annual tax brackets (typically
              January)
            </li>
            <li>
              <strong>India</strong> — Updated after CBDT notifies annual tax rates (typically July)
            </li>
            <li>
              <strong>New Zealand</strong> — Updated after IRD publishes new tax year rates
              (typically April)
            </li>
            <li>
              <strong>Singapore</strong> — Updated after IRAS publishes annual tax rates (typically
              February)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Emergency Updates</h2>
          <p className="text-zinc-700 leading-relaxed">
            If a government authority announces unannounced rate changes mid-year, Olikit publishes
            an emergency update within 48 hours. Emergency updates are flagged on affected pages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Salary Data</h2>
          <p className="text-zinc-700 leading-relaxed">
            Salary data is sourced from government labor statistics agencies (BLS, ONS, ABS, etc.)
            and reviewed annually. Updates typically lag by 6-12 months after official data
            publication, as agencies release data on different schedules.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Exchange Rates</h2>
          <p className="text-zinc-700 leading-relaxed">
            Currency exchange rates are static snapshots used for cross-country comparisons. Rates
            are reviewed periodically but are not real-time. For live exchange rates, consult your
            bank or a financial data provider.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">How to Verify Currency</h2>
          <p className="text-zinc-700 leading-relaxed">
            Each page displays the tax year or data period it references. If a page shows
            &ldquo;2025-2026 tax year,&rdquo; the data reflects rates published for that period. The
            &ldquo;Last Updated&rdquo; timestamp at the bottom of each page indicates when the page
            was last modified.
          </p>
        </section>

        <section className="border-t pt-8">
          <p className="text-zinc-600">
            Found outdated data? See our{" "}
            <a href="/corrections" className="text-blue-600 hover:underline">
              Corrections Policy
            </a>{" "}
            for how to report errors.
          </p>
        </section>
      </div>
    </>
  );
}
