export interface ProfessionPageContent {
  sections: { heading: string; body: string }[]
  faqs: { question: string; answer: string }[]
}

type ProfessionContentMap = Record<string, ProfessionPageContent>

function generateContent(
  profession: string,
  professionPlural: string,
  localeName: string,
  localeSlug: string,
  currencySymbol: string,
  averageSalary: number,
): ProfessionPageContent {
  const salaryStr = `${currencySymbol}${averageSalary.toLocaleString()}`
  const isUS = localeSlug === "us"
  const isUK = localeSlug === "uk"
  const isAU = localeSlug === "au"
  const isCA = localeSlug === "ca"
  const isNZ = localeSlug === "nz"
  const isIN = localeSlug === "in"
  const isSG = localeSlug === "sg"

  const taxYear = isUS ? "2025-2026" : isUK ? "2025-2026" : isAU ? "2025-2026" : isCA ? "2025" : isNZ ? "2025-2026" : isIN ? "2025-2026" : "2025"
  const taxSystem = isUS ? "federal and state income tax" : isUK ? "income tax and National Insurance" : isAU ? "income tax and Medicare Levy" : isCA ? "federal and provincial income tax" : isNZ ? "income tax" : isIN ? "income tax under the new tax regime" : "income tax"
  const socialDesc = isUS ? "Social Security and Medicare (FICA)" : isUK ? "National Insurance" : isAU ? "Medicare Levy" : isCA ? "Canada Pension Plan and Employment Insurance" : isNZ ? "ACC levy" : isIN ? "professional tax" : "CPF contributions"

  const taxRateNote = isUS ? "The US has a progressive federal tax system with rates from 10% to 37%, plus state income tax ranging from 0% (Texas, Florida) to 13.3% (California)." :
    isUK ? "The UK has a progressive tax system with rates of 0% (Personal Allowance), 20% (basic rate), 40% (higher rate), and 45% (additional rate), plus National Insurance at 8-2%." :
    isAU ? "Australia has a progressive tax system with rates from 0% (tax-free threshold) to 45%, plus a 2% Medicare Levy." :
    isCA ? "Canada has a progressive tax system with federal rates from 15% to 33%, plus provincial income tax varying by province." :
    isNZ ? "New Zealand has a progressive tax system from 10.5% to 39%, with no separate social security tax." :
    isIN ? "India has a progressive tax system with rates from 0% to 30% under both old and new tax regimes, plus a 4% health and education cess." :
    "Singapore has a progressive tax system with rates from 0% to 24%, with no capital gains tax."

  const demandNote = isUS ? `${professionPlural} are in high demand across the US, particularly in tech hubs like San Francisco, Seattle, New York, and Austin. ` :
    isUK ? `${professionPlural} are in demand across the UK, particularly in London, Manchester, and Cambridge. ` :
    isAU ? `${professionPlural} are in high demand across Australia, particularly in Sydney, Melbourne, and Brisbane. ` :
    isCA ? `${professionPlural} are in demand across Canada, particularly in Toronto, Vancouver, and Montreal. ` :
    isNZ ? `${professionPlural} are in demand across New Zealand, particularly in Auckland, Wellington, and Christchurch. ` :
    isIN ? `${professionPlural} are in high demand across India, particularly in Bangalore, Mumbai, Hyderabad, and Delhi-NCR. ` :
    `${professionPlural} are in demand across Singapore. `

  return {
    sections: [
      {
        heading: `How Much Does a ${profession} Make in ${localeName}?`,
        body: `The average ${profession.toLowerCase()} salary in ${localeName} is ${salaryStr} per year. Entry-level positions typically start lower, while experienced ${professionPlural.toLowerCase()} with specialized skills can earn significantly more. Salary ranges vary based on factors including experience level, education, industry, company size, and geographic location within ${localeName}.`,
      },
      {
        heading: `${profession} Salary by Experience Level in ${localeName}`,
        body: `Experience level is one of the biggest factors affecting ${profession.toLowerCase()} salaries in ${localeName}. Entry-level ${professionPlural.toLowerCase()} (0-2 years) can expect lower starting salaries, while mid-career professionals (3-7 years) see significant increases. Senior ${professionPlural.toLowerCase()} (8+ years) and those in leadership roles command the highest compensation packages, often including bonuses, stock options, and other benefits.`,
      },
      {
        heading: `Tax Implications for ${localeName} ${professionPlural}`,
        body: `${professionPlural} in ${localeName} pay ${taxSystem}. Your take-home pay depends on your total income, tax bracket, and deductions. The social security system (${socialDesc}) is also deducted from your salary. Use our salary calculator for ${localeName} to see your exact take-home pay after all deductions. ${taxRateNote}`,
      },
      {
        heading: `Cost of Living for ${professionPlural} in ${localeName}`,
        body: `${demandNote}However, the cost of living varies significantly across ${localeName}. Housing, transportation, and healthcare costs can consume a large portion of your salary. Consider using our cost of living resources for ${localeName} to understand how far your salary will go in different areas.`,
      },
      {
        heading: `Career Outlook for ${professionPlural} in ${localeName}`,
        body: `The job market for ${professionPlural.toLowerCase()} in ${localeName} remains competitive with strong demand across industries. ${professionPlural} with up-to-date skills and relevant certifications have the best job prospects. Remote work opportunities have also expanded the job market, allowing ${professionPlural.toLowerCase()} to work for companies based in higher-paying regions while living in lower-cost areas.`,
      },
    ],
    faqs: [
      {
        question: `What is the starting salary for a ${profession.toLowerCase()} in ${localeName}?`,
        answer: `Entry-level ${professionPlural.toLowerCase()} in ${localeName} can expect a starting salary ranging from the entry-level figures shown above, depending on qualifications, company size, and location.`,
      },
      {
        question: `How does the ${profession.toLowerCase()} salary in ${localeName} compare to the national average?`,
        answer: `${professionPlural} in ${localeName} typically earn above the national average salary, reflecting the specialized skills and training required for the role.`,
      },
      {
        question: `What factors affect ${profession.toLowerCase()} salaries in ${localeName}?`,
        answer: `Key factors include years of experience, education level, industry sector, company size, geographic location, and specialized skills or certifications.`,
      },
      {
        question: `Do ${professionPlural.toLowerCase()} in ${localeName} get bonuses?`,
        answer: `Many ${professionPlural.toLowerCase()} in ${localeName} receive performance bonuses, profit sharing, or commission as part of their total compensation package.`,
      },
    ],
  }
}

