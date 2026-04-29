import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import CheckboxInput from "../../CheckboxInput.vue";

describe("CheckboxInput", () => {
  it("emits update:checked for single checkbox", async () => {
    const wrapper = mount(CheckboxInput, {
      props: {
        inputLabel: "Accept terms",
      },
    });
    const checkbox = wrapper.find("input[type='checkbox']");

    await checkbox.setValue(true);

    expect(wrapper.emitted("update:checked")).toBeTruthy();
    expect(wrapper.emitted("update:checked")?.[0]).toEqual([true]);
  });

  it("emits update:modelValue for checkbox group", async () => {
    const wrapper = mount(CheckboxInput, {
      props: {
        modelValue: [],
        options: [
          { label: "Option 1", value: "opt1" },
          { label: "Option 2", value: "opt2" },
        ],
      },
    });
    const checkboxes = wrapper.findAll("input[type='checkbox']");

    await checkboxes[0].setValue(true);

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([["opt1"]]);
  });

  it("removes value from array when unchecked", async () => {
    const wrapper = mount(CheckboxInput, {
      props: {
        modelValue: ["opt1", "opt2"],
        options: [
          { label: "Option 1", value: "opt1" },
          { label: "Option 2", value: "opt2" },
        ],
      },
    });
    const checkboxes = wrapper.findAll("input[type='checkbox']");

    await checkboxes[0].setValue(false);

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([["opt2"]]);
  });
});
