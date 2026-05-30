import { defineStore } from "pinia";
import { ref } from "vue";

import type {
  CheckoutSessionPayload,
  PrefabsTechVueStripeConfig,
} from "../types";

import {
  checkoutSession as doCheckoutSession,
  getStatus as doGetStatus,
} from "../api/payment";

const usePaymentStore = defineStore("roles", () => {
  const config = ref<PrefabsTechVueStripeConfig | undefined>();

  const setConfig = (newConfig: PrefabsTechVueStripeConfig) => {
    config.value = newConfig;
  };

  const checkoutSession = async (
    payload: CheckoutSessionPayload,
    apiBaseUrl: string,
  ) => {
    return await doCheckoutSession(payload, apiBaseUrl, config.value);
  };

  const getStatus = async (apiBaseUrl: string) => {
    return await doGetStatus(apiBaseUrl, config.value);
  };

  return {
    checkoutSession,
    config,
    getStatus,
    setConfig,
  };
});

export default usePaymentStore;
