import { AxiosError } from "axios";

import client from "../api/axios";

import type { PasswordResetPayload } from "../types";

const resetPassword = async (
  payload: PasswordResetPayload,
  apiBaseUrl: string,
  path: string,
): Promise<boolean> => {
  try {
    const response = await client(apiBaseUrl).post(path, {
      token: payload.token,
      newPassword: payload.password,
    });

    return response.status === 200;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        throw new Error("INVALID_TOKEN");
      }

      throw new Error("RESET_PASSWORD_FAILED");
    }

    throw new Error("RESET_PASSWORD_FAILED");
  }
};

export default resetPassword;
