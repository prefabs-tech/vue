import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import FilesTable from "../../components/FilesTable/Index.vue";

describe("FilesTable", () => {
  const files = [
    {
      id: 1,
      originalFileName: "file1.pdf",
      size: 1024,
      uploadedAt: Date.now(),
      uploadedBy: { name: "Test User" },
    },
    {
      id: 2,
      originalFileName: "file2.jpg",
      size: 2048,
      uploadedAt: Date.now(),
      uploadedBy: { name: "Test User" },
    },
  ];

  describe("column merging", () => {
    it("merges custom columns with default columns", () => {
      const customColumns = [
        { accessorKey: "custom", header: "Custom Column" },
      ];

      const wrapper = mount(FilesTable, {
        props: {
          columnsData: customColumns,
          files,
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
          columnsData: customColumns,
          files,
        },
      });

      const mergedColumns = wrapper.vm.mergedColumns;
      const fileNameColumn = mergedColumns.find(
        (col) => col.accessorKey === "originalFileName",
      );
      // The merge logic spreads override over default: { ...defaultColumn, ...override }
      // So the custom header should win
      expect(fileNameColumn).toBeDefined();
      expect(fileNameColumn?.header).toBe("Custom File Name");
    });
  });
});
