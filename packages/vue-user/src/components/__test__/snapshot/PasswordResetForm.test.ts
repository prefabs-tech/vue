import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin, { useLocaleStore } from "@prefabs.tech/vue3-i18n";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";
import { createRouter, createWebHistory } from "vue-router";

import PasswordResetForm from "../../PasswordResetForm.vue";
import appConfig from "../config";

import type { VueWrapper } from "@vue/test-utils";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: { template: "<div />" } },
    { path: "/login", name: "login", component: { template: "<div />" } },
    {
      path: "/reset-password/:token?",
      name: "resetPassword",
      component: { template: "<div />" },
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
