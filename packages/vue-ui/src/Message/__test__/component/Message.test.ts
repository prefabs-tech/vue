import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Message from "../../Index.vue";

describe("Message", () => {
  it("renders a string message as text", () => {
    const wrapper = mount(Message, { props: { message: "Hello world" } });
    expect(wrapper.text()).toContain("Hello world");
  });

  it("renders an array message as a <ul> list", () => {
    const wrapper = mount(Message, {
      props: { message: ["First error", "Second error"] },
    });
    expect(wrapper.find("ul").exists()).toBe(true);
    const items = wrapper.findAll("li");
    expect(items).toHaveLength(2);
    expect(items[0].text()).toBe("First error");
    expect(items[1].text()).toBe("Second error");
  });

  it("applies the severity class to the root element", () => {
    const wrapper = mount(Message, {
      props: { message: "oops", severity: "danger" },
    });
    expect(wrapper.classes()).toContain("danger");
  });

  it("applies default severity class info when severity not provided", () => {
    const wrapper = mount(Message, { props: { message: "hey" } });
    expect(wrapper.classes()).toContain("info");
  });

  it("shows close button by default", () => {
    const wrapper = mount(Message, { props: { message: "hey" } });
    expect(wrapper.find(".close-message").exists()).toBe(true);
  });

  it("hides close button when enableClose=false", () => {
    const wrapper = mount(Message, {
      props: { message: "hey", enableClose: false },
    });
    expect(wrapper.find(".close-message").exists()).toBe(false);
  });

  it("hides the message element after clicking close", async () => {
    const wrapper = mount(Message, { props: { message: "hey" } });
    await wrapper.find(".close-message").trigger("click");
    // Message uses v-show, so element remains in DOM but hidden
    expect(wrapper.find(".message").isVisible()).toBe(false);
  });

  it("emits close event when close button is clicked", async () => {
    const wrapper = mount(Message, { props: { message: "hey" } });
    await wrapper.find(".close-message").trigger("click");
    expect(wrapper.emitted("close")).toBeTruthy();
  });
});
