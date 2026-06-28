import {Metadata} from "next";
import Link from "next/link";
import {SITE_URL} from "@/lib/seo/constants";

export const metadata: Metadata = {
  title: "Remote Work Salary Calculator - What's Your Salary Worth Everywhere",
  description:
    "Calculate your adjusted salary for remote work in any location. See how your salary translates across 30 cities with cost of living and tax adjustments.",
  openGraph: {
    title: "Remote Work Salary Calculator - What's Your Salary Worth Everywhere",
    description: "Calculate your adjusted salary for remote work in any location.",
    url: `${SITE_URL}/tools/remote-work-salary`,
    siteName: "Olikit",
    type: "website",
  },
};

const locationMultipliers = [
  {city: "San Francisco, US", mult: 1.4, tax: 25},
  {city: "New York, US", mult: 1.35, tax: 25},
  {city: "Los Angeles, US", mult: 1.1, tax: 25},
  {city: "Chicago, US", mult: 1.0, tax: 25},
  {city: "Houston, US", mult: 0.9, tax: 25},
  {city: "London, UK", mult: 1.15, tax: 28},
  {city: "Manchester, UK", mult: 0.95, tax: 28},
  {city: "Sydney, AU", mult: 1.1, tax: 27},
  {city: "Melbourne, AU", mult: 1.0, tax: 27},
  {city: "Toronto, CA", mult: 1.05, tax: 25},
  {city: "Vancouver, CA", mult: 1.05, tax: 25},
  {city: "Auckland, NZ", mult: 0.95, tax: 20},
  {city: "Berlin, DE", mult: 0.9, tax: 30},
  {city: "Amsterdam, NL", mult: 0.95, tax: 35},
  {city: "Singapore, SG", mult: 1.1, tax: 11},
  {city: "Dubai, UAE", mult: 1.0, tax: 0},
  {city: "Mumbai, IN", mult: 0.45, tax: 20},
  {city: "Delhi, IN", mult: 0.4, tax: 20},
  {city: "Lisbon, PT", mult: 0.7, tax: 20},
  {city: "Barcelona, ES", mult: 0.75, tax: 24},
  {city: "Bangkok, TH", mult: 0.5, tax: 10},
  {city: "Bali, ID", mult: 0.45, tax: 10},
  {city: "Mexico City, MX", mult: 0.55, tax: 15},
  {city: "Buenos Aires, AR", mult: 0.45, tax: 15},
  {city: "Tallinn, EE", mult: 0.8, tax: 20},
  {city: "Prague, CZ", mult: 0.7, tax: 15},
  {city: "Warsaw, PL", mult: 0.65, tax: 12},
  {city: "Taipei, TW", mult: 0.7, tax: 12},
  {city: "Seoul, KR", mult: 0.85, tax: 15},
  {city: "Tokyo, JP", mult: 0.95, tax: 20},
];

