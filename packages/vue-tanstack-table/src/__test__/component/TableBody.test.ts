import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import { mockedTable } from "../../components/__test__/table";
import TableBody from "../../components/TableBody.vue";

describe("TableBody", () => {
  describe("empty state", () => {
    it("renders empty message when no rows", () => {
      const emptyTable = {
        ...mockedTable,
        getRowModel: () => ({ rows: [] }),
      } as typeof mockedTable;

      const wrapper = mount(TableBody, {
        props: {
          table: emptyTable as typeof mockedTable,
          emptyTableMessage: "No data available",
        },
      });

      expect(wrapper.text()).toContain("No data available");
    });

    it("uses default empty message when not provided", () => {
      const emptyTable = {
        ...mockedTable,
        getRowModel: () => ({ rows: [] }),
      } as typeof mockedTable;

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
          table: mockedTable,
          enableRowSelection: true,
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
          table: mockedTable,
          enableRowSelection: false,
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
      const tableWithNumberColumn = {
        ...mockedTable,
        getRowModel: () => ({
          rows: [
            {
              id: "0",
              getIsSelected: () => false,
              getVisibleCells: () => [
                {
                  id: "0_age",
                  column: {
                    id: "age",
                    columnDef: {
                      accessorKey: "age",
                      dataType: "number",
                    },
                  },
                  getContext: () => ({
                    getValue: () => 30,
                  }),
                },
              ],
            },
          ],
        }),
        getAllColumns: () => [
          {
            id: "age",
            columnDef: {
              accessorKey: "age",
              dataType: "number",
            },
          },
        ],
      } as typeof mockedTable;

      const wrapper = mount(TableBody, {
        props: {
          table: tableWithNumberColumn as typeof mockedTable,
          customFormatters,
        },
      });

      expect(wrapper.text()).toContain("years old");
    });
  });
});
