import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Modal from "../../Index.vue";

describe("Modal", () => {
  it("is visible when show prop is true", () => {
    const wrapper = mount(Modal, { props: { show: true } });

    expect(wrapper.find(".modal").isVisible()).toBe(true);
  });

  it("is hidden when show prop is false", () => {
    const wrapper = mount(Modal, { props: { show: false } });

    expect(wrapper.find(".modal").isVisible()).toBe(false);
  });

  it("emits on:close when the close icon is clicked", async () => {
    const wrapper = mount(Modal, { props: { show: true } });

    await wrapper.find('svg[aria-label="close modal"]').trigger("click");

    expect(wrapper.emitted("on:close")).toBeTruthy();
  });
});
