import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { SiteScripts } from "@/components/site-scripts"
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
    default: "Olikit - Free Online Finance & Business Tools",
    template: "%s | Olikit",
  },
  description:
    "Free finance, salary, tax, mortgage and business calculators. Make informed decisions with our comprehensive suite of online tools.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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
        {children}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}
        <SiteScripts />
      </body>
    </html>
  )
}
