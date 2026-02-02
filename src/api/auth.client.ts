import { APIRequestContext, expect } from "@playwright/test";

export async function loginViaApi(request: APIRequestContext) {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: {
        username: "test_user",
        password: "password123",
      },
    },
  );

  expect(response.status()).toBe(201);

  // Simulate auth token (real apps return JWT)
  return {
    token: "mock-auth-token",
    userId: 1,
  };
}
