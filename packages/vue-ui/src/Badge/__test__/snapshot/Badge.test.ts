import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Badge from "../../Index.vue";

describe("Badge", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Badge, {
      props: {
        class: "rounded",
        iconLeft: "pi pi-home",
        iconRight: "pi pi-home",
        label: "Basic",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
