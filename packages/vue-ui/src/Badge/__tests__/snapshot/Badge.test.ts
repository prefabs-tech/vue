import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Badge from "../../Index.vue";

describe("Badge", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Badge, {
      props: {
        iconLeft: true,
        iconRight: true,
        label: "Basic",
        className: "rounded",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
