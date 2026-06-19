#!/usr/bin/env node
// Generator: Creates all profession page files from data templates
// Run: node scripts/generate-professions.mjs

import fs from "fs"
import path from "path"

const APP_DIR = path.resolve("src/app")
const BASE_URL = "https://olikit.com"

// ── New profession definitions ──────────────────────────────────────────────
const NEW_PROFESSIONS = [
  {
    slug: "ai-engineer",
    name: "AI Engineer",
    plural: "AI Engineers",
    tech: true,
    desc: "AI engineers design and implement artificial intelligence systems, developing machine learning models and AI-powered applications.",
    hubBadge: "Career Intelligence",
    hubTitle: "AI Engineer Salary & Career Intelligence",
    hubDesc: "Research AI engineer salaries, compare compensation across countries, evaluate career progression, and understand how taxes and cost of living affect take-home earnings.",
    hubCta: "View Salary by Country",
    hubCtaHref: "/ai-engineer-salary-by-country",
    hubSecondaryCta: "Salary Index 2026",
    hubSecondaryCtaHref: "/research/ai-engineer-salary-index-2026",
    salaryCards: [
      { label: "Global Average", value: "$135,000 (US)" },
      { label: "Avg Entry Level", value: "$85,000 (US)" },
      { label: "Highest Experienced", value: "$200,000 (US)" },
    ],
    salaryCardsHub: [
      { label: "US Average Salary", value: "$135,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$85,000 (US)" },
    ],
    salaryCardBest: [
      { label: "1st - United States", value: "$135,000" },
      { label: "2nd - Australia", value: "A$125,000" },
      { label: "3rd - Canada", value: "C$95,000" },
    ],
    cardTaxBest: [
      { label: "Best After-Tax", value: "US ($105,300)" },
      { label: "Highest Gross", value: "US ($135,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    cardPppBest: [
      { label: "Best PPP Value", value: "India (4x multiplier)" },
      { label: "Strong PPP", value: "Australia" },
      { label: "Moderate PPP", value: "US, Canada" },
    ],
    cardSalaryByCountry: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$135,000 (US)" },
      { label: "Wide Range", value: "$7K-$220K+" },
    ],
    hubTakeaways: [
      { title: "US Leads in Nominal Pay", description: "The United States offers the highest average AI engineer salaries at $135,000, driven by AI startup funding and big tech investment in artificial intelligence." },
      { title: "Singapore Best for Taxes", description: "Singapore's progressive tax system capped at 22% with no capital gains tax makes it the most tax-efficient market for AI engineers." },
      { title: "India Offers Strongest PPP", description: "When adjusted for local costs, India offers exceptional purchasing power for AI engineers relative to income." },
      { title: "Remote Work Expands Options", description: "AI engineering roles increasingly offer remote flexibility, allowing talent to access global salaries while living in lower-cost regions." },
    ],
    salaryTakeaways: [
      { title: "AI Premium Over Traditional SE", description: "AI engineers command a 10-15% premium over traditional software engineers due to specialized ML/AI skills." },
      { title: "Tax Burden Varies Widely", description: "Effective tax rates for AI engineers range from 7% in Singapore to over 30% in top US state brackets." },
      { title: "Equity Compensation Common", description: "AI startups and big tech offer significant equity packages that can double total compensation." },
    ],
    highestTakeaways: [
      { title: "US Leads by Nominal Salary", description: "The United States offers the highest AI engineer salaries globally at $135,000 average." },
      { title: "Australia Offers Best Balance", description: "Australia ranks second with A$125,000 average, combined with universal healthcare and high quality of life." },
      { title: "Singapore Most Tax-Efficient", description: "Despite ranking lower by nominal salary, Singapore's low tax environment makes it competitive for after-tax income." },
    ],
    bestTakeaways: [
      { title: "United States - Best for Maximum Compensation", description: "Highest salaries globally with unparalleled AI research ecosystem, but challenging immigration and high living costs." },
      { title: "Canada - Best for Balanced Relocation", description: "Competitive salaries, accessible Express Entry immigration, universal healthcare, and growing AI hubs." },
      { title: "Singapore - Best for Tax Efficiency", description: "Extremely favorable tax environment (top rate 22%), strategic Asian location." },
    ],
    countrySummary: { us: "Highest AI salaries globally", uk: "Strong AI research sector in London", ca: "Growing AI hubs in Toronto and Montreal", au: "Competitive AI salaries and lifestyle", nz: "Emerging AI sector", sg: "Competitive salaries, low taxes", in: "Large AI talent pool, strong PPP" },
    countrySummaryLong: { us: "Highest nominal salaries globally with strong AI ecosystem. Average $135K.", uk: "Strong AI research and fintech sector. Average £62K.", ca: "Growing AI hubs with accessible immigration. Average C$95K.", au: "Competitive pay and lifestyle. Average A$125K.", nz: "Emerging AI tech sector. Average NZ$105K.", sg: "Competitive salaries with low taxes. Average S$85K.", in: "Large AI workforce with strong PPP. Average ₹18L." },
  },
  {
    slug: "machine-learning-engineer",
    name: "Machine Learning Engineer",
    plural: "Machine Learning Engineers",
    tech: true,
    desc: "Machine learning engineers develop and deploy ML models, build data pipelines, and operationalize machine learning systems at scale.",
    hubBadge: "Career Intelligence",
    hubTitle: "Machine Learning Engineer Salary & Career Intelligence",
    hubDesc: "Research machine learning engineer salaries, compare compensation across countries, evaluate career progression, and understand how taxes and cost of living affect take-home earnings.",
    hubCta: "View Salary by Country",
    hubCtaHref: "/machine-learning-engineer-salary-by-country",
    hubSecondaryCta: "Salary Index 2026",
    hubSecondaryCtaHref: "/research/machine-learning-engineer-salary-index-2026",
    salaryCards: [
      { label: "Global Average", value: "$130,000 (US)" },
      { label: "Avg Entry Level", value: "$80,000 (US)" },
      { label: "Highest Experienced", value: "$190,000 (US)" },
    ],
    salaryCardsHub: [
      { label: "US Average Salary", value: "$130,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$80,000 (US)" },
    ],
    salaryCardBest: [
      { label: "1st - United States", value: "$130,000" },
      { label: "2nd - Australia", value: "A$120,000" },
      { label: "3rd - Canada", value: "C$90,000" },
    ],
    cardTaxBest: [
      { label: "Best After-Tax", value: "US ($101,400)" },
      { label: "Highest Gross", value: "US ($130,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    cardPppBest: [
      { label: "Best PPP Value", value: "India (4x multiplier)" },
      { label: "Strong PPP", value: "Australia" },
      { label: "Moderate PPP", value: "US, Canada" },
    ],
    cardSalaryByCountry: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$130,000 (US)" },
      { label: "Wide Range", value: "$7K-$210K+" },
    ],
    hubTakeaways: [
      { title: "US Leads in ML Compensation", description: "The United States offers the highest ML engineer salaries at $130,000, with top-tier companies paying $200K+ total comp." },
      { title: "Deep Learning Premium", description: "ML engineers with deep learning expertise command higher salaries than general ML practitioners." },
      { title: "Canada Emerging as AI Hub", description: "Toronto and Montreal have become major AI research hubs with competitive compensation." },
    ],
    salaryTakeaways: [
      { title: "Strong Demand for ML Skills", description: "Machine learning engineers are in high demand across all major economies, commanding premium salaries." },
      { title: "Equity Significant in Total Comp", description: "ML roles at AI-focused companies often include substantial equity packages." },
    ],
    highestTakeaways: [
      { title: "US Dominates ML Compensation", description: "The US offers the highest ML engineer salaries at $130,000 average." },
      { title: "Australia Second with Lifestyle Premium", description: "Australia offers A$120,000 with strong work-life balance." },
    ],
    bestTakeaways: [
      { title: "United States - Maximum Compensation", description: "Highest salaries and most ML research roles." },
      { title: "Canada - Best for Immigration + Career", description: "Growing AI ecosystem with accessible pathways." },
    ],
    countrySummary: { us: "Highest ML salaries globally", uk: "Strong AI/ML sector", ca: "Growing ML research hubs", au: "Competitive ML salaries", nz: "Emerging ML sector", sg: "Strong fintech ML roles", in: "Large ML talent pool" },
    countrySummaryLong: { us: "Highest ML salaries globally. Average $130K.", uk: "Strong AI/ML sector. Average £60K.", ca: "Growing ML hubs. Average C$90K.", au: "Competitive ML pay. Average A$120K.", nz: "Emerging ML sector. Average NZ$100K.", sg: "Fintech ML roles. Average S$82K.", in: "Large ML talent pool. Average ₹16L." },
  },
  {
    slug: "cloud-engineer",
    name: "Cloud Engineer",
    plural: "Cloud Engineers",
    tech: true,
    desc: "Cloud engineers design, implement, and manage cloud infrastructure and services across major platforms like AWS, Azure, and GCP.",
    hubBadge: "Career Intelligence",
    hubTitle: "Cloud Engineer Salary & Career Intelligence",
    hubDesc: "Research cloud engineer salaries, compare compensation across countries, evaluate career progression, and understand how cloud computing expertise affects earnings.",
    hubCta: "View Salary by Country",
    hubCtaHref: "/cloud-engineer-salary-by-country",
    hubSecondaryCta: "Salary Index 2026",
    hubSecondaryCtaHref: "/research/cloud-engineer-salary-index-2026",
    salaryCards: [
      { label: "Global Average", value: "$115,000 (US)" },
      { label: "Avg Entry Level", value: "$70,000 (US)" },
      { label: "Highest Experienced", value: "$170,000 (US)" },
    ],
    salaryCardsHub: [
      { label: "US Average Salary", value: "$115,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$70,000 (US)" },
    ],
    salaryCardBest: [
      { label: "1st - United States", value: "$115,000" },
      { label: "2nd - Australia", value: "A$105,000" },
      { label: "3rd - Canada", value: "C$82,000" },
    ],
    cardTaxBest: [
      { label: "Best After-Tax", value: "US ($89,700)" },
      { label: "Highest Gross", value: "US ($115,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    cardPppBest: [
      { label: "Best PPP Value", value: "India (4x multiplier)" },
      { label: "Strong PPP", value: "Australia" },
      { label: "Moderate PPP", value: "US, Canada" },
    ],
    cardSalaryByCountry: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$115,000 (US)" },
      { label: "Wide Range", value: "$6K-$190K+" },
    ],
    hubTakeaways: [
      { title: "Cloud Skills in High Demand", description: "Cloud engineers are essential for digital transformation, with demand growing as enterprises migrate to cloud infrastructure." },
      { title: "Certification Premium", description: "AWS, Azure, and GCP certifications can increase cloud engineer salaries by 15-25%." },
      { title: "Remote-First Industry", description: "Cloud engineering is inherently remote-friendly, offering geographic flexibility." },
    ],
    salaryTakeaways: [
      { title: "Strong Global Demand", description: "Cloud engineers are in demand across all analyzed economies as cloud adoption continues." },
      { title: "Certifications Boost Earnings", description: "Professional-level cloud certifications significantly impact salary potential." },
    ],
    highestTakeaways: [
      { title: "US Leads Cloud Compensation", description: "The US offers $115,000 average for cloud engineers." },
      { title: "Australia Strong Second", description: "Australia at A$105,000 with excellent work-life balance." },
    ],
    bestTakeaways: [
      { title: "United States - Maximum Opportunity", description: "Largest cloud job market with highest compensation." },
      { title: "Remote Work Advantage", description: "Cloud roles are highly remote-friendly across all countries." },
    ],
    countrySummary: { us: "Highest cloud salaries", uk: "Growing cloud adoption", ca: "Cloud migration demand", au: "Competitive cloud pay", nz: "Emerging cloud sector", sg: "Regional cloud hub", in: "Large cloud workforce" },
    countrySummaryLong: { us: "Highest cloud salaries globally. Average $115K.", uk: "Strong cloud adoption. Average £50K.", ca: "Cloud migration demand. Average C$82K.", au: "Competitive cloud pay. Average A$105K.", nz: "Emerging cloud sector. Average NZ$85K.", sg: "Regional cloud hub. Average S$68K.", in: "Large cloud workforce. Average ₹10L." },
  },
  {
    slug: "cybersecurity-analyst",
    name: "Cybersecurity Analyst",
    plural: "Cybersecurity Analysts",
    tech: true,
    desc: "Cybersecurity analysts protect organizations from cyber threats, monitoring systems for security breaches and implementing protective measures.",
    hubBadge: "Career Intelligence",
    hubTitle: "Cybersecurity Analyst Salary & Career Intelligence",
    hubDesc: "Research cybersecurity analyst salaries, compare compensation across countries, evaluate career progression, and understand how security expertise affects earnings.",
    hubCta: "View Salary by Country",
    hubCtaHref: "/cybersecurity-analyst-salary-by-country",
    hubSecondaryCta: "Salary Index 2026",
    hubSecondaryCtaHref: "/research/cybersecurity-analyst-salary-index-2026",
    salaryCards: [
      { label: "Global Average", value: "$105,000 (US)" },
      { label: "Avg Entry Level", value: "$65,000 (US)" },
      { label: "Highest Experienced", value: "$160,000 (US)" },
    ],
    salaryCardsHub: [
      { label: "US Average Salary", value: "$105,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$65,000 (US)" },
    ],
    salaryCardBest: [
      { label: "1st - United States", value: "$105,000" },
      { label: "2nd - Australia", value: "A$100,000" },
      { label: "3rd - Canada", value: "C$78,000" },
    ],
    cardTaxBest: [
      { label: "Best After-Tax", value: "US ($81,900)" },
      { label: "Highest Gross", value: "US ($105,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    cardPppBest: [
      { label: "Best PPP Value", value: "India (4x multiplier)" },
      { label: "Strong PPP", value: "Australia" },
      { label: "Moderate PPP", value: "US, Canada" },
    ],
    cardSalaryByCountry: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$105,000 (US)" },
      { label: "Wide Range", value: "$5K-$175K+" },
    ],
    hubTakeaways: [
      { title: "Critical Demand for Security", description: "Cybersecurity analysts are in critical demand as cyber threats grow, with the field projected to grow 35% by 2031." },
      { title: "Certification-Driven Pay", description: "CISSP, CEH, and CISM certifications can increase salaries by 20-30%." },
      { title: "Government & Finance Premium", description: "Sectors with sensitive data pay premium salaries for cybersecurity expertise." },
    ],
    salaryTakeaways: [
      { title: "Rapidly Growing Field", description: "Cybersecurity is one of the fastest-growing tech fields with strong compensation growth." },
      { title: "Sector Matters", description: "Finance and tech pay premium cybersecurity salaries." },
    ],
    highestTakeaways: [
      { title: "US Leads Security Compensation", description: "The US offers $105,000 for cybersecurity analysts." },
      { title: "Australia Competitive", description: "Australia at A$100,000 with strong demand." },
    ],
    bestTakeaways: [
      { title: "United States - Maximum Earnings", description: "Highest cybersecurity salaries with most job openings." },
      { title: "Government Roles Worldwide", description: "Public sector cybersecurity offers stable careers globally." },
    ],
    countrySummary: { us: "Highest cybersecurity salaries", uk: "Strong security sector", ca: "Growing cybersecurity demand", au: "Competitive security pay", nz: "Emerging security sector", sg: "Regional security hub", in: "Growing cybersecurity workforce" },
    countrySummaryLong: { us: "Highest cybersecurity salaries. Average $105K.", uk: "Strong security sector. Average £48K.", ca: "Growing demand. Average C$78K.", au: "Competitive pay. Average A$100K.", nz: "Emerging sector. Average NZ$80K.", sg: "Regional security hub. Average S$65K.", in: "Growing workforce. Average ₹9L." },
  },
  {
    slug: "devops-engineer",
    name: "DevOps Engineer",
    plural: "DevOps Engineers",
    tech: true,
    desc: "DevOps engineers bridge development and operations, automating deployment pipelines and managing cloud infrastructure for continuous delivery.",
    hubBadge: "Career Intelligence",
    hubTitle: "DevOps Engineer Salary & Career Intelligence",
    hubDesc: "Research DevOps engineer salaries, compare compensation across countries, evaluate career progression, and understand how infrastructure automation skills affect earnings.",
    hubCta: "View Salary by Country",
    hubCtaHref: "/devops-engineer-salary-by-country",
    hubSecondaryCta: "Salary Index 2026",
    hubSecondaryCtaHref: "/research/devops-engineer-salary-index-2026",
    salaryCards: [
      { label: "Global Average", value: "$125,000 (US)" },
      { label: "Avg Entry Level", value: "$75,000 (US)" },
      { label: "Highest Experienced", value: "$180,000 (US)" },
    ],
    salaryCardsHub: [
      { label: "US Average Salary", value: "$125,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$75,000 (US)" },
    ],
    salaryCardBest: [
      { label: "1st - United States", value: "$125,000" },
      { label: "2nd - Australia", value: "A$115,000" },
      { label: "3rd - Canada", value: "C$88,000" },
    ],
    cardTaxBest: [
      { label: "Best After-Tax", value: "US ($97,500)" },
      { label: "Highest Gross", value: "US ($125,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    cardPppBest: [
      { label: "Best PPP Value", value: "India (4x multiplier)" },
      { label: "Strong PPP", value: "Australia" },
      { label: "Moderate PPP", value: "US, Canada" },
    ],
    cardSalaryByCountry: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$125,000 (US)" },
      { label: "Wide Range", value: "$6K-$200K+" },
    ],
    hubTakeaways: [
      { title: "Critical Infrastructure Role", description: "DevOps engineers are essential for modern software delivery, commanding premium salaries for automation and infrastructure expertise." },
      { title: "SRE Overlap Premium", description: "DevOps engineers with SRE (Site Reliability Engineering) skills command higher compensation." },
      { title: "Cloud-Native Expertise Valued", description: "Kubernetes, Docker, and Terraform expertise significantly increases earning potential." },
    ],
    salaryTakeaways: [
      { title: "Premium Over Traditional SE", description: "DevOps engineers often earn 5-10% more than traditional software engineers due to specialized infrastructure skills." },
      { title: "Multi-Cloud Expertise Premium", description: "Experience with multiple cloud platforms (AWS, Azure, GCP) commands higher salaries." },
    ],
    highestTakeaways: [
      { title: "US Leads DevOps Compensation", description: "The US offers $125,000 average for DevOps engineers." },
      { title: "Australia Strong Second", description: "Australia at A$115,000 with excellent lifestyle benefits." },
    ],
    bestTakeaways: [
      { title: "United States - Maximum Pay", description: "Highest DevOps salaries with most job opportunities." },
      { title: "Remote Work Standard", description: "DevOps roles are highly remote-friendly across all markets." },
    ],
    countrySummary: { us: "Highest DevOps salaries", uk: "Strong DevOps adoption", ca: "Growing DevOps demand", au: "Competitive DevOps pay", nz: "Emerging DevOps sector", sg: "Regional tech hub", in: "Large DevOps workforce" },
    countrySummaryLong: { us: "Highest DevOps salaries. Average $125K.", uk: "Strong adoption. Average £55K.", ca: "Growing demand. Average C$88K.", au: "Competitive pay. Average A$115K.", nz: "Emerging sector. Average NZ$90K.", sg: "Tech hub. Average S$72K.", in: "Large workforce. Average ₹11L." },
  },
  {
    slug: "financial-analyst",
    name: "Financial Analyst",
    plural: "Financial Analysts",
    tech: false,
    desc: "Financial analysts evaluate investment opportunities, analyze financial data, and provide recommendations to businesses and individuals.",
    hubBadge: "Career Intelligence",
    hubTitle: "Financial Analyst Salary & Career Intelligence",
    hubDesc: "Research financial analyst salaries, compare compensation across countries, evaluate career progression, and understand how finance expertise affects earnings.",
    hubCta: "View Salary by Country",
    hubCtaHref: "/financial-analyst-salary-by-country",
    hubSecondaryCta: "Salary Index 2026",
    hubSecondaryCtaHref: "/research/financial-analyst-salary-index-2026",
    salaryCards: [
      { label: "Global Average", value: "$75,000 (US)" },
      { label: "Avg Entry Level", value: "$50,000 (US)" },
      { label: "Highest Experienced", value: "$115,000 (US)" },
    ],
    salaryCardsHub: [
      { label: "US Average Salary", value: "$75,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$50,000 (US)" },
    ],
    salaryCardBest: [
      { label: "1st - United States", value: "$75,000" },
      { label: "2nd - Australia", value: "A$80,000" },
      { label: "3rd - Canada", value: "C$62,000" },
    ],
    cardTaxBest: [
      { label: "Best After-Tax", value: "US ($58,500)" },
      { label: "Highest Gross", value: "US ($75,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    cardPppBest: [
      { label: "Best PPP Value", value: "India (4x multiplier)" },
      { label: "Strong PPP", value: "Australia" },
      { label: "Moderate PPP", value: "US, Canada" },
    ],
    cardSalaryByCountry: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$75,000 (US)" },
      { label: "Wide Range", value: "$4K-$140K+" },
    ],
    hubTakeaways: [
      { title: "Finance Hub Premium", description: "Financial analysts in major finance hubs like New York, London, and Singapore earn premium salaries." },
      { title: "CFA Certification Impact", description: "Chartered Financial Analyst (CFA) certification can increase salaries by 15-25%." },
      { title: "Sector Diversification", description: "Financial analysts work across banking, insurance, corporate finance, and investment management." },
    ],
    salaryTakeaways: [
      { title: "Broad Career Options", description: "Financial analysts work across multiple sectors with varying compensation." },
      { title: "Location Matters Significantly", description: "Finance hub cities command significantly higher salaries." },
    ],
    highestTakeaways: [
      { title: "US Leads Finance Pay", description: "The US offers $75,000 average for financial analysts." },
      { title: "London Finance Premium", description: "London commands premium UK finance salaries." },
    ],
    bestTakeaways: [
      { title: "United States - Highest Pay", description: "Largest finance job market with highest compensation." },
      { title: "Singapore - Asian Finance Hub", description: "Competitive salaries and extremely low taxes." },
    ],
    countrySummary: { us: "Highest finance salaries", uk: "London finance hub", ca: "Growing finance sector", au: "Competitive finance pay", nz: "Smaller finance market", sg: "Asian finance hub", in: "Growing finance sector" },
    countrySummaryLong: { us: "Highest finance salaries. Average $75K.", uk: "London finance hub. Average £40K.", ca: "Growing sector. Average C$62K.", au: "Competitive pay. Average A$80K.", nz: "Smaller market. Average NZ$62K.", sg: "Asian finance hub. Average S$50K.", in: "Growing sector. Average ₹6L." },
  },
  {
    slug: "business-analyst",
    name: "Business Analyst",
    plural: "Business Analysts",
    tech: false,
    desc: "Business analysts bridge the gap between business needs and technology solutions, analyzing processes and recommending improvements.",
    hubBadge: "Career Intelligence",
    hubTitle: "Business Analyst Salary & Career Intelligence",
    hubDesc: "Research business analyst salaries, compare compensation across countries, evaluate career progression, and understand how business analysis skills affect earnings.",
    hubCta: "View Salary by Country",
    hubCtaHref: "/business-analyst-salary-by-country",
    hubSecondaryCta: "Salary Index 2026",
    hubSecondaryCtaHref: "/research/business-analyst-salary-index-2026",
    salaryCards: [
      { label: "Global Average", value: "$70,000 (US)" },
      { label: "Avg Entry Level", value: "$45,000 (US)" },
      { label: "Highest Experienced", value: "$110,000 (US)" },
    ],
    salaryCardsHub: [
      { label: "US Average Salary", value: "$70,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$45,000 (US)" },
    ],
    salaryCardBest: [
      { label: "1st - United States", value: "$70,000" },
      { label: "2nd - Australia", value: "A$75,000" },
      { label: "3rd - Canada", value: "C$58,000" },
    ],
    cardTaxBest: [
      { label: "Best After-Tax", value: "US ($54,600)" },
      { label: "Highest Gross", value: "US ($70,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    cardPppBest: [
      { label: "Best PPP Value", value: "India (4x multiplier)" },
      { label: "Strong PPP", value: "Australia" },
      { label: "Moderate PPP", value: "US, Canada" },
    ],
    cardSalaryByCountry: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$70,000 (US)" },
      { label: "Wide Range", value: "$4K-$130K+" },
    ],
    hubTakeaways: [
      { title: "Versatile Career Path", description: "Business analysts work across technology, finance, healthcare, and consulting sectors." },
      { title: "CBAP Certification Boost", description: "Certified Business Analysis Professional (CBAP) certification can increase earnings." },
      { title: "Path to Product Management", description: "Many business analysts transition into product management roles." },
    ],
    salaryTakeaways: [
      { title: "Cross-Industry Demand", description: "Business analysts are needed across virtually all industries." },
      { title: "Technical BA Premium", description: "Business analysts with technical skills command higher salaries." },
    ],
    highestTakeaways: [
      { title: "US Leads BA Compensation", description: "The US offers $70,000 average for business analysts." },
      { title: "Australia Competitive", description: "Australia at A$75,000 with strong demand." },
    ],
    bestTakeaways: [
      { title: "United States - Broadest Market", description: "Largest BA job market across all industries." },
      { title: "Entry Path to PM", description: "BA roles provide strong foundation for product management careers." },
    ],
    countrySummary: { us: "Highest BA salaries", uk: "Strong consulting sector", ca: "Growing BA demand", au: "Competitive BA pay", nz: "Smaller BA market", sg: "Regional consulting hub", in: "Large BA workforce" },
    countrySummaryLong: { us: "Highest BA salaries. Average $70K.", uk: "Strong consulting. Average £38K.", ca: "Growing demand. Average C$58K.", au: "Competitive pay. Average A$75K.", nz: "Smaller market. Average NZ$58K.", sg: "Consulting hub. Average S$48K.", in: "Large workforce. Average ₹5.5L." },
  },
  {
    slug: "project-manager",
    name: "Project Manager",
    plural: "Project Managers",
    tech: false,
    desc: "Project managers plan, execute, and close projects, coordinating teams and resources to deliver results on time and within budget.",
    hubBadge: "Career Intelligence",
    hubTitle: "Project Manager Salary & Career Intelligence",
    hubDesc: "Research project manager salaries, compare compensation across countries, evaluate career progression, and understand how project management skills affect earnings.",
    hubCta: "View Salary by Country",
    hubCtaHref: "/project-manager-salary-by-country",
    hubSecondaryCta: "Salary Index 2026",
    hubSecondaryCtaHref: "/research/project-manager-salary-index-2026",
    salaryCards: [
      { label: "Global Average", value: "$85,000 (US)" },
      { label: "Avg Entry Level", value: "$55,000 (US)" },
      { label: "Highest Experienced", value: "$130,000 (US)" },
    ],
    salaryCardsHub: [
      { label: "US Average Salary", value: "$85,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$55,000 (US)" },
    ],
    salaryCardBest: [
      { label: "1st - United States", value: "$85,000" },
      { label: "2nd - Australia", value: "A$90,000" },
      { label: "3rd - Canada", value: "C$68,000" },
    ],
    cardTaxBest: [
      { label: "Best After-Tax", value: "US ($66,300)" },
      { label: "Highest Gross", value: "US ($85,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    cardPppBest: [
      { label: "Best PPP Value", value: "India (4x multiplier)" },
      { label: "Strong PPP", value: "Australia" },
      { label: "Moderate PPP", value: "US, Canada" },
    ],
    cardSalaryByCountry: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$85,000 (US)" },
      { label: "Wide Range", value: "$5K-$150K+" },
    ],
    hubTakeaways: [
      { title: "PMP Certification Premium", description: "Project Management Professional (PMP) certification can increase salaries by 20%." },
      { title: "Industry Matters", description: "IT and construction project managers earn premium salaries compared to other sectors." },
      { title: "Path to Program Management", description: "Experienced PMs can advance to program and portfolio management roles." },
    ],
    salaryTakeaways: [
      { title: "Cross-Industry Role", description: "Project managers work across technology, construction, healthcare, and finance." },
      { title: "Certification Matters", description: "PMP, PRINCE2, and Agile certifications significantly impact earnings." },
    ],
    highestTakeaways: [
      { title: "US Leads PM Compensation", description: "The US offers $85,000 average for project managers." },
      { title: "Australia Top International Market", description: "Australia at A$90,000 with strong PM demand." },
    ],
    bestTakeaways: [
      { title: "United States - Maximum Pay", description: "Highest PM salaries with most industry options." },
      { title: "IT PM vs Construction PM", description: "IT PMs earn 10-15% more than construction PMs on average." },
    ],
    countrySummary: { us: "Highest PM salaries", uk: "Strong PM profession", ca: "Growing PM demand", au: "Competitive PM pay", nz: "Smaller PM market", sg: "Regional PM hub", in: "Large PM workforce" },
    countrySummaryLong: { us: "Highest PM salaries. Average $85K.", uk: "Strong profession. Average £42K.", ca: "Growing demand. Average C$68K.", au: "Competitive pay. Average A$90K.", nz: "Smaller market. Average NZ$70K.", sg: "Regional hub. Average S$55K.", in: "Large workforce. Average ₹8L." },
  },
  {
    slug: "solutions-architect",
    name: "Solutions Architect",
    plural: "Solutions Architects",
    tech: true,
    desc: "Solutions architects design complex technology systems, defining architecture strategies and ensuring technical solutions align with business goals.",
    hubBadge: "Career Intelligence",
    hubTitle: "Solutions Architect Salary & Career Intelligence",
    hubDesc: "Research solutions architect salaries, compare compensation across countries, evaluate career progression, and understand how architecture expertise affects earnings.",
    hubCta: "View Salary by Country",
    hubCtaHref: "/solutions-architect-salary-by-country",
    hubSecondaryCta: "Salary Index 2026",
    hubSecondaryCtaHref: "/research/solutions-architect-salary-index-2026",
    salaryCards: [
      { label: "Global Average", value: "$140,000 (US)" },
      { label: "Avg Entry Level", value: "$90,000 (US)" },
      { label: "Highest Experienced", value: "$200,000 (US)" },
    ],
    salaryCardsHub: [
      { label: "US Average Salary", value: "$140,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$90,000 (US)" },
    ],
    salaryCardBest: [
      { label: "1st - United States", value: "$140,000" },
      { label: "2nd - Australia", value: "A$135,000" },
      { label: "3rd - Canada", value: "C$105,000" },
    ],
    cardTaxBest: [
      { label: "Best After-Tax", value: "US ($109,200)" },
      { label: "Highest Gross", value: "US ($140,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    cardPppBest: [
      { label: "Best PPP Value", value: "India (4x multiplier)" },
      { label: "Strong PPP", value: "Australia" },
      { label: "Moderate PPP", value: "US, Canada" },
    ],
    cardSalaryByCountry: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$140,000 (US)" },
      { label: "Wide Range", value: "$8K-$250K+" },
    ],
    hubTakeaways: [
      { title: "Senior Technical Role", description: "Solutions architects are senior technical roles commanding premium salaries across all markets." },
      { title: "Cloud Platform Certifications", description: "AWS Solutions Architect and Azure Architect certifications are highly valued." },
      { title: "Pre-Sales Premium", description: "Solutions architects in pre-sales roles often earn additional commission and bonuses." },
    ],
    salaryTakeaways: [
      { title: "Highest-Paid Tech Role", description: "Solutions architects are among the highest-paid technology professionals globally." },
      { title: "Experience-Driven Pay", description: "10+ years experience with architecture design commands the highest compensation." },
    ],
    highestTakeaways: [
      { title: "US Leads Architecture Pay", description: "The US offers $140,000 average for solutions architects." },
      { title: "Global Premium Role", description: "Solutions architects earn premium salaries in all major economies." },
    ],
    bestTakeaways: [
      { title: "United States - Maximum Compensation", description: "Highest SA salaries with broadest opportunity range." },
      { title: "Global Demand", description: "Solutions architects in high demand across all technology markets." },
    ],
    countrySummary: { us: "Highest SA salaries", uk: "Strong architecture roles", ca: "Growing SA demand", au: "Competitive SA pay", nz: "Premium NZ tech role", sg: "Regional architecture hub", in: "Growing SA roles" },
    countrySummaryLong: { us: "Highest SA salaries. Average $140K.", uk: "Strong roles. Average £65K.", ca: "Growing demand. Average C$105K.", au: "Competitive pay. Average A$135K.", nz: "Premium role. Average NZ$115K.", sg: "Regional hub. Average S$90K.", in: "Growing roles. Average ₹22L." },
  },
  {
    slug: "data-engineer",
    name: "Data Engineer",
    plural: "Data Engineers",
    tech: true,
    desc: "Data engineers build and maintain data pipelines, ETL processes, and data infrastructure that enables data analysis and machine learning.",
    hubBadge: "Career Intelligence",
    hubTitle: "Data Engineer Salary & Career Intelligence",
    hubDesc: "Research data engineer salaries, compare compensation across countries, evaluate career progression, and understand how data infrastructure skills affect earnings.",
    hubCta: "View Salary by Country",
    hubCtaHref: "/data-engineer-salary-by-country",
    hubSecondaryCta: "Salary Index 2026",
    hubSecondaryCtaHref: "/research/data-engineer-salary-index-2026",
    salaryCards: [
      { label: "Global Average", value: "$115,000 (US)" },
      { label: "Avg Entry Level", value: "$70,000 (US)" },
      { label: "Highest Experienced", value: "$170,000 (US)" },
    ],
    salaryCardsHub: [
      { label: "US Average Salary", value: "$115,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$70,000 (US)" },
    ],
    salaryCardBest: [
      { label: "1st - United States", value: "$115,000" },
      { label: "2nd - Australia", value: "A$108,000" },
      { label: "3rd - Canada", value: "C$82,000" },
    ],
    cardTaxBest: [
      { label: "Best After-Tax", value: "US ($89,700)" },
      { label: "Highest Gross", value: "US ($115,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    cardPppBest: [
      { label: "Best PPP Value", value: "India (4x multiplier)" },
      { label: "Strong PPP", value: "Australia" },
      { label: "Moderate PPP", value: "US, Canada" },
    ],
    cardSalaryByCountry: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$115,000 (US)" },
      { label: "Wide Range", value: "$6K-$190K+" },
    ],
    hubTakeaways: [
      { title: "Foundation of Data Science", description: "Data engineers build the infrastructure that enables data science and analytics, with strong demand as organizations invest in data." },
      { title: "Big Data Skills Premium", description: "Expertise in Spark, Kafka, and modern data platforms commands higher compensation." },
      { title: "Cloud Data Engineering Growth", description: "Cloud-native data engineering (Snowflake, BigQuery, Redshift) is the fastest-growing specialization." },
    ],
    salaryTakeaways: [
      { title: "Essential Data Role", description: "Data engineers are foundational to data-driven organizations with strong demand." },
      { title: "Cloud vs On-Prem Premium", description: "Cloud data engineering skills command 10-15% premium over traditional on-premise." },
    ],
    highestTakeaways: [
      { title: "US Leads Data Engineering", description: "The US offers $115,000 average for data engineers." },
      { title: "Australia Second", description: "Australia at A$108,000 with strong data infrastructure demand." },
    ],
    bestTakeaways: [
      { title: "United States - Maximum Pay", description: "Highest data engineering salaries with largest job market." },
      { title: "Growing Global Demand", description: "Data engineering roles growing across all analyzed economies." },
    ],
    countrySummary: { us: "Highest DE salaries", uk: "Strong data sector", ca: "Growing DE demand", au: "Competitive DE pay", nz: "Emerging DE sector", sg: "Regional data hub", in: "Large DE workforce" },
    countrySummaryLong: { us: "Highest DE salaries. Average $115K.", uk: "Strong data sector. Average £52K.", ca: "Growing demand. Average C$82K.", au: "Competitive pay. Average A$108K.", nz: "Emerging sector. Average NZ$88K.", sg: "Regional data hub. Average S$70K.", in: "Large workforce. Average ₹10L." },
  },
]

