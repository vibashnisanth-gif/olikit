import { NextRequest, NextResponse } from "next/server"

const VALID_SLUGS = new Set(["us", "uk", "au", "ca", "nz", "in", "sg"])
const DEFAULT_SLUG = "us"
const COOKIE_NAME = "olikit_locale"

function getLocaleFromGeo(request: NextRequest): string | null {
  const country = request.geo?.country
  if (!country) return null
  const map: Record<string, string> = {
    US: "us", GB: "uk", AU: "au", CA: "ca", NZ: "nz", IN: "in", SG: "sg",
  }
  return map[country.toUpperCase()] ?? null
}

function getLocaleFromAcceptLanguage(request: NextRequest): string | null {
  const al = request.headers.get("accept-language")
  if (!al) return null
  const preferred: Record<string, string> = {
    "en-us": "us", "en-gb": "uk", "en-au": "au",
    "en-ca": "ca", "en-nz": "nz", "en-in": "in", "en-sg": "sg",
  }
  for (const entry of al.split(",")) {
    const lang = entry.trim().split(";")[0]?.toLowerCase()
    if (lang && preferred[lang]) return preferred[lang]
    const base = lang?.split("-")[0]
    if (base === "en" && lang !== "en") {
      const matched = preferred[lang!]
      if (matched) return matched
    }
  }
  return null
}

function detectLocale(request: NextRequest): string {
  const pathname = request.nextUrl.pathname
  const pathSlug = pathname.split("/")[1]
  if (pathSlug && VALID_SLUGS.has(pathSlug)) return pathSlug
  const cookie = request.cookies.get(COOKIE_NAME)?.value
  if (cookie && VALID_SLUGS.has(cookie)) return cookie
  const geo = getLocaleFromGeo(request)
  if (geo) return geo
  const accept = getLocaleFromAcceptLanguage(request)
  if (accept) return accept
  return DEFAULT_SLUG
}

const PUBLIC_FILE = /\.(?:ico|svg|png|jpg|jpeg|gif|webp|css|js|woff2?|ttf|eot|json|txt|xml)$/
const EXCLUDED = /^\/(?:_next|api|favicon\.ico|robots\.txt|sitemap\.xml|manifest\.json|ads\.txt)(?:\/|$)/

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const url = request.nextUrl.clone()

  if (EXCLUDED.test(pathname) || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next()
  }

  const host = request.headers.get("host") ?? ""
  if (host.startsWith("www.") && !host.includes("localhost") && !host.includes("127.0.0.1")) {
    url.host = host.slice(4)
    url.pathname = pathname
    return NextResponse.redirect(url, 301)
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    url.pathname = pathname.replace(/\/+$/, "")
    return NextResponse.redirect(url, 308)
  }

  const locale = detectLocale(request)

  if (pathname === "/") {
    url.pathname = `/${locale}`
    const res = NextResponse.redirect(url, 307)
    res.cookies.set(COOKIE_NAME, locale, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })
    return res
  }

  const response = NextResponse.next()
  response.cookies.set(COOKIE_NAME, locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  })
  response.headers.set("Vary", "Accept-Language, Cookie")
  response.headers.set(
    "Cache-Control",
    "public, max-age=0, s-maxage=1, stale-while-revalidate=59"
  )

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
}
