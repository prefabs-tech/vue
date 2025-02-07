import type { LoginCredentials, User, UserType } from "../types";

const login = async (
  credentials: LoginCredentials,
): Promise<UserType | undefined> => {
  let user: UserType | undefined;
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
    await console.log(data);

    response = {
      email: "test@example.com",
      givenName: "test",
      id: "2",
      lastLoginAt: 5,
      middleNames: "middlename",
      roles: ["admin"],
      signedUpAt: 2,
      surname: "surname",
      timeJoined: 5
    };

    user = response as UserType;

    return user;
  } catch (error) {
    throw new Error("SOMETHING_WRONG");
  }
};

export default login;
