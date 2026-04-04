import { AxiosError } from "axios";

import client from "../api/axios";

import type { LoginCredentials, UserType } from "../types";

const login = async (
  credentials: LoginCredentials,
  apiBaseUrl: string,
  path: string,
): Promise<UserType | undefined> => {
  try {
    const response = await client(apiBaseUrl).post(path, {
      email: credentials.email,
      password: credentials.password,
    });

    if (response.status === 200) {
      const user = response.data.user as UserType;

      return user;
    }

    return undefined;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        throw new Error("401");
      }

      throw new Error("SOMETHING_WRONG");
    }

    throw new Error("SOMETHING_WRONG");
  }
};

export default login;
