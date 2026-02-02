export const ENV = {
  baseURL:
    process.env.ENV === "prod"
      ? "https://example.cypress.io"
      : "https://example.cypress.io",
};
