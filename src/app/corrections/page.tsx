import type {Metadata} from "next";
import {SITE_URL} from "@/lib/seo/constants";

export const metadata: Metadata = {
  title: "Corrections Policy — Olikit",
  description:
    "How Olikit handles data corrections, updates, and accuracy improvements across all calculators and content.",
  alternates: {canonical: `${SITE_URL}/corrections`},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Corrections Policy",
  url: `${SITE_URL}/corrections`,
  isPartOf: {"@type": "WebSite", name: "Olikit", url: SITE_URL},
};

export default function CorrectionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <section>
          <h1 className="text-4xl font-bold mb-4">Corrections Policy</h1>
          <p className="text-lg text-zinc-600">
            Olikit is committed to accuracy. When we identify errors in our data, calculations, or
            content, we correct them promptly and transparently.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">How to Report an Error</h2>
          <p className="text-zinc-700 leading-relaxed">
            If you believe any of our data, calculations, or content contains an error, please
            contact us at{" "}
            <a href="mailto:support@olikit.com" className="text-blue-600 hover:underline">
              support@olikit.com
            </a>{" "}
            with:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-3 text-zinc-700">
            <li>The specific page URL</li>
            <li>The error you identified</li>
            <li>The correct information (with source if available)</li>
            <li>The tax year or data period affected</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Response Process</h2>
          <ol className="list-decimal pl-6 space-y-3 text-zinc-700">
            <li>
              <strong>Acknowledgment</strong> — We acknowledge receipt of all correction requests
              within 2 business days.
            </li>
            <li>
              <strong>Investigation</strong> — We investigate each report by cross-referencing
              official government sources and our data pipeline.
            </li>
            <li>
              <strong>Correction</strong> — If an error is confirmed, we correct it as quickly as
              possible. Critical data errors (tax brackets, salary figures) are fixed within 48
              hours.
            </li>
            <li>
              <strong>Notification</strong> — We update the &ldquo;Last Updated&rdquo; date on the
              affected page. For significant corrections, we note the change in our updates log.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Significant Corrections Log</h2>
          <p className="text-zinc-700 leading-relaxed">
            We maintain a record of significant corrections that affected calculator output or
            published data:
          </p>
          <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-zinc-500 italic">
              No significant corrections have been recorded since launch. All data has been verified
              against official sources at time of publication.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">What We Correct</h2>
          <ul className="list-disc pl-6 space-y-1 text-zinc-700">
            <li>Tax brackets, rates, or thresholds that don&apos;t match official publications</li>
            <li>Salary figures that are materially inaccurate</li>
            <li>Calculator output that doesn&apos;t match expected results</li>
            <li>Factual errors in methodology descriptions</li>
            <li>Broken links to official government sources</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">What We Don&apos;t Correct</h2>
          <ul className="list-disc pl-6 space-y-1 text-zinc-700">
            <li>Disagreements with official government data (we follow published sources)</li>
            <li>Requests to change rounding or formatting preferences</li>
            <li>Requests to add data for countries we don&apos;t currently cover</li>
          </ul>
        </section>

        <section className="border-t pt-8">
          <p className="text-zinc-600">
            Questions about our data? Visit our{" "}
            <a href="/data-sources" className="text-blue-600 hover:underline">
              Data Sources
            </a>{" "}
            page or{" "}
            <a href="/methodology" className="text-blue-600 hover:underline">
              Methodology
            </a>{" "}
            page for details on how we calculate results.
          </p>
        </section>
      </div>
    </>
  );
}
