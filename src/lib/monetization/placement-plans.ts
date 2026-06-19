export interface AdPlacement {
  slotId: string
  format: "auto" | "rectangle" | "horizontal" | "vertical"
  label: string
  location: "sidebar" | "content-between" | "content-after" | "banner-top" | "banner-bottom"
}

const PLACEHOLDER_SLOTS: AdPlacement[] = [
  { slotId: "PLACEHOLDER_SLOT_1", format: "rectangle", label: "Sidebar - Tool Pages", location: "sidebar" },
  { slotId: "PLACEHOLDER_SLOT_2", format: "horizontal", label: "Between Content - Tool Pages", location: "content-between" },
  { slotId: "PLACEHOLDER_SLOT_3", format: "horizontal", label: "Bottom Banner - All Pages", location: "banner-bottom" },
  { slotId: "PLACEHOLDER_SLOT_4", format: "rectangle", label: "Sidebar - Profession Pages", location: "sidebar" },
  { slotId: "PLACEHOLDER_SLOT_5", format: "horizontal", label: "Between Content - Profession Pages", location: "content-between" },
  { slotId: "PLACEHOLDER_SLOT_6", format: "rectangle", label: "Sidebar - Comparison Pages", location: "sidebar" },
  { slotId: "PLACEHOLDER_SLOT_7", format: "horizontal", label: "Top Banner - Homepage", location: "banner-top" },
  { slotId: "PLACEHOLDER_SLOT_8", format: "horizontal", label: "Between Content - Salary Hub", location: "content-between" },
  { slotId: "PLACEHOLDER_SLOT_9", format: "rectangle", label: "Sidebar - State Pages", location: "sidebar" },
  { slotId: "PLACEHOLDER_SLOT_10", format: "horizontal", label: "After Calculator - Tool Pages", location: "content-after" },
]

// Only return placements when AdSense is actually configured with real slot IDs.
// Set NEXT_PUBLIC_ADSENSE_CLIENT_ID and replace PLACEHOLDER_SLOT_* with real slot IDs.
export function getAdPlacements(): AdPlacement[] {
  if (!process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID) return []
  return PLACEHOLDER_SLOTS
}

export function getPlacementsForPage(
  pageType: string,
  location: string
): AdPlacement[] {
  return getAdPlacements().filter(
    (p) => p.location === location && p.label.toLowerCase().includes(pageType.toLowerCase())
  )
}
