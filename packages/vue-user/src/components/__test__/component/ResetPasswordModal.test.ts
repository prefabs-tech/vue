import { SelectInput } from "@prefabs.tech/vue3-form";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";

import ResetPasswordModal from "../../ResetPasswordModal.vue";
import appConfig from "../config";

const userAuthorizedApps = [
  { label: "Admin", value: 1 },
  { label: "Website", value: 2 },
];

const createWrapper = (props = {}) =>
  mount(ResetPasswordModal, {
    global: {
      plugins: [[i18nPlugin, { config: appConfig }]],
    },
    props: { show: true, userAuthorizedApps, ...props },
  });

describe("#61 ResetPasswordModal", () => {
  it("offers the user's authorized apps", () => {
    const wrapper = createWrapper();

    expect(wrapper.findComponent(SelectInput).props("options")).toEqual(
      userAuthorizedApps,
    );
  });

  it("emits submit with the selected app", async () => {
    const wrapper = createWrapper();

    await wrapper.findComponent(SelectInput).vm.$emit("update:modelValue", 2);
    await wrapper.find("form").trigger("submit");
    await vi.waitFor(() => expect(wrapper.emitted("submit")).toBeDefined());

    expect(wrapper.emitted("submit")?.[0]).toEqual([{ appId: 2 }]);
  });

  it("emits hide:modal when closed", async () => {
    const wrapper = createWrapper();

    await wrapper.find('svg[aria-label="close modal"]').trigger("click");

    expect(wrapper.emitted("hide:modal")).toHaveLength(1);
  });

  it("shows the error message and updates it", async () => {
    const wrapper = createWrapper({ errorMessage: "First error" });

    expect(wrapper.text()).toContain("First error");

    await wrapper.setProps({ errorMessage: "Second error" });

    expect(wrapper.text()).toContain("Second error");
  });

  it("clears the selection on resetForm", async () => {
    const wrapper = createWrapper();

    await wrapper.findComponent(SelectInput).vm.$emit("update:modelValue", 2);
    (wrapper.vm as unknown as { resetForm: () => void }).resetForm();
    await flushPromises();

    expect(wrapper.findComponent(SelectInput).props("modelValue")).toBeNull();
  });
});
