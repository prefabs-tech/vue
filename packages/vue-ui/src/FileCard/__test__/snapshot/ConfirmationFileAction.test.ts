import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import ConfirmationFileActions from "../../ConfirmationFileActions.vue";

import type { IFile } from "../../../types/file";
import type { VueWrapper } from "@vue/test-utils";

describe("ConfirmationFileActions", () => {
  it("matches snapshot", () => {
    const wrapper: VueWrapper = mount(ConfirmationFileActions, {
      props: {
        showArchiveConfirmation: true,
        showDeleteConfirmation: true,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
