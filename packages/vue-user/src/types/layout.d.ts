import type { UserMenuItem } from "./userMenu";

declare module "@prefabs.tech/vue3-layout" {
  interface PrefabsTechVue3LayoutConfig {
    userMenu?: UserMenuItem[];
  }
}
