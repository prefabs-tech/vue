import type { RouteMeta, RouteRecordRaw } from "vue-router";

import { Router } from "vue-router";

import type {
  PrefabsTechVueStripeConfig,
  RouteOverride,
  RouteOverrides,
} from "./types";

import CancelledPage from "./views/payment/CancelledPage.vue";
import SuccessPage from "./views/payment/SuccessPage.vue";

const _routes = {
  cancelled: {
    component: CancelledPage,
    meta: {
      authenticated: true,
    } as RouteMeta,
    name: "paymentCancelled",
    path: "/stripe/cancelled",
  } as RouteRecordRaw,
  success: {
    component: SuccessPage,
    meta: {
      authenticated: true,
    } as RouteMeta,
    name: "paymentSuccess",
    path: "/stripe/success",
  } as RouteRecordRaw,
};

const getRoute = (
  defaultRoute: object,
  override?: RouteOverride,
): RouteRecordRaw => {
  return {
    ...defaultRoute,
    ...override,
  } as RouteRecordRaw;
};

const addRoutes = (
  router: Router,
  stripeConfig?: PrefabsTechVueStripeConfig,
) => {
  const routes: RouteOverrides | undefined = stripeConfig?.routes;

  router.addRoute(getRoute(_routes.cancelled, routes?.cancelled));

  router.addRoute(getRoute(_routes.success, routes?.success));
};

const updateRouter = (
  router: Router,
  stripeConfig?: PrefabsTechVueStripeConfig,
) => {
  addRoutes(router, stripeConfig);
};

export default updateRouter;
