import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

import FilesList from "../../Index.vue";

import type { IFile } from "../../../types/file";

const makeFile = (id: number, name: string): IFile => ({
  id,
  originalFileName: name,
  uploadedAt: Date.UTC(2025, 0, 1),
  uploadedBy: { email: "user@example.com" },
});

describe("FilesList", () => {
  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = vi.fn();
  });

  it("renders one file card per file in the list", () => {
    const wrapper = mount(FilesList, {
      props: {
        files: [makeFile(1, "file1.pdf"), makeFile(2, "file2.pdf")],
      },
    });
    expect(wrapper.findAll(".file-card")).toHaveLength(2);
  });

  it("emits action:download with the correct file when download is triggered", async () => {
    const file = makeFile(1, "doc.pdf");
    const wrapper = mount(FilesList, {
      props: {
        files: [file],
        actionButtonsVisibility: {
          archive: false,
          delete: false,
          download: true,
          edit: false,
          share: false,
          view: false,
        },
      },
    });
    const downloadButton = wrapper
      .findAll("button")
      .find((b) => b.text().includes("Download"));
    await downloadButton?.trigger("click");
    expect(wrapper.emitted("action:download")).toBeTruthy();
    expect(wrapper.emitted("action:download")?.[0]).toEqual([file]);
  });

  it("emits action:share with the correct file when share is triggered", async () => {
    const file = makeFile(2, "image.png");
    const wrapper = mount(FilesList, {
      props: {
        files: [file],
        actionButtonsVisibility: {
          archive: false,
          delete: false,
          download: false,
          edit: false,
          share: true,
          view: false,
        },
      },
    });
    const shareButton = wrapper
      .findAll("button")
      .find((b) => b.text().includes("Share"));
    await shareButton?.trigger("click");
    expect(wrapper.emitted("action:share")).toBeTruthy();
    expect(wrapper.emitted("action:share")?.[0]).toEqual([file]);
  });
});
