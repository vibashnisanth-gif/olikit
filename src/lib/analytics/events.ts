declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

type EventParams = {
  action: string
  category?: string
  label?: string
  value?: number
  country?: string
  page_type?: string
  provider?: string
  tool?: string
  guide?: string
  profession?: string
  comparison?: string
}

export function trackEvent(params: EventParams): void {
  if (typeof window === "undefined" || !window.gtag) return

  window.gtag("event", params.action, {
    event_category: params.category || "engagement",
    event_label: params.label,
    value: params.value,
    country: params.country,
    page_type: params.page_type,
    provider: params.provider,
    tool: params.tool,
  })
}

export function trackAffiliateClick(provider: string, country: string, pageType: string): void {
  trackEvent({
    action: "affiliate_click",
    category: "affiliate",
    label: `${provider} - ${country}`,
    provider,
    country,
    page_type: pageType,
  })
}

export function trackNewsletterSignup(country: string, pageType: string): void {
  trackEvent({
    action: "newsletter_signup",
    category: "conversion",
    label: `newsletter - ${country}`,
    country,
    page_type: pageType,
  })
}

export function trackCountrySwitch(fromCountry: string, toCountry: string): void {
  trackEvent({
    action: "country_switch",
    category: "navigation",
    label: `${fromCountry} → ${toCountry}`,
    country: toCountry,
  })
}

export function trackCalculatorComplete(tool: string, country: string): void {
  trackEvent({
    action: "calculator_complete",
    category: "calculator",
    label: `${tool} - ${country}`,
    tool,
    country,
    page_type: "calculator",
  })
}

export function trackGuideCtaClick(guide: string, country: string, pageType: string): void {
  trackEvent({
    action: "guide_cta_click",
    category: "engagement",
    label: `${guide} - ${country}`,
    guide,
    country,
    page_type: pageType,
  })
}

export function trackComparisonCtaClick(tool: string, country: string, pageType: string): void {
  trackEvent({
    action: "comparison_cta_click",
    category: "engagement",
    label: `${tool} - ${country}`,
    tool,
    country,
    page_type: pageType,
  })
}

export function trackSalaryPageCtaClick(profession: string, country: string, pageType: string): void {
  trackEvent({
    action: "salary_page_cta_click",
    category: "engagement",
    label: `${profession} - ${country}`,
    profession,
    country,
    page_type: pageType,
  })
}

export function trackResearchPageCtaClick(country: string, pageType: string): void {
  trackEvent({
    action: "research_page_cta_click",
    category: "engagement",
    label: `research - ${country}`,
    country,
    page_type: pageType,
  })
}

export function trackBestServicesClick(provider: string, country: string, pageType: string): void {
  trackEvent({
    action: "best_services_click",
    category: "affiliate",
    label: `${provider} - ${country}`,
    provider,
    country,
    page_type: pageType,
  })
}
