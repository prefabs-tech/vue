import SuperTokens from "supertokens-web-js";
import EmailVerification from "supertokens-web-js/recipe/emailverification";
import Session from "supertokens-web-js/recipe/session";
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";

import googleSignIn from "./google-signin";
import login from "./login";
import logout from "./logout";
import requestPasswordReset from "./request-password-reset";
import resetPassword from "./reset-password";
import signup from "./signup";
import { SUPERTOKENS_API_BASE_PATH_DEFAULT } from "../constant";
import useUserStore from "../store";

import type { User } from "../types";
import type { AppConfig } from "@dzangolab/vue3-config";

const initSupertokens = (config: AppConfig) => {
  useUserStore();

  // eslint-disable-next-line
  const recipeList: Array<any> = [
    ThirdPartyEmailPassword.init(),
    Session.init(),
  ];

  if (config.user?.features?.signUp?.emailVerification) {
    recipeList.push(EmailVerification.init());
  }

  SuperTokens.init({
    appInfo: {
      apiDomain: config.apiBaseUrl,
      appName: config.appTitle,
      apiBasePath: config.authBasePath || SUPERTOKENS_API_BASE_PATH_DEFAULT,
    },
    recipeList: recipeList,
  });
};

const isLoggedIn = async () => {
  return await Session.doesSessionExist();
};

const getUser = async (): Promise<User | undefined> => {
  const { getUser } = useUserStore();

  if (await isLoggedIn()) {
    return getUser();
  }
};

export default initSupertokens;

export {
  googleSignIn,
  isLoggedIn,
  login,
  logout,
  getUser,
  requestPasswordReset,
  resetPassword,
  signup,
};
