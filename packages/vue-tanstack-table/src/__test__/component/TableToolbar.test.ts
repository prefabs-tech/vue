import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

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
          (item: { id: number | string }) =>
            item.id !== "select" && item.id !== "actions",
        ),
      ).toBe(true);
    });
  });

  describe("onDrag function", () => {
    it("emits sorted column order without select and actions", () => {
      const wrapper = mount(TableToolbar, {
        props: {
          hasActionsColumn: false,
          hasSelectionColumn: false,
          table: mockedTable,
        },
      });

      const sortedList = [
        { data: { id: "age" }, id: 1 },
        { data: { id: "name" }, id: 0 },
      ];

      wrapper.vm.onDrag(sortedList);

      expect(wrapper.emitted("on:drag")).toBeTruthy();
      expect(wrapper.emitted("on:drag")?.[0]).toEqual([["age", "name"]]);
    });

    it("prepends select column when hasSelectionColumn is true", () => {
      const wrapper = mount(TableToolbar, {
        props: {
          hasActionsColumn: false,
          hasSelectionColumn: true,
          table: mockedTable,
        },
      });

      const sortedList = [
        { data: { id: "name" }, id: 0 },
        { data: { id: "age" }, id: 1 },
      ];

      wrapper.vm.onDrag(sortedList);

      expect(wrapper.emitted("on:drag")?.[0]).toEqual([
        ["select", "name", "age"],
      ]);
    });

    it("appends actions column when hasActionsColumn is true", () => {
      const wrapper = mount(TableToolbar, {
        props: {
          hasActionsColumn: true,
          hasSelectionColumn: false,
          table: mockedTable,
        },
      });

      const sortedList = [
        { data: { id: "name" }, id: 0 },
        { data: { id: "age" }, id: 1 },
      ];

      wrapper.vm.onDrag(sortedList);

      expect(wrapper.emitted("on:drag")?.[0]).toEqual([
        ["name", "age", "actions"],
      ]);
    });

    it("includes both select and actions columns in correct positions", () => {
      const wrapper = mount(TableToolbar, {
        props: {
          hasActionsColumn: true,
          hasSelectionColumn: true,
          table: mockedTable,
        },
      });

      const sortedList = [
        { data: { id: "name" }, id: 0 },
        { data: { id: "age" }, id: 1 },
      ];

      wrapper.vm.onDrag(sortedList);

      expect(wrapper.emitted("on:drag")?.[0]).toEqual([
        ["select", "name", "age", "actions"],
      ]);
    });
  });
});
