import { client } from "@prefabs.tech/vue3-user";

import type { CheckoutSessionPayload } from "../types";

import { API_PATH_CHECKOUT_SESSION, API_PATH_STATUS } from "../constant";
import { useStripeConfig } from "../index";

export const checkoutSession = async (
  payload: CheckoutSessionPayload,
  apiBaseUrl: string,
) => {
  const config = useStripeConfig();
  const path = config?.apiRoutes?.checkoutSession || API_PATH_CHECKOUT_SESSION;

  const response = await client(apiBaseUrl).post(path, payload);

  if ("error" in response.data) {
    throw new Error(response.data);
  }

  const redirectUrl = response.data.url as string;
  window.location.href = redirectUrl;

  return response.data;
};

export const getStatus = async (apiBaseUrl: string) => {
  const config = useStripeConfig();
  const path = config?.apiRoutes?.status || API_PATH_STATUS;

  const response = await client(apiBaseUrl).get(path);

  if ("error" in response.data) {
    throw new Error(response.data);
  }

  return response.data;
};
