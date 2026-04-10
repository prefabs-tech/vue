import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { z } from "zod";

import Input from "../../Input.vue";

describe("Input", () => {
  it("renders with custom type", () => {
    const wrapper = mount(Input, {
      props: {
        type: "email",
      },
    });
    const input = wrapper.find("input");

    expect(input.attributes("type")).toBe("email");
  });

  it("renders label when provided", () => {
    const wrapper = mount(Input, {
      props: {
        label: "Test Label",
        name: "test",
      },
    });
    const label = wrapper.find("label");

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("Test Label");
  });

  it("applies disabled attribute", () => {
    const wrapper = mount(Input, {
      props: {
        disabled: true,
      },
    });
    const input = wrapper.find("input");

    expect(input.attributes("disabled")).toBeDefined();
  });

  it("emits update:modelValue on input", async () => {
    const wrapper = mount(Input);
    const input = wrapper.find("input");

    await input.setValue("test value");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["test value"]);
  });

  it("applies custom schema when provided", () => {
    const customSchema = z.string().min(5);
    const wrapper = mount(Input, {
      props: {
        schema: customSchema,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
