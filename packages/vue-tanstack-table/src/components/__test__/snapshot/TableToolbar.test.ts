import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import TableToolbar from "../../TableToolbar.vue";
import { mockedTable } from "../table";

describe("TableToolbar", () => {
  it("matches snapshot", () => {
    const wrapper = mount(TableToolbar, {
      global: {
        stubs: {
          SortableList: true,
        },
      },
      props: {
        showColumnAction: true,
        showResetButton: true,
        table: mockedTable,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
