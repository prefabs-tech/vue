import client from "../axios";

import type {
  Invitation,
  LoginCredentials,
  UpdateProfileInputType,
  UserType
} from "../../types";

export const acceptInvitation = async (
  token: string,
  credential: LoginCredentials,
  apiBaseUrl: string,
) => {
  const response = await client(apiBaseUrl).post(
    `invitations/token/${token}`,
    credential,
    {
      withCredentials: true,
    },
  );

  if (response.data.status === "ERROR") {
    throw new Error(response.data.message);
  } else {
    return response.data;
  }
};

export const getInvitationByToken = async (
  token: string,
  apiBaseUrl: string,
): Promise<Invitation> => {
  const response = await client(apiBaseUrl).get(`invitations/token/${token}`);

  if (response.data.status === "ERROR") {
    throw new Error(response.data.message);
  } else {
    return response.data;
  }
};

export const getMe = async (
  apiBaseUrl: string,
): Promise<{ data: UserType }> => {
  const response = await client(apiBaseUrl).get(`me`, {
    withCredentials: true,
  });

  if ("error" in response.data) {
    throw new Error(response.data.message);
  } else {
    return response;
  }
};

export const updateUserProfile = async (
  data: UpdateProfileInputType,
  apiBaseUrl: string,
): Promise<{ data: UserType }> => {
  const response = await client(apiBaseUrl).put(`me`, data, {
    withCredentials: true,
  });

  if ("error" in response.data) {
    throw new Error(response.data.message);
  } else {
    return response;
  }
};