export const professionsContent: Record<string, ProfessionContentMap> = {
  us: {
    "software-engineer": generateContent("Software Engineer", "Software Engineers", "United States", "us", "$", 120000),
    "data-scientist": generateContent("Data Scientist", "Data Scientists", "United States", "us", "$", 125000),
    "product-manager": generateContent("Product Manager", "Product Managers", "United States", "us", "$", 110000),
    "doctor": generateContent("Doctor", "Doctors", "United States", "us", "$", 220000),
    "registered-nurse": generateContent("Registered Nurse", "Registered Nurses", "United States", "us", "$", 82000),
    "teacher": generateContent("Teacher", "Teachers", "United States", "us", "$", 58000),
    "accountant": generateContent("Accountant", "Accountants", "United States", "us", "$", 75000),
    "marketing-manager": generateContent("Marketing Manager", "Marketing Managers", "United States", "us", "$", 95000),
    "mechanical-engineer": generateContent("Mechanical Engineer", "Mechanical Engineers", "United States", "us", "$", 85000),
    "electrician": generateContent("Electrician", "Electricians", "United States", "us", "$", 60000),
    "construction-worker": generateContent("Construction Worker", "Construction Workers", "United States", "us", "$", 45000),
  },
  uk: {
    "software-engineer": generateContent("Software Engineer", "Software Engineers", "United Kingdom", "uk", "\u00a3", 55000),
    "data-scientist": generateContent("Data Scientist", "Data Scientists", "United Kingdom", "uk", "\u00a3", 58000),
    "product-manager": generateContent("Product Manager", "Product Managers", "United Kingdom", "uk", "\u00a3", 55000),
    "doctor": generateContent("Doctor", "Doctors", "United Kingdom", "uk", "\u00a3", 85000),
    "registered-nurse": generateContent("Registered Nurse", "Registered Nurses", "United Kingdom", "uk", "\u00a3", 35000),
    "teacher": generateContent("Teacher", "Teachers", "United Kingdom", "uk", "\u00a3", 35000),
    "accountant": generateContent("Accountant", "Accountants", "United Kingdom", "uk", "\u00a3", 40000),
    "marketing-manager": generateContent("Marketing Manager", "Marketing Managers", "United Kingdom", "uk", "\u00a3", 48000),
    "mechanical-engineer": generateContent("Mechanical Engineer", "Mechanical Engineers", "United Kingdom", "uk", "\u00a3", 38000),
    "electrician": generateContent("Electrician", "Electricians", "United Kingdom", "uk", "\u00a3", 35000),
    "construction-worker": generateContent("Construction Worker", "Construction Workers", "United Kingdom", "uk", "\u00a3", 28000),
  },
  au: {
    "software-engineer": generateContent("Software Engineer", "Software Engineers", "Australia", "au", "A$", 110000),
    "data-scientist": generateContent("Data Scientist", "Data Scientists", "Australia", "au", "A$", 115000),
    "product-manager": generateContent("Product Manager", "Product Managers", "Australia", "au", "A$", 120000),
    "doctor": generateContent("Doctor", "Doctors", "Australia", "au", "A$", 180000),
    "registered-nurse": generateContent("Registered Nurse", "Registered Nurses", "Australia", "au", "A$", 80000),
    "teacher": generateContent("Teacher", "Teachers", "Australia", "au", "A$", 75000),
    "accountant": generateContent("Accountant", "Accountants", "Australia", "au", "A$", 80000),
    "marketing-manager": generateContent("Marketing Manager", "Marketing Managers", "Australia", "au", "A$", 95000),
    "mechanical-engineer": generateContent("Mechanical Engineer", "Mechanical Engineers", "Australia", "au", "A$", 85000),
    "electrician": generateContent("Electrician", "Electricians", "Australia", "au", "A$", 85000),
    "construction-worker": generateContent("Construction Worker", "Construction Workers", "Australia", "au", "A$", 65000),
  },
  ca: {
    "software-engineer": generateContent("Software Engineer", "Software Engineers", "Canada", "ca", "C$", 85000),
    "data-scientist": generateContent("Data Scientist", "Data Scientists", "Canada", "ca", "C$", 88000),
    "product-manager": generateContent("Product Manager", "Product Managers", "Canada", "ca", "C$", 85000),
    "doctor": generateContent("Doctor", "Doctors", "Canada", "ca", "C$", 200000),
    "registered-nurse": generateContent("Registered Nurse", "Registered Nurses", "Canada", "ca", "C$", 75000),
    "teacher": generateContent("Teacher", "Teachers", "Canada", "ca", "C$", 65000),
    "accountant": generateContent("Accountant", "Accountants", "Canada", "ca", "C$", 65000),
    "marketing-manager": generateContent("Marketing Manager", "Marketing Managers", "Canada", "ca", "C$", 75000),
    "mechanical-engineer": generateContent("Mechanical Engineer", "Mechanical Engineers", "Canada", "ca", "C$", 70000),
    "electrician": generateContent("Electrician", "Electricians", "Canada", "ca", "C$", 65000),
    "construction-worker": generateContent("Construction Worker", "Construction Workers", "Canada", "ca", "C$", 50000),
  },
  nz: {
    "software-engineer": generateContent("Software Engineer", "Software Engineers", "New Zealand", "nz", "NZ$", 95000),
    "data-scientist": generateContent("Data Scientist", "Data Scientists", "New Zealand", "nz", "NZ$", 100000),
    "product-manager": generateContent("Product Manager", "Product Managers", "New Zealand", "nz", "NZ$", 95000),
    "doctor": generateContent("Doctor", "Doctors", "New Zealand", "nz", "NZ$", 150000),
    "registered-nurse": generateContent("Registered Nurse", "Registered Nurses", "New Zealand", "nz", "NZ$", 65000),
    "teacher": generateContent("Teacher", "Teachers", "New Zealand", "nz", "NZ$", 58000),
    "accountant": generateContent("Accountant", "Accountants", "New Zealand", "nz", "NZ$", 65000),
    "marketing-manager": generateContent("Marketing Manager", "Marketing Managers", "New Zealand", "nz", "NZ$", 80000),
    "mechanical-engineer": generateContent("Mechanical Engineer", "Mechanical Engineers", "New Zealand", "nz", "NZ$", 75000),
    "electrician": generateContent("Electrician", "Electricians", "New Zealand", "nz", "NZ$", 70000),
    "construction-worker": generateContent("Construction Worker", "Construction Workers", "New Zealand", "nz", "NZ$", 55000),
  },
  in: {
    "software-engineer": generateContent("Software Engineer", "Software Engineers", "India", "in", "\u20b9", 1200000),
    "data-scientist": generateContent("Data Scientist", "Data Scientists", "India", "in", "\u20b9", 1400000),
    "product-manager": generateContent("Product Manager", "Product Managers", "India", "in", "\u20b9", 2000000),
    "doctor": generateContent("Doctor", "Doctors", "India", "in", "\u20b9", 1200000),
    "registered-nurse": generateContent("Registered Nurse", "Registered Nurses", "India", "in", "\u20b9", 400000),
    "teacher": generateContent("Teacher", "Teachers", "India", "in", "\u20b9", 350000),
    "accountant": generateContent("Accountant", "Accountants", "India", "in", "\u20b9", 500000),
    "marketing-manager": generateContent("Marketing Manager", "Marketing Managers", "India", "in", "\u20b9", 1200000),
    "mechanical-engineer": generateContent("Mechanical Engineer", "Mechanical Engineers", "India", "in", "\u20b9", 600000),
    "electrician": generateContent("Electrician", "Electricians", "India", "in", "\u20b9", 350000),
    "construction-worker": generateContent("Construction Worker", "Construction Workers", "India", "in", "\u20b9", 250000),
  },
  sg: {
    "software-engineer": generateContent("Software Engineer", "Software Engineers", "Singapore", "sg", "S$", 72000),
    "data-scientist": generateContent("Data Scientist", "Data Scientists", "Singapore", "sg", "S$", 78000),
    "product-manager": generateContent("Product Manager", "Product Managers", "Singapore", "sg", "S$", 75000),
    "doctor": generateContent("Doctor", "Doctors", "Singapore", "sg", "S$", 130000),
    "registered-nurse": generateContent("Registered Nurse", "Registered Nurses", "Singapore", "sg", "S$", 42000),
    "teacher": generateContent("Teacher", "Teachers", "Singapore", "sg", "S$", 48000),
    "accountant": generateContent("Accountant", "Accountants", "Singapore", "sg", "S$", 48000),
    "marketing-manager": generateContent("Marketing Manager", "Marketing Managers", "Singapore", "sg", "S$", 65000),
    "mechanical-engineer": generateContent("Mechanical Engineer", "Mechanical Engineers", "Singapore", "sg", "S$", 48000),
    "electrician": generateContent("Electrician", "Electricians", "Singapore", "sg", "S$", 36000),
    "construction-worker": generateContent("Construction Worker", "Construction Workers", "Singapore", "sg", "S$", 30000),
  },
}
