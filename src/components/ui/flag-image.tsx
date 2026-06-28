const SLUG_TO_ISO: Record<string, string> = {
  us: "us", uk: "gb", au: "au", ca: "ca", nz: "nz", in: "in", sg: "sg",
}

const SIZE_MAP: Record<string, string> = {
  xs: "w-4 h-3",
  sm: "w-5 h-[15px]",
  md: "w-6 h-[18px]",
  lg: "w-8 h-6",
  xl: "w-10 h-[30px]",
  "2xl": "w-12 h-9",
  "3xl": "w-16 h-12",
}

const COUNTRY_NAMES: Record<string, string> = {
  us: "United States", uk: "United Kingdom", au: "Australia", ca: "Canada",
  nz: "New Zealand", in: "India", sg: "Singapore",
}

export function FlagImage({
  code,
  size = "md",
  className = "",
  alt,
}: {
  code: string
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  className?: string
  alt?: string
}) {
  const slug = code.toLowerCase().split("-").pop() || code.toLowerCase()
  const cc = SLUG_TO_ISO[slug] || slug
  const sizeClass = SIZE_MAP[size] || SIZE_MAP.md
  const countryName = alt || COUNTRY_NAMES[slug] || slug

  return (
    <img
      src={`https://flagcdn.com/32x24/${cc}.webp`}
      alt={`${countryName} flag`}
      width={32}
      height={24}
      className={`inline-block rounded-[2px] object-cover ${sizeClass} ${className}`}
      loading="lazy"
    />
  )
}
