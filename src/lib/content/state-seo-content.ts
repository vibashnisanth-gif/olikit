export interface StateSeoContent {
  majorCities: string[];
  medianHouseholdIncome: number;
  hasSDI: boolean;
  sdiRate?: number;
  sdiNote?: string;
  hasLocalTax: boolean;
  localTaxNote?: string;
  topRate: number;
  topRateAppliesAbove: number;
  standardDeductionSingle: number;
  funFact: string;
  costOfLivingIndex?: number;
}

export const STATE_SEO_CONTENT: Record<string, StateSeoContent> = {
  alabama: {
    majorCities: ["Birmingham", "Huntsville", "Montgomery", "Mobile", "Tuscaloosa"],
    medianHouseholdIncome: 59609,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 5,
    topRateAppliesAbove: 3000,
    standardDeductionSingle: 2500,
    funFact:
      "Alabama has one of the lowest cost of living indices in the U.S., meaning your take-home pay stretches further here.",
  },
  alaska: {
    majorCities: ["Anchorage", "Fairbanks", "Juneau", "Wasilla", "Sitka"],
    medianHouseholdIncome: 86153,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 0,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 0,
    funFact:
      "Alaska has no state income tax and no sales tax. Residents may also receive an annual Permanent Fund Dividend from oil revenues.",
  },
  arizona: {
    majorCities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale"],
    medianHouseholdIncome: 74561,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 2.5,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 14600,
    funFact:
      "Arizona switched to a flat 2.5% income tax rate in 2024, making it one of the simplest state tax systems in the country.",
  },
  arkansas: {
    majorCities: ["Little Rock", "Fayetteville", "Fort Smith", "Jonesboro", "Springdale"],
    medianHouseholdIncome: 56335,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 4.9,
    topRateAppliesAbove: 39700,
    standardDeductionSingle: 2340,
    funFact:
      "Arkansas exempts Social Security benefits from state income tax, which benefits retirees living in the state.",
  },
  california: {
    majorCities: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento"],
    medianHouseholdIncome: 91905,
    hasSDI: true,
    sdiRate: 1.3,
    sdiNote: "California SDI has no wage cap since 2024. The 1.3% rate applies to all wages.",
    hasLocalTax: false,
    topRate: 13.3,
    topRateAppliesAbove: 1000000,
    standardDeductionSingle: 5850,
    funFact:
      "California's top rate of 13.3% (including the 1% Mental Health Services Tax above $1M) is the highest state income tax rate in the U.S.",
    costOfLivingIndex: 142,
  },
  colorado: {
    majorCities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Boulder"],
    medianHouseholdIncome: 87616,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 4.4,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 14600,
    funFact:
      "Colorado has a flat 4.4% income tax rate and offers a state Earned Income Tax Credit for low-income filers.",
  },
  connecticut: {
    majorCities: ["Bridgeport", "New Haven", "Stamford", "Hartford", "Norwalk"],
    medianHouseholdIncome: 83572,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 6.99,
    topRateAppliesAbove: 500000,
    standardDeductionSingle: 15000,
    funFact:
      "Connecticut has one of the highest median household incomes in the U.S., which offsets its higher tax rates.",
  },
  delaware: {
    majorCities: ["Wilmington", "Dover", "Newark", "Middletown", "Bear"],
    medianHouseholdIncome: 74875,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 6.6,
    topRateAppliesAbove: 60000,
    standardDeductionSingle: 3250,
    funFact:
      "Delaware has no sales tax, which saves residents an average of $1,000+ per year compared to states with sales tax.",
  },
  "district-of-columbia": {
    majorCities: ["Washington"],
    medianHouseholdIncome: 101722,
    hasSDI: false,
    hasLocalTax: true,
    localTaxNote: "DC has its own income tax with rates up to 10.5% on income above $1,000,000.",
    topRate: 10.5,
    topRateAppliesAbove: 1000000,
    standardDeductionSingle: 14600,
    funFact:
      "DC residents pay federal income tax but have no voting representation in Congress — a longstanding political issue.",
  },
  florida: {
    majorCities: ["Jacksonville", "Miami", "Tampa", "Orlando", "Fort Lauderdale"],
    medianHouseholdIncome: 67917,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 0,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 0,
    funFact:
      "Florida has no state income tax and no state inheritance tax, making it one of the most tax-friendly states for retirees.",
  },
  georgia: {
    majorCities: ["Atlanta", "Augusta", "Columbus", "Savannah", "Athens"],
    medianHouseholdIncome: 71027,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 5.39,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 12000,
    funFact:
      "Georgia transitioned to a flat 5.39% income tax rate in 2024, simplifying its previously progressive system.",
  },
  hawaii: {
    majorCities: ["Honolulu", "Pearl City", "Hilo", "Kailua", "Waipahu"],
    medianHouseholdIncome: 92458,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 11,
    topRateAppliesAbove: 200000,
    standardDeductionSingle: 2200,
    funFact:
      "Hawaii has high income tax rates but no state tax on Social Security benefits, which benefits retired residents.",
  },
  idaho: {
    majorCities: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello"],
    medianHouseholdIncome: 66466,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 5.8,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 14600,
    funFact:
      "Idaho has a flat 5.8% income tax rate with a generous standard deduction, making it relatively tax-friendly.",
  },
  illinois: {
    majorCities: ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford"],
    medianHouseholdIncome: 78433,
    hasSDI: false,
    hasLocalTax: true,
    localTaxNote: "Chicago has additional property taxes but no local income tax.",
    topRate: 4.95,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 2775,
    funFact:
      "Illinois has a flat 4.95% income tax rate. A proposed progressive tax was rejected by voters in 2020.",
  },
  indiana: {
    majorCities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel"],
    medianHouseholdIncome: 65543,
    hasSDI: false,
    hasLocalTax: true,
    localTaxNote:
      "Indiana has a local income tax (called 'County Option Income Tax') that varies by county, typically 1-3%.",
    topRate: 3.05,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 5500,
    funFact:
      "Indiana's combined state and local income tax rate is one of the lowest in the Midwest, attracting businesses and residents.",
  },
  iowa: {
    majorCities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City"],
    medianHouseholdIncome: 61691,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 3.9,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 2500,
    funFact:
      "Iowa is transitioning to a flat 3.9% income tax rate by 2026, down from a top rate of 6%.",
  },
  kansas: {
    majorCities: ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka"],
    medianHouseholdIncome: 64124,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 5.7,
    topRateAppliesAbove: 60000,
    standardDeductionSingle: 3500,
    funFact:
      "Kansas exempts Social Security benefits from state income tax for residents with income below $75,000.",
  },
  kentucky: {
    majorCities: ["Louisville", "Lexington", "Bowling Green", "Covington", "Owensboro"],
    medianHouseholdIncome: 59345,
    hasSDI: false,
    hasLocalTax: true,
    localTaxNote: "Kentucky cities impose a local 'occupational license tax' of 1-2% on wages.",
    topRate: 4,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 2980,
    funFact:
      "Kentucky switched to a flat 4% income tax rate in 2024, one of the lowest flat rates in the U.S.",
  },
  louisiana: {
    majorCities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"],
    medianHouseholdIncome: 57852,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 4.25,
    topRateAppliesAbove: 50000,
    standardDeductionSingle: 12500,
    funFact:
      "Louisiana offers a significant tax credit for low-income workers through its Earned Income Tax Credit.",
  },
  maine: {
    majorCities: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn"],
    medianHouseholdIncome: 68251,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 7.15,
    topRateAppliesAbove: 50600,
    standardDeductionSingle: 13850,
    funFact:
      "Maine has a unique 'pine tree' tax structure with rates that increase more gradually than most states.",
  },
  maryland: {
    majorCities: ["Baltimore", "Frederick", "Rockville", "Gaithersburg", "Bowie"],
    medianHouseholdIncome: 98678,
    hasSDI: false,
    hasLocalTax: true,
    localTaxNote:
      "Maryland counties impose local income taxes ranging from 2.25% to 3.20% on state taxable income.",
    topRate: 5.75,
    topRateAppliesAbove: 250000,
    standardDeductionSingle: 2550,
    funFact:
      "Maryland has one of the highest median household incomes in the U.S., driven by proximity to Washington D.C.",
  },
  massachusetts: {
    majorCities: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell"],
    medianHouseholdIncome: 96505,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 5,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 13850,
    funFact:
      "Massachusetts has a flat 5% income tax rate, but a 4% surtax on income above $1 million was approved by voters in 2022.",
  },
  michigan: {
    majorCities: ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing", "Flint"],
    medianHouseholdIncome: 66469,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 4.25,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 5400,
    funFact:
      "Michigan has a flat 4.25% income tax rate and eliminated its pension tax in 2024, benefiting retirees.",
  },
  minnesota: {
    majorCities: ["Minneapolis", "St. Paul", "Rochester", "Bloomington", "Duluth"],
    medianHouseholdIncome: 84313,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 9.85,
    topRateAppliesAbove: 177880,
    standardDeductionSingle: 14150,
    funFact:
      "Minnesota has one of the highest income tax rates but also one of the best public education systems in the U.S.",
  },
  mississippi: {
    majorCities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi"],
    medianHouseholdIncome: 52985,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 5,
    topRateAppliesAbove: 10000,
    standardDeductionSingle: 2300,
    funFact:
      "Mississippi recently eliminated its 3% bracket, simplifying its tax structure to just two rates: 0% and 5%.",
  },
  missouri: {
    majorCities: ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence"],
    medianHouseholdIncome: 65712,
    hasSDI: false,
    hasLocalTax: true,
    localTaxNote: "St. Louis and Kansas City impose local earnings taxes of 1% on wages.",
    topRate: 4.8,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 14600,
    funFact:
      "Missouri eliminated its bottom two tax brackets in 2024, creating a simpler structure with rates from 2% to 4.8%.",
  },
  montana: {
    majorCities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Helena"],
    medianHouseholdIncome: 60560,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 6.75,
    topRateAppliesAbove: 20500,
    standardDeductionSingle: 14600,
    funFact:
      "Montana has no sales tax, which partially offsets its income tax rates for residents.",
  },
  nebraska: {
    majorCities: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney"],
    medianHouseholdIncome: 66605,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 5.64,
    topRateAppliesAbove: 34310,
    standardDeductionSingle: 7800,
    funFact:
      "Nebraska is phasing down its income tax rates, with the top rate scheduled to drop to 3.99% by 2027.",
  },
  nevada: {
    majorCities: ["Las Vegas", "Reno", "Henderson", "Sparks", "Carson City"],
    medianHouseholdIncome: 72331,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 0,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 0,
    funFact:
      "Nevada has no state income tax and no sales tax on groceries, making it very tax-friendly for families.",
  },
  "new-hampshire": {
    majorCities: ["Manchester", "Nashua", "Concord", "Derry", "Rochester"],
    medianHouseholdIncome: 88840,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 0,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 0,
    funFact:
      "New Hampshire has no income tax on wages (it previously taxed investment income, but that was eliminated in 2025).",
  },
  "new-jersey": {
    majorCities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Trenton"],
    medianHouseholdIncome: 96346,
    hasSDI: true,
    sdiRate: 0.5,
    sdiNote:
      "New Jersey has TDI (Temporary Disability Insurance) at 0.5% on the first $167,600 of wages.",
    hasLocalTax: false,
    topRate: 10.75,
    topRateAppliesAbove: 1000000,
    standardDeductionSingle: 10000,
    funFact:
      "New Jersey has one of the highest property tax rates in the U.S., which affects overall cost of living despite high salaries.",
  },
  "new-mexico": {
    majorCities: ["Albuquerque", "Las Cruces", "Santa Fe", "Rio Rancho", "Roswell"],
    medianHouseholdIncome: 59706,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 5.9,
    topRateAppliesAbove: 210000,
    standardDeductionSingle: 13550,
    funFact:
      "New Mexico offers a working families tax credit and has relatively low property taxes compared to neighboring states.",
  },
  "new-york": {
    majorCities: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"],
    medianHouseholdIncome: 75157,
    hasSDI: true,
    sdiRate: 0.5,
    sdiNote: "New York has PFL (Paid Family Leave) at 0.5% on the first $113,804 of wages.",
    hasLocalTax: true,
    localTaxNote:
      "New York City imposes an additional city income tax of 3.078% to 3.876% on top of state tax.",
    topRate: 10.9,
    topRateAppliesAbove: 25000000,
    standardDeductionSingle: 8000,
    funFact:
      "NYC residents pay up to 14.8% combined state + city income tax, one of the highest total rates in the U.S.",
    costOfLivingIndex: 187,
  },
  "north-carolina": {
    majorCities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"],
    medianHouseholdIncome: 66186,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 4.5,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 12750,
    funFact:
      "North Carolina has a flat 4.5% income tax rate that is scheduled to drop to 4.25% in 2026 and further to 3.99% by 2027.",
  },
  "north-dakota": {
    majorCities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo"],
    medianHouseholdIncome: 70218,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 2.5,
    topRateAppliesAbove: 48750,
    standardDeductionSingle: 14600,
    funFact:
      "North Dakota has one of the lowest income tax rates in the country, with a top rate of just 2.5%.",
  },
  ohio: {
    majorCities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"],
    medianHouseholdIncome: 62689,
    hasSDI: false,
    hasLocalTax: true,
    localTaxNote:
      "Ohio cities and towns impose local income taxes ranging from 0% to 3.5% on wages.",
    topRate: 2.75,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 8200,
    funFact:
      "Ohio has a flat 2.75% state income tax rate, but local taxes can add up to 3.5% in some cities.",
  },
  oklahoma: {
    majorCities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond"],
    medianHouseholdIncome: 58238,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 4.75,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 6350,
    funFact:
      "Oklahoma offers a 'Blue Lives Matter' tax credit for law enforcement officers and first responders.",
  },
  oregon: {
    majorCities: ["Portland", "Eugene", "Salem", "Bend", "Medford"],
    medianHouseholdIncome: 75673,
    hasSDI: true,
    sdiRate: 0.6,
    sdiNote: "Oregon has PFML (Paid Family and Medical Leave) at 0.6% on all wages.",
    hasLocalTax: true,
    localTaxNote: "Portland Metro area has an additional 1% tax on income above $200,000.",
    topRate: 9.9,
    topRateAppliesAbove: 125000,
    standardDeductionSingle: 2715,
    funFact:
      "Oregon has no sales tax, which saves residents money on purchases but the income tax rates are higher to compensate.",
  },
  pennsylvania: {
    majorCities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"],
    medianHouseholdIncome: 73170,
    hasSDI: false,
    hasLocalTax: true,
    localTaxNote:
      "Philadelphia imposes a city wage tax of 3.75% for residents and 3.50% for non-residents.",
    topRate: 3.07,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 0,
    funFact:
      "Pennsylvania has a flat 3.07% income tax rate, but Philadelphia residents pay an additional 3.75% city wage tax.",
  },
  "rhode-island": {
    majorCities: ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence"],
    medianHouseholdIncome: 79391,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 5.99,
    topRateAppliesAbove: 155050,
    standardDeductionSingle: 10000,
    funFact:
      "Rhode Island has a relatively small geographic size but high population density, leading to higher cost of living in coastal areas.",
  },
  "south-carolina": {
    majorCities: ["Charleston", "Columbia", "North Charleston", "Myrtle Beach", "Greenville"],
    medianHouseholdIncome: 59886,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 6.4,
    topRateAppliesAbove: 17330,
    standardDeductionSingle: 13850,
    funFact:
      "South Carolina offers a retirement income deduction of up to $3,000 for seniors, making it attractive for retirees.",
  },
  "south-dakota": {
    majorCities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Mitchell"],
    medianHouseholdIncome: 69457,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 0,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 0,
    funFact:
      "South Dakota has no state income tax, no corporate income tax, and no inheritance tax — one of the most tax-friendly states.",
  },
  tennessee: {
    majorCities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Murfreesboro"],
    medianHouseholdIncome: 65229,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 0,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 0,
    funFact:
      "Tennessee has no income tax on wages. The Hall Tax on investment income was fully eliminated in 2021.",
  },
  texas: {
    majorCities: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth"],
    medianHouseholdIncome: 73035,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 0,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 0,
    funFact:
      "Texas has no state income tax, but property tax rates are among the highest in the U.S. at an average of 1.60%.",
    costOfLivingIndex: 94,
  },
  utah: {
    majorCities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Ogden"],
    medianHouseholdIncome: 86406,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 4.55,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 13550,
    funFact:
      "Utah has a flat 4.55% income tax rate and offers a tax credit for low-income families with children.",
  },
  vermont: {
    majorCities: ["Burlington", "South Burlington", "Rutland", "Montpelier", "Barre"],
    medianHouseholdIncome: 69289,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 8.75,
    topRateAppliesAbove: 204400,
    standardDeductionSingle: 14300,
    funFact:
      "Vermont has a high income tax rate but offers a Earned Income Tax Credit and property tax credit for low-income residents.",
  },
  virginia: {
    majorCities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Arlington"],
    medianHouseholdIncome: 80945,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 5.75,
    topRateAppliesAbove: 17000,
    standardDeductionSingle: 8000,
    funFact:
      "Virginia has a relatively low top tax rate of 5.75% and a high standard deduction, making it tax-friendly for middle-income earners.",
  },
  washington: {
    majorCities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"],
    medianHouseholdIncome: 90325,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 0,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 0,
    funFact:
      "Washington has no state income tax but has a 6.5% state sales tax and capital gains tax of 7% on gains above $270,000.",
    costOfLivingIndex: 113,
  },
  "west-virginia": {
    majorCities: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling"],
    medianHouseholdIncome: 51248,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 5.12,
    topRateAppliesAbove: 60000,
    standardDeductionSingle: 2000,
    funFact:
      "West Virginia has relatively low income tax rates and a low cost of living, making it affordable for middle-income families.",
  },
  wisconsin: {
    majorCities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"],
    medianHouseholdIncome: 70607,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 7.65,
    topRateAppliesAbove: 304170,
    standardDeductionSingle: 12420,
    funFact:
      "Wisconsin has one of the highest income tax rates in the Midwest but also ranks high in education and healthcare quality.",
  },
  wyoming: {
    majorCities: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs"],
    medianHouseholdIncome: 70521,
    hasSDI: false,
    hasLocalTax: false,
    topRate: 0,
    topRateAppliesAbove: 0,
    standardDeductionSingle: 0,
    funFact:
      "Wyoming has no state income tax, no corporate income tax, and is funded primarily by mineral extraction taxes.",
  },
};
