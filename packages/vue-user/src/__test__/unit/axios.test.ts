import type { AppConfig } from "@prefabs.tech/vue3-config";
import type { AxiosAdapter, InternalAxiosRequestConfig } from "axios";

import { AxiosError } from "axios";
import { beforeEach, describe, expect, it, vi } from "vitest";

import client, { encodeURIParameter } from "../../api/axios";
import initAuthProvider from "../../auth-provider";

type Reply = { data?: unknown; status: number };

const createClient = (replies: Record<string, Reply[]>) => {
  const requests: string[] = [];

  const adapter: AxiosAdapter = async (config: InternalAxiosRequestConfig) => {
    const url = config.url as string;
    requests.push(url);

    const reply = replies[url]?.shift() ?? { status: 200 };
    const response = {
      config,
      data: reply.data ?? {},
      headers: {},
      status: reply.status,
      statusText: "",
    };

    if (reply.status >= 400) {
      throw new AxiosError(
        "Request failed",
        "ERR_BAD_REQUEST",
        config,
        undefined,
        response,
      );
    }

    return response;
  };

  const instance = client("https://api.test");
  instance.defaults.adapter = adapter;

  return { instance, requests };
};

describe("api client", () => {
  beforeEach(() => {
    initAuthProvider(undefined);
    vi.clearAllMocks();
  });

  describe("#18 token refresh interceptor", () => {
    it("refreshes once on 401 and retries the request", async () => {
      const { instance, requests } = createClient({
        "/api/me": [{ status: 401 }, { data: { id: "user-123" }, status: 200 }],
      });

      const response = await instance.get("/api/me");

      expect(response.data).toEqual({ id: "user-123" });
      expect(requests).toEqual(["/api/me", "/api/login/refresh", "/api/me"]);
    });

    it("does not retry a second time", async () => {
      const { instance, requests } = createClient({
        "/api/me": [{ status: 401 }, { status: 401 }],
      });

      await expect(instance.get("/api/me")).rejects.toMatchObject({
        response: { status: 401 },
      });
      expect(requests).toEqual(["/api/me", "/api/login/refresh", "/api/me"]);
    });

    it("does not refresh when the refresh request itself fails", async () => {
      const { instance, requests } = createClient({
        "/api/login/refresh": [{ status: 401 }],
      });

      await expect(instance.post("/api/login/refresh")).rejects.toMatchObject({
        response: { status: 401 },
      });
      expect(requests).toEqual(["/api/login/refresh"]);
    });

    it("rethrows non-401 errors without refreshing", async () => {
      const { instance, requests } = createClient({
        "/api/me": [{ status: 500 }],
      });

      await expect(instance.get("/api/me")).rejects.toMatchObject({
        response: { status: 500 },
      });
      expect(requests).toEqual(["/api/me"]);
    });

    it("uses the configured refresh route", async () => {
      initAuthProvider({
        user: { apiRoutes: { refresh: "/custom/refresh" } },
      } as AppConfig);
      const { instance, requests } = createClient({
        "/api/me": [{ status: 401 }, { status: 200 }],
      });

      await instance.get("/api/me");

      expect(requests).toEqual(["/api/me", "/custom/refresh", "/api/me"]);
    });
  });

  describe("encodeURIParameter", () => {
    it("JSON-encodes values and skips empty ones", () => {
      expect(encodeURIParameter("ADMIN")).toBe('"ADMIN"');
      expect(encodeURIParameter(undefined)).toBeUndefined();
    });
  });
});
