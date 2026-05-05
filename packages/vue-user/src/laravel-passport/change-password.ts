import { AxiosError } from "axios";

import type { ChangePasswordPayload, UserType } from "../types";

import client from "../api/axios";

const changePassword = async (
  payload: ChangePasswordPayload,
  apiBaseUrl: string,
  path: string,
): Promise<undefined | UserType> => {
  let user: undefined | UserType;
  let response;

  try {
    response = await client(apiBaseUrl).put(path, payload, {
      withCredentials: true,
    });
    if (response.status === 200) {
      user = response.data as UserType;

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

export default changePassword;
