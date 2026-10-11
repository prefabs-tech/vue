import type { RouteComponent } from "vue-router";

import type { UserType } from "./auth";

declare module "vue-router" {
  interface RouteMeta {
    authenticated?: boolean | null;
    display?: ((user: UserType) => boolean) | boolean;
    verified?: boolean;
  }
}

interface RouteOverride {
  component?: RouteComponent;
  meta?: {
    authenticated?: boolean;
    layout?: RouteComponent;
    verified?: boolean;
  };
  path?: string;
}

interface RouteOverrides {
  acceptInvitation: RouteOverride;
  changePassword: RouteOverride;
  facebook?: RouteOverride;
  google?: RouteOverride;
  home?: string;
  login: RouteOverride;
  passwordReset: RouteOverride;
  passwordResetRequest: RouteOverride;
  passwordResetRequestAcknowledge: RouteOverride;
  profile?: RouteOverride;
  roles?: RouteOverride;
  signup: RouteOverride & { disabled?: boolean };
  signupFirstUser: RouteOverride & { disabled?: boolean };
  verifyEmail?: RouteOverride;
  verifyEmailReminder?: RouteOverride;
}

export type { RouteOverride, RouteOverrides };
