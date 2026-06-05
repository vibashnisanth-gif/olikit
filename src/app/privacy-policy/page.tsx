import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"

export const metadata: Metadata = {
  title: "Privacy Policy — Olikit",
  description:
    "Olikit privacy policy explains how we handle data, cookies, Google Analytics, and AdSense. We are committed to protecting your privacy.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy — Olikit",
    description:
      "Olikit privacy policy — how we handle data, cookies, analytics, and advertising.",
    url: `${SITE_URL}/privacy-policy`,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  description: "Olikit privacy policy — data handling, cookies, and third-party services.",
  url: `${SITE_URL}/privacy-policy`,
  isPartOf: {
    "@type": "WebSite",
    name: "Olikit",
    url: SITE_URL,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <section>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-2">Last updated: June 2026</p>
          <p className="text-zinc-700 dark:text-zinc-300">
            Olikit (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This policy
            explains how we collect, use, and safeguard your information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
            Olikit is a client-side calculator tool. We do not collect or store any financial
            data you enter into our calculators. All calculations happen locally in your browser.
            No salary figures, tax details, or personal financial information is sent to our servers.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            We may collect standard web analytics data through third-party services as described below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Google Analytics (GA4)</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            We use Google Analytics 4 (GA4) to understand how visitors use our site. GA4 collects
            anonymized data including pages visited, time on site, browser type, and general geographic
            location (country level). This data helps us improve our calculators and content. Google
            Analytics uses cookies. You can opt out via the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google Analytics opt-out browser add-on
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Google AdSense</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            We use Google AdSense to display advertisements. AdSense uses cookies to serve
            relevant ads based on your browsing history. Google may use interest-based
            advertising data. You can manage your ad personalization settings at{" "}
            <a href="https://adssettings.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              adssettings.google.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Our site uses minimal cookies required for basic functionality and analytics:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2 text-zinc-700 dark:text-zinc-300">
            <li><strong>Functional cookies</strong> — Required for the site to function properly.</li>
            <li><strong>Analytics cookies</strong> — Used by Google Analytics to track page views and usage patterns.</li>
            <li><strong>Advertising cookies</strong> — Used by Google AdSense to deliver relevant advertisements.</li>
          </ul>
          <p className="text-zinc-700 dark:text-zinc-300 mt-3">
            You can control cookies through your browser settings. Disabling certain cookies
            may affect site functionality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Data Sharing</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            We do not sell, trade, or transfer your personal information to third parties.
            We may share anonymized, aggregate data with analytics and advertising partners
            (Google) as described above. We may disclose information if required by law or
            to protect our rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Third-Party Links</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Our site may contain links to third-party websites. We are not responsible for
            the privacy practices of these sites. We encourage you to review their privacy
            policies before providing any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Children&apos;s Privacy</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Our services are not directed to children under 16. We do not knowingly collect
            personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            For questions about this privacy policy, contact us at{" "}
            <a href="mailto:support@olikit.com" className="text-blue-600 hover:underline">support@olikit.com</a>.
          </p>
        </section>
      </main>
    </>
  )
}
