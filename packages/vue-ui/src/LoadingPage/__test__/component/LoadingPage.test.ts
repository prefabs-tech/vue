import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import LoadingPage from "../../Index.vue";

describe("LoadingPage", () => {
  it("does not render when loading=false", () => {
    const wrapper = mount(LoadingPage, { props: { loading: false } });
    expect(wrapper.find(".loading-page").exists()).toBe(false);
  });

  it("renders the loading overlay when loading=true", () => {
    const wrapper = mount(LoadingPage, { props: { loading: true } });
    expect(wrapper.find(".loading-page").exists()).toBe(true);
  });
});
