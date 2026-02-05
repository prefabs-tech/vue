import i18Plugin, { useLocaleStore } from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, it, expect } from "vitest";

import appConfig from "../../../components/__test__/config";
import EmailVerificationReminder from "../../EmailVerificationReminder.vue";

import type { VueWrapper } from "@vue/test-utils";

describe("EmailVerificationReminder", () => {
  const { setLocale } = useLocaleStore(appConfig.slug);

  const pinia = createPinia();

  const locales = ["en", "fr"];

  for (const locale of locales) {
    setLocale(locale);

    const wrapper: VueWrapper = mount(EmailVerificationReminder, {
      global: {
        plugins: [
          pinia,
          [
            i18Plugin,
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
