import i18nPlugin, { useLocaleStore } from "@prefabs.tech/vue3-i18n";
import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import Copyright from "@/components/Copyright.vue";

import appConfig from "../config";

import type { VueWrapper } from "@vue/test-utils";

describe("Copyright", () => {
  const { setLocale } = useLocaleStore(appConfig.slug);

  const locales = ["en", "fr"];

  for (const locale of locales) {
    setLocale(locale);

    const wrapper: VueWrapper = shallowMount(Copyright, {
      global: {
        mocks: {
          year: "2023",
        },
        plugins: [
          [
            i18nPlugin,
            {
              config: appConfig,
            },
          ],
        ],
      },
      props: {
        holder: appConfig.copyright?.holder as string,
        showDisclaimer: true,
        url: appConfig.copyright?.url as string,
      },
    });

    it("matches snapshot " + locale, () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  }
});
