import configPlugin from "@dzangolab/vue3-config";
import i18nPlugin from "@dzangolab/vue3-i18n";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import AppHeader from "@/components/AppHeader.vue";

import config from "../config";

import type { VueWrapper } from "@vue/test-utils";

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
          RouterLink: RouterLinkStub,
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
