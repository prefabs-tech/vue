import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Card from "../../Index.vue";

describe("Card", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Card, {
      slots: {
        default: "<p>This is a card body.</p>",
        footer: "This is a footer.",
        header: "<h3>Test</h3>",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
