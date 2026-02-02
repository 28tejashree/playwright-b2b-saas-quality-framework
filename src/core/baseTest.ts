import { test as base, APIRequestContext } from "@playwright/test";
import { loginViaApi } from "../api/auth.client";

type Fixtures = {
  authToken: string;
};

export const test = base.extend<Fixtures>({
  authToken: async ({ request }, use) => {
    const auth = await loginViaApi(request);
    await use(auth.token);
  },
});

export { expect } from "@playwright/test";
