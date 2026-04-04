import { AxiosError } from "axios";

import client from "../api/axios";

import type { LoginCredentials, UserType } from "../types";

const signup = async (
  credentials: LoginCredentials,
  apiBaseUrl: string,
  path: string,
): Promise<UserType> => {
  try {
    const response = await client(apiBaseUrl).post(path, {
      email: credentials.email,
      password: credentials.password,
      name: credentials.email,
    });

    if (response.status === 200 || response.status === 201) {
      const user = response.data.user as UserType;

      return user;
    }

    throw new Error("SOMETHING_WRONG");
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 409) {
        throw new Error("EMAIL_EXISTS");
      }

      if (error.response?.status === 401) {
        throw new Error("INVALID_CREDENTIALS");
      }

      throw new Error("SOMETHING_WRONG");
    }

    throw new Error("SOMETHING_WRONG");
  }
};

export default signup;
