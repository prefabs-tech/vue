import { AxiosError } from "axios";

import client from "../api/axios";

import type { ChangePasswordPayload } from "../types";

const changePassword = async (
  payload: ChangePasswordPayload,
  apiBaseUrl: string,
  path: string,
): Promise<void> => {
  try {
    await client(apiBaseUrl).post(path, {
      currentPassword: payload.currentPassword,
      newPassword: payload.newPassword,
      revokeOtherSessions: true,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        throw new Error("INVALID_CREDENTIALS");
      }

      throw new Error("CHANGE_PASSWORD_FAILED");
    }

    throw new Error("CHANGE_PASSWORD_FAILED");
  }
};

export default changePassword;
