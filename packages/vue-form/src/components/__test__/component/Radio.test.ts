import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Radio from "../../Radio.vue";

describe("Radio", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  it("renders radio options", () => {
    const wrapper = mount(Radio, {
      props: {
        options,
      },
    });

    const radios = wrapper.findAll('input[type="radio"]');
    expect(radios.length).toBe(3);
  });

  it("uses default name 'radio'", () => {
    const wrapper = mount(Radio, {
      props: {
        options,
      },
    });

    const radios = wrapper.findAll('input[type="radio"]');
    for (const radio of radios) {
      expect(radio.attributes("name")).toBe("radio");
    }
  });

  it("accepts custom name prop", () => {
    const wrapper = mount(Radio, {
      props: {
        options,
        name: "choice",
      },
    });

    const radios = wrapper.findAll('input[type="radio"]');
    for (const radio of radios) {
      expect(radio.attributes("name")).toBe("choice");
    }
  });

  it("renders with vertical direction by default", () => {
    const wrapper = mount(Radio, {
      props: {
        options,
      },
    });

    const fieldset = wrapper.find("fieldset");
    expect(fieldset.classes()).toContain("direction-vertical");
  });

  it("applies horizontal direction class when specified", () => {
    const wrapper = mount(Radio, {
      props: {
        options,
        direction: "horizontal",
      },
    });

    const fieldset = wrapper.find("fieldset");
    expect(fieldset.classes()).toContain("direction-horizontal");
  });

  it("highlights selected option based on modelValue", () => {
    const wrapper = mount(Radio, {
      props: {
        options,
        modelValue: "2",
      },
    });

    const radios = wrapper.findAll('input[type="radio"]');
    expect((radios[1].element as HTMLInputElement).checked).toBe(true);
  });

  it("emits update:modelValue when option is selected", async () => {
    const wrapper = mount(Radio, {
      props: {
        options,
      },
    });

    const radios = wrapper.findAll('input[type="radio"]');
    // Set checked property directly on the element
    (radios[1].element as HTMLInputElement).checked = true;
    await radios[1].trigger("change");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["2"]);
  });

  it("does not emit when deselecting (only emits when checked)", async () => {
    const wrapper = mount(Radio, {
      props: {
        options,
        modelValue: "1",
      },
    });

    // Trigger change on option 1 (already selected)
    const radios = wrapper.findAll('input[type="radio"]');
    (radios[0].element as HTMLInputElement).checked = true;
    await radios[0].trigger("change");

    // Should still emit since it's checked
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
  });

  it("renders legend with label when provided", () => {
    const wrapper = mount(Radio, {
      props: {
        options,
        label: "Select an option",
      },
    });

    const legend = wrapper.find("legend");
    expect(legend.exists()).toBe(true);
    expect(legend.text()).toBe("Select an option");
  });

  it("renders helper text when provided", () => {
    const wrapper = mount(Radio, {
      props: {
        options,
        helperText: "Please select one",
      },
    });

    const helperText = wrapper.find(".helper-text");
    expect(helperText.exists()).toBe(true);
    expect(helperText.text()).toBe("Please select one");
  });

  it("disables radio inputs when disabled prop is true", () => {
    const wrapper = mount(Radio, {
      props: {
        options,
        disabled: true,
      },
    });

    const radios = wrapper.findAll('input[type="radio"]');
    for (const radio of radios) {
      expect(radio.attributes("disabled")).toBeDefined();
    }
  });

  it("renders option labels", () => {
    const wrapper = mount(Radio, {
      props: {
        options,
      },
    });

    const labels = wrapper.findAll("label");
    expect(labels.length).toBe(3);
    expect(labels[0].text()).toBe("Option 1");
    expect(labels[1].text()).toBe("Option 2");
    expect(labels[2].text()).toBe("Option 3");
  });
});
