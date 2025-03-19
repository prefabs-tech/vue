import { defineStore } from "pinia";
import { ref } from "vue";

import {
  acceptInvitation as doAcceptInvitation,
  getInvitationByToken as doGetInvitation,
} from "./api/user";
import {
  changePassword as doChangePassword,
  googleSignIn as doGoogleSignIn,
  login as doLogin,
  logout as doLogout,
  requestPasswordReset as doRequestPasswordReset,
  resetPassword as doResetPassword,
  signup as doSignup,
} from "./supertokens";

import type {
  Invitation,
  LoginCredentials,
  PasswordResetPayload,
  PasswordResetRequestPayload,
  UpdatePasswordPayload,
  UserType,
} from "./types";

const USER_KEY = "user";

const useUserStore = defineStore("user", () => {
  const invitation = ref<Invitation>();
  const user = ref<UserType | undefined>(undefined);

  const acceptInvitation = async (
    token: string,
    credential: LoginCredentials,
    apiBaseUrl: string,
  ) => {
    return await doAcceptInvitation(token, credential, apiBaseUrl);
  };

  const changePassword = async (
    payload: UpdatePasswordPayload,
    apiBaseUrl: string,
  ) => {
    const response = await doChangePassword(payload, apiBaseUrl);

    return response;
  };

  const getInvitationByToken = async (
    token: string,
    apiBaseUrl: string,
  ) => {
    return await doGetInvitation(token, apiBaseUrl);
  };

  const getUser = (): UserType => {
    if (user.value) {
      return user.value;
    }

    const data = localStorage.getItem(USER_KEY);

    return data ? JSON.parse(data) : undefined;
  };

  const googleSignIn = async (redirectURL: string) => {
    await doGoogleSignIn(redirectURL);
  };

  const login = async (credentials: LoginCredentials) => {
    const response = await doLogin(credentials);

    return response;
  };

  const logout = async () => {
    await doLogout().then(() => {
      user.value = undefined;

      // FIXME [SS 17 MARCH 2023]
      document.cookie =
        "sFrontToken=; Max-Age=0; path=/; domain=" + location.hostname;
    });

    removeUser();
  };

  const removeUser = () => {
    localStorage.removeItem(USER_KEY);
  };

  const requestPasswordReset = async (
    payload: PasswordResetRequestPayload
  ): Promise<boolean> => {
    return doRequestPasswordReset(payload);
  };

  const resetPassword = async (
    payload: PasswordResetPayload
  ): Promise<boolean> => {
    return doResetPassword(payload);
  };

  const setInvitation = (invitationData: Invitation | undefined) => {
    invitation.value = invitationData;
  };

  const setUser = (userData: UserType | undefined) => {
    user.value = userData;

    localStorage.setItem(USER_KEY, JSON.stringify(userData));
  };

  const signup = async (credentials: LoginCredentials): Promise<void> => {
    const response = await doSignup(credentials);

    setUser(response);
  };

  return {
    acceptInvitation,
    changePassword,
    googleSignIn,
    getInvitationByToken,
    getUser,
    invitation,
    login,
    logout,
    removeUser,
    resetPassword,
    requestPasswordReset,
    setInvitation,
    setUser,
    signup,
    user,
  };
});

export default useUserStore;
