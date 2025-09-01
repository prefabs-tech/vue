import SuperTokens from "supertokens-web-js";
import EmailVerification from "supertokens-web-js/recipe/emailverification";
import Session from "supertokens-web-js/recipe/session";
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";

import changeEmail from "./change-email";
import changePassword from "./change-password";
import { isProfileCompleted, verifySessionRoles } from "./helper";
import login from "./login";
import logout from "./logout";
import requestPasswordReset from "./request-password-reset";
import resendVerificationEmail from "./resend-email-verification";
import resetPassword from "./reset-password";
import signup from "./signup";
import socialSignIn from "./social-signin";
import { SUPERTOKENS_API_BASE_PATH_DEFAULT } from "../constant";
import useUserStore from "../store";
import verifyEmail, { getVerificationStatus } from "./verify-email";

import type { UserType } from "../types";
import type { AppConfig } from "@prefabs.tech/vue3-config";

const initSupertokens = (config: AppConfig) => {
  useUserStore();

  // eslint-disable-next-line
  const recipeList: Array<any> = [
    ThirdPartyEmailPassword.init(),
    Session.init({
      // eslint-disable-next-line
      onHandleEvent: async (context: any) => {
        if (
          (context.action === "UNAUTHORISED" ||
            context.action === "SESSION_EXPIRED") &&
          (await isLoggedIn())
        ) {
          Session.attemptRefreshingSession().catch((error) => {
            return Promise.reject(error);
          });
        }
      },
    }),
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
  try {
    const sessionExists =  await Session.doesSessionExist();
    
    if (!sessionExists) {
      const { setUser } = useUserStore();
      setUser(undefined);
  
      return false;
    }
  
    return true;
  } catch (error) {
    return false;
  }
};

const getUser = async (): Promise<UserType | undefined> => {
  const { getUser } = useUserStore();

  if (await isLoggedIn()) {
    return getUser();
  }
};

export default initSupertokens;

export {
  changeEmail,
  changePassword,
  getUser,
  getVerificationStatus,
  isProfileCompleted,
  isLoggedIn,
  login,
  logout,
  requestPasswordReset,
  resendVerificationEmail,
  resetPassword,
  signup,
  socialSignIn,
  verifyEmail,
  verifySessionRoles,
};
