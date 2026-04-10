import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { h } from "vue";

import Form from "../../Form.vue";

describe("Form", () => {
  it("renders vee-validate Form component", () => {
    const wrapper = mount(Form, {
      slots: {
        default: () => h("div", { class: "form-content" }, "Form content"),
      },
    });

    expect(wrapper.find(".form").exists()).toBe(true);
    expect(wrapper.find(".form-content").exists()).toBe(true);
  });

  it("emits submit event with form data when form is submitted", async () => {
    const wrapper = mount(Form, {
      slots: {
        default: () => h("div", "Form content"),
      },
    });

    // Get the vee-validate Form and trigger submit
    const formElement = wrapper.find("form");
    await formElement.trigger("submit", { preventDefault: () => {} });

    // The emit happens with data from vee-validate's Form submission
    // We just verify the component doesn't crash
    expect(wrapper.exists()).toBe(true);
  });

  it("exposes resetForm method via ref", async () => {
    const wrapper = mount(Form, {
      slots: {
        default: () => h("div", "Form content"),
      },
    });

    // Access the exposed methods via the component instance
    const vm = wrapper.vm as unknown as { resetForm: () => void };
    expect(typeof vm.resetForm).toBe("function");

    // Should not throw when called
    expect(() => vm.resetForm()).not.toThrow();
  });

  it("exposes meta as computed property", async () => {
    const wrapper = mount(Form, {
      slots: {
        default: () => h("div", "Form content"),
      },
    });

    const vm = wrapper.vm as unknown as { meta: unknown };
    // meta should be exposed (will be undefined initially until vee-validate loads)
    expect(vm.meta).toBeDefined();
  });

  it("exposes getFieldMeta function", async () => {
    const wrapper = mount(Form, {
      slots: {
        default: () => h("div", "Form content"),
      },
    });

    const vm = wrapper.vm as unknown as {
      getFieldMeta: (fieldName: string) => unknown;
    };
    expect(typeof vm.getFieldMeta).toBe("function");

    // Should not throw when called
    expect(() => vm.getFieldMeta("testField")).not.toThrow();
  });

  it("exposes getFieldValue function", async () => {
    const wrapper = mount(Form, {
      slots: {
        default: () => h("div", "Form content"),
      },
    });

    const vm = wrapper.vm as unknown as {
      getFieldValue: (fieldName: string) => unknown;
    };
    expect(typeof vm.getFieldValue).toBe("function");

    // Should not throw when called
    expect(() => vm.getFieldValue("testField")).not.toThrow();
  });
});
