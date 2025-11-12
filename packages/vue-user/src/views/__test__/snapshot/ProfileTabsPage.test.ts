import i18Plugin, { useLocaleStore } from "@prefabs.tech/vue3-i18n";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, it, expect } from "vitest";

import appConfig from "../../../components/__test__/config";
import Profile from "../../Profile/ProfileTabsPage.vue";
import router from "../router";

import type { VueWrapper } from "@vue/test-utils";

describe("ProfileTabsPage", () => {
  const pinia = createPinia();

  const { setLocale } = useLocaleStore(appConfig.slug);

  const locales = ["en", "fr"];

  const tabs = [
    {
      key: "tab1",
      label: "Tab 1"
    },
    {
      key: "tab2",
      label: "Tab 2"
    }
  ];

  for (const locale of locales) {
    setLocale(locale);

    const wrapper: VueWrapper = mount(Profile, {
      global: {
        plugins: [
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
          AccountInfo: true,
          ChangePassword: true,
          profileForm: true,
        },
      },
      props: {
        tabs: tabs,
      },
    });

    it("matches snapshot in " + locale, () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  }
});
