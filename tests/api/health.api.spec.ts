import { test, expect } from "@playwright/test";

test.describe("API Health @api", () => {
  test("@smoke API health check", async ({ request }) => {
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    expect(response.status()).toBe(200);
  });
});
