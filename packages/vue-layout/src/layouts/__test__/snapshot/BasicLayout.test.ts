import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import BasicLayout from "../../BasicLayout.vue";

import type { VueWrapper } from "@vue/test-utils";

describe("BasicLayout", () => {
  it("matches snapshot", () => {
    const wrapper: VueWrapper = shallowMount(BasicLayout);

    expect(wrapper.element).toMatchSnapshot();
  });
});
