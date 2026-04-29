import { mount } from "@vue/test-utils";
import { describe, expect, it, beforeEach } from "vitest";

import Dropdown from "../../Index.vue";

import type { DropdownMenu } from "../../../types";

const menu: DropdownMenu[] = [
  { label: "Edit", key: "edit" },
  { label: "Delete", key: "delete", disabled: true },
  { label: "Hidden", key: "hidden", display: false },
];

const openPopup = async (wrapper: ReturnType<typeof mount>) => {
  const popupWrapper = wrapper.findComponent({ name: "PopupComponent" });
  popupWrapper.vm.isVisible = true;
  await wrapper.vm.$nextTick();
};

describe("Dropdown", () => {
  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1200,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 800,
    });
  });

  it("filters out items with display set to false", async () => {
    const wrapper = mount(Dropdown, { props: { menu } });

    await openPopup(wrapper);

    const items = wrapper.findAll(".menu-item");
    const labels = items.map((i) => i.text());

    expect(labels).toContain("Edit");
    expect(labels).not.toContain("Hidden");
  });

  it("emits select with the clicked menu item", async () => {
    const wrapper = mount(Dropdown, { props: { menu } });

    await openPopup(wrapper);

    const editItem = wrapper
      .findAll(".menu-item")
      .find((i) => i.text() === "Edit");

    await editItem?.trigger("click");

    const emitted = wrapper.emitted("select");

    expect(emitted).toBeTruthy();
    expect(emitted?.[0][0]).toMatchObject({ label: "Edit", key: "edit" });
  });

  it("does not emit select when a disabled item is clicked", async () => {
    const wrapper = mount(Dropdown, { props: { menu } });

    await openPopup(wrapper);

    const deleteItem = wrapper
      .findAll(".menu-item")
      .find((i) => i.text() === "Delete");

    await deleteItem?.trigger("click");

    expect(wrapper.emitted("select")).toBeFalsy();
  });

  it("applies disabled class to disabled menu items", async () => {
    const wrapper = mount(Dropdown, { props: { menu } });

    await openPopup(wrapper);

    const deleteItem = wrapper
      .findAll(".menu-item")
      .find((i) => i.text() === "Delete");

    expect(deleteItem?.classes()).toContain("disabled");
  });
});
