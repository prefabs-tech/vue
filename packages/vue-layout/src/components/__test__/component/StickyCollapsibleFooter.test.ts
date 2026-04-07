import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import StickyCollapsibleFooter from "@/components/StickyCollapsibleFooter.vue";

describe("StickyCollapsibleFooter", () => {
  it("applies the fixed CSS class by default", () => {
    const wrapper = mount(StickyCollapsibleFooter, {
      slots: { default: "Content" },
    });

    expect(wrapper.find("footer").classes()).toContain("fixed");
  });

  it("omits the fixed CSS class when fixed prop is false", () => {
    const wrapper = mount(StickyCollapsibleFooter, {
      props: { fixed: false },
      slots: { default: "Content" },
    });

    expect(wrapper.find("footer").classes()).not.toContain("fixed");
  });

  it("renders slot content", () => {
    const wrapper = mount(StickyCollapsibleFooter, {
      slots: { default: "<button>Save</button>" },
    });

    expect(wrapper.find("button").exists()).toBe(true);
  });
});
