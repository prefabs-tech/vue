import type { AxiosInstance } from "axios";

import { create } from "axios";

import type { PrefabsTechVueStripeConfig } from "../types";

export const getAxiosClient = async (
  apiBaseUrl: string,
  config?: PrefabsTechVueStripeConfig,
): Promise<AxiosInstance> => {
  if (config?.axiosClient) {
    return config.axiosClient(apiBaseUrl);
  }

  try {
    const { client } = await import("@prefabs.tech/vue3-user");
    return client(apiBaseUrl);
  } catch {
    return create({
      baseURL: apiBaseUrl,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  }
};

export { checkoutSession, getStatus } from "./payment";
