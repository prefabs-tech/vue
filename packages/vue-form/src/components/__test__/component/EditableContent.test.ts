import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import EditableContent from "../../EditableContent.vue";

describe("EditableContent", () => {
  it("renders content in display mode by default", () => {
    const wrapper = mount(EditableContent, {
      props: {
        modelValue: "Test content",
      },
    });
    const content = wrapper.find(".content");

    expect(content.exists()).toBe(true);
    expect(content.text()).toBe("Test content");
  });

  it("renders content in default p element", () => {
    const wrapper = mount(EditableContent, {
      props: {
        modelValue: "Test content",
      },
    });
    const paragraph = wrapper.find("p");

    expect(paragraph.exists()).toBe(true);
    expect(paragraph.text()).toBe("Test content");
  });

  it("renders content in custom element", () => {
    const wrapper = mount(EditableContent, {
      props: {
        contentElement: "h2",
        modelValue: "Test heading",
      },
    });
    const heading = wrapper.find("h2");

    expect(heading.exists()).toBe(true);
    expect(heading.text()).toBe("Test heading");
  });

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

  it("applies placeholder to textarea", async () => {
    const wrapper = mount(EditableContent, {
      props: {
        modelValue: "",
        placeholder: "Enter text here",
      },
    });
    const content = wrapper.find(".content p");

    await content.trigger("click");
    await wrapper.vm.$nextTick();

    const textarea = wrapper.findComponent({ name: "TextareaInput" });
    expect(textarea.props("placeholder")).toBe("Enter text here");
  });

  it("applies resize prop to textarea", async () => {
    const wrapper = mount(EditableContent, {
      props: {
        modelValue: "Test",
        resize: "vertical",
      },
    });
    const content = wrapper.find(".content p");

    await content.trigger("click");
    await wrapper.vm.$nextTick();

    const textarea = wrapper.findComponent({ name: "TextareaInput" });
    expect(textarea.classes()).toContain("resize-vertical");
  });

  it("applies default resize none", async () => {
    const wrapper = mount(EditableContent, {
      props: {
        modelValue: "Test",
      },
    });
    const content = wrapper.find(".content p");

    await content.trigger("click");
    await wrapper.vm.$nextTick();

    const textarea = wrapper.findComponent({ name: "TextareaInput" });
    expect(textarea.classes()).toContain("resize-none");
  });

  it("applies size prop to Card", () => {
    const wrapper = mount(EditableContent, {
      props: {
        modelValue: "Test",
        size: "large",
      },
    });
    const card = wrapper.find(".editable-content .large");

    expect(card.exists()).toBe(true);
  });

  it("applies default size small", () => {
    const wrapper = mount(EditableContent, {
      props: {
        modelValue: "Test",
      },
    });
    const card = wrapper.find(".editable-content .small");

    expect(card.exists()).toBe(true);
  });
});
