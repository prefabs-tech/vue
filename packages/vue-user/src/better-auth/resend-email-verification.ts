import { AxiosError } from "axios";

import client from "../api/axios";

const sendVerificationEmail = async (
  apiBaseUrl: string,
  path: string,
): Promise<void> => {
  try {
    await client(apiBaseUrl).post(path, {});
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error("SEND_VERIFICATION_FAILED");
    }

    throw new Error("SEND_VERIFICATION_FAILED");
  }
};

export default sendVerificationEmail;
