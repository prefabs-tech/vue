/* eslint-disable no-console */
import client from "../api/axios";

import type { LoginCredentials, UserType } from "../types";

const login = async (
  credentials: LoginCredentials,
  apiBaseUrl: string
): Promise<UserType | undefined> => {
  let user: UserType | undefined;
  let response;

  console.log("login.ts", credentials);

  try {
    response = await client(apiBaseUrl).post("/api/login", credentials, {
      withCredentials: true,
    });
    console.log("response", response);
    // eslint-disable-next-line
  } catch (error) {
    throw new Error("SOMETHING_WRONG");
  }

  if (response.data.status === "OK") {
    user = response.data.user as UserType;

    return user;
  } else if (response.data.status === "Unauthorized") {
    throw new Error("401");
  } else {
    throw new Error("SOMETHING_WRONG");
  }
};

export default login;
