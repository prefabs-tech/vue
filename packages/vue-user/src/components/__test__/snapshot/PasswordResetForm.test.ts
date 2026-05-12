import type { VueWrapper } from "@vue/test-utils";

import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin, { useLocaleStore } from "@prefabs.tech/vue3-i18n";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";
import { createRouter, createWebHistory } from "vue-router";

import PasswordResetForm from "../../PasswordResetForm.vue";
import appConfig from "../config";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { component: { template: "<div />" }, path: "/" },
    { component: { template: "<div />" }, name: "login", path: "/login" },
    {
      component: { template: "<div />" },
      name: "resetPassword",
      path: "/reset-password/:token?",
    },
  ],
});

describe("PasswordResetForm", () => {
  const pinia = createPinia();

  const { setLocale } = useLocaleStore(appConfig.slug);

  const locales = ["en", "fr"];

  for (const locale of locales) {
    setLocale(locale);

    const wrapper: VueWrapper = mount(PasswordResetForm, {
      global: {
        plugins: [
          pinia,
          [configPlugin, { config: appConfig }],
          [i18nPlugin, { config: appConfig }],
          router,
        ],
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    it("matches snapshot in " + locale, () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  }
});
