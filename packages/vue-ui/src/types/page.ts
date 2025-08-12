import type { DropdownMenu } from "./dropdown-menu";

export interface ActionMenuItem extends DropdownMenu {
  [key: string]: unknown;
}
