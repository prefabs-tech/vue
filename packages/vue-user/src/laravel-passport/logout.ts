import { AxiosError } from "axios";

import client from "../api/axios";

const logout = async (apiBaseUrl: string, path: string) => {
  try {
    await client(apiBaseUrl).post(path, {
      withCredentials: true,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      const error_ =
        error.response?.status === 401
          ? new Error("401")
          : new Error("SOMETHING_WRONG");

      throw error_;
    } else {
      throw new Error("SOMETHING_WRONG");
    }
  }
};

export default logout;
