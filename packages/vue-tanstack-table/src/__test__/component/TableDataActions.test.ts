import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import type { DataActionsMenuItem } from "../../types";

import TableDataActions from "../../components/TableDataActions.vue";

describe("TableDataActions", () => {
  const mockData = { id: 1, name: "Test Item" };

  const globalStubs = {
    ButtonElement: {
      template: "<button><slot /></button>",
    },
    ConfirmationModal: {
      template: '<div class="confirmation-modal"><slot /></div>',
    },
    Dropdown: {
      template: "<div><slot /></div>",
    },
    Icon: {
      template: '<span class="icon"></span>',
    },
  };

  describe("action filtering with display function", () => {
    it("filters actions based on display function", () => {
      const actions: DataActionsMenuItem[] = [
        { action: "edit", display: (data) => data.id === 1, label: "Edit" },
        { action: "delete", display: (data) => data.id === 2, label: "Delete" },
      ];

      const wrapper = mount(TableDataActions, {
        global: {
          stubs: globalStubs,
        },
        props: {
          actions,
          data: mockData,
          mode: "buttons",
        },
      });

      // Check filteredItems computed property
      expect(wrapper.vm.filteredItems.length).toBe(1);
      expect(wrapper.vm.filteredItems[0].label).toBe("Edit");
    });

    it("shows all actions when no display function provided", () => {
      const actions: DataActionsMenuItem[] = [
        { action: "edit", label: "Edit" },
        { action: "delete", label: "Delete" },
      ];

      const wrapper = mount(TableDataActions, {
        global: {
          stubs: globalStubs,
        },
        props: {
          actions,
          data: mockData,
          mode: "buttons",
        },
      });

      expect(wrapper.vm.filteredItems.length).toBe(2);
    });
  });

  describe("action disabled state", () => {
    it("disables actions based on disabled function", () => {
      const actions: DataActionsMenuItem[] = [
        { action: "edit", disabled: (data) => data.id === 1, label: "Edit" },
      ];

      const wrapper = mount(TableDataActions, {
        global: {
          stubs: globalStubs,
        },
        props: {
          actions,
          data: mockData,
          mode: "buttons",
        },
      });

      expect(wrapper.vm.filteredItems[0].disabled).toBe(true);
    });

    it("enables actions when disabled function returns false", () => {
      const actions: DataActionsMenuItem[] = [
        { action: "edit", disabled: (data) => data.id === 2, label: "Edit" },
      ];

      const wrapper = mount(TableDataActions, {
        global: {
          stubs: globalStubs,
        },
        props: {
          actions,
          data: mockData,
          mode: "buttons",
        },
      });

      expect(wrapper.vm.filteredItems[0].disabled).toBe(false);
    });
  });

  describe("displayActions prop", () => {
    it("hides all actions when displayActions is false", () => {
      const actions: DataActionsMenuItem[] = [
        { action: "edit", label: "Edit" },
      ];

      const wrapper = mount(TableDataActions, {
        global: {
          stubs: globalStubs,
        },
        props: {
          actions,
          data: mockData,
          displayActions: false,
        },
      });

      expect(wrapper.vm.showActionsMenu).toBe(false);
    });

    it("evaluates displayActions function with data", () => {
      const actions: DataActionsMenuItem[] = [
        { action: "edit", label: "Edit" },
      ];

      const displayFunction = (data: { id: number }) => data.id === 1;

      const wrapper = mount(TableDataActions, {
        global: {
          stubs: globalStubs,
        },
        props: {
          actions,
          data: mockData,
          displayActions: displayFunction,
        },
      });

      expect(wrapper.vm.showActionsMenu).toBeTruthy();
    });

    it("hides actions when displayActions function returns false", () => {
      const actions: DataActionsMenuItem[] = [
        { action: "edit", label: "Edit" },
      ];

      const displayFunction = (data: { id: number }) => data.id === 2;

      const wrapper = mount(TableDataActions, {
        global: {
          stubs: globalStubs,
        },
        props: {
          actions,
          data: mockData,
          displayActions: displayFunction,
        },
      });

      expect(wrapper.vm.showActionsMenu).toBe(false);
    });
  });

  describe("confirmation modal", () => {
    it("shows confirmation state when action requires confirmation", async () => {
      const actions: DataActionsMenuItem[] = [
        {
          action: "delete",
          confirmationOptions: {
            message: "Are you sure?",
            title: "Confirm Delete",
          },
          label: "Delete",
          requireConfirmationModal: true,
        },
      ];

      const wrapper = mount(TableDataActions, {
        global: {
          stubs: globalStubs,
        },
        props: {
          actions,
          data: mockData,
          mode: "buttons",
        },
      });

      // Simulate action selection
      wrapper.vm.onSelectAction(actions[0]);
      await wrapper.vm.$nextTick();

      expect(wrapper.vm.showConfirmation).toBe(true);
    });

    it("does not show confirmation when requireConfirmationModal is false", async () => {
      const actions: DataActionsMenuItem[] = [
        { action: "edit", label: "Edit" },
      ];

      const wrapper = mount(TableDataActions, {
        global: {
          stubs: globalStubs,
        },
        props: {
          actions,
          data: mockData,
          mode: "buttons",
        },
      });

      // Simulate action selection
      wrapper.vm.onSelectAction(actions[0]);
      await wrapper.vm.$nextTick();

      expect(wrapper.vm.showConfirmation).toBe(false);
    });
  });
});
