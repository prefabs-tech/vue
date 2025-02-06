import type { LoginCredentials, User } from "../types";

const signup = async (
  credentials: LoginCredentials,
): Promise<User | undefined> => {
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

  // eslint-disable-next-line no-console
  await console.log(data);

  return {
    email: "test@example.com",
    id: "uuid",
    timeJoined: 20_250_205,
  };
};

export default signup;
