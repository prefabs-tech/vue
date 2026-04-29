import { shallowMount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import { createRouter, createWebHistory } from "vue-router";

import MainMenu from "@/components/MainMenu.vue";

const menuRoutes = [
  { name: "Home", route: "home" },
  { name: "About", route: "about" },
];

const createRouter_ = () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", name: "home", component: { template: "<div />" } },
      { path: "/about", name: "about", component: { template: "<div />" } },
    ],
  });

describe("MainMenu", () => {
  let router: ReturnType<typeof createRouter_>;

  beforeEach(() => {
    router = createRouter_();
  });

  it("passes activeRoute matching the current route name to ResponsiveMenu", async () => {
    await router.push({ name: "about" });
    await router.isReady();

    const wrapper = shallowMount(MainMenu, {
      global: { plugins: [router] },
      props: { routes: menuRoutes },
    });

    const menu = wrapper.findComponent({ name: "ResponsiveMenu" });
    expect(menu.props("activeRoute")).toBe("about");
  });

  it("defaults to 'home' when no route in list matches", async () => {
    await router.push("/");
    await router.isReady();

    const wrapper = shallowMount(MainMenu, {
      global: { plugins: [router] },
      props: {
        routes: [{ name: "About", route: "about" }],
      },
    });

    const menu = wrapper.findComponent({ name: "ResponsiveMenu" });
    // "home" is not in routes list; activeRoute computed returns ""
    // the template applies || "home" to handle empty strings
    expect(menu.props("activeRoute")).toBe("home");
  });
});
