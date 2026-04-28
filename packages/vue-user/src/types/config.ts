import type {
  IsEmailOptions,
  StrongPasswordOptions,
} from "@prefabs.tech/vue3-form";

import type { RouteOverrides } from "./router";

interface DzangolabVueUserConfig {
  apiRoutes?: {
    changeEmail?: string;
    changePassword?: string;
    getVerificationStatus?: string;
    login?: string;
    logout?: string;
    passwordReset?: string;
    passwordResetRequest?: string;
    refresh?: string;
    sendVerificationEmail?: string;
    signup?: string;
    verifyEmail?: string;
  };
  features?: {
    authProvider?: string;
    confirmPassword?: boolean;
    forgotPasswordResendTimeInSeconds?: number;
    loginType?: "email" | "username";
    signUp?: {
      emailVerification?: boolean;
      termsAndConditions?: {
        display?: boolean;
        route?: string;
        showCheckbox?: boolean;
      };
    };
    updateEmail?: boolean;
  };
  logoutRedirectRoute?: string;
  options?: {
    email?: IsEmailOptions;
    password?: StrongPasswordOptions;
  };
  password?: {
    minLength: number;
  };
  routes?: RouteOverrides;
  socialLogins?: string[];
  supportedRoles?: string[];
}

declare module "@prefabs.tech/vue3-config" {
  export interface AppConfig {
    user?: DzangolabVueUserConfig;
  }
}

export type { DzangolabVueUserConfig };
