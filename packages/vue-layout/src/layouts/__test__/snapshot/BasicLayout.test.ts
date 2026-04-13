import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import BasicLayout from "../../BasicLayout.vue";

import type { AppConfig } from "@prefabs.tech/vue3-config";
import type { VueWrapper } from "@vue/test-utils";

const config: AppConfig = {
  apiBaseUrl: "http://localhost",
  appTitle: "Test App",
  appVersion: "1.0.0",
  features: {
    showVersion: true,
  },
  i18n: {
    supportedLocales: ["en"],
  },
  slug: "test-app",
  websiteDomain: "localhost",
};

describe("BasicLayout", () => {
  it("matches snapshot", () => {
    const wrapper: VueWrapper = mount(BasicLayout, {
      global: {
        plugins: [
          [configPlugin, { config }],
          [i18nPlugin, { config }],
        ],
        stubs: {
          RouterLink: RouterLinkStub,
          LocaleSwitcher: true,
          Icon: true,
        },
      },
      slots: {
        addon: "<div>Addon</div>",
        copyright: "<div>Copyright</div>",
        default: "<div>Page content</div>",
        locales: "<div>Locales</div>",
        logo: "<div>Logo</div>",
        menu: "<div>Menu</div>",
        social: "<div>Social</div>",
        userMenu: "<div>User Menu</div>",
        version: "<div>Version</div>",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
