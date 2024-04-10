/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  collectCoverageFrom: [
    "**/*.{ts,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  coverageReporters: ["clover", "json", "lcov", ["text", { skipFull: true }]],
  globals: {
    window: {
      location: {},
    },
  },
};

export default config;
