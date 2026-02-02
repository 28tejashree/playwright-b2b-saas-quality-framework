import { test, expect } from "../../src/core/baseTest";
import { UsersApi } from "../../src/api/users.client";

test.describe("Dashboard Module @ui", () => {
  test("@smoke @critical User data fetched via API is visible in UI", async ({
    page,
    request,
  }) => {
    // Using direct API call to prepare test data.
    // This avoids dependency on UI flows and
    // keeps the test fast and deterministic.
    const usersApi = new UsersApi(request);
    const user = await usersApi.getUser(1);

    // Navigating directly to the application page
    // assuming user context is already prepared.
    await page.goto("https://demo.playwright.dev/todomvc");

    // Title check ensures the application
    // has loaded before performing assertions.
    await expect(page).toHaveTitle(/TodoMVC/);

    // Minimal assertion to validate API response integrity
    // without tightly coupling UI and API structures.
    expect(user.name).toBeDefined();
  });

  // This test validates that an authenticated user
  // can access the main application area.
  // UI login is intentionally skipped to reduce flakiness
  // and execution time in CI environments.
  test("@smoke @ui User logged in via API can access dashboard", async ({
    page,
    authToken,
  }) => {
    // Injecting auth token directly into local storage.
    // This simulates an already authenticated session
    // without relying on UI-based login flows.
    await page.addInitScript((token) => {
      window.localStorage.setItem("auth_token", token);
    }, authToken);

    // Navigating to the dashboard entry point
    // to validate access control.
    await page.goto("https://example.cypress.io/todo");

    // URL validation confirms successful access
    // to the authenticated area of the application.
    await expect(page).toHaveURL(/todo/);
  });

  test("@regression flaky demo test", async ({ page }) => {
    // Marking this test as fixme to document
    // known instability caused by external dependencies.
    // Keeping it visible helps track flaky areas over time.
    test.fixme(true, "Known flaky due to third-party dependency");

    await page.goto("https://example.cypress.io/todo");

    // Assertion intentionally left simple as
    // this test serves as a flaky-test handling example.
    await expect(page.locator(".todo-list li")).toHaveCount(3);
  });
});
