import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Card from "../../Index.vue";

describe("Card", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Card, {
      slots: {
        default: "<p>This is a card body.</p>",
        header: "<h3>Test</h3>",
        footer: "This is a footer.",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
