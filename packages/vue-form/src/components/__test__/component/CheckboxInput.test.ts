import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { z } from "zod";

import CheckboxInput from "../../CheckboxInput.vue";

describe("CheckboxInput", () => {
  it("renders single checkbox when no options provided", () => {
    const wrapper = mount(CheckboxInput);
    const checkbox = wrapper.find(".single-checkbox");

    expect(checkbox.exists()).toBe(true);
  });

  it("renders checkbox group when options provided", () => {
    const wrapper = mount(CheckboxInput, {
      props: {
        options: [
          { label: "Option 1", value: "opt1" },
          { label: "Option 2", value: "opt2" },
        ],
      },
    });
    const group = wrapper.find(".checkbox-group");
    const checkboxes = wrapper.findAll("input[type='checkbox']");

    expect(group.exists()).toBe(true);
    expect(checkboxes.length).toBe(2);
  });

  it("applies vertical direction by default", () => {
    const wrapper = mount(CheckboxInput, {
      props: {
        options: [
          { label: "Option 1", value: "opt1" },
          { label: "Option 2", value: "opt2" },
        ],
      },
    });
    const group = wrapper.find(".checkbox-group");

    expect(group.classes()).toContain("direction-vertical");
  });

  it("applies horizontal direction when specified", () => {
    const wrapper = mount(CheckboxInput, {
      props: {
        direction: "horizontal",
        options: [
          { label: "Option 1", value: "opt1" },
          { label: "Option 2", value: "opt2" },
        ],
      },
    });
    const group = wrapper.find(".checkbox-group");

    expect(group.classes()).toContain("direction-horizontal");
  });

  it("renders legend when label provided", () => {
    const wrapper = mount(CheckboxInput, {
      props: {
        label: "Select Options",
      },
    });
    const legend = wrapper.find("legend");

    expect(legend.exists()).toBe(true);
    expect(legend.text()).toBe("Select Options");
  });

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

  it("applies disabled attribute", () => {
    const wrapper = mount(CheckboxInput, {
      props: {
        disabled: true,
        options: [{ label: "Option 1", value: "opt1" }],
      },
    });
    const checkbox = wrapper.find("input[type='checkbox']");

    expect(checkbox.exists()).toBe(true);
    expect(checkbox.attributes("disabled")).toBeDefined();
  });

  it("applies custom schema when provided", () => {
    const customSchema = z.array(z.string()).min(1);
    const wrapper = mount(CheckboxInput, {
      props: {
        options: [{ label: "Option 1", value: "opt1" }],
        schema: customSchema as unknown as z.ZodType<string | number | boolean>,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("uses default name when not provided", () => {
    const wrapper = mount(CheckboxInput);
    const fieldset = wrapper.find("fieldset");

    expect(fieldset.classes()).toContain("checkbox");
  });
});
