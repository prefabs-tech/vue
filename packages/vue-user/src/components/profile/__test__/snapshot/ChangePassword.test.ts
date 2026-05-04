import type { VueWrapper } from "@vue/test-utils";

import configPlugin from "@prefabs.tech/vue3-config";
import i18Plugin, { useLocaleStore } from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";

import router from "../../../../views/__test__/router";
import appConfig from "../../../__test__/config";
import ChangePassword from "../../ChangePassword.vue";

describe("ChangePassword", () => {
  const pinia = createPinia();

  const { setLocale } = useLocaleStore(appConfig.slug);

  const locales = ["en", "fr"];

  for (const locale of locales) {
    setLocale(locale);

    const wrapper: VueWrapper = mount(ChangePassword, {
      global: {
        mocks: {
          errorMessage: "401",
        },
        plugins: [
          [
            configPlugin,
            {
              config: appConfig,
            },
          ],
          pinia,
          [
            i18Plugin,
            {
              config: appConfig,
            },
          ],
          router,
        ],
        stubs: {
          ChangePasswordForm: true,
        },
      },
      slots: {
        instructions: "<div class='instructions'></div>",
      },
    });

    it("matches snapshot in " + locale, () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  }
});
