import client from "../api/axios";
import useUserStore from "../store";

import type { UserType } from "../types/auth";

export async function verifySessionRoles(
  supportedRoles: string[],
): Promise<boolean> {
  const userStore = useUserStore();
  const { logout } = userStore;

  const user: UserType | undefined = userStore.getUser();

  if (user && user.roles) {
    const hasSupportedRoles = await user.roles.some((userRole) => {
      if (typeof userRole === "string") {
        return supportedRoles.includes(userRole);
      }
      return supportedRoles.includes(userRole.role);
    });

    if (hasSupportedRoles) {
      return true;
    } else {
      await logout();
    }
  } else {
    await logout();
  }

  return false;
}

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
