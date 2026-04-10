import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import TabView from "../../Index.vue";

import type { Tab } from "../../types";

const tabs: Tab[] = [
  { key: "tab1", label: "Tab 1", children: "Content of tab 1" },
  { key: "tab2", label: "Tab 2", children: "Content of tab 2" },
  { key: "tab3", label: "Tab 3", children: "Content of tab 3" },
];

describe("TabView", () => {
  it("renders only the active tab content in lazy mode (default)", () => {
    const wrapper = mount(TabView, {
      props: { activeKey: "tab1", tabs, visibleTabs: ["tab1", "tab2", "tab3"] },
    });

    const tabPanel = wrapper.find('[role="tabpanel"]');

    expect(tabPanel.text()).toContain("Content of tab 1");
    expect(tabPanel.text()).not.toContain("Content of tab 2");
  });

  it("renders active tab content when lazy is false", () => {
    // When tab children are strings, the active tab's content renders as text
    // regardless of the lazy flag. The non-lazy v-show path applies to VNode slot children.
    const wrapper = mount(TabView, {
      props: {
        activeKey: "tab2",
        tabs,
        visibleTabs: ["tab1", "tab2", "tab3"],
        lazy: false,
      },
    });

    const tabPanel = wrapper.find('[role="tabpanel"]');

    expect(tabPanel.text()).toContain("Content of tab 2");
  });

  it("filters visible tabs when visibleTabs prop is provided", () => {
    const wrapper = mount(TabView, {
      props: {
        activeKey: "tab1",
        tabs,
        visibleTabs: ["tab1", "tab2"],
      },
    });

    const tabButtons = wrapper.findAll('[role="tab"]');

    expect(tabButtons).toHaveLength(2);
    expect(tabButtons[0].text()).toContain("Tab 1");
    expect(tabButtons[1].text()).toContain("Tab 2");
  });

  it("emits beforeTabChange instead of changing tab when interceptTabChange is true", async () => {
    const wrapper = mount(TabView, {
      props: {
        activeKey: "tab1",
        tabs,
        visibleTabs: ["tab1", "tab2", "tab3"],
        interceptTabChange: true,
      },
    });

    const tab2Button = wrapper
      .findAll('[role="tab"]')
      .find((b) => b.text().includes("Tab 2"));

    await tab2Button?.trigger("click");

    expect(wrapper.emitted("beforeTabChange")).toBeTruthy();
    expect(wrapper.emitted("update:activeKey")).toBeFalsy();
  });

  it("emits update:activeKey when tab is clicked without interception", async () => {
    const wrapper = mount(TabView, {
      props: {
        activeKey: "tab1",
        tabs,
        visibleTabs: ["tab1", "tab2", "tab3"],
      },
    });

    const tab2Button = wrapper
      .findAll('[role="tab"]')
      .find((b) => b.text().includes("Tab 2"));

    await tab2Button?.trigger("click");

    expect(wrapper.emitted("update:activeKey")).toBeTruthy();
    expect(wrapper.emitted("update:activeKey")?.[0][0]).toBe("tab2");
  });

  it("emits beforeTabClose instead of closing tab when interceptTabClose is true", async () => {
    const closableTabs: Tab[] = [
      { key: "tab1", label: "Tab 1", closable: true, children: "Content 1" },
      { key: "tab2", label: "Tab 2", closable: true, children: "Content 2" },
    ];

    const wrapper = mount(TabView, {
      props: {
        activeKey: "tab1",
        tabs: closableTabs,
        visibleTabs: ["tab1", "tab2"],
        interceptTabClose: true,
      },
    });

    const closeSvg = wrapper.find('[role="tab"] svg');

    await closeSvg.trigger("click");

    expect(wrapper.emitted("beforeTabClose")).toBeTruthy();
    expect(wrapper.emitted("update:visibleTabs")).toBeFalsy();
  });

  it("closes tab directly when interceptTabClose is false", async () => {
    const closableTabs: Tab[] = [
      { key: "tab1", label: "Tab 1", closable: true, children: "Content 1" },
      { key: "tab2", label: "Tab 2", closable: true, children: "Content 2" },
    ];

    const wrapper = mount(TabView, {
      props: {
        activeKey: "tab1",
        tabs: closableTabs,
        visibleTabs: ["tab1", "tab2"],
        interceptTabClose: false,
      },
    });

    const closeSvg = wrapper.find('[role="tab"] svg');

    await closeSvg.trigger("click");

    expect(wrapper.emitted("update:visibleTabs")).toBeTruthy();
  });
});
