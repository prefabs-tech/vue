import { AxiosError } from "axios";

import client from "../api/axios";

/**
 * Verify session roles by calling the backend API
 */
export const verifySessionRoles = async (
  claims: string[],
  apiBaseUrl: string,
  path: string,
): Promise<boolean> => {
  try {
    const response = await client(apiBaseUrl).get(path, {
      params: { claims },
    });

    return response.data.valid || false;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      return false;
    }
    return false;
  }
};

/**
 * Check if user is logged in
 * For better-auth, we check if a valid session exists
 */
export const isLoggedIn = async (
  apiBaseUrl: string,
  path: string,
): Promise<boolean> => {
  try {
    const response = await client(apiBaseUrl).get(path);

    return response.data && response.data.sessionId;
  } catch {
    return false;
  }
};

/**
 * Check if user profile is completed
 * For better-auth, we can consider profile as completed if user has email
 */
export const isProfileCompleted = async (
  apiBaseUrl: string,
  path: string,
): Promise<boolean> => {
  try {
    // Use the same session check endpoint; if session exists, profile is considered complete enough
    const response = await client(apiBaseUrl).get(path);

    return !!(response.data && response.data.user?.email);
  } catch {
    return false;
  }
};
