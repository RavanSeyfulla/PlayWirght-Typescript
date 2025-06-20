import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require("dotenv").config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
  export default defineConfig({
  testDir: "./tests",    // The folder where test files are located
  timeout: 60 * 1000,    // Max time (60 seconds) allowed for each test
  expect: {
    timeout: 5000,     // Maximum time (5 seconds) that each expect() will wait for the condition to be true (e.g., waiting for an element to appear)
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* // Prevent running tests with test.only if the tests are running in a CI environment (fail the build if found). */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        baseURL: "https://naveenautomationlabs.com/opencart",
        ...devices["Desktop Chrome"],
        headless: true,
      },
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"], headless: false },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"], headless: false },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
