import type { UserMenuItem } from "./user-menu";

declare module "@prefabs.tech/vue3-layout" {
  interface PrefabsTechVue3LayoutConfig {
    userMenu?: UserMenuItem[];
  }
}
