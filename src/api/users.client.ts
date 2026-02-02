import { APIRequestContext, expect } from "@playwright/test";

export class UsersApi {
  constructor(private request: APIRequestContext) {}

  async getUser(userId: number) {
    const response = await this.request.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    expect(response.ok()).toBeTruthy();
    return response.json();
  }
}
