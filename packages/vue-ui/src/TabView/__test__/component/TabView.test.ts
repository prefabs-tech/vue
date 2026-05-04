import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import type { Tab } from "../../types";

import TabView from "../../Index.vue";

const tabs: Tab[] = [
  { children: "Content of tab 1", key: "tab1", label: "Tab 1" },
  { children: "Content of tab 2", key: "tab2", label: "Tab 2" },
  { children: "Content of tab 3", key: "tab3", label: "Tab 3" },
];

describe("TabView", () => {
  it("renders active tab content", () => {
    const wrapper = mount(TabView, {
      props: { activeKey: "tab1", tabs, visibleTabs: ["tab1", "tab2", "tab3"] },
    });

    const tabPanel = wrapper.find('[role="tabpanel"]');
    expect(tabPanel.text()).toContain("Content of tab 1");
  });

  it("switches to clicked tab", async () => {
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

  it("emits beforeTabChange when interceptTabChange is true", async () => {
    const wrapper = mount(TabView, {
      props: {
        activeKey: "tab1",
        interceptTabChange: true,
        tabs,
        visibleTabs: ["tab1", "tab2", "tab3"],
      },
    });

    const tab2Button = wrapper
      .findAll('[role="tab"]')
      .find((b) => b.text().includes("Tab 2"));

    await tab2Button?.trigger("click");

    expect(wrapper.emitted("beforeTabChange")).toBeTruthy();
    expect(wrapper.emitted("update:activeKey")).toBeFalsy();
  });

  it("closes tab when close button is clicked", async () => {
    const closableTabs: Tab[] = [
      { children: "Content 1", closable: true, key: "tab1", label: "Tab 1" },
      { children: "Content 2", closable: true, key: "tab2", label: "Tab 2" },
    ];

    const wrapper = mount(TabView, {
      props: {
        activeKey: "tab1",
        tabs: closableTabs,
        visibleTabs: ["tab1", "tab2"],
      },
    });

    const closeIcon = wrapper.find('[role="tab"] svg');
    await closeIcon.trigger("click");

    expect(wrapper.emitted("update:visibleTabs")).toBeTruthy();
  });

  it("emits beforeTabClose when interceptTabClose is true", async () => {
    const closableTabs: Tab[] = [
      { children: "Content 1", closable: true, key: "tab1", label: "Tab 1" },
      { children: "Content 2", closable: true, key: "tab2", label: "Tab 2" },
    ];

    const wrapper = mount(TabView, {
      props: {
        activeKey: "tab1",
        interceptTabClose: true,
        tabs: closableTabs,
        visibleTabs: ["tab1", "tab2"],
      },
    });

    const closeIcon = wrapper.find('[role="tab"] svg');
    await closeIcon.trigger("click");

    expect(wrapper.emitted("beforeTabClose")).toBeTruthy();
    expect(wrapper.emitted("update:visibleTabs")).toBeFalsy();
  });

  it("persists active tab to localStorage", async () => {
    localStorage.clear();

    const wrapper = mount(TabView, {
      props: {
        activeKey: "tab1",
        id: "test-tabview",
        persistState: true,
        tabs,
        visibleTabs: ["tab1", "tab2", "tab3"],
      },
    });

    await wrapper.vm.$nextTick();

    const tab2Button = wrapper
      .findAll('[role="tab"]')
      .find((b) => b.text().includes("Tab 2"));

    await tab2Button?.trigger("click");
    await wrapper.vm.$nextTick();

    const stored = localStorage.getItem("test-tabview");
    expect(stored).toBeTruthy();
    const parsed = JSON.parse(stored!);
    expect(parsed.activeTab).toBe("tab2");
  });

  it("restores active tab from localStorage on mount", async () => {
    localStorage.setItem(
      "test-tabview-restore",
      JSON.stringify({
        activeTab: "tab3",
        visibleTabs: ["tab1", "tab2", "tab3"],
      }),
    );

    const wrapper = mount(TabView, {
      props: {
        activeKey: "tab1",
        id: "test-tabview-restore",
        persistState: true,
        tabs,
        visibleTabs: ["tab1", "tab2", "tab3"],
      },
    });

    await wrapper.vm.$nextTick();

    const tabPanel = wrapper.find('[role="tabpanel"]');
    expect(tabPanel.text()).toContain("Content of tab 3");
  });

  it("uses sessionStorage when persistStateStorage is sessionStorage", async () => {
    sessionStorage.clear();

    const wrapper = mount(TabView, {
      props: {
        activeKey: "tab1",
        id: "test-tabview-session",
        persistState: true,
        persistStateStorage: "sessionStorage",
        tabs,
        visibleTabs: ["tab1", "tab2", "tab3"],
      },
    });

    await wrapper.vm.$nextTick();

    const tab2Button = wrapper
      .findAll('[role="tab"]')
      .find((b) => b.text().includes("Tab 2"));

    await tab2Button?.trigger("click");
    await wrapper.vm.$nextTick();

    const stored = sessionStorage.getItem("test-tabview-session");
    expect(stored).toBeTruthy();
    const parsed = JSON.parse(stored!);
    expect(parsed.activeTab).toBe("tab2");
  });

  it("updates URL hash when enableHashRouting is true", async () => {
    const wrapper = mount(TabView, {
      props: {
        activeKey: "tab1",
        enableHashRouting: true,
        tabs,
        visibleTabs: ["tab1", "tab2", "tab3"],
      },
    });

    await wrapper.vm.$nextTick();

    const tab2Button = wrapper
      .findAll('[role="tab"]')
      .find((b) => b.text().includes("Tab 2"));

    await tab2Button?.trigger("click");
    await wrapper.vm.$nextTick();

    expect(window.location.hash).toBe("#tab2");
  });
});
