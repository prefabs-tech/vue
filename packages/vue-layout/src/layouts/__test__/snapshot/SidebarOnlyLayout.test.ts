import configPlugin from "@prefabs.tech/vue3-config";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import config from "../../../components/__test__/config";
import SidebarOnlyLayout from "../../SidebarOnlyLayout.vue";

import type { VueWrapper } from "@vue/test-utils";

describe("SidebarOnlyLayout", () => {
  it("matches snapshot", () => {
    const wrapper: VueWrapper = shallowMount(SidebarOnlyLayout, {
      global: {
        plugins: [
          [
            configPlugin,
            {
              config,
            }
          ],
        ],
      },
      props: {
        menu: [
          {
            name: "Menu1",
            routeName: "menu-1",
            shortName: "M1",
          },
          {
            name: "Menu2",
            routeName: "menu-2",
            shortName: "M2",
          },
        ],
      },
      slots: {
        default: "<div class='default'></div>",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
