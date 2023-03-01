import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SubPane from "../../../components/SubPane.vue";
import Index from "../../Index.vue";

describe("Accordion", () => {
  it("renders correctly with slot", () => {
    const wrapper = mount(Index, {
      global: {
        components: { SubPane },
      },
      slots: {
        default: `
          <SubPane title="Subpane 1" icon="home.svg">
            <p>Subpan 1 content</p>
          </SubPane>
          <SubPane title="Subpane 2">
            <p>Subpane 2 content</p>
          </SubPane>
          <SubPane title="Subpane 3">
            <p>Subpane 3 content</p>
          </SubPane>
        `,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders correctly with props", () => {
    const wrapper = mount(Index, {
      global: {
        components: { SubPane },
      },
      props: {
        activeIcon: "upchevron.svg",
        defaultIndex: 1,
        direction: "horizontal",
        inactiveIcon: "downchevron.svg",
      },
      slots: {
        default: `
          <SubPane title="Subpane 1" icon="home.svg">
            <p>Subpan 1 content</p>
          </SubPane>
          <SubPane title="Subpane 2">
            <p>Subpane 2 content</p>
          </SubPane>
          <SubPane title="Subpane 3">
            <p>Subpane 3 content</p>
          </SubPane>
        `,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
