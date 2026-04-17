import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import TableDataActions from "../../components/TableDataActions.vue";

import type { DataActionsMenuItem } from "../../types";

describe("TableDataActions", () => {
  const mockData = { id: 1, name: "Test Item" };

  const globalStubs = {
    ButtonElement: {
      template: "<button><slot /></button>",
    },
    Dropdown: {
      template: "<div><slot /></div>",
    },
    ConfirmationModal: {
      template: '<div class="confirmation-modal"><slot /></div>',
    },
    Icon: {
      template: '<span class="icon"></span>',
    },
  };

  describe("action filtering with display function", () => {
    it("filters actions based on display function", () => {
      const actions: DataActionsMenuItem[] = [
        { label: "Edit", action: "edit", display: (data) => data.id === 1 },
        { label: "Delete", action: "delete", display: (data) => data.id === 2 },
      ];

      const wrapper = mount(TableDataActions, {
        props: {
          actions,
          data: mockData,
          mode: "buttons",
        },
        global: {
          stubs: globalStubs,
        },
      });

      // Check filteredItems computed property
      expect(wrapper.vm.filteredItems.length).toBe(1);
      expect(wrapper.vm.filteredItems[0].label).toBe("Edit");
    });

    it("shows all actions when no display function provided", () => {
      const actions: DataActionsMenuItem[] = [
        { label: "Edit", action: "edit" },
        { label: "Delete", action: "delete" },
      ];

      const wrapper = mount(TableDataActions, {
        props: {
          actions,
          data: mockData,
          mode: "buttons",
        },
        global: {
          stubs: globalStubs,
        },
      });

      expect(wrapper.vm.filteredItems.length).toBe(2);
    });
  });

  describe("action disabled state", () => {
    it("disables actions based on disabled function", () => {
      const actions: DataActionsMenuItem[] = [
        { label: "Edit", action: "edit", disabled: (data) => data.id === 1 },
      ];

      const wrapper = mount(TableDataActions, {
        props: {
          actions,
          data: mockData,
          mode: "buttons",
        },
        global: {
          stubs: globalStubs,
        },
      });

      expect(wrapper.vm.filteredItems[0].disabled).toBe(true);
    });

    it("enables actions when disabled function returns false", () => {
      const actions: DataActionsMenuItem[] = [
        { label: "Edit", action: "edit", disabled: (data) => data.id === 2 },
      ];

      const wrapper = mount(TableDataActions, {
        props: {
          actions,
          data: mockData,
          mode: "buttons",
        },
        global: {
          stubs: globalStubs,
        },
      });

      expect(wrapper.vm.filteredItems[0].disabled).toBe(false);
    });
  });

  describe("displayActions prop", () => {
    it("hides all actions when displayActions is false", () => {
      const actions: DataActionsMenuItem[] = [
        { label: "Edit", action: "edit" },
      ];

      const wrapper = mount(TableDataActions, {
        props: {
          actions,
          data: mockData,
          displayActions: false,
        },
        global: {
          stubs: globalStubs,
        },
      });

      expect(wrapper.vm.showActionsMenu).toBe(false);
    });

    it("evaluates displayActions function with data", () => {
      const actions: DataActionsMenuItem[] = [
        { label: "Edit", action: "edit" },
      ];

      const displayFunction = (data: { id: number }) => data.id === 1;

      const wrapper = mount(TableDataActions, {
        props: {
          actions,
          data: mockData,
          displayActions: displayFunction,
        },
        global: {
          stubs: globalStubs,
        },
      });

      expect(wrapper.vm.showActionsMenu).toBeTruthy();
    });

    it("hides actions when displayActions function returns false", () => {
      const actions: DataActionsMenuItem[] = [
        { label: "Edit", action: "edit" },
      ];

      const displayFunction = (data: { id: number }) => data.id === 2;

      const wrapper = mount(TableDataActions, {
        props: {
          actions,
          data: mockData,
          displayActions: displayFunction,
        },
        global: {
          stubs: globalStubs,
        },
      });

      expect(wrapper.vm.showActionsMenu).toBe(false);
    });
  });

  describe("confirmation modal", () => {
    it("shows confirmation state when action requires confirmation", async () => {
      const actions: DataActionsMenuItem[] = [
        {
          label: "Delete",
          action: "delete",
          requireConfirmationModal: true,
          confirmationOptions: {
            title: "Confirm Delete",
            message: "Are you sure?",
          },
        },
      ];

      const wrapper = mount(TableDataActions, {
        props: {
          actions,
          data: mockData,
          mode: "buttons",
        },
        global: {
          stubs: globalStubs,
        },
      });

      // Simulate action selection
      wrapper.vm.onSelectAction(actions[0]);
      await wrapper.vm.$nextTick();

      expect(wrapper.vm.showConfirmation).toBe(true);
    });

    it("does not show confirmation when requireConfirmationModal is false", async () => {
      const actions: DataActionsMenuItem[] = [
        { label: "Edit", action: "edit" },
      ];

      const wrapper = mount(TableDataActions, {
        props: {
          actions,
          data: mockData,
          mode: "buttons",
        },
        global: {
          stubs: globalStubs,
        },
      });

      // Simulate action selection
      wrapper.vm.onSelectAction(actions[0]);
      await wrapper.vm.$nextTick();

      expect(wrapper.vm.showConfirmation).toBe(false);
    });
  });
});
