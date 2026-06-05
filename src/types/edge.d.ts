import "next/server"

declare module "next/server" {
  interface NextRequest {
    geo?: {
      city?: string
      country?: string
      continent?: string
      latitude?: string
      longitude?: string
      postalCode?: string
      region?: string
      regionCode?: string
    }
  }
}