const SALARIES = {
  "ai-engineer": { us: { average: 135000, entryLevel: 85000, experienced: 200000, rangeLow: 70000, rangeHigh: 250000 }, uk: { average: 62000, entryLevel: 35000, experienced: 95000, rangeLow: 30000, rangeHigh: 120000 }, au: { average: 125000, entryLevel: 75000, experienced: 180000, rangeLow: 65000, rangeHigh: 220000 }, ca: { average: 95000, entryLevel: 60000, experienced: 145000, rangeLow: 52000, rangeHigh: 175000 }, nz: { average: 105000, entryLevel: 65000, experienced: 155000, rangeLow: 55000, rangeHigh: 185000 }, in: { average: 1800000, entryLevel: 600000, experienced: 3500000, rangeLow: 500000, rangeHigh: 4500000 }, sg: { average: 85000, entryLevel: 50000, experienced: 130000, rangeLow: 42000, rangeHigh: 160000 } },
  "machine-learning-engineer": { us: { average: 130000, entryLevel: 80000, experienced: 190000, rangeLow: 68000, rangeHigh: 240000 }, uk: { average: 60000, entryLevel: 34000, experienced: 92000, rangeLow: 29000, rangeHigh: 115000 }, au: { average: 120000, entryLevel: 72000, experienced: 175000, rangeLow: 62000, rangeHigh: 210000 }, ca: { average: 90000, entryLevel: 58000, experienced: 140000, rangeLow: 50000, rangeHigh: 170000 }, nz: { average: 100000, entryLevel: 62000, experienced: 150000, rangeLow: 53000, rangeHigh: 180000 }, in: { average: 1600000, entryLevel: 500000, experienced: 3200000, rangeLow: 400000, rangeHigh: 4000000 }, sg: { average: 82000, entryLevel: 48000, experienced: 125000, rangeLow: 40000, rangeHigh: 155000 } },
  "cloud-engineer": { us: { average: 115000, entryLevel: 70000, experienced: 170000, rangeLow: 60000, rangeHigh: 210000 }, uk: { average: 50000, entryLevel: 28000, experienced: 78000, rangeLow: 24000, rangeHigh: 95000 }, au: { average: 105000, entryLevel: 65000, experienced: 155000, rangeLow: 55000, rangeHigh: 190000 }, ca: { average: 82000, entryLevel: 50000, experienced: 125000, rangeLow: 45000, rangeHigh: 150000 }, nz: { average: 85000, entryLevel: 52000, experienced: 125000, rangeLow: 45000, rangeHigh: 150000 }, in: { average: 1000000, entryLevel: 350000, experienced: 2000000, rangeLow: 280000, rangeHigh: 2500000 }, sg: { average: 68000, entryLevel: 38000, experienced: 105000, rangeLow: 32000, rangeHigh: 130000 } },
  "cybersecurity-analyst": { us: { average: 105000, entryLevel: 65000, experienced: 160000, rangeLow: 55000, rangeHigh: 195000 }, uk: { average: 48000, entryLevel: 28000, experienced: 75000, rangeLow: 24000, rangeHigh: 90000 }, au: { average: 100000, entryLevel: 60000, experienced: 150000, rangeLow: 52000, rangeHigh: 180000 }, ca: { average: 78000, entryLevel: 48000, experienced: 120000, rangeLow: 42000, rangeHigh: 145000 }, nz: { average: 80000, entryLevel: 50000, experienced: 120000, rangeLow: 42000, rangeHigh: 145000 }, in: { average: 900000, entryLevel: 300000, experienced: 1800000, rangeLow: 250000, rangeHigh: 2200000 }, sg: { average: 65000, entryLevel: 36000, experienced: 100000, rangeLow: 30000, rangeHigh: 125000 } },
  "devops-engineer": { us: { average: 125000, entryLevel: 75000, experienced: 180000, rangeLow: 65000, rangeHigh: 220000 }, uk: { average: 55000, entryLevel: 30000, experienced: 85000, rangeLow: 26000, rangeHigh: 105000 }, au: { average: 115000, entryLevel: 68000, experienced: 165000, rangeLow: 58000, rangeHigh: 200000 }, ca: { average: 88000, entryLevel: 52000, experienced: 135000, rangeLow: 45000, rangeHigh: 160000 }, nz: { average: 90000, entryLevel: 55000, experienced: 135000, rangeLow: 48000, rangeHigh: 160000 }, in: { average: 1100000, entryLevel: 400000, experienced: 2200000, rangeLow: 300000, rangeHigh: 2800000 }, sg: { average: 72000, entryLevel: 42000, experienced: 110000, rangeLow: 36000, rangeHigh: 140000 } },
  "financial-analyst": { us: { average: 75000, entryLevel: 50000, experienced: 115000, rangeLow: 42000, rangeHigh: 140000 }, uk: { average: 40000, entryLevel: 25000, experienced: 65000, rangeLow: 22000, rangeHigh: 80000 }, au: { average: 80000, entryLevel: 50000, experienced: 120000, rangeLow: 45000, rangeHigh: 140000 }, ca: { average: 62000, entryLevel: 40000, experienced: 95000, rangeLow: 35000, rangeHigh: 115000 }, nz: { average: 62000, entryLevel: 40000, experienced: 90000, rangeLow: 35000, rangeHigh: 110000 }, in: { average: 600000, entryLevel: 300000, experienced: 1200000, rangeLow: 250000, rangeHigh: 1500000 }, sg: { average: 50000, entryLevel: 30000, experienced: 80000, rangeLow: 26000, rangeHigh: 100000 } },
  "business-analyst": { us: { average: 70000, entryLevel: 45000, experienced: 110000, rangeLow: 38000, rangeHigh: 130000 }, uk: { average: 38000, entryLevel: 24000, experienced: 60000, rangeLow: 20000, rangeHigh: 75000 }, au: { average: 75000, entryLevel: 48000, experienced: 115000, rangeLow: 42000, rangeHigh: 135000 }, ca: { average: 58000, entryLevel: 38000, experienced: 90000, rangeLow: 34000, rangeHigh: 110000 }, nz: { average: 58000, entryLevel: 38000, experienced: 88000, rangeLow: 34000, rangeHigh: 105000 }, in: { average: 550000, entryLevel: 280000, experienced: 1100000, rangeLow: 220000, rangeHigh: 1400000 }, sg: { average: 48000, entryLevel: 28000, experienced: 75000, rangeLow: 24000, rangeHigh: 95000 } },
  "project-manager": { us: { average: 85000, entryLevel: 55000, experienced: 130000, rangeLow: 48000, rangeHigh: 155000 }, uk: { average: 42000, entryLevel: 26000, experienced: 68000, rangeLow: 22000, rangeHigh: 85000 }, au: { average: 90000, entryLevel: 55000, experienced: 135000, rangeLow: 48000, rangeHigh: 160000 }, ca: { average: 68000, entryLevel: 42000, experienced: 105000, rangeLow: 38000, rangeHigh: 125000 }, nz: { average: 70000, entryLevel: 45000, experienced: 105000, rangeLow: 40000, rangeHigh: 125000 }, in: { average: 800000, entryLevel: 350000, experienced: 1600000, rangeLow: 280000, rangeHigh: 2000000 }, sg: { average: 55000, entryLevel: 32000, experienced: 85000, rangeLow: 28000, rangeHigh: 105000 } },
  "solutions-architect": { us: { average: 140000, entryLevel: 90000, experienced: 200000, rangeLow: 78000, rangeHigh: 250000 }, uk: { average: 65000, entryLevel: 38000, experienced: 100000, rangeLow: 32000, rangeHigh: 125000 }, au: { average: 135000, entryLevel: 80000, experienced: 195000, rangeLow: 70000, rangeHigh: 240000 }, ca: { average: 105000, entryLevel: 65000, experienced: 155000, rangeLow: 55000, rangeHigh: 190000 }, nz: { average: 115000, entryLevel: 70000, experienced: 165000, rangeLow: 60000, rangeHigh: 200000 }, in: { average: 2200000, entryLevel: 800000, experienced: 4000000, rangeLow: 600000, rangeHigh: 5000000 }, sg: { average: 90000, entryLevel: 50000, experienced: 140000, rangeLow: 42000, rangeHigh: 170000 } },
  "data-engineer": { us: { average: 115000, entryLevel: 70000, experienced: 170000, rangeLow: 60000, rangeHigh: 210000 }, uk: { average: 52000, entryLevel: 30000, experienced: 80000, rangeLow: 26000, rangeHigh: 100000 }, au: { average: 108000, entryLevel: 65000, experienced: 158000, rangeLow: 55000, rangeHigh: 195000 }, ca: { average: 82000, entryLevel: 50000, experienced: 125000, rangeLow: 45000, rangeHigh: 150000 }, nz: { average: 88000, entryLevel: 55000, experienced: 130000, rangeLow: 48000, rangeHigh: 155000 }, in: { average: 1000000, entryLevel: 350000, experienced: 2000000, rangeLow: 280000, rangeHigh: 2500000 }, sg: { average: 70000, entryLevel: 40000, experienced: 108000, rangeLow: 34000, rangeHigh: 135000 } },
}

