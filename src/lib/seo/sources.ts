export interface OfficialSource {
  name: string
  url: string
  description: string
  category: "tax" | "statistics" | "labor" | "housing" | "data-gov"
}

export interface LocaleSources {
  officialSources: OfficialSource[]
  methodology: string
  lastUpdated: string
}

export const sourceRegistry: Record<string, LocaleSources> = {
  us: {
    lastUpdated: "June 2026",
    methodology:
      "Our calculators use tax brackets, contribution limits, and rates published by the relevant US government agencies. Salary data is sourced from Bureau of Labor Statistics (BLS) surveys. Mortgage rates reflect national averages and may vary by lender, location, and credit profile. All figures are for educational purposes and should be verified with a qualified professional.",
    officialSources: [
      {
        name: "Internal Revenue Service (IRS)",
        url: "https://www.irs.gov/pub/irs-drop/n-25-26.pdf",
        description: "Federal tax brackets, standard deductions, and contribution limits.",
        category: "tax",
      },
      {
        name: "Bureau of Labor Statistics (BLS)",
        url: "https://www.bls.gov/oes/",
        description: "Employment data, wage estimates, and CPI inflation figures.",
        category: "labor",
      },
      {
        name: "US Census Bureau",
        url: "https://www.census.gov/acs/www/data/data-tables-and-tools/",
        description: "Demographic data, median income, and housing statistics.",
        category: "statistics",
      },
      {
        name: "Social Security Administration (SSA)",
        url: "https://www.ssa.gov/",
        description: "Social Security tax rates, benefit formulas, and contribution limits.",
        category: "tax",
      },
      {
        name: "Federal Housing Finance Agency (FHFA)",
        url: "https://www.fhfa.gov/",
        description: "Housing price index and conforming loan limits.",
        category: "housing",
      },
    ],
  },
  uk: {
    lastUpdated: "June 2026",
    methodology:
      "Our UK calculators use tax bands, National Insurance rates, and contribution limits published by HMRC. Salary and economic data comes from the Office for National Statistics (ONS). Mortgage calculations use average UK interest rates and may vary by lender and individual circumstances. All figures are for educational purposes.",
    officialSources: [
      {
        name: "HM Revenue & Customs (HMRC)",
        url: "https://www.gov.uk/government/publications/rates-and-allowances-income-tax/rates-and-allowances-income-tax",
        description: "Income tax bands, National Insurance rates, and pension allowances.",
        category: "tax",
      },
      {
        name: "Office for National Statistics (ONS)",
        url: "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earnings",
        description: "UK earnings data, CPI inflation, and economic statistics.",
        category: "statistics",
      },
      {
        name: "MoneyHelper (UK)",
        url: "https://www.moneyhelper.org.uk/",
        description: "Pension guidance, mortgage advice, and financial literacy resources.",
        category: "housing",
      },
    ],
  },
  au: {
    lastUpdated: "June 2026",
    methodology:
      "Our Australian calculators follow tax rates, thresholds, and superannuation rules published by the Australian Taxation Office (ATO). Wage and economic data is sourced from the Australian Bureau of Statistics (ABS). Mortgage rates reflect RBA cash rate influences and market averages. All figures are for educational purposes.",
    officialSources: [
      {
        name: "Australian Taxation Office (ATO)",
        url: "https://www.ato.gov.au/tax-rates-and-codes/tax-rates",
        description: "Income tax rates, Medicare levy, and superannuation contribution limits.",
        category: "tax",
      },
      {
        name: "Australian Bureau of Statistics (ABS)",
        url: "https://www.abs.gov.au/statistics/labour/earnings",
        description: "Wage data, employment statistics, and cost of living indices.",
        category: "statistics",
      },
      {
        name: "Reserve Bank of Australia (RBA)",
        url: "https://www.rba.gov.au/",
        description: "Cash rate, inflation targets, and monetary policy data.",
        category: "housing",
      },
    ],
  },
  ca: {
    lastUpdated: "June 2026",
    methodology:
      "Our Canadian calculators use federal and provincial tax brackets, CPP/QPP contribution rates, and EI premiums published by the Canada Revenue Agency (CRA). Economic data is sourced from Statistics Canada. Mortgage calculations use Bank of Canada rates and market averages. All figures are for educational purposes.",
    officialSources: [
      {
        name: "Canada Revenue Agency (CRA)",
        url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/federal-income-tax-rates.html",
        description: "Federal and provincial income tax rates, CPP contributions, and RRSP limits.",
        category: "tax",
      },
      {
        name: "Statistics Canada",
        url: "https://www.statcan.gc.ca/en/subjects-start/employment_and_unemployment",
        description: "Employment data, income statistics, and housing market data.",
        category: "statistics",
      },
      {
        name: "Bank of Canada",
        url: "https://www.bankofcanada.ca/",
        description: "Interest rates, inflation data, and mortgage rate benchmarks.",
        category: "housing",
      },
    ],
  },
  nz: {
    lastUpdated: "June 2026",
    methodology:
      "Our New Zealand calculators follow tax brackets, KiwiSaver contribution rates, and ACC levies published by Inland Revenue (IRD). Economic data is sourced from Stats NZ. Mortgage calculations use RBNZ official cash rate and market averages. All figures are for educational purposes.",
    officialSources: [
      {
        name: "Inland Revenue (IRD)",
        url: "https://www.ird.govt.nz/income-tax/income-tax-for-individuals",
        description: "Income tax brackets, KiwiSaver rules, and ACC levies.",
        category: "tax",
      },
      {
        name: "Stats NZ",
        url: "https://www.stats.govt.nz/topics/income/",
        description: "Wage data, employment statistics, and cost of living indices.",
        category: "statistics",
      },
      {
        name: "Reserve Bank of New Zealand (RBNZ)",
        url: "https://www.rbnz.govt.nz/",
        description: "Official cash rate and monetary policy data.",
        category: "housing",
      },
    ],
  },
  in: {
    lastUpdated: "June 2026",
    methodology:
      "Our India calculators use income tax slabs, GST rates, and contribution limits published by the Income Tax Department and the Ministry of Finance. Economic data is sourced from Data.gov.in and the Ministry of Statistics and Programme Implementation (MOSPI). All figures are for educational purposes and should be verified with a qualified chartered accountant.",
    officialSources: [
      {
        name: "Income Tax Department",
        url: "https://www.incometaxindia.gov.in/Pages/acts/income-tax-act-1961.aspx",
        description: "Income tax slabs, exemption limits, and deduction rules under the Income Tax Act.",
        category: "tax",
      },
      {
        name: "Data.gov.in",
        url: "https://data.gov.in/",
        description: "Open government data including economic indicators and demographic statistics.",
        category: "data-gov",
      },
      {
        name: "Ministry of Finance",
        url: "https://www.finmin.nic.in/",
        description: "Union Budget, fiscal policy, and GST rate notifications.",
        category: "tax",
      },
      {
        name: "Reserve Bank of India (RBI)",
        url: "https://www.rbi.org.in/",
        description: "Repo rate, inflation data, and housing loan guidelines.",
        category: "housing",
      },
    ],
  },
  sg: {
    lastUpdated: "June 2026",
    methodology:
      "Our Singapore calculators follow income tax rates, CPF contribution rates, and GST rates published by IRAS and the Ministry of Finance. Economic data is sourced from SingStat and the Department of Statistics. All figures are for educational purposes and should be verified with a qualified professional.",
    officialSources: [
      {
        name: "Inland Revenue Authority of Singapore (IRAS)",
        url: "https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-rates",
        description: "Personal income tax rates, reliefs, and rebates.",
        category: "tax",
      },
      {
        name: "SingStat (Department of Statistics Singapore)",
        url: "https://www.singstat.gov.sg/find-data/search-by-theme/labour",
        description: "Economic indicators, wage data, and household statistics.",
        category: "statistics",
      },
      {
        name: "Ministry of Finance (Singapore)",
        url: "https://www.mof.gov.sg/",
        description: "Fiscal policy, GST rates, and government budget data.",
        category: "tax",
      },
      {
        name: "CPF Board",
        url: "https://www.cpf.gov.sg/",
        description: "CPF contribution rates, allocation ratios, and withdrawal rules.",
        category: "tax",
      },
    ],
  },
}

export function getLocaleSources(localeSlug: string): LocaleSources | undefined {
  return sourceRegistry[localeSlug]
}
