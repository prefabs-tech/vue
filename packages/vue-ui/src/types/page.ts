import ButtonElement from "../Button/Index.vue";

import type { DropdownMenu } from "./dropdown-menu";
import type { ExtractPropTypes } from "vue";

type ButtonElementProperties = ExtractPropTypes<
  (typeof ButtonElement)["__props"]
>;

export interface ToolbarActionMenu
  extends DropdownMenu,
    ButtonElementProperties {}
