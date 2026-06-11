// @ts-check
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import("next").NextConfig} */
const nextConfig = {

  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/:locale/tools/salary/compare",
        destination: "/:locale/tools/salary-calculator/compare",
        permanent: true,
      },
      {
        source: "/comparisons/software-engineer-us-vs-canada",
        destination: "/software-engineer-us-vs-canada",
        permanent: true,
      },
      {
        source: "/comparisons/software-engineer-us-vs-australia",
        destination: "/software-engineer-us-vs-australia",
        permanent: true,
      },
      {
        source: "/comparisons/software-engineer-uk-vs-australia",
        destination: "/software-engineer-uk-vs-australia",
        permanent: true,
      },
      {
        source: "/comparisons/software-engineer-india-vs-singapore",
        destination: "/software-engineer-india-vs-singapore",
        permanent: true,
      },
      {
        source: "/comparisons/software-engineer-us-vs-uk",
        destination: "/software-engineer-us-vs-uk",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          { key: "X-Robots-Tag", value: "index, follow" },
          {
            key: "Cache-Control",
            value:
              "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "X-Robots-Tag", value: "index, follow" },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ]
  },
}

export default nextConfig
