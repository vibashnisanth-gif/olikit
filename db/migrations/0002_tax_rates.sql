CREATE TABLE IF NOT EXISTS tax_types (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT
);

INSERT OR IGNORE INTO tax_types (slug, name, description) VALUES
  ('income_tax', 'Income Tax', 'Personal income tax on earnings'),
  ('corporate_tax', 'Corporate Tax', 'Tax on corporate profits'),
  ('vat_gst', 'VAT / GST', 'Value-added tax or goods and services tax'),
  ('property_tax', 'Property Tax', 'Annual property tax rates'),
  ('capital_gains_tax', 'Capital Gains Tax', 'Tax on capital gains'),
  ('social_security', 'Social Security', 'Social security contributions');

CREATE TABLE IF NOT EXISTS tax_rates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  country_code TEXT NOT NULL,
  tax_type_slug TEXT NOT NULL,
  year INTEGER NOT NULL,
  description TEXT,
  is_progressive INTEGER NOT NULL DEFAULT 0,
  base_rate REAL,
  notes TEXT,
  source TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (tax_type_slug) REFERENCES tax_types(slug),
  UNIQUE(country_code, tax_type_slug, year)
);

CREATE TABLE IF NOT EXISTS tax_brackets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tax_rate_id INTEGER NOT NULL,
  bracket_order INTEGER NOT NULL,
  min_amount REAL NOT NULL DEFAULT 0,
  max_amount REAL,
  rate REAL NOT NULL,
  flat_amount REAL,
  description TEXT,
  FOREIGN KEY (tax_rate_id) REFERENCES tax_rates(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_tax_brackets_rate ON tax_brackets(tax_rate_id);

CREATE TABLE IF NOT EXISTS tax_regime_changes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  country_code TEXT NOT NULL,
  year INTEGER NOT NULL,
  tax_type_slug TEXT NOT NULL,
  change_description TEXT NOT NULL,
  previous_rate REAL,
  new_rate REAL,
  effective_date TEXT NOT NULL,
  source TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS country_tax_summary (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  country_code TEXT NOT NULL UNIQUE,
  year INTEGER NOT NULL,
  top_income_tax_rate REAL,
  corporate_tax_rate REAL,
  vat_rate REAL,
  social_security_employer REAL,
  social_security_employee REAL,
  capital_gains_rate REAL,
  overall_tax_burden_pct REAL,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
