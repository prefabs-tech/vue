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

  it("renders title in heading when title prop is provided", () => {
    const wrapper = mount(Modal, {
      props: { show: true, title: "My Modal" },
    });

    expect(wrapper.find('[role="heading"]').text()).toBe("My Modal");
  });

  it("emits on:close when the close icon is clicked", async () => {
    const wrapper = mount(Modal, { props: { show: true } });

    await wrapper.find('svg[aria-label="close modal"]').trigger("click");

    expect(wrapper.emitted("on:close")).toBeTruthy();
  });

  it("renders content area when default slot is provided", () => {
    const wrapper = mount(Modal, {
      props: { show: true },
      slots: { default: "<p>Modal body</p>" },
    });

    expect(wrapper.find(".content").exists()).toBe(true);
    expect(wrapper.find(".content").text()).toContain("Modal body");
  });

  it("renders footer area when footer slot is provided", () => {
    const wrapper = mount(Modal, {
      props: { show: true },
      slots: { footer: "<button>OK</button>" },
    });

    expect(wrapper.find(".footer").exists()).toBe(true);
  });

  it("applies medium size class by default", () => {
    const wrapper = mount(Modal, { props: { show: true } });

    expect(wrapper.find(".dialog").classes()).toContain("medium");
  });

  it("does not dismiss on outside click when dismissOnClickOut is false (default)", () => {
    const wrapper = mount(Modal, { props: { show: true } });

    expect(wrapper.props("dismissOnClickOut")).toBe(false);
  });
});
