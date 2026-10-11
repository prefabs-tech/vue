import type { VNode } from "vue";

import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { Table } from "@prefabs.tech/vue3-tanstack-table";
import { shallowMount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";

import type { Invitation } from "../../../types";

import InvitationTable from "../../invitation/InvitationTable.vue";
import appConfig from "../config";

type Column = {
  accessorFn?: (original: Invitation) => unknown;
  accessorKey: string;
  cell?: (context: { row: { original: Invitation } }) => unknown;
  filterFn?: (
    row: { original: Invitation },
    columnId: string,
    filterValue: string[],
  ) => boolean;
  header?: string;
};

const DAY = 24 * 60 * 60 * 1000;

const invitation = (overrides: Partial<Invitation> = {}): Invitation => ({
  acceptedAt: null,
  appId: 1,
  createdAt: Date.now(),
  email: "invitee@example.com",
  expiresAt: Date.now() + DAY,
  id: 1,
  invitedById: "user-123",
  payload: {},
  revokedAt: null,
  role: "USER",
  updatedAt: Date.now(),
  ...overrides,
});

const createWrapper = (props = {}) =>
  shallowMount(InvitationTable, {
    global: {
      plugins: [
        createPinia(),
        [configPlugin, { config: appConfig }],
        [i18nPlugin, { config: appConfig }],
      ],
    },
    props,
  });

const columns = (wrapper: ReturnType<typeof createWrapper>) =>
  wrapper.findComponent(Table).props("columnsData") as Column[];

const column = (wrapper: ReturnType<typeof createWrapper>, key: string) =>
  columns(wrapper).find((c) => c.accessorKey === key) as Column;

describe("InvitationTable", () => {
  describe("#56 built-in columns", () => {
    it("provides the default columns in order", () => {
      const wrapper = createWrapper();

      expect(columns(wrapper).map((c) => c.accessorKey)).toEqual([
        "email",
        "appId",
        "role",
        "invitedBy",
        "expiresAt",
        "status",
      ]);
    });

    it("merges column props over the defaults and appends new columns", () => {
      const wrapper = createWrapper({
        columnsData: [
          { accessorKey: "email", header: "Address" },
          { accessorKey: "note", header: "Note" },
        ],
      });

      expect(column(wrapper, "email")).toMatchObject({
        enableSorting: true,
        header: "Address",
      });
      expect(columns(wrapper).at(-1)).toEqual({
        accessorKey: "note",
        header: "Note",
      });
    });

    it("shows the app name for an invitation", () => {
      const wrapper = createWrapper({
        apps: [{ id: 1, name: "Website", origin: "", supportedRoles: [] }],
      });

      const cell = column(wrapper, "appId").cell as Column["cell"];

      expect(cell?.({ row: { original: invitation() } })).toBe("Website");
      expect(cell?.({ row: { original: invitation({ appId: 9 }) } })).toBe("-");
    });

    it("builds the inviter's full name", () => {
      const wrapper = createWrapper();
      const accessorFunction = column(wrapper, "invitedBy").accessorFn;

      expect(
        accessorFunction?.(
          invitation({
            invitedBy: {
              givenName: "Ada",
              middleNames: "King",
              surname: "Lovelace",
            } as Invitation["invitedBy"],
          }),
        ),
      ).toBe("Ada King Lovelace");
      expect(accessorFunction?.(invitation())).toBe("-");
    });
  });

  describe("#57 status column", () => {
    const statusOf = (
      wrapper: ReturnType<typeof createWrapper>,
      original: Invitation,
    ) => {
      const cell = column(wrapper, "status").cell as Column["cell"];

      return (cell?.({ row: { original } }) as VNode).props?.label;
    };

    it.each([
      ["Accepted", { acceptedAt: Date.now() }],
      ["Revoked", { revokedAt: Date.now() }],
      ["Expired", { expiresAt: Date.now() - DAY }],
      ["Pending", {}],
    ])("labels the invitation %s", (label, overrides) => {
      const wrapper = createWrapper();

      expect(statusOf(wrapper, invitation(overrides))).toBe(label);
    });

    it("prefers accepted over revoked and expired", () => {
      const wrapper = createWrapper();

      expect(
        statusOf(
          wrapper,
          invitation({
            acceptedAt: Date.now(),
            expiresAt: Date.now() - DAY,
            revokedAt: Date.now(),
          }),
        ),
      ).toBe("Accepted");
    });

    it("filters rows by computed status", () => {
      const wrapper = createWrapper();
      const filterFunction = column(wrapper, "status").filterFn as NonNullable<
        Column["filterFn"]
      >;

      const expired = { original: invitation({ expiresAt: Date.now() - DAY }) };

      expect(filterFunction(expired, "status", ["expired"])).toBe(true);
      expect(filterFunction(expired, "status", ["pending"])).toBe(false);
      expect(filterFunction(expired, "status", [])).toBe(true);
    });
  });

  describe("row actions", () => {
    it.each(["delete", "resend", "revoke"])(
      "emits action:%s",
      async (action) => {
        const wrapper = createWrapper();
        const data = invitation();

        await wrapper.findComponent(Table).vm.$emit("action:select", {
          action,
          data,
        });

        expect(wrapper.emitted(`action:${action}`)?.[0]).toEqual([data]);
      },
    );
  });
});
