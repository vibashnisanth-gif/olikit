import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import {
  getDefaultCountrySlug,
  getSlugByIsoCode,
  isValidSlug,
  getAllRoutes,
  COUNTRY_COOKIE,
  COOKIE_MAX_AGE,
} from "@/lib/routing/countries"
import { SITE_URL } from "@/lib/seo/constants"

const COUNTRY_SLUG_PATTERN = /^\/([a-z]{2})(\/|$)/
const X_DEFAULT_URL = SITE_URL

const SECURITY_HEADERS: Record<string, string> = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy":
    "camera=(), microphone=(), geolocation=(), interest-cohort=()",
}

function applySecurityHeaders(response: NextResponse): void {
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value)
  }
}

function buildHreflangHeader(pathname: string | undefined): string {
  const currentPath = pathname ?? "/"
  const links: string[] = []

  for (const route of getAllRoutes()) {
    const localePath = currentPath.replace(
      COUNTRY_SLUG_PATTERN,
      (_, _slug, rest) => `/${route.slug}${rest}`
    )
    links.push(
      `<${X_DEFAULT_URL}${localePath}>; rel="alternate"; hreflang="${route.localeCode}"`
    )
  }

  const defaultPath = currentPath.replace(COUNTRY_SLUG_PATTERN, "/")
  links.push(
    `<${X_DEFAULT_URL}${defaultPath}>; rel="alternate"; hreflang="x-default"`
  )

  return links.join(", ")
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  const skipPatterns = [
    "/_next/",
    "/api/",
    "/favicon.ico",
    "/robots.txt",
    "/sitemap.xml",
    "/__nextjs",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ]
  if (skipPatterns.some((p) => pathname.startsWith(p))) {
    return NextResponse.next()
  }

  const match = pathname.match(COUNTRY_SLUG_PATTERN)
  let detectedSlug: string | undefined

  if (match && isValidSlug(match[1])) {
    detectedSlug = match[1]
  }

  if (!detectedSlug) {
    const cookieSlug = request.cookies.get(COUNTRY_COOKIE)?.value
    if (cookieSlug && isValidSlug(cookieSlug)) {
      detectedSlug = cookieSlug
    }

    if (!detectedSlug) {
      const geoCountry = request.geo?.country
      if (geoCountry) {
        detectedSlug = getSlugByIsoCode(geoCountry)
      }
    }

    detectedSlug = detectedSlug ?? getDefaultCountrySlug()

    const url = request.nextUrl.clone()
    url.pathname = `/${detectedSlug}${pathname === "/" ? "" : pathname}`
    url.search = search

    const response = NextResponse.redirect(url, 301)
    applySecurityHeaders(response)
    response.cookies.set(COUNTRY_COOKIE, detectedSlug, {
      maxAge: COOKIE_MAX_AGE,
      path: "/",
      sameSite: "lax",
    })
    response.headers.set("Link", buildHreflangHeader(pathname))
    return response
  }

  const response = NextResponse.next()
  applySecurityHeaders(response)
  response.cookies.set(COUNTRY_COOKIE, detectedSlug, {
    maxAge: COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
  })
  response.headers.set("Link", buildHreflangHeader(pathname))
  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
}
