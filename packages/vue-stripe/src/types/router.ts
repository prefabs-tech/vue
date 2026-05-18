import type { RouteComponent } from "vue-router";

interface RouteOverride {
  component?: RouteComponent;
  meta?: {
    layout?: RouteComponent;
  };
  path?: string;
}

interface RouteOverrides {
  cancelled?: RouteOverride;
  success?: RouteOverride;
}

export type { RouteOverride, RouteOverrides };
