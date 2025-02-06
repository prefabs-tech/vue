/* eslint-disable no-console */
import * as laravelPassport from "./laravel-passport";
import * as supertokens from "./supertokens";

import type { AppConfig } from "@dzangolab/vue3-config";

let authConfig: AppConfig | undefined;

export const initAuthProvider = (config?: AppConfig) => {
  authConfig = config;
  console.log("from inside init", authConfig);
};

const getAuthProvider = () => {
  if (
    authConfig?.authProvider &&
    ["laravel-passport", "supertokens"].includes(authConfig.authProvider)
  ) {
    return authConfig.authProvider as "laravel-passport" | "supertokens";
  }

  return "supertokens"; // Default to supertokens
};

console.log("authConfig", authConfig?.authProvider);
console.log("Selected AuthProvider", getAuthProvider());

const providers = {
  "laravel-passport": {
    login: laravelPassport.login,
  },
  supertokens: {
    login: supertokens.login,
    logout: supertokens.logout,
    signup: supertokens.signup,
  },
};

// Export the selected provider dynamically
export const auth = () => providers[getAuthProvider()];
