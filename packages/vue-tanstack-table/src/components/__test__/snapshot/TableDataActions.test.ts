import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { mockedTable } from "../table";
import TableDataActions from "../../TableDataActions.vue";
import { ConfirmationModal } from "@dzangolab/vue3-ui";

describe("TableDataActions", () => {
  it("matches snapshot", () => {
    const wrapper = mount(TableDataActions, {
      global: {
        mocks: {
          showConfirmation: true,
        },
        stubs: {
          ConfirmationModal: true,
          Dropdown: true,
        }
      },
      props: {
        actions: [
          {
            label: 'View',
          },
          {
            disabled: true,
            label: 'Edit',
          },
          {
            label: 'Share',
            disabled: (rowData) => rowData.id !== 11,
          },
          {
            confirmationOptions: {
              header: 'Are you sure!',
              body: 'You are going to delete this data.',
            },
            label: 'Delete',
            requireConfirmationModal: true,
          },
        ]
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
