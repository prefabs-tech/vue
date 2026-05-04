import type { EmailPasswordUserType } from "supertokens-web-js/recipe/thirdpartyemailpassword";

interface AuthTokens {
  accessToken: null | string;
  expiresIn?: null | number;
  refreshToken?: null | string;
}

interface ChangePasswordPayload {
  confirmPassword: string;
  currentPassword: string;
  newPassword: string;
}

interface LoginCredentials {
  email?: string;
  password: string;
  username?: string;
  withRoles?: string[];
}

interface PasswordResetPayload {
  password: null | string | undefined;
  token: null | string | undefined;
}

interface PasswordResetRequestPayload {
  email: null | string | undefined;
  url: null | string | undefined;
}

type UpdateProfileInputType = {
  [key: string]: unknown;
  email: string;
  givenName: string;
  middleNames?: string;
  surname: string;
};

interface User extends EmailPasswordUserType {
  //usertype and emailusertype are same one type with different name in different recipe
  email: string;
  username?: string;
}

interface UserRole {
  id: number;
  name: string;
  role: string;
}

interface UserType extends EmailPasswordUserType {
  disabled?: boolean;
  givenName: null | string;
  isEmailVerified?: boolean;
  isProfileCompleted?: boolean;
  lastLoginAt: number;
  middleNames: null | string;
  name: null | string;
  roles: string[] | UserRole[];
  signedUpAt: number;
  surname: null | string;
  thirdParty?: {
    id: string;
    userId: string;
  };
}

export type {
  AuthTokens,
  ChangePasswordPayload,
  LoginCredentials,
  PasswordResetPayload,
  PasswordResetRequestPayload,
  UpdateProfileInputType,
  User,
  UserType,
};
