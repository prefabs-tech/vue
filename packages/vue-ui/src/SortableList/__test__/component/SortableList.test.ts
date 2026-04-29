import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { h } from "vue";
import { VueDraggableNext as draggable } from "vue-draggable-next";

import SortableList from "../../Index.vue";

describe("SortableList", () => {
  it("renders each item as text when no render function is provided", () => {
    const list = [
      { id: 1, data: "First item" },
      { id: 2, data: "Second item" },
    ];

    const wrapper = mount(SortableList, { props: { list } });

    expect(wrapper.text()).toContain("First item");
    expect(wrapper.text()).toContain("Second item");
  });

  it("renders items via the render function when provided", () => {
    const list = [
      {
        id: 1,
        data: "rendered item",
        render: (data: unknown) =>
          h("span", { class: "custom-rendered" }, String(data)),
      },
    ];

    const wrapper = mount(SortableList, { props: { list } });

    expect(wrapper.find(".custom-rendered").exists()).toBe(true);
    expect(wrapper.find(".custom-rendered").text()).toBe("rendered item");
  });

  it("emits onDrag with the current list when draggable fires change", async () => {
    const list = [
      { id: 1, data: "Item A" },
      { id: 2, data: "Item B" },
    ];

    const wrapper = mount(SortableList, { props: { list } });
    const draggableComponent = wrapper.findComponent(draggable);

    draggableComponent.vm.$emit("change", {});
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("onDrag")).toBeTruthy();
    expect(wrapper.emitted("onDrag")?.[0][0]).toEqual(list);
  });
});
