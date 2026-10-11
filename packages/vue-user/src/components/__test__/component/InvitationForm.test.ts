import configPlugin from "@prefabs.tech/vue3-config";
import { SelectInput } from "@prefabs.tech/vue3-form";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { flushPromises, mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  addInvitation: vi.fn(),
}));

vi.mock("../../../auth-provider", () => ({
  auth: vi.fn(() => ({})),
  authConfig: undefined,
  default: vi.fn(),
}));

vi.mock("../../../api/user", async (importOriginal) => ({
  ...(await importOriginal<object>()),
  addInvitation: mocks.addInvitation,
}));

import type { InvitationAppOption } from "../../../types";

import { emitter } from "../../../index";
import InvitationForm from "../../invitation/InvitationForm.vue";
import appConfig from "../config";

const apps: InvitationAppOption[] = [
  {
    id: 1,
    name: "Admin",
    origin: "https://admin.example.com",
    supportedRoles: [{ id: 1, name: "ADMIN" }],
  },
  {
    id: 2,
    name: "Website",
    origin: window.location.origin,
    supportedRoles: [
      { id: 2, name: "USER" },
      { id: 3, name: "EDITOR" },
    ],
  },
];

const createWrapper = (props = {}) =>
  mount(InvitationForm, {
    global: {
      plugins: [
        [configPlugin, { config: appConfig }],
        [i18nPlugin, { config: appConfig }],
      ],
    },
    props,
  });

const selects = (wrapper: ReturnType<typeof createWrapper>) =>
  wrapper.findAllComponents(SelectInput);

describe("InvitationForm", () => {
  const notify = vi.fn();

  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
    emitter.all.clear();
    emitter.on("notify", notify);
  });

  describe("#54 app ordering", () => {
    it("moves the current app to the top as This app", () => {
      const wrapper = createWrapper({ apps });

      expect(selects(wrapper)[0].props("options")).toEqual([
        { label: "This app", value: 2 },
        { label: "Admin", value: 1 },
      ]);
    });

    it("prefers an app's label over its name", () => {
      const wrapper = createWrapper({
        apps: [{ ...apps[0], label: "Back office" }],
      });

      expect(selects(wrapper)[0].props("options")).toEqual([
        { label: "Back office", value: 1 },
      ]);
    });
  });

  describe("#55 role options", () => {
    it("disables the role select until an app is chosen", () => {
      const wrapper = createWrapper({ apps });

      expect(selects(wrapper)[1].props("disabled")).toBe(true);
      expect(selects(wrapper)[1].props("options")).toEqual([]);
    });

    it("offers the selected app's supported roles", async () => {
      const wrapper = createWrapper({ apps });

      await selects(wrapper)[0].vm.$emit("update:modelValue", 2);

      expect(selects(wrapper)[1].props("options")).toEqual([
        { label: "USER", value: "USER" },
        { label: "EDITOR", value: "EDITOR" },
      ]);
    });

    it("clears the role when the app changes", async () => {
      const wrapper = createWrapper({ apps });

      await selects(wrapper)[0].vm.$emit("update:modelValue", 2);
      await selects(wrapper)[1].vm.$emit("update:modelValue", "EDITOR");
      await selects(wrapper)[0].vm.$emit("update:modelValue", 1);

      expect(selects(wrapper)[1].props("modelValue")).toBeNull();
    });

    it("falls back to the roles prop without apps", () => {
      const wrapper = createWrapper({
        roles: [
          { id: 1, name: "ADMIN" },
          { id: 2, name: "USER" },
        ],
      });

      expect(selects(wrapper)).toHaveLength(1);
      expect(selects(wrapper)[0].props("options")).toEqual([
        { label: "ADMIN", value: "ADMIN" },
        { label: "USER", value: "USER" },
      ]);
    });

    it("shows no selects without apps or roles", () => {
      const wrapper = createWrapper();

      expect(selects(wrapper)).toHaveLength(0);
    });
  });

  describe("submission", () => {
    const fillAndSubmit = async (wrapper: ReturnType<typeof createWrapper>) => {
      await wrapper.find('input[name="email"]').setValue("new@example.com");
      await selects(wrapper)[0].vm.$emit("update:modelValue", "USER");
      await wrapper.find("form").trigger("submit");
      await vi.waitFor(() => expect(mocks.addInvitation).toHaveBeenCalled());
      await flushPromises();
    };

    const roles = [{ id: 2, name: "USER" }];

    it("sends the invitation and emits submitted", async () => {
      mocks.addInvitation.mockResolvedValue({ id: 1 });
      const wrapper = createWrapper({ roles });

      await fillAndSubmit(wrapper);

      expect(mocks.addInvitation).toHaveBeenCalledWith(
        expect.objectContaining({ email: "new@example.com", role: "USER" }),
        appConfig.apiBaseUrl,
      );
      expect(notify).toHaveBeenCalledWith(
        expect.objectContaining({ type: "success" }),
      );
      expect(wrapper.emitted("submitted")).toHaveLength(1);
    });

    it("shows the API error code", async () => {
      mocks.addInvitation.mockRejectedValue({
        response: { data: { code: "INVITATION_ALREADY_EXISTS_ERROR" } },
      });
      const wrapper = createWrapper({ roles });

      await fillAndSubmit(wrapper);

      expect(wrapper.text()).toContain(
        "Invitation already exists for this email.",
      );
      expect(wrapper.emitted("submitted")).toBeUndefined();
    });
  });
});
