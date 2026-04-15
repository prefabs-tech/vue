import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import CountryPicker from "../../CountryPicker/Index.vue";

describe("CountryPicker", () => {
  it("emits update:modelValue on selection", async () => {
    const wrapper = mount(CountryPicker);
    const selectInput = wrapper.findComponent({ name: "SelectInput" });

    await selectInput.vm.$emit("update:modelValue", "US");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["US"]);
  });

  it("deduplicates selected values in multi-select mode", async () => {
    const wrapper = mount(CountryPicker, {
      props: {
        modelValue: ["US", "US", "CA"],
        multiple: true,
      },
    });
    const selectInput = wrapper.findComponent({ name: "SelectInput" });

    await selectInput.vm.$emit("update:modelValue", ["US", "US", "CA"]);

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    const emitted = wrapper.emitted("update:modelValue")?.[0]?.[0] as string[];
    expect(emitted.length).toBe(2);
    expect(emitted).toContain("US");
    expect(emitted).toContain("CA");
  });
});
