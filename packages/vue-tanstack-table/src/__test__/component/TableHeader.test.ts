import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";

import { mockedTable } from "../../components/__test__/table";
import TableHeader from "../../components/TableHeader.vue";

describe("TableHeader", () => {
  describe("getFormattedDateRange", () => {
    it("formats date range with start time 00:00:00 and end time 23:59:59", () => {
      const wrapper = mount(TableHeader, {
        props: {
          table: mockedTable,
          isFilterRowVisible: false,
        },
      });

      const dateRange = [new Date("2024-01-15"), new Date("2024-01-20")];
      const result = wrapper.vm.getFormattedDateRange(dateRange);

      expect(result).toEqual(["2024-01-15 00:00:00", "2024-01-20 23:59:59"]);
    });

    it("returns null for empty date range", () => {
      const wrapper = mount(TableHeader, {
        props: {
          table: mockedTable,
          isFilterRowVisible: false,
        },
      });

      const result = wrapper.vm.getFormattedDateRange([]);
      expect(result).toBeNull();
    });

    it("filters out null dates from range", () => {
      const wrapper = mount(TableHeader, {
        props: {
          table: mockedTable,
          isFilterRowVisible: false,
        },
      });

      const dateRange = [new Date("2024-01-15"), null];
      const result = wrapper.vm.getFormattedDateRange(dateRange as Date[]);

      expect(result).toEqual(["2024-01-15 00:00:00", undefined]);
    });

    it("pads single digit days and months with zero", () => {
      const wrapper = mount(TableHeader, {
        props: {
          table: mockedTable,
          isFilterRowVisible: false,
        },
      });

      const dateRange = [new Date("2024-03-05"), new Date("2024-03-09")];
      const result = wrapper.vm.getFormattedDateRange(dateRange);

      expect(result).toEqual(["2024-03-05 00:00:00", "2024-03-09 23:59:59"]);
    });
  });

  describe("updateRangeFilter", () => {
    it("updates filter value at specified index", () => {
      const mockSetFilterValue = vi.fn();
      const mockColumn = {
        getFilterValue: () => [10, 20],
        setFilterValue: mockSetFilterValue,
      };

      const wrapper = mount(TableHeader, {
        props: {
          table: mockedTable,
          isFilterRowVisible: false,
        },
      });

      wrapper.vm.updateRangeFilter(mockColumn, 0, 15);

      expect(mockSetFilterValue).toHaveBeenCalledWith([15, 20]);
    });

    it("clears filter when both values are undefined", () => {
      const mockSetFilterValue = vi.fn();
      const mockColumn = {
        getFilterValue: () => [10, undefined],
        setFilterValue: mockSetFilterValue,
      };

      const wrapper = mount(TableHeader, {
        props: {
          table: mockedTable,
          isFilterRowVisible: false,
        },
      });

      wrapper.vm.updateRangeFilter(mockColumn, 0, undefined);

      expect(mockSetFilterValue).toHaveBeenCalledWith([]);
    });

    it("initializes filter array when no existing filter value", () => {
      const mockSetFilterValue = vi.fn();
      const mockColumn = {
        getFilterValue: () => null,
        setFilterValue: mockSetFilterValue,
      };

      const wrapper = mount(TableHeader, {
        props: {
          table: mockedTable,
          isFilterRowVisible: false,
        },
      });

      wrapper.vm.updateRangeFilter(mockColumn, 1, 50);

      expect(mockSetFilterValue).toHaveBeenCalledWith([undefined, 50]);
    });

    it("keeps filter active when at least one value is defined", () => {
      const mockSetFilterValue = vi.fn();
      const mockColumn = {
        getFilterValue: () => [undefined, 30],
        setFilterValue: mockSetFilterValue,
      };

      const wrapper = mount(TableHeader, {
        props: {
          table: mockedTable,
          isFilterRowVisible: false,
        },
      });

      wrapper.vm.updateRangeFilter(mockColumn, 0, 10);

      expect(mockSetFilterValue).toHaveBeenCalledWith([10, 30]);
    });

    it("converts value to number", () => {
      const mockSetFilterValue = vi.fn();
      const mockColumn = {
        getFilterValue: () => [10, 20],
        setFilterValue: mockSetFilterValue,
      };

      const wrapper = mount(TableHeader, {
        props: {
          table: mockedTable,
          isFilterRowVisible: false,
        },
      });

      wrapper.vm.updateRangeFilter(mockColumn, 0, 25);

      expect(mockSetFilterValue).toHaveBeenCalledWith([25, 20]);
    });
  });
});
