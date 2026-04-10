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

  it("displays the error code in the rendered output", () => {
    const wrapper = mount(Errors, {
      props: { errors: [{ code: "ERR_404", message: "Not found" }] },
    });
    expect(wrapper.text()).toContain("ERR_404");
  });

  it("displays the error message in the rendered output", () => {
    const wrapper = mount(Errors, {
      props: { errors: [{ code: "ERR_404", message: "Not found" }] },
    });
    expect(wrapper.text()).toContain("Not found");
  });
});
