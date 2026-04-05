import i18nPlugin, { useLocaleStore } from "@prefabs.tech/vue3-i18n";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";
import { createRouter, createWebHistory } from "vue-router";

import DropdownUserMenu from "../../DropdownUserMenu.vue";
import appConfig from "../config";

import type { VueWrapper } from "@vue/test-utils";

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
    { path: "/profile", name: "profile", component: { template: "<div />" } },
  ],
});

describe("DropdownUserMenu", () => {
  const pinia = createPinia();

  const { setLocale } = useLocaleStore(appConfig.slug);

  const locales = ["en", "fr"];

  for (const locale of locales) {
    setLocale(locale);

    const wrapper: VueWrapper = mount(DropdownUserMenu, {
      global: {
        plugins: [pinia, [i18nPlugin, { config: appConfig }], router],
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      props: { user: mockUser as any },
    });

    it("matches snapshot in " + locale, () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  }
});
