import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin, { useLocaleStore } from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";

import ChangePasswordForm from "../../ChangePasswordForm.vue";
import appConfig from "../config";

import type { VueWrapper } from "@vue/test-utils";

describe("ChangePasswordForm", () => {
  const pinia = createPinia();

  const { setLocale } = useLocaleStore(appConfig.slug);

  const locales = ["en", "fr"];

  for (const locale of locales) {
    setLocale(locale);

    const wrapper: VueWrapper = mount(ChangePasswordForm, {
      global: {
        plugins: [
          pinia,
          [configPlugin, { config: appConfig }],
          [i18nPlugin, { config: appConfig }],
        ],
      },
    });

    it("matches snapshot in " + locale, () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  }
});
