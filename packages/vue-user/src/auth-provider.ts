import {
  changeEmail as betterAuthChangeEmail,
  changePassword as betterAuthChangePassword,
  getVerificationStatus as betterAuthGetVerificationStatus,
  isLoggedIn as betterAuthIsLoggedIn,
  isProfileCompleted as betterAuthIsProfileCompleted,
  login as betterAuthLogin,
  logout as betterAuthLogout,
  requestPasswordReset as betterAuthRequestPasswordReset,
  resetPassword as betterAuthResetPassword,
  sendVerificationEmail as betterAuthSendVerificationEmail,
  signup as betterAuthSignup,
  verifyEmail as betterAuthVerifyEmail,
  verifySessionRoles as betterAuthVerifySessionRoles,
} from "./better-auth";
import {
  BETTER_AUTH_PATH_CHANGE_EMAIL,
  BETTER_AUTH_PATH_CHANGE_PASSWORD,
  BETTER_AUTH_PATH_GET_VERIFICATION_STATUS,
  BETTER_AUTH_PATH_IS_LOGGED_IN,
  BETTER_AUTH_PATH_IS_PROFILE_COMPLETED,
  BETTER_AUTH_PATH_LOGIN,
  BETTER_AUTH_PATH_LOGOUT,
  BETTER_AUTH_PATH_PASSWORD_RESET,
  BETTER_AUTH_PATH_PASSWORD_RESET_REQUEST,
  BETTER_AUTH_PATH_SEND_VERIFICATION_EMAIL,
  BETTER_AUTH_PATH_SIGNUP,
  BETTER_AUTH_PATH_VERIFY_EMAIL,
  API_PATH_CHANGE_EMAIL,
  API_PATH_CHANGE_PASSWORD,
  API_PATH_GET_VERIFICATION_STATUS,
  API_PATH_LOGIN,
  API_PATH_LOGOUT,
  API_PATH_PASSWORD_RESET,
  API_PATH_PASSWORD_RESET_REQUEST,
  API_PATH_SEND_VERIFICATION_EMAIL,
  API_PATH_SIGNUP,
  API_PATH_VERIFY_EMAIL,
} from "./constant";
import * as laravelPassport from "./laravel-passport";
import * as supertokens from "./supertokens";
import {
  ChangePasswordPayload,
  LoginCredentials,
  PasswordResetPayload,
  PasswordResetRequestPayload,
} from "./types";

import type { AppConfig } from "@prefabs.tech/vue3-config";

let authConfig: AppConfig | undefined;

const initAuthProvider = (config?: AppConfig) => {
  authConfig = config;
};

const getAuthProvider = () => {
  if (
    authConfig?.user?.features?.authProvider &&
    ["better-auth", "laravel-passport", "supertokens"].includes(
      authConfig.user.features.authProvider,
    )
  ) {
    return authConfig.user.features.authProvider as
      | "better-auth"
      | "laravel-passport"
      | "supertokens";
  }

  return "supertokens"; // Default to supertokens
};

