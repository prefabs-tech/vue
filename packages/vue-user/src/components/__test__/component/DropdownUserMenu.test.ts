import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import type { UserType } from "../../../types";

import DropdownUserMenu from "../../DropdownUserMenu.vue";
import appConfig from "../config";

const user = { email: "test@example.com", id: "user-123" } as UserType;

const createWrapper = (props = {}) =>
  mount(DropdownUserMenu, {
    attachTo: document.body,
    global: {
      plugins: [[i18nPlugin, { config: appConfig }]],
      stubs: { RouterLink: RouterLinkStub },
    },
    props: { user, ...props },
  });

describe("#44 DropdownUserMenu", () => {
  it("shows the user's email", () => {
    const wrapper = createWrapper();

    expect(wrapper.find(".email").text()).toBe("test@example.com");

    wrapper.unmount();
  });

  it("toggles when clicked", async () => {
    const wrapper = createWrapper();

    await wrapper.find("nav").trigger("click");

    expect(wrapper.find("nav").classes()).toContain("expanded");

    await wrapper.find("nav").trigger("click");

    expect(wrapper.find("nav").classes()).not.toContain("expanded");

    wrapper.unmount();
  });

  it("collapses on an outside click", async () => {
    const wrapper = createWrapper();

    await wrapper.find("nav").trigger("click");
    // onClickOutside ignores a click in the same tick as the previous one
    await new Promise((resolve) => setTimeout(resolve, 0));
    document.body.dispatchEvent(
      new MouseEvent("pointerdown", { bubbles: true }),
    );
    document.body.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await wrapper.vm.$nextTick();

    expect(wrapper.find("nav").classes()).not.toContain("expanded");

    wrapper.unmount();
  });

  it("adds the extra userMenuItems between profile and logout", () => {
    const wrapper = createWrapper({
      userMenuItems: [
        { icon: "pi pi-cog", label: "Settings", route: "settings" },
        { label: "Billing", route: "billing" },
      ],
    });

    const links = wrapper.findAllComponents(RouterLinkStub);

    expect(links.map((link) => link.props("to"))).toEqual([
      { name: "profile" },
      { name: "settings" },
      { name: "billing" },
    ]);
    expect(wrapper.text()).toContain("Settings");

    wrapper.unmount();
  });

  it("emits logout and select:menu from the logout item", async () => {
    const wrapper = createWrapper();

    await wrapper.find("li.option").trigger("click");

    expect(wrapper.emitted("logout")).toHaveLength(1);
    expect(wrapper.emitted("select:menu")).toHaveLength(1);

    wrapper.unmount();
  });
});
