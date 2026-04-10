import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import NumberInput from "../../NumberInput.vue";

describe("NumberInput", () => {
  it("renders label when provided", () => {
    const wrapper = mount(NumberInput, {
      props: {
        label: "Age",
        name: "age",
      },
    });
    const label = wrapper.find("label");

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("Age");
  });

  it("emits Number on input", async () => {
    const wrapper = mount(NumberInput);
    const input = wrapper.find("input");

    await input.setValue("42");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([42]);
  });

  it("emits undefined when input is cleared", async () => {
    const wrapper = mount(NumberInput, {
      props: {
        modelValue: 42,
      },
    });
    const input = wrapper.find("input");

    await input.setValue("");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([undefined]);
  });
});
