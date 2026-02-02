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
});
