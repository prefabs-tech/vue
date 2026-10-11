import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";

const http = vi.hoisted(() => ({
  client: vi.fn(),
  delete: vi.fn(),
  get: vi.fn(),
  post: vi.fn(),
  put: vi.fn(),
}));

vi.mock("../../api/axios", async (importOriginal) => ({
  ...(await importOriginal<object>()),
  default: http.client,
}));

import useRolesStore from "../../stores/roles";

const apiBaseUrl = "https://api.test";

describe("#33 roles store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
    http.client.mockReturnValue({
      delete: http.delete,
      get: http.get,
      post: http.post,
      put: http.put,
    });
  });

  it("createRole posts the role", async () => {
    const role = { permissions: ["users:list"], role: "EDITOR" };
    http.post.mockResolvedValue({ data: role });

    await expect(useRolesStore().createRole(role, apiBaseUrl)).resolves.toEqual(
      role,
    );
    expect(http.client).toHaveBeenCalledWith(apiBaseUrl);
    expect(http.post).toHaveBeenCalledWith("/roles", role, {
      withCredentials: true,
    });
  });

  it("createRole throws the API error message", async () => {
    http.post.mockResolvedValue({
      data: { message: "ROLE_ALREADY_EXISTS", status: "ERROR" },
    });

    await expect(
      useRolesStore().createRole(
        { permissions: [], role: "EDITOR" },
        apiBaseUrl,
      ),
    ).rejects.toThrow("ROLE_ALREADY_EXISTS");
  });

  it("deleteRole sends the encoded role", async () => {
    http.delete.mockResolvedValue({ data: { role: "EDITOR" } });

    await useRolesStore().deleteRole("EDITOR", apiBaseUrl);

    expect(http.delete).toHaveBeenCalledWith("/roles", {
      params: { role: '"EDITOR"' },
    });
  });

  it("deleteRole throws the API error message", async () => {
    http.delete.mockResolvedValue({
      data: { message: "ROLE_IN_USE", status: "ERROR" },
    });

    await expect(
      useRolesStore().deleteRole("EDITOR", apiBaseUrl),
    ).rejects.toThrow("ROLE_IN_USE");
  });

  it("getRoles adds an index id to each role", async () => {
    http.get.mockResolvedValue({
      data: {
        roles: [
          { permissions: [], role: "ADMIN" },
          { permissions: [], role: "USER" },
        ],
      },
    });

    await expect(useRolesStore().getRoles(apiBaseUrl)).resolves.toEqual({
      roles: [
        { id: 0, permissions: [], role: "ADMIN" },
        { id: 1, permissions: [], role: "USER" },
      ],
    });
    expect(http.get).toHaveBeenCalledWith("roles");
  });

  it("getPermissions fetches permissions", async () => {
    const response = { data: { permissions: ["users:list"] } };
    http.get.mockResolvedValue(response);

    await expect(useRolesStore().getPermissions(apiBaseUrl)).resolves.toBe(
      response,
    );
    expect(http.get).toHaveBeenCalledWith("permissions");
  });

  it("updateRolePermissions puts the permissions", async () => {
    const data = { permissions: ["users:list"], role: "EDITOR" };
    http.put.mockResolvedValue({ data });

    await expect(
      useRolesStore().updateRolePermissions(data, apiBaseUrl),
    ).resolves.toEqual(data);
    expect(http.put).toHaveBeenCalledWith("/roles/permissions", data, {
      withCredentials: true,
    });
  });
});
