import type { RouteComponent } from "vue-router";

interface RouteOverride {
  component?: RouteComponent;
  path?: string;
  disabled?: boolean;
}

interface RouteOverrides {
  home?: string;
  login: RouteOverride;
  signup: RouteOverride;
  passwordReset: RouteOverride;
  passwordResetRequest: RouteOverride;
  passwordResetRequestAcknowledge: RouteOverride;
  profile?: RouteOverride;
}

export type { RouteOverride, RouteOverrides };
