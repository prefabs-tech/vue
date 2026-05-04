import type { VueWrapper } from "@vue/test-utils";

import configPlugin from "@prefabs.tech/vue3-config";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import AppFooter from "../../AppFooter.vue";
import config from "../config";

describe("AppFooter", () => {
  it("matches snapshot", () => {
    const wrapper: VueWrapper = shallowMount(AppFooter, {
      global: {
        plugins: [
          [
            configPlugin,
            {
              config,
            },
          ],
        ],
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
