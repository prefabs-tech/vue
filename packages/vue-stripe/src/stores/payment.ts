import { defineStore } from "pinia";

import type { CheckoutSessionPayload } from "../types";

import {
  checkoutSession as doCheckoutSession,
  getStatus as doGetStatus,
} from "../api/payment";

const usePaymentStore = defineStore("roles", () => {
  const checkoutSession = async (
    payload: CheckoutSessionPayload,
    apiBaseUrl: string,
  ) => {
    return await doCheckoutSession(payload, apiBaseUrl);
  };

  const getStatus = async (apiBaseUrl: string) => {
    return await doGetStatus(apiBaseUrl);
  };

  return {
    checkoutSession,
    getStatus,
  };
});

export default usePaymentStore;