const providers = {
  "better-auth": {
    doChangeEmail: (email: string) => {
      const path =
        authConfig?.user?.apiRoutes?.changeEmail ||
        BETTER_AUTH_PATH_CHANGE_EMAIL;

      return betterAuthChangeEmail(email, authConfig?.apiBaseUrl || "", path);
    },
    doChangePassword: (payload: ChangePasswordPayload) => {
      const path =
        authConfig?.user?.apiRoutes?.changePassword ||
        BETTER_AUTH_PATH_CHANGE_PASSWORD;

      return betterAuthChangePassword(
        payload,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doGetVerificationStatus: () => {
      const path =
        authConfig?.user?.apiRoutes?.getVerificationStatus ||
        BETTER_AUTH_PATH_GET_VERIFICATION_STATUS;

      return betterAuthGetVerificationStatus(
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doLogin: (credentials: LoginCredentials) => {
      const path = authConfig?.user?.apiRoutes?.login || BETTER_AUTH_PATH_LOGIN;

      return betterAuthLogin(credentials, authConfig?.apiBaseUrl || "", path);
    },
    doLogout: () => {
      const path =
        authConfig?.user?.apiRoutes?.logout || BETTER_AUTH_PATH_LOGOUT;

      return betterAuthLogout(authConfig?.apiBaseUrl || "", path);
    },
    doRequestPasswordReset: (credentials: PasswordResetRequestPayload) => {
      const path =
        authConfig?.user?.apiRoutes?.passwordResetRequest ||
        BETTER_AUTH_PATH_PASSWORD_RESET_REQUEST;

      return betterAuthRequestPasswordReset(
        credentials,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doResetPassword: (credentials: PasswordResetPayload) => {
      const path =
        authConfig?.user?.apiRoutes?.passwordResetRequest ||
        BETTER_AUTH_PATH_PASSWORD_RESET;

      return betterAuthResetPassword(
        credentials,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doSendVerificationEmail: () => {
      const path =
        authConfig?.user?.apiRoutes?.sendVerificationEmail ||
        BETTER_AUTH_PATH_SEND_VERIFICATION_EMAIL;

      return betterAuthSendVerificationEmail(
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doSignup: (credentials: LoginCredentials) => {
      const path =
        authConfig?.user?.apiRoutes?.signup || BETTER_AUTH_PATH_SIGNUP;

      return betterAuthSignup(credentials, authConfig?.apiBaseUrl || "", path);
    },
    doVerifyEmail: (token: string) => {
      const path =
        authConfig?.user?.apiRoutes?.verifyEmail ||
        BETTER_AUTH_PATH_VERIFY_EMAIL;

      return betterAuthVerifyEmail(token, authConfig?.apiBaseUrl || "", path);
    },
    isLoggedIn: () => {
      const path =
        authConfig?.user?.apiRoutes?.isLoggedIn ||
        BETTER_AUTH_PATH_IS_LOGGED_IN;

      return betterAuthIsLoggedIn(authConfig?.apiBaseUrl || "", path);
    },
    isProfileCompleted: () => {
      const path =
        authConfig?.user?.apiRoutes?.isProfileCompleted ||
        BETTER_AUTH_PATH_IS_PROFILE_COMPLETED;

      return betterAuthIsProfileCompleted(authConfig?.apiBaseUrl || "", path);
    },
    verifySessionRoles: (claims: string[]) => {
      return betterAuthVerifySessionRoles(claims);
    },
  },
  "laravel-passport": {
    doChangeEmail: (email: string) => {
      const path =
        authConfig?.user?.apiRoutes?.changeEmail || API_PATH_CHANGE_EMAIL;

      return laravelPassport.changeEmail(
        email,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doChangePassword: (payload: ChangePasswordPayload) => {
      const path =
        authConfig?.user?.apiRoutes?.changePassword || API_PATH_CHANGE_PASSWORD;

      return laravelPassport.changePassword(
        payload,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doGetVerificationStatus: () => {
      const path =
        authConfig?.user?.apiRoutes?.getVerificationStatus ||
        API_PATH_GET_VERIFICATION_STATUS;

      return laravelPassport.getVerificationStatus(
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doLogin: (credentials: LoginCredentials) => {
      const path = authConfig?.user?.apiRoutes?.login || API_PATH_LOGIN;

      return laravelPassport.login(
        credentials,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doLogout: () => {
      const path = authConfig?.user?.apiRoutes?.logout || API_PATH_LOGOUT;

      return laravelPassport.logout(authConfig?.apiBaseUrl || "", path);
    },
    doRequestPasswordReset: (credentials: PasswordResetRequestPayload) => {
      const path =
        authConfig?.user?.apiRoutes?.passwordResetRequest ||
        API_PATH_PASSWORD_RESET_REQUEST;

      return laravelPassport.requestPasswordReset(
        credentials,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doResetPassword: (credentials: PasswordResetPayload) => {
      const path =
        authConfig?.user?.apiRoutes?.passwordResetRequest ||
        API_PATH_PASSWORD_RESET;

      return laravelPassport.resetPassword(
        credentials,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doSendVerificationEmail: () => {
      const path =
        authConfig?.user?.apiRoutes?.sendVerificationEmail ||
        API_PATH_SEND_VERIFICATION_EMAIL;

      return laravelPassport.sendVerificationEmail(
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doSignup: (credentials: LoginCredentials) => {
      const path = authConfig?.user?.apiRoutes?.signup || API_PATH_SIGNUP;

      return laravelPassport.signup(
        credentials,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doVerifyEmail: (token: string) => {
      const path =
        authConfig?.user?.apiRoutes?.verifyEmail || API_PATH_VERIFY_EMAIL;

      return laravelPassport.verifyEmail(
        token,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    verifySessionRoles: laravelPassport.verifySessionRoles,
  },
  supertokens: {
    doChangeEmail: supertokens.changeEmail,
    doChangePassword: supertokens.changePassword,
    doGetVerificationStatus: supertokens.getVerificationStatus,
    doLogin: supertokens.login,
    doLogout: supertokens.logout,
    doRequestPasswordReset: supertokens.requestPasswordReset,
    doResetPassword: supertokens.resetPassword,
    doSendVerificationEmail: supertokens.resendVerificationEmail,
    doSignup: supertokens.signup,
    doSocialSignIn: supertokens.socialSignIn,
    doVerifyEmail: supertokens.verifyEmail,
    isLoggedIn: supertokens.isLoggedIn,
    isProfileCompleted: supertokens.isProfileCompleted,
    verifySessionRoles: supertokens.verifySessionRoles,
  },
};

// Export the selected provider dynamically
const auth = () => providers[getAuthProvider()];

export default initAuthProvider;

export { auth, authConfig };
