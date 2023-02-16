import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";

import login from "./login";
import logout from "./logout";
import requestPasswordReset from "./request-password-reset";
import resetPassword from "./reset-password";
import signup from "./signup";
import useUserStore from "../store";

import type { User } from "../types";
import type { AppConfig } from "@dzangolab/vue3-config";

const initSupertokens = (config: AppConfig) => {
  useUserStore();

  SuperTokens.init({
    appInfo: {
      apiDomain: config.apiBaseUrl,
      appName: config.appTitle,
    },
    recipeList: [ThirdPartyEmailPassword.init(), Session.init()],
  });
};

const isLoggedIn = async () => {
  return await Session.doesSessionExist();
};

const getUser = async (): Promise<User | undefined> => {
  if (await isLoggedIn()) {
    const accessTokenPayload = await Session.getAccessTokenPayloadSecurely();

    return accessTokenPayload.user;
  }
};

export default initSupertokens;

export {
  isLoggedIn,
  login,
  logout,
  getUser,
  requestPasswordReset,
  resetPassword,
  signup,
};
