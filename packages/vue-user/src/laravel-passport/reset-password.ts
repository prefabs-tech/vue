import client from "../api/axios";

import type { PasswordResetPayload } from "../types";

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

    return  false;
  } catch (error) {
    throw new Error("SOMETHING_WRONG");
  }
};

export default resetPassword;
