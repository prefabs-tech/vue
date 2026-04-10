import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { z } from "zod";

import Email from "../../Email.vue";

describe("Email", () => {
  it("renders email input", () => {
    const wrapper = mount(Email);
    const input = wrapper.find("input");

    expect(input.exists()).toBe(true);
    expect(input.attributes("type")).toBe("email");
  });

  it("applies default autocomplete attribute", () => {
    const wrapper = mount(Email);
    const input = wrapper.find("input");

    expect(input.attributes("autocomplete")).toBe("email");
  });

  it("applies custom autocomplete attribute", () => {
    const wrapper = mount(Email, {
      props: {
        autocomplete: "username",
      },
    });
    const input = wrapper.find("input");

    expect(input.attributes("autocomplete")).toBe("username");
  });

  it("renders label when provided", () => {
    const wrapper = mount(Email, {
      props: {
        label: "Email Address",
        name: "user-email",
      },
    });
    const label = wrapper.find("label");

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("Email Address");
    expect(label.attributes("for")).toBe("input-field-user-email");
  });

  it("applies disabled attribute", () => {
    const wrapper = mount(Email, {
      props: {
        disabled: true,
      },
    });
    const input = wrapper.find("input");

    expect(input.attributes("disabled")).toBeDefined();
  });

  it("applies placeholder", () => {
    const wrapper = mount(Email, {
      props: {
        placeholder: "Enter your email",
      },
    });
    const input = wrapper.find("input");

    expect(input.attributes("placeholder")).toBe("Enter your email");
  });

  it("emits update:modelValue on input", async () => {
    const wrapper = mount(Email);
    const input = wrapper.find("input");

    await input.setValue("test@example.com");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([
      "test@example.com",
    ]);
  });

  it("uses emailSchema by default", () => {
    const wrapper = mount(Email);

    expect(wrapper.exists()).toBe(true);
  });

  it("accepts custom error messages", () => {
    const wrapper = mount(Email, {
      props: {
        errorMessages: {
          invalid: "Custom invalid email",
          required: "Custom required email",
        },
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("forwards options to emailSchema", () => {
    const wrapper = mount(Email, {
      props: {
        options: {
          allow_utf8_local_part: false,
        },
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("applies custom schema when provided", () => {
    const customSchema = z.string().email();
    const wrapper = mount(Email, {
      props: {
        schema: customSchema,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("uses default name when not provided", () => {
    const wrapper = mount(Email);
    const input = wrapper.find("input");

    expect(input.attributes("id")).toBe("input-field-email");
  });
});
