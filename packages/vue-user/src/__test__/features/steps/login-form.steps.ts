import type { DataTable } from "quickpickle";

import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { getActivePinia } from "pinia";
import { Given, Then } from "quickpickle";
import { expect, vi } from "vitest";

import type { World } from "./common.steps";

import LoginForm from "../../../components/LoginForm.vue";

Given(
  "the app is configured with the {string} login type",
  (world: World, loginType: "email" | "username") => {
    world.appConfig.user = { features: { loginType } };
  },
);

Given("I open the login form", (world: World) => {
  const config = world.appConfig;

  world.wrapper = mount(LoginForm, {
    global: {
      plugins: [
        getActivePinia()!,
        [configPlugin, { config }],
        [i18nPlugin, { config }],
      ],
    },
  });
});

Then(
  "the form should be submitted with:",
  async (world: World, table: DataTable) => {
    await vi.waitFor(() =>
      expect(world.wrapper.emitted("submit")).toBeTruthy(),
    );

    expect(world.wrapper.emitted("submit")![0][0]).toMatchObject(
      table.rowsHash(),
    );
  },
);

Then("the form should not be submitted", (world: World) => {
  expect(world.wrapper.emitted("submit")).toBeUndefined();
});
