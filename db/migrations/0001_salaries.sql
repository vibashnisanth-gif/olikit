CREATE TABLE IF NOT EXISTS countries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  currency_code TEXT NOT NULL,
  region TEXT NOT NULL,
  population INTEGER,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS professions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS cities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  country_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  state_or_region TEXT,
  latitude REAL,
  longitude REAL,
  population INTEGER,
  is_capital INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (country_id) REFERENCES countries(id),
  UNIQUE(country_id, name, state_or_region)
);

CREATE TABLE IF NOT EXISTS salaries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  country_id INTEGER NOT NULL,
  city_id INTEGER,
  profession_id INTEGER NOT NULL,
  currency_code TEXT NOT NULL,
  min_annual INTEGER,
  avg_annual INTEGER NOT NULL,
  max_annual INTEGER,
  median_annual INTEGER,
  p10_annual INTEGER,
  p25_annual INTEGER,
  p75_annual INTEGER,
  p90_annual INTEGER,
  hourly_rate INTEGER,
  experience_level TEXT NOT NULL DEFAULT 'all',
  source TEXT,
  confidence_score REAL DEFAULT 0.7,
  year INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (country_id) REFERENCES countries(id),
  FOREIGN KEY (city_id) REFERENCES cities(id),
  FOREIGN KEY (profession_id) REFERENCES professions(id)
);

CREATE INDEX IF NOT EXISTS idx_salaries_country ON salaries(country_id);
CREATE INDEX IF NOT EXISTS idx_salaries_profession ON salaries(profession_id);
CREATE INDEX IF NOT EXISTS idx_salaries_country_profession ON salaries(country_id, profession_id);
CREATE INDEX IF NOT EXISTS idx_salaries_year ON salaries(year);

CREATE TABLE IF NOT EXISTS salary_snapshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  country_id INTEGER NOT NULL,
  profession_id INTEGER NOT NULL,
  year INTEGER NOT NULL,
  avg_annual INTEGER NOT NULL,
  median_annual INTEGER,
  sample_size INTEGER,
  snapshot_date TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (country_id) REFERENCES countries(id),
  FOREIGN KEY (profession_id) REFERENCES professions(id)
);
