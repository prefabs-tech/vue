import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NullLayout from "@/layouts/NullLayout.vue";

describe("NullLayout", () => {
  it("renders slot content without any additional wrapping elements", () => {
    const wrapper = mount(NullLayout, {
      slots: { default: "<p>Page content</p>" },
    });

    expect(wrapper.find("p").text()).toBe("Page content");
    expect(wrapper.find("header").exists()).toBe(false);
    expect(wrapper.find("footer").exists()).toBe(false);
    expect(wrapper.find("nav").exists()).toBe(false);
  });
});
