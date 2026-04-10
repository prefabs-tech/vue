import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import ButtonElement from "../../Index.vue";

describe("ButtonElement", () => {
  it("renders as <button> by default", () => {
    const wrapper = mount(ButtonElement);

    expect(wrapper.element.tagName).toBe("BUTTON");
  });

  it("renders as <a> when to prop is set", () => {
    const wrapper = mount(ButtonElement, { props: { to: "/home" } });

    expect(wrapper.element.tagName).toBe("A");
  });

  it("sets role=link when to prop is set", () => {
    const wrapper = mount(ButtonElement, { props: { to: "/home" } });

    expect(wrapper.attributes("role")).toBe("link");
  });

  it("sets role=button by default", () => {
    const wrapper = mount(ButtonElement);

    expect(wrapper.attributes("role")).toBe("button");
  });

  it("applies default severity class primary", () => {
    const wrapper = mount(ButtonElement);

    expect(wrapper.classes()).toContain("primary");
  });

  it("applies default size class medium", () => {
    const wrapper = mount(ButtonElement);

    expect(wrapper.classes()).toContain("medium");
  });

  it("applies default variant class filled", () => {
    const wrapper = mount(ButtonElement);

    expect(wrapper.classes()).toContain("filled");
  });

  it("applies default ariaLabel attribute", () => {
    const wrapper = mount(ButtonElement);

    expect(wrapper.attributes("aria-label")).toBe("button");
  });

  it("shows LoadingIcon when loading is true", () => {
    const wrapper = mount(ButtonElement, { props: { loading: true } });

    expect(wrapper.find(".loading-button").exists()).toBe(true);
  });

  it("adds loading class when loading is true", () => {
    const wrapper = mount(ButtonElement, { props: { loading: true } });

    expect(wrapper.classes()).toContain("loading");
  });

  it("disables the button when loading is true", () => {
    const wrapper = mount(ButtonElement, { props: { loading: true } });

    expect(wrapper.attributes("disabled")).toBeDefined();
  });

  it("adds icon-only class when no label prop is provided", () => {
    const wrapper = mount(ButtonElement);

    expect(wrapper.classes()).toContain("icon-only");
  });

  it("does not add icon-only class when label prop is provided", () => {
    const wrapper = mount(ButtonElement, { props: { label: "Click me" } });

    expect(wrapper.classes()).not.toContain("icon-only");
  });

  it("emits click event when button is clicked", async () => {
    const wrapper = mount(ButtonElement);

    await wrapper.trigger("click");

    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("does not emit click event when to prop is set", async () => {
    const wrapper = mount(ButtonElement, { props: { to: "/home" } });

    await wrapper.trigger("click");

    expect(wrapper.emitted("click")).toBeFalsy();
  });
});
