import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, it, expect, beforeAll } from "vitest";

import ResponsiveMenu from "../../Index.vue";
import { routes } from "../routes";

import type { VueWrapper } from "@vue/test-utils";

describe("ResponsiveMenu", () => {
  let wrapper: VueWrapper;

  beforeAll(() => {
    wrapper = mount(ResponsiveMenu, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        routes,
      },
    });
  });

  it("should render each route as an li element", () => {
    const lis = wrapper.findAll(" nav.menu > ul > li");

    expect(lis.length).toBe(routes.length);
  });

  it("should render each route ", () => {
    const renderedRoutes = wrapper
      .findAll(" nav.menu > ul > li")
      .map((li) => li.findComponent(RouterLinkStub).props().to.name);

    expect(routes.map((route) => route.route)).toEqual(renderedRoutes);
  });
});
