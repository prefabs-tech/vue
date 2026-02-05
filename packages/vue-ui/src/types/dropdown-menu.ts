interface DropdownMenu {
  class?: string;
  disabled?: boolean;
  display?: boolean;
  icon?: string;
  key?: string;
  label?: string;
  severity?:
    | "alternate"
    | "danger"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  value?: string | number;
}

export type { DropdownMenu };
