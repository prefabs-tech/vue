import { emailPasswordSignUp } from "supertokens-web-js/recipe/thirdpartyemailpassword";

import type { LoginCredentials, User } from "../types";

const signup = async (
  credentials: LoginCredentials
): Promise<User | undefined> => {
  let user: User | undefined;

  const response = await emailPasswordSignUp({
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
  });

  if (response.status === "OK") {
    user = response.user;
  } else if (response.status === "FIELD_ERROR") {
    throw new Error("409");
  }

  return user;
};

export default signup;
