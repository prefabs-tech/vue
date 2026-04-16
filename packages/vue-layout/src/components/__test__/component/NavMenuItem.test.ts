import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import { createRouter, createWebHistory } from "vue-router";

import NavMenuItem from "@/components/NavMenuItem.vue";

const createRouter_ = () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", name: "home", component: { template: "<div />" } },
      {
        path: "/dashboard",
        name: "dashboard",
        component: { template: "<div />" },
      },
      {
        path: "/settings",
        name: "settings",
        component: { template: "<div />" },
        children: [
          {
            path: "profile",
            name: "settings-profile",
            component: { template: "<div />" },
          },
        ],
      },
    ],
  });

describe("NavMenuItem", () => {
  let router: ReturnType<typeof createRouter_>;

  beforeEach(() => {
    router = createRouter_();
  });

  it("shows full item name when sidebarActive is true", () => {
    const wrapper = mount(NavMenuItem, {
      global: { plugins: [router] },
      props: {
        item: { name: "Dashboard", routeName: "dashboard", shortName: "Dash" },
        sidebarActive: true,
      },
    });

    const nameSpans = wrapper.findAll(".item-name");
    expect(nameSpans.some((s) => s.text() === "Dashboard")).toBe(true);
  });

  it("shows shortName when sidebarActive is false and shortName is set", () => {
    const wrapper = mount(NavMenuItem, {
      global: { plugins: [router] },
      props: {
        item: { name: "Dashboard", routeName: "dashboard", shortName: "Dash" },
        sidebarActive: false,
      },
    });

    const nameSpans = wrapper.findAll(".item-name");
    expect(nameSpans.some((s) => s.text() === "Dash")).toBe(true);
    expect(nameSpans.some((s) => s.text() === "Dashboard")).toBe(false);
  });

  it("marks item as active when routeName matches current route", async () => {
    await router.push({ name: "dashboard" });
    await router.isReady();

    const wrapper = mount(NavMenuItem, {
      global: { plugins: [router] },
      props: {
        item: { name: "Dashboard", routeName: "dashboard" },
        sidebarActive: true,
      },
    });

    expect(wrapper.find(".link").classes()).toContain("active");
  });

  it("does not mark item as active when routeName does not match current route", async () => {
    await router.push({ name: "home" });
    await router.isReady();

    const wrapper = mount(NavMenuItem, {
      global: { plugins: [router] },
      props: {
        item: { name: "Dashboard", routeName: "dashboard" },
        sidebarActive: true,
      },
    });

    expect(wrapper.find(".link").classes()).not.toContain("active");
  });

  it("auto-expands children when a child routeName matches the current route", async () => {
    await router.push({ name: "settings-profile" });
    await router.isReady();

    const wrapper = mount(NavMenuItem, {
      global: { plugins: [router] },
      props: {
        item: {
          name: "Settings",
          children: [
            { name: "Profile", routeName: "settings-profile" },
            { name: "Security", routeName: "settings-security" },
          ],
        },
        sidebarActive: true,
      },
    });

    expect(wrapper.find(".sub-menu-item").exists()).toBe(true);
  });

  it("does not expand children when no child matches the current route", async () => {
    await router.push({ name: "home" });
    await router.isReady();

    const wrapper = mount(NavMenuItem, {
      global: { plugins: [router] },
      props: {
        item: {
          name: "Settings",
          children: [{ name: "Profile", routeName: "settings-profile" }],
        },
        sidebarActive: true,
      },
    });

    expect(wrapper.find(".sub-menu-item").exists()).toBe(false);
  });

  it("toggles children on click for items with children and no routeName", async () => {
    await router.push({ name: "home" });
    await router.isReady();

    const wrapper = mount(NavMenuItem, {
      global: { plugins: [router] },
      props: {
        item: {
          name: "Settings",
          children: [{ name: "Profile", routeName: "settings-profile" }],
        },
        sidebarActive: true,
      },
    });

    expect(wrapper.find(".sub-menu-item").exists()).toBe(false);

    await wrapper.find(".link").trigger("click");

    expect(wrapper.find(".sub-menu-item").exists()).toBe(true);
  });
});
