import { Given, Then, When } from "quickpickle";
import { expect } from "vitest";

import type { UserType } from "../../../types";

import useUserStore from "../../../store";

const userWithEmail = (email: string) =>
  ({ email, id: "user-123", roles: ["USER"] }) as Partial<UserType> as UserType;

Given("{string} logged in during a previous visit", (_, email: string) => {
  localStorage.setItem("user", JSON.stringify(userWithEmail(email)));
});

Given("I am logged in as {string}", async (_, email: string) => {
  await useUserStore().setUser(userWithEmail(email));
});

When(
  "I receive the access token {string} and the refresh token {string}",
  (_, accessToken: string, refreshToken: string) => {
    useUserStore().setAuthTokens({ accessToken, refreshToken });
  },
);

When("I log out", async () => {
  await useUserStore().logout();
});

Then("the access token {string} should be remembered", (_, token: string) => {
  expect(localStorage.getItem("accessToken")).toBe(token);
});

Then("the refresh token {string} should be remembered", (_, token: string) => {
  expect(localStorage.getItem("refreshToken")).toBe(token);
});

Then("the current user should be {string}", (_, email: string) => {
  expect(useUserStore().getUser()?.email).toBe(email);
});

Then("no user should be logged in", () => {
  expect(useUserStore().user).toBeUndefined();
});

Then("no user should be remembered", () => {
  expect(localStorage.getItem("user")).toBeNull();
});
