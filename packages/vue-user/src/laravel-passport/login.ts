import type { LoginCredentials, User } from "../types";

const login = async (
  credentials: LoginCredentials,
): Promise<User | undefined> => {
  const data = {
    username: credentials,
    password: "test456",
    withRoles: ["role_user"],
  };

  // eslint-disable-next-line no-console
  await console.log(data);

  return {
    email: "test@example.com",
    id: "uuid",
    timeJoined: 20_250_205,
  };
};

export default login;
