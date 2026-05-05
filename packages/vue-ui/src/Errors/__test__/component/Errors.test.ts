import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Errors from "../../Index.vue";

describe("Errors", () => {
  it("renders a single error without a list wrapper", () => {
    const wrapper = mount(Errors, {
      props: { errors: [{ code: "ERR_001", message: "Something went wrong" }] },
    });
    expect(wrapper.find("ul").exists()).toBe(false);
    expect(wrapper.find(".error").exists()).toBe(true);
  });

  it("renders multiple errors as a <ul> list", () => {
    const wrapper = mount(Errors, {
      props: {
        errors: [
          { code: "ERR_001", message: "First error" },
          { code: "ERR_002", message: "Second error" },
        ],
      },
    });
    expect(wrapper.find("ul").exists()).toBe(true);
    expect(wrapper.findAll("li")).toHaveLength(2);
  });
});
