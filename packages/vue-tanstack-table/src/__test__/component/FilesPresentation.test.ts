import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import FilesPresentation from "../../components/FilesPresentation/Index.vue";

describe("FilesPresentation", () => {
  const files = [
    { id: 1, name: "file1.pdf", size: 1024, type: "application/pdf" },
    { id: 2, name: "file2.jpg", size: 2048, type: "image/jpeg" },
  ];

  describe("presentation mode switching", () => {
    it("renders FilesList when presentation is list", () => {
      const wrapper = mount(FilesPresentation, {
        props: {
          files,
          presentation: "list",
        },
      });

      expect(wrapper.findComponent({ name: "FilesList" }).exists()).toBe(true);
      expect(wrapper.findComponent({ name: "FilesTable" }).exists()).toBe(
        false,
      );
    });

    it("renders FilesTable when presentation is table", () => {
      const wrapper = mount(FilesPresentation, {
        props: {
          files,
          presentation: "table",
        },
      });

      expect(wrapper.findComponent({ name: "FilesTable" }).exists()).toBe(true);
      expect(wrapper.findComponent({ name: "FilesList" }).exists()).toBe(false);
    });
  });

  describe("emitAction validation", () => {
    it("emits valid action names", () => {
      const wrapper = mount(FilesPresentation, {
        props: {
          files,
          presentation: "list",
        },
      });

      wrapper.vm.emitAction("download", files[0]);
      expect(wrapper.emitted("action:download")).toBeTruthy();
      expect(wrapper.emitted("action:download")?.[0]).toEqual([files[0]]);
    });

    it("silently ignores invalid action names", () => {
      const wrapper = mount(FilesPresentation, {
        props: {
          files,
          presentation: "list",
        },
      });

      wrapper.vm.emitAction("invalid", files[0]);
      expect(wrapper.emitted("action:invalid")).toBeFalsy();
    });
  });

  describe("visible file details mapping", () => {
    it("maps visibleFileDetails for list view", () => {
      const wrapper = mount(FilesPresentation, {
        props: {
          files,
          presentation: "list",
          visibleFileDetails: ["name", "size"],
        },
      });

      expect(wrapper.vm.listVisibleFileDetails).toBeDefined();
    });
  });
});
