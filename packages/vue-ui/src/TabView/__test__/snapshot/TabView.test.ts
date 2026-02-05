import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import TabView from "../../Index.vue";

describe("TabView", () => {
  it("matches snapshot", () => {
    const wrapper = mount(TabView, {
      props: {
        activeKey: "tab1",
        tabs: [
          {
            key: "tab1",
            label: "Tab1",
          },
          {
            key: "tab2",
            label: "Tab2",
          },
          {
            key: "tab3",
            label: "Tab3",
          },
          {
            key: "tab4",
            label: "Tab4",
          },
        ],
        visibleTabs: ["tab1", "tab2", "tab3", "tab4"],
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
