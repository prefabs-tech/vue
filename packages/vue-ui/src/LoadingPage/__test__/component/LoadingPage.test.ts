import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import LoadingPage from "../../Index.vue";

describe("LoadingPage", () => {
  it("renders loading overlay when loading is true", () => {
    const wrapper = mount(LoadingPage, { props: { loading: true } });

    expect(wrapper.find(".loading-page").exists()).toBe(true);
  });

  it("does not render loading overlay when loading is false", () => {
    const wrapper = mount(LoadingPage, { props: { loading: false } });

    expect(wrapper.find(".loading-page").exists()).toBe(false);
  });

  it("does not render loading overlay with default loading prop", () => {
    const wrapper = mount(LoadingPage);

    expect(wrapper.find(".loading-page").exists()).toBe(false);
  });
});
