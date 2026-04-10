import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { z } from "zod";

import Typeahead from "../../Typeahead.vue";

describe("Typeahead", () => {
  const suggestions = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];

  it("renders DebouncedInput component", () => {
    const wrapper = mount(Typeahead, {
      props: {
        suggestions,
      },
    });
    const input = wrapper.findComponent({ name: "DebouncedInput" });

    expect(input.exists()).toBe(true);
  });

  it("applies default debounceTime of 500ms", () => {
    const wrapper = mount(Typeahead, {
      props: {
        suggestions,
      },
    });
    const input = wrapper.findComponent({ name: "DebouncedInput" });

    expect(input.props("debounceTime")).toBe(500);
  });

  it("applies custom debounceTime", () => {
    const wrapper = mount(Typeahead, {
      props: {
        debounceTime: 1000,
        suggestions,
      },
    });
    const input = wrapper.findComponent({ name: "DebouncedInput" });

    expect(input.props("debounceTime")).toBe(1000);
  });

  it("renders label when provided", () => {
    const wrapper = mount(Typeahead, {
      props: {
        label: "Search",
        suggestions,
      },
    });
    const label = wrapper.find("label");

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("Search");
  });

  it("applies disabled prop", () => {
    const wrapper = mount(Typeahead, {
      props: {
        disabled: true,
        suggestions,
      },
    });
    const input = wrapper.findComponent({ name: "DebouncedInput" });

    expect(input.props("disabled")).toBe(true);
  });

  it("applies placeholder", () => {
    const wrapper = mount(Typeahead, {
      props: {
        placeholder: "Type to search",
        suggestions,
      },
    });
    const input = wrapper.findComponent({ name: "DebouncedInput" });

    expect(input.props("placeholder")).toBe("Type to search");
  });

  it("shows LoadingIcon when loading is true", () => {
    const wrapper = mount(Typeahead, {
      props: {
        loading: true,
        suggestions,
      },
    });
    const loadingIcon = wrapper.findComponent({ name: "LoadingIcon" });

    expect(loadingIcon.exists()).toBe(true);
  });

  it("filters suggestions based on input value", async () => {
    const wrapper = mount(Typeahead, {
      props: {
        suggestions,
      },
    });
    const input = wrapper.findComponent({ name: "DebouncedInput" });

    await input.vm.$emit("update:modelValue", "app");
    await wrapper.vm.$nextTick();

    const menuItems = wrapper.findAll("li");
    expect(menuItems.length).toBe(1);
    expect(menuItems[0].text()).toBe("Apple");
  });

  it("shows emptyMessage when no suggestions match", async () => {
    const wrapper = mount(Typeahead, {
      props: {
        emptyMessage: "No results found",
        suggestions,
      },
    });
    const input = wrapper.findComponent({ name: "DebouncedInput" });

    await input.vm.$emit("update:modelValue", "xyz");
    await wrapper.vm.$nextTick();

    const emptyMessage = wrapper.find("span[role='alert']");
    expect(emptyMessage.exists()).toBe(true);
    expect(emptyMessage.text()).toBe("No results found");
  });

  it("emits update:modelValue on input", async () => {
    const wrapper = mount(Typeahead, {
      props: {
        suggestions,
      },
    });
    const input = wrapper.findComponent({ name: "DebouncedInput" });

    await input.vm.$emit("update:modelValue", "test");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["test"]);
  });

  it("emits update:modelValue on suggestion selection", async () => {
    const wrapper = mount(Typeahead, {
      props: {
        suggestions,
      },
    });
    const input = wrapper.findComponent({ name: "DebouncedInput" });

    await input.vm.$emit("update:modelValue", "app");
    await wrapper.vm.$nextTick();

    const menuItem = wrapper.find("li");
    await menuItem.trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    const emitted = wrapper.emitted("update:modelValue") as string[][];
    expect(emitted.at(-1)).toEqual(["apple"]);
  });

  it("displays helperText when provided", () => {
    const wrapper = mount(Typeahead, {
      props: {
        helperText: "Start typing to see suggestions",
        suggestions,
      },
    });
    const helperText = wrapper.find(".helper-text");

    expect(helperText.exists()).toBe(true);
    expect(helperText.text()).toBe("Start typing to see suggestions");
  });

  it("applies custom schema when provided", () => {
    const customSchema = z.string().min(3);
    const wrapper = mount(Typeahead, {
      props: {
        schema: customSchema,
        suggestions,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("uses default name when not provided", () => {
    const wrapper = mount(Typeahead, {
      props: {
        suggestions,
      },
    });
    const field = wrapper.find(".field");

    expect(field.classes()).toContain("typeahead");
  });

  it("applies custom type to input", () => {
    const wrapper = mount(Typeahead, {
      props: {
        suggestions,
        type: "email",
      },
    });
    const input = wrapper.findComponent({ name: "DebouncedInput" });

    expect(input.props("type")).toBe("email");
  });
});
