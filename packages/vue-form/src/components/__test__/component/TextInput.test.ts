import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { defineComponent, h, ref } from "vue";
import { z } from "zod";

import TextInput from "../../TextInput.vue";

// Mock vee-validate components
const MockField = defineComponent({
  name: "MockField",
  props: {
    name: { type: String, default: "field" },
    modelValue: { type: [String, Number], default: undefined },
  },
  emits: ["update:modelValue"],
  setup(props, { slots }) {
    const meta = ref({ dirty: false, touched: false, valid: true });
    const handleChange = () => {
      slots.default?.({
        field: { name: props.name, value: props.modelValue },
        meta: meta.value,
        handleChange: () => {},
      });
    };
    return () =>
      slots.default?.({
        field: { name: props.name, value: props.modelValue },
        meta: meta.value,
        handleChange,
      }) || h("div");
  },
});

const MockErrorMessage = defineComponent({
  name: "MockErrorMessage",
  props: {
    name: { type: String, default: "" },
  },
  setup(props) {
    return () => h("span", { class: "error-message" }, props.name + "-error");
  },
});

describe("TextInput", () => {
  it("renders a text input field", () => {
    const wrapper = mount(TextInput, {
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const input = wrapper.find('input[type="text"]');
    expect(input.exists()).toBe(true);
  });

  it("uses default name 'text'", () => {
    const wrapper = mount(TextInput, {
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const input = wrapper.find('input[type="text"]');
    expect(input.attributes("name")).toBe("text");
  });

  it("accepts custom name prop", () => {
    const wrapper = mount(TextInput, {
      props: {
        name: "username",
      },
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const input = wrapper.find('input[type="text"]');
    expect(input.attributes("name")).toBe("username");
  });

  it("renders label when provided", () => {
    const wrapper = mount(TextInput, {
      props: {
        label: "Username",
      },
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const label = wrapper.find("label");
    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("Username");
  });

  it("renders placeholder when provided", () => {
    const wrapper = mount(TextInput, {
      props: {
        placeholder: "Enter your username",
      },
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const input = wrapper.find('input[type="text"]');
    expect(input.attributes("placeholder")).toBe("Enter your username");
  });

  it("applies disabled attribute when disabled prop is true", () => {
    const wrapper = mount(TextInput, {
      props: {
        disabled: true,
      },
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const input = wrapper.find('input[type="text"]');
    expect(input.attributes("disabled")).toBeDefined();
  });

  it("accepts custom schema prop", () => {
    const wrapper = mount(TextInput, {
      props: {
        schema: { minLength: 3 } as unknown as z.ZodType<string | number>,
      },
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    // Component should render with custom schema
    expect(wrapper.exists()).toBe(true);
  });

  it("accepts errorMessages prop with custom messages", () => {
    const wrapper = mount(TextInput, {
      props: {
        errorMessages: {
          required: "This field is mandatory",
          invalid: "Please enter valid data",
        },
      },
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    // Component should render with custom error messages
    expect(wrapper.exists()).toBe(true);
  });

  it("passes options to textSchema", () => {
    const wrapper = mount(TextInput, {
      props: {
        options: {
          required: true,
          ignore_whitespace: false,
        },
      },
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    // Component should render
    expect(wrapper.exists()).toBe(true);
  });
});
