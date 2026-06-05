CREATE TABLE IF NOT EXISTS col_categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT
);

INSERT OR IGNORE INTO col_categories (slug, name, description) VALUES
  ('housing', 'Housing', 'Rent, mortgage, property costs'),
  ('food', 'Food & Groceries', 'Groceries, dining out, food delivery'),
  ('transport', 'Transportation', 'Public transit, fuel, vehicle costs'),
  ('utilities', 'Utilities', 'Electricity, water, gas, internet, phone'),
  ('healthcare', 'Healthcare', 'Insurance, doctor visits, medication'),
  ('education', 'Education', 'School, university, courses, childcare'),
  ('entertainment', 'Entertainment', 'Leisure, sports, culture, subscriptions'),
  ('clothing', 'Clothing & Apparel', 'Clothing, footwear, accessories'),
  ('childcare', 'Childcare', 'Daycare, nanny, babysitting');

CREATE TABLE IF NOT EXISTS col_entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  country_code TEXT NOT NULL,
  city_id INTEGER NOT NULL,
  category_slug TEXT NOT NULL,
  item_name TEXT NOT NULL,
  avg_cost REAL NOT NULL,
  min_cost REAL,
  max_cost REAL,
  currency_code TEXT NOT NULL DEFAULT 'USD',
  unit TEXT,
  frequency TEXT NOT NULL DEFAULT 'monthly',
  source TEXT,
  confidence_score REAL DEFAULT 0.7,
  year INTEGER NOT NULL,
  quarter INTEGER DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (city_id) REFERENCES cities(id),
  FOREIGN KEY (category_slug) REFERENCES col_categories(slug)
);

CREATE INDEX IF NOT EXISTS idx_col_entries_city ON col_entries(city_id);
CREATE INDEX IF NOT EXISTS idx_col_entries_category ON col_entries(category_slug);
CREATE INDEX IF NOT EXISTS idx_col_entries_country ON col_entries(country_code);
CREATE INDEX IF NOT EXISTS idx_col_entries_city_category ON col_entries(city_id, category_slug);

CREATE TABLE IF NOT EXISTS col_city_summary (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  country_code TEXT NOT NULL,
  city_id INTEGER NOT NULL,
  year INTEGER NOT NULL,
  total_monthly_cost_single REAL,
  total_monthly_cost_family REAL,
  rent_1br_city_center REAL,
  rent_1br_outside REAL,
  rent_3br_city_center REAL,
  rent_3br_outside REAL,
  grocery_index REAL,
  restaurant_index REAL,
  transport_pass_monthly REAL,
  utilities_monthly REAL,
  internet_monthly REAL,
  childcare_monthly REAL,
  healthcare_monthly REAL,
  local_purchasing_power REAL,
  num_entries_aggregated INTEGER DEFAULT 0,
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (city_id) REFERENCES cities(id),
  UNIQUE(city_id, year)
);

CREATE INDEX IF NOT EXISTS idx_col_summary_country ON col_city_summary(country_code);

CREATE TABLE IF NOT EXISTS col_price_indices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  base_city_id INTEGER NOT NULL,
  target_city_id INTEGER NOT NULL,
  year INTEGER NOT NULL,
  overall_index REAL NOT NULL,
  housing_index REAL,
  food_index REAL,
  transport_index REAL,
  utilities_index REAL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (base_city_id) REFERENCES cities(id),
  FOREIGN KEY (target_city_id) REFERENCES cities(id),
  UNIQUE(base_city_id, target_city_id, year)
);
