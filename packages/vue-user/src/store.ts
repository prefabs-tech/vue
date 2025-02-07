/* eslint-disable no-console */
import { defineStore } from "pinia";
import { ref } from "vue";

import { auth } from "./auth-provider";
// import { login as doLogin } from "./laravel-passport";
// import {
//   googleSignIn as doGoogleSignIn,
//   logout as doLogout,
//   requestPasswordReset as doRequestPasswordReset,
//   resetPassword as doResetPassword,
//   signup as doSignup,
// } from "./supertokens";

import type {
  LoginCredentials,
  PasswordResetPayload,
  PasswordResetRequestPayload,
  User,
} from "./types";

const USER_KEY = "user";

const useUserStore = defineStore("user", () => {
  const user = ref<User | undefined>(undefined);

  const getUser = (): User => {
    if (user.value) {
      return user.value;
    }

    const data = localStorage.getItem(USER_KEY);

    return data ? JSON.parse(data) : undefined;
  };

  const googleSignIn = async (redirectURL: string) => {
    const selectedAuthProvider = auth();
    if ("doGoogleSignIn" in selectedAuthProvider) {
      await selectedAuthProvider.doGoogleSignIn(redirectURL);
    }
    throw new Error(
      "Google signin is not supported for the selected auth provider",
    );
  };

  const login = async (credentials: LoginCredentials) => {
    const selectedAuthProvider = auth();

    const response = await selectedAuthProvider.doLogin(credentials);

    setUser(response);
  };

  const logout = async () => {
    const selectedAuthProvider = auth();
    console.log("from inside logout of store", selectedAuthProvider);
    await selectedAuthProvider.doLogout().then(() => {
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
    const selectedAuthProvider = auth();
    if ("doRequestPasswordReset" in selectedAuthProvider) {
      return selectedAuthProvider.doRequestPasswordReset(payload);
    }
    throw new Error(
      "Request password reset is not supported for the selected auth provider",
    );
  };

  const resetPassword = async (
    payload: PasswordResetPayload,
  ): Promise<boolean> => {
    const selectedAuthProvider = auth();
    if ("doResetPassword" in selectedAuthProvider) {
      return selectedAuthProvider.doResetPassword(payload);
    }
    throw new Error(
      "Reset password is not supported for the selected auth provider",
    );
  };

  const setUser = (userData: User | undefined) => {
    user.value = userData;

    localStorage.setItem(USER_KEY, JSON.stringify(userData));
  };

  const signup = async (credentials: LoginCredentials): Promise<void> => {
    const selectedAuthProvider = auth();
    if ("doSignup" in selectedAuthProvider) {
      const response = await selectedAuthProvider.doSignup(credentials);

      setUser(response);
    }
    throw new Error("Signup is not supported for the selected auth provider");
  };

  return {
    googleSignIn,
    getUser,
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
