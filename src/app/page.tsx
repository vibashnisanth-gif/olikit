import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { SITE_URL } from "@/lib/seo/constants"

export const metadata: Metadata = {
  title: "Olikit - Free Online Finance & Business Tools",
  description:
    "Free finance, salary, tax, mortgage and business calculators for the United States, UK, Australia, Canada, India, New Zealand, and Singapore. Make informed financial decisions with our comprehensive suite of online tools.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Olikit - Free Online Finance & Business Tools",
    description:
      "Free finance, salary, tax, mortgage and business calculators. Make informed decisions with our comprehensive suite of online tools.",
    url: SITE_URL,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
}

export default function Home() {
  redirect("/us")
}
