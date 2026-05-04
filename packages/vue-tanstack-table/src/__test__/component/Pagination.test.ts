import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Pagination from "../../components/Pagination.vue";

describe("Pagination", () => {
  const defaultProps = {
    currentPage: 0,
    totalItems: 50,
  };

  it("calculates lastPage correctly", () => {
    const wrapper = mount(Pagination, {
      props: {
        ...defaultProps,
        defaultItemsPerPage: 10,
        totalItems: 55,
      },
    });

    expect(wrapper.vm.lastPage).toBe(6);
  });

  it("generates pages array correctly", () => {
    const wrapper = mount(Pagination, {
      props: {
        ...defaultProps,
        defaultItemsPerPage: 10,
        totalItems: 30,
      },
    });

    expect(wrapper.vm.pages).toEqual([1, 2, 3]);
  });

  it("generates pages array for single page", () => {
    const wrapper = mount(Pagination, {
      props: {
        ...defaultProps,
        defaultItemsPerPage: 10,
        totalItems: 5,
      },
    });

    expect(wrapper.vm.pages).toEqual([1]);
  });

  describe("onItemsPerPageChange", () => {
    it("updates itemsPerPage and emits event with parsed integer", () => {
      const wrapper = mount(Pagination, {
        props: defaultProps,
      });

      const event = {
        target: { value: "20" },
      } as unknown as Event;

      wrapper.vm.onItemsPerPageChange(event);

      expect(wrapper.vm.itemsPerPage).toBe(20);
      expect(wrapper.emitted("update:itemsPerPage")?.[0]).toEqual([20]);
    });

    it("updates lastPage after itemsPerPage change", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          defaultItemsPerPage: 10,
          totalItems: 100,
        },
      });

      expect(wrapper.vm.lastPage).toBe(10);

      const event = {
        target: { value: "20" },
      } as unknown as Event;

      wrapper.vm.onItemsPerPageChange(event);

      expect(wrapper.vm.lastPage).toBe(5);
    });
  });

  describe("onPageInputChange", () => {
    it("emits update:currentPage with zero-indexed page number", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          defaultItemsPerPage: 10,
          totalItems: 50,
        },
      });

      wrapper.vm.onPageInputChange("3");

      expect(wrapper.emitted("update:currentPage")?.[0]).toEqual([2]);
    });

    it("does not emit when page number is invalid", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          defaultItemsPerPage: 10,
          totalItems: 50,
        },
      });

      wrapper.vm.onPageInputChange("invalid");

      expect(wrapper.emitted("update:currentPage")).toBeFalsy();
    });

    it("does not emit when page number is negative", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          defaultItemsPerPage: 10,
          totalItems: 50,
        },
      });

      wrapper.vm.onPageInputChange("-1");

      expect(wrapper.emitted("update:currentPage")).toBeFalsy();
    });

    it("does not emit when page number exceeds lastPage", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          defaultItemsPerPage: 10,
          totalItems: 50,
        },
      });

      wrapper.vm.onPageInputChange("10");

      expect(wrapper.emitted("update:currentPage")).toBeFalsy();
    });

    it("handles numeric input", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          defaultItemsPerPage: 10,
          totalItems: 50,
        },
      });

      wrapper.vm.onPageInputChange(4);

      expect(wrapper.emitted("update:currentPage")?.[0]).toEqual([3]);
    });
  });
});
