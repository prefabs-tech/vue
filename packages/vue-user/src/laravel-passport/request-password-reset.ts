import type { PasswordResetRequestPayload } from "../types";

import client from "../api/axios";

const requestPasswordReset = async (
  credentials: PasswordResetRequestPayload,
  apiBaseUrl: string,
  path: string,
): Promise<boolean> => {
  try {
    return await client(apiBaseUrl).post(path, credentials, {
      withCredentials: true,
    });
  } catch {
    throw new Error("SOMETHING_WRONG");
  }
};

export default requestPasswordReset;
