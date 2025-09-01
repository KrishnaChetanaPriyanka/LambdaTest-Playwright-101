import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory containing your tests
  timeout: 30 * 1000, // 30 seconds timeout per test
  expect: {
    timeout: 5000, // Timeout for expect() conditions
  },
  fullyParallel: true, // Run tests in parallel
  forbidOnly: !!process.env.CI, // Fail CI if test.only is left
  retries: process.env.CI ? 2 : 0, // Retry strategy
  workers: process.env.CI ? 1 : undefined, // Limit workers in CI
  reporter: [['list'], ['html', { open: 'never' }]], // Reporters

  use: {
    headless: false,
    actionTimeout: 0,
    baseURL: 'http://localhost:3000', // Set your app URL
    trace: 'on-first-retry', // Collect trace on failure
    screenshot: 'only-on-failure', // Capture screenshots on failure
    video: 'retain-on-failure', // Keep video only if test fails
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
    // Add mobile emulation if needed
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  // Folder for test artifacts
  outputDir: 'test-results/',
});
