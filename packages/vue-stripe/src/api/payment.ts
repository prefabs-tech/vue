import { client } from "@prefabs.tech/vue3-user";

import type { CheckoutSessionPayload } from "../types/payment";

export const makePayment = async (
  apiBaseUrl: string,
  payload: CheckoutSessionPayload,
) => {
  const response = await client(apiBaseUrl).post(
    "/test/stripe/checkout-session",
    payload,
  );

  if ("error" in response.data) {
    throw new Error(response.data);
  }

  const redirectUrl = response.data.url as string;
  window.location.href = redirectUrl;

  return response.data;
};
