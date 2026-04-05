import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { describe, expect, it } from "vitest";
import { createRouter, createWebHistory } from "vue-router";

import useUserStore from "../../../store";
import DropdownUserMenu from "../../DropdownUserMenu.vue";
import SignInUpMenu from "../../SignInUpMenu.vue";
import UserMenu from "../../UserMenu.vue";
import appConfig from "../config";

const mockUser = {
  email: "test@example.com",
  givenName: "Test",
  id: "user-123",
  lastLoginAt: Date.now(),
  middleNames: null,
  name: "Test User",
  roles: ["USER"],
  signedUpAt: Date.now(),
  surname: "User",
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: { template: "<div />" } },
    { path: "/login", name: "login", component: { template: "<div />" } },
    { path: "/profile", name: "profile", component: { template: "<div />" } },
  ],
});

describe("UserMenu", () => {
  it("renders SignInUpMenu when no user is authenticated", () => {
    const pinia = createPinia();
    setActivePinia(pinia);
    const store = useUserStore();
    store.$patch({ user: undefined });

    const wrapper = shallowMount(UserMenu, {
      global: {
        plugins: [
          pinia,
          [configPlugin, { config: appConfig }],
          [i18nPlugin, { config: appConfig }],
          router,
        ],
        stubs: { RouterLink: RouterLinkStub },
      },
    });

    expect(wrapper.findComponent(SignInUpMenu).exists()).toBe(true);
    expect(wrapper.findComponent(DropdownUserMenu).exists()).toBe(false);
  });

  it("renders DropdownUserMenu when user is authenticated", () => {
    const pinia = createPinia();
    setActivePinia(pinia);
    const store = useUserStore();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    store.$patch({ user: mockUser as any });

    const wrapper = shallowMount(UserMenu, {
      global: {
        plugins: [
          pinia,
          [configPlugin, { config: appConfig }],
          [i18nPlugin, { config: appConfig }],
          router,
        ],
        stubs: { RouterLink: RouterLinkStub },
      },
    });

    expect(wrapper.findComponent(DropdownUserMenu).exists()).toBe(true);
    expect(wrapper.findComponent(SignInUpMenu).exists()).toBe(false);
  });
});
