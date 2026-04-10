import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Switch from "../../Switch.vue";

describe("Switch", () => {
  it("renders a switch input", () => {
    const wrapper = mount(Switch);

    const input = wrapper.find('input[type="checkbox"]');
    expect(input.exists()).toBe(true);
  });

  it("uses default modelValue as false", () => {
    const wrapper = mount(Switch);

    const input = wrapper.find('input[type="checkbox"]');
    expect(input.attributes("checked")).toBeUndefined();
  });

  it("reflects modelValue to checked state", () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: true,
      },
    });

    const input = wrapper.find('input[type="checkbox"]');
    expect((input.element as HTMLInputElement).checked).toBe(true);
  });

  it("emits update:modelValue when changed", async () => {
    const wrapper = mount(Switch);

    const input = wrapper.find('input[type="checkbox"]');
    // Set checked property directly on the element
    (input.element as HTMLInputElement).checked = true;
    await input.trigger("change");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);
  });

  it("accepts disabled prop", () => {
    const wrapper = mount(Switch, {
      props: {
        disabled: true,
      },
    });

    const input = wrapper.find('input[type="checkbox"]');
    expect(input.attributes("disabled")).toBeDefined();
  });

  it("renders label when provided", () => {
    const wrapper = mount(Switch, {
      props: {
        label: "Enable feature",
      },
    });

    const label = wrapper.find("label");
    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("Enable feature");
  });

  it("passes onLabel as data attribute", () => {
    const wrapper = mount(Switch, {
      props: {
        onLabel: "On",
      },
    });

    const input = wrapper.find('input[type="checkbox"]');
    expect(input.attributes("data-on")).toBe("On");
  });

  it("passes offLabel as data attribute", () => {
    const wrapper = mount(Switch, {
      props: {
        offLabel: "Off",
      },
    });

    const input = wrapper.find('input[type="checkbox"]');
    expect(input.attributes("data-off")).toBe("Off");
  });

  it("applies labeled class when onLabel or offLabel is provided", () => {
    const wrapper = mount(Switch, {
      props: {
        onLabel: "On",
      },
    });

    const input = wrapper.find('input[type="checkbox"]');
    expect(input.classes()).toContain("labeled");
  });
});
