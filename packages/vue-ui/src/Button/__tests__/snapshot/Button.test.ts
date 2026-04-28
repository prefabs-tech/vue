import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Button from "../../Index.vue";

describe("Button", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Button, {
      props: {
        children: false,
        className: "rounded",
        iconLeft: "pi pi-pencil",
        iconRight: "pi pi-eye",
        label: "Submit",
        loading: false,
        severity: "primary",
        size: "small",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
