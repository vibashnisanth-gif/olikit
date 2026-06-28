export interface StateBracketDef {
  rate: number
  min: number
  max: number
}

export type StateTaxBrackets = StateBracketDef[] | null

const NO_TAX: StateTaxBrackets = null

export const STATE_TAX_BRACKETS: Record<string, StateTaxBrackets> = {
  alaska: NO_TAX,
  florida: NO_TAX,
  nevada: NO_TAX,
  "new-hampshire": NO_TAX,
  "south-dakota": NO_TAX,
  tennessee: NO_TAX,
  texas: NO_TAX,
  washington: NO_TAX,
  wyoming: NO_TAX,

  arizona: [{ rate: 2.5, min: 0, max: Infinity }],
  colorado: [{ rate: 4.4, min: 0, max: Infinity }],
  georgia: [{ rate: 5.39, min: 0, max: Infinity }],
  idaho: [{ rate: 5.8, min: 0, max: Infinity }],
  illinois: [{ rate: 4.95, min: 0, max: Infinity }],
  indiana: [{ rate: 3.05, min: 0, max: Infinity }],
  iowa: [{ rate: 3.9, min: 0, max: Infinity }],
  kentucky: [{ rate: 4, min: 0, max: Infinity }],
  massachusetts: [{ rate: 5, min: 0, max: Infinity }],
  michigan: [{ rate: 4.25, min: 0, max: Infinity }],
  "north-carolina": [{ rate: 4.5, min: 0, max: Infinity }],
  ohio: [{ rate: 2.75, min: 0, max: Infinity }],
  pennsylvania: [{ rate: 3.07, min: 0, max: Infinity }],
  utah: [{ rate: 4.55, min: 0, max: Infinity }],

  alabama: [
    { rate: 2, min: 0, max: 500 },
    { rate: 4, min: 500, max: 3000 },
    { rate: 5, min: 3000, max: Infinity },
  ],
  arkansas: [
    { rate: 0, min: 0, max: 5400 },
    { rate: 2, min: 5400, max: 11200 },
    { rate: 3.9, min: 11200, max: 22400 },
    { rate: 4.4, min: 22400, max: 39700 },
    { rate: 4.9, min: 39700, max: Infinity },
  ],
  california: [
    { rate: 1, min: 0, max: 10756 },
    { rate: 2, min: 10756, max: 25499 },
    { rate: 4, min: 25499, max: 40245 },
    { rate: 6, min: 40245, max: 55866 },
    { rate: 8, min: 55866, max: 70612 },
    { rate: 9.3, min: 70612, max: 360659 },
    { rate: 10.3, min: 360659, max: 432787 },
    { rate: 11.3, min: 432787, max: 721314 },
    { rate: 12.3, min: 721314, max: 1000000 },
    { rate: 13.3, min: 1000000, max: Infinity },
  ],
  connecticut: [
    { rate: 3, min: 0, max: 10000 },
    { rate: 5, min: 10000, max: 50000 },
    { rate: 5.5, min: 50000, max: 100000 },
    { rate: 6, min: 100000, max: 200000 },
    { rate: 6.5, min: 200000, max: 250000 },
    { rate: 6.9, min: 250000, max: 500000 },
    { rate: 6.99, min: 500000, max: Infinity },
  ],
  delaware: [
    { rate: 0, min: 0, max: 2000 },
    { rate: 2.2, min: 2000, max: 5000 },
    { rate: 3.9, min: 5000, max: 10000 },
    { rate: 4.8, min: 10000, max: 25000 },
    { rate: 5.2, min: 25000, max: 40000 },
    { rate: 5.55, min: 40000, max: 60000 },
    { rate: 6.6, min: 60000, max: Infinity },
  ],
  "district-of-columbia": [
    { rate: 4, min: 0, max: 10000 },
    { rate: 6, min: 10000, max: 40000 },
    { rate: 6.5, min: 40000, max: 60000 },
    { rate: 8.5, min: 60000, max: 250000 },
    { rate: 9.25, min: 250000, max: 500000 },
    { rate: 9.75, min: 500000, max: 1000000 },
    { rate: 10.5, min: 1000000, max: Infinity },
  ],
  hawaii: [
    { rate: 1.4, min: 0, max: 2400 },
    { rate: 3.2, min: 2400, max: 4800 },
    { rate: 5.5, min: 4800, max: 9600 },
    { rate: 6.4, min: 9600, max: 14400 },
    { rate: 6.8, min: 14400, max: 19200 },
    { rate: 7.2, min: 19200, max: 24000 },
    { rate: 7.6, min: 24000, max: 36000 },
    { rate: 7.9, min: 36000, max: 48000 },
    { rate: 8.25, min: 48000, max: 72000 },
    { rate: 9, min: 72000, max: 96000 },
    { rate: 10, min: 96000, max: 120000 },
    { rate: 11, min: 120000, max: 160000 },
    { rate: 12, min: 160000, max: 200000 },
    { rate: 13, min: 200000, max: Infinity },
  ],
  kansas: [
    { rate: 3.1, min: 0, max: 16500 },
    { rate: 5.25, min: 16500, max: 33500 },
    { rate: 5.58, min: 33500, max: Infinity },
  ],
  louisiana: [
    { rate: 1.85, min: 0, max: 12500 },
    { rate: 3.5, min: 12500, max: 50000 },
    { rate: 4.25, min: 50000, max: Infinity },
  ],
  maine: [
    { rate: 5.8, min: 0, max: 26150 },
    { rate: 6.75, min: 26150, max: 61600 },
    { rate: 7.15, min: 61600, max: Infinity },
  ],
  maryland: [
    { rate: 2, min: 0, max: 1000 },
    { rate: 3, min: 1000, max: 2000 },
    { rate: 4, min: 2000, max: 3000 },
    { rate: 4.75, min: 3000, max: 100000 },
    { rate: 5, min: 100000, max: 125000 },
    { rate: 5.25, min: 125000, max: 150000 },
    { rate: 5.5, min: 150000, max: 250000 },
    { rate: 5.75, min: 250000, max: Infinity },
  ],
  minnesota: [
    { rate: 5.35, min: 0, max: 31380 },
    { rate: 6.8, min: 31380, max: 103630 },
    { rate: 7.85, min: 103630, max: 190310 },
    { rate: 9.85, min: 190310, max: Infinity },
  ],
  mississippi: [
    { rate: 0, min: 0, max: 12000 },
    { rate: 5, min: 12000, max: Infinity },
  ],
  missouri: [
    { rate: 0, min: 0, max: 1302 },
    { rate: 2, min: 1302, max: 2604 },
    { rate: 2.5, min: 2604, max: 3906 },
    { rate: 3, min: 3906, max: 5208 },
    { rate: 3.5, min: 5208, max: 6510 },
    { rate: 4, min: 6510, max: 7812 },
    { rate: 4.5, min: 7812, max: Infinity },
  ],
  montana: [
    { rate: 4.7, min: 0, max: 20500 },
    { rate: 5.9, min: 20500, max: Infinity },
  ],
  nebraska: [
    { rate: 2.25, min: 0, max: 3700 },
    { rate: 3.64, min: 3700, max: 22170 },
    { rate: 5.01, min: 22170, max: 35730 },
    { rate: 5.64, min: 35730, max: Infinity },
  ],
  "new-jersey": [
    { rate: 1.4, min: 0, max: 20000 },
    { rate: 1.8, min: 20000, max: 35000 },
    { rate: 3.2, min: 35000, max: 40000 },
    { rate: 3.9, min: 40000, max: 75000 },
    { rate: 5.1, min: 75000, max: 500000 },
    { rate: 5.75, min: 500000, max: Infinity },
  ],
  "new-mexico": [
    { rate: 1.7, min: 0, max: 5500 },
    { rate: 3.2, min: 5500, max: 11000 },
    { rate: 4.7, min: 11000, max: 16000 },
    { rate: 5, min: 16000, max: Infinity },
  ],
  "new-york": [
    { rate: 4, min: 0, max: 8500 },
    { rate: 4.5, min: 8500, max: 11700 },
    { rate: 5.25, min: 11700, max: 13900 },
    { rate: 5.85, min: 13900, max: 80650 },
    { rate: 6.25, min: 80650, max: 215400 },
    { rate: 6.85, min: 215400, max: 1077550 },
    { rate: 9.65, min: 1077550, max: 5000000 },
    { rate: 10.3, min: 5000000, max: 25000000 },
    { rate: 10.9, min: 25000000, max: Infinity },
  ],
  "north-dakota": [
    { rate: 0, min: 0, max: 44725 },
    { rate: 1.95, min: 44725, max: 110425 },
    { rate: 2.5, min: 110425, max: 230950 },
    { rate: 2.9, min: 230950, max: Infinity },
  ],
  oklahoma: [
    { rate: 0.25, min: 0, max: 2000 },
    { rate: 0.75, min: 2000, max: 5000 },
    { rate: 1.75, min: 5000, max: 7500 },
    { rate: 2.75, min: 7500, max: 10000 },
    { rate: 3.25, min: 10000, max: 12200 },
    { rate: 3.75, min: 12200, max: Infinity },
  ],
  oregon: [
    { rate: 4.75, min: 0, max: 4300 },
    { rate: 6.75, min: 4300, max: 10750 },
    { rate: 8.75, min: 10750, max: 27150 },
    { rate: 9.9, min: 27150, max: Infinity },
  ],
  "rhode-island": [
    { rate: 0, min: 0, max: 7740 },
    { rate: 3.75, min: 7740, max: Infinity },
  ],
  "south-carolina": [
    { rate: 0, min: 0, max: 3460 },
    { rate: 3, min: 3460, max: 17330 },
    { rate: 6.4, min: 17330, max: Infinity },
  ],
  vermont: [
    { rate: 3.35, min: 0, max: 44650 },
    { rate: 6.6, min: 44650, max: 108400 },
    { rate: 7.6, min: 108400, max: Infinity },
  ],
  virginia: [
    { rate: 2, min: 0, max: 3000 },
    { rate: 3, min: 3000, max: 5000 },
    { rate: 5, min: 5000, max: 17000 },
    { rate: 5.75, min: 17000, max: Infinity },
  ],
  "west-virginia": [
    { rate: 2.36, min: 0, max: 10000 },
    { rate: 3.15, min: 10000, max: 25000 },
    { rate: 3.64, min: 25000, max: 40000 },
    { rate: 4.62, min: 40000, max: 60000 },
    { rate: 5.12, min: 60000, max: Infinity },
  ],
  wisconsin: [
    { rate: 3.5, min: 0, max: 13770 },
    { rate: 4.65, min: 13770, max: 27490 },
    { rate: 6.15, min: 27490, max: 304170 },
    { rate: 7.65, min: 304170, max: Infinity },
  ],
}

