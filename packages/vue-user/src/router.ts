import { storeToRefs } from "pinia";
import { Router } from "vue-router";

import AuthSocialLoginCallback from "./components/AuthSocialLoginCallback.vue";
import useUserStore from "./store";
import AcceptInvitation from "./views/AcceptInvitation.vue";
import ChangePassword from "./views/ChangePassword.vue";
import VerifyEmailReminder from "./views/EmailVerificationReminder.vue";
import Login from "./views/Login.vue";
import PasswordReset from "./views/PasswordReset.vue";
import PasswordResetRequest from "./views/PasswordResetRequest.vue";
import Profile from "./views/Profile.vue";
import Roles from "./views/Roles/Index.vue";
import Signup from "./views/Signup.vue";
import SignupFirstUser from "./views/SignupFirstUser.vue";
import VerifyEmail from "./views/VerifyEmail.vue";

import type {
  DzangolabVueUserConfig,
  RouteOverride,
  RouteOverrides,
} from "./types";
import type { RouteMeta, RouteRecordRaw } from "vue-router";

const _routes = {
  acceptInvitation: {
    component: AcceptInvitation,
    name: "acceptInvitation",
    path: "/signup/token/:token?",
  } as RouteRecordRaw,
  changePassword: {
    meta: {
      authenticated: true,
    } as RouteMeta,
    component: ChangePassword,
    name: "changePassword",
    path: "/change-password",
  },
  facebook: {
    component: AuthSocialLoginCallback,
    name: "authFacebookCallback",
    path: "/auth/callback/facebook",
  },
  google: {
    component: AuthSocialLoginCallback,
    name: "authGoogleCallback",
    path: "/auth/callback/google",
  },
  login: {
    component: Login,
    name: "login",
    path: "/login",
  } as RouteRecordRaw,
  profile: {
    meta: {
      authenticated: true,
    } as RouteMeta,
    component: Profile,
    name: "profile",
    path: "/profile",
  } as RouteRecordRaw,
  roles: {
    meta: {
      authenticated: true,
    } as RouteMeta,
    component: Roles,
    name: "roles",
    path: "/roles",
  } as RouteRecordRaw,
  signup: {
    component: Signup,
    name: "signup",
    path: "/signup",
  } as RouteRecordRaw,
  signupFirstUser: {
    component: SignupFirstUser,
    name: "signupFirstUser",
    path: "/signup-first-user",
  } as RouteRecordRaw,
  passwordReset: {
    component: PasswordReset,
    name: "resetPassword",
    path: "/reset-password/:token?",
  } as RouteRecordRaw,
  passwordResetRequest: {
    component: PasswordResetRequest,
    name: "resetPasswordRequest",
    path: "/reset-password-request",
  } as RouteRecordRaw,
  verifyEmail: {
    meta: {
      authenticated: true,
    } as RouteMeta,
    component: VerifyEmail,
    name: "verifyEmail",
    path: "/verify-email",
  },
  verifyEmailReminder: {
    meta: {
      authenticated: true,
    } as RouteMeta,
    component: VerifyEmailReminder,
    name: "verifyEmailReminder",
    path: "/verify-email-reminder",
  },
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

const addRoutes = (router: Router, userConfig?: DzangolabVueUserConfig) => {
  const routes: RouteOverrides | undefined = userConfig?.routes;

  router.addRoute(getRoute(_routes.facebook, routes?.facebook));

  router.addRoute(getRoute(_routes.google, routes?.google));

  router.addRoute(getRoute(_routes.login, routes?.login));

  if (!routes?.signup?.disabled) {
    router.addRoute(getRoute(_routes.signup, routes?.signup));
  }

  if (routes?.signup?.disabled && !routes?.signupFirstUser?.disabled) {
    router.addRoute(getRoute(_routes.signupFirstUser, routes?.signupFirstUser));
  }

  router.addRoute(getRoute(_routes.passwordReset, routes?.passwordReset));

  router.addRoute(
    getRoute(_routes.passwordResetRequest, routes?.passwordResetRequest),
  );

  router.addRoute(getRoute(_routes.profile, routes?.profile));

  router.addRoute(getRoute(_routes.roles, routes?.roles));

  router.addRoute(
    getRoute(
      _routes.changePassword,
      routes?.changePassword,
    ),
  );

  router.addRoute(getRoute(_routes.acceptInvitation, routes?.acceptInvitation));

  if (userConfig?.features?.signUp?.emailVerification) {
    router.addRoute(getRoute(_routes.verifyEmail, routes?.verifyEmail));

    router.addRoute(
      getRoute(_routes.verifyEmailReminder, routes?.verifyEmailReminder),
    );
  }
};

const redirectRoutes = async (router: Router) => {
  router.beforeEach(async (to) => {
    const userStore = useUserStore();
    const { isLoggedIn } = userStore;
    const { user } = storeToRefs(userStore);

    const routesToRedirect = [
      "acceptInvitation",
      "login",
      "signup",
      "signupFirstUser",
      "resetPassword",
      "resetPasswordRequest",
    ];
    const name = to.name as string;

    if (user.value && await isLoggedIn() && routesToRedirect.includes(name)) {
      router.push({ name: "profile" });
    }
  });
};

const addAuthenticationGuard = (
  router: Router,
  userConfig?: DzangolabVueUserConfig,
) => {
  router.beforeEach(async (to) => {
    const meta = to.meta as RouteMeta;

    const userStore = useUserStore();

    const EmailVerificationEnabled =
      !!userConfig?.features?.signUp?.emailVerification;

    const name = to.name as string;
    const routesToRedirect = ["verifyEmail", "verifyEmailReminder"];
    const { isLoggedIn } = userStore;
    const { user } = storeToRefs(userStore);
    const { getUser, getVerificationStatus } = userStore;

    if (!user.value) {
      user.value = await getUser();
    }

    const isSocialLoggedIn = user.value?.thirdParty && userConfig?.socialLogins?.includes(user.value?.thirdParty?.id);

    if (meta.authenticated && (!user.value || !await isLoggedIn())) {
      sessionStorage.setItem('redirectAfterLogin', to.fullPath);
      router.push({ name: "login" }); // using next inside async function is not allowed
    }

    if (isSocialLoggedIn && name === "changePassword") {
      router.push({ name: "home" });
    }

    if (meta.authenticated && EmailVerificationEnabled && user.value) {
      const isEmailVerified = await getVerificationStatus();

      if (
        !isEmailVerified &&
        ![...routesToRedirect, "profile"].includes(name)
      ) {
        router.push({ name: "verifyEmailReminder" });

        return;
      } else if (isEmailVerified && routesToRedirect[1] === name) {
        router.push({ name: "home" });
      }
    }

    const isProfileCompleted = !!user.value?.isProfileCompleted;
    const profileCompletionEnabled = user.value?.isProfileCompleted !== undefined;

    if (
      meta.authenticated &&
      profileCompletionEnabled &&
      !isProfileCompleted &&
      ![...routesToRedirect, "profile"].includes(name)
    ) {
      router.push({ name: "profile" });
    }
  });
};

const updateRouter = (router: Router, userConfig?: DzangolabVueUserConfig) => {
  addRoutes(router, userConfig);

  addAuthenticationGuard(router, userConfig);

  redirectRoutes(router);
};

export default updateRouter;
