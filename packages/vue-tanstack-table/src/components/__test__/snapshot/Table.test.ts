import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Table from "../../Table.vue";

describe("Table", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Table, {
      global: {
        stubs: {
          Pagination: true,
          TableBody: true,
          TableHeader: true,
          TableToolbar: true,
        },
      },
      props: {
        isServerTable: true,
        showColumnAction: true,
        showResetButton: true,
        titleInfo: {
          text: "Test Title",
        },
        totalRecords: 20,
      },
      slots: {
        footer: `<div class="footer">Footer</div>`,
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
