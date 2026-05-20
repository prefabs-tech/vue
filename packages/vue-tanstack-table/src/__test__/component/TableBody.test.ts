import type { Table } from "@tanstack/vue-table";

import {
  getCoreRowModel,
  getPaginationRowModel,
  useVueTable,
} from "@tanstack/vue-table";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { mockedTable } from "../../components/__test__/table";
import TableBody from "../../components/TableBody.vue";

describe("TableBody", () => {
  describe("empty state", () => {
    const emptyTable = {
      ...mockedTable,
      getRowModel: () => ({ flatRows: [], rows: [], rowsById: {} }),
    } as typeof mockedTable;

    it("renders empty message when no rows", () => {
      const wrapper = mount(TableBody, {
        props: {
          emptyTableMessage: "No data available",
          table: emptyTable,
        },
      });

      expect(wrapper.text()).toContain("No data available");
    });

    it("uses default empty message when not provided", () => {
      const wrapper = mount(TableBody, {
        props: {
          table: emptyTable,
        },
      });

      expect(wrapper.text()).toContain("No results.");
    });
  });

  describe("row selection attribute", () => {
    it("adds data-selected attribute when enableRowSelection is true", () => {
      const wrapper = mount(TableBody, {
        props: {
          enableRowSelection: true,
          table: mockedTable,
        },
      });

      const rows = wrapper.findAll("tbody tr");
      for (const row of rows) {
        expect(row.attributes("data-selected")).toBeDefined();
      }
    });

    it("does not add data-selected attribute when enableRowSelection is false", () => {
      const wrapper = mount(TableBody, {
        props: {
          enableRowSelection: false,
          table: mockedTable,
        },
      });

      const rows = wrapper.findAll("tbody tr");
      for (const row of rows) {
        expect(row.attributes("data-selected")).toBeUndefined();
      }
    });
  });

  describe("custom formatters", () => {
    it("applies custom number formatter when provided", () => {
      const customFormatters = {
        number: (value: number) => `${value} years old`,
      };

      // Create a table with a number dataType column
      const tableWithNumberColumn = useVueTable({
        columns: [
          {
            accessorKey: "age",
            dataType: "number",
            header: "Age",
          },
        ],
        data: [{ age: 30 }, { age: 25 }],
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
      }) as Table<unknown>;

      const wrapper = mount(TableBody, {
        props: {
          customFormatters,
          table: tableWithNumberColumn,
        },
      });

      expect(wrapper.text()).toContain("30 years old");
      expect(wrapper.text()).toContain("25 years old");
    });
  });
});
