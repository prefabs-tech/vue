import { emailPasswordSignUp } from "supertokens-web-js/recipe/thirdpartyemailpassword";

import type { LoginCredentials, UserType } from "../types";

const signup = async (
  credentials: LoginCredentials,
): Promise<undefined | UserType> => {
  let user: undefined | UserType;
  let response;

  const data = {
    formFields: [
      {
        id: "email",
        value: credentials.email as string,
      },
      {
        id: "password",
        value: credentials.password as string,
      },
    ],
  };

  try {
    response = await emailPasswordSignUp(data);
    // eslint-disable-next-line
  } catch (error) {
    throw new Error("SOMETHING_WRONG");
  }

  if (response.status === "OK") {
    user = response.user as UserType;

    return user;
  } else if (response.status === "FIELD_ERROR") {
    throw new Error("409");
  } else {
    throw new Error("SOMETHING_WRONG");
  }
};

export default signup;
