import { test, expect } from "@playwright/test";

test.describe("Users API @api", () => {
  test("@api @regression Get user by id", async ({ request }) => {
    // Fetching a known user by ID to validate
    // the contract and stability of the Users API.
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    // Status validation ensures the API
    // responds successfully before parsing the body.
    expect(response.status()).toBe(200);

    // Parsing response body separately to keep
    // HTTP-level and data-level validations isolated.
    const body = await response.json();

    // Asserting only critical fields to avoid
    // unnecessary coupling with response structure.
    expect(body).toHaveProperty("id", 1);
  });
});
