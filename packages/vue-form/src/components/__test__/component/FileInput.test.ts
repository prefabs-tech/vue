import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import FileInput from "../../File/FileInput.vue";

describe("FileInput", () => {
  it("renders with button input method by default", () => {
    const wrapper = mount(FileInput);
    const button = wrapper.findComponent({ name: "ButtonElement" });

    expect(button.exists()).toBe(true);
  });

  it("renders with dropzone input method", () => {
    const wrapper = mount(FileInput, {
      props: {
        inputMethod: "dropzone",
      },
    });
    const dropzoneMessage = wrapper.find("p");

    expect(dropzoneMessage.exists()).toBe(true);
    expect(dropzoneMessage.text()).toBe("Drag and drop or click");
  });

  it("applies default buttonLabel", () => {
    const wrapper = mount(FileInput);
    const button = wrapper.findComponent({ name: "ButtonElement" });

    expect(button.props("label")).toBe("Select");
  });

  it("applies custom buttonLabel", () => {
    const wrapper = mount(FileInput, {
      props: {
        buttonLabel: "Choose File",
      },
    });
    const button = wrapper.findComponent({ name: "ButtonElement" });

    expect(button.props("label")).toBe("Choose File");
  });

  it("shows buttonLabelSelected with count when files selected", async () => {
    const wrapper = mount(FileInput, {
      props: {
        buttonLabelSelected: "Files Selected",
      },
    });

    // Simulate file selection by setting inputFiles
    wrapper.vm.inputFiles = [
      { name: "file1.txt", size: 100 } as File,
      { name: "file2.txt", size: 200 } as File,
    ];
    await wrapper.vm.$nextTick();

    const button = wrapper.findComponent({ name: "ButtonElement" });
    expect(button.props("label")).toBe("Files Selected (2)");
  });

  it("applies default dropzoneMessage", () => {
    const wrapper = mount(FileInput, {
      props: {
        inputMethod: "dropzone",
      },
    });
    const message = wrapper.find("p");

    expect(message.text()).toBe("Drag and drop or click");
  });

  it("applies custom dropzoneMessage", () => {
    const wrapper = mount(FileInput, {
      props: {
        dropzoneMessage: "Drop files here",
        inputMethod: "dropzone",
      },
    });
    const message = wrapper.find("p");

    expect(message.text()).toBe("Drop files here");
  });

  it("renders label when provided", () => {
    const wrapper = mount(FileInput, {
      props: {
        label: "Upload Files",
        name: "file-upload",
      },
    });
    const label = wrapper.find("label");

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("Upload Files");
    expect(label.attributes("for")).toBe("file-upload");
  });

  it("applies default button severity secondary", () => {
    const wrapper = mount(FileInput);
    const button = wrapper.findComponent({ name: "ButtonElement" });

    expect(button.props("severity")).toBe("secondary");
  });

  it("applies default button variant outlined", () => {
    const wrapper = mount(FileInput);
    const button = wrapper.findComponent({ name: "ButtonElement" });

    expect(button.props("variant")).toBe("outlined");
  });

  it("forwards buttonProps to ButtonElement", () => {
    const wrapper = mount(FileInput, {
      props: {
        buttonProps: {
          severity: "primary",
          variant: "solid",
        },
      },
    });
    const button = wrapper.findComponent({ name: "ButtonElement" });

    expect(button.props("severity")).toBe("primary");
    expect(button.props("variant")).toBe("solid");
  });

  it("shows selected files list when files are added", async () => {
    const wrapper = mount(FileInput);

    wrapper.vm.inputFiles = [{ name: "test.txt", size: 100 } as File];
    await wrapper.vm.$nextTick();

    const fileList = wrapper.find("ul.selected");
    expect(fileList.exists()).toBe(true);
  });

  it("does not show selected files list when no files", () => {
    const wrapper = mount(FileInput);
    const fileList = wrapper.find("ul.selected");

    expect(fileList.exists()).toBe(false);
  });

  it("forwards enableDescription to SelectedFile", async () => {
    const wrapper = mount(FileInput, {
      props: {
        enableDescription: true,
      },
    });

    wrapper.vm.inputFiles = [{ name: "test.txt", size: 100 } as File];
    await wrapper.vm.$nextTick();

    const selectedFile = wrapper.findComponent({ name: "SelectedFile" });
    expect(selectedFile.props("enableDescription")).toBe(true);
  });

  it("forwards descriptionPlaceholder to SelectedFile", async () => {
    const wrapper = mount(FileInput, {
      props: {
        descriptionPlaceholder: "Enter description",
      },
    });

    wrapper.vm.inputFiles = [{ name: "test.txt", size: 100 } as File];
    await wrapper.vm.$nextTick();

    const selectedFile = wrapper.findComponent({ name: "SelectedFile" });
    expect(selectedFile.props("descriptionPlaceholder")).toBe(
      "Enter description",
    );
  });

  it("forwards addDescriptionLabel to SelectedFile", async () => {
    const wrapper = mount(FileInput, {
      props: {
        addDescriptionLabel: "Add note",
      },
    });

    wrapper.vm.inputFiles = [{ name: "test.txt", size: 100 } as File];
    await wrapper.vm.$nextTick();

    const selectedFile = wrapper.findComponent({ name: "SelectedFile" });
    expect(selectedFile.props("addDescriptionLabel")).toBe("Add note");
  });

  it("uses default name when not provided", () => {
    const wrapper = mount(FileInput);
    const input = wrapper.find("input[type='file']");

    expect(input.attributes("name")).toBe("file");
  });

  it("applies custom name", () => {
    const wrapper = mount(FileInput, {
      props: {
        name: "custom-file",
      },
    });
    const input = wrapper.find("input[type='file']");

    expect(input.attributes("name")).toBe("custom-file");
  });
});
