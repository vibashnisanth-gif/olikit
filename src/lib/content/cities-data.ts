export interface CityData {
  slug: string;
  name: string;
  country: string;
  countrySlug: string;
  multiplier: number;
  population: number;
  costOfLivingIndex: number;
  description: string;
}

// Salary multipliers: how much more/less a city pays vs country average
// Based on BLS, ONS, ABS, and cost of living indices
export const cities: CityData[] = [
  // United States
  {
    slug: "new-york",
    name: "New York",
    country: "United States",
    countrySlug: "us",
    multiplier: 1.35,
    population: 8300000,
    costOfLivingIndex: 100,
    description:
      "New York City offers the highest salaries in the US, especially in finance, tech, and healthcare. The high cost of living is offset by earning potential.",
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    country: "United States",
    countrySlug: "us",
    multiplier: 1.4,
    population: 870000,
    costOfLivingIndex: 95,
    description:
      "San Francisco leads in tech salaries with the highest concentration of Silicon Valley companies. Cost of living is among the highest globally.",
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    country: "United States",
    countrySlug: "us",
    multiplier: 1.1,
    population: 3900000,
    costOfLivingIndex: 78,
    description:
      "Los Angeles offers competitive salaries in entertainment, tech, and healthcare with a diverse job market.",
  },
  {
    slug: "chicago",
    name: "Chicago",
    country: "United States",
    countrySlug: "us",
    multiplier: 1.0,
    population: 2700000,
    costOfLivingIndex: 72,
    description:
      "Chicago provides strong earning potential with a lower cost of living than coastal cities, making it attractive for professionals.",
  },
  {
    slug: "houston",
    name: "Houston",
    country: "United States",
    countrySlug: "us",
    multiplier: 0.95,
    population: 2300000,
    costOfLivingIndex: 62,
    description:
      "Houston's energy sector drives high salaries, particularly in engineering and technical roles.",
  },
  {
    slug: "miami",
    name: "Miami",
    country: "United States",
    countrySlug: "us",
    multiplier: 1.0,
    population: 440000,
    costOfLivingIndex: 74,
    description:
      "Miami offers competitive salaries in finance, healthcare, and tourism with no state income tax.",
  },
  {
    slug: "seattle",
    name: "Seattle",
    country: "United States",
    countrySlug: "us",
    multiplier: 1.2,
    population: 740000,
    costOfLivingIndex: 85,
    description:
      "Seattle's tech hub status (Amazon, Microsoft) drives some of the highest salaries in the US.",
  },
  {
    slug: "boston",
    name: "Boston",
    country: "United States",
    countrySlug: "us",
    multiplier: 1.15,
    population: 680000,
    costOfLivingIndex: 88,
    description:
      "Boston excels in healthcare, education, and biotech salaries with world-class institutions.",
  },
  {
    slug: "austin",
    name: "Austin",
    country: "United States",
    countrySlug: "us",
    multiplier: 1.05,
    population: 980000,
    costOfLivingIndex: 68,
    description:
      "Austin's growing tech scene offers strong salaries with no state income tax and lower cost of living.",
  },
  {
    slug: "denver",
    name: "Denver",
    country: "United States",
    countrySlug: "us",
    multiplier: 1.05,
    population: 710000,
    costOfLivingIndex: 72,
    description:
      "Denver provides competitive salaries in tech, aerospace, and healthcare with outdoor lifestyle appeal.",
  },

  // United Kingdom
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    countrySlug: "uk",
    multiplier: 1.3,
    population: 9000000,
    costOfLivingIndex: 85,
    description:
      "London is Europe's financial capital with the highest salaries in the UK, particularly in finance, tech, and legal sectors.",
  },
  {
    slug: "manchester",
    name: "Manchester",
    country: "United Kingdom",
    countrySlug: "uk",
    multiplier: 0.9,
    population: 550000,
    costOfLivingIndex: 62,
    description:
      "Manchester offers strong salaries in digital, media, and healthcare with significantly lower cost of living than London.",
  },
  {
    slug: "birmingham",
    name: "Birmingham",
    country: "United Kingdom",
    countrySlug: "uk",
    multiplier: 0.85,
    population: 1100000,
    costOfLivingIndex: 58,
    description:
      "Birmingham provides competitive salaries in engineering, healthcare, and professional services.",
  },
  {
    slug: "edinburgh",
    name: "Edinburgh",
    country: "United Kingdom",
    countrySlug: "uk",
    multiplier: 0.92,
    population: 530000,
    costOfLivingIndex: 64,
    description:
      "Edinburgh excels in finance, tech, and tourism salaries with a high quality of life.",
  },
  {
    slug: "bristol",
    name: "Bristol",
    country: "United Kingdom",
    countrySlug: "uk",
    multiplier: 0.88,
    population: 470000,
    costOfLivingIndex: 60,
    description: "Bristol offers strong salaries in aerospace, tech, and creative industries.",
  },

  // Australia
  {
    slug: "sydney",
    name: "Sydney",
    country: "Australia",
    countrySlug: "au",
    multiplier: 1.15,
    population: 5300000,
    costOfLivingIndex: 82,
    description:
      "Sydney offers the highest salaries in Australia, particularly in finance, tech, and mining.",
  },
  {
    slug: "melbourne",
    name: "Melbourne",
    country: "Australia",
    countrySlug: "au",
    multiplier: 1.05,
    population: 5100000,
    costOfLivingIndex: 74,
    description:
      "Melbourne provides competitive salaries in tech, healthcare, and education with a vibrant culture.",
  },
  {
    slug: "brisbane",
    name: "Brisbane",
    country: "Australia",
    countrySlug: "au",
    multiplier: 0.95,
    population: 2500000,
    costOfLivingIndex: 68,
    description:
      "Brisbane offers strong salaries in mining, healthcare, and construction with lower cost of living.",
  },
  {
    slug: "perth",
    name: "Perth",
    country: "Australia",
    countrySlug: "au",
    multiplier: 1.0,
    population: 2100000,
    costOfLivingIndex: 66,
    description: "Perth excels in mining and resources salaries with a relaxed lifestyle.",
  },
  {
    slug: "adelaide",
    name: "Adelaide",
    country: "Australia",
    countrySlug: "au",
    multiplier: 0.9,
    population: 1400000,
    costOfLivingIndex: 60,
    description:
      "Adelaide offers competitive salaries in defense, tech, and healthcare with affordable living.",
  },

  // Canada
  {
    slug: "toronto",
    name: "Toronto",
    country: "Canada",
    countrySlug: "ca",
    multiplier: 1.1,
    population: 2900000,
    costOfLivingIndex: 76,
    description:
      "Toronto is Canada's financial hub with the highest salaries in finance, tech, and healthcare.",
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    country: "Canada",
    countrySlug: "ca",
    multiplier: 1.05,
    population: 675000,
    costOfLivingIndex: 80,
    description:
      "Vancouver offers strong salaries in tech, film, and natural resources with high quality of life.",
  },
  {
    slug: "montreal",
    name: "Montreal",
    country: "Canada",
    countrySlug: "ca",
    multiplier: 0.9,
    population: 1780000,
    costOfLivingIndex: 60,
    description:
      "Montreal provides competitive salaries in AI, gaming, and aerospace with affordable living.",
  },
  {
    slug: "calgary",
    name: "Calgary",
    country: "Canada",
    countrySlug: "ca",
    multiplier: 1.0,
    population: 1340000,
    costOfLivingIndex: 66,
    description: "Calgary excels in energy sector salaries with no provincial sales tax.",
  },
  {
    slug: "ottawa",
    name: "Ottawa",
    country: "Canada",
    countrySlug: "ca",
    multiplier: 0.95,
    population: 1020000,
    costOfLivingIndex: 62,
    description: "Ottawa offers strong salaries in government, tech, and defense sectors.",
  },

  // New Zealand
  {
    slug: "auckland",
    name: "Auckland",
    country: "New Zealand",
    countrySlug: "nz",
    multiplier: 1.1,
    population: 1650000,
    costOfLivingIndex: 72,
    description:
      "Auckland offers the highest salaries in New Zealand, particularly in tech, finance, and healthcare.",
  },
  {
    slug: "wellington",
    name: "Wellington",
    country: "New Zealand",
    countrySlug: "nz",
    multiplier: 1.05,
    population: 215000,
    costOfLivingIndex: 68,
    description:
      "Wellington provides competitive salaries in government, tech, and creative sectors.",
  },
  {
    slug: "christchurch",
    name: "Christchurch",
    country: "New Zealand",
    countrySlug: "nz",
    multiplier: 0.9,
    population: 390000,
    costOfLivingIndex: 58,
    description: "Christchurch offers strong salaries in engineering, healthcare, and agriculture.",
  },

  // India
  {
    slug: "mumbai",
    name: "Mumbai",
    country: "India",
    countrySlug: "in",
    multiplier: 1.2,
    population: 21000000,
    costOfLivingIndex: 30,
    description:
      "Mumbai is India's financial capital with the highest salaries in finance, tech, and entertainment.",
  },
  {
    slug: "delhi",
    name: "Delhi",
    country: "India",
    countrySlug: "in",
    multiplier: 1.0,
    population: 32000000,
    costOfLivingIndex: 26,
    description: "Delhi offers competitive salaries across sectors with a massive job market.",
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    country: "India",
    countrySlug: "in",
    multiplier: 1.15,
    population: 13000000,
    costOfLivingIndex: 28,
    description:
      "Bangalore is India's tech hub with the highest IT salaries and startup ecosystem.",
  },
  {
    slug: "chennai",
    name: "Chennai",
    country: "India",
    countrySlug: "in",
    multiplier: 0.9,
    population: 11000000,
    costOfLivingIndex: 24,
    description: "Chennai offers strong salaries in automotive, IT, and manufacturing sectors.",
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    country: "India",
    countrySlug: "in",
    multiplier: 0.95,
    population: 10000000,
    costOfLivingIndex: 22,
    description:
      "Hyderabad provides competitive IT and pharma salaries with the lowest cost of living among major cities.",
  },

  // Singapore
  {
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    countrySlug: "sg",
    multiplier: 1.0,
    population: 5900000,
    costOfLivingIndex: 84,
    description:
      "Singapore offers high salaries across all sectors with no capital gains tax and a business-friendly environment.",
  },
];

export function getCitiesForCountry(countrySlug: string): CityData[] {
  return cities.filter((c) => c.countrySlug === countrySlug);
}

export function getCity(countrySlug: string, citySlug: string): CityData | undefined {
  return cities.find((c) => c.countrySlug === countrySlug && c.slug === citySlug);
}

export function getCitySalary(
  countrySlug: string,
  citySlug: string,
  countrySalary: number
): number {
  const city = getCity(countrySlug, citySlug);
  if (!city) return countrySalary;
  return Math.round(countrySalary * city.multiplier);
}

export const TOTAL_CITY_PROFESSION_PAGES = cities.length * 30; // approx professions
