import type { VNode } from "vue";

type StorageType = "localStorage" | "sessionStorage";

type Tab = {
  children?: string | VNode;
  closable?: boolean;
  icon?: string;
  key: string;
  label: string;
};

type TKeymap = {
  [key: string]: () => void;
};

type TOrientation = "horizontal" | "vertical";

type TPosition = "bottom" | "left" | "right" | "top";

export type { StorageType, Tab, TKeymap, TOrientation, TPosition };
