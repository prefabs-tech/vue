import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Logo from "@/components/Logo.vue";
import Sidebar from "@/components/Sidebar.vue";

const menu = [
  { name: "Menu 1", routeName: "menu-1" },
  { name: "Menu 2", routeName: "menu-2" },
];

const menuWithShortNames = [
  { name: "Menu 1", routeName: "menu-1", shortName: "M1" },
  { name: "Menu 2", routeName: "menu-2", shortName: "M2" },
];

describe("Sidebar", () => {
  it("shows the header section by default", () => {
    const wrapper = shallowMount(Sidebar, { props: { menu } });

    expect(wrapper.find(".header").exists()).toBe(true);
  });

  it("hides the header section when noHeader is true", () => {
    const wrapper = shallowMount(Sidebar, {
      props: { menu, noHeader: true },
    });

    expect(wrapper.find(".header").exists()).toBe(false);
  });

  it("shows the Logo inside the header by default", () => {
    const wrapper = shallowMount(Sidebar, { props: { menu } });

    expect(wrapper.findComponent(Logo).exists()).toBe(true);
  });

  it("hides the Logo when hideLogo is true", () => {
    const wrapper = shallowMount(Sidebar, {
      props: { menu, hideLogo: true },
    });

    expect(wrapper.findComponent(Logo).exists()).toBe(false);
  });

  it("renders the full sidebar when sidebarActive is true", () => {
    const wrapper = shallowMount(Sidebar, {
      props: { menu, collapsible: true },
    });

    // sidebarActive defaults to true → full sidebar visible, not collapsed-only button
    expect(wrapper.find(".sidebar").exists()).toBe(true);
    expect(wrapper.find(".collapsed-sidebar").exists()).toBe(false);
  });

  it("shows only the expand button when collapsed and no item has a shortName", async () => {
    const wrapper = shallowMount(Sidebar, {
      props: { menu, collapsible: true },
    });

    // Collapse the sidebar
    wrapper.vm.sidebarActive = false;
    await wrapper.vm.$nextTick();

    // No shortNames on items → showOnlyToggle becomes true
    expect(wrapper.find(".collapsed-sidebar").exists()).toBe(true);
    expect(wrapper.find(".sidebar").exists()).toBe(false);
  });

  it("keeps the sidebar visible when collapsed but items have shortNames", async () => {
    const wrapper = shallowMount(Sidebar, {
      props: { menu: menuWithShortNames, collapsible: true },
    });

    wrapper.vm.sidebarActive = false;
    await wrapper.vm.$nextTick();

    // shortNames present → showOnlyToggle stays false
    expect(wrapper.find(".sidebar").exists()).toBe(true);
    expect(wrapper.find(".collapsed-sidebar").exists()).toBe(false);
  });

  it("exposes sidebarActive as true by default", () => {
    const wrapper = shallowMount(Sidebar, { props: { menu } });

    expect(wrapper.vm.sidebarActive).toBe(true);
  });

  it("toggle() flips sidebarActive", () => {
    const wrapper = shallowMount(Sidebar, { props: { menu } });

    expect(wrapper.vm.sidebarActive).toBe(true);
    wrapper.vm.toggle();
    expect(wrapper.vm.sidebarActive).toBe(false);
    wrapper.vm.toggle();
    expect(wrapper.vm.sidebarActive).toBe(true);
  });

  it("renders the footer slot content when footer slot is provided", () => {
    const wrapper = shallowMount(Sidebar, {
      props: { menu },
      slots: { footer: "<p>Footer content</p>" },
    });

    expect(wrapper.find(".footer").exists()).toBe(true);
    expect(wrapper.find(".footer").text()).toBe("Footer content");
  });

  it("does not render the footer area when no footer slot is provided", () => {
    const wrapper = shallowMount(Sidebar, { props: { menu } });

    expect(wrapper.find(".footer").exists()).toBe(false);
  });
});
