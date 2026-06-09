import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { locales, getLocale } from "@/lib/seo/locales"
import { buildMetadata } from "@/lib/seo/metadata"
import { tools } from "@/lib/content/templates"
import { guides } from "@/lib/content/guide-templates"
import { stateDataSets } from "@/lib/content/state-data"
import { costOfLivingData } from "@/lib/content/state-expansion"
import { glossaryEntries } from "@/lib/content/glossary"
import { getLatestUpdates } from "@/lib/content/updates"
import { getLastUpdated } from "@/lib/seo/freshness"
import { buildLocalBusinessJsonLd, buildOrganizationJsonLd } from "@/lib/seo/json-ld"
import { getAllCountries } from "@/lib/content/country-registry"

type Props = { params: Promise<{ locale: string }> }

const COUNTRY_CONTENT: Record<string, {
  heroH1: string
  heroDesc: string
  snapshotCurrency: string
  snapshotTaxAuthority: string
  snapshotTopSectors: string
  snapshotTopRegion: string
  snapshotTopProfession: string
  snapshotGlobalPosition: string
  snapshotDesc?: string[]
  keyTakeaways?: { title: string; desc: string }[]
  featuredInsights: { title: string; desc: string; href: string }[]
  professionGroups: { category: string; items: { label: string; href: string }[] }[]
  salaryLandscape?: { text: string[]; factors: string[]; sectorsIntro: string }
  relocationText: string
  researchTopics?: string[]
  stateDestinations?: string[]
  govSources?: { name: string; desc: string }[]
  trustItems?: { title: string; desc: string }[]
  faqQs: { q: string; a: string }[]
}> = {
  us: {
    heroH1: "United States Salary, Tax and Cost of Living Intelligence",
    heroDesc: "Research salaries, estimate take-home pay, compare states and understand the real cost of living across the United States. Olikit combines salary benchmarks, tax insights and affordability research to help professionals, job seekers and families make better financial decisions. Whether you are evaluating a career move, comparing job offers or researching compensation trends, our calculators, rankings and guides provide transparent insights built from publicly available data and documented methodologies.",
    snapshotCurrency: "United States Dollar (USD)",
    snapshotTaxAuthority: "Internal Revenue Service (IRS)",
    snapshotTopSectors: "Technology, Healthcare, Finance, Engineering",
    snapshotTopRegion: "California, Washington, Massachusetts, New York",
    snapshotTopProfession: "Software Engineer",
    snapshotGlobalPosition: "One of the world's highest-paying labor markets",
    snapshotDesc: [
      "The United States remains one of the world's largest and most competitive labor markets. It is home to leading technology companies, global financial institutions, major healthcare systems and some of the highest-paying professional occupations globally.",
      "Compensation levels can vary dramatically depending on industry, experience, location and tax jurisdiction. A software engineer in California, a financial analyst in New York and a nurse in Texas may all face very different salary ranges, tax obligations and living costs.",
      "Understanding salary alone is not enough. The real value of income depends on housing costs, taxes, healthcare expenses and purchasing power. Olikit helps you evaluate all of these factors together.",
    ],
    keyTakeaways: [
      { title: "What Makes the United States Unique?", desc: "The United States consistently ranks among the highest-paying countries for skilled professionals, particularly in technology, healthcare and finance." },
      { title: "State Differences Matter", desc: "Two workers earning the same salary may experience very different take-home outcomes depending on state taxes, housing costs and living expenses." },
      { title: "Technology Drives Compensation", desc: "Technology remains one of the strongest compensation sectors in the United States, with software engineers, product managers and data professionals frequently earning above national averages." },
      { title: "Healthcare Remains a Major Employer", desc: "Healthcare occupations continue to experience strong demand and competitive salaries across many regions." },
    ],
    featuredInsights: [
      { title: "Highest Paying States", desc: "Salary levels vary significantly across the United States. States with strong technology, healthcare and financial sectors often report higher average compensation than the national average. Explore how states compare and identify regions that offer stronger earning potential.", href: "/us/best-states-for-salary" },
      { title: "Software Engineer Salary Trends", desc: "Software engineering remains one of the most researched professions in the United States. Compensation depends on experience level, industry, company size and geographic location. Technology hubs such as California, Washington and New York often command higher salaries, though housing costs may offset part of the advantage.", href: "/us/salary/software-engineer" },
      { title: "State Income Tax Differences", desc: "The United States operates under a combination of federal and state tax systems. Some states levy no state income tax, while others impose significant additional tax obligations. Comparing take-home pay after taxes often reveals meaningful differences between states.", href: "/us/tools/tax-calculator" },
      { title: "Cost of Living Across America", desc: "Housing costs, transportation expenses and everyday living costs vary widely. A salary that provides a comfortable lifestyle in one state may offer substantially less purchasing power elsewhere. Cost-of-living analysis helps provide a clearer picture of real earning potential.", href: "/us/cost-of-living/california" },
    ],
    professionGroups: [
      { category: "Technology", items: [
        { label: "Software Engineer Salary", href: "/us/salary/software-engineer" },
        { label: "Data Scientist Salary", href: "/us/salary/data-scientist" },
        { label: "Product Manager Salary", href: "/us/tools/salary-calculator" },
        { label: "Cybersecurity Analyst Salary", href: "/us/tools/salary-calculator" },
      ]},
      { category: "Healthcare", items: [
        { label: "Doctor Salary", href: "/us/salary/doctor" },
        { label: "Registered Nurse Salary", href: "/us/salary/registered-nurse" },
        { label: "Pharmacist Salary", href: "/us/tools/salary-calculator" },
      ]},
      { category: "Finance", items: [
        { label: "Accountant Salary", href: "/us/salary/accountant" },
        { label: "Financial Analyst Salary", href: "/us/tools/salary-calculator" },
        { label: "Auditor Salary", href: "/us/tools/salary-calculator" },
      ]},
      { category: "Engineering", items: [
        { label: "Mechanical Engineer Salary", href: "/us/salary/mechanical-engineer" },
        { label: "Civil Engineer Salary", href: "/us/tools/salary-calculator" },
        { label: "Electrical Engineer Salary", href: "/us/tools/salary-calculator" },
      ]},
      { category: "Business", items: [
        { label: "Business Analyst Salary", href: "/us/tools/salary-calculator" },
        { label: "Project Manager Salary", href: "/us/tools/salary-calculator" },
        { label: "Human Resources Manager Salary", href: "/us/tools/salary-calculator" },
      ]},
    ],
    salaryLandscape: {
      text: [
        "The United States labor market is highly diverse. Compensation varies based on education, experience, industry, region and demand for skills.",
        "Technology and finance roles often provide some of the highest salary levels, while healthcare occupations offer a combination of strong demand and long-term career stability. Workers evaluating opportunities should consider both salary and purchasing power when comparing jobs or relocation options.",
      ],
      factors: ["Education", "Experience", "Industry", "Region", "Demand for skills"],
      sectorsIntro: "Technology and finance roles often provide some of the highest salary levels, while healthcare occupations offer a combination of strong demand and long-term career stability.",
    },
    relocationText: "The United States remains a leading destination for professionals seeking career growth and higher compensation. Before relocating, compare salary opportunities, federal and state taxes, housing costs, healthcare expenses and purchasing power. Olikit provides comparison tools to evaluate the United States alongside Canada, the United Kingdom, Australia, Singapore and New Zealand.",
    researchTopics: [
      "Highest Paying Jobs in the United States",
      "Highest Paying States",
      "Salary Rankings by Profession",
      "Cost of Living Rankings",
      "Purchasing Power Rankings",
      "Tax Burden Comparisons",
    ],
    stateDestinations: ["California", "Texas", "Florida", "New York", "Washington", "Massachusetts", "Illinois", "Colorado"],
    govSources: [
      { name: "Internal Revenue Service (IRS)", desc: "Federal tax brackets and tax guidance" },
      { name: "Bureau of Labor Statistics (BLS)", desc: "Employment and wage data" },
      { name: "U.S. Census Bureau", desc: "Demographic and economic statistics" },
      { name: "Federal Reserve", desc: "Economic research and data" },
      { name: "Bureau of Economic Analysis (BEA)", desc: "GDP and regional economic data" },
    ],
    trustItems: [
      { title: "Transparent Methodology", desc: "Calculation assumptions and methodologies are documented and publicly available." },
      { title: "Government-Sourced Data", desc: "Salary, tax and economic information is derived from official public sources whenever possible." },
      { title: "Independent Research", desc: "Research and rankings are produced using transparent criteria and are not influenced by advertisers." },
      { title: "Regular Updates", desc: "Tax rates, salary benchmarks and supporting methodologies are reviewed regularly." },
    ],
    faqQs: [
      { q: "What is the average salary in the United States?", a: "Average salaries vary significantly by profession, industry and location. Technology, healthcare and finance occupations frequently report above-average compensation." },
      { q: "Which professions earn the highest salaries?", a: "Doctors, specialized healthcare professionals, software engineers and senior finance professionals are among the highest-paid occupations." },
      { q: "Which states pay the highest salaries?", a: "California, Washington, Massachusetts and New York frequently rank among the strongest states for compensation." },
      { q: "How much income tax do workers pay?", a: "Income tax depends on federal tax brackets, filing status and state tax rules." },
      { q: "How does the United States compare internationally?", a: "The United States generally ranks among the highest-paying countries for skilled professionals, though taxes and living costs should be considered alongside salary." },
      { q: "What sources does Olikit use?", a: "Olikit uses government publications, labor market data and official tax resources." },
      { q: "How often is the information updated?", a: "Salary benchmarks, tax information and methodologies are reviewed regularly and updated when significant changes occur." },
    ],
  },
  uk: {
    heroH1: "United Kingdom Salary, Tax and Cost-of-Living Intelligence",
    heroDesc: "Research salaries, compare regions and understand taxes and living costs across the United Kingdom using transparent and government-backed data. Olikit provides salary benchmarks, tax insights and affordability research for professionals evaluating career opportunities across England, Scotland, Wales and Northern Ireland.",
    snapshotCurrency: "Pound Sterling (GBP \u00a3)",
    snapshotTaxAuthority: "HM Revenue & Customs (HMRC)",
    snapshotTopSectors: "Finance, Technology, Professional Services",
    snapshotTopRegion: "London",
    snapshotTopProfession: "Software Engineer",
    snapshotGlobalPosition: "Major European financial and technology hub",
    featuredInsights: [
      { title: "London Salary Premium", desc: "London consistently offers higher compensation than other UK regions, particularly in finance, technology and professional services. Compare London salaries against the rest of the UK to understand regional differences.", href: "/uk/salary" },
      { title: "Finance and Technology Compensation", desc: "The United Kingdom is a global hub for financial services and technology. Explore salary benchmarks across investment banking, fintech, software engineering and consulting.", href: "/uk/salary/software-engineer" },
      { title: "Tax and National Insurance", desc: "UK workers pay income tax and National Insurance contributions. Understanding the tax system helps evaluate take-home pay across different salary levels.", href: "/uk/tools/tax-calculator" },
      { title: "Regional Cost Differences", desc: "Housing costs, transportation and living expenses vary significantly between London and other UK regions. Compare affordability across major UK cities.", href: "/uk/guides" },
    ],
    professionGroups: [
      { category: "Technology", items: [
        { label: "Software Engineer Salary", href: "/uk/salary/software-engineer" },
        { label: "Data Scientist Salary", href: "/uk/salary/data-scientist" },
        { label: "Product Manager Salary", href: "/uk/tools/salary-calculator" },
      ]},
      { category: "Healthcare", items: [
        { label: "Doctor Salary", href: "/uk/salary/doctor" },
        { label: "Registered Nurse Salary", href: "/uk/salary/registered-nurse" },
      ]},
      { category: "Finance", items: [
        { label: "Accountant Salary", href: "/uk/salary/accountant" },
        { label: "Financial Analyst Salary", href: "/uk/tools/salary-calculator" },
      ]},
      { category: "Engineering", items: [
        { label: "Mechanical Engineer Salary", href: "/uk/salary/mechanical-engineer" },
      ]},
    ],
    relocationText: "The United Kingdom remains a leading destination for professionals in finance, technology and professional services. Before relocating, compare salary opportunities, taxes, housing costs and purchasing power. Olikit provides comparison tools to evaluate the United Kingdom alongside the United States, Australia, Canada and Singapore.",
    faqQs: [
      { q: "What is the average salary in the United Kingdom?", a: "Average salaries vary by profession, industry and region. Finance and technology occupations generally offer the highest compensation." },
      { q: "Which professions earn the highest salaries?", a: "Finance professionals, software engineers and senior healthcare roles are among the highest-paid occupations." },
      { q: "Which regions offer the highest salaries?", a: "London consistently offers the highest salaries, followed by the South East and other major cities." },
      { q: "How much income tax do workers pay?", a: "Income tax is deducted through PAYE. Rates depend on earnings, with a personal allowance and progressive tax bands." },
      { q: "How does the United Kingdom compare internationally?", a: "The UK offers competitive salaries in finance and technology, though compensation in some sectors may be lower than the United States." },
      { q: "What sources does Olikit use?", a: "Olikit uses HMRC publications, Office for National Statistics data and official government resources." },
      { q: "How often is the information updated?", a: "Salary benchmarks, tax information and methodologies are reviewed regularly and updated when significant changes occur." },
    ],
  },
  au: {
    heroH1: "Australia Salary, Tax and Cost-of-Living Intelligence",
    heroDesc: "Research salaries, taxes and affordability across Australia using transparent methodologies and publicly available government data. Olikit provides salary benchmarks, tax insights and cost-of-living analysis for professionals across New South Wales, Victoria, Queensland and all Australian states and territories.",
    snapshotCurrency: "Australian Dollar (A$)",
    snapshotTaxAuthority: "Australian Taxation Office (ATO)",
    snapshotTopSectors: "Mining, Technology, Healthcare",
    snapshotTopRegion: "New South Wales",
    snapshotTopProfession: "Software Engineer",
    snapshotGlobalPosition: "High-income economy with strong purchasing power",
    featuredInsights: [
      { title: "Highest Paying States", desc: "Salary levels vary across Australian states. New South Wales, Victoria and Western Australia generally report higher average compensation. Explore how states compare.", href: "/au/best-states-for-salary" },
      { title: "Mining and Engineering Salaries", desc: "Australia's mining and resources sector offers some of the highest compensation levels, particularly in Western Australia and Queensland.", href: "/au/salary/mechanical-engineer" },
      { title: "Technology Salary Benchmarks", desc: "Australia's technology sector continues to grow, with competitive salaries for software engineers, data scientists and IT professionals.", href: "/au/salary/software-engineer" },
      { title: "Cost of Living Across Major Cities", desc: "Housing costs and living expenses vary significantly between Sydney, Melbourne, Brisbane, Perth and Adelaide. Compare affordability across cities.", href: "/au/guides" },
    ],
    professionGroups: [
      { category: "Technology", items: [
        { label: "Software Engineer Salary", href: "/au/salary/software-engineer" },
        { label: "Data Scientist Salary", href: "/au/salary/data-scientist" },
      ]},
      { category: "Healthcare", items: [
        { label: "Doctor Salary", href: "/au/salary/doctor" },
        { label: "Registered Nurse Salary", href: "/au/salary/registered-nurse" },
      ]},
      { category: "Finance", items: [
        { label: "Accountant Salary", href: "/au/salary/accountant" },
      ]},
      { category: "Engineering", items: [
        { label: "Mechanical Engineer Salary", href: "/au/salary/mechanical-engineer" },
      ]},
    ],
    relocationText: "Australia continues to attract skilled professionals with competitive salaries and high quality of life. Compare Australian salaries and purchasing power against Canada, New Zealand, the United Kingdom and Singapore.",
    faqQs: [
      { q: "What is the average salary in Australia?", a: "Average salaries vary by profession and state. Mining, technology and healthcare sectors generally offer above-average compensation." },
      { q: "Which professions earn the highest salaries?", a: "Mining engineers, software engineers and medical professionals are among the highest-paid occupations." },
      { q: "Which states offer the highest salaries?", a: "New South Wales, Victoria and Western Australia generally report the strongest compensation levels." },
      { q: "How much income tax do workers pay?", a: "Australia uses a progressive tax system with tax-free threshold and Medicare Levy. Rates depend on annual earnings." },
      { q: "How does Australia compare internationally?", a: "Australia offers competitive salaries with strong purchasing power compared to many other developed economies." },
      { q: "What sources does Olikit use?", a: "Olikit uses ATO publications, Australian Bureau of Statistics data and official government resources." },
      { q: "How often is the information updated?", a: "Salary benchmarks, tax information and methodologies are reviewed regularly and updated when significant changes occur." },
    ],
  },
  ca: {
    heroH1: "Canada Salary, Tax and Cost-of-Living Intelligence",
    heroDesc: "Explore compensation benchmarks, tax insights and affordability research across Canada using transparent methodologies and government-sourced data. Olikit provides salary analysis, tax comparisons and cost-of-living data for professionals across all provinces and territories.",
    snapshotCurrency: "Canadian Dollar (C$)",
    snapshotTaxAuthority: "Canada Revenue Agency (CRA)",
    snapshotTopSectors: "Energy, Technology, Finance",
    snapshotTopRegion: "Alberta",
    snapshotTopProfession: "Software Engineer",
    snapshotGlobalPosition: "Leading destination for skilled professionals",
    featuredInsights: [
      { title: "Highest Paying Provinces", desc: "Compensation levels vary across Canada. Alberta, Ontario and British Columbia generally offer the highest salaries. Explore how provinces compare.", href: "/ca/best-states-for-salary" },
      { title: "Technology Salaries", desc: "Canada's technology sector is growing rapidly, with strong demand for software engineers, data scientists and IT professionals across Toronto, Vancouver and Montreal.", href: "/ca/salary/software-engineer" },
      { title: "Federal and Provincial Tax Burdens", desc: "Canada has both federal and provincial income taxes. Understanding how tax brackets differ by province is essential for estimating take-home pay.", href: "/ca/tools/tax-calculator" },
      { title: "Housing and Cost-of-Living Trends", desc: "Housing costs vary significantly across Canadian cities. Vancouver and Toronto are among the most expensive, while other regions offer more affordable options.", href: "/ca/guides" },
    ],
    professionGroups: [
      { category: "Technology", items: [
        { label: "Software Engineer Salary", href: "/ca/salary/software-engineer" },
        { label: "Data Scientist Salary", href: "/ca/salary/data-scientist" },
      ]},
      { category: "Healthcare", items: [
        { label: "Doctor Salary", href: "/ca/salary/doctor" },
        { label: "Registered Nurse Salary", href: "/ca/salary/registered-nurse" },
      ]},
      { category: "Finance", items: [
        { label: "Accountant Salary", href: "/ca/salary/accountant" },
      ]},
      { category: "Engineering", items: [
        { label: "Mechanical Engineer Salary", href: "/ca/salary/mechanical-engineer" },
      ]},
    ],
    relocationText: "Canada continues to attract skilled professionals with competitive salaries and strong quality of life. Compare Canadian salaries and purchasing power against the United States, the United Kingdom, Australia and New Zealand.",
    faqQs: [
      { q: "What is the average salary in Canada?", a: "Average salaries vary by province and industry. Energy, technology and finance sectors generally offer above-average compensation." },
      { q: "Which professions earn the highest salaries?", a: "Software engineers, medical professionals and energy sector workers are among the highest-paid occupations." },
      { q: "Which provinces offer the highest salaries?", a: "Alberta, Ontario and British Columbia generally report the strongest compensation levels." },
      { q: "How much income tax do workers pay?", a: "Canada uses federal and provincial income taxes with progressive rate structures. Tax burden varies by province." },
      { q: "How does Canada compare internationally?", a: "Canada offers competitive salaries with strong social services and quality of life." },
      { q: "What sources does Olikit use?", a: "Olikit uses CRA publications, Statistics Canada data and official government resources." },
      { q: "How often is the information updated?", a: "Salary benchmarks, tax information and methodologies are reviewed regularly and updated when significant changes occur." },
    ],
  },
  nz: {
    heroH1: "New Zealand Salary, Tax and Cost-of-Living Intelligence",
    heroDesc: "Research salaries, taxes and affordability across New Zealand using public data and transparent methodologies. Olikit provides salary benchmarks, tax insights and cost-of-living research for professionals across the North Island and South Island.",
    snapshotCurrency: "New Zealand Dollar (NZ$)",
    snapshotTaxAuthority: "Inland Revenue Department (IRD)",
    snapshotTopSectors: "Healthcare, Engineering, Technology",
    snapshotTopRegion: "Auckland",
    snapshotTopProfession: "Registered Nurse",
    snapshotGlobalPosition: "Strong quality-of-life and skilled-worker demand",
    featuredInsights: [
      { title: "Healthcare Compensation", desc: "Healthcare is a major employer in New Zealand with strong demand for registered nurses, doctors and allied health professionals.", href: "/nz/salary/registered-nurse" },
      { title: "Engineering Salaries", desc: "Engineering professionals in New Zealand earn competitive salaries, particularly in civil, mechanical and structural engineering roles.", href: "/nz/salary/mechanical-engineer" },
      { title: "Regional Salary Differences", desc: "Salary levels differ between Auckland, Wellington, Christchurch and other regions. Compare compensation across New Zealand.", href: "/nz/salary" },
      { title: "Cost-of-Living Comparisons", desc: "Housing costs and living expenses vary across New Zealand. Auckland is the most expensive region, while other areas offer more affordable options.", href: "/nz/guides" },
    ],
    professionGroups: [
      { category: "Technology", items: [
        { label: "Software Engineer Salary", href: "/nz/salary/software-engineer" },
        { label: "Data Scientist Salary", href: "/nz/salary/data-scientist" },
      ]},
      { category: "Healthcare", items: [
        { label: "Doctor Salary", href: "/nz/salary/doctor" },
        { label: "Registered Nurse Salary", href: "/nz/salary/registered-nurse" },
      ]},
      { category: "Finance", items: [
        { label: "Accountant Salary", href: "/nz/salary/accountant" },
      ]},
      { category: "Engineering", items: [
        { label: "Mechanical Engineer Salary", href: "/nz/salary/mechanical-engineer" },
      ]},
    ],
    relocationText: "New Zealand offers a strong quality of life and growing demand for skilled professionals. Compare New Zealand salaries and purchasing power against Australia, Canada and the United Kingdom.",
    faqQs: [
      { q: "What is the average salary in New Zealand?", a: "Average salaries vary by profession and region. Healthcare and engineering professions generally offer strong compensation." },
      { q: "Which professions earn the highest salaries?", a: "Healthcare professionals, engineers and IT specialists are among the highest-paid occupations." },
      { q: "Which regions offer the highest salaries?", a: "Auckland and Wellington generally offer the highest salaries in New Zealand." },
      { q: "How much income tax do workers pay?", a: "New Zealand uses a progressive income tax system with no regional or state taxes." },
      { q: "How does New Zealand compare internationally?", a: "New Zealand offers competitive salaries with strong quality of life and work-life balance." },
      { q: "What sources does Olikit use?", a: "Olikit uses IRD publications, Stats NZ data and official government resources." },
      { q: "How often is the information updated?", a: "Salary benchmarks, tax information and methodologies are reviewed regularly and updated when significant changes occur." },
    ],
  },
  in: {
    heroH1: "India Salary, Tax and Cost-of-Living Intelligence",
    heroDesc: "Explore salary benchmarks, tax insights and affordability data across India using government-sourced and public information. Olikit provides compensation research, tax analysis and cost comparisons for professionals across India's major technology and business hubs.",
    snapshotCurrency: "Indian Rupee (\u20b9)",
    snapshotTaxAuthority: "Income Tax Department",
    snapshotTopSectors: "Technology, Engineering, Financial Services",
    snapshotTopRegion: "Karnataka",
    snapshotTopProfession: "Software Engineer",
    snapshotGlobalPosition: "One of the world's largest technology labor markets",
    featuredInsights: [
      { title: "Technology Salary Benchmarks", desc: "India is one of the world's largest technology talent markets. Software engineers, data scientists and IT professionals earn competitive salaries in cities like Bangalore, Hyderabad and Pune.", href: "/in/salary/software-engineer" },
      { title: "Highest Paying Cities and States", desc: "Salary levels vary significantly across India. Karnataka, Maharashtra and Delhi NCR generally report the highest compensation levels.", href: "/in/salary" },
      { title: "Understanding the Indian Tax System", desc: "India's income tax system offers both Old and New Tax regimes. Understanding the differences helps optimize tax liability.", href: "/in/tools/tax-calculator" },
      { title: "Cost of Living Across Major Urban Centers", desc: "Living costs vary between Bangalore, Mumbai, Delhi, Hyderabad, Pune and Chennai. Compare affordability across Indian cities.", href: "/in/guides" },
    ],
    professionGroups: [
      { category: "Technology", items: [
        { label: "Software Engineer Salary", href: "/in/salary/software-engineer" },
        { label: "Data Scientist Salary", href: "/in/salary/data-scientist" },
      ]},
      { category: "Healthcare", items: [
        { label: "Doctor Salary", href: "/in/salary/doctor" },
        { label: "Registered Nurse Salary", href: "/in/salary/registered-nurse" },
      ]},
      { category: "Finance", items: [
        { label: "Accountant Salary", href: "/in/salary/accountant" },
      ]},
      { category: "Engineering", items: [
        { label: "Mechanical Engineer Salary", href: "/in/salary/mechanical-engineer" },
      ]},
    ],
    relocationText: "India offers one of the world's largest and fastest-growing technology labor markets. Compare opportunities in India with Singapore, Australia, Canada, the United Kingdom and the United States.",
    faqQs: [
      { q: "What is the average salary in India?", a: "Average salaries vary significantly by profession, experience and city. Technology and financial services sectors generally offer higher compensation." },
      { q: "Which professions earn the highest salaries?", a: "Software engineers, data scientists and finance professionals are among the highest-paid occupations." },
      { q: "Which regions offer the highest salaries?", a: "Karnataka (Bangalore), Maharashtra (Mumbai), Delhi NCR and Hyderabad are among the highest-paying regions." },
      { q: "How much income tax do workers pay?", a: "India offers Old and New Tax regimes with progressive slabs. Deductions and exemptions can reduce tax liability." },
      { q: "How does India compare internationally?", a: "India offers competitive compensation in technology and business services, with significant cost-of-living advantages." },
      { q: "What sources does Olikit use?", a: "Olikit uses Income Tax Department publications, labor ministry data and official government resources." },
      { q: "How often is the information updated?", a: "Salary benchmarks, tax information and methodologies are reviewed regularly and updated when significant changes occur." },
    ],
  },
  sg: {
    heroH1: "Singapore Salary, Tax and Cost-of-Living Intelligence",
    heroDesc: "Research salaries, taxes and purchasing power in Singapore using transparent methodologies and public data sources. Olikit provides compensation benchmarks, tax analysis and affordability research for professionals in Singapore's competitive job market.",
    snapshotCurrency: "Singapore Dollar (S$)",
    snapshotTaxAuthority: "Inland Revenue Authority of Singapore (IRAS)",
    snapshotTopSectors: "Financial Services, Technology, Logistics",
    snapshotTopRegion: "Financial Services",
    snapshotTopProfession: "Software Engineer",
    snapshotGlobalPosition: "Leading international financial and business hub",
    featuredInsights: [
      { title: "Financial Services Compensation", desc: "Singapore is a global financial hub with competitive compensation in banking, asset management, fintech and insurance.", href: "/sg/salary/accountant" },
      { title: "Technology Salary Trends", desc: "Singapore's technology sector continues to grow, with strong demand for software engineers, data scientists and cybersecurity professionals.", href: "/sg/salary/software-engineer" },
      { title: "Low-Tax Environment", desc: "Singapore is known for its competitive tax regime. Individual income tax rates are among the lowest in developed economies.", href: "/sg/tools/tax-calculator" },
      { title: "Purchasing Power Analysis", desc: "While salaries in Singapore are competitive, housing and living costs are among the highest in Asia. Compare purchasing power across sectors.", href: "/sg/guides" },
    ],
    professionGroups: [
      { category: "Technology", items: [
        { label: "Software Engineer Salary", href: "/sg/salary/software-engineer" },
        { label: "Data Scientist Salary", href: "/sg/salary/data-scientist" },
      ]},
      { category: "Healthcare", items: [
        { label: "Doctor Salary", href: "/sg/salary/doctor" },
        { label: "Registered Nurse Salary", href: "/sg/salary/registered-nurse" },
      ]},
      { category: "Finance", items: [
        { label: "Accountant Salary", href: "/sg/salary/accountant" },
      ]},
      { category: "Engineering", items: [
        { label: "Mechanical Engineer Salary", href: "/sg/salary/mechanical-engineer" },
      ]},
    ],
    relocationText: "Singapore remains a premier destination for professionals in finance, technology and business services. Compare Singapore salaries and purchasing power against the United States, United Kingdom, Australia and Canada.",
    faqQs: [
      { q: "What is the average salary in Singapore?", a: "Average salaries vary by sector. Financial services and technology generally offer the highest compensation." },
      { q: "Which professions earn the highest salaries?", a: "Finance professionals, software engineers and senior technology roles are among the highest-paid occupations." },
      { q: "Which sectors offer the highest salaries?", a: "Financial services, technology and logistics are the highest-paying sectors in Singapore." },
      { q: "How much income tax do workers pay?", a: "Singapore has a progressive income tax system with one of the lowest top marginal rates among developed economies." },
      { q: "How does Singapore compare internationally?", a: "Singapore offers competitive salaries with a low-tax environment, though housing costs are among the highest globally." },
      { q: "What sources does Olikit use?", a: "Olikit uses IRAS publications, Ministry of Manpower data and official government resources." },
      { q: "How often is the information updated?", a: "Salary benchmarks, tax information and methodologies are reviewed regularly and updated when significant changes occur." },
    ],
  },
}