const COUNTRY_NAMES = { us: "United States", uk: "United Kingdom", ca: "Canada", au: "Australia", nz: "New Zealand", sg: "Singapore", in: "India" }
const COUNTRY_FLAGS = { us: "🇺🇸", uk: "🇬🇧", ca: "🇨🇦", au: "🇦🇺", nz: "🇳🇿", sg: "🇸🇬", in: "🇮🇳" }
const CURRENCY = { us: "$", uk: "£", ca: "C$", au: "A$", nz: "NZ$", sg: "S$", in: "₹" }

function fmt(val, slug) {
  const s = CURRENCY[slug] || "$"
  if (slug === "in") return `${s}${(val / 100000).toFixed(1)}L`
  return `${s}${val.toLocaleString("en-US")}`
}

function fmtRange(low, high, slug) {
  const s = CURRENCY[slug] || "$"
  return `${s}${(low / 1000).toFixed(0)}K - ${s}${(high / 1000).toFixed(0)}K`
}

function mkPath(...parts) {
  return "/" + parts.filter(Boolean).join("/")
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

// ── Generate hub page ─────────────────────────────────────────────────────
function genHubPage(p) {
  const slug = p.slug
  const dir = path.join(APP_DIR, slug)
  ensureDir(dir)

  const salaryRows = ["us", "uk", "ca", "au", "nz", "sg", "in"].map(c => {
    const s = SALARIES[slug][c]
    const sum = p.countrySummaryLong[c]
    return `      { flag: "${COUNTRY_FLAGS[c]}", name: "${COUNTRY_NAMES[c]}", slug: "${c}", summary: "${sum}", metrics: [{ label: "Avg Salary", value: "${fmt(s.average, c)}" }, { label: "Entry Level", value: "${fmt(s.entryLevel, c)}" }] },`
  }).join("\n")

  const relatedLinks = [
    `      { label: "${p.name} Salary", href: "/${slug}-salary" },`,
    `      { label: "Salary by Country", href: "/${slug}-salary-by-country" },`,
    `      { label: "Highest Paying Countries", href: "/${slug}-highest-paying-countries" },`,
    `      { label: "Best Countries Overview", href: "/${slug}-best-countries" },`,
    `      { label: "PPP-Adjusted Salary", href: "/${slug}-ppp-adjusted-salary" },`,
    `      { label: "Tax-Adjusted Salary", href: "/${slug}-tax-adjusted-salary" },`,
    `      { label: "Salary Index 2026", href: "/research/${slug}-salary-index-2026" },`,
  ]

  const code = `import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"
import { getProfession } from "@/lib/content/professions-data"
import { COUNTRY_FLAGS, COUNTRY_NAMES } from "@/lib/content/country-registry"

const pagePath = "/${slug}"
const seoTitle = "${p.hubTitle} (2026)"
const seoDesc = "${p.hubDesc}"

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

const prof = getProfession("${slug}")!

function formatSalary(value: number, slug: string): string {
  const sym: Record<string, string> = { us: "$", uk: "£", ca: "C$", au: "A$", nz: "NZ$", sg: "S$", in: "₹" }
  const s = sym[slug] || "$"
  if (slug === "in") return \`\${s}\${(value / 100000).toFixed(1)}L\`
  return \`\${s}\${value.toLocaleString("en-US")}\`
}

export default function ${p.slug.replace(/-/g, "_")}HubPage() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "${p.name}", url: \`\${SITE_URL}\${pagePath}\` },
  ])

  const countrySlugs = ["us", "uk", "ca", "au", "nz", "sg", "in"]
  const countryEntries = countrySlugs.map((slug) => {
    const salary = prof.salaries[slug]
    return {
      flag: COUNTRY_FLAGS[slug] || "",
      name: COUNTRY_NAMES[slug] || slug,
      slug,
      summary: \`Average ${p.name.toLowerCase()} salary in \${COUNTRY_NAMES[slug] || slug} is \${formatSalary(salary.average, slug)} per year.\`,
      metrics: [
        { label: "Avg Salary", value: formatSalary(salary.average, slug) },
        { label: "Entry Level", value: formatSalary(salary.entryLevel, slug) },
      ],
    }
  })

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: \`\${SITE_URL}\${pagePath}\` },
    hero: {
      badge: "${p.hubBadge}",
      title: "${p.hubTitle}",
      description: "${p.hubDesc}",
      cta: { label: "${p.hubCta}", href: "${p.hubCtaHref}" },
      secondaryCta: { label: "${p.hubSecondaryCta}", href: "${p.hubSecondaryCtaHref}" },
    },
    salaryCards: [
      { label: "${p.salaryCardsHub[0].label}", value: "${p.salaryCardsHub[0].value}" },
      { label: "${p.salaryCardsHub[1].label}", value: "${p.salaryCardsHub[1].value}" },
      { label: "${p.salaryCardsHub[2].label}", value: "${p.salaryCardsHub[2].value}" },
    ],
    keyTakeaways: [
${p.hubTakeaways.map(t => `      { title: "${t.title}", description: "${t.description}" },`).join("\n")}
    ],
    countryCards: {
      title: "Salary by Country",
      countries: countryEntries,
    },
    faqs: [
      { question: "Which country pays ${p.name.toLowerCase()}s the most in 2026?", answer: "The United States offers the highest average ${p.name.toLowerCase()} salaries at approximately ${fmt(SALARIES[slug].us.average, "us")} per year. Australia and Canada follow with competitive compensation packages." },
      { question: "Which country has the lowest taxes for ${p.name.toLowerCase()}s?", answer: "Singapore has the lowest personal income tax burden among analyzed countries, with a top marginal rate of 22% and an effective rate of approximately 7% for average earners." },
      { question: "Which country offers the best value considering cost of living?", answer: "India offers the strongest purchasing power relative to local costs. Despite lower nominal salaries, the significantly lower cost of living allows ${p.name.toLowerCase()}s to achieve a high standard of living." },
      { question: "What additional compensation should I consider beyond base salary?", answer: "Equity compensation, bonuses, benefits, and retirement contributions can significantly affect total compensation. US technology companies commonly offer stock options or RSUs." },
    ],
    methodology: [
      "Salary data is compiled from government labor statistics, technology industry surveys, and compensation databases for the 2025-2026 period.",
      "Tax calculations incorporate national/federal income taxes, state/provincial taxes where applicable, mandatory social contributions, and healthcare costs.",
      "Cost of living and purchasing power data uses Numbeo, OECD, and Mercer indices, adjusted for local price levels.",
    ],
    sources: [
      { label: "US Bureau of Labor Statistics", url: "https://www.bls.gov" },
      { label: "UK Office for National Statistics", url: "https://www.ons.gov.uk" },
      { label: "Australian Bureau of Statistics", url: "https://www.abs.gov.au" },
      { label: "Statistics Canada", url: "https://www.statcan.gc.ca" },
    ],
    relatedPages: [
${relatedLinks.join("\n")}    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
`
  fs.writeFileSync(path.join(dir, "page.tsx"), code)
  console.log(`  ✓ Created /${slug} (hub)`)
}

// ── Generate salary overview page ────────────────────────────────────────
function genSalaryPage(p) {
  const slug = p.slug
  const dir = path.join(APP_DIR, `${slug}-salary`)
  ensureDir(dir)

  const rows = ["us", "uk", "ca", "au", "nz", "sg", "in"].map(c => {
    const s = SALARIES[slug][c]
    return `        { country: "${COUNTRY_FLAGS[c]} ${COUNTRY_NAMES[c]}", average: "${fmt(s.average, c)}", entryLevel: "${fmt(s.entryLevel, c)}", experienced: "${fmt(s.experienced, c)}" },`
  }).join("\n")

  const code = `import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/${slug}-salary"
const seoTitle = "${p.name} Salary Research & Insights (2026)"
const seoDesc = "Comprehensive research on ${p.name.toLowerCase()} salaries across 7 major economies. Compare average pay by country, analyze tax implications, and evaluate total compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "${p.name} Salary Research", url: \`\${SITE_URL}\${pagePath}\` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: \`\${SITE_URL}\${pagePath}\` },
    hero: {
      badge: "Salary Research",
      title: "${p.name} Salary Research",
      description: "Comprehensive analysis of ${p.name.toLowerCase()} compensation across 7 major economies. Research salary benchmarks, tax-adjusted earnings, purchasing power, and career dynamics.",
      cta: { label: "Salary by Country", href: "/${slug}-salary-by-country" },
    },
    salaryCards: [
      { label: "${p.salaryCards[0].label}", value: "${p.salaryCards[0].value}" },
      { label: "${p.salaryCards[1].label}", value: "${p.salaryCards[1].value}" },
      { label: "${p.salaryCards[2].label}", value: "${p.salaryCards[2].value}" },
    ],
    keyTakeaways: [
${p.salaryTakeaways.map(t => `      { title: "${t.title}", description: "${t.description}" },`).join("\n")}
    ],
    salaryTable: {
      title: "${p.name} Salary by Country",
      headers: ["Country", "Average", "Entry Level", "Experienced"],
      rows: [
${rows}
      ],
    },
    faqs: [
      { question: "What is the average ${p.name.toLowerCase()} salary globally?", answer: "Average ${p.name.toLowerCase()} salaries range from ${fmt(SALARIES[slug].us.average, "us")} in the United States to ${fmt(SALARIES[slug].au.average, "au")} in Australia and ${fmt(SALARIES[slug].uk.average, "uk")} in the UK." },
      { question: "Which country has the highest ${p.name.toLowerCase()} salary?", answer: "The United States offers the highest average salary at ${fmt(SALARIES[slug].us.average, "us")}. Top-tier companies may offer total compensation significantly exceeding this baseline." },
    ],
    relatedPages: [
      { label: "${p.name} Hub", href: "/${slug}" },
      { label: "Highest Paying Countries", href: "/${slug}-highest-paying-countries" },
      { label: "Best Countries for ${p.name}s", href: "/${slug}-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/${slug}-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/${slug}-ppp-adjusted-salary" },
      { label: "${p.name} Salary Index 2026", href: "/research/${slug}-salary-index-2026" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
`
  fs.writeFileSync(path.join(dir, "page.tsx"), code)
  console.log(`  ✓ Created /${slug}-salary`)
}

// ── Generate tax-adjusted page ───────────────────────────────────────────
function genTaxPage(p) {
  const slug = p.slug
  const dir = path.join(APP_DIR, `${slug}-tax-adjusted-salary`)
  ensureDir(dir)

  const taxRate = c => c === "sg" ? 0.93 : c === "us" ? 0.78 : c === "uk" ? 0.80 : c === "au" ? 0.75 : c === "ca" ? 0.75 : c === "nz" ? 0.75 : 0.80
  const taxNote = c => c === "sg" ? " (7% tax)" : c === "us" ? " (22% tax)" : c === "uk" ? " (20% tax)" : c === "au" ? " (25% tax)" : c === "ca" ? " (25% tax)" : c === "nz" ? " (25% tax)" : " (20% tax)"

  const rankings = ["us", "au", "sg", "ca", "nz", "uk", "in"].map((c, i) => {
    const s = SALARIES[slug][c]
    const afterTax = fmt(Math.round(s.average * taxRate(c)), c)
    const note = taxNote(c)
    return `        { rank: ${i + 1}, flag: "${COUNTRY_FLAGS[c]}", name: "${COUNTRY_NAMES[c]}", salary: "${afterTax}${note}" },`
  }).join("\n")

  const code = `import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/${slug}-tax-adjusted-salary"
const seoTitle = "${p.name} Tax-Adjusted Salary (2026)"
const seoDesc = "Compare ${p.name.toLowerCase()} salaries adjusted for income tax across 7 major economies. See how tax systems affect real take-home pay."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Tax-Adjusted Salary", url: \`\${SITE_URL}\${pagePath}\` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: \`\${SITE_URL}\${pagePath}\` },
    hero: {
      badge: "Tax Analysis",
      title: "${p.name} Tax-Adjusted Salary",
      description: "Compare ${p.name.toLowerCase()} salaries adjusted for income tax across 7 major economies. See how different tax systems affect real take-home pay.",
      cta: { label: "PPP-Adjusted Salary", href: "/${slug}-ppp-adjusted-salary" },
    },
    salaryCards: [
      { label: "${p.cardTaxBest[0].label}", value: "${p.cardTaxBest[0].value}" },
      { label: "${p.cardTaxBest[1].label}", value: "${p.cardTaxBest[1].value}" },
      { label: "${p.cardTaxBest[2].label}", value: "${p.cardTaxBest[2].value}" },
    ],
    countryRanking: {
      title: "Tax-Adjusted Salary Rankings",
      entries: [
${rankings}
      ],
    },
    faqs: [
      { question: "Which country offers the best after-tax salary for ${p.name.toLowerCase()}s?", answer: "The United States offers the highest after-tax salary at approximately ${fmt(Math.round(SALARIES[slug].us.average * 0.78), "us")} for an average earner, followed by Australia. Singapore offers the best tax efficiency." },
    ],
    relatedPages: [
      { label: "${p.name} Hub", href: "/${slug}" },
      { label: "PPP-Adjusted Salary", href: "/${slug}-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/${slug}-salary-by-country" },
      { label: "Highest Paying Countries", href: "/${slug}-highest-paying-countries" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
`
  fs.writeFileSync(path.join(dir, "page.tsx"), code)
  console.log(`  ✓ Created /${slug}-tax-adjusted-salary`)
}

// ── Generate PPP-adjusted page ──────────────────────────────────────────
function genPppPage(p) {
  const slug = p.slug
  const dir = path.join(APP_DIR, `${slug}-ppp-adjusted-salary`)
  ensureDir(dir)

  const rankings = ["in", "au", "us", "ca", "nz", "sg", "uk"].map((c, i) => {
    const s = SALARIES[slug][c]
    return `        { rank: ${i + 1}, flag: "${COUNTRY_FLAGS[c]}", name: "${COUNTRY_NAMES[c]}", salary: "${fmt(s.average, c)}", note: "" },`
  }).join("\n")

  const code = `import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/${slug}-ppp-adjusted-salary"
const seoTitle = "${p.name} PPP-Adjusted Salary (2026)"
const seoDesc = "Compare ${p.name.toLowerCase()} salaries adjusted for purchasing power parity across 7 major economies. See the real value of compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "PPP-Adjusted Salary", url: \`\${SITE_URL}\${pagePath}\` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: \`\${SITE_URL}\${pagePath}\` },
    hero: {
      badge: "PPP Analysis",
      title: "${p.name} PPP-Adjusted Salary",
      description: "Compare ${p.name.toLowerCase()} salaries adjusted for purchasing power parity across 7 major economies. Understand the real value of compensation when adjusted for local cost of living.",
      cta: { label: "Tax-Adjusted Salary", href: "/${slug}-tax-adjusted-salary" },
    },
    salaryCards: [
      { label: "${p.cardPppBest[0].label}", value: "${p.cardPppBest[0].value}" },
      { label: "${p.cardPppBest[1].label}", value: "${p.cardPppBest[1].value}" },
      { label: "${p.cardPppBest[2].label}", value: "${p.cardPppBest[2].value}" },
    ],
    countryRanking: {
      title: "PPP-Adjusted Salary Rankings",
      entries: [
${rankings}
      ],
    },
    faqs: [
      { question: "What is purchasing power parity and why does it matter?", answer: "Purchasing Power Parity (PPP) adjusts salaries for local cost of living. A salary in the US has different real purchasing power than the equivalent salary in India or the UK." },
      { question: "Which country offers the best PPP-adjusted salary?", answer: "India offers exceptional PPP-adjusted value. While nominal salaries are lower, the cost of goods and services allows professionals to achieve a high standard of living." },
    ],
    relatedPages: [
      { label: "${p.name} Hub", href: "/${slug}" },
      { label: "Tax-Adjusted Salary", href: "/${slug}-tax-adjusted-salary" },
      { label: "Salary by Country", href: "/${slug}-salary-by-country" },
      { label: "Highest Paying Countries", href: "/${slug}-highest-paying-countries" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
`
  fs.writeFileSync(path.join(dir, "page.tsx"), code)
  console.log(`  ✓ Created /${slug}-ppp-adjusted-salary`)
}

// ── Generate highest-paying countries page ──────────────────────────────
function genHighestPage(p) {
  const slug = p.slug
  const dir = path.join(APP_DIR, `${slug}-highest-paying-countries`)
  ensureDir(dir)

  const rankings = ["us", "au", "ca", "nz", "uk", "sg", "in"].map((c, i) => {
    const s = SALARIES[slug][c]
    return `        { rank: ${i + 1}, flag: "${COUNTRY_FLAGS[c]}", name: "${COUNTRY_NAMES[c]}", salary: "${fmt(s.average, c)}", note: "${p.countrySummary[c]}" },`
  }).join("\n")

  const code = `import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/${slug}-highest-paying-countries"
const seoTitle = "Highest Paying Countries for ${p.name}s (2026)"
const seoDesc = "Ranking of the highest paying countries for ${p.name.toLowerCase()}s in 2026. Compare average salaries, tax-adjusted income, and purchasing power."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Highest Paying Countries", url: \`\${SITE_URL}\${pagePath}\` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: \`\${SITE_URL}\${pagePath}\` },
    hero: {
      badge: "Global Rankings",
      title: "Highest Paying Countries for ${p.name}s",
      description: "Ranking of the highest paying countries for ${p.name.toLowerCase()}s in 2026. Compare average salaries, tax-adjusted income, purchasing power, and total compensation.",
    },
    salaryCards: [
      { label: "${p.salaryCardBest[0].label}", value: "${p.salaryCardBest[0].value}" },
      { label: "${p.salaryCardBest[1].label}", value: "${p.salaryCardBest[1].value}" },
      { label: "${p.salaryCardBest[2].label}", value: "${p.salaryCardBest[2].value}" },
    ],
    keyTakeaways: [
${p.highestTakeaways.map(t => `      { title: "${t.title}", description: "${t.description}" },`).join("\n")}
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
${rankings}
      ],
    },
    faqs: [
      { question: "Which country pays ${p.name.toLowerCase()}s the highest salary?", answer: "The United States pays the highest average salary at ${fmt(SALARIES[slug].us.average, "us")} per year. When including compensation, total packages can significantly exceed this." },
      { question: "Which country has the highest after-tax salary?", answer: "The United States offers the highest after-tax salary at approximately ${fmt(Math.round(SALARIES[slug].us.average * 0.78), "us")} for an average earner." },
    ],
    relatedPages: [
      { label: "${p.name} Hub", href: "/${slug}" },
      { label: "Best Countries for ${p.name}s", href: "/${slug}-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/${slug}-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/${slug}-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/${slug}-salary-by-country" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
`
  fs.writeFileSync(path.join(dir, "page.tsx"), code)
  console.log(`  ✓ Created /${slug}-highest-paying-countries`)
}

// ── Generate best countries page ───────────────────────────────────────
function genBestPage(p) {
  const slug = p.slug
  const dir = path.join(APP_DIR, `${slug}-best-countries`)
  ensureDir(dir)

  const countries = ["us", "ca", "au", "sg", "uk", "nz"].map(c => {
    const s = SALARIES[slug][c]
    return `      {
          flag: "${COUNTRY_FLAGS[c]}", name: "${COUNTRY_NAMES[c]}", slug: "${c}",
          summary: "${p.countrySummary[c]}.",
          metrics: [{ label: "Avg Salary", value: "${fmt(s.average, c)}" }, { label: "Best For", value: "Career growth" }],
        },`
  }).join("\n")

  const code = `import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/${slug}-best-countries"
const seoTitle = "Best Countries for ${p.name}s (2026)"
const seoDesc = "Discover the best countries for ${p.name.toLowerCase()}s in 2026. Compare salary, tax, cost of living, career growth, and quality of life."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Best Countries", url: \`\${SITE_URL}\${pagePath}\` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: \`\${SITE_URL}\${pagePath}\` },
    hero: {
      badge: "Career Intelligence",
      title: "Best Countries for ${p.name}s",
      description: "Discover the best countries for ${p.name.toLowerCase()}s in 2026. Our analysis considers salary, tax burden, cost of living, career growth potential, and quality of life.",
    },
    keyTakeaways: [
${p.bestTakeaways.map(t => `      { title: "${t.title}", description: "${t.description}" },`).join("\n")}
    ],
    countryCards: {
      title: "Country Recommendations",
      countries: [
${countries}
      ],
    },
    faqs: [
      { question: "Which country is overall best for ${p.name.toLowerCase()}s?", answer: "The best country depends on priorities. The US maximizes compensation, Canada offers accessible immigration, and Singapore has the lowest taxes." },
      { question: "Which country is easiest to immigrate to as a ${p.name.toLowerCase()}?", answer: "Canada and Australia both offer accessible immigration pathways for skilled professionals." },
    ],
    relatedPages: [
      { label: "${p.name} Hub", href: "/${slug}" },
      { label: "Highest Paying Countries", href: "/${slug}-highest-paying-countries" },
      { label: "Salary by Country", href: "/${slug}-salary-by-country" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
`
  fs.writeFileSync(path.join(dir, "page.tsx"), code)
  console.log(`  ✓ Created /${slug}-best-countries`)
}

// ── Generate salary by country page ────────────────────────────────────
function genSalaryByCountryPage(p) {
  const slug = p.slug
  const dir = path.join(APP_DIR, `${slug}-salary-by-country`)
  ensureDir(dir)

  const rows = ["us", "uk", "ca", "au", "nz", "sg", "in"].map(c => {
    const s = SALARIES[slug][c]
    return `        { country: "${COUNTRY_FLAGS[c]} ${COUNTRY_NAMES[c]}", average: "${fmt(s.average, c)}", entryLevel: "${fmt(s.entryLevel, c)}", experienced: "${fmt(s.experienced, c)}", range: "${fmtRange(s.rangeLow, s.rangeHigh, c)}" },`
  }).join("\n")

  const code = `import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/${slug}-salary-by-country"
const seoTitle = "${p.name} Salary by Country (2026)"
const seoDesc = "Compare ${p.name.toLowerCase()} salaries by country in 2026. View average, entry-level, and experienced salaries across 7 major economies."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Salary by Country", url: \`\${SITE_URL}\${pagePath}\` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: \`\${SITE_URL}\${pagePath}\` },
    hero: {
      badge: "Global Comparison",
      title: "${p.name} Salary by Country",
      description: "Compare ${p.name.toLowerCase()} salaries across 7 major economies. View average, entry-level, and experienced salaries side by side.",
    },
    salaryCards: [
      { label: "${p.cardSalaryByCountry[0].label}", value: "${p.cardSalaryByCountry[0].value}" },
      { label: "${p.cardSalaryByCountry[1].label}", value: "${p.cardSalaryByCountry[1].value}" },
      { label: "${p.cardSalaryByCountry[2].label}", value: "${p.cardSalaryByCountry[2].value}" },
    ],
    salaryTable: {
      title: "${p.name} Salary by Country (2026)",
      headers: ["Country", "Average", "Entry Level", "Experienced", "Range"],
      rows: [
${rows}
      ],
    },
    faqs: [
      { question: "Which country pays ${p.name.toLowerCase()}s the most?", answer: "The United States pays the highest average salary at ${fmt(SALARIES[slug].us.average, "us")}." },
      { question: "What is the entry-level ${p.name.toLowerCase()} salary by country?", answer: "Entry-level salaries range from ${fmt(SALARIES[slug].us.entryLevel, "us")} (US) to ${fmt(SALARIES[slug].uk.entryLevel, "uk")} (UK) and ${fmt(SALARIES[slug].in.entryLevel, "in")} (India)." },
    ],
    relatedPages: [
      { label: "${p.name} Hub", href: "/${slug}" },
      { label: "Highest Paying Countries", href: "/${slug}-highest-paying-countries" },
      { label: "Best Countries", href: "/${slug}-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/${slug}-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/${slug}-ppp-adjusted-salary" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
`
  fs.writeFileSync(path.join(dir, "page.tsx"), code)
  console.log(`  ✓ Created /${slug}-salary-by-country`)
}

// ── Generate country salary pages ──────────────────────────────────────
function genCountrySalaryPages(p) {
  const slug = p.slug
  const countries = ["us", "uk", "ca", "au", "nz", "sg", "in"]

  for (const c of countries) {
    const s = SALARIES[slug][c]
    const dirName = `${slug}-salary-${c}`
    const dir = path.join(APP_DIR, dirName)
    ensureDir(dir)

    const code = `import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { Shell } from "@/components/shell"

const COUNTRY = { slug: "${c}", name: "${COUNTRY_NAMES[c]}", flag: "${COUNTRY_FLAGS[c]}", currency: "${CURRENCY[c]}" }
const SALARY = { average: ${s.average}, entryLevel: ${s.entryLevel}, experienced: ${s.experienced} }

export const metadata: Metadata = {
  title: "${p.name} Salary in the ${COUNTRY_NAMES[c]} (2026)",
  description: "Research ${p.name.toLowerCase()} salaries in the ${COUNTRY_NAMES[c]}. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
  alternates: { canonical: \`\${SITE_URL}/${dirName}\` },
  openGraph: {
    title: "${p.name} Salary in the ${COUNTRY_NAMES[c]}",
    description: "Research ${p.name.toLowerCase()} salaries in the ${COUNTRY_NAMES[c]}.",
  },
}

export default function ${slug.replace(/-/g, "_")}Salary${c.toUpperCase()}() {
  const articleSchema = buildArticleJsonLd(
    "${p.name} Salary in the ${COUNTRY_NAMES[c]} (2026)",
    "Research ${p.name.toLowerCase()} salaries in the ${COUNTRY_NAMES[c]}.",
    \`/${dirName}\`,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "${p.name} Salary ${COUNTRY_NAMES[c]}", url: \`\${SITE_URL}/${dirName}\` },
  ])

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">{COUNTRY.flag} {COUNTRY.name} &mdash; Salary Intelligence</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">${p.name} Salary in the ${COUNTRY_NAMES[c]}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">The ${COUNTRY_NAMES[c]} offers competitive salaries for ${p.name.toLowerCase()}s across various industries and experience levels.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-blue-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Average Salary</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.average.toLocaleString("en-US")}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Entry Level</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.entryLevel.toLocaleString("en-US")}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Experienced</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.experienced.toLocaleString("en-US")}</p></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/${c}/tools/salary-calculator" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
            <a href="/${c}/tools/tax-calculator" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Income Tax Calculator</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Competitive Salaries</h3><p className="text-sm leading-6 text-zinc-700">The average ${p.name.toLowerCase()} salary in the ${COUNTRY_NAMES[c]} is {COUNTRY.currency}{SALARY.average.toLocaleString("en-US")}.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Career Growth</h3><p className="text-sm leading-6 text-zinc-700">Career prospects for ${p.name.toLowerCase()}s in the ${COUNTRY_NAMES[c]} remain strong with growing demand.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary by Experience Level</h2>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm"><thead><tr className="bg-zinc-50"><th className="px-4 py-3 text-left font-medium text-zinc-700">Level</th><th className="px-4 py-3 text-left font-medium text-zinc-700">Experience</th><th className="px-4 py-3 text-right font-medium text-zinc-700">Annual Salary</th></tr></thead>
            <tbody>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Entry Level</td><td className="px-4 py-3 text-zinc-500">0\u20132 Years</td><td className="px-4 py-3 text-right text-zinc-950">{COUNTRY.currency}{SALARY.entryLevel.toLocaleString("en-US")}</td></tr>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Mid Level</td><td className="px-4 py-3 text-zinc-500">3\u20137 Years</td><td className="px-4 py-3 text-right text-zinc-950">{COUNTRY.currency}{SALARY.average.toLocaleString("en-US")}</td></tr>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Senior</td><td className="px-4 py-3 text-zinc-500">8\u201315 Years</td><td className="px-4 py-3 text-right text-zinc-950">{COUNTRY.currency}{SALARY.experienced.toLocaleString("en-US")}</td></tr>
            </tbody></table>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Explore More</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/${slug}" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">${p.name} Hub</a>
            <a href="/${slug}-salary" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Overview</a>
            <a href="/${c}/tools/salary-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Calculator</a>
            <a href="/${c}/tools/tax-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
          </div>
        </section>
      </div>
    </Shell>
  )
}
`
    fs.writeFileSync(path.join(dir, "page.tsx"), code)
    console.log(`  ✓ Created /${dirName}`)
  }
}

// ── Main ─────────────────────────────────────────────────────────────────
console.log("\n=== Generating Profession Pages ===\n")

for (const p of NEW_PROFESSIONS) {
  const slug = p.slug
  const dirs = [
    slug, `${slug}-salary`, `${slug}-tax-adjusted-salary`,
    `${slug}-ppp-adjusted-salary`, `${slug}-salary-by-country`,
    `${slug}-best-countries`, `${slug}-highest-paying-countries`,
  ]
  for (const d of dirs) {
    const fp = path.join(APP_DIR, d)
    if (!fs.existsSync(fp)) ensureDir(fp)
  }
  // country salary dirs
  for (const c of ["us", "uk", "ca", "au", "nz", "sg", "in"]) {
    ensureDir(path.join(APP_DIR, `${slug}-salary-${c}`))
  }

  genHubPage(p)
  genSalaryPage(p)
  genTaxPage(p)
  genPppPage(p)
  genSalaryByCountryPage(p)
  genHighestPage(p)
  genBestPage(p)
  genCountrySalaryPages(p)
}

console.log("\n=== Generation Complete ===")
console.log(`Total new professions: ${NEW_PROFESSIONS.length}`)
console.log(`Page types per profession: 8 (hub, salary, tax, ppp, by-country, best, highest, + 7 country pages)`)
console.log(`Total page files created: ${NEW_PROFESSIONS.length * 15}`)
