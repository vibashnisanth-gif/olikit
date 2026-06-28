import type {Metadata} from "next";
import Link from "next/link";
import {WorldDashboard} from "./world-dashboard";
import {SITE_URL} from "@/lib/seo/constants";

export const metadata: Metadata = {
  title: "World Monitor — Live Global Markets, News & Country Risk",
  description:
    "Track S&P 500, Dow Jones, NASDAQ, Gold, Bitcoin and 20 country risk rankings. Live news from Al Jazeera, BBC World, and Reuters.",
  keywords: [
    "world monitor",
    "live markets",
    "S&P 500",
    "Dow Jones",
    "NASDAQ",
    "bitcoin price",
    "gold price",
    "crude oil",
    "country risk",
    "ease of business",
    "global news",
    "financial dashboard",
    "FTSE 100",
    "Nikkei 225",
  ],
  alternates: {
    canonical: `${SITE_URL}/world`,
  },
  openGraph: {
    title: "World Monitor — Live Global Markets, News & Country Risk",
    description:
      "Track S&P 500, Dow Jones, NASDAQ, Gold, Bitcoin and 20 country risk rankings. Live news from Al Jazeera, BBC World, and Reuters.",
    url: `${SITE_URL}/world`,
    siteName: "Olikit",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og?title=World+Monitor&type=website&year=2026`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Monitor — Live Global Markets, News & Country Risk",
    description:
      "Track S&P 500, Dow Jones, NASDAQ, Gold, Bitcoin and 20 country risk rankings. Live news from Al Jazeera, BBC World, and Reuters.",
    images: [`${SITE_URL}/api/og?title=World+Monitor&type=website&year=2026`],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
};

const faqs = [
  {
    question: "What is World Monitor?",
    answer:
      "World Monitor is a live global intelligence dashboard that tracks financial markets, world news, and country risk rankings. It aggregates data from Yahoo Finance, public RSS feeds, and the World Bank into a single real-time view.",
  },
  {
    question: "What markets are tracked?",
    answer:
      "World Monitor tracks 8 major market indicators: S&P 500, Dow Jones Industrial Average, NASDAQ Composite, FTSE 100, Nikkei 225, Gold, Crude Oil, and Bitcoin. Prices are updated every 5 minutes.",
  },
  {
    question: "Where does the news come from?",
    answer:
      "News is aggregated from three major international news sources via RSS: Al Jazeera, BBC World, and Reuters. Articles are sorted by publication time and displayed with thumbnails and summaries where available.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "Market data refreshes every 5 minutes. News feeds update every 10 minutes. Country risk rankings are based on annual World Bank data and update daily.",
  },
  {
    question: "What is the Country Risk ranking?",
    answer:
      "Country Risk shows the World Bank Ease of Doing Business ranking for 20 major economies. Countries are rated from Easy to Difficult based on their regulatory environment, with Singapore and Hong Kong topping the list.",
  },
  {
    question: "Is this data free to use?",
    answer:
      "Yes. All data comes from public APIs and RSS feeds. World Monitor is a free tool provided by Olikit to help professionals and businesses understand global economic conditions.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "World Monitor — Live Global Markets, News & Country Risk",
    url: `${SITE_URL}/world`,
    description:
      "Track S&P 500, Dow Jones, NASDAQ, Gold, Bitcoin and 20 country risk rankings. Live news from Al Jazeera, BBC World, and Reuters.",
    isPartOf: {
      "@type": "WebSite",
      name: "Olikit",
      url: SITE_URL,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "World Monitor",
        item: `${SITE_URL}/world`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Global Market Indices — Live Data",
    description:
      "Real-time prices and daily changes for S&P 500, Dow Jones, NASDAQ, FTSE 100, Nikkei 225, Gold, Crude Oil, and Bitcoin.",
    url: `${SITE_URL}/world`,
    provider: {
      "@type": "Organization",
      name: "Olikit",
      url: SITE_URL,
    },
    variableMeasured: [
      {name: "S&P 500", unitText: "USD"},
      {name: "Dow Jones Industrial Average", unitText: "USD"},
      {name: "NASDAQ Composite", unitText: "USD"},
      {name: "FTSE 100", unitText: "GBP"},
      {name: "Nikkei 225", unitText: "JPY"},
      {name: "Gold", unitText: "USD per troy ounce"},
      {name: "Crude Oil (WTI)", unitText: "USD per barrel"},
      {name: "Bitcoin", unitText: "USD"},
    ],
  },
];

export default function WorldPage() {
  return (
    <>
      <div className="-mx-4 sm:-mx-4">
        {/* Breadcrumb */}
        <nav className="px-5 sm:px-8 pt-4 pb-2" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-xs text-zinc-400">
            <li>
              <Link href="/" className="hover:text-zinc-700 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span className="text-zinc-300">/</span>
            </li>
            <li className="text-zinc-700 font-medium">World Monitor</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="px-5 sm:px-8 py-5 bg-white border-b border-zinc-100">
          <h1 className="text-lg font-bold text-zinc-900 tracking-tight">World Monitor</h1>
          <p className="text-sm text-zinc-500 mt-1 max-w-2xl leading-relaxed">
            Live global intelligence dashboard tracking financial markets, world news, and country
            risk across 20 major economies. Data sourced from Yahoo Finance, Al Jazeera, BBC World,
            Reuters, and the World Bank.
          </p>
        </div>

        {/* Dashboard panels */}
        <WorldDashboard />

        {/* FAQ Section */}
        <div className="bg-white border-t border-zinc-100 px-5 sm:px-8 py-8">
          <h2 className="text-base font-bold text-zinc-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3 max-w-3xl">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-zinc-100 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer px-4 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-50 transition-colors">
                  {faq.question}
                  <span className="text-zinc-400 group-open:rotate-180 transition-transform">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-3 text-sm text-zinc-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>

        {/* Related Tools */}
        <div className="bg-zinc-50 border-t border-zinc-100 px-5 sm:px-8 py-8">
          <h2 className="text-base font-bold text-zinc-900 mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/us/tools/salary-calculator"
              className="block p-4 bg-white rounded-xl border border-zinc-100 hover:border-zinc-200 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-semibold text-zinc-800">Salary Calculator</p>
              <p className="text-xs text-zinc-500 mt-1">Calculate take-home pay after tax</p>
            </Link>
            <Link
              href="/compare"
              className="block p-4 bg-white rounded-xl border border-zinc-100 hover:border-zinc-200 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-semibold text-zinc-800">Country Comparison</p>
              <p className="text-xs text-zinc-500 mt-1">Compare salaries across 7 countries</p>
            </Link>
            <Link
              href="/rankings"
              className="block p-4 bg-white rounded-xl border border-zinc-100 hover:border-zinc-200 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-semibold text-zinc-800">Global Rankings</p>
              <p className="text-xs text-zinc-500 mt-1">Best countries for your profession</p>
            </Link>
          </div>
        </div>

        {/* Data attribution */}
        <div className="px-5 sm:px-8 py-3 bg-white border-t border-zinc-100">
          <p className="text-[11px] text-zinc-400">
            Data: Yahoo Finance, World Bank, public RSS feeds · Map:{" "}
            <a
              href="https://github.com/koala73/worldmonitor"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-600"
            >
              World Monitor
            </a>{" "}
            (AGPL-3.0)
          </p>
        </div>
      </div>

      {/* JSON-LD */}
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
        />
      ))}
    </>
  );
}