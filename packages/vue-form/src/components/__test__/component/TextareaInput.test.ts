import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import TextareaInput from "../../TextareaInput.vue";

describe("TextareaInput", () => {
  it("renders label when provided", () => {
    const wrapper = mount(TextareaInput, {
      props: {
        label: "Description",
        name: "description",
      },
    });
    const label = wrapper.find("label");

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("Description");
  });

  it("applies rows attribute", () => {
    const wrapper = mount(TextareaInput, {
      props: {
        rows: 5,
      },
    });
    const textarea = wrapper.find("textarea");

    expect(textarea.attributes("rows")).toBe("5");
  });

  it("applies cols attribute", () => {
    const wrapper = mount(TextareaInput, {
      props: {
        cols: 40,
      },
    });
    const textarea = wrapper.find("textarea");

    expect(textarea.attributes("cols")).toBe("40");
  });

  it("emits update:modelValue on input", async () => {
    const wrapper = mount(TextareaInput);
    const textarea = wrapper.find("textarea");

    await textarea.setValue("test content");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["test content"]);
  });
});
