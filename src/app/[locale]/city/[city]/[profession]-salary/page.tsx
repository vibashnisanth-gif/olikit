import {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "next/link";
import {locales, getLocale} from "@/lib/seo/locales";
import {professions, getProfession} from "@/lib/content/professions-data";
import {getCitiesForCountry, getCity, getCitySalary} from "@/lib/content/cities-data";
import {SITE_URL} from "@/lib/seo/constants";
import {buildBreadcrumbJsonLd, buildFaqJsonLd} from "@/lib/seo/json-ld";

type Props = {
  params: Promise<{locale: string; city: string; profession: string}>;
};

export async function generateStaticParams() {
  const params: {locale: string; city: string; profession: string}[] = [];
  for (const locale of locales) {
    const cities = getCitiesForCountry(locale.slug);
    for (const city of cities) {
      for (const profession of professions) {
        params.push({
          locale: locale.slug,
          city: city.slug,
          profession: `${profession.slug}-salary`,
        });
      }
    }
  }
  return params;
}

function formatCurrency(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale, city, profession: professionSlug} = await params;
  const localeData = getLocale(locale);
  if (!localeData) return {};

  const cleanSlug = professionSlug.replace(/-salary$/, "");
  const profession = getProfession(cleanSlug);
  if (!profession) return {};

  const cityData = getCity(locale, city);
  if (!cityData) return {};

  const salaryData = profession.salaries[locale];
  if (!salaryData) return {};

  const citySalary = getCitySalary(locale, city, salaryData.average);
  const title = `${profession.name} Salary in ${cityData.name} (${new Date().getFullYear()}) | Average Pay`;
  const description = `What is the average ${profession.name.toLowerCase()} salary in ${cityData.name}, ${cityData.country}? Get the latest salary data: ${formatCurrency(citySalary, localeData.currency.code)} average, ${formatCurrency(salaryData.entryLevel, localeData.currency.code)} entry-level, ${formatCurrency(salaryData.experienced, localeData.currency.code)} experienced.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/city/${city}/${professionSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/city/${city}/${professionSlug}`,
      siteName: "Olikit",
      type: "website",
    },
  };
}

