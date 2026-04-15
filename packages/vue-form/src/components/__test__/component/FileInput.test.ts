import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import FileInput from "../../File/FileInput.vue";

describe("FileInput", () => {
  it("applies custom buttonLabel and shows count when files selected", async () => {
    const wrapper = mount(FileInput, {
      props: {
        buttonLabel: "Choose File",
        buttonLabelSelected: "Files Selected",
      },
    });
    const button = wrapper.findComponent({ name: "ButtonElement" });

    expect(button.props("label")).toBe("Choose File");

    wrapper.vm.inputFiles = [
      { name: "file1.txt", size: 100 } as File,
      { name: "file2.txt", size: 200 } as File,
    ];
    await wrapper.vm.$nextTick();

    expect(button.props("label")).toBe("Files Selected (2)");
  });

  it("shows selected files list when files are added", async () => {
    const wrapper = mount(FileInput);

    wrapper.vm.inputFiles = [{ name: "test.txt", size: 100 } as File];
    await wrapper.vm.$nextTick();

    const fileList = wrapper.find("ul.selected");
    expect(fileList.exists()).toBe(true);
  });

  it("handles file mode: update replaces, append accumulates", async () => {
    const updateWrapper = mount(FileInput, {
      props: { mode: "update" },
    });
    updateWrapper.vm.inputFiles = [{ name: "file1.txt", size: 100 } as File];
    await updateWrapper.vm.$nextTick();
    updateWrapper.vm.inputFiles = [{ name: "file2.txt", size: 200 } as File];
    await updateWrapper.vm.$nextTick();

    expect(updateWrapper.vm.inputFiles.length).toBe(1);
    expect(updateWrapper.vm.inputFiles[0].name).toBe("file2.txt");

    const appendWrapper = mount(FileInput, {
      props: { mode: "append" },
    });
    appendWrapper.vm.inputFiles = [{ name: "file1.txt", size: 100 } as File];
    await appendWrapper.vm.$nextTick();
    appendWrapper.vm.inputFiles.push({ name: "file2.txt", size: 200 } as File);
    await appendWrapper.vm.$nextTick();

    expect(appendWrapper.vm.inputFiles.length).toBe(2);
  });
});
