import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

import ConfirmationModal from "../../Index.vue";

describe("ConfirmationModal", () => {
  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = vi.fn();
  });

  it("renders default header text", () => {
    const wrapper = mount(ConfirmationModal);

    expect(wrapper.find(".title").text()).toBe("Confirmation required");
  });

  it("renders default message text", () => {
    const wrapper = mount(ConfirmationModal);

    expect(wrapper.find(".dialog-content").text()).toContain(
      "Are you sure you want to proceed?",
    );
  });

  it("shows close button when closable is true (default)", () => {
    const wrapper = mount(ConfirmationModal);

    expect(wrapper.find('button[aria-label="close modal"]').exists()).toBe(
      true,
    );
  });

  it("hides close button when closable is false", () => {
    const wrapper = mount(ConfirmationModal, {
      props: { closable: false },
    });

    expect(wrapper.find('button[aria-label="close modal"]').exists()).toBe(
      false,
    );
  });

  it("shows cancel button with default label No", () => {
    const wrapper = mount(ConfirmationModal);
    const buttons = wrapper.findAll("button");
    const noButton = buttons.find((b) => b.text().includes("No"));

    expect(noButton).toBeDefined();
  });

  it("shows accept button with default label Yes", () => {
    const wrapper = mount(ConfirmationModal);
    const buttons = wrapper.findAll("button");
    const yesButton = buttons.find((b) => b.text().includes("Yes"));

    expect(yesButton).toBeDefined();
  });

  it("emits on:confirm when accept button is clicked", async () => {
    const wrapper = mount(ConfirmationModal);
    const buttons = wrapper.findAll("button");
    const yesButton = buttons.find((b) => b.text().includes("Yes"));

    await yesButton?.trigger("click");

    expect(wrapper.emitted("on:confirm")).toBeTruthy();
  });

  it("emits on:close when cancel button is clicked", async () => {
    const wrapper = mount(ConfirmationModal);
    const buttons = wrapper.findAll("button");
    const noButton = buttons.find((b) => b.text().includes("No"));

    await noButton?.trigger("click");

    expect(wrapper.emitted("on:close")).toBeTruthy();
  });

  it("calls dialog.showModal on mount", async () => {
    const wrapper = mount(ConfirmationModal);

    await wrapper.vm.$nextTick();

    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });
});
