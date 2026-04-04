import { AxiosError } from "axios";

import client from "../api/axios";

const changeEmail = async (
  email: string,
  apiBaseUrl: string,
  path: string,
): Promise<void> => {
  try {
    await client(apiBaseUrl).post(path, {
      newEmail: email,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 409) {
        throw new Error("EMAIL_EXISTS");
      }

      throw new Error("CHANGE_EMAIL_FAILED");
    }

    throw new Error("CHANGE_EMAIL_FAILED");
  }
};

export default changeEmail;
