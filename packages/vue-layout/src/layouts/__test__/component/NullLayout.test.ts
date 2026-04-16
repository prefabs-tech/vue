import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NullLayout from "@/layouts/NullLayout.vue";

describe("NullLayout", () => {
  it("renders without any wrapper elements (header, footer, nav)", () => {
    const wrapper = mount(NullLayout, {
      slots: { default: "<p>Page content</p>" },
    });

    expect(wrapper.find("header").exists()).toBe(false);
    expect(wrapper.find("footer").exists()).toBe(false);
    expect(wrapper.find("nav").exists()).toBe(false);
  });
});
