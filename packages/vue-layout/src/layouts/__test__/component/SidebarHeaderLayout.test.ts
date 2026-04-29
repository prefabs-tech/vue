import configPlugin from "@prefabs.tech/vue3-config";
import { RouterLinkStub, mount } from "@vue/test-utils";
import { afterEach, describe, expect, it } from "vitest";
import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import Sidebar from "@/components/Sidebar.vue";
import SidebarHeaderLayout from "@/layouts/SidebarHeaderLayout.vue";

import type { AppConfig } from "@prefabs.tech/vue3-config";

const baseConfig: AppConfig = {
  apiBaseUrl: "http://localhost",
  appTitle: "Test App",
  appVersion: "1.0.0",
  layout: { localeSwitcher: { showBadges: false } },
};

const menu = [
  { name: "Home", routeName: "home" },
  { name: "About", routeName: "about" },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "home", component: { template: "<div />" } }],
});

const setScreenWidth = (width: number) => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });
};

const mountLayout = (width = 1024, props: Record<string, unknown> = {}) => {
  setScreenWidth(width);
  return mount(SidebarHeaderLayout, {
    global: {
      plugins: [[configPlugin, { config: baseConfig }], router],
      stubs: { LocaleSwitcher: true, Icon: true, RouterLink: RouterLinkStub },
    },
    props: { menu, ...props },
  });
};

describe("SidebarHeaderLayout", () => {
  afterEach(() => setScreenWidth(1024));

  it("onSelectMenu closes the sidebar when on mobile (< 576px)", async () => {
    const wrapper = mountLayout(400);
    const sidebar = wrapper.findComponent(Sidebar);

    sidebar.vm.sidebarActive = true;
    await nextTick();

    await sidebar.vm.$emit("select:menu");

    expect(sidebar.vm.sidebarActive).toBe(false);
  });

  it("onSelectMenu does not close the sidebar on large screen (> 576px)", async () => {
    const wrapper = mountLayout(1024);
    const sidebar = wrapper.findComponent(Sidebar);

    expect(sidebar.vm.sidebarActive).toBe(true);

    await sidebar.vm.$emit("select:menu");

    expect(sidebar.vm.sidebarActive).toBe(true);
  });

  it("syncs sidebar to inactive when resizing down to mobile", async () => {
    const wrapper = mountLayout(1024);
    const sidebar = wrapper.findComponent(Sidebar);

    sidebar.vm.sidebarActive = true;

    setScreenWidth(400);
    window.dispatchEvent(new Event("resize"));
    await nextTick();

    expect(sidebar.vm.sidebarActive).toBe(false);
  });

  it("syncs sidebar to active when resizing up to large screen", async () => {
    const wrapper = mountLayout(400);
    const sidebar = wrapper.findComponent(Sidebar);

    sidebar.vm.sidebarActive = false;

    setScreenWidth(1024);
    window.dispatchEvent(new Event("resize"));
    await nextTick();

    expect(sidebar.vm.sidebarActive).toBe(true);
  });
});
