import type { VNode } from "vue";

type StorageType = "localStorage" | "sessionStorage";

type TKeymap = {
  [key: string]: () => void;
};

type TOrientation = "horizontal" | "vertical";

type TPosition = "top" | "left" | "bottom" | "right";

type Tab = {
  children?: VNode | string;
  closable?: boolean;
  icon?: string;
  key: string;
  label: string;
};

export type { StorageType, Tab, TKeymap, TOrientation, TPosition };
