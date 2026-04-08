import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
import BasicLayout from "@/layouts/BasicLayout.vue";

describe("BasicLayout", () => {
  it("renders AppFooter by default", () => {
    const wrapper = shallowMount(BasicLayout);

    expect(wrapper.findComponent(AppFooter).exists()).toBe(true);
  });

  it("hides AppFooter when noFooter is true", () => {
    const wrapper = shallowMount(BasicLayout, {
      props: { noFooter: true },
    });

    expect(wrapper.findComponent(AppFooter).exists()).toBe(false);
  });

  it("passes noLocaleSwitcher to AppHeader", () => {
    const wrapper = shallowMount(BasicLayout, {
      props: { noLocaleSwitcher: true },
    });

    expect(wrapper.findComponent(AppHeader).props("noLocaleSwitcher")).toBe(
      true,
    );
  });

  it("renders default slot content inside main", () => {
    const wrapper = shallowMount(BasicLayout, {
      slots: { default: "<p>Page content</p>" },
    });

    expect(wrapper.find("main").text()).toBe("Page content");
  });
});
