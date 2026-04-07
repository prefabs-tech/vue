import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NavMenu from "@/components/NavMenu.vue";
import NavMenuItem from "@/components/NavMenuItem.vue";

describe("NavMenu", () => {
  it("renders all visible items", () => {
    const wrapper = shallowMount(NavMenu, {
      props: {
        menu: [
          { name: "Item 1", routeName: "item-1" },
          { name: "Item 2", routeName: "item-2" },
        ],
      },
    });

    expect(wrapper.findAllComponents(NavMenuItem)).toHaveLength(2);
  });

  it("filters out items with hide set to true", () => {
    const wrapper = shallowMount(NavMenu, {
      props: {
        menu: [
          { name: "Visible", routeName: "visible" },
          { name: "Hidden", routeName: "hidden", hide: true },
        ],
      },
    });

    expect(wrapper.findAllComponents(NavMenuItem)).toHaveLength(1);
  });

  it("filters out a parent item when all its children are hidden", () => {
    const wrapper = shallowMount(NavMenu, {
      props: {
        menu: [
          {
            name: "Parent",
            routeName: "parent",
            children: [
              { name: "Child 1", routeName: "child-1", hide: true },
              { name: "Child 2", routeName: "child-2", hide: true },
            ],
          },
        ],
      },
    });

    expect(wrapper.findAllComponents(NavMenuItem)).toHaveLength(0);
  });

  it("keeps parent and strips hidden children when some children are visible", () => {
    const wrapper = shallowMount(NavMenu, {
      props: {
        menu: [
          {
            name: "Parent",
            routeName: "parent",
            children: [
              { name: "Visible Child", routeName: "child-visible" },
              { name: "Hidden Child", routeName: "child-hidden", hide: true },
            ],
          },
        ],
      },
    });

    const items = wrapper.findAllComponents(NavMenuItem);
    expect(items).toHaveLength(1);

    const passedItem = items[0].props("item") as {
      children: { routeName: string }[];
    };
    expect(passedItem.children).toHaveLength(1);
    expect(passedItem.children[0].routeName).toBe("child-visible");
  });
});
