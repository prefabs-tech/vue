import type { ExtractPropTypes } from "vue";

import type { DropdownMenu } from "./dropdown-menu";

import ButtonElement from "../Button/Index.vue";

export interface ToolbarActionMenu
  extends ButtonElementProperties, DropdownMenu {}

type ButtonElementProperties = ExtractPropTypes<
  (typeof ButtonElement)["__props"]
>;
