import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Checkbox from "../../Checkbox.vue";

describe("Checkbox", () => {
  it("renders a checkbox input", () => {
    const wrapper = mount(Checkbox);

    const input = wrapper.find('input[type="checkbox"]');
    expect(input.exists()).toBe(true);
  });

  it("uses default name 'checkbox'", () => {
    const wrapper = mount(Checkbox);

    const input = wrapper.find('input[type="checkbox"]');
    expect(input.attributes("name")).toBe("checkbox");
  });

  it("accepts custom name prop", () => {
    const wrapper = mount(Checkbox, {
      props: {
        name: "agree",
      },
    });

    const input = wrapper.find('input[type="checkbox"]');
    expect(input.attributes("name")).toBe("agree");
  });

  it("uses default modelValue as false", () => {
    const wrapper = mount(Checkbox);

    const input = wrapper.find('input[type="checkbox"]');
    expect(input.attributes("checked")).toBeUndefined();
  });

  it("reflects modelValue to checked state", () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: true,
      },
    });

    const input = wrapper.find('input[type="checkbox"]');
    expect((input.element as HTMLInputElement).checked).toBe(true);
  });

  it("emits update:modelValue when changed", async () => {
    const wrapper = mount(Checkbox);

    const input = wrapper.find('input[type="checkbox"]');
    // Set checked property directly on the element
    (input.element as HTMLInputElement).checked = true;
    await input.trigger("change");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);
  });

  it("accepts disabled prop", () => {
    const wrapper = mount(Checkbox, {
      props: {
        disabled: true,
      },
    });

    const input = wrapper.find('input[type="checkbox"]');
    expect(input.attributes("disabled")).toBeDefined();
  });

  it("renders label when provided", () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: "I agree to the terms",
      },
    });

    const label = wrapper.find("label");
    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("I agree to the terms");
  });

  it("associates label with input via id", () => {
    const wrapper = mount(Checkbox, {
      props: {
        name: "terms",
        label: "I agree",
      },
    });

    const input = wrapper.find('input[type="checkbox"]');
    const label = wrapper.find("label");

    expect(input.attributes("id")).toBe("terms");
    expect(label.attributes("for")).toBe("terms");
  });
});
