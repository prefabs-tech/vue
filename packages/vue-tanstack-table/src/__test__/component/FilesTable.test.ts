import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import FilesTable from "../../components/FilesTable/Index.vue";

describe("FilesTable", () => {
  const files = [
    { id: 1, name: "file1.pdf", size: 1024, type: "application/pdf" },
    { id: 2, name: "file2.jpg", size: 2048, type: "image/jpeg" },
  ];

  describe("column merging", () => {
    it("merges custom columns with default columns", () => {
      const customColumns = [
        { accessorKey: "custom", header: "Custom Column" },
      ];

      const wrapper = mount(FilesTable, {
        props: {
          files,
          columns: customColumns,
        },
      });

      const mergedColumns = wrapper.vm.mergedColumns;
      expect(mergedColumns.length).toBeGreaterThan(customColumns.length);
    });

    it("overrides default column properties with custom ones", () => {
      const customColumns = [
        { accessorKey: "originalFileName", header: "Custom File Name" },
      ];

      const wrapper = mount(FilesTable, {
        props: {
          files,
          columnsData: customColumns,
        },
      });

      const mergedColumns = wrapper.vm.mergedColumns;
      const fileNameColumn = mergedColumns.find(
        (col: { accessorKey: string }) =>
          col.accessorKey === "originalFileName",
      );
      // The merge logic spreads override over default: { ...defaultColumn, ...override }
      // So the custom header should win
      expect(fileNameColumn.header).toBe("Custom File Name");
    });
  });
});
