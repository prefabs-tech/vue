import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import Typeahead from "../../Typeahead.vue";

describe("Typeahead", () => {
  const suggestions = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];

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
});
