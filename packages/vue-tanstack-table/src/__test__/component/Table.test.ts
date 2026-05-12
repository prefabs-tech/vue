import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import type { TableColumnDefinition } from "../../types";

import Table from "../../components/Table.vue";

describe("Table", () => {
  const columnsData: TableColumnDefinition<{ age: number; name: string }>[] = [
    { accessorKey: "name", enableColumnFilter: true, header: "Name" },
    { accessorKey: "age", dataType: "number", header: "Age" },
  ];

  const data = [
    { age: 30, name: "John" },
    { age: 25, name: "Jane" },
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
          enableRowSelection: true,
          id: "test-table",
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
          enableRowSelection: true,
          id: "test-table",
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
          enableRowSelection: false,
          id: "test-table",
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
      const actions = [{ action: "edit", label: "Edit" }];
      const wrapper = mount(Table, {
        props: {
          columnsData,
          data,
          dataActionMenu: actions,
          id: "test-table",
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
          dataActionMenu: [],
          id: "test-table",
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
