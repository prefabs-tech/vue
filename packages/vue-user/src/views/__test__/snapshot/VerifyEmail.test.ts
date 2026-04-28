import type { VueWrapper } from "@vue/test-utils";

import i18nPlugin, { useLocaleStore } from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";

import appConfig from "../../../components/__test__/config";
import VerifyEmail from "../../VerifyEmail.vue";

describe("VerifyEmail", () => {
  const pinia = createPinia();

  const { setLocale } = useLocaleStore(appConfig.slug);

  const locales = ["en", "fr"];

  for (const locale of locales) {
    setLocale(locale);

    const wrapper: VueWrapper = mount(VerifyEmail, {
      global: {
        plugins: [
          pinia,
          [
            i18nPlugin,
            {
              config: appConfig,
            },
          ],
        ],
      },
    });

    it("matches snapshot in " + locale, () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  }
});
