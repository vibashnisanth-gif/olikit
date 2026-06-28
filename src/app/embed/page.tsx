import {Metadata} from "next";
import Link from "next/link";
import {cities} from "@/lib/content/cities-data";

export const metadata: Metadata = {
  title: "Cost of Living Index - Embeddable Widget",
  description:
    "Embed the Cost of Living Index on your website. Free, data-driven cost of living comparison for 40+ cities worldwide.",
  robots: {index: false, follow: true},
};

const sortedCities = [...cities].sort((a, b) => b.costOfLivingIndex - a.costOfLivingIndex);

export default function EmbedPage() {
  const embedCode = `<iframe src="https://olikit.com/embed/cost-of-living-widget" width="100%" height="600" frameborder="0" title="Cost of Living Index by City"></iframe>`;

  return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Cost of Living Index Widget</h1>
        <p className="mb-6 text-lg text-gray-600">
          Embed this free cost of living comparison on your website. Data for 40+ cities across 7
          countries.
        </p>

        <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-2 text-sm font-medium text-gray-700">Embed Code:</p>
          <code className="block rounded bg-gray-900 p-3 text-sm text-green-400">{embedCode}</code>
          <p className="mt-2 text-xs text-gray-500">
            Copy and paste this code into your website or blog.
          </p>
        </div>

        <h2 className="mb-4 text-xl font-semibold text-gray-900">Preview</h2>
        <div className="rounded-lg border bg-white p-4">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Cost of Living Index by City</h3>
          <p className="mb-4 text-sm text-gray-500">
            New York City = 100 baseline. Higher = more expensive.
          </p>
          <div className="overflow-hidden rounded border">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 font-medium text-gray-900">#</th>
                  <th className="px-3 py-2 font-medium text-gray-900">City</th>
                  <th className="px-3 py-2 font-medium text-gray-900">Country</th>
                  <th className="px-3 py-2 font-medium text-gray-900">Index</th>
                  <th className="px-3 py-2 font-medium text-gray-900">vs NYC</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {sortedCities.slice(0, 15).map((city, i) => (
                  <tr key={city.slug}>
                    <td className="px-3 py-2 text-gray-500">{i + 1}</td>
                    <td className="px-3 py-2 font-medium text-gray-900">{city.name}</td>
                    <td className="px-3 py-2 text-gray-600">{city.country}</td>
                    <td className="px-3 py-2 font-medium text-gray-900">
                      {city.costOfLivingIndex}
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={city.costOfLivingIndex > 100 ? "text-red-600" : "text-green-600"}
                      >
                        {city.costOfLivingIndex > 100 ? "+" : ""}
                        {city.costOfLivingIndex - 100}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            Source:{" "}
            <Link href="/world" className="text-blue-600 hover:underline">
              Olikit World Monitor
            </Link>
          </p>
        </div>

        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-blue-900">Full Data Available</h3>
          <p className="text-blue-700">
            Access the complete dataset with 40+ cities, salary multipliers, and cost breakdowns at{" "}
            <a
              href="https://olikit.com/us/tools/cost-of-living-calculator"
              className="font-medium underline"
            >
              olikit.com/cost-of-living-calculator
            </a>
            .
          </p>
        </div>
      </div>
  );
}