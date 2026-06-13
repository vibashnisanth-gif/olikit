export interface ProfessionSalaryData {
  average: number
  entryLevel: number
  experienced: number
  rangeLow: number
  rangeHigh: number
}

export interface ProfessionData {
  id: string
  slug: string
  name: string
  shortName: string
  description: string
  metaTitleTemplate: string
  metaDescriptionTemplate: string
  keywords: string[]
  salaries: Record<string, ProfessionSalaryData>
  relatedTools: string[]
}

export const professions: ProfessionData[] = [
  {
    id: "software-engineer",
    slug: "software-engineer",
    name: "Software Engineer",
    shortName: "Software Engineer",
    description:
      "Software engineers design, develop, and maintain software systems and applications.",
    metaTitleTemplate: "Software Engineer Salary in {country} (2025) | Average Pay",
    metaDescriptionTemplate:
      "What is the average software engineer salary in {country}? Get the latest salary data, tax information, and compare pay across experience levels for software engineers in {country}.",
    keywords: [
      "software engineer salary",
      "software developer pay",
      "tech salary",
    ],
    relatedTools: ["salary-calculator", "tax-calculator"],
    salaries: {
      us: { average: 120000, entryLevel: 75000, experienced: 180000, rangeLow: 65000, rangeHigh: 220000 },
      uk: { average: 55000, entryLevel: 30000, experienced: 85000, rangeLow: 25000, rangeHigh: 110000 },
      au: { average: 110000, entryLevel: 65000, experienced: 160000, rangeLow: 55000, rangeHigh: 200000 },
      ca: { average: 85000, entryLevel: 50000, experienced: 130000, rangeLow: 45000, rangeHigh: 160000 },
      nz: { average: 95000, entryLevel: 55000, experienced: 140000, rangeLow: 50000, rangeHigh: 170000 },
      in: { average: 1200000, entryLevel: 400000, experienced: 2500000, rangeLow: 300000, rangeHigh: 3500000 },
      sg: { average: 72000, entryLevel: 42000, experienced: 110000, rangeLow: 36000, rangeHigh: 140000 },
    },
  },
  {
    id: "data-scientist",
    slug: "data-scientist",
    name: "Data Scientist",
    shortName: "Data Scientist",
    description:
      "Data scientists analyze complex data sets to help organizations make better decisions.",
    metaTitleTemplate: "Data Scientist Salary in {country} (2025) | Average Pay",
    metaDescriptionTemplate:
      "What is the average data scientist salary in {country}? Get up-to-date salary data, tax information, and career outlook for data scientists in {country}.",
    keywords: [
      "data scientist salary",
      "data science pay",
      "machine learning salary",
    ],
    relatedTools: ["salary-calculator", "tax-calculator"],
    salaries: {
      us: { average: 125000, entryLevel: 80000, experienced: 175000, rangeLow: 70000, rangeHigh: 210000 },
      uk: { average: 58000, entryLevel: 32000, experienced: 90000, rangeLow: 28000, rangeHigh: 115000 },
      au: { average: 115000, entryLevel: 70000, experienced: 165000, rangeLow: 60000, rangeHigh: 200000 },
      ca: { average: 88000, entryLevel: 55000, experienced: 135000, rangeLow: 50000, rangeHigh: 165000 },
      nz: { average: 100000, entryLevel: 60000, experienced: 145000, rangeLow: 55000, rangeHigh: 175000 },
      in: { average: 1400000, entryLevel: 500000, experienced: 2800000, rangeLow: 400000, rangeHigh: 3800000 },
      sg: { average: 78000, entryLevel: 45000, experienced: 120000, rangeLow: 40000, rangeHigh: 150000 },
    },
  },
  {
    id: "doctor",
    slug: "doctor",
    name: "Doctor",
    shortName: "Doctor",
    description:
      "Doctors diagnose and treat medical conditions, performing examinations and prescribing treatments.",
    metaTitleTemplate: "Doctor Salary in {country} (2025) | Average Physician Pay",
    metaDescriptionTemplate:
      "What is the average doctor salary in {country}? Compare physician pay across specialties and experience levels, including tax information for doctors in {country}.",
    keywords: [
      "doctor salary",
      "physician pay",
      "medical doctor salary",
    ],
    relatedTools: ["salary-calculator", "tax-calculator"],
    salaries: {
      us: { average: 220000, entryLevel: 140000, experienced: 350000, rangeLow: 120000, rangeHigh: 400000 },
      uk: { average: 85000, entryLevel: 35000, experienced: 130000, rangeLow: 30000, rangeHigh: 155000 },
      au: { average: 180000, entryLevel: 90000, experienced: 300000, rangeLow: 75000, rangeHigh: 350000 },
      ca: { average: 200000, entryLevel: 100000, experienced: 350000, rangeLow: 85000, rangeHigh: 400000 },
      nz: { average: 150000, entryLevel: 75000, experienced: 250000, rangeLow: 65000, rangeHigh: 300000 },
      in: { average: 1200000, entryLevel: 500000, experienced: 3000000, rangeLow: 400000, rangeHigh: 5000000 },
      sg: { average: 130000, entryLevel: 55000, experienced: 250000, rangeLow: 45000, rangeHigh: 300000 },
    },
  },
  {
    id: "registered-nurse",
    slug: "registered-nurse",
    name: "Registered Nurse",
    shortName: "Registered Nurse",
    description:
      "Registered nurses provide patient care, administer medications, and coordinate treatment plans.",
    metaTitleTemplate: "Registered Nurse Salary in {country} (2025) | Average RN Pay",
    metaDescriptionTemplate:
      "What is the average registered nurse salary in {country}? Get the latest RN salary data, including hourly rates, shift differentials, and tax information for nurses in {country}.",
    keywords: [
      "registered nurse salary",
      "RN pay",
      "nursing salary",
    ],
    relatedTools: ["salary-calculator", "tax-calculator"],
    salaries: {
      us: { average: 82000, entryLevel: 55000, experienced: 110000, rangeLow: 48000, rangeHigh: 130000 },
      uk: { average: 35000, entryLevel: 26000, experienced: 48000, rangeLow: 24000, rangeHigh: 55000 },
      au: { average: 80000, entryLevel: 55000, experienced: 105000, rangeLow: 50000, rangeHigh: 120000 },
      ca: { average: 75000, entryLevel: 55000, experienced: 100000, rangeLow: 50000, rangeHigh: 115000 },
      nz: { average: 65000, entryLevel: 48000, experienced: 85000, rangeLow: 45000, rangeHigh: 95000 },
      in: { average: 400000, entryLevel: 200000, experienced: 800000, rangeLow: 150000, rangeHigh: 1000000 },
      sg: { average: 42000, entryLevel: 28000, experienced: 60000, rangeLow: 25000, rangeHigh: 70000 },
    },
  },
  {
    id: "teacher",
    slug: "teacher",
    name: "Teacher",
    shortName: "Teacher",
    description:
      "Teachers educate students in primary and secondary schools, developing lesson plans and assessing progress.",
    metaTitleTemplate: "Teacher Salary in {country} (2025) | Average Teacher Pay",
    metaDescriptionTemplate:
      "What is the average teacher salary in {country}? Compare primary and secondary teacher pay, including salary schedules and tax information for teachers in {country}.",
    keywords: [
      "teacher salary",
      "teacher pay",
      "teaching salary",
    ],
    relatedTools: ["salary-calculator", "tax-calculator"],
    salaries: {
      us: { average: 58000, entryLevel: 38000, experienced: 85000, rangeLow: 34000, rangeHigh: 95000 },
      uk: { average: 35000, entryLevel: 28000, experienced: 48000, rangeLow: 25000, rangeHigh: 52000 },
      au: { average: 75000, entryLevel: 55000, experienced: 100000, rangeLow: 50000, rangeHigh: 110000 },
      ca: { average: 65000, entryLevel: 45000, experienced: 90000, rangeLow: 40000, rangeHigh: 100000 },
      nz: { average: 58000, entryLevel: 45000, experienced: 78000, rangeLow: 42000, rangeHigh: 85000 },
      in: { average: 350000, entryLevel: 180000, experienced: 700000, rangeLow: 150000, rangeHigh: 900000 },
      sg: { average: 48000, entryLevel: 32000, experienced: 70000, rangeLow: 28000, rangeHigh: 85000 },
    },
  },
  {
    id: "accountant",
    slug: "accountant",
    name: "Accountant",
    shortName: "Accountant",
    description:
      "Accountants prepare financial records, ensure tax compliance, and provide financial advice.",
    metaTitleTemplate: "Accountant Salary in {country} (2025) | Average Accountant Pay",
    metaDescriptionTemplate:
      "What is the average accountant salary in {country}? Get CPA and chartered accountant salary data, including tax information and career outlook for accountants in {country}.",
    keywords: [
      "accountant salary",
      "CPA salary",
      "accounting pay",
    ],
    relatedTools: ["salary-calculator", "tax-calculator"],
    salaries: {
      us: { average: 75000, entryLevel: 48000, experienced: 120000, rangeLow: 42000, rangeHigh: 140000 },
      uk: { average: 40000, entryLevel: 24000, experienced: 65000, rangeLow: 20000, rangeHigh: 80000 },
      au: { average: 80000, entryLevel: 50000, experienced: 120000, rangeLow: 45000, rangeHigh: 140000 },
      ca: { average: 65000, entryLevel: 42000, experienced: 100000, rangeLow: 38000, rangeHigh: 115000 },
      nz: { average: 65000, entryLevel: 42000, experienced: 95000, rangeLow: 38000, rangeHigh: 110000 },
      in: { average: 500000, entryLevel: 250000, experienced: 1200000, rangeLow: 200000, rangeHigh: 1800000 },
      sg: { average: 48000, entryLevel: 28000, experienced: 80000, rangeLow: 24000, rangeHigh: 95000 },
    },
  },
  {
    id: "marketing-manager",
    slug: "marketing-manager",
    name: "Marketing Manager",
    shortName: "Marketing Manager",
    description:
      "Marketing managers develop and execute marketing strategies to promote products and services.",
    metaTitleTemplate: "Marketing Manager Salary in {country} (2025) | Average Pay",
    metaDescriptionTemplate:
      "What is the average marketing manager salary in {country}? Compare marketing leadership pay across industries, experience levels, and locations in {country}.",
    keywords: [
      "marketing manager salary",
      "marketing director pay",
      "marketing salary",
    ],
    relatedTools: ["salary-calculator", "tax-calculator"],
    salaries: {
      us: { average: 95000, entryLevel: 55000, experienced: 150000, rangeLow: 48000, rangeHigh: 180000 },
      uk: { average: 48000, entryLevel: 28000, experienced: 80000, rangeLow: 24000, rangeHigh: 100000 },
      au: { average: 95000, entryLevel: 55000, experienced: 140000, rangeLow: 48000, rangeHigh: 165000 },
      ca: { average: 75000, entryLevel: 45000, experienced: 115000, rangeLow: 40000, rangeHigh: 135000 },
      nz: { average: 80000, entryLevel: 50000, experienced: 115000, rangeLow: 45000, rangeHigh: 130000 },
      in: { average: 1200000, entryLevel: 500000, experienced: 2500000, rangeLow: 400000, rangeHigh: 3500000 },
      sg: { average: 65000, entryLevel: 38000, experienced: 100000, rangeLow: 32000, rangeHigh: 120000 },
    },
  },
  {
    id: "mechanical-engineer",
    slug: "mechanical-engineer",
    name: "Mechanical Engineer",
    shortName: "Mechanical Engineer",
    description:
      "Mechanical engineers design, develop, and test mechanical devices and systems.",
    metaTitleTemplate: "Mechanical Engineer Salary in {country} (2025) | Average Pay",
    metaDescriptionTemplate:
      "What is the average mechanical engineer salary in {country}? Compare engineering pay across experience levels and industries in {country}.",
    keywords: [
      "mechanical engineer salary",
      "mechanical engineering pay",
      "engineering salary",
    ],
    relatedTools: ["salary-calculator", "tax-calculator"],
    salaries: {
      us: { average: 85000, entryLevel: 55000, experienced: 130000, rangeLow: 48000, rangeHigh: 150000 },
      uk: { average: 38000, entryLevel: 25000, experienced: 60000, rangeLow: 22000, rangeHigh: 72000 },
      au: { average: 85000, entryLevel: 55000, experienced: 125000, rangeLow: 50000, rangeHigh: 145000 },
      ca: { average: 70000, entryLevel: 45000, experienced: 105000, rangeLow: 40000, rangeHigh: 120000 },
      nz: { average: 75000, entryLevel: 48000, experienced: 110000, rangeLow: 42000, rangeHigh: 130000 },
      in: { average: 600000, entryLevel: 300000, experienced: 1400000, rangeLow: 250000, rangeHigh: 1800000 },
      sg: { average: 48000, entryLevel: 30000, experienced: 75000, rangeLow: 26000, rangeHigh: 90000 },
    },
  },
  {
    id: "electrician",
    slug: "electrician",
    name: "Electrician",
    shortName: "Electrician",
    description:
      "Electricians install, maintain, and repair electrical systems in homes and businesses.",
    metaTitleTemplate: "Electrician Salary in {country} (2025) | Average Electrician Pay",
    metaDescriptionTemplate:
      "What is the average electrician salary in {country}? Get hourly rates, apprentice pay, and experienced electrician wages with tax information for {country}.",
    keywords: [
      "electrician salary",
      "electrician pay",
      "trades salary",
    ],
    relatedTools: ["salary-calculator", "tax-calculator"],
    salaries: {
      us: { average: 60000, entryLevel: 35000, experienced: 90000, rangeLow: 30000, rangeHigh: 105000 },
      uk: { average: 35000, entryLevel: 20000, experienced: 50000, rangeLow: 18000, rangeHigh: 58000 },
      au: { average: 85000, entryLevel: 50000, experienced: 120000, rangeLow: 45000, rangeHigh: 140000 },
      ca: { average: 65000, entryLevel: 38000, experienced: 95000, rangeLow: 32000, rangeHigh: 110000 },
      nz: { average: 70000, entryLevel: 40000, experienced: 100000, rangeLow: 35000, rangeHigh: 115000 },
      in: { average: 350000, entryLevel: 150000, experienced: 700000, rangeLow: 120000, rangeHigh: 900000 },
      sg: { average: 36000, entryLevel: 20000, experienced: 55000, rangeLow: 18000, rangeHigh: 65000 },
    },
  },
  {
    id: "construction-worker",
    slug: "construction-worker",
    name: "Construction Worker",
    shortName: "Construction Worker",
    description:
      "Construction workers perform physical labor on construction sites, including building and renovation projects.",
    metaTitleTemplate: "Construction Worker Salary in {country} (2025) | Average Pay",
    metaDescriptionTemplate:
      "What is the average construction worker salary in {country}? Get hourly wages, overtime rates, and tax information for construction workers in {country}.",
    keywords: [
      "construction worker salary",
      "construction pay",
      "laborer salary",
    ],
    relatedTools: ["salary-calculator", "tax-calculator"],
    salaries: {
      us: { average: 45000, entryLevel: 28000, experienced: 70000, rangeLow: 24000, rangeHigh: 85000 },
      uk: { average: 28000, entryLevel: 18000, experienced: 42000, rangeLow: 16000, rangeHigh: 48000 },
      au: { average: 65000, entryLevel: 40000, experienced: 95000, rangeLow: 35000, rangeHigh: 110000 },
      ca: { average: 50000, entryLevel: 30000, experienced: 75000, rangeLow: 28000, rangeHigh: 85000 },
      nz: { average: 55000, entryLevel: 35000, experienced: 80000, rangeLow: 30000, rangeHigh: 90000 },
      in: { average: 250000, entryLevel: 120000, experienced: 500000, rangeLow: 100000, rangeHigh: 600000 },
      sg: { average: 30000, entryLevel: 18000, experienced: 48000, rangeLow: 15000, rangeHigh: 55000 },
    },
    },
  {
    id: "product-manager",
    slug: "product-manager",
    name: "Product Manager",
    shortName: "Product Manager",
    description:
      "Product managers define product strategy, prioritize features, and coordinate cross-functional teams to deliver successful products.",
    metaTitleTemplate: "Product Manager Salary in {country} (2026) | Average Pay",
    metaDescriptionTemplate:
      "What is the average product manager salary in {country}? Get the latest product management salary data, compare compensation across experience levels in {country}.",
    keywords: [
      "product manager salary",
      "product management pay",
      "PM salary",
    ],
    relatedTools: ["salary-calculator", "tax-calculator"],
    salaries: {
      us: { average: 110000, entryLevel: 70000, experienced: 165000, rangeLow: 60000, rangeHigh: 200000 },
      uk: { average: 55000, entryLevel: 32000, experienced: 85000, rangeLow: 28000, rangeHigh: 105000 },
      au: { average: 120000, entryLevel: 75000, experienced: 170000, rangeLow: 65000, rangeHigh: 200000 },
      ca: { average: 85000, entryLevel: 55000, experienced: 130000, rangeLow: 48000, rangeHigh: 155000 },
      nz: { average: 95000, entryLevel: 60000, experienced: 135000, rangeLow: 55000, rangeHigh: 160000 },
      in: { average: 2000000, entryLevel: 800000, experienced: 3500000, rangeLow: 600000, rangeHigh: 4500000 },
      sg: { average: 75000, entryLevel: 45000, experienced: 115000, rangeLow: 38000, rangeHigh: 140000 },
    },
  },
]

export function getProfession(slug: string): ProfessionData | undefined {
  return professions.find((p) => p.slug === slug)
}

export function getProfessionSalary(
  profession: ProfessionData,
  countrySlug: string
): ProfessionSalaryData | undefined {
  return profession.salaries[countrySlug]
}
