import i18Plugin from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { mockedTable } from "../table";
import TableBody from "../../TableBody.vue";

const config = {
  i18n: {
    fallbackLocale: "en",
    messages: {},
    supportedLocales: ["en", "fr"],
  },
  slug: "app",
};

describe("TableBody", () => {
  it("matches snapshot", () => {
    const wrapper = mount(TableBody, {
      global: {
        plugins: [
          [
            i18Plugin,
            {
              config
            },
          ],
        ],
      },
      props: {
        table: mockedTable,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
