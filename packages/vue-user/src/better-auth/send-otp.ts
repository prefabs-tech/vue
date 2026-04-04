import client from "../api/axios";

import type { LoginCredentials } from "../types";

const sendOtp = async (
  credentials: LoginCredentials,
  apiBaseUrl: string,
  path: string,
): Promise<boolean> => {
  try {
    const response = await client(apiBaseUrl).post(path, {
      email: credentials.email,
    });

    return response.status === 200;
  } catch {
    return false;
  }
};

export default sendOtp;
