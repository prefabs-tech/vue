import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Copyright from "@/components/Copyright.vue";

import appConfig from "../config";

describe("Copyright", () => {
  const mountCopyright = (props: Record<string, unknown> = {}) =>
    mount(Copyright, {
      global: {
        plugins: [[i18nPlugin, { config: appConfig }]],
      },
      props: {
        holder: "Prefabs Tech",
        url: "https://dzango.com",
        ...props,
      },
    });

  it("renders the holder name as a link with the correct url", () => {
    const wrapper = mountCopyright();

    const link = wrapper.find("a");
    expect(link.text()).toBe("Prefabs Tech");
    expect(link.attributes("href")).toBe("https://dzango.com");
  });

  it("does not render disclaimer text when showDisclaimer is false", () => {
    const wrapper = mountCopyright({ showDisclaimer: false });

    expect(wrapper.text()).not.toContain("All rights reserved");
  });

  it("renders disclaimer text when showDisclaimer is true", () => {
    const wrapper = mountCopyright({ showDisclaimer: true });

    expect(wrapper.text()).toContain("All rights reserved");
  });
});
