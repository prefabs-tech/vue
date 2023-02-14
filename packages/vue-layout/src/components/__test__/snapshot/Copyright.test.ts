import i18nPlugin, { useLocaleStore } from "@dzangolab/vue3-i18n";
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
        url: appConfig.copyright?.url as string,
      },
    });

    it("matches snapshot " + locale, () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  }
});
