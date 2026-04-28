import { AxiosError } from "axios";

import type { LoginCredentials, UserType } from "../types";

import client from "../api/axios";

const signup = async (
  credentials: LoginCredentials,
  apiBaseUrl: string,
  path: string,
): Promise<undefined | UserType> => {
  let user: undefined | UserType;
  let response;

  try {
    response = await client(apiBaseUrl).post(path, credentials, {
      withCredentials: true,
    });
    if (response.status === 201) {
      user = response.data.user as UserType;

      return user;
    }
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

export default signup;
