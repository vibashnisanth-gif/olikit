import type { AffiliateProduct, SponsoredSlot } from "./types"

export const affiliatesEnabled = true
export const sponsoredEnabled = true

export const affiliateProducts: AffiliateProduct[] = [
  // --- INVESTMENT (all countries) ---
  { name: "Betterment", description: "Automated investing and savings platform", url: "https://www.betterment.com", countrySlug: "us", category: "investment" },
  { name: "Robinhood", description: "Commission-free stock trading app", url: "https://robinhood.com", countrySlug: "us", category: "investment" },
  { name: "Fidelity", description: "Full-service brokerage with no account fees", url: "https://www.fidelity.com", countrySlug: "us", category: "investment" },
  { name: "Trading 212", description: "Commission-free trading platform for stocks, ETFs", url: "https://www.trading212.com", countrySlug: "uk", category: "investment" },
  { name: "Freetrade", description: "Commission-free investing in UK stocks", url: "https://freetrade.io", countrySlug: "uk", category: "investment" },
  { name: "Hargreaves Lansdown", description: "UK's largest investment platform", url: "https://www.hl.co.uk", countrySlug: "uk", category: "investment" },
  { name: "Spaceship", description: "Australian micro-investing platform", url: "https://www.spaceship.com.au", countrySlug: "au", category: "investment" },
  { name: "SelfWealth", description: "Flat-fee Australian brokerage", url: "https://www.selfwealth.com.au", countrySlug: "au", category: "investment" },
  { name: "CommSec Pocket", description: "Simple investing from Commonwealth Bank", url: "https://www.commsecpocket.com.au", countrySlug: "au", category: "investment" },
  { name: "Wealthsimple", description: "Canadian investment management service", url: "https://www.wealthsimple.com", countrySlug: "ca", category: "investment" },
  { name: "Questrade", description: "Low-cost Canadian brokerage", url: "https://www.questrade.com", countrySlug: "ca", category: "investment" },
  { name: "Sharesies", description: "NZ investing platform for all budgets", url: "https://www.sharesies.nz", countrySlug: "nz", category: "investment" },
  { name: "Hatch", description: "Invest in US stocks from New Zealand", url: "https://hatchinvest.nz", countrySlug: "nz", category: "investment" },
  { name: "Zerodha", description: "India's largest stock broker", url: "https://zerodha.com", countrySlug: "in", category: "investment" },
  { name: "Groww", description: "Invest in stocks, mutual funds, IPOs", url: "https://groww.in", countrySlug: "in", category: "investment" },
  { name: "Angel One", description: "Indian stock trading and investment platform", url: "https://www.angelone.in", countrySlug: "in", category: "investment" },
  { name: "Tiger Brokers", description: "Global trading platform for SG investors", url: "https://www.tigerbrokers.com.sg", countrySlug: "sg", category: "investment" },
  { name: "Moomoo", description: "Advanced trading platform by Futu", url: "https://www.moomoo.com/sg", countrySlug: "sg", category: "investment" },
  { name: "Syfe", description: "Automated investing in Singapore", url: "https://www.syfe.com", countrySlug: "sg", category: "investment" },

  // --- MONEY TRANSFER (all countries) ---
  { name: "Wise", description: "Send money abroad with real exchange rates", url: "https://wise.com", countrySlug: "us", category: "money-transfer", featured: true },
  { name: "Wise", description: "Send money abroad with real exchange rates", url: "https://wise.com", countrySlug: "uk", category: "money-transfer", featured: true },
  { name: "Wise", description: "Send money abroad with real exchange rates", url: "https://wise.com", countrySlug: "au", category: "money-transfer", featured: true },
  { name: "Wise", description: "Send money abroad with real exchange rates", url: "https://wise.com", countrySlug: "ca", category: "money-transfer", featured: true },
  { name: "Wise", description: "Send money abroad with real exchange rates", url: "https://wise.com", countrySlug: "nz", category: "money-transfer", featured: true },
  { name: "Wise", description: "Send money abroad with real exchange rates", url: "https://wise.com", countrySlug: "in", category: "money-transfer", featured: true },
  { name: "Wise", description: "Send money abroad with real exchange rates", url: "https://wise.com", countrySlug: "sg", category: "money-transfer", featured: true },
  { name: "Revolut", description: "Multi-currency account for spending abroad", url: "https://www.revolut.com", countrySlug: "uk", category: "money-transfer" },
  { name: "Revolut", description: "Multi-currency account for spending abroad", url: "https://www.revolut.com", countrySlug: "us", category: "money-transfer" },
  { name: "Revolut", description: "Multi-currency account for spending abroad", url: "https://www.revolut.com", countrySlug: "au", category: "money-transfer" },
  { name: "Revolut", description: "Multi-currency account for spending abroad", url: "https://www.revolut.com", countrySlug: "sg", category: "money-transfer" },
  { name: "Remitly", description: "Fast and affordable international money transfers", url: "https://www.remitly.com", countrySlug: "us", category: "money-transfer" },
  { name: "Remitly", description: "Fast and affordable international money transfers", url: "https://www.remitly.com", countrySlug: "uk", category: "money-transfer" },
  { name: "Remitly", description: "Fast and affordable international money transfers", url: "https://www.remitly.com", countrySlug: "ca", category: "money-transfer" },
  { name: "OFX", description: "International money transfers for businesses", url: "https://www.ofx.com", countrySlug: "us", category: "money-transfer" },
  { name: "OFX", description: "International money transfers for businesses", url: "https://www.ofx.com", countrySlug: "uk", category: "money-transfer" },
  { name: "OFX", description: "International money transfers for businesses", url: "https://www.ofx.com", countrySlug: "au", category: "money-transfer" },
  { name: "OFX", description: "International money transfers for businesses", url: "https://www.ofx.com", countrySlug: "nz", category: "money-transfer" },

  // --- BANKING (per country) ---
  { name: "Chime", description: "Fee-free mobile banking with early direct deposit", url: "https://www.chime.com", countrySlug: "us", category: "banking" },
  { name: "Ally Bank", description: "Online banking with high-yield savings", url: "https://www.ally.com", countrySlug: "us", category: "banking" },
  { name: "SoFi", description: "All-in-one banking and financial services", url: "https://www.sofi.com", countrySlug: "us", category: "banking" },
  { name: "Monzo", description: "Digital bank for everyday spending in the UK", url: "https://monzo.com", countrySlug: "uk", category: "banking" },
  { name: "Starling Bank", description: "UK digital bank with no monthly fees", url: "https://www.starlingbank.com", countrySlug: "uk", category: "banking" },
  { name: "Up Bank", description: "Australian neobank with smart saving features", url: "https://up.com.au", countrySlug: "au", category: "banking" },
  { name: "ING Australia", description: "Online savings with competitive interest rates", url: "https://www.ing.com.au", countrySlug: "au", category: "banking" },
  { name: "Tangerine", description: "No-fee online banking in Canada", url: "https://www.tangerine.ca", countrySlug: "ca", category: "banking" },
  { name: "EQ Bank", description: "Canadian digital bank with great savings rates", url: "https://www.eqbank.ca", countrySlug: "ca", category: "banking" },
  { name: "Rabobank NZ", description: "NZ savings and everyday banking", url: "https://www.rabobank.co.nz", countrySlug: "nz", category: "banking" },
  { name: "Kotak Mahindra", description: "Indian digital banking and financial services", url: "https://www.kotak.com", countrySlug: "in", category: "banking" },
  { name: "DBS Bank", description: "Singapore's leading digital bank", url: "https://www.dbs.com.sg", countrySlug: "sg", category: "banking" },

  // --- TAX SOFTWARE (per country) ---
  { name: "TurboTax", description: "US tax filing made easy with expert guidance", url: "https://turbotax.intuit.com", countrySlug: "us", category: "tax-software" },
  { name: "TaxSlayer", description: "Affordable US tax filing for all situations", url: "https://www.taxslayer.com", countrySlug: "us", category: "tax-software" },
  { name: "GoSimpleTax", description: "UK self-assessment tax return software", url: "https://www.gosimpletax.com", countrySlug: "uk", category: "tax-software" },
  { name: "TaxScouts", description: "UK tax returns done by accountants", url: "https://www.taxscouts.com", countrySlug: "uk", category: "tax-software" },
  { name: "Etax", description: "Australian online tax return service", url: "https://www.etax.com.au", countrySlug: "au", category: "tax-software" },
  { name: "Wealthsimple Tax", description: "Free Canadian tax filing platform", url: "https://www.wealthsimple.com/tax", countrySlug: "ca", category: "tax-software" },
  { name: "ClearTax", description: "Indian income tax filing and compliance", url: "https://cleartax.in", countrySlug: "in", category: "tax-software" },
  { name: "Tax2Win", description: "Online Indian income tax return filing", url: "https://www.tax2win.in", countrySlug: "in", category: "tax-software" },

  // --- JOB BOARDS (per country) ---
  { name: "Indeed", description: "Millions of jobs in the US", url: "https://www.indeed.com", countrySlug: "us", category: "job-board" },
  { name: "LinkedIn Jobs", description: "Professional networking and job search", url: "https://www.linkedin.com/jobs", countrySlug: "us", category: "job-board" },
  { name: "Glassdoor", description: "Company reviews, salaries, and jobs", url: "https://www.glassdoor.com", countrySlug: "us", category: "job-board" },
  { name: "ZipRecruiter", description: "Smart job matching technology", url: "https://www.ziprecruiter.com", countrySlug: "us", category: "job-board" },
  { name: "Indeed UK", description: "Find jobs in the United Kingdom", url: "https://www.indeed.co.uk", countrySlug: "uk", category: "job-board" },
  { name: "Reed", description: "UK's largest job board", url: "https://www.reed.co.uk", countrySlug: "uk", category: "job-board" },
  { name: "CV-Library", description: "UK job board with millions of CVs", url: "https://www.cv-library.co.uk", countrySlug: "uk", category: "job-board" },
  { name: "Seek", description: "Australia and NZ's leading job platform", url: "https://www.seek.com.au", countrySlug: "au", category: "job-board" },
  { name: "Indeed AU", description: "Find jobs in Australia", url: "https://au.indeed.com", countrySlug: "au", category: "job-board" },
  { name: "Indeed CA", description: "Find jobs in Canada", url: "https://ca.indeed.com", countrySlug: "ca", category: "job-board" },
  { name: "Job Bank", description: "Canada's national employment service", url: "https://www.jobbank.gc.ca", countrySlug: "ca", category: "job-board" },
  { name: "Seek NZ", description: "New Zealand's leading job platform", url: "https://www.seek.co.nz", countrySlug: "nz", category: "job-board" },
  { name: "Trade Me Jobs", description: "New Zealand's marketplace for jobs", url: "https://www.trademe.co.nz/jobs", countrySlug: "nz", category: "job-board" },
  { name: "Naukri", description: "India's No.1 job site", url: "https://www.naukri.com", countrySlug: "in", category: "job-board" },
  { name: "Indeed IN", description: "Find jobs in India", url: "https://in.indeed.com", countrySlug: "in", category: "job-board" },
  { name: "JobStreet", description: "Singapore and Malaysia's job platform", url: "https://www.jobstreet.com.sg", countrySlug: "sg", category: "job-board" },
  { name: "Indeed SG", description: "Find jobs in Singapore", url: "https://sg.indeed.com", countrySlug: "sg", category: "job-board" },

  // --- MORTGAGE (per country) ---
  { name: "Rocket Mortgage", description: "US online mortgage lending by Quicken Loans", url: "https://www.rocketmortgage.com", countrySlug: "us", category: "mortgage" },
  { name: "Better", description: "Digital mortgage lender with no commission fees", url: "https://better.com", countrySlug: "us", category: "mortgage" },
  { name: "Habito", description: "UK's first online mortgage broker", url: "https://www.habito.com", countrySlug: "uk", category: "mortgage" },
  { name: "L&C Mortgages", description: "UK free mortgage advice and broker", url: "https://www.landc.co.uk", countrySlug: "uk", category: "mortgage" },
  { name: "Aussie", description: "Australian mortgage broker and home loans", url: "https://www.aussie.com.au", countrySlug: "au", category: "mortgage" },
  { name: "Athena", description: "Australian online home loan with low rates", url: "https://www.athena.com.au", countrySlug: "au", category: "mortgage" },
  { name: "Ratehub", description: "Compare Canadian mortgage rates", url: "https://www.ratehub.ca", countrySlug: "ca", category: "mortgage" },
  { name: "Nesto", description: "Canadian digital mortgage broker", url: "https://www.nesto.ca", countrySlug: "ca", category: "mortgage" },

  // --- INSURANCE (per country) ---
  { name: "Policygenius", description: "Compare US insurance quotes online", url: "https://www.policygenius.com", countrySlug: "us", category: "insurance" },
  { name: "Compare the Market", description: "Compare UK insurance and financial products", url: "https://www.comparethemarket.com", countrySlug: "uk", category: "insurance" },
  { name: "Compare the Market AU", description: "Compare Australian insurance", url: "https://www.comparethemarket.com.au", countrySlug: "au", category: "insurance" },
  { name: "iSelect", description: "Compare Australian insurance and utilities", url: "https://www.iselect.com.au", countrySlug: "au", category: "insurance" },
  { name: "PolicyMe", description: "Canadian life insurance online", url: "https://www.policyme.com", countrySlug: "ca", category: "insurance" },

  // --- PAYROLL (for profession pages / business tools) ---
  { name: "Gusto", description: "US payroll, benefits, and HR platform", url: "https://gusto.com", countrySlug: "us", category: "payroll" },
  { name: "BrightPay", description: "UK payroll software for small businesses", url: "https://www.brightpay.co.uk", countrySlug: "uk", category: "payroll" },
  { name: "Xero", description: "Online accounting and payroll software", url: "https://www.xero.com", countrySlug: "au", category: "payroll" },
  { name: "Xero", description: "Online accounting and payroll software", url: "https://www.xero.com", countrySlug: "nz", category: "payroll" },
  { name: "MYOB", description: "Australian and NZ business management software", url: "https://www.myob.com", countrySlug: "au", category: "payroll" },
  { name: "MYOB", description: "Australian and NZ business management software", url: "https://www.myob.com", countrySlug: "nz", category: "payroll" },
  { name: "Wagepoint", description: "Canadian payroll made simple", url: "https://www.wagepoint.com", countrySlug: "ca", category: "payroll" },
]

export function getAffiliateProductsByCategory(category: string): AffiliateProduct[] {
  return affiliateProducts.filter((p) => p.category === category)
}

export function getAffiliateProductsByCountry(countrySlug: string): AffiliateProduct[] {
  return affiliateProducts.filter((p) => p.countrySlug === countrySlug)
}

export const sponsoredSlots: SponsoredSlot[] = [
  {
    name: "Sponsor Placeholder",
    description: "Sponsored content placement - available for partnership",
    url: "/contact",
    countrySlug: "us",
  },
  {
    name: "Sponsor Placeholder",
    description: "Sponsored content placement - available for partnership",
    url: "/contact",
    countrySlug: "uk",
  },
  {
    name: "Sponsor Placeholder",
    description: "Sponsored content placement - available for partnership",
    url: "/contact",
    countrySlug: "au",
  },
  {
    name: "Sponsor Placeholder",
    description: "Sponsored content placement - available for partnership",
    url: "/contact",
    countrySlug: "ca",
  },
]
