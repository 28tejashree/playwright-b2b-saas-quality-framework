import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30 * 1000,
  retries: 1,

  use: {
    baseURL: "https://demo.playwright.dev/todomvc",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    { name: "Chromium", use: { browserName: "chromium" } },
    { name: "Firefox", use: { browserName: "firefox" } },
  ],
});
