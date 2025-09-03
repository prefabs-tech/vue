import i18Plugin from "@prefabs.tech/vue3-i18n";
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
      uploadedBy: { givenName: "Test", lastName: "user" },
    } as IFile;

    const config = {
      i18n: {
        fallbackLocale: "en",
        messages: {},
        supportedLocales: ["en", "fr"],
      },
      slug: "app",
    };

    const wrapper: VueWrapper = mount(FileCard, {
      global: {
        plugins: [
          [i18Plugin, { config }],
        ],
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
