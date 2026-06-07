export interface AdPlacement {
  slotId: string
  format: "auto" | "rectangle" | "horizontal" | "vertical"
  label: string
  location: "sidebar" | "content-between" | "content-after" | "banner-top" | "banner-bottom"
}

export const adPlacements: AdPlacement[] = [
  { slotId: "1234567890", format: "rectangle", label: "Sidebar - Tool Pages", location: "sidebar" },
  { slotId: "1234567891", format: "horizontal", label: "Between Content - Tool Pages", location: "content-between" },
  { slotId: "1234567892", format: "horizontal", label: "Bottom Banner - All Pages", location: "banner-bottom" },
  { slotId: "1234567893", format: "rectangle", label: "Sidebar - Profession Pages", location: "sidebar" },
  { slotId: "1234567894", format: "horizontal", label: "Between Content - Profession Pages", location: "content-between" },
  { slotId: "1234567895", format: "rectangle", label: "Sidebar - Comparison Pages", location: "sidebar" },
  { slotId: "1234567896", format: "horizontal", label: "Top Banner - Homepage", location: "banner-top" },
  { slotId: "1234567897", format: "horizontal", label: "Between Content - Salary Hub", location: "content-between" },
  { slotId: "1234567898", format: "rectangle", label: "Sidebar - State Pages", location: "sidebar" },
  { slotId: "1234567899", format: "horizontal", label: "After Calculator - Tool Pages", location: "content-after" },
]

export function getPlacementsForPage(
  pageType: string,
  location: string
): AdPlacement[] {
  return adPlacements.filter(
    (p) => p.location === location && p.label.toLowerCase().includes(pageType.toLowerCase())
  )
}
