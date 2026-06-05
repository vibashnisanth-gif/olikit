import Link from "next/link"
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"

export const metadata: Metadata = {
  title: "Contact Olikit — Get in Touch",
  description:
    "Contact the Olikit team for feedback, questions, or support. We welcome suggestions for new calculators, countries, and features.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Olikit — Get in Touch",
    description:
      "Contact the Olikit team for feedback, questions, or support.",
    url: `${SITE_URL}/contact`,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Olikit",
  description: "Contact the Olikit team for support, feedback, and inquiries.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: "Olikit",
    url: SITE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@olikit.com",
      contactType: "customer support",
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <section>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Have feedback, questions, or suggestions? We would love to hear from you.
          </p>
        </section>

        <section className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Email</h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Send us an email at{" "}
            <a href="mailto:support@olikit.com" className="text-blue-600 hover:underline font-medium">
                support@olikit.com
            </a>
          </p>
          <p className="text-sm text-zinc-500">
            We aim to respond within 2 business days.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What to Include</h2>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li><strong>Calculator feedback</strong> — Tell us about your experience with any calculator.</li>
            <li><strong>Feature requests</strong> — Suggest new calculators, countries, or improvements.</li>
            <li><strong>Data corrections</strong> — If you notice outdated tax brackets or rates, please let us know.</li>
            <li><strong>Bug reports</strong> — Describe what went wrong and which page you were on.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Feedback Form</h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Prefer a form? Email us directly with the details above. For data correction
            requests, please include the specific tax year, country, and source URL
            for the updated rate.
          </p>
        </section>

        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-3">Our Calculators</h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Browse our free calculators:{" "}
            <Link href="/us/tools/salary-calculator" className="text-blue-600 hover:underline">Salary Calculator</Link>,{" "}
            <Link href="/us/tools/tax-calculator" className="text-blue-600 hover:underline">Tax Calculator</Link>,{" "}
            <Link href="/us/tools/mortgage-calculator" className="text-blue-600 hover:underline">Mortgage Calculator</Link>,{" "}
            <Link href="/us/tools/investment-calculator" className="text-blue-600 hover:underline">Investment Calculator</Link>,{" "}
            <Link href="/us/tools/retirement-calculator" className="text-blue-600 hover:underline">Retirement Calculator</Link>.
          </p>
        </section>
      </main>
    </>
  )
}
