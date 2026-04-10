import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import ButtonElement from "../../Index.vue";

describe("ButtonElement", () => {
  it("renders as <button> by default", () => {
    const wrapper = mount(ButtonElement);
    expect(wrapper.element.tagName).toBe("BUTTON");
  });

  it("renders as <a> when to prop is set", () => {
    const wrapper = mount(ButtonElement, { props: { to: "/some-path" } });
    expect(wrapper.element.tagName).toBe("A");
  });

  it("sets role=link when to prop is set", () => {
    const wrapper = mount(ButtonElement, { props: { to: "/some-path" } });
    expect(wrapper.attributes("role")).toBe("link");
  });

  it("applies default severity, size, and variant classes", () => {
    const wrapper = mount(ButtonElement);
    const classes = wrapper.classes();
    expect(classes).toContain("primary");
    expect(classes).toContain("medium");
    expect(classes).toContain("filled");
  });

  it("applies icon-only class when no label or label slot provided", () => {
    const wrapper = mount(ButtonElement);
    expect(wrapper.classes()).toContain("icon-only");
  });

  it("does not apply icon-only class when label prop is set", () => {
    const wrapper = mount(ButtonElement, { props: { label: "Click me" } });
    expect(wrapper.classes()).not.toContain("icon-only");
  });

  it("applies loading class and disables button when loading=true", () => {
    const wrapper = mount(ButtonElement, { props: { loading: true } });
    expect(wrapper.classes()).toContain("loading");
    expect((wrapper.element as HTMLButtonElement).disabled).toBe(true);
  });

  it("shows LoadingIcon when loading=true", () => {
    const wrapper = mount(ButtonElement, { props: { loading: true } });
    expect(wrapper.find(".loading-button").exists()).toBe(true);
  });

  it("disables button when disabled=true", () => {
    const wrapper = mount(ButtonElement, { props: { disabled: true } });
    expect((wrapper.element as HTMLButtonElement).disabled).toBe(true);
  });

  it("emits click event when button is clicked", async () => {
    const wrapper = mount(ButtonElement);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("does not emit click when disabled", async () => {
    const wrapper = mount(ButtonElement, { props: { disabled: true } });
    await wrapper.trigger("click");
    // Disabled buttons block DOM click events in jsdom — no emit fires
    expect(wrapper.emitted("click")).toBeUndefined();
  });

  it("maps textOnly variant to text-only CSS class", () => {
    const wrapper = mount(ButtonElement, { props: { variant: "textOnly" } });
    expect(wrapper.classes()).toContain("text-only");
    expect(wrapper.classes()).not.toContain("textOnly");
  });

  it("renders label text when label prop provided", () => {
    const wrapper = mount(ButtonElement, { props: { label: "Submit" } });
    expect(wrapper.text()).toContain("Submit");
  });
});
