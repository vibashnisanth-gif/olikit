/** @type {import('@lhci/cli').LhciServerConfig['collect']} */
module.exports = {
  url: ["http://localhost:3000"],
  numberOfRuns: 1,
  settings: {
    chromeFlags: "--no-sandbox --headless",
    preset: "desktop",
  },
};

/** @type {import('@lhci/cli').LhciServerConfig['assert']} */
module.exports.assert = {
  assertions: {
    "categories:performance": ["error", { minScore: 0.9 }],
    "categories:accessibility": ["error", { minScore: 0.95 }],
    "categories:best-practices": ["error", { minScore: 0.95 }],
    "categories:seo": ["error", { minScore: 0.95 }],
    "first-contentful-paint": ["error", { maxNumericValue: 2500 }],
    "largest-contentful-paint": ["error", { maxNumericValue: 2500 }],
    "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
    "interactive": ["error", { maxNumericValue: 3500 }],
  },
};

/** @type {import('@lhci/cli').LhciServerConfig['upload']} */
module.exports.upload = {
  target: "temporary-public-storage",
};
