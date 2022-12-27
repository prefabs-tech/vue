import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NullLayout from "../../NullLayout.vue";

import type { VueWrapper } from "@vue/test-utils";

describe("NullLayout", () => {
  it("matches snapshot", () => {
    const wrapper: VueWrapper = shallowMount(NullLayout);

    expect(wrapper.element).toMatchSnapshot();
  });
});
