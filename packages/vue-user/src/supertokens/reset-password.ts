import { submitNewPassword } from "supertokens-web-js/recipe/thirdpartyemailpassword";

import type { PasswordResetPayload } from "../types";

const resetPassword = async (
  payload: PasswordResetPayload,
): Promise<boolean> => {
  const response = await submitNewPassword({
    formFields: [
      {
        id: "password",
        value: payload.password as string,
      },
    ],
  });

  if (response.status === "OK") {
    return true;
  } else if (response.status === "RESET_PASSWORD_INVALID_TOKEN_ERROR") {
    throw new Error("INVALID_TOKEN");
  } else {
    throw new Error("SOMETHING_WRONG");
  }
};

export default resetPassword;
