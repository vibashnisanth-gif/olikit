import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { SiteScripts } from "@/components/site-scripts"
import { CurrencyProvider } from "@/lib/currency/currency-context"
import { SITE_URL } from "@/lib/seo/constants"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Olikit — Global Salary Intelligence",
    template: "%s | Olikit",
  },
  description:
    "Global salary intelligence, research, and data-driven compensation comparisons across 7 countries. Make informed career and relocation decisions with transparent methodology.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.067c3d.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    type: "website",
    siteName: "Olikit",
    title: "Olikit — Global Salary Intelligence",
    description:
      "Global salary intelligence, research, and data-driven compensation comparisons across 7 countries. Make informed career and relocation decisions with transparent methodology.",
    url: SITE_URL,
    locale: "en_US",
    images: [{ url: `${SITE_URL}/api/og?title=Global+Salary+Intelligence&type=website&year=2026`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olikit — Global Salary Intelligence",
    description:
      "Global salary intelligence, research, and data-driven compensation comparisons across 7 countries.",
    images: [`${SITE_URL}/api/og?title=Global+Salary+Intelligence&type=website&year=2026`],
  },
  other: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID
    ? {
        "google-adsense-account": process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
      }
    : undefined,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CurrencyProvider>
        {children}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}
        <SiteScripts />
        </CurrencyProvider>
      </body>
    </html>
  )
}
