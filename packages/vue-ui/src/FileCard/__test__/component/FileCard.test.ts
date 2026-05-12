import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { IFile } from "../../../types/file";

import FileCard from "../../Index.vue";

const baseFile: IFile = {
  description: "Monthly report",
  id: 1,
  originalFileName: "report.pdf",
  size: 1024,
  uploadedAt: Date.UTC(2025, 0, 1),
  uploadedBy: { givenName: "Alice", lastName: "Smith" },
};

describe("FileCard", () => {
  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = vi.fn();
  });

  it("hides the thumbnail when showThumbnail=false", () => {
    const wrapper = mount(FileCard, {
      props: { file: baseFile, showThumbnail: false },
    });
    expect(wrapper.find(".file-thumbnail").exists()).toBe(false);
  });

  it("shows Download button when actionButtonsVisibility.download=true", () => {
    const wrapper = mount(FileCard, {
      props: {
        actionButtonsVisibility: {
          archive: false,
          delete: false,
          download: true,
          share: false,
          view: false,
        },
        file: baseFile,
      },
    });
    const buttons = wrapper.findAll("button");
    expect(buttons.some((b) => b.text().includes("Download"))).toBe(true);
  });

  it("emits on:download when Download button is clicked", async () => {
    const wrapper = mount(FileCard, {
      props: {
        actionButtonsVisibility: {
          archive: false,
          delete: false,
          download: true,
          share: false,
          view: false,
        },
        file: baseFile,
      },
    });
    const downloadButton = wrapper
      .findAll("button")
      .find((b) => b.text().includes("Download"));
    await downloadButton?.trigger("click");
    expect(wrapper.emitted("on:download")).toBeTruthy();
    expect(wrapper.emitted("on:download")?.[0]).toEqual([baseFile]);
  });

  it("shows the archive confirmation dialog when Archive button is clicked", async () => {
    const wrapper = mount(FileCard, {
      props: {
        actionButtonsVisibility: {
          archive: true,
          delete: false,
          download: false,
          share: false,
          view: false,
        },
        file: baseFile,
      },
    });
    const archiveButton = wrapper
      .findAll("button")
      .find((b) => b.text().includes("Archive"));
    await archiveButton?.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".confirmation-file-actions dialog").exists()).toBe(
      true,
    );
  });

  it("shows uploaded-by name when givenName and lastName are provided", () => {
    const wrapper = mount(FileCard, {
      props: {
        file: {
          ...baseFile,
          uploadedBy: { givenName: "Alice", lastName: "Smith" },
        },
        visibilityDetail: {
          actions: false,
          description: false,
          downloadCount: false,
          lastDownloadedAt: false,
          originalFileName: true,
          size: false,
          uploadedAt: false,
          uploadedBy: true,
        },
      },
    });
    expect(wrapper.find(".uploaded-by").text()).toContain("Alice");
    expect(wrapper.find(".uploaded-by").text()).toContain("Smith");
  });

  it("shows email as fallback when uploadedBy has no name fields", () => {
    const wrapper = mount(FileCard, {
      props: {
        file: { ...baseFile, uploadedBy: { email: "alice@example.com" } },
        visibilityDetail: {
          actions: false,
          description: false,
          downloadCount: false,
          lastDownloadedAt: false,
          originalFileName: true,
          size: false,
          uploadedAt: false,
          uploadedBy: true,
        },
      },
    });
    expect(wrapper.find(".uploaded-by").text()).toContain("alice@example.com");
  });
});
