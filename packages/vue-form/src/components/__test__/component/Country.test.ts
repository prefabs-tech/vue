import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import Country from "../../Country.vue";

describe("Country", () => {
  it("hides flag when showFlag is false", () => {
    const wrapper = mount(Country, {
      props: {
        code: "US",
        showFlag: false,
      },
    });
    const flag = wrapper.find("span[class*='flag-icon']");

    expect(flag.exists()).toBe(false);
  });

  it("suppresses flag when code has no translation", () => {
    const wrapper = mount(Country, {
      props: {
        code: "INVALID",
      },
    });
    const flag = wrapper.find("span[class*='flag-icon']");

    expect(flag.exists()).toBe(false);
  });

  it("uses custom flagsPath for image", () => {
    const flagsPath = (code: string) => `/flags/${code}.png`;
    const wrapper = mount(Country, {
      props: {
        code: "US",
        flagsPath,
      },
    });
    const img = wrapper.find("img");

    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("/flags/US.png");
    expect(img.attributes("alt")).toBe("United States");
  });

  it("uses custom locale when provided", () => {
    const wrapper = mount(Country, {
      props: {
        code: "US",
        locale: "es",
        locales: {
          es: {
            US: "Estados Unidos",
          },
        },
      },
    });
    const label = wrapper.find(".country-label");

    expect(label.text()).toBe("Estados Unidos");
  });

  it("falls back to fallbackLocale when translation missing", () => {
    const wrapper = mount(Country, {
      props: {
        code: "US",
        fallbackLocale: "en",
        locale: "fr",
        locales: {},
      },
    });
    const label = wrapper.find(".country-label");

    expect(label.text()).toBe("United States");
  });
});
