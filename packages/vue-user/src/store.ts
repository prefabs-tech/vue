import { defineStore } from "pinia";
import { ref } from "vue";

import {
  getVerificationStatus,
  googleSignIn as doGoogleSignIn,
  login as doLogin,
  logout as doLogout,
  requestPasswordReset as doRequestPasswordReset,
  resetPassword as doResetPassword,
  signup as doSignup,
} from "./supertokens";

import type {
  LoginCredentials,
  PasswordResetPayload,
  PasswordResetRequestPayload,
  User,
} from "./types";

const USER_KEY = "user";

const useUserStore = defineStore("user", () => {
  const isEmailVerified = ref<boolean>(false);
  const user = ref<User | undefined>(undefined);

  const getUser = (): User => {
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

    setEmailVerificationStatus();
    setUser(response);
  };

  const logout = async () => {
    await doLogout().then(() => {
      user.value = undefined;

      // FIXME [SS 17 MARCH 2023]
      document.cookie =
        "sFrontToken=; Max-Age=0; path=/; domain=" + location.hostname;
    });

    localStorage.removeItem(USER_KEY);
  };

  const requestPasswordReset = async (
    payload: PasswordResetRequestPayload,
  ): Promise<boolean> => {
    return doRequestPasswordReset(payload);
  };

  const resetPassword = async (
    payload: PasswordResetPayload,
  ): Promise<boolean> => {
    return doResetPassword(payload);
  };

  const setEmailVerificationStatus = async () => {
    isEmailVerified.value = await getVerificationStatus();
  };

  const setUser = (userData: User | undefined) => {
    user.value = userData;

    localStorage.setItem(USER_KEY, JSON.stringify(userData));
  };

  const signup = async (credentials: LoginCredentials): Promise<void> => {
    const response = await doSignup(credentials);

    setEmailVerificationStatus();
    setUser(response);
  };

  return {
    googleSignIn,
    getUser,
    isEmailVerified,
    login,
    logout,
    resetPassword,
    requestPasswordReset,
    setUser,
    signup,
    user,
  };
});

export default useUserStore;
