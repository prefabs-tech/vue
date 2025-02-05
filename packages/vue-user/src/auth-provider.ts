/* eslint-disable no-console */
import { useConfig } from "@dzangolab/vue3-config";

import * as laravelPassport from "./laravel-passport";
import * as supertokens from "./supertokens";

const config = useConfig();

// Define allowed authentication provider names
type AuthProvider = "laravel-passport" | "supertokens";

// Ensure authProvider is one of the allowed types, defaulting to "laravel-passport"
const authProvider: AuthProvider =
  config?.authProvider &&
  ["laravel-passport", "supertokens"].includes(config.authProvider)
    ? (config?.authProvider as AuthProvider)
    : "laravel-passport";

console.log("config", config?.authProvider);
console.log("authProvider", authProvider);

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

// Export the selected provider
export const auth = providers[authProvider];
