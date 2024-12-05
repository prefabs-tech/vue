import {
  BasicLayout,
  SidebarOnlyLayout,
  SidebarHeaderLayout,
} from "@dzangolab/vue3-user";
import { ref, shallowRef } from "vue";

const activeLayout = ref<string>("basic");
const currentLayout = shallowRef(BasicLayout);
const layoutKey = ref(0);

const switchLayout = (layout: string) => {
  activeLayout.value = layout;

  switch (layout) {
    case "basic":
      currentLayout.value = BasicLayout;
      break;
    case "sidebar_only":
      currentLayout.value = SidebarOnlyLayout;
      break;
    case "sidebar_header":
      currentLayout.value = SidebarHeaderLayout;
      break;
    default:
      currentLayout.value = BasicLayout;
  }

  layoutKey.value++;
};

export { activeLayout, currentLayout, layoutKey, switchLayout };