export default async function CityProfessionSalaryPage({params}: Props) {
  const {locale, city, profession: professionSlug} = await params;
  const localeData = getLocale(locale);
  if (!localeData) notFound();

  const cleanSlug = professionSlug.replace(/-salary$/, "");
  const profession = getProfession(cleanSlug);
  if (!profession) notFound();

  const cityData = getCity(locale, city);
  if (!cityData) notFound();

  const salaryData = profession.salaries[locale];
  if (!salaryData) notFound();

  const citySalary = getCitySalary(locale, city, salaryData.average);
  const cityEntry = getCitySalary(locale, city, salaryData.entryLevel);
  const cityExperienced = getCitySalary(locale, city, salaryData.experienced);
  const cityLow = getCitySalary(locale, city, salaryData.rangeLow);
  const cityHigh = getCitySalary(locale, city, salaryData.rangeHigh);
  const currency = localeData.currency.symbol;

  const otherCities = getCitiesForCountry(locale)
    .filter((c) => c.slug !== city)
    .slice(0, 5);

  const sameProfessionCities = getCitiesForCountry(locale).map((c) => ({
    city: c,
    salary: getCitySalary(locale, c.slug, salaryData.average),
  }));

  const faqs = [
    {
      question: `What is the average ${profession.name.toLowerCase()} salary in ${cityData.name}?`,
      answer: `The average ${profession.name.toLowerCase()} salary in ${cityData.name} is ${formatCurrency(citySalary, localeData.currency.code)} per year. Entry-level positions start at ${formatCurrency(cityEntry, localeData.currency.code)}, while experienced professionals earn up to ${formatCurrency(cityExperienced, localeData.currency.code)}.`,
    },
    {
      question: `How does ${cityData.name} compare to other cities in ${cityData.country}?`,
      answer: `${cityData.name} has a salary multiplier of ${cityData.multiplier}x compared to the ${cityData.country} average. ${cityData.multiplier > 1 ? "This means salaries are higher than average" : "This means salaries are slightly below the national average"}, reflecting the local cost of living and demand for ${profession.name.toLowerCase()} professionals.`,
    },
    {
      question: `What is the salary range for ${profession.name.toLowerCase()}s in ${cityData.name}?`,
      answer: `The salary range for ${profession.name.toLowerCase()}s in ${cityData.name} is ${formatCurrency(cityLow, localeData.currency.code)} to ${formatCurrency(cityHigh, localeData.currency.code)} per year, depending on experience, skills, and employer.`,
    },
    {
      question: `Is ${cityData.name} a good place for ${profession.name.toLowerCase()} careers?`,
      answer: `${cityData.name} offers ${cityData.multiplier >= 1 ? "competitive" : "growing"} opportunities for ${profession.name.toLowerCase()} professionals. ${cityData.description}`,
    },
  ];

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    {label: "Home", url: SITE_URL},
    {label: localeData.name, url: `${SITE_URL}/${locale}`},
    {label: `${profession.name} Salary`, url: `${SITE_URL}/${locale}/salary/${cleanSlug}`},
    {label: `${cityData.name}`, url: `${SITE_URL}/${locale}/city/${city}`},
  ]);
  const faqSchema = buildFaqJsonLd(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
      />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/${locale}`} className="hover:text-gray-700">
            {localeData.name}
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/${locale}/salary/${cleanSlug}`} className="hover:text-gray-700">
            {profession.name} Salary
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{cityData.name}</span>
        </nav>

        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          {profession.name} Salary in {cityData.name}
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Average pay, salary range, and career outlook for {profession.name.toLowerCase()}s in{" "}
          {cityData.name}, {cityData.country}.
        </p>

        {/* Answer-first summary box */}
        <div className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="mb-2 text-lg font-semibold text-blue-900">
            Average {profession.name} Salary in {cityData.name} ({new Date().getFullYear()})
          </h2>
          <div className="text-3xl font-bold text-blue-700">
            {formatCurrency(citySalary, localeData.currency.code)}
          </div>
          <p className="mt-2 text-sm text-blue-600">
            {cityData.name} is{" "}
            {cityData.multiplier >= 1
              ? `${Math.round((cityData.multiplier - 1) * 100)}% above`
              : `${Math.round((1 - cityData.multiplier) * 100)}% below`}{" "}
            the {cityData.country} average for {profession.name.toLowerCase()}s.
          </p>
        </div>

        {/* Salary breakdown */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Salary Breakdown</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">Entry Level</p>
              <p className="text-xl font-bold text-gray-900">
                {formatCurrency(cityEntry, localeData.currency.code)}
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">Average</p>
              <p className="text-xl font-bold text-gray-900">
                {formatCurrency(citySalary, localeData.currency.code)}
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">Experienced</p>
              <p className="text-xl font-bold text-gray-900">
                {formatCurrency(cityExperienced, localeData.currency.code)}
              </p>
            </div>
          </div>
        </section>

        {/* About this city */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">About {cityData.name}</h2>
          <p className="text-gray-600">{cityData.description}</p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Population:</span>{" "}
              <span className="font-medium">{cityData.population.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-gray-500">Cost of Living Index:</span>{" "}
              <span className="font-medium">{cityData.costOfLivingIndex}</span>
            </div>
            <div>
              <span className="text-gray-500">Salary Multiplier:</span>{" "}
              <span className="font-medium">{cityData.multiplier}x</span>
            </div>
            <div>
              <span className="text-gray-500">Country Average:</span>{" "}
              <span className="font-medium">
                {formatCurrency(salaryData.average, localeData.currency.code)}
              </span>
            </div>
          </div>
        </section>

        {/* Compare with other cities */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            {profession.name} Salaries Across {cityData.country}
          </h2>
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-medium text-gray-900">City</th>
                  <th className="px-4 py-3 font-medium text-gray-900">Average Salary</th>
                  <th className="px-4 py-3 font-medium text-gray-900">Multiplier</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {sameProfessionCities
                  .sort((a, b) => b.salary - a.salary)
                  .map((row) => (
                    <tr key={row.city.slug} className={row.city.slug === city ? "bg-blue-50" : ""}>
                      <td className="px-4 py-3">
                        <Link
                          href={`/${locale}/city/${row.city.slug}/${professionSlug}`}
                          className={`font-medium hover:underline ${row.city.slug === city ? "text-blue-700" : "text-gray-900"}`}
                        >
                          {row.city.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 font-medium">
                        {formatCurrency(row.salary, localeData.currency.code)}
                      </td>
                      <td className="px-4 py-3">{row.city.multiplier}x</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-lg border p-4">
                <summary className="cursor-pointer font-medium text-gray-900 group-open:text-blue-700">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related links */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Related Pages</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href={`/${locale}/salary/${cleanSlug}`}
              className="rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50"
            >
              <p className="font-medium text-gray-900">
                {profession.name} Salary in {cityData.country}
              </p>
              <p className="text-sm text-gray-500">Country-level salary data</p>
            </Link>
            <Link
              href={`/${locale}/tools/salary-calculator`}
              className="rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50"
            >
              <p className="font-medium text-gray-900">Salary Calculator</p>
              <p className="text-sm text-gray-500">Convert between pay periods</p>
            </Link>
            <Link
              href={`/${locale}/tools/cost-of-living-calculator`}
              className="rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50"
            >
              <p className="font-medium text-gray-900">Cost of Living Calculator</p>
              <p className="text-sm text-gray-500">Compare cities worldwide</p>
            </Link>
            <Link
              href={`/${locale}/tools/tax-calculator`}
              className="rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50"
            >
              <p className="font-medium text-gray-900">Tax Calculator</p>
              <p className="text-sm text-gray-500">Estimate take-home pay</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
