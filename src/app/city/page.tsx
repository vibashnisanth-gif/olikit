import {Metadata} from "next";
import Link from "next/link";
import {cities, getCitiesForCountry} from "@/lib/content/cities-data";
import {professions} from "@/lib/content/professions-data";
import {SITE_URL} from "@/lib/seo/constants";
import { FlagImage } from "@/components/ui/flag-image"

export const metadata: Metadata = {
  title: "Salary by City - 30 Cities Across 7 Countries | Olikit",
  description:
    "Browse salary data for 30 cities across 7 countries. Compare software engineer, data scientist, product manager, and other profession salaries by city.",
  openGraph: {
    title: "Salary by City - 30 Cities Across 7 Countries",
    description:
      "Browse salary data for 30 cities across 7 countries. Compare profession salaries by city.",
    url: `${SITE_URL}/city`,
    siteName: "Olikit",
    type: "website",
  },
};

const countries = [
  {slug: "us", name: "United States", flag: "🇺🇸"},
  {slug: "uk", name: "United Kingdom", flag: "🇬🇧"},
  {slug: "au", name: "Australia", flag: "🇦🇺"},
  {slug: "ca", name: "Canada", flag: "🇨🇦"},
  {slug: "nz", name: "New Zealand", flag: "🇳🇿"},
  {slug: "in", name: "India", flag: "🇮🇳"},
  {slug: "sg", name: "Singapore", flag: "🇸🇬"},
];

export default function CityHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Salary by City",
    description: "Browse salary data for 30 cities across 7 countries",
    url: `${SITE_URL}/city`,
  };

  return (
      <div className="mx-auto max-w-5xl px-4 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />

        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Salary by City</span>
        </nav>

        <h1 className="mb-3 text-3xl font-bold text-gray-900">Salary by City</h1>
        <p className="mb-8 text-lg text-gray-600">
          Browse salary data for <strong>30 cities</strong> across <strong>7 countries</strong>.
          Select a city to see salary breakdowns by profession.
        </p>

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => {
            const countryCities = getCitiesForCountry(country.slug);
            return (
              <div key={country.slug} className="rounded-xl border bg-white p-5">
                <h2 className="mb-3 text-lg font-semibold text-gray-900">
                  <FlagImage code={country.slug} size="lg" /> {country.name}
                </h2>
                <ul className="space-y-2">
                  {countryCities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/us/city/${city.slug}`}
                        className="group flex items-center justify-between rounded-lg px-2 py-1 text-sm hover:bg-gray-50"
                      >
                        <span className="text-gray-700 group-hover:text-blue-600">{city.name}</span>
                        <span className="text-xs text-gray-400">CoL: {city.costOfLivingIndex}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <section className="border-t pt-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Popular Profession Salary Pages
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {professions
              .filter(
                (p) =>
                  p.slug === "software-engineer" ||
                  p.slug === "data-scientist" ||
                  p.slug === "product-manager"
              )
              .map((profession) => (
                <div key={profession.slug}>
                  <h3 className="mb-2 font-medium text-gray-900">{profession.name}</h3>
                  <ul className="space-y-1 text-sm">
                    {["new-york", "london", "sydney", "toronto", "singapore", "mumbai"].map(
                      (citySlug) => {
                        const city = cities.find((c) => c.slug === citySlug);
                        if (!city) return null;
                        return (
                          <li key={citySlug}>
                            <Link
                              href={`/us/city/${citySlug}/${profession.slug}`}
                              className="text-blue-600 hover:underline"
                            >
                              {profession.name} in {city.name}
                            </Link>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              ))}
          </div>
        </section>
      </div>
  );
}