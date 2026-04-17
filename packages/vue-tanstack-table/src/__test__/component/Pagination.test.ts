import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import Pagination from "../../components/Pagination.vue";

describe("Pagination", () => {
  const defaultProps = {
    currentPage: 0,
    totalItems: 50,
  };

  describe("navigation buttons", () => {
    it("renders previous and next buttons by default", () => {
      const wrapper = mount(Pagination, {
        props: defaultProps,
      });

      expect(wrapper.find(".previous-page").exists()).toBe(true);
      expect(wrapper.find(".next-page").exists()).toBe(true);
    });

    it("renders first and last buttons when showFirstLastButtons is true", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          showFirstLastButtons: true,
        },
      });

      expect(wrapper.find(".first-page").exists()).toBe(true);
      expect(wrapper.find(".last-page").exists()).toBe(true);
    });

    it("hides first and last buttons when showFirstLastButtons is false", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          showFirstLastButtons: false,
        },
      });

      expect(wrapper.find(".first-page").exists()).toBe(false);
      expect(wrapper.find(".last-page").exists()).toBe(false);
    });

    it("emits update:currentPage when previous button clicked", async () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          currentPage: 1,
        },
      });

      await wrapper.find(".previous-page").trigger("click");
      expect(wrapper.emitted("update:currentPage")).toBeTruthy();
      expect(wrapper.emitted("update:currentPage")?.[0]).toEqual([0]);
    });

    it("emits update:currentPage when next button clicked", async () => {
      const wrapper = mount(Pagination, {
        props: defaultProps,
      });

      await wrapper.find(".next-page").trigger("click");
      expect(wrapper.emitted("update:currentPage")).toBeTruthy();
      expect(wrapper.emitted("update:currentPage")?.[0]).toEqual([1]);
    });
  });

  describe("items per page control", () => {
    it("shows items per page control by default", () => {
      const wrapper = mount(Pagination, {
        props: defaultProps,
      });

      expect(wrapper.find(".items-per-page-control").exists()).toBe(true);
    });

    it("hides items per page control when showItemsPerPageControl is false", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          showItemsPerPageControl: false,
        },
      });

      expect(wrapper.find(".items-per-page-control").exists()).toBe(false);
    });

    it("uses custom label for items per page control", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          itemsPerPageControlLabel: "Rows per page",
        },
      });

      expect(wrapper.text()).toContain("Rows per page");
    });

    it("uses default items per page options", () => {
      const wrapper = mount(Pagination, {
        props: defaultProps,
      });

      expect(wrapper.vm.itemsPerPageOptions).toEqual([5, 10, 20, 30]);
    });

    it("uses custom items per page options", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          itemsPerPageOptions: [10, 25, 50, 100],
        },
      });

      expect(wrapper.vm.itemsPerPageOptions).toEqual([10, 25, 50, 100]);
    });

    it("emits update:itemsPerPage when items per page changes", async () => {
      const wrapper = mount(Pagination, {
        props: defaultProps,
      });

      const select = wrapper.find("select");
      await select.setValue(20);

      expect(wrapper.emitted("update:itemsPerPage")).toBeTruthy();
      expect(wrapper.emitted("update:itemsPerPage")?.[0]).toEqual([20]);
    });
  });

  describe("page input control", () => {
    it("shows page input when showPageInput is true", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          showPageInput: true,
        },
      });

      expect(wrapper.find(".page-input-control").exists()).toBe(true);
    });

    it("hides page input when showPageInput is false", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          showPageInput: false,
        },
      });

      expect(wrapper.find(".page-input-control").exists()).toBe(false);
    });

    it("uses custom label for page input", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          showPageInput: true,
          pageInputLabel: "Jump to:",
        },
      });

      expect(wrapper.text()).toContain("Jump to:");
    });
  });

  describe("page buttons", () => {
    it("shows page buttons when showPageButtons is true", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          showPageButtons: true,
        },
      });

      expect(wrapper.find(".page-button").exists()).toBe(true);
    });

    it("hides page buttons when showPageButtons is false", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          showPageButtons: false,
        },
      });

      expect(wrapper.find(".page-button").exists()).toBe(false);
    });
  });

  describe("computed properties", () => {
    it("calculates lastPage correctly", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          totalItems: 50,
          defaultItemsPerPage: 10,
        },
      });

      expect(wrapper.vm.lastPage).toBe(5);
    });

    it("generates pages array correctly", () => {
      const wrapper = mount(Pagination, {
        props: {
          ...defaultProps,
          totalItems: 30,
          defaultItemsPerPage: 10,
        },
      });

      expect(wrapper.vm.pages).toEqual([1, 2, 3]);
    });
  });
});