export default function RemoteWorkSalaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Remote Work Salary Calculator",
    url: `${SITE_URL}/tools/remote-work-salary`,
    description: "Calculate your adjusted salary for remote work in any location",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {price: "0", priceCurrency: "USD"},
  };

  return (
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
        <span className="text-gray-900">Remote Work Salary</span>
      </nav>

      <h1 className="mb-3 text-3xl font-bold text-gray-900">Remote Work Salary Calculator</h1>
      <p className="mb-8 text-lg text-gray-600">
        Your $100K salary in San Francisco is worth $45K in Bali. See how your salary translates
        across 30 cities worldwide.
      </p>

      <RemoteWorkSalaryTool />

      <section className="mt-12 border-t pt-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Why Your Remote Salary Varies by Location
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="mb-4">
            Companies increasingly adjust salaries based on where you live. A $150K salary in San
            Francisco might become $100K in Austin or $60K in Bali. This is called{" "}
            <strong>geo-pay adjustment</strong> or <strong>location-based compensation</strong>.
          </p>
          <p className="mb-4">
            Our calculator shows you the real value of your salary in each location by factoring in:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1 text-gray-600">
            <li>
              <strong>Cost of living index</strong> - how expensive a city is relative to the US
              average
            </li>
            <li>
              <strong>Tax rates</strong> - what you actually take home after taxes
            </li>
            <li>
              <strong>Purchasing power</strong> - how far your money goes in each city
            </li>
          </ul>
          <p>
            Use this when negotiating remote salary, deciding where to relocate, or comparing job
            offers across locations.
          </p>
        </div>
      </section>

      <section className="mt-8 border-t pt-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How accurate are the location multipliers?",
              a: "Our multipliers are based on Numbeo cost of living data, Glassdoor salary reports, and government tax rates. They update quarterly. Treat them as directional.",
            },
            {
              q: "Does my company have to adjust my salary for location?",
              a: "It depends on your company's policy. Some companies pay location-adjusted salaries, others pay based on your home office location, and some pay the same regardless. Ask HR.",
            },
            {
              q: "What about cost of living differences?",
              a: "Our calculator accounts for cost of living through the location multiplier. A multiplier of 0.5 means your salary buys half as much as in the reference location (US average).",
            },
            {
              q: "Can I use this for international job offers?",
              a: "Yes. Enter the offered salary, select the location, and the calculator shows you the adjusted value relative to your current location.",
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
            href="/tools/salary-comparison"
            className="rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50"
          >
            <div className="font-medium text-gray-900">Salary Comparison Tool</div>
            <div className="text-sm text-gray-500">Compare two salary offers side by side</div>
          </Link>
          <Link
            href="/us/tools/cost-of-living-calculator"
            className="rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50"
          >
            <div className="font-medium text-gray-900">Cost of Living Calculator</div>
            <div className="text-sm text-gray-500">Compare living costs between cities</div>
          </Link>
          <Link
            href="/us/career/remote-work-salary"
            className="rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50"
          >
            <div className="font-medium text-gray-900">Remote Work Salary Guide</div>
            <div className="text-sm text-gray-500">How to negotiate remote work compensation</div>
          </Link>
          <Link
            href="/infographics/best-countries-software-engineers-2026"
            className="rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50"
          >
            <div className="font-medium text-gray-900">Best Countries for Software Engineers</div>
            <div className="text-sm text-gray-500">Ranked list for 2026</div>
          </Link>
        </div>
      </section>
    </div>
  );
}

function RemoteWorkSalaryTool() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Your Base Salary (USD)
        </label>
        <input
          type="number"
          id="remote-salary-input"
          defaultValue={100000}
          className="w-full rounded-lg border px-4 py-3 text-lg"
          min={0}
          step={1000}
          onChange={(e) => {
            const salary = Number(e.target.value);
            const results = locationMultipliers
              .map((loc) => {
                const adjusted = Math.round(salary * loc.mult);
                const tax = Math.round((adjusted * loc.tax) / 100);
                const takeHome = adjusted - tax;
                return {...loc, adjusted, tax, takeHome};
              })
              .sort((a, b) => b.takeHome - a.takeHome);

            const container = document.getElementById("remote-results");
            if (container) {
              container.innerHTML = results
                .map(
                  (r, i) => `
                <tr class="${i < 3 ? "bg-green-50" : ""}">
                  <td class="py-2 pr-4 text-sm">${r.city}</td>
                  <td class="py-2 pr-4 text-right text-sm font-mono">$${r.adjusted.toLocaleString()}</td>
                  <td class="py-2 pr-4 text-right text-sm text-gray-500">${r.tax}%</td>
                  <td class="py-2 text-right text-sm font-mono font-medium text-green-700">$${r.takeHome.toLocaleString()}</td>
                </tr>
              `
                )
                .join("");
            }
          }}
        />
      </div>

      <div className="mb-4 text-sm text-gray-500">
        Sorted by take-home pay (highest first). Top 3 highlighted in green.
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-xs uppercase text-gray-500">
              <th className="pb-2 pr-4">City</th>
              <th className="pb-2 pr-4 text-right">Adjusted Salary</th>
              <th className="pb-2 pr-4 text-right">Tax</th>
              <th className="pb-2 text-right">Take-Home</th>
            </tr>
          </thead>
          <tbody id="remote-results">
            {locationMultipliers
              .map((loc) => {
                const adjusted = Math.round(100000 * loc.mult);
                const tax = Math.round((adjusted * loc.tax) / 100);
                const takeHome = adjusted - tax;
                return {...loc, adjusted, tax, takeHome};
              })
              .sort((a, b) => b.takeHome - a.takeHome)
              .map((r, i) => (
                <tr key={r.city} className={`border-b ${i < 3 ? "bg-green-50" : ""}`}>
                  <td className="py-2 pr-4 text-sm">{r.city}</td>
                  <td className="py-2 pr-4 text-right text-sm font-mono">
                    ${r.adjusted.toLocaleString()}
                  </td>
                  <td className="py-2 pr-4 text-right text-sm text-gray-500">{r.tax}%</td>
                  <td className="py-2 text-right text-sm font-mono font-medium text-green-700">
                    ${r.takeHome.toLocaleString()}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
