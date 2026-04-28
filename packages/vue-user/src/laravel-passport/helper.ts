import type { UserType } from "../types/auth";

import useUserStore from "../store";

export async function verifySessionRoles(
  supportedRoles: string[],
): Promise<boolean> {
  const userStore = useUserStore();
  const { logout } = userStore;

  const user: undefined | UserType = userStore.getUser();

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
