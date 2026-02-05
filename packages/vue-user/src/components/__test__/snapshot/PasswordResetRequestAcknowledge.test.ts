import configPlugin from "@prefabs.tech/vue3-config";
import i18Plugin, { useLocaleStore } from "@prefabs.tech/vue3-i18n";
import { LoadingButton, LoadingIcon } from "@prefabs.tech/vue3-ui";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, it, expect } from "vitest";

import router from "../../../views/__test__/router";
import PasswordResetRequestAcknowledge from "../../PasswordResetRequestAcknowledge.vue";
import appConfig from "../config";

import type { VueWrapper } from "@vue/test-utils";

describe("PasswordResetRequestAcknowledge", () => {
  const pinia = createPinia();

  const { setLocale } = useLocaleStore(appConfig.slug);

  const locales = ["en", "fr"];

  for (const locale of locales) {
    setLocale(locale);

    const wrapper: VueWrapper = mount(PasswordResetRequestAcknowledge, {
      global: {
        components: {
          LoadingButton,
          LoadingIcon,
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
          RouterLink: RouterLinkStub,
        },
      },
    });

    it("matches snapshot in " + locale, () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  }
});