export const STATE_NAMES: Record<string, string> = {
  alabama: "Alabama", alaska: "Alaska", arizona: "Arizona", arkansas: "Arkansas",
  california: "California", colorado: "Colorado", connecticut: "Connecticut",
  delaware: "Delaware", "district-of-columbia": "District of Columbia",
  florida: "Florida", georgia: "Georgia", hawaii: "Hawaii", idaho: "Idaho",
  illinois: "Illinois", indiana: "Indiana", iowa: "Iowa", kansas: "Kansas",
  kentucky: "Kentucky", louisiana: "Louisiana", maine: "Maine",
  maryland: "Maryland", massachusetts: "Massachusetts", michigan: "Michigan",
  minnesota: "Minnesota", mississippi: "Mississippi", missouri: "Missouri",
  montana: "Montana", nebraska: "Nebraska", nevada: "Nevada",
  "new-hampshire": "New Hampshire", "new-jersey": "New Jersey",
  "new-mexico": "New Mexico", "new-york": "New York",
  "north-carolina": "North Carolina", "north-dakota": "North Dakota",
  ohio: "Ohio", oklahoma: "Oklahoma", oregon: "Oregon",
  pennsylvania: "Pennsylvania", "rhode-island": "Rhode Island",
  "south-carolina": "South Carolina", "south-dakota": "South Dakota",
  tennessee: "Tennessee", texas: "Texas", utah: "Utah", vermont: "Vermont",
  virginia: "Virginia", washington: "Washington",
  "west-virginia": "West Virginia", wisconsin: "Wisconsin", wyoming: "Wyoming",
}

export const ALL_STATE_SLUGS = Object.keys(STATE_NAMES)

export function getStateName(slug: string): string {
  return STATE_NAMES[slug] ?? slug
}

export function getStateBrackets(slug: string): StateTaxBrackets {
  return STATE_TAX_BRACKETS[slug] ?? null
}

export function hasStateTax(slug: string): boolean {
  return STATE_TAX_BRACKETS[slug] !== null
}
