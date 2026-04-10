import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { defineComponent, h, ref } from "vue";

import Password from "../../Password.vue";

// Mock vee-validate components
const MockField = defineComponent({
  name: "MockField",
  props: {
    name: { type: String, default: "field" },
    modelValue: { type: [String, Number], default: undefined },
  },
  emits: ["update:modelValue"],
  setup(props, { slots, emit }) {
    const meta = ref({ dirty: false, touched: false, valid: true });
    const handleChange = (event: Event) => {
      const value = (event.target as HTMLInputElement).value;
      emit("update:modelValue", value);
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

describe("Password", () => {
  it("renders a password input field", () => {
    const wrapper = mount(Password, {
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const input = wrapper.find('input[type="password"]');
    expect(input.exists()).toBe(true);
  });

  it("uses 'new-password' as default autocomplete", () => {
    const wrapper = mount(Password, {
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const input = wrapper.find('input[type="password"]');
    expect(input.attributes("autocomplete")).toBe("new-password");
  });

  it("accepts custom autocomplete prop", () => {
    const wrapper = mount(Password, {
      props: {
        autocomplete: "current-password",
      },
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const input = wrapper.find('input[type="password"]');
    expect(input.attributes("autocomplete")).toBe("current-password");
  });

  it("uses 'password' as default name", () => {
    const wrapper = mount(Password, {
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const input = wrapper.find('input[type="password"]');
    expect(input.attributes("id")).toBe("input-field-password");
  });

  it("accepts custom name prop", () => {
    const wrapper = mount(Password, {
      props: {
        name: "pwd",
      },
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const input = wrapper.find('input[type="password"]');
    expect(input.attributes("id")).toBe("input-field-pwd");
  });

  it("renders label when provided", () => {
    const wrapper = mount(Password, {
      props: {
        label: "Enter password",
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
    expect(label.text()).toBe("Enter password");
  });

  it("renders show/hide toggle button", () => {
    const wrapper = mount(Password, {
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const eyeIcon = wrapper.find(".eye-icon");
    expect(eyeIcon.exists()).toBe(true);
  });

  it("toggles input type between password and text", async () => {
    const wrapper = mount(Password, {
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const eyeIcon = wrapper.find(".eye-icon");

    // Initially type should be password
    let input = wrapper.find('input[type="password"]');
    expect(input.exists()).toBe(true);

    // Click toggle
    await eyeIcon.trigger("click");

    // Now should be text
    input = wrapper.find('input[type="text"]');
    expect(input.exists()).toBe(true);
  });

  it("does not toggle password visibility when disabled", async () => {
    const wrapper = mount(Password, {
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

    const eyeIcon = wrapper.find(".eye-icon");
    await eyeIcon.trigger("click");

    // Should still be password type
    const input = wrapper.find('input[type="password"]');
    expect(input.exists()).toBe(true);
  });

  it("renders placeholder when provided", () => {
    const wrapper = mount(Password, {
      props: {
        placeholder: "Enter your password",
      },
      global: {
        stubs: {
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const input = wrapper.find('input[type="password"]');
    expect(input.attributes("placeholder")).toBe("Enter your password");
  });

  it("applies disabled attribute when disabled prop is true", () => {
    const wrapper = mount(Password, {
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

    const input = wrapper.find('input[type="password"]');
    expect(input.attributes("disabled")).toBeDefined();
  });
});
