import { test, expect } from "@playwright/test";

test.describe("Users API @api", () => {
  test("@smoke Get user by id", async ({ request }) => {
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("id", 1);
  });
});
