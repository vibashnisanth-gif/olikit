import Link from "next/link"
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { Shell } from "@/components/shell"

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
    <Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl space-y-10">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-500">
            Have feedback, questions, or suggestions? We would love to hear from you.
          </p>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">Email</h2>
          <p className="text-zinc-600">
            Send us an email at{" "}
            <a href="mailto:support@olikit.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                support@olikit.com
            </a>
          </p>
          <p className="text-sm text-zinc-500 mt-2">
            We aim to respond within 2 business days.
          </p>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">Address</h2>
          <p className="text-zinc-600">
            Olikit<br />
            Sydney, NSW<br />
            Australia
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">What to Include</h2>
          <ul className="list-disc pl-6 space-y-2 text-zinc-600">
            <li><strong>Calculator feedback</strong> — Tell us about your experience with any calculator.</li>
            <li><strong>Feature requests</strong> — Suggest new calculators, countries, or improvements.</li>
            <li><strong>Data corrections</strong> — If you notice outdated tax brackets or rates, please let us know.</li>
            <li><strong>Bug reports</strong> — Describe what went wrong and which page you were on.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">Feedback Form</h2>
          <p className="text-zinc-600">
            Prefer a form? Email us directly with the details above. For data correction
            requests, please include the specific tax year, country, and source URL
            for the updated rate.
          </p>
        </section>

        <section className="border-t pt-8">
          <h2 className="text-xl font-semibold text-zinc-950 mb-3">Our Calculators</h2>
          <p className="text-zinc-600">
            Browse our free calculators:{" "}
            <Link href="/compare" className="text-emerald-600 hover:text-emerald-700">Compare Salaries</Link>,{" "}
            <Link href="/rankings" className="text-emerald-600 hover:text-emerald-700">Salary Rankings</Link>,{" "}
            <Link href="/countries" className="text-emerald-600 hover:text-emerald-700">Country Guides</Link>,{" "}
            <Link href="/research" className="text-emerald-600 hover:text-emerald-700">Research Reports</Link>,{" "}
            <Link href="/professions" className="text-emerald-600 hover:text-emerald-700">Profession Hubs</Link>.
          </p>
        </section>
      </div>
    </Shell>
  )
}
