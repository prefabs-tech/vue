import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import ConfirmationFileActions from "../../ConfirmationFileActions.vue";

import type { VueWrapper } from "@vue/test-utils";

describe("ConfirmationFileActions", () => {
  it("matches snapshot", () => {
    const wrapper: VueWrapper = mount(ConfirmationFileActions, {
      global: {
        stubs: {
          ConfirmationModal: true,
        },
      },
      props: {
        showArchiveConfirmation: true,
        showDeleteConfirmation: true,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
