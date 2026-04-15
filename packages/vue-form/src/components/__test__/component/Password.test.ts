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

    let input = wrapper.find('input[type="password"]');
    expect(input.exists()).toBe(true);

    await eyeIcon.trigger("click");

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

    const input = wrapper.find('input[type="password"]');
    expect(input.exists()).toBe(true);
  });
});
