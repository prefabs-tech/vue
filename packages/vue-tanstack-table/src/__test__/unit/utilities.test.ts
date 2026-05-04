import type {
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from "@tanstack/vue-table";

import { beforeEach, describe, expect, it, vi } from "vitest";

import { FILTER_FUNCTIONS_ENUM } from "../../enums";
import {
  clearSavedTableStates,
  formatDate,
  formatDateTime,
  formatNumber,
  getAlignValue,
  getRequestJSON,
  getSavedTableState,
  isDefined,
  isRangeFilter,
  saveTableState,
} from "../../utilities";

vi.mock("@prefabs.tech/vue3-ui", async () => {
  const actual = await vi.importActual("@prefabs.tech/vue3-ui");
  return {
    ...actual,
    getStorage: (type: string) => {
      if (type === "localStorage") {
        return global.localStorage;
      }
      return global.sessionStorage;
    },
  };
});

describe("utilities", () => {
  describe("formatNumber", () => {
    it("formats number with default locale", () => {
      const result = formatNumber({ value: 1234.56 });
      expect(result).toBe("1,234.56");
    });

    it("formats number with custom locale", () => {
      const result = formatNumber({ locale: "de-DE", value: 1234.56 });
      expect(result).toBe("1.234,56");
    });

    it("formats number with custom options", () => {
      const result = formatNumber({
        formatOptions: { maximumFractionDigits: 2, minimumFractionDigits: 2 },
        value: 1234.56,
      });
      expect(result).toBe("1,234.56");
    });

    it("returns value unchanged for non-number input", () => {
      const result = formatNumber({
        value: "not a number" as unknown as number,
      });
      expect(result).toBe("not a number");
    });

    it("returns value unchanged for NaN", () => {
      const result = formatNumber({ value: Number.NaN });
      expect(result).toBe(Number.NaN);
    });
  });

  describe("formatDate", () => {
    it("formats date with default options", () => {
      const result = formatDate("2024-01-15");
      expect(result).toMatch(/15.*01.*2024/);
    });

    it("formats date with custom locale", () => {
      const result = formatDate("2024-01-15", "en-US");
      expect(result).toMatch(/01.*15.*2024/);
    });

    it("formats date with custom options", () => {
      const result = formatDate("2024-01-15", "en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      expect(result).toContain("January");
    });
  });

  describe("formatDateTime", () => {
    it("formats datetime with default options", () => {
      const result = formatDateTime("2024-01-15T14:30:00");
      expect(result).toMatch(/15.*01.*2024.*14.*30/);
    });

    it("formats datetime with custom locale", () => {
      const result = formatDateTime("2024-01-15T14:30:00", "en-US");
      expect(result).toMatch(/01.*15.*2024/);
    });
  });

  describe("getAlignValue", () => {
    it("returns provided align value when specified", () => {
      const result = getAlignValue({ align: "center" });
      expect(result).toBe("center");
    });

    it("returns center for other dataType", () => {
      const result = getAlignValue({ dataType: "other" });
      expect(result).toBe("center");
    });

    it("returns right for number dataType", () => {
      const result = getAlignValue({ dataType: "number" });
      expect(result).toBe("right");
    });

    it("returns right for currency dataType", () => {
      const result = getAlignValue({ dataType: "currency" });
      expect(result).toBe("right");
    });

    it("returns left for text dataType", () => {
      const result = getAlignValue({ dataType: "text" });
      expect(result).toBe("left");
    });

    it("returns left when no dataType specified", () => {
      const result = getAlignValue({});
      expect(result).toBe("left");
    });
  });

  describe("getRequestJSON", () => {
    it("returns empty structure when no state provided", () => {
      const result = getRequestJSON();
      expect(result).toEqual({
        filter: null,
        limit: null,
        offset: null,
        sort: null,
      });
    });

    it("generates sort request for single column", () => {
      const sortingState: SortingState = [{ desc: false, id: "name" }];
      const result = getRequestJSON(sortingState);
      expect(result.sort).toEqual([{ direction: "ASC", key: "name" }]);
    });

    it("generates sort request for multiple columns", () => {
      const sortingState: SortingState = [
        { desc: false, id: "name" },
        { desc: true, id: "age" },
      ];
      const result = getRequestJSON(sortingState);
      expect(result.sort).toEqual([
        { direction: "ASC", key: "name" },
        { direction: "DESC", key: "age" },
      ]);
    });

    it("generates filter request for single text filter", () => {
      const filterState: ColumnFiltersState = [
        { filterFn: FILTER_FUNCTIONS_ENUM.CONTAINS, id: "name", value: "John" },
      ];
      const result = getRequestJSON(undefined, filterState);
      expect(result.filter).toEqual({
        key: "name",
        operator: "ct",
        value: "John",
      });
    });

    it("generates filter request for multiple filters with AND", () => {
      const filterState: ColumnFiltersState = [
        { filterFn: FILTER_FUNCTIONS_ENUM.CONTAINS, id: "name", value: "John" },
        { filterFn: FILTER_FUNCTIONS_ENUM.EQUALS, id: "age", value: "30" },
      ];
      const result = getRequestJSON(undefined, filterState);
      expect(result.filter).toHaveProperty("AND");
      expect((result.filter as { AND: unknown[] }).AND).toHaveLength(2);
    });

    it("generates filter request for array values (IN operator)", () => {
      const filterState: ColumnFiltersState = [
        {
          filterFn: FILTER_FUNCTIONS_ENUM.IN,
          id: "status",
          value: ["active", "pending"],
        },
      ];
      const result = getRequestJSON(undefined, filterState);
      expect(result.filter).toEqual({
        key: "status",
        operator: "in",
        value: "active,pending",
      });
    });

    it("generates filter request for BETWEEN operator", () => {
      const filterState: ColumnFiltersState = [
        {
          filterFn: FILTER_FUNCTIONS_ENUM.BETWEEN,
          id: "age",
          value: ["20", "30"],
        },
      ];
      const result = getRequestJSON(undefined, filterState);
      expect(result.filter).toEqual({
        key: "age",
        operator: "bt",
        value: "20,30",
      });
    });

    it("ignores empty string filters", () => {
      const filterState: ColumnFiltersState = [
        { filterFn: FILTER_FUNCTIONS_ENUM.CONTAINS, id: "name", value: "  " },
      ];
      const result = getRequestJSON(undefined, filterState);
      expect(result.filter).toBeNull();
    });

    it("ignores empty array filters", () => {
      const filterState: ColumnFiltersState = [
        { filterFn: FILTER_FUNCTIONS_ENUM.IN, id: "status", value: [] },
      ];
      const result = getRequestJSON(undefined, filterState);
      expect(result.filter).toBeNull();
    });

    it("generates pagination request", () => {
      const paginationState: PaginationState = { pageIndex: 2, pageSize: 10 };
      const result = getRequestJSON(undefined, undefined, paginationState);
      expect(result.limit).toBe(10);
      expect(result.offset).toBe(20);
    });

    it("generates complete request with all states", () => {
      const sortingState: SortingState = [{ desc: false, id: "name" }];
      const filterState: ColumnFiltersState = [
        { filterFn: FILTER_FUNCTIONS_ENUM.CONTAINS, id: "name", value: "John" },
      ];
      const paginationState: PaginationState = { pageIndex: 0, pageSize: 20 };
      const result = getRequestJSON(sortingState, filterState, paginationState);
      expect(result.sort).toBeTruthy();
      expect(result.filter).toBeTruthy();
      expect(result.limit).toBe(20);
      expect(result.offset).toBe(0);
    });
  });

  describe("storage utilities", () => {
    let mockStorage: Storage;

    beforeEach(() => {
      mockStorage = {
        clear: () => {},
        getItem: () => null,
        key: () => null,
        length: 0,
        removeItem: () => {},
        setItem: () => {},
      };
    });

    describe("saveTableState", () => {
      it("saves table state to storage", () => {
        const state = {
          columnFilters: [{ id: "name", value: "test" }],
          sorting: [{ desc: false, id: "name" }],
        };
        let savedKey = "";
        let savedValue = "";
        mockStorage.setItem = (key, value) => {
          savedKey = key;
          savedValue = value;
        };

        saveTableState("my-table", state, mockStorage);

        expect(savedKey).toBe("table-my-table");
        expect(JSON.parse(savedValue)).toEqual(state);
      });
    });

    describe("getSavedTableState", () => {
      it("retrieves saved table state from storage", () => {
        const state = {
          columnFilters: [{ id: "name", value: "test" }],
          sorting: [{ desc: false, id: "name" }],
        };
        mockStorage.getItem = (key) => {
          if (key === "table-my-table") {
            return JSON.stringify(state);
          }
          return null;
        };

        const result = getSavedTableState("my-table", mockStorage);

        expect(result).toEqual(state);
      });

      it("returns null when no saved state exists", () => {
        const result = getSavedTableState("my-table", mockStorage);
        expect(result).toBeNull();
      });

      it("returns null when JSON parsing fails", () => {
        mockStorage.getItem = () => "invalid json";
        const result = getSavedTableState("my-table", mockStorage);
        expect(result).toBeNull();
      });
    });

    describe("clearSavedTableStates", () => {
      it("removes all table state entries from storage", () => {
        const removedKeys: string[] = [];
        const storageKeys = ["table-table1", "table-table2", "other-key"];
        const storageData: Record<string, string> = {
          "other-key": "{}",
          "table-table1": "{}",
          "table-table2": "{}",
        };

        const mockLocalStorage = Object.create(Object.prototype, {
          clear: {
            value: () => {
              for (const key of Object.keys(storageData))
                delete storageData[key];
              storageKeys.length = 0;
            },
          },
          getItem: {
            value: (key: string) => storageData[key] || null,
          },
          key: {
            value: (index: number) => storageKeys[index] || null,
          },
          length: {
            get: () => storageKeys.length,
          },
          removeItem: {
            value: (key: string) => {
              removedKeys.push(key);
              delete storageData[key];
              const index = storageKeys.indexOf(key);
              if (index !== -1) {
                storageKeys.splice(index, 1);
              }
            },
          },
          setItem: {
            value: (key: string, value: string) => {
              storageData[key] = value;
              if (!storageKeys.includes(key)) {
                storageKeys.push(key);
              }
            },
          },
        });

        // Add enumerable properties for Object.keys() to work
        for (const key of storageKeys) {
          Object.defineProperty(mockLocalStorage, key, {
            configurable: true,
            enumerable: true,
            value: storageData[key],
          });
        }

        Object.defineProperty(global, "localStorage", {
          configurable: true,
          value: mockLocalStorage,
          writable: true,
        });

        clearSavedTableStates("localStorage");

        expect(removedKeys).toContain("table-table1");
        expect(removedKeys).toContain("table-table2");
        expect(removedKeys).not.toContain("other-key");
      });
    });
  });

  describe("isRangeFilter", () => {
    it("returns true for IN filter", () => {
      expect(isRangeFilter(FILTER_FUNCTIONS_ENUM.IN)).toBe(true);
    });

    it("returns true for NOT_IN filter", () => {
      expect(isRangeFilter(FILTER_FUNCTIONS_ENUM.NOT_IN)).toBe(true);
    });

    it("returns true for BETWEEN filter", () => {
      expect(isRangeFilter(FILTER_FUNCTIONS_ENUM.BETWEEN)).toBe(true);
    });

    it("returns true for NOT_BETWEEN filter", () => {
      expect(isRangeFilter(FILTER_FUNCTIONS_ENUM.NOT_BETWEEN)).toBe(true);
    });

    it("returns false for CONTAINS filter", () => {
      expect(isRangeFilter(FILTER_FUNCTIONS_ENUM.CONTAINS)).toBe(false);
    });

    it("returns false for EQUALS filter", () => {
      expect(isRangeFilter(FILTER_FUNCTIONS_ENUM.EQUALS)).toBe(false);
    });
  });

  describe("isDefined", () => {
    it("returns true for defined values", () => {
      expect(isDefined(0)).toBe(true);
      expect(isDefined("")).toBe(true);
      expect(isDefined(false)).toBe(true);
      expect(isDefined([])).toBe(true);
      expect(isDefined({})).toBe(true);
    });

    it("returns false for undefined", () => {
      expect(isDefined(undefined)).toBe(false);
    });

    it("returns false for null", () => {
      expect(isDefined(null)).toBe(false);
    });
  });
});
