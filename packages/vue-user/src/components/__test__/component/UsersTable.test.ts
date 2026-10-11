import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { Table } from "@prefabs.tech/vue3-tanstack-table";
import { flushPromises, shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  disableUser: vi.fn(),
  enableUser: vi.fn(),
}));

vi.mock("../../../auth-provider", () => ({
  auth: vi.fn(() => ({})),
  authConfig: undefined,
  default: vi.fn(),
}));

vi.mock("../../../api/user", async (importOriginal) => ({
  ...(await importOriginal<object>()),
  disableUser: mocks.disableUser,
  enableUser: mocks.enableUser,
}));

import type { UserType } from "../../../types";

import { emitter } from "../../../index";
import useUserStore from "../../../store";
import UsersTable from "../../usersTable/Index.vue";
import appConfig from "../config";

type Column = {
  accessorFn?: (original: UserType) => unknown;
  accessorKey: string;
  header?: string;
};

type MenuItem = {
  display?: (user: UserType) => boolean;
  key: string;
};

const currentUser = { email: "me@example.com", id: "me" } as UserType;

const createWrapper = (props = {}) => {
  useUserStore().$patch({ user: currentUser });

  return shallowMount(UsersTable, {
    global: {
      plugins: [
        [configPlugin, { config: appConfig }],
        [i18nPlugin, { config: appConfig }],
      ],
    },
    props,
  });
};

const table = (wrapper: ReturnType<typeof createWrapper>) =>
  wrapper.findComponent(Table);

const columns = (wrapper: ReturnType<typeof createWrapper>) =>
  table(wrapper).props("columnsData") as Column[];

const menu = (wrapper: ReturnType<typeof createWrapper>) =>
  table(wrapper).props("dataActionMenu") as MenuItem[];

describe("UsersTable", () => {
  const notify = vi.fn();

  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
    vi.clearAllMocks();
    emitter.all.clear();
    emitter.on("notify", notify);
  });

  describe("#58 built-in columns", () => {
    it("provides the default columns in order", () => {
      const wrapper = createWrapper();

      expect(columns(wrapper).map((c) => c.accessorKey)).toEqual([
        "email",
        "name",
        "roles",
        "signedUpAt",
        "disabled",
      ]);
    });

    it("computes the name from its parts", () => {
      const wrapper = createWrapper();
      const accessorFunction = columns(wrapper).find(
        (c) => c.accessorKey === "name",
      )?.accessorFn as NonNullable<Column["accessorFn"]>;

      expect(
        accessorFunction({
          givenName: "Ada",
          middleNames: "King",
          name: null,
          surname: "Lovelace",
        } as UserType),
      ).toBe("Ada King Lovelace");
      expect(accessorFunction({ name: "Ada L." } as UserType)).toBe("Ada L.");
      expect(accessorFunction({ name: " " } as UserType)).toBe("-");
    });

    it("merges column props over the defaults", () => {
      const wrapper = createWrapper({
        columnsData: [{ accessorKey: "email", header: "Address" }],
      });

      expect(columns(wrapper)[0]).toMatchObject({
        accessorKey: "email",
        enableSorting: true,
        header: "Address",
      });
    });
  });

  describe("#59 enable and disable actions", () => {
    it.each([
      ["enableUser", mocks.enableUser, "User enabled successfully."],
      ["disableUser", mocks.disableUser, "User disabled successfully."],
    ])("%s emits fetch:users on success", async (action, api, text) => {
      api.mockResolvedValue({ data: { status: "OK" } });
      const wrapper = createWrapper();

      await table(wrapper).vm.$emit("action:select", {
        action,
        data: { id: "user-1" },
      });
      await flushPromises();

      expect(api).toHaveBeenCalledWith("user-1", appConfig.apiBaseUrl);
      expect(wrapper.emitted("fetch:users")).toHaveLength(1);
      expect(notify).toHaveBeenCalledWith({ text, type: "success" });
    });

    it.each([
      ["enableUser", mocks.enableUser, "Error enabling user."],
      ["disableUser", mocks.disableUser, "Error disabling user."],
    ])(
      "%s reports an error when the API does not return OK",
      async (action, api, text) => {
        api.mockResolvedValue({ data: { status: "ERROR" } });
        const wrapper = createWrapper();

        await table(wrapper).vm.$emit("action:select", {
          action,
          data: { id: "user-1" },
        });
        await flushPromises();

        expect(wrapper.emitted("fetch:users")).toBeUndefined();
        expect(notify).toHaveBeenCalledWith({ text, type: "error" });
      },
    );

    it.each([
      ["enableUser", mocks.enableUser, "Error enabling user."],
      ["disableUser", mocks.disableUser, "Error disabling user."],
    ])(
      "%s reports an error when the request fails",
      async (action, api, text) => {
        api.mockRejectedValue(new Error("network"));
        const wrapper = createWrapper();

        await table(wrapper).vm.$emit("action:select", {
          action,
          data: { id: "user-1" },
        });
        await flushPromises();

        expect(wrapper.emitted("fetch:users")).toBeUndefined();
        expect(notify).toHaveBeenCalledWith({ text, type: "error" });
      },
    );

    it("hides enable and disable for the current user", () => {
      const wrapper = createWrapper();

      for (const item of menu(wrapper)) {
        expect(item.display?.(currentUser)).toBe(false);
        expect(item.display?.({ id: "other" } as UserType)).toBe(true);
      }
    });

    it("emits action:custom for other actions", async () => {
      const wrapper = createWrapper();
      const rowData = { action: "impersonate", data: { id: "user-1" } };

      await table(wrapper).vm.$emit("action:select", rowData);

      expect(wrapper.emitted("action:custom")?.[0]).toEqual([rowData]);
    });
  });

  describe("#60 dataActionMenu", () => {
    it("uses the default menu when not given", () => {
      const wrapper = createWrapper();

      expect(menu(wrapper).map((item) => item.key)).toEqual([
        "enableUser",
        "disableUser",
      ]);
    });

    it("replaces the defaults with an array", () => {
      const wrapper = createWrapper({
        dataActionMenu: [{ key: "impersonate", label: "Impersonate" }],
      });

      expect(menu(wrapper).map((item) => item.key)).toEqual(["impersonate"]);
    });

    it("extends the defaults with a function", () => {
      const wrapper = createWrapper({
        dataActionMenu: (defaults: MenuItem[]) => [
          ...defaults,
          { key: "impersonate", label: "Impersonate" },
        ],
      });

      expect(menu(wrapper).map((item) => item.key)).toEqual([
        "enableUser",
        "disableUser",
        "impersonate",
      ]);
    });
  });
});
