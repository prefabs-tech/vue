import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import EditableContent from "../../EditableContent.vue";

describe("EditableContent", () => {
  it("switches to edit mode on click when allowEdit is true", async () => {
    const wrapper = mount(EditableContent, {
      props: {
        modelValue: "Test content",
      },
    });
    const content = wrapper.find(".content p");

    await content.trigger("click");
    await wrapper.vm.$nextTick();

    const textarea = wrapper.findComponent({ name: "TextareaInput" });
    expect(textarea.exists()).toBe(true);
  });

  it("does not switch to edit mode when allowEdit is false", async () => {
    const wrapper = mount(EditableContent, {
      props: {
        allowEdit: false,
        modelValue: "Test content",
      },
    });
    const content = wrapper.find(".content p");

    await content.trigger("click");
    await wrapper.vm.$nextTick();

    const textarea = wrapper.findComponent({ name: "TextareaInput" });
    expect(textarea.exists()).toBe(false);
  });

  it("applies disabled class when allowEdit is false", () => {
    const wrapper = mount(EditableContent, {
      props: {
        allowEdit: false,
        modelValue: "Test content",
      },
    });
    const content = wrapper.find(".content p");

    expect(content.classes()).toContain("disabled");
  });

  it("emits update:modelValue on input", async () => {
    const wrapper = mount(EditableContent, {
      props: {
        modelValue: "Test content",
      },
    });
    const content = wrapper.find(".content p");

    await content.trigger("click");
    await wrapper.vm.$nextTick();

    const textarea = wrapper.findComponent({ name: "TextareaInput" });
    await textarea.vm.$emit("update:modelValue", "Updated content");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([
      "Updated content",
    ]);
  });
});
