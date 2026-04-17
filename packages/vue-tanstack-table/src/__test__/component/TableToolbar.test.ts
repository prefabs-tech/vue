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

  describe("onDrag function", () => {
    it("emits sorted column order without select and actions", () => {
      const wrapper = mount(TableToolbar, {
        props: {
          table: mockedTable,
          hasSelectionColumn: false,
          hasActionsColumn: false,
        },
      });

      const sortedList = [
        { id: 1, data: { id: "age" } },
        { id: 0, data: { id: "name" } },
      ];

      wrapper.vm.onDrag(sortedList);

      expect(wrapper.emitted("on:drag")).toBeTruthy();
      expect(wrapper.emitted("on:drag")?.[0]).toEqual([["age", "name"]]);
    });

    it("prepends select column when hasSelectionColumn is true", () => {
      const wrapper = mount(TableToolbar, {
        props: {
          table: mockedTable,
          hasSelectionColumn: true,
          hasActionsColumn: false,
        },
      });

      const sortedList = [
        { id: 0, data: { id: "name" } },
        { id: 1, data: { id: "age" } },
      ];

      wrapper.vm.onDrag(sortedList);

      expect(wrapper.emitted("on:drag")?.[0]).toEqual([
        ["select", "name", "age"],
      ]);
    });

    it("appends actions column when hasActionsColumn is true", () => {
      const wrapper = mount(TableToolbar, {
        props: {
          table: mockedTable,
          hasSelectionColumn: false,
          hasActionsColumn: true,
        },
      });

      const sortedList = [
        { id: 0, data: { id: "name" } },
        { id: 1, data: { id: "age" } },
      ];

      wrapper.vm.onDrag(sortedList);

      expect(wrapper.emitted("on:drag")?.[0]).toEqual([
        ["name", "age", "actions"],
      ]);
    });

    it("includes both select and actions columns in correct positions", () => {
      const wrapper = mount(TableToolbar, {
        props: {
          table: mockedTable,
          hasSelectionColumn: true,
          hasActionsColumn: true,
        },
      });

      const sortedList = [
        { id: 0, data: { id: "name" } },
        { id: 1, data: { id: "age" } },
      ];

      wrapper.vm.onDrag(sortedList);

      expect(wrapper.emitted("on:drag")?.[0]).toEqual([
        ["select", "name", "age", "actions"],
      ]);
    });
  });
});