const LAST_UPDATED = getLastUpdated()

function SnapshotCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-zinc-50 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-zinc-950">{value}</p>
    </div>
  )
}

function InsightCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <a href={href} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-zinc-950">{title}</h3>
      <p className="text-sm leading-6 text-zinc-600">{desc}</p>
    </a>
  )
}

function ProfessionGroup({ category, items }: { category: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">{category}</h4>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="text-sm text-zinc-600 transition-colors hover:text-zinc-950">{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}
  return buildMetadata(locale, null, `/${locale.slug}`)
}

export default async function LocalePage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const slug = locale.slug
  const name = locale.name
  const states = locale.states
  const latestUpdates = getLatestUpdates(3)
  const websiteJsonLd = buildLocalBusinessJsonLd(locale)
  const orgJsonLd = buildOrganizationJsonLd(locale)
  const content = COUNTRY_CONTENT[slug]
  const countries = getAllCountries()
  const usStates = states?.filter(s => stateDataSets.some(d => d.stateSlug === s.slug)) || []

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqQs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }

  return (
    <div className="space-y-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* 1. HERO */}
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-10 shadow-sm sm:px-8 sm:py-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
          {name} &mdash; Financial Intelligence
        </p>
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          {content.heroH1}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
          {content.heroDesc}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`/${slug}/tools/salary-calculator`} className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
          <a href={`/${slug}/tools/tax-calculator`} className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
          <a href={`/${slug}/tools/mortgage-calculator`} className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Mortgage Calculator</a>
          <a href={`/${slug}/salary`} className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Research</a>
        </div>
      </section>

      {/* 2. COUNTRY SNAPSHOT */}
      <section>
        <h2 className="mb-2 text-2xl font-semibold text-zinc-950">{name} Financial Snapshot</h2>
        {content.snapshotDesc?.map((p, i) => (
          <p key={i} className="mb-3 text-sm leading-7 text-zinc-600 last:mb-4">{p}</p>
        ))}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <SnapshotCard label="Currency" value={content.snapshotCurrency} />
          <SnapshotCard label="Tax Authority" value={content.snapshotTaxAuthority} />
          <SnapshotCard label="Major Salary Sectors" value={content.snapshotTopSectors} />
          <SnapshotCard label="Highest Paying Region" value={content.snapshotTopRegion} />
          <SnapshotCard label="Most Researched Profession" value={content.snapshotTopProfession} />
          <SnapshotCard label="Global Position" value={content.snapshotGlobalPosition} />
        </div>
      </section>

      {/* 2b. KEY TAKEAWAYS */}
      {content.keyTakeaways && (
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.keyTakeaways.map((item) => (
              <div key={item.title} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="mb-1.5 text-base font-semibold text-zinc-950">{item.title}</h3>
                <p className="text-sm leading-6 text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. FREQUENTLY REFERENCED METRICS */}
      <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
        <h2 className="mb-3 text-lg font-semibold text-zinc-950">Frequently Referenced Metrics</h2>
        <div className="flex flex-wrap gap-2">
          <a href={`/${slug}/salary`} className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 transition hover:bg-zinc-50 hover:text-zinc-950">Average Salary in {name}</a>
          <a href={`/${slug}/salary`} className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 transition hover:bg-zinc-50 hover:text-zinc-950">Median Salary in {name}</a>
          <a href={`/${slug}/salary`} className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 transition hover:bg-zinc-50 hover:text-zinc-950">Highest Paying Profession</a>
          <a href={`/${slug}/best-states-for-salary`} className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 transition hover:bg-zinc-50 hover:text-zinc-950">Highest Paying Region</a>
          <a href={`/${slug}/tools/tax-calculator`} className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 transition hover:bg-zinc-50 hover:text-zinc-950">Effective Tax Range</a>
        </div>
      </section>

      {/* 4. FEATURED INSIGHTS */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Featured Insights</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.featuredInsights.map((insight) => (
            <InsightCard key={insight.title} {...insight} />
          ))}
        </div>
      </section>

      {/* 5. POPULAR PROFESSION SALARIES */}
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Popular Profession Salaries</h2>
        <p className="mb-6 text-sm text-zinc-600">Explore salary benchmarks by profession in {name}.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.professionGroups.map((group) => (
            <ProfessionGroup key={group.category} {...group} />
          ))}
        </div>
      </section>

      {/* 5b. SALARY LANDSCAPE */}
      {content.salaryLandscape && (
        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{name} Salary Landscape</h2>
          <h3 className="mb-3 text-base font-semibold text-zinc-950">Understanding Compensation in the United States</h3>
          {content.salaryLandscape.text.map((p, i) => (
            <p key={i} className="mb-3 text-sm leading-7 text-zinc-600 last:mb-0">{p}</p>
          ))}
        </section>
      )}

      {/* 6. COUNTRY RESEARCH & RANKINGS */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Research &amp; Rankings</h2>
        <p className="mb-4 text-sm text-zinc-600">Explore in-depth research covering compensation trends, tax burdens and affordability across {content.researchTopics ? "the country" : name}.</p>
        {content.researchTopics && (
          <div className="mb-4">
            <p className="text-sm font-medium text-zinc-700 mb-2">Topics include:</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {content.researchTopics.map((topic) => (
                <li key={topic} className="text-sm text-zinc-500">&bull; {topic}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a href={`/${slug}/rankings`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
            <h3 className="text-lg font-semibold text-zinc-950">Highest Paying Jobs</h3>
            <p className="mt-1 text-sm text-zinc-600">Profession rankings based on salary data.</p>
          </a>
          <a href={`/${slug}/best-states-for-salary`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
            <h3 className="text-lg font-semibold text-zinc-950">Highest Paying Regions</h3>
            <p className="mt-1 text-sm text-zinc-600">Regional salary rankings and comparisons.</p>
          </a>
          <a href="/rankings" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
            <h3 className="text-lg font-semibold text-zinc-950">Salary Rankings</h3>
            <p className="mt-1 text-sm text-zinc-600">Global salary rankings by country.</p>
          </a>
          <a href={`/${slug}/tools/tax-calculator`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
            <h3 className="text-lg font-semibold text-zinc-950">Tax Burden Rankings</h3>
            <p className="mt-1 text-sm text-zinc-600">Compare tax systems across countries.</p>
          </a>
          <a href={`/${slug}/guides`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
            <h3 className="text-lg font-semibold text-zinc-950">Cost-of-Living Rankings</h3>
            <p className="mt-1 text-sm text-zinc-600">Living cost comparisons and analysis.</p>
          </a>
          <a href="/compare" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
            <h3 className="text-lg font-semibold text-zinc-950">Purchasing Power Rankings</h3>
            <p className="mt-1 text-sm text-zinc-600">Cross-country purchasing power analysis.</p>
          </a>
        </div>
      </section>

      {/* 7. RELOCATION INTELLIGENCE */}
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="mb-3 text-lg font-semibold text-zinc-950">Relocation Intelligence</h2>
        <p className="mb-4 text-sm leading-7 text-zinc-600">{content.relocationText}</p>
        <div className="flex flex-wrap gap-2">
          {countries.filter((c) => c.slug !== slug).map((c) => (
            <a key={c.slug} href={`/${slug}/comparisons/salary/${slug}-vs-${c.slug}`} className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200 hover:text-zinc-950">
              {c.flag} {name} vs {c.name}
            </a>
          ))}
        </div>
      </section>

      {/* 8. POPULAR CALCULATORS */}
      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-zinc-950">Popular Calculators</h2>
          <p className="mt-1 text-sm text-zinc-600">Financial tools for {name}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <a key={tool.id} href={`/${slug}/tools/${tool.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">{tool.category}</p>
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">{tool.name}</h3>
              <p className="text-sm leading-6 text-zinc-600">{tool.description.replace("{country}", name)}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 9. REGIONS / STATES */}
      {usStates.length > 0 && (
        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-950">Explore States</h2>
              <p className="mt-1 text-sm text-zinc-600">Salary and cost-of-living insights by state. Compare salaries, taxes and affordability across states to better understand regional differences.</p>
            </div>
            <a href={`/${slug}/states`} className="shrink-0 text-sm font-medium text-blue-600 hover:underline">All States</a>
          </div>
          {content.stateDestinations && (
            <div className="mb-4 flex flex-wrap gap-2">
              {content.stateDestinations.map((s) => <span key={s} className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700">{s}</span>)}
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {usStates.slice(0, 9).map((s) => {
              const d = stateDataSets.find(d => d.stateSlug === s.slug)
              if (!d) return null
              return (
                <a key={s.slug} href={`/${slug}/state/${s.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                  <h3 className="mb-2 text-lg font-semibold text-zinc-950">{s.name}</h3>
                  <p className="text-sm text-zinc-600">Avg salary: <strong>${d.dataPoints.averageSalary.toLocaleString()}</strong></p>
                  <p className="text-xs text-zinc-500">Median income: ${d.dataPoints.medianHouseholdIncome.toLocaleString()} &middot; COL index: {d.dataPoints.costOfLivingIndex}</p>
                </a>
              )
            })}
          </div>
        </section>
      )}

      {/* 10. GUIDES */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">Financial Guides</h2>
            <p className="mt-1 text-sm text-zinc-600">Comprehensive guides for {name}</p>
          </div>
          <a href={`/${slug}/guides`} className="shrink-0 text-sm font-medium text-blue-600 hover:underline">All Guides</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <a key={guide.id} href={`/${slug}/guides/${guide.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">{guide.category}</p>
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">{guide.name}</h3>
              <p className="text-sm leading-6 text-zinc-600">{guide.description.replace("{country}", name)}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 11. GOVERNMENT SOURCES */}
      <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Government Sources</h2>
        <p className="mb-4 text-sm text-zinc-600 leading-relaxed">
          Olikit uses publicly available information from government agencies and official publications. Salary, tax and economic information is derived from official public sources whenever possible.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {(content.govSources || [
            { name: "IRS", desc: "US tax brackets and labor data" },
            { name: "HMRC", desc: "UK tax rates and allowances" },
            { name: "ATO", desc: "Australian tax and superannuation" },
            { name: "CRA", desc: "Canadian tax brackets and benefits" },
            { name: "IRD", desc: "New Zealand tax rates" },
            { name: "Income Tax Dept", desc: "India tax slabs and rules" },
            { name: "IRAS", desc: "Singapore individual tax rates" },
            { name: "CPF Board", desc: "Singapore CPF contributions" },
          ]).map((source) => (
            <div key={source.name} className="rounded-md bg-zinc-50 p-3">
              <p className="font-semibold text-zinc-950 text-sm">{source.name}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{source.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. WHY TRUST OLIKIT */}
      <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-950">Why Trust Olikit</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(content.trustItems || [
            { title: "Government-Sourced Data", desc: "Salary, tax and labor-market information is derived from official publications and public datasets." },
            { title: "Transparent Methodology", desc: "Calculation assumptions, methodologies and update processes are publicly documented." },
            { title: "Independent Research", desc: "Research and rankings are created independently using transparent criteria." },
            { title: "Regular Updates", desc: "Salary benchmarks, tax rates and methodologies are reviewed and updated as new information becomes available." },
          ]).map((item) => (
            <div key={item.title}>
              <h3 className="mb-1.5 text-sm font-semibold text-zinc-950">{item.title}</h3>
              <p className="text-sm leading-6 text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/about" className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">About Our Methodology</Link>
          <Link href="/methodology" className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">View Methodology</Link>
        </div>
      </section>

      {/* 13. COUNTRY FAQ */}
      <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-950">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {content.faqQs.map((faq, i) => (
            <details key={i} className="text-sm">
              <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">{faq.q}</summary>
              <p className="mt-2 text-zinc-500">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}