export function getLastUpdated(): string {
  const now = new Date()
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return `${months[now.getMonth()]} ${now.getFullYear()}`
}

export function getCurrentYear(): number {
  return new Date().getFullYear()
}

export function getDateModified(): string {
  return new Date().toISOString().split("T")[0]
}

export interface FreshnessInfo {
  dateModified: string
  datePublished: string
  lastUpdated: string
}

const BUILD_DATE = new Date().toISOString().split("T")[0]

export function getFreshnessInfo(): FreshnessInfo {
  return {
    dateModified: getDateModified(),
    datePublished: BUILD_DATE,
    lastUpdated: getLastUpdated(),
  }
}
