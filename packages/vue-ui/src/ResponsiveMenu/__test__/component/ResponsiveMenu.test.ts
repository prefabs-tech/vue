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

  it("should have a nav as root element", () => {
    expect(wrapper.html()).toEqual(wrapper.get("nav.menu").html());
  });

  it("should have only one nav element", () => {
    expect(wrapper.findAll("nav").length).toEqual(1);
  });

  it("should have only one nav element with only class menu", () => {
    expect(wrapper.findAll("nav.menu").length).toEqual(1);
  });

  it("should have only one ul element under nav", () => {
    expect(wrapper.findAll("nav.menu > ul").length).toBe(1);
  });

  it("should render each route as an li element", () => {
    const lis = wrapper.findAll(" nav.menu > ul > li");

    expect(lis.length).toBe(routes.length);
  });

  it("should render each route as an li element with context equal to route name", () => {
    const lis = wrapper.findAll(" nav.menu > ul > li");

    for (const li of lis) {
      expect(li.text()).toBe(routes[lis.indexOf(li)].name);
    }
  });

  it("should render a router-link for each route", () => {
    wrapper.findAll(" nav.menu > ul > li").map((li) => {
      expect(li.findAllComponents(RouterLinkStub).length).toBe(1);
    });
  });

  it("should render each route ", () => {
    const renderedRoutes = wrapper
      .findAll(" nav.menu > ul > li")
      .map((li) => li.findComponent(RouterLinkStub).props().to.name);

    expect(routes.map((route) => route.route)).toEqual(renderedRoutes);
  });
});
