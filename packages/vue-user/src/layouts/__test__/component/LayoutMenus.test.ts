import type { AppConfig } from "@prefabs.tech/vue3-config";
import type { Component } from "vue";

import configPlugin from "@prefabs.tech/vue3-config";
import {
  SidebarHeaderLayout as OriginalSidebarHeaderLayout,
  SidebarOnlyLayout as OriginalSidebarOnlyLayout,
} from "@prefabs.tech/vue3-layout";
import { flushPromises, shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createMemoryHistory, createRouter } from "vue-router";

const mocks = vi.hoisted(() => ({
  filterRoutes: vi.fn(),
}));

vi.mock("../../../router", () => ({
  default: vi.fn(),
  filterRoutes: mocks.filterRoutes,
}));

import type { UserType } from "../../../types";

import useUserStore from "../../../store";
import BasicLayout from "../../BasicLayout.vue";
import SidebarHeaderLayout from "../../SidebarHeaderLayout.vue";
import SidebarOnlyLayout from "../../SidebarOnlyLayout.vue";
import appConfig from "../config";

const Stub = { template: "<div />" };

const user = { email: "test@example.com", id: "user-123" } as UserType;

const mainMenu = [
  { name: "Home", route: "home" },
  { name: "Dashboard", route: "dashboard" },
  { name: "Missing", route: "missing" },
  {
    children: [
      { name: "Docs", route: "docs" },
      { name: "Reports", route: "reports" },
    ],
    name: "Resources",
    route: "resources",
  },
];

const createWrapper = (
  component: Component,
  config: Partial<AppConfig> = {},
  props = {},
) => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { component: Stub, name: "home", path: "/" },
      {
        component: Stub,
        meta: { authenticated: true },
        name: "dashboard",
        path: "/dashboard",
      },
      { component: Stub, name: "docs", path: "/docs" },
      {
        component: Stub,
        meta: { authenticated: true },
        name: "reports",
        path: "/reports",
      },
      {
        component: Stub,
        meta: { authenticated: true },
        name: "resources",
        path: "/resources",
      },
    ],
  });

  const fullConfig = {
    ...appConfig,
    layout: { mainMenu },
    ...config,
  } as AppConfig;

  return shallowMount(component, {
    global: {
      plugins: [[configPlugin, { config: fullConfig }], router],
    },
    props,
  });
};

const setupState = (wrapper: ReturnType<typeof createWrapper>) =>
  wrapper.vm as unknown as {
    home: string | undefined;
    routes: { route: string }[];
  };

type SidebarItem = {
  children?: { routeName: string }[];
  routeName: string;
};

const sidebarMenu = (
  wrapper: ReturnType<typeof createWrapper>,
  layout: Component,
) => (wrapper.findComponent(layout).props() as { menu: SidebarItem[] }).menu;

describe("layouts", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe("#62 BasicLayout home route", () => {
    it("uses profile for logged-in users by default", () => {
      useUserStore().$patch({ user });

      expect(setupState(createWrapper(BasicLayout)).home).toBe("profile");
    });

    it("uses user.routes.home for logged-in users when set", () => {
      useUserStore().$patch({ user });

      const wrapper = createWrapper(BasicLayout, {
        user: { routes: { home: "dashboard" } } as AppConfig["user"],
      });

      expect(setupState(wrapper).home).toBe("dashboard");
    });

    it("uses layout.homeRoute for logged-out users", () => {
      const wrapper = createWrapper(BasicLayout, {
        layout: { homeRoute: "home", mainMenu },
      } as Partial<AppConfig>);

      expect(setupState(wrapper).home).toBe("home");
    });
  });

  describe("#63 BasicLayout main menu", () => {
    it("shows only public routes to logged-out users", () => {
      const wrapper = createWrapper(BasicLayout);

      expect(setupState(wrapper).routes.map((item) => item.route)).toEqual([
        "home",
      ]);
    });

    it("shows all existing routes to logged-in users", () => {
      useUserStore().$patch({ user });

      const wrapper = createWrapper(BasicLayout);

      expect(setupState(wrapper).routes.map((item) => item.route)).toEqual([
        "home",
        "dashboard",
        "resources",
      ]);
    });
  });

  describe.each([
    [
      "#64 SidebarHeaderLayout",
      SidebarHeaderLayout,
      OriginalSidebarHeaderLayout,
    ],
    ["#66 SidebarOnlyLayout", SidebarOnlyLayout, OriginalSidebarOnlyLayout],
  ])("%s menu", (_name, component, layout) => {
    it("shows only public items and children to logged-out users", () => {
      const wrapper = createWrapper(component);

      const menu = sidebarMenu(wrapper, layout);

      expect(menu.map((item) => item.routeName)).toEqual(["home", "resources"]);
      expect(menu[1].children?.map((child) => child.routeName)).toEqual([
        "docs",
      ]);
    });

    it("shows all existing items and children to logged-in users", () => {
      useUserStore().$patch({ user });

      const wrapper = createWrapper(component);

      const menu = sidebarMenu(wrapper, layout);

      expect(menu.map((item) => item.routeName)).toEqual([
        "home",
        "dashboard",
        "resources",
      ]);
      expect(menu[2].children?.map((child) => child.routeName)).toEqual([
        "docs",
        "reports",
      ]);
    });
  });

  describe("#65 SidebarHeaderLayout userMenuLocation", () => {
    it("defaults to the sidebar", () => {
      const wrapper = createWrapper(SidebarHeaderLayout);

      expect(
        wrapper
          .findComponent(OriginalSidebarHeaderLayout)
          .props("userMenuLocation"),
      ).toBe("sidebar");
    });

    it("passes header through", () => {
      const wrapper = createWrapper(
        SidebarHeaderLayout,
        {},
        {
          userMenuLocation: "header",
        },
      );

      expect(
        wrapper
          .findComponent(OriginalSidebarHeaderLayout)
          .props("userMenuLocation"),
      ).toBe("header");
    });
  });

  describe.each([
    ["BasicLayout", BasicLayout],
    ["SidebarHeaderLayout", SidebarHeaderLayout],
    ["SidebarOnlyLayout", SidebarOnlyLayout],
  ])("#67 %s route filtering", (_name, component) => {
    it("re-filters routes on login and logout", async () => {
      createWrapper(component);

      expect(mocks.filterRoutes).not.toHaveBeenCalled();

      useUserStore().$patch({ user });
      await flushPromises();

      expect(mocks.filterRoutes).toHaveBeenCalledTimes(1);

      useUserStore().$patch({ user: undefined });
      await flushPromises();

      expect(mocks.filterRoutes).toHaveBeenCalledTimes(2);
    });
  });
});
