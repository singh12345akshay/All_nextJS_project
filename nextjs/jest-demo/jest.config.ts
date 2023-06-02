import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  // shows the test runs for client side

  displayName: "CLIENT",

  // Shows error on calling dpreciated API

  errorOnDeprecated: true,

  // also cover test cases in pages with .test.ts

  forceCoverageMatch: ["**/*.test.ts"],

  // Insert Jest's globals (expect, test, describe, beforeEach etc.) into the global environment.

  injectGlobals: true,

  // modules directories to searched recusively

  moduleDirectories: ["node_modules", "<rootDir>/", "src"],

  // extension our project (moved ts an tsx first since order matters in this)

  moduleFileExtensions: [
    "ts",

    "tsx",

    "js",

    "mjs",

    "cjs",

    "jsx",

    "json",

    "node",
  ],

  // The root of the directory containing your Jest config file

  rootDir: "src",

  // With this option you can specify extra properties to be defined inside the vm for faster lookups.

  sandboxInjectedGlobals: ["Math"],

  // the number of seconds it takes for test to be labeled slow

  slowTestThreshold: 5,

  // setting test environment for jest

  testEnvironment: "node",

  // testEnvironment: 'jest-environment-jsdom',

  // to set test environments opitons ( kept empty to be set later)

  testEnvironmentOptions: {},

  // Default timeout of a test in milliseconds.

  testTimeout: 1500,

  // Indicates whether each individual test should be reported during the run.

  verbose: true,
};

const config = createJestConfig(customJestConfig);

export default config;
