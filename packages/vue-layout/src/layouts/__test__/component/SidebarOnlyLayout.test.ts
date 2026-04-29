import configPlugin from "@prefabs.tech/vue3-config";
import { RouterLinkStub, mount } from "@vue/test-utils";
import { afterEach, describe, expect, it } from "vitest";
import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import Sidebar from "@/components/Sidebar.vue";
import SidebarOnlyLayout from "@/layouts/SidebarOnlyLayout.vue";

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
  return mount(SidebarOnlyLayout, {
    global: {
      plugins: [[configPlugin, { config: baseConfig }], router],
      stubs: { LocaleSwitcher: true, Icon: true, RouterLink: RouterLinkStub },
    },
    props: { menu, ...props },
  });
};

describe("SidebarOnlyLayout", () => {
  afterEach(() => setScreenWidth(1024));

  it("sidebar is active on mount when screen is large (> 576px)", () => {
    const wrapper = mountLayout(1024);

    expect(wrapper.findComponent(Sidebar).vm.sidebarActive).toBe(true);
  });

  it("sidebar is inactive on mount when screen is small (< 576px)", () => {
    const wrapper = mountLayout(400);

    expect(wrapper.findComponent(Sidebar).vm.sidebarActive).toBe(false);
  });

  it("sidebar becomes inactive when resizing down to mobile", async () => {
    const wrapper = mountLayout(1024);

    setScreenWidth(400);
    window.dispatchEvent(new Event("resize"));
    await nextTick();

    expect(wrapper.findComponent(Sidebar).vm.sidebarActive).toBe(false);
  });

  it("sidebar becomes active when resizing up to large screen", async () => {
    const wrapper = mountLayout(400);

    setScreenWidth(1024);
    window.dispatchEvent(new Event("resize"));
    await nextTick();

    expect(wrapper.findComponent(Sidebar).vm.sidebarActive).toBe(true);
  });
});
