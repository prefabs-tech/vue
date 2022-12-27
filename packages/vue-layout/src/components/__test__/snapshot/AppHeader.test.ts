import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import AppHeader from "@/components/AppHeader.vue";

import type { VueWrapper } from "@vue/test-utils";

describe("AppHeader Snapshot", () => {
  it("matches snapshot", () => {
    const wrapper: VueWrapper = shallowMount(AppHeader);

    expect(wrapper.element).toMatchSnapshot();
  });
});
