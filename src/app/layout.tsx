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
    default: "Olikit — Global Salary Intelligence",
    template: "%s | Olikit",
  },
  description:
    "Global salary intelligence, research, and data-driven compensation comparisons across 7 countries. Make informed career and relocation decisions with transparent methodology.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
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
