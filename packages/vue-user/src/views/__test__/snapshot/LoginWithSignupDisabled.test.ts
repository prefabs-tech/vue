import configPlugin from "@prefabs.tech/vue3-config";
import i18Plugin, { useLocaleStore } from "@prefabs.tech/vue3-i18n";
import { LoadingButton, LoadingIcon } from "@prefabs.tech/vue3-ui";
import { flushPromises, mount, RouterLinkStub } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it, vi } from "vitest";
import { defineComponent, h, Suspense } from "vue";

import appConfig from "../../../components/__test__/config";
import Login from "../../Login.vue";
import router from "../router";

describe("Login with signup disabled", () => {
  const pinia = createPinia();

  const { setLocale } = useLocaleStore(appConfig.slug);

  const locales = ["en", "fr"];

  vi.mock("@/api/user", () => ({
    getIsFirstUser: vi.fn(() => Promise.resolve({ signUp: true })),
  }));

  const config = {
    ...appConfig,
    user: {
      routes: {
        signup: {
          disabled: true,
        },
      },
    },
  };

  for (const locale of locales) {
    setLocale(locale);

    it("matches snapshot in " + locale, async () => {
      const wrapper = mount(
        defineComponent({
          components: { Login },
          setup() {
            return () =>
              h(Suspense, null, {
                default: () => h(Login),
                fallback: () => h("div", "Loading..."),
              });
          },
        }),
        {
          global: {
            components: {
              LoadingButton,
              LoadingIcon,
            },
            plugins: [
              pinia,
              [
                configPlugin,
                {
                  config: config,
                },
              ],
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
        },
      );

      await flushPromises();

      expect(wrapper.findComponent(Login).element).toMatchSnapshot();
    });
  }
});
