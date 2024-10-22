import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { Popup } from "../../..";
import Dropdown from "../../Index.vue";

describe("Dropdown", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Dropdown, {
      global: {
        components: {
          Popup,
        },
        mocks: {
          isVisible: true,
        },
      },
      props: {
        label: "Dropdown",
        menu: [
          {
            label: "Menu1",
            value: "menu1",
          },
          {
            label: "Menu2",
            value: "menu2",
          },
        ],
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
