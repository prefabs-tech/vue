import {
  BasicLayout,
  SidebarOnlyLayout,
  SidebarHeaderLayout,
} from "@prefabs.tech/vue3-user";
import { ref, shallowRef } from "vue";

import {
  BASIC_LAYOUT,
  SIDEBAR_HEADER_LAYOUT,
  SIDEBAR_ONLY_LAYOUT,
} from "../_constants/layout";

const activeLayout = ref<string>("basic");
const currentLayout = shallowRef(BasicLayout);
const layoutKey = ref(BASIC_LAYOUT);

const switchLayout = (layout: string) => {
  activeLayout.value = layout;

  switch (layout) {
    case BASIC_LAYOUT: {
      layoutKey.value = BASIC_LAYOUT;
      currentLayout.value = BasicLayout;
      break;
    }
    case SIDEBAR_ONLY_LAYOUT: {
      layoutKey.value = SIDEBAR_ONLY_LAYOUT;
      currentLayout.value = SidebarOnlyLayout;
      break;
    }
    case SIDEBAR_HEADER_LAYOUT: {
      layoutKey.value = SIDEBAR_HEADER_LAYOUT;
      currentLayout.value = SidebarHeaderLayout;
      break;
    }
    default: {
      layoutKey.value = BASIC_LAYOUT;
      currentLayout.value = BasicLayout;
    }
  }
};

export { activeLayout, currentLayout, layoutKey, switchLayout };
