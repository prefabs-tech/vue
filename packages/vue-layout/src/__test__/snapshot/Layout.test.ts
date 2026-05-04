import type { VueWrapper } from "@vue/test-utils";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Layout from "../../Layout.vue";
import router from "../router";

describe("Layout", () => {
  it("should match snapshot", () => {
    const wrapper: VueWrapper = shallowMount(Layout, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
