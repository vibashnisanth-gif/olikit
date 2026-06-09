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
  snapshotSectorLabel?: string
  snapshotRegionLabel?: string
  snapshotDesc?: string[]
  aiQuickAnswers?: { q: string; a: string }[]
  keyTakeaways?: { title: string; desc: string }[]
  featuredInsights: { title: string; desc: string; href: string }[]
  professionGroups: { category: string; items: { label: string; href: string }[] }[]
  careerPaths?: { title: string; desc: string; href: string }[]
  featuredResearch?: { title: string; desc: string; href: string; cta?: string }[]
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
    heroDesc: "Research salaries, estimate take-home pay, compare states and understand cost-of-living differences across the United States. Olikit combines salary benchmarks, tax insights, affordability research and compensation analysis to help professionals, job seekers and families make better financial decisions. Whether you are evaluating a new job offer, planning a relocation or researching compensation trends, our calculators, rankings and guides provide transparent insights built from government-sourced and publicly available data.",
    snapshotCurrency: "USD ($)",
    snapshotTaxAuthority: "Internal Revenue Service (IRS)",
    snapshotTopSectors: "Technology",
    snapshotTopRegion: "California",
    snapshotTopProfession: "Software Engineer",
    snapshotGlobalPosition: "One of the world's highest-paying labor markets",
    snapshotDesc: [
      "The United States remains one of the world's largest and most competitive labor markets.",
      "Compensation varies significantly by profession, industry, state and experience level. Technology, healthcare, finance and engineering continue to drive some of the highest salaries in the country, while differences in taxation and living costs can substantially affect purchasing power.",
      "Understanding salary alone is not enough. Real financial outcomes depend on take-home pay, taxes, housing costs and affordability.",
    ],
    aiQuickAnswers: [
      { q: "What is the average salary in the United States?", a: "Salary levels vary significantly by profession, industry and location, with technology, healthcare and finance frequently reporting above-average compensation." },
      { q: "Which states pay the highest salaries?", a: "California, Washington, Massachusetts and New York frequently rank among the strongest states for compensation." },
      { q: "Which professions earn the highest salaries?", a: "Doctors, software engineers, finance professionals and specialized healthcare occupations often rank among the highest-paid careers." },
      { q: "How do taxes affect take-home pay?", a: "Federal taxes, state taxes and payroll deductions can significantly affect net income and purchasing power." },
    ],
    keyTakeaways: [
      { title: "High Salaries, Wide Differences", desc: "The United States offers some of the highest salaries globally, but earnings can vary significantly across states and industries." },
      { title: "State Taxes Matter", desc: "Workers with identical salaries may experience very different take-home pay depending on state tax rules." },
      { title: "Technology Drives Compensation", desc: "Software engineering, product management and data science remain among the highest-paying professional categories." },
      { title: "Healthcare Remains Critical", desc: "Healthcare occupations continue to provide strong compensation and long-term demand across the country." },
    ],
    featuredInsights: [
      { title: "Highest Paying States", desc: "Compare compensation levels across California, Washington, Massachusetts, New York and Texas.", href: "/us/best-states-for-salary" },
      { title: "Software Engineer Salary Trends", desc: "Track compensation benchmarks across experience levels, industries and major technology hubs.", href: "/us/salary/software-engineer" },
      { title: "State Income Tax Differences", desc: "Understand how federal and state tax systems affect take-home income.", href: "/us/tools/tax-calculator" },
      { title: "Cost of Living Across America", desc: "Compare affordability, housing costs and purchasing power across states.", href: "/us/cost-of-living" },
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
    careerPaths: [
      { title: "Technology Careers", desc: "Research compensation trends across software engineering, data science, cybersecurity and product management.", href: "/us/salary" },
      { title: "Healthcare Careers", desc: "Explore salaries for doctors, nurses, pharmacists and healthcare professionals.", href: "/us/salary" },
      { title: "Finance Careers", desc: "Compare compensation across accounting, corporate finance and financial analysis.", href: "/us/salary" },
      { title: "Engineering Careers", desc: "Review salary benchmarks across civil, mechanical and electrical engineering disciplines.", href: "/us/salary" },
      { title: "Business Careers", desc: "Understand compensation trends for analysts, project managers and leadership roles.", href: "/us/salary" },
    ],
    featuredResearch: [
      { title: "Highest Paying Jobs in the United States", desc: "Explore salary benchmarks across technology, healthcare, finance and engineering occupations.", href: "/us/rankings", cta: "Explore Report" },
      { title: "Best States for High Earners", desc: "Compare compensation, taxes and purchasing power across major labor markets.", href: "/us/best-states-for-salary", cta: "Compare States" },
      { title: "United States Salary Intelligence Report 2026", desc: "Comprehensive analysis of salaries, taxes, affordability and purchasing power.", href: "/us/research", cta: "Explore Report" },
    ],
    salaryLandscape: {
      text: [
        "The United States labor market combines high earning potential with significant regional variation.",
        "Professionals evaluating opportunities should consider salary alongside taxes, housing costs and affordability.",
        "Technology and healthcare continue to offer some of the strongest compensation opportunities, while finance and engineering remain important sources of high-paying employment.",
        "Comparing purchasing power rather than salary alone provides a more accurate picture of financial outcomes.",
      ],
      factors: [],
      sectorsIntro: "",
    },
    relocationText: "Considering a move to the United States? Compare salaries, taxes, housing costs and purchasing power against Canada, the United Kingdom, Australia, Singapore and New Zealand. Evaluate how compensation translates into real financial outcomes before making relocation decisions.",
    researchTopics: [
      "Highest Paying Jobs",
      "Highest Paying States",
      "Salary Rankings",
      "Tax Burden Rankings",
      "Cost of Living Rankings",
      "Purchasing Power Rankings",
    ],
    stateDestinations: ["California", "Texas", "Florida", "New York", "Washington", "Massachusetts"],
    govSources: [
      { name: "Internal Revenue Service (IRS)", desc: "Federal tax brackets and guidance" },
      { name: "Bureau of Labor Statistics (BLS)", desc: "Employment and wage data" },
      { name: "U.S. Census Bureau", desc: "Demographic and economic statistics" },
      { name: "Federal Reserve", desc: "Economic research and data" },
      { name: "Bureau of Economic Analysis (BEA)", desc: "GDP and regional economic data" },
    ],
    trustItems: [
      { title: "Government-Sourced Data", desc: "Salary, tax and economic information is derived from official public sources whenever possible." },
      { title: "Transparent Methodology", desc: "Calculation assumptions and methodologies are publicly documented." },
      { title: "Independent Research", desc: "Research and rankings are created independently using transparent criteria." },
      { title: "Regular Updates", desc: "Benchmarks, tax rates and methodologies are reviewed regularly." },
    ],
    faqQs: [
      { q: "What is the average salary in the United States?", a: "Salary levels vary significantly across industries, professions and locations. Technology, healthcare, finance and engineering occupations frequently report higher-than-average earnings, while salaries in other sectors may vary depending on demand, education requirements and regional labor market conditions. When evaluating salaries, it is important to consider taxes, housing costs and purchasing power rather than salary alone." },
      { q: "What is considered a good salary in the United States?", a: "A good salary depends on where you live, your household size and your financial goals. A salary that provides strong purchasing power in one state may offer a different standard of living in another due to differences in housing costs, taxes and living expenses." },
      { q: "Which professions earn the highest salaries in the United States?", a: "Many of the highest-paying occupations are found in healthcare, technology and finance, including physicians, software engineers, specialized healthcare professionals and senior finance professionals." },
      { q: "Which states pay the highest salaries?", a: "California, Washington, Massachusetts and New York frequently rank among the strongest states for compensation, though living costs should also be considered." },
      { q: "Which states have the lowest taxes?", a: "Some states do not levy state income tax, while others apply progressive tax systems. Tax outcomes should be evaluated alongside housing and living costs." },
      { q: "How much income tax do workers pay in the United States?", a: "Tax obligations depend on income level, filing status, federal tax brackets, state tax rules and available deductions or credits." },
      { q: "What is the average software engineer salary in the United States?", a: "Software engineering remains one of the most competitive and highly compensated professions, with salary levels varying by experience, industry and location." },
      { q: "How much do registered nurses earn in the United States?", a: "Registered nurse compensation depends on specialization, experience, employer type and geographic location." },
      { q: "How does cost of living vary by state?", a: "Housing, transportation, healthcare and daily expenses vary widely, making purchasing power a critical factor when comparing states." },
      { q: "How does the United States compare with Canada?", a: "The United States often offers higher salaries in technology and finance, while differences in healthcare systems, taxes and housing costs affect overall outcomes." },
      { q: "How does the United States compare with the United Kingdom?", a: "The United States generally reports higher compensation levels across many professional sectors, though taxes and affordability should be considered alongside salary." },
      { q: "Can I compare salaries across states?", a: "Yes. Comparing salaries alongside taxes, housing costs and purchasing power provides a clearer picture of financial outcomes." },
      { q: "What sources does Olikit use?", a: "Olikit relies on official government publications and public datasets, including IRS, BLS, Census Bureau, Federal Reserve and BEA resources." },
      { q: "How often is salary data updated?", a: "Salary benchmarks, tax information and methodologies are reviewed regularly and updated when significant changes occur." },
      { q: "Are Olikit calculators free to use?", a: "Yes. Olikit calculators, guides and research resources are available without charge." },
    ],
  },
  uk: {
    heroH1: "United Kingdom Salary, Tax and Cost of Living Intelligence",
    heroDesc: "Research salaries, estimate take-home pay, compare regions and understand cost-of-living differences across the United Kingdom. Olikit combines salary benchmarks, tax insights, affordability research and compensation analysis to help professionals make informed financial and career decisions. Whether you are evaluating a new role in London, comparing salaries across the UK or planning a relocation, our calculators, rankings and guides provide transparent insights built from government-sourced and publicly available data.",
    snapshotCurrency: "GBP (\u00a3)",
    snapshotTaxAuthority: "HM Revenue & Customs (HMRC)",
    snapshotTopSectors: "Financial Services",
    snapshotTopRegion: "London",
    snapshotTopProfession: "Software Engineer",
    snapshotGlobalPosition: "Major European Financial Hub",
    snapshotSectorLabel: "Largest Salary Sector",
    snapshotRegionLabel: "Highest Paying Region",
    snapshotDesc: [
      "The United Kingdom is one of Europe's largest economies and a global centre for finance, professional services and technology.",
      "Salary levels vary considerably between London and the rest of the country. While London frequently offers some of the highest salaries in the UK, higher housing and living costs can significantly affect purchasing power.",
      "Understanding take-home pay, taxes and affordability together provides a clearer picture of financial outcomes than salary alone.",
    ],
    aiQuickAnswers: [
      { q: "What is the average salary in the United Kingdom?", a: "Salary levels vary by profession, industry and location, with London frequently reporting higher compensation than other regions." },
      { q: "Which region pays the highest salaries?", a: "London consistently ranks among the highest-paying regions due to its concentration of finance, technology and professional services employers." },
      { q: "Which professions earn the highest salaries?", a: "Finance, technology, healthcare and executive leadership roles frequently rank among the highest-paying occupations." },
      { q: "How do taxes affect take-home pay?", a: "Income Tax and National Insurance contributions can significantly affect take-home earnings and should be considered alongside gross salary." },
    ],
    keyTakeaways: [
      { title: "London Commands a Premium", desc: "London salaries often exceed national averages, though housing and living costs can reduce purchasing power." },
      { title: "Regional Differences Matter", desc: "Compensation and affordability vary significantly across England, Scotland, Wales and Northern Ireland." },
      { title: "Financial Services Drive Earnings", desc: "The UK remains one of the world's most important financial centres, supporting strong compensation in banking, consulting and professional services." },
      { title: "Technology Continues Growing", desc: "Technology occupations remain among the fastest-growing and most researched professions in the country." },
    ],
    featuredInsights: [
      { title: "London Salary Premium", desc: "Compare compensation levels in London against the rest of the United Kingdom.", href: "/uk/salary" },
      { title: "Technology Salary Trends", desc: "Track salary growth across software engineering, cybersecurity and data-related occupations.", href: "/uk/salary/software-engineer" },
      { title: "Income Tax and National Insurance", desc: "Understand how deductions affect take-home earnings.", href: "/uk/tools/tax-calculator" },
      { title: "Cost of Living Across the UK", desc: "Compare affordability, housing costs and purchasing power across major regions.", href: "/uk/guides" },
    ],
    professionGroups: [
      { category: "Technology", items: [
        { label: "Software Engineer Salary", href: "/uk/salary/software-engineer" },
        { label: "Data Scientist Salary", href: "/uk/salary/data-scientist" },
        { label: "Product Manager Salary", href: "/uk/tools/salary-calculator" },
        { label: "Cybersecurity Analyst Salary", href: "/uk/tools/salary-calculator" },
      ]},
      { category: "Healthcare", items: [
        { label: "Doctor Salary", href: "/uk/salary/doctor" },
        { label: "Registered Nurse Salary", href: "/uk/salary/registered-nurse" },
        { label: "Pharmacist Salary", href: "/uk/tools/salary-calculator" },
      ]},
      { category: "Finance", items: [
        { label: "Accountant Salary", href: "/uk/salary/accountant" },
        { label: "Financial Analyst Salary", href: "/uk/tools/salary-calculator" },
        { label: "Investment Analyst Salary", href: "/uk/tools/salary-calculator" },
      ]},
      { category: "Engineering", items: [
        { label: "Mechanical Engineer Salary", href: "/uk/salary/mechanical-engineer" },
        { label: "Civil Engineer Salary", href: "/uk/tools/salary-calculator" },
        { label: "Electrical Engineer Salary", href: "/uk/tools/salary-calculator" },
      ]},
      { category: "Business", items: [
        { label: "Business Analyst Salary", href: "/uk/tools/salary-calculator" },
        { label: "Project Manager Salary", href: "/uk/tools/salary-calculator" },
        { label: "Human Resources Manager Salary", href: "/uk/tools/salary-calculator" },
      ]},
    ],
    careerPaths: [
      { title: "Technology Careers", desc: "Research compensation trends across software engineering, cybersecurity, product management and data science.", href: "/uk/salary" },
      { title: "Healthcare Careers", desc: "Compare salaries across medicine, nursing, pharmacy and healthcare support professions.", href: "/uk/salary" },
      { title: "Finance Careers", desc: "Explore compensation in accounting, investment management, banking and financial analysis.", href: "/uk/salary" },
      { title: "Engineering Careers", desc: "Review salary benchmarks across civil, mechanical and electrical engineering disciplines.", href: "/uk/salary" },
      { title: "Business Careers", desc: "Understand compensation trends across management, operations and business analysis roles.", href: "/uk/salary" },
    ],
    featuredResearch: [
      { title: "Highest Paying Jobs in the United Kingdom", desc: "Explore salary benchmarks across finance, technology, healthcare and engineering occupations.", href: "/uk/rankings", cta: "Explore Report" },
      { title: "Best Regions for High Earners", desc: "Compare compensation, taxes and affordability across the UK.", href: "/uk/salary", cta: "Compare Regions" },
      { title: "United Kingdom Salary Intelligence Report 2026", desc: "Comprehensive analysis of salaries, taxes, affordability and purchasing power throughout the country.", href: "/uk/research", cta: "Explore Report" },
    ],
    salaryLandscape: {
      text: [
        "The United Kingdom labour market combines strong professional opportunities with significant regional differences.",
        "London remains the country's dominant financial and business centre, while major cities such as Manchester, Birmingham, Edinburgh and Bristol continue to attract growing technology and professional services sectors.",
        "Professionals comparing opportunities should evaluate salary alongside taxes, housing costs and overall purchasing power.",
        "A higher salary does not always result in a stronger financial outcome if living costs are significantly higher.",
      ],
      factors: [],
      sectorsIntro: "",
    },
    relocationText: "Considering a move to the United Kingdom? Compare salaries, taxes, housing costs and purchasing power against the United States, Canada, Australia, New Zealand and Singapore. Understanding both compensation and affordability can help determine whether relocating improves long-term financial outcomes.",
    researchTopics: [
      "Highest Paying Jobs",
      "Highest Paying Regions",
      "Salary Rankings",
      "Tax Burden Rankings",
      "Cost of Living Rankings",
      "Purchasing Power Rankings",
    ],
    stateDestinations: ["London", "South East England", "Scotland", "North West England", "West Midlands", "Wales"],
    govSources: [
      { name: "HM Revenue & Customs (HMRC)", desc: "Tax rates and allowances" },
      { name: "Office for National Statistics (ONS)", desc: "Employment and economic data" },
      { name: "Bank of England", desc: "Monetary and financial stability" },
      { name: "GOV.UK", desc: "Official government publications" },
      { name: "UK Parliament Research Briefings", desc: "Economic policy analysis" },
    ],
    trustItems: [
      { title: "Government-Sourced Data", desc: "Salary, tax and economic information is derived from official public sources whenever possible." },
      { title: "Transparent Methodology", desc: "Calculation assumptions and methodologies are publicly documented." },
      { title: "Independent Research", desc: "Research and rankings are created independently using transparent criteria." },
      { title: "Regular Updates", desc: "Benchmarks, tax rates and methodologies are reviewed regularly." },
    ],
    faqQs: [
      { q: "What is the average salary in the United Kingdom?", a: "Salary levels vary by profession, experience and location. London typically reports higher salaries than many other regions, though living costs are also higher." },
      { q: "What is considered a good salary in the UK?", a: "A good salary depends on location, household size and living costs. Evaluating take-home pay and affordability together provides a clearer picture than salary alone." },
      { q: "Which professions earn the highest salaries?", a: "Finance, technology, healthcare and executive leadership positions frequently rank among the highest-paying occupations." },
      { q: "Is London worth the higher cost of living?", a: "London often provides higher salaries, but housing and everyday expenses are also significantly higher. Purchasing power should be evaluated alongside compensation." },
      { q: "How much income tax do workers pay in the UK?", a: "Income tax depends on earnings, tax bands and personal circumstances. National Insurance contributions also affect take-home pay." },
      { q: "What are National Insurance contributions?", a: "National Insurance contributions help fund public services and benefits and are deducted from earnings alongside income tax." },
      { q: "Which regions pay the highest salaries?", a: "London typically ranks highest, followed by several regions with strong finance, technology and professional services sectors." },
      { q: "How does the UK compare with the United States?", a: "The United States often reports higher salaries, while differences in taxation, healthcare and living costs affect overall financial outcomes." },
      { q: "How does the UK compare with Canada?", a: "Both countries offer strong professional opportunities, though compensation, taxes and affordability vary by region and profession." },
      { q: "Can I compare salaries across regions?", a: "Yes. Comparing salaries alongside taxes, housing costs and purchasing power provides a more complete picture of financial outcomes." },
      { q: "What sources does Olikit use?", a: "Olikit relies on official government publications, public datasets and economic research sources whenever possible." },
      { q: "How often is data updated?", a: "Salary benchmarks, tax information and methodologies are reviewed regularly and updated when significant changes occur." },
      { q: "Are Olikit calculators free to use?", a: "Yes. Olikit calculators, guides and research resources are available without charge." },
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
        <p className="mt-3 text-xs text-zinc-400">Last updated: June 2026</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`/${slug}/tools/salary-calculator`} className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
          <a href={`/${slug}/tools/tax-calculator`} className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
          <a href={`/${slug}/tools/mortgage-calculator`} className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Mortgage Calculator</a>
          <a href={`/${slug}/tools/salary-calculator?mode=after-tax`} className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary After Tax</a>
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
          <SnapshotCard label={content.snapshotSectorLabel || "Highest Paying Sector"} value={content.snapshotTopSectors} />
          <SnapshotCard label={content.snapshotRegionLabel || "Highest Paying State"} value={content.snapshotTopRegion} />
          <SnapshotCard label="Most Researched Profession" value={content.snapshotTopProfession} />
          <SnapshotCard label="Global Position" value={content.snapshotGlobalPosition} />
        </div>
      </section>

      {/* 3. AI QUICK ANSWERS */}
      {content.aiQuickAnswers && (
        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-lg font-semibold text-zinc-950">AI Quick Answers</h2>
          <div className="space-y-3">
            {content.aiQuickAnswers.map((item, i) => (
              <div key={i}>
                <p className="text-sm font-medium text-zinc-950">{item.q}</p>
                <p className="text-sm text-zinc-500 mt-0.5">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. KEY TAKEAWAYS */}
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

      {/* 5. POPULAR PROFESSION SALARIES */}
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Popular Profession Salaries</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.professionGroups.map((group) => (
            <ProfessionGroup key={group.category} {...group} />
          ))}
        </div>
      </section>

      {/* 6. EXPLORE SALARIES BY CAREER PATH */}
      {content.careerPaths && (
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Explore Salaries by Career Path</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.careerPaths.map((path) => (
              <a key={path.title} href={path.href} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                <h3 className="mb-2 text-lg font-semibold text-zinc-950">{path.title}</h3>
                <p className="text-sm leading-6 text-zinc-600">{path.desc}</p>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* 7. FEATURED INSIGHTS */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Featured Insights</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.featuredInsights.map((insight) => (
            <InsightCard key={insight.title} {...insight} />
          ))}
        </div>
      </section>

      {/* 8. FEATURED RESEARCH */}
      {content.featuredResearch && (
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Featured Research</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.featuredResearch.map((item) => (
              <a key={item.title} href={item.href} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                <h3 className="mb-2 text-lg font-semibold text-zinc-950">{item.title}</h3>
                <p className="text-sm leading-6 text-zinc-600">{item.desc}</p>
                {item.cta && (
                  <span className="mt-3 inline-block text-sm font-medium text-blue-600">{item.cta}</span>
                )}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* 9. SALARY LANDSCAPE */}
      {content.salaryLandscape && (
        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{name} Salary Landscape</h2>
          {content.salaryLandscape.text.map((p, i) => (
            <p key={i} className="mb-3 text-sm leading-7 text-zinc-600 last:mb-0">{p}</p>
          ))}
        </section>
      )}

      {/* 10. RESEARCH & RANKINGS */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Research &amp; Rankings</h2>
        <p className="mb-4 text-sm text-zinc-600">Explore in-depth research covering compensation trends, tax burdens and affordability across {content.researchTopics ? "the country" : name}.</p>
        {content.researchTopics && (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.researchTopics.map((topic) => {
              const href = topic === "Highest Paying Jobs" ? `/${slug}/rankings` :
                topic === "Highest Paying States" ? `/${slug}/best-states-for-salary` :
                topic === "Salary Rankings" ? "/rankings" :
                topic === "Tax Burden Rankings" ? `/${slug}/tools/tax-calculator` :
                topic === "Cost of Living Rankings" ? `/${slug}/guides` :
                topic === "Purchasing Power Rankings" ? "/compare" :
                `/${slug}/rankings`
              return (
                <a key={topic} href={href} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                  <h3 className="text-lg font-semibold text-zinc-950">{topic}</h3>
                </a>
              )
            })}
          </div>
        )}
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
            {usStates.slice(0, 6).map((s) => {
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
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">{guide.name.replace("{country}", name)}</h3>
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