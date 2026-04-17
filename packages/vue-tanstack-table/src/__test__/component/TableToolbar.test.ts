import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import { mockedTable } from "../../components/__test__/table";
import TableToolbar from "../../components/TableToolbar.vue";

describe("TableToolbar", () => {
  describe("column visibility items", () => {
    it("generates items excluding select and actions columns", () => {
      const wrapper = mount(TableToolbar, {
        props: {
          table: mockedTable,
        },
      });

      const items = wrapper.vm.items;
      expect(
        items.every(
          (item: { id: string | number }) =>
            item.id !== "select" && item.id !== "actions",
        ),
      ).toBe(true);
    });
  });
});
