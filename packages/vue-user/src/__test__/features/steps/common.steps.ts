import type { VueWrapper } from "@vue/test-utils";

import { flushPromises } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { Before, Then, When } from "quickpickle";
import { expect } from "vitest";

import appConfig from "../../../components/__test__/config";

export interface World {
  appConfig: typeof appConfig;
  wrapper: VueWrapper;
}

Before(async (world: World) => {
  setActivePinia(createPinia());
  localStorage.clear();

  world.appConfig = structuredClone(appConfig);
});

When("I fill in {string} with {string}", async (world: World, name, value) => {
  await world.wrapper.find(`input[name="${name}"]`).setValue(value);
});

When("I submit the form", async (world: World) => {
  await world.wrapper.find("form").trigger("submit");
  await flushPromises();
});

Then("I should see {string}", (world: World, text: string) => {
  expect(world.wrapper.text()).toContain(text);
});

Then("I should not see {string}", (world: World, text: string) => {
  expect(world.wrapper.text()).not.toContain(text);
});
