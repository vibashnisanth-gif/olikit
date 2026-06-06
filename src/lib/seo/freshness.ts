export function getLastUpdated(): string {
  return "June 2026"
}

export function getDateModified(): string {
  return "2026-06-01"
}

export interface FreshnessInfo {
  dateModified: string
  datePublished: string
  lastUpdated: string
}

export function getFreshnessInfo(): FreshnessInfo {
  return {
    dateModified: getDateModified(),
    datePublished: "2026-01-15",
    lastUpdated: getLastUpdated(),
  }
}
