import type { DropdownMenu } from "./dropdown-menu";
import type { ExtractPropTypes } from "vue";
import ButtonElement from "../Button/Index.vue";

type ButtonElementProps = ExtractPropTypes<(typeof ButtonElement)["__props"]>;

export interface ToolbarActionsMenu extends DropdownMenu, ButtonElementProps {}
