import {Metadata} from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import {Shell} from "@/components/shell";
import {SITE_URL} from "@/lib/seo/constants";
import {SkeletonCard} from "@/components/ui/skeleton";

const SalaryComparisonTool = dynamic(
  () => import("@/components/salary-comparison-tool").then((m) => m.SalaryComparisonTool),
  {loading: () => <SkeletonCard />}
);

export const metadata: Metadata = {
  title: "Salary Comparison Tool - Compare Two Salaries Side by Side",
  description:
    "Compare salaries between two cities with cost of living and tax adjustments. See which offer is actually worth more.",
  openGraph: {
    title: "Salary Comparison Tool - Compare Two Salaries Side by Side",
    description:
      "Compare salaries between two cities with cost of living and tax adjustments. See which offer is actually worth more.",
    url: `${SITE_URL}/tools/salary-comparison`,
    siteName: "Olikit",
    type: "website",
  },
};

export default function SalaryComparisonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Salary Comparison Tool",
    url: `${SITE_URL}/tools/salary-comparison`,
    description: "Compare salaries between two cities with cost of living and tax adjustments",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {price: "0", priceCurrency: "USD"},
  };

  return (
    <Shell>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />

        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/us" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/us/tools" className="hover:text-blue-600">
            Tools
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Salary Comparison</span>
        </nav>

        <h1 className="mb-3 text-3xl font-bold text-gray-900">Salary Comparison Tool</h1>
        <p className="mb-8 text-lg text-gray-600">
          Compare two salary offers side by side. See which one is actually worth more after cost of
          living and taxes.
        </p>

        <SalaryComparisonTool />

        <section className="mt-12 border-t pt-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Why Compare Salaries by City?
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="mb-4">
              A $150,000 salary in San Francisco is not the same as $150,000 in Chicago. After rent,
              groceries, taxes, and transportation, you might take home more in Chicago despite the
              lower nominal salary.
            </p>
            <p className="mb-4">
              Our tool compares two salaries using city-specific cost of living indices and tax
              rates, showing you:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-1 text-gray-600">
              <li>
                <strong>Adjusted salary</strong> - what each salary is worth relative to the other
                city
              </li>
              <li>
                <strong>Take-home pay</strong> - after estimated taxes
              </li>
              <li>
                <strong>Purchasing power</strong> - how far each salary goes in its city
              </li>
            </ul>
            <p>
              Use this when evaluating job offers, negotiating salaries, or deciding between
              relocating to a new city.
            </p>
          </div>
        </section>

        <section className="mt-8 border-t pt-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: "How accurate are the cost of living indices?",
                a: "Our cost of living indices are based on Numbeo, BLS, and local statistical agencies. They update quarterly. Treat them as directional, not exact to the penny.",
              },
              {
                q: "What tax rates do you use?",
                a: "We use combined federal + state/country average rates: US 25%, UK 28%, AU 27%, CA 25%, NZ 20%, IN 20%, SG 11%. For precise calculations, consult a tax advisor.",
              },
              {
                q: "Can I compare salaries in the same city?",
                a: "Yes. Enter the same city for both sides and different salaries. The tool will show the difference based on salary alone.",
              },
              {
                q: "What about benefits and bonuses?",
                a: "This tool compares base salary only. Factor in benefits, bonuses, equity, and retirement contributions separately.",
              },
            ].map(({q, a}) => (
              <div key={q}>
                <h3 className="font-medium text-gray-900">{q}</h3>
                <p className="mt-1 text-sm text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 border-t pt-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Related Tools</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/us/tools/salary-calculator"
              className="rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50"
            >
              <div className="font-medium text-gray-900">Salary Calculator</div>
              <div className="text-sm text-gray-500">
                Convert between hourly, monthly, and annual salary
              </div>
            </Link>
            <Link
              href="/us/tools/cost-of-living-calculator"
              className="rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50"
            >
              <div className="font-medium text-gray-900">Cost of Living Calculator</div>
              <div className="text-sm text-gray-500">Compare living costs between cities</div>
            </Link>
            <Link
              href="/us/career/negotiate-salary"
              className="rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50"
            >
              <div className="font-medium text-gray-900">Salary Negotiation Guide</div>
              <div className="text-sm text-gray-500">How to negotiate a better offer</div>
            </Link>
            <Link
              href="/world"
              className="rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50"
            >
              <div className="font-medium text-gray-900">World Monitor</div>
              <div className="text-sm text-gray-500">
                Real-time global salary news and market data
              </div>
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  );
}
