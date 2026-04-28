import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SortableList from "../../Index.vue";

describe("SortableList", () => {
  it("matches snapshot", () => {
    const list = [
      {
        data: "item1",
        id: 1,
      },
      {
        data: "item2",
        id: 2,
      },
      {
        data: "item3",
        id: 3,
      },
      {
        data: "item4",
        id: 4,
      },
      {
        data: "item5",
        id: 5,
      },
    ];

    const wrapper = mount(SortableList, {
      props: {
        list: list,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
