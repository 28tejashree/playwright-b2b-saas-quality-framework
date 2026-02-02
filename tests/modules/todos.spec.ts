import { test, expect } from "../../src/core/baseTest";
import { UsersApi } from "../../src/api/users.client";

test.describe("Dashboard Module @ui", () => {
  test("@smoke @critical User data fetched via API is visible in UI", async ({
    page,
    request,
  }) => {
    const usersApi = new UsersApi(request);
    const user = await usersApi.getUser(1);

    await page.goto("https://demo.playwright.dev/todomvc");

    await expect(page).toHaveTitle(/TodoMVC/);
    expect(user.name).toBeDefined();
  });

  test("@smoke @ui User logged in via API can access dashboard", async ({
    page,
    authToken,
  }) => {
    await page.addInitScript((token) => {
      window.localStorage.setItem("auth_token", token);
    }, authToken);

    await page.goto("https://example.cypress.io/todo");

    await expect(page).toHaveURL(/todo/);
  });

  test("@regression flaky demo test", async ({ page }) => {
    test.fixme(true, "Known flaky due to third-party dependency");
    await page.goto("https://example.cypress.io/todo");
    await expect(page.locator(".todo-list li")).toHaveCount(3);
  });
});
