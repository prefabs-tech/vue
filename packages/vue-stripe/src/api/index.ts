import type { AxiosInstance } from "axios";

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
    throw new Error("Stripe package requires an axios instance.");
  }
};

export { checkoutSession, getStatus } from "./payment";
