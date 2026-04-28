import type { ChangePasswordPayload } from "../types";

import client from "../api/axios";

const changePassword = async (
  payload: ChangePasswordPayload,
  apiBaseUrl: string,
): Promise<boolean | undefined> => {
  let response;
  let success = false;

  try {
    response = await client(apiBaseUrl).post(
      "/change_password",
      {
        newPassword: payload.newPassword,
        oldPassword: payload.currentPassword,
      },
      {
        withCredentials: true,
      },
    );
  } catch {
    throw new Error("SOMETHING_WRONG");
  }

  if (response.data.status === "OK") {
    success = true;
  } else if (response.data.status === "INVALID_PASSWORD") {
    throw new Error("INVALID_PASSWORD");
  } else {
    throw new Error("SOMETHING_WRONG");
  }

  return success;
};

export default changePassword;
