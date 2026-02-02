import { test, expect } from "../core/baseTest";

test.describe("Dashboard Module", () => {
  test("User can add a todo item", async ({ page }) => {
    await page.goto("/");
    await page.locator(".new-todo").fill("Write Playwright tests");
    await page.keyboard.press("Enter");

    await expect(page.locator(".todo-list li")).toHaveText(
      "Write Playwright tests",
    );
  });
});
