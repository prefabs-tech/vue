import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import { mockedTable } from "../../components/__test__/table";
import TableHeader from "../../components/TableHeader.vue";

describe("TableHeader", () => {
  describe("filter row visibility", () => {
    it("renders filter row when isFilterRowVisible is true", () => {
      const wrapper = mount(TableHeader, {
        props: {
          table: mockedTable,
          isFilterRowVisible: true,
        },
      });

      const filterRow = wrapper.find("tr:nth-child(2)");
      expect(filterRow.exists()).toBe(true);
    });

    it("does not render filter row when isFilterRowVisible is false", () => {
      const wrapper = mount(TableHeader, {
        props: {
          table: mockedTable,
          isFilterRowVisible: false,
        },
      });

      const rows = wrapper.findAll("tr");
      expect(rows.length).toBe(1);
    });
  });

  describe("debounce time", () => {
    it("uses custom inputDebounceTime when provided", () => {
      const wrapper = mount(TableHeader, {
        props: {
          table: mockedTable,
          isFilterRowVisible: true,
          inputDebounceTime: 500,
        },
      });

      expect(wrapper.vm.inputDebounceTime).toBe(500);
    });
  });
});
