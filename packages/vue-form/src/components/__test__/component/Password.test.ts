import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { defineComponent, h, ref } from "vue";

import Password from "../../Password.vue";

// Mock vee-validate components
const MockField = defineComponent({
  emits: ["update:modelValue"],
  name: "MockField",
  props: {
    modelValue: { default: undefined, type: [String, Number] },
    name: { default: "field", type: String },
  },
  setup(props, { emit, slots }) {
    const meta = ref({ dirty: false, touched: false, valid: true });
    const handleChange = (event: Event) => {
      const value = (event.target as HTMLInputElement).value;
      emit("update:modelValue", value);
    };
    return () =>
      slots.default?.({
        field: { name: props.name, value: props.modelValue },
        handleChange,
        meta: meta.value,
      }) || h("div");
  },
});

const MockErrorMessage = defineComponent({
  name: "MockErrorMessage",
  props: {
    name: { default: "", type: String },
  },
  setup(props) {
    return () => h("span", { class: "error-message" }, props.name + "-error");
  },
});

describe("Password", () => {
  it("toggles input type between password and text", async () => {
    const wrapper = mount(Password, {
      global: {
        stubs: {
          ErrorMessage: MockErrorMessage,
          Field: MockField,
        },
      },
    });

    const eyeIcon = wrapper.find(".eye-icon");

    let input = wrapper.find('input[type="password"]');
    expect(input.exists()).toBe(true);

    await eyeIcon.trigger("click");

    input = wrapper.find('input[type="text"]');
    expect(input.exists()).toBe(true);
  });

  it("does not toggle password visibility when disabled", async () => {
    const wrapper = mount(Password, {
      global: {
        stubs: {
          ErrorMessage: MockErrorMessage,
          Field: MockField,
        },
      },
      props: {
        disabled: true,
      },
    });

    const eyeIcon = wrapper.find(".eye-icon");
    await eyeIcon.trigger("click");

    const input = wrapper.find('input[type="password"]');
    expect(input.exists()).toBe(true);
  });
});
