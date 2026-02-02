import { test, expect } from "@playwright/test";

test.describe("API Health @api", () => {
  test("@smoke API health check", async ({ request }) => {
    // This test acts as a basic service availability check.
    // It is intentionally lightweight and used as a gatekeeper
    // before running heavier API or UI test suites.
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    // Validating only the HTTP status here,
    // as this test focuses on endpoint reachability
    // rather than business logic validation.
    expect(response.status()).toBe(200);
  });
});
