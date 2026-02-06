import client from "../api/axios";

import type { ChangePasswordPayload } from "../types";

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
        oldPassword: payload.currentPassword,
        newPassword: payload.newPassword,
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
