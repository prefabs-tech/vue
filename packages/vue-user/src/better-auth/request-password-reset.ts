import { AxiosError } from "axios";

import client from "../api/axios";

import type { PasswordResetRequestPayload } from "../types";

const requestPasswordReset = async (
  payload: PasswordResetRequestPayload,
  apiBaseUrl: string,
  path: string,
): Promise<boolean> => {
  try {
    const response = await client(apiBaseUrl).post(path, {
      email: payload.email,
      redirectTo: payload.url || "/reset-password",
    });

    return response.status === 200;
  } catch (error) {
    if (error instanceof AxiosError) {
      // Return false for any error, as this is typically a fire-and-forget operation
      return false;
    }

    return false;
  }
};

export default requestPasswordReset;
