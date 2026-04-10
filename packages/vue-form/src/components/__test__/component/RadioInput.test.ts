import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { z } from "zod";

import RadioInput from "../../RadioInput.vue";

import type { VueWrapper } from "@vue/test-utils";

describe("RadioInput", () => {
  const options = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
  ];

  const getRadioComponent = (
    wrapper: VueWrapper<InstanceType<typeof RadioInput>>,
  ) => {
    return wrapper.findComponent({ name: "RadioElement" });
  };

  it("renders Radio component", () => {
    const wrapper = mount(RadioInput, {
      props: {
        options,
      },
    });
    const radio = wrapper.findComponent({ name: "RadioElement" });

    expect(radio.exists()).toBe(true);
  });

  it("forwards options to Radio", () => {
    const wrapper = mount(RadioInput, {
      props: {
        options,
      },
    });
    const radio = getRadioComponent(wrapper);

    expect(radio.props("options")).toEqual(options);
  });

  it("forwards direction prop to Radio", () => {
    const wrapper = mount(RadioInput, {
      props: {
        direction: "horizontal",
        options,
      },
    });
    const radio = getRadioComponent(wrapper);

    expect(radio.props("direction")).toBe("horizontal");
  });

  it("forwards disabled prop to Radio", () => {
    const wrapper = mount(RadioInput, {
      props: {
        disabled: true,
        options,
      },
    });
    const radio = getRadioComponent(wrapper);

    expect(radio.props("disabled")).toBe(true);
  });

  it("forwards helperText prop to Radio", () => {
    const wrapper = mount(RadioInput, {
      props: {
        helperText: "Select one option",
        options,
      },
    });
    const radio = getRadioComponent(wrapper);

    expect(radio.props("helperText")).toBe("Select one option");
  });

  it("forwards label prop to Radio", () => {
    const wrapper = mount(RadioInput, {
      props: {
        label: "Choose an option",
        options,
      },
    });
    const radio = getRadioComponent(wrapper);

    expect(radio.props("label")).toBe("Choose an option");
  });

  it("emits update:modelValue only when radio is checked", async () => {
    const wrapper = mount(RadioInput, {
      props: {
        options,
      },
    });
    const radios = wrapper.findAll("input[type='radio']");

    await radios[0].setValue(true);

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["opt1"]);
  });

  it("applies custom schema when provided", () => {
    const customSchema = z.string();
    const wrapper = mount(RadioInput, {
      props: {
        options,
        schema: customSchema,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("uses default name when not provided", () => {
    const wrapper = mount(RadioInput, {
      props: {
        options,
      },
    });
    const radio = getRadioComponent(wrapper);

    expect(radio.props("name")).toBe("radio");
  });

  it("applies custom name", () => {
    const wrapper = mount(RadioInput, {
      props: {
        name: "custom-radio",
        options,
      },
    });
    const radio = getRadioComponent(wrapper);

    expect(radio.props("name")).toBe("custom-radio");
  });
});
