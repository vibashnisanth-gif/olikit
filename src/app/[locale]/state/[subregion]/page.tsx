import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getLocale, getSubRegion, getLocalesWithSubRegion, locales} from "@/lib/seo/locales";
import {COUNTRY_FLAGS} from "@/lib/content/country-registry";
import {buildMetadata} from "@/lib/seo/metadata";
import {SITE_URL} from "@/lib/seo/constants";
import {getToolsBySlugs, stateSeoToolSlugs} from "@/lib/content/templates";
import {buildWebPageJsonLd, buildBreadcrumbJsonLd} from "@/lib/seo/json-ld";
import {SourceFooter} from "@/components/source-footer";
import { FlagImage } from "@/components/ui/flag-image"

type Props = {
  params: Promise<{locale: string; subregion: string}>;
};

export async function generateStaticParams() {
  const params: {locale: string; subregion: string}[] = [];
  for (const locale of locales) {
    if (locale.states) {
      for (const state of locale.states) {
        params.push({locale: locale.slug, subregion: state.slug});
      }
    }
  }
  return params;
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale: localeSlug, subregion: subregionSlug} = await params;
  const locale = getLocale(localeSlug);
  if (!locale) return {};
  const subRegion = getSubRegion(locale, subregionSlug);
  if (!subRegion) return {};
  const validLocales = getLocalesWithSubRegion(subregionSlug);
  const validLocaleSlugs = validLocales.map((l) => l.slug);
  return buildMetadata(
    locale,
    null,
    `/${locale.slug}/state/${subRegion.slug}`,
    subRegion,
    validLocaleSlugs
  );
}

export default async function SubRegionPage({params}: Props) {
  const {locale: localeSlug, subregion: subregionSlug} = await params;
  const locale = getLocale(localeSlug);
  if (!locale) notFound();
  const subRegion = getSubRegion(locale, subregionSlug);
  if (!subRegion) notFound();

  const slug = locale.slug;
  const name = subRegion.name;
  const countryName = locale.name;
  const countryFlag = COUNTRY_FLAGS[slug];
  const stateTools = getToolsBySlugs(stateSeoToolSlugs);

  const path = `/${slug}/state/${subRegion.slug}`;
  const webPageJsonLd = buildWebPageJsonLd(locale, path, subRegion);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    {label: "Home", url: `${SITE_URL}/${slug}`},
    {label: `${countryName} States & Regions`, url: `${SITE_URL}/${slug}/states`},
    {label: name, url: `${SITE_URL}${path}`},
  ]);

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8 sm:py-8">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
          {name}, {countryName} — Free Finance & Business Tools
        </h1>
        <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600">
          Free finance and business tools for {name}, {countryName}. Use our calculators to make
          informed financial decisions with {name}-specific rates and regulations.
        </p>
      </section>

      <section>
        <a
          href={`/${slug}/state/${subRegion.slug}/take-home-pay`}
          className="block rounded-lg border-2 border-emerald-200 bg-emerald-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
        >
          <h2 className="text-lg font-bold text-emerald-900 mb-1">
            {name} Take-Home Pay Calculator
          </h2>
          <p className="text-sm text-emerald-700">
            See exactly how much you take home after federal, state, and FICA taxes for {name}.
          </p>
        </a>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-zinc-950 mb-4">All Tools for {name}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stateTools.map((tool) => (
            <a
              key={tool.id}
              href={`/${slug}/state/${subRegion.slug}/${tool.slug}`}
              className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-zinc-950 mb-1">{tool.name}</h3>
              <p className="text-sm text-zinc-500">
                {tool.description.replace("{country}", `${name}, ${countryName}`)}
              </p>
            </a>
          ))}
        </div>
      </section>

      {locale.states && locale.states.length > 1 && (
        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-4">
            Other <FlagImage code={slug} size="lg" /> {countryName} States & Regions
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locale.states
              .filter((s) => s.slug !== subRegion.slug)
              .map((other) => (
                <a
                  key={other.slug}
                  href={`/${slug}/state/${other.slug}`}
                  className="block rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
                >
                  <h3 className="font-semibold text-zinc-950">{other.name}</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Financial tools for {other.name}, {countryName}
                  </p>
                </a>
              ))}
          </div>
          <a
            href={`/${slug}/states`}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700"
          >
            View all <FlagImage code={slug} size="lg" /> {countryName} states & regions →
          </a>
        </section>
      )}

      <div className="mt-10">
        <SourceFooter localeSlug={slug} />
      </div>
    </div>
  );
}
