import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import LoadingButton from "../../LoadingButton.vue";

describe("LoadingButton", () => {
  it("is disabled when loading=true", () => {
    const wrapper = mount(LoadingButton, {
      props: { label: "Save", loading: true },
    });
    expect((wrapper.element as HTMLButtonElement).disabled).toBe(true);
  });

  it("is disabled when disabled=true", () => {
    const wrapper = mount(LoadingButton, {
      props: { label: "Save", disabled: true },
    });
    expect((wrapper.element as HTMLButtonElement).disabled).toBe(true);
  });

  it("shows LoadingIcon when loading=true", () => {
    const wrapper = mount(LoadingButton, {
      props: { label: "Save", loading: true },
    });
    // LoadingIcon renders a <div class="loading"> spinner
    expect(wrapper.find("div.loading").exists()).toBe(true);
  });

  it("does not show LoadingIcon when loading=false", () => {
    const wrapper = mount(LoadingButton, {
      props: { label: "Save", loading: false },
    });
    expect(wrapper.find("div.loading").exists()).toBe(false);
  });
});
