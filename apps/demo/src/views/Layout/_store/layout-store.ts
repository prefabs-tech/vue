import {
  BasicLayout,
  SidebarOnlyLayout,
  SidebarHeaderLayout,
} from "@dzangolab/vue3-user";
import { ref, shallowRef } from "vue";

import {
  BASIC_LAYOUT,
  SIDEBAR_HEADER_LAYOUT,
  SIDEBAR_ONLY_LAYOUT,
} from "../_constants/layout";

const activeLayout = ref<string>("basic");
const currentLayout = shallowRef(BasicLayout);
const layoutKey = ref(0);

const switchLayout = (layout: string) => {
  activeLayout.value = layout;

  switch (layout) {
    case BASIC_LAYOUT:
      currentLayout.value = BasicLayout;
      break;
    case SIDEBAR_ONLY_LAYOUT:
      currentLayout.value = SidebarOnlyLayout;
      break;
    case SIDEBAR_HEADER_LAYOUT:
      currentLayout.value = SidebarHeaderLayout;
      break;
    default:
      currentLayout.value = BasicLayout;
  }

  layoutKey.value++;
};

export { activeLayout, currentLayout, layoutKey, switchLayout };
