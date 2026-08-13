import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          // Thin content pages - templated salary data
          "/*-salary-by-country",
          "/*-salary-us",
          "/*-salary-uk",
          "/*-salary-australia",
          "/*-salary-canada",
          "/*-salary-new-zealand",
          "/*-salary-singapore",
          "/*-salary-india",
          "/*-salary-au",
          "/*-salary-ca",
          "/*-salary-nz",
          "/*-salary-sg",
          "/*-salary-in",
          "/*-salary",
          // Derived metrics pages
          "/*-tax-adjusted-salary",
          "/*-ppp-adjusted-salary",
          "/*-highest-paying-countries",
          "/*-best-countries",
          // Comparison pages
          "/*-vs-*",
          "/comparisons/",
          // State pages
          "/us/state/",
          "/uk/state/",
          "/au/state/",
          "/ca/state/",
          // Tool/calculator pages
          "/*/tools/",
          // Glossary pages
          "/*/glossary/",
          // Rankings pages
          "/*/rankings/",
          // Profession list pages
          "/professions",
        ],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          // Same thin content paths for Googlebot
          "/*-salary-by-country",
          "/*-salary-us",
          "/*-salary-uk",
          "/*-salary-australia",
          "/*-salary-canada",
          "/*-salary-new-zealand",
          "/*-salary-singapore",
          "/*-salary-india",
          "/*-salary-au",
          "/*-salary-ca",
          "/*-salary-nz",
          "/*-salary-sg",
          "/*-salary-in",
          "/*-salary",
          "/*-tax-adjusted-salary",
          "/*-ppp-adjusted-salary",
          "/*-highest-paying-countries",
          "/*-best-countries",
          "/*-vs-*",
          "/comparisons/",
          "/us/state/",
          "/uk/state/",
          "/au/state/",
          "/ca/state/",
          "/*/tools/",
          "/*/glossary/",
          "/*/rankings/",
          "/professions",
        ],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: "https://olikit.com/sitemap.xml",
  }
}
