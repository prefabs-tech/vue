import type { PasswordResetPayload } from "../types";

import client from "../api/axios";

const resetPassword = async (
  credentials: PasswordResetPayload,
  apiBaseUrl: string,
  path: string,
): Promise<boolean> => {
  try {
    const response = await client(apiBaseUrl).post(path, credentials, {
      withCredentials: true,
    });

    if (response.data) {
      return true;
    }

    return false;
  } catch {
    throw new Error("SOMETHING_WRONG");
  }
};

export default resetPassword;
