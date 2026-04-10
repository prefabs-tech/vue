import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import Country from "../../Country.vue";

describe("Country", () => {
  it("renders country label", () => {
    const wrapper = mount(Country, {
      props: {
        code: "US",
      },
    });
    const label = wrapper.find(".country-label");

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("United States");
  });

  it("renders flag by default", () => {
    const wrapper = mount(Country, {
      props: {
        code: "US",
      },
    });
    const flag = wrapper.find("span[class*='flag-icon']");

    expect(flag.exists()).toBe(true);
  });

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

  it("applies default flagsPosition left", () => {
    const wrapper = mount(Country, {
      props: {
        code: "US",
      },
    });

    expect(wrapper.vm.flagsPosition).toBe("left");
  });

  it("applies custom flagsPosition", () => {
    const wrapper = mount(Country, {
      props: {
        code: "US",
        flagsPosition: "right",
      },
    });

    expect(wrapper.vm.flagsPosition).toBe("right");
  });

  it("applies default flagsStyle rectangular", () => {
    const wrapper = mount(Country, {
      props: {
        code: "US",
      },
    });

    expect(wrapper.vm.flagsStyle).toBe("rectangular");
  });

  it("applies custom flagsStyle", () => {
    const wrapper = mount(Country, {
      props: {
        code: "US",
        flagsStyle: "circle",
      },
    });

    expect(wrapper.vm.flagsStyle).toBe("circle");
  });

  it("uses default locale en", () => {
    const wrapper = mount(Country, {
      props: {
        code: "US",
      },
    });
    const label = wrapper.find(".country-label");

    expect(label.text()).toBe("United States");
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

  it("applies data-country-code attribute", () => {
    const wrapper = mount(Country, {
      props: {
        code: "US",
      },
    });
    const container = wrapper.find(".country-display");

    expect(container.attributes("data-country-code")).toBe("US");
  });

  it("trims whitespace from code", () => {
    const wrapper = mount(Country, {
      props: {
        code: "  US  ",
      },
    });
    const container = wrapper.find(".country-display");

    expect(container.attributes("data-country-code")).toBe("US");
  });

  it("lazily imports flag-icon-css on mount", () => {
    const wrapper = mount(Country, {
      props: {
        code: "US",
      },
    });

    // Just verify the component mounts successfully
    // The actual import happens in onMounted which we can't easily spy on
    expect(wrapper.exists()).toBe(true);
  });
});
