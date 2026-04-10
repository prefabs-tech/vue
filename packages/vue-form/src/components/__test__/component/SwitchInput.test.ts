import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { z } from "zod";

import SwitchInput from "../../SwitchInput.vue";

describe("SwitchInput", () => {
  it("renders Switch component", () => {
    const wrapper = mount(SwitchInput);
    const switchComponent = wrapper.findComponent({ name: "ToggleSwitch" });

    expect(switchComponent.exists()).toBe(true);
  });

  it("renders label when provided", () => {
    const wrapper = mount(SwitchInput, {
      props: {
        label: "Enable notifications",
        name: "notifications",
      },
    });
    const label = wrapper.find("label");

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("Enable notifications");
    expect(label.attributes("for")).toBe("notifications");
  });

  it("does not render label when not provided", () => {
    const wrapper = mount(SwitchInput);
    const label = wrapper.find("label");

    expect(label.exists()).toBe(false);
  });

  it("applies disabled prop to Switch", () => {
    const wrapper = mount(SwitchInput, {
      props: {
        disabled: true,
      },
    });
    const switchComponent = wrapper.findComponent({ name: "ToggleSwitch" });

    expect(switchComponent.props("disabled")).toBe(true);
  });

  it("forwards onLabel prop to Switch", () => {
    const wrapper = mount(SwitchInput, {
      props: {
        onLabel: "On",
      },
    });
    const switchComponent = wrapper.findComponent({ name: "ToggleSwitch" });

    expect(switchComponent.props("onLabel")).toBe("On");
  });

  it("forwards offLabel prop to Switch", () => {
    const wrapper = mount(SwitchInput, {
      props: {
        offLabel: "Off",
      },
    });
    const switchComponent = wrapper.findComponent({ name: "ToggleSwitch" });

    expect(switchComponent.props("offLabel")).toBe("Off");
  });

  it("emits update:modelValue with boolean value", async () => {
    const wrapper = mount(SwitchInput, {
      props: {
        modelValue: false,
      },
    });
    const input = wrapper.find("input[type='checkbox']");

    await input.setValue(true);

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);
  });

  it("defaults to false when no modelValue provided", () => {
    const wrapper = mount(SwitchInput);
    const switchComponent = wrapper.findComponent({ name: "ToggleSwitch" });

    expect(switchComponent.props("modelValue")).toBe(false);
  });

  it("applies custom schema when provided", () => {
    const customSchema = z.boolean();
    const wrapper = mount(SwitchInput, {
      props: {
        schema: customSchema,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("uses default name when not provided", () => {
    const wrapper = mount(SwitchInput);
    const field = wrapper.find(".field");

    expect(field.classes()).toContain("switch");
  });

  it("applies custom name", () => {
    const wrapper = mount(SwitchInput, {
      props: {
        name: "custom-switch",
      },
    });
    const field = wrapper.find(".field");

    expect(field.classes()).toContain("custom-switch");
  });
});
