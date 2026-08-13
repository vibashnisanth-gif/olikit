/**
 * Pages that should be noindexed for AdSense approval.
 * These are thin/templated pages that provide little unique value.
 */

const NOINDEX_PATHS = [
  // Templated salary pages (data-only, identical structure)
  /-salary-by-country$/,
  /-salary-us$/,
  /-salary-uk$/,
  /-salary-australia$/,
  /-salary-canada$/,
  /-salary-new-zealand$/,
  /-salary-singapore$/,
  /-salary-india$/,
  /-salary-au$/,
  /-salary-ca$/,
  /-salary-nz$/,
  /-salary-sg$/,
  /-salary-in$/,
  /-salary$/,
  
  // Derived metrics pages (templated)
  /-tax-adjusted-salary$/,
  /-ppp-adjusted-salary$/,
  /-highest-paying-countries$/,
  /-best-countries$/,
  
  // Comparison pages (templated)
  /-vs-/,
  /-us-vs-/,
  /-uk-vs-/,
  /comparisons\//,
  
  // State pages (data-only)
  /\/state\//,
  /\/average-salary\//,
  /\/cost-of-living\//,
  /\/salary-vs-cost-of-living\//,
  
  // Tool/calculator pages
  /\/tools\//,
  
  // Glossary pages
  /\/glossary\//,
  
  // Rankings (templated)
  /\/rankings\//,
]

const NOINDEX_EXACT_PATHS = new Set([
  'professions',
  'professions/software-engineer',
  'professions/data-scientist',
])

export function shouldNoindex(pathname: string): boolean {
  // Check exact matches
  if (NOINDEX_EXACT_PATHS.has(pathname)) {
    return true
  }
  
  // Check pattern matches
  return NOINDEX_PATHS.some(pattern => pattern.test(pathname))
}

export function getNoindexMetadata(pathname: string) {
  if (shouldNoindex(pathname)) {
    return {
      robots: {
        index: false,
        follow: true,
      },
    }
  }
  return {}
}
