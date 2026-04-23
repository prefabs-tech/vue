import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import FileCard from "../../Index.vue";

import type { IFile } from "../../../types/file";
import type { VueWrapper } from "@vue/test-utils";

describe("FileCard", () => {
  it("matches snapshot", () => {
    const file = {
      description: "This is a file",
      downloadCount: 0,
      id: 1,
      originalFileName: "file.png",
      size: 4,
      uploadedAt: Date.now(),
      uploadedBy: { givenName: "Test", lastName: "user" },
    } as IFile;

    const wrapper: VueWrapper = mount(FileCard, {
      global: {
        stubs: {
          ButtonElement: true,
          Card: true,
          ConfirmationFileActions: true,
        },
      },
      props: {
        file: file,
      },
      slots: {
        default: "This is test footer.",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
