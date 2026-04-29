import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import Table from "../../components/Table.vue";

import type { TableColumnDefinition } from "../../types";

describe("Table", () => {
  const columnsData: TableColumnDefinition<{ name: string; age: number }>[] = [
    { accessorKey: "name", header: "Name", enableColumnFilter: true },
    { accessorKey: "age", header: "Age", dataType: "number" },
  ];

  const data = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
  ];

  describe("isFilterRowVisible computed property", () => {
    it("returns true when any column has enableColumnFilter", () => {
      const wrapper = mount(Table, {
        props: { columnsData, data, id: "test-table" },
      });

      expect(wrapper.vm.isFilterRowVisible).toBe(true);
    });

    it("returns false when no column has enableColumnFilter", () => {
      const columnsNoFilter = [
        { accessorKey: "name", header: "Name" },
        { accessorKey: "age", header: "Age" },
      ];

      const wrapper = mount(Table, {
        props: { columnsData: columnsNoFilter, data, id: "test-table" },
      });

      expect(wrapper.vm.isFilterRowVisible).toBe(false);
    });
  });

  describe("totalItems computed property", () => {
    it("returns totalRecords for server-side tables", () => {
      const wrapper = mount(Table, {
        props: {
          columnsData,
          data,
          id: "test-table",
          isServerTable: true,
          totalRecords: 100,
        },
      });

      expect(wrapper.vm.totalItems).toBe(100);
    });

    it("returns filtered row count for client-side tables", () => {
      const wrapper = mount(Table, {
        props: {
          columnsData,
          data,
          id: "test-table",
          isServerTable: false,
        },
      });

      expect(wrapper.vm.totalItems).toBeGreaterThan(0);
    });
  });

  describe("selectedRows computed property", () => {
    it("returns selected rows array when enableRowSelection is true", () => {
      const wrapper = mount(Table, {
        props: {
          columnsData,
          data,
          id: "test-table",
          enableRowSelection: true,
        },
      });

      expect(wrapper.vm.selectedRows).toBeDefined();
      expect(Array.isArray(wrapper.vm.selectedRows)).toBe(true);
    });
  });

  describe("row selection", () => {
    it("adds select column when enableRowSelection is true", () => {
      const wrapper = mount(Table, {
        props: {
          columnsData,
          data,
          id: "test-table",
          enableRowSelection: true,
        },
      });

      const tableColumns = wrapper.vm.table.getAllLeafColumns();
      const hasSelectColumn = tableColumns.some(
        (col: { id: string }) => col.id === "select",
      );
      expect(hasSelectColumn).toBe(true);
    });

    it("does not add select column when enableRowSelection is false", () => {
      const wrapper = mount(Table, {
        props: {
          columnsData,
          data,
          id: "test-table",
          enableRowSelection: false,
        },
      });

      const tableColumns = wrapper.vm.table.getAllLeafColumns();
      const hasSelectColumn = tableColumns.some(
        (col: { id: string }) => col.id === "select",
      );
      expect(hasSelectColumn).toBe(false);
    });
  });

  describe("actions column", () => {
    it("adds actions column when dataActionMenu is provided", () => {
      const actions = [{ label: "Edit", action: "edit" }];
      const wrapper = mount(Table, {
        props: {
          columnsData,
          data,
          id: "test-table",
          dataActionMenu: actions,
        },
      });

      const tableColumns = wrapper.vm.table.getAllLeafColumns();
      const hasActionsColumn = tableColumns.some(
        (col: { id: string }) => col.id === "actions",
      );
      expect(hasActionsColumn).toBe(true);
    });

    it("does not add actions column when dataActionMenu is empty", () => {
      const wrapper = mount(Table, {
        props: {
          columnsData,
          data,
          id: "test-table",
          dataActionMenu: [],
        },
      });

      const tableColumns = wrapper.vm.table.getAllLeafColumns();
      const hasActionsColumn = tableColumns.some(
        (col: { id: string }) => col.id === "actions",
      );
      expect(hasActionsColumn).toBe(false);
    });
  });

  describe("loading state", () => {
    it("shows loading overlay when isLoading is true", () => {
      const wrapper = mount(Table, {
        props: {
          columnsData,
          data,
          id: "test-table",
          isLoading: true,
        },
      });

      expect(wrapper.find(".loading-overlay").exists()).toBe(true);
    });

    it("hides loading overlay when isLoading is false", () => {
      const wrapper = mount(Table, {
        props: {
          columnsData,
          data,
          id: "test-table",
          isLoading: false,
        },
      });

      expect(wrapper.find(".loading-overlay").exists()).toBe(false);
    });
  });

  describe("toolbar buttons", () => {
    it("shows reset button when showResetButton is true", () => {
      const wrapper = mount(Table, {
        props: {
          columnsData,
          data,
          id: "test-table",
          showResetButton: true,
        },
      });

      expect(wrapper.text()).toContain("Reset all");
    });

    it("shows column action button when showColumnAction is true", () => {
      const wrapper = mount(Table, {
        props: {
          columnsData,
          data,
          id: "test-table",
          showColumnAction: true,
        },
      });

      expect(wrapper.text()).toContain("Columns");
    });
  });
});
