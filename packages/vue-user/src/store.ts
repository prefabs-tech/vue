import { defineStore } from "pinia";
import { ref } from "vue";

import {
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

const useUserStore = defineStore("user", () => {
  const user = ref<User | undefined>(undefined);

  const login = async (credentials: LoginCredentials) => {
    user.value = await doLogin(credentials);
  };

  const logout = async () => {
    await doLogout().then(() => {
      user.value = undefined;
    });
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

  const signup = async (credentials: LoginCredentials): Promise<void> => {
    user.value = await doSignup(credentials);
  };

  return {
    login,
    logout,
    resetPassword,
    requestPasswordReset,
    signup,
    user,
  };
});

export default useUserStore;
