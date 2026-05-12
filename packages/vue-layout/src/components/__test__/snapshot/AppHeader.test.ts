import type { VueWrapper } from "@vue/test-utils";

import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import AppHeader from "../../AppHeader.vue";
import config from "../config";

describe("AppHeader Snapshot", () => {
  it("matches snapshot", () => {
    const wrapper: VueWrapper = mount(AppHeader, {
      global: {
        plugins: [
          [
            configPlugin,
            {
              config,
            },
          ],
          [
            i18nPlugin,
            {
              config,
            },
          ],
        ],
        stubs: {
          LocaleSwitcher: true,
          RouterLink: RouterLinkStub,
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
