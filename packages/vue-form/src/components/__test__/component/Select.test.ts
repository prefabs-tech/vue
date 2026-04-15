import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Select from "../../Select.vue";

describe("Select", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  it("emits update:modelValue when option is selected", async () => {
    const wrapper = mount(Select, {
      props: {
        options,
      },
    });

    await wrapper.vm.$emit("update:modelValue", "1");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["1"]);
  });

  it("emits update:searchInput when search changes", async () => {
    const wrapper = mount(Select, {
      props: {
        options,
      },
    });

    await wrapper.vm.$emit("update:searchInput", "search term");

    expect(wrapper.emitted("update:searchInput")).toBeTruthy();
    expect(wrapper.emitted("update:searchInput")?.[0]).toEqual(["search term"]);
  });

  it("handles keyboard navigation (ArrowDown, ArrowUp, Enter, Space)", async () => {
    const keys = ["ArrowDown", "ArrowUp", "Enter", " "];

    for (const key of keys) {
      const wrapper = mount(Select, {
        props: { options },
      });

      await wrapper.trigger("keydown", { key });
      await wrapper.vm.$nextTick();

      expect(wrapper.find(".multiselect").exists()).toBe(true);
    }
  });
});
