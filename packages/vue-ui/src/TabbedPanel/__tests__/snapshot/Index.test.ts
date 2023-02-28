import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SubPane from "../../../components/SubPane.vue";
import Index from "../../Index.vue";

describe("TabbedPanel", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Index, {
      global: {
        components: { SubPane },
      },
      props: {
        position: "bottom",
      },
      slots: {
        default: `
            <SubPane title="Subpane 1" icon="home.svg">
            <p>Tabbed Panel 1 content</p>
            </SubPane>
            <SubPane title="Subpane 2">
            <p>Tabbed Panel 2 content</p>
            </SubPane>`,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
