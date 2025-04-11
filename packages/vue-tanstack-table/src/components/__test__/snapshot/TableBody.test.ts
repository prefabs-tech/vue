import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import TableBody from "../../TableBody.vue";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from "@tanstack/vue-table";
import type { Table } from "@tanstack/vue-table";

const mockedTable = useVueTable({
  columns: [],
  data: [],
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
});

describe("TableBody", () => {
  it("matches snapshot", () => {
    const wrapper = mount(TableBody, {
      global: {
        stubs: {
          TableToolbar: true,
          TableHeader: true,
          TableBody: true,
          Pagination: true,
        },
      },
      props: {
        table: mockedTable,
      },
      slots: {
        footer: `<div class="footer">Footer</div>`,
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
