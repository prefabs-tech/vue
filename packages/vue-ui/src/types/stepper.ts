import { VNode } from "vue";

interface ActionButtonProperties {
  disabled?: boolean;
  iconLeft?: string;
  iconRight?: string;
  label?: string;
  rounded?: boolean;
  severity?: string;
  size?: string;
  variant?: string;
}

interface StepProperties {
  completedStepIcon?: string | VNode;
  content?: string | VNode;
  label?: string;
  step?: number | string;
  subtitle?: string;
}

export type { ActionButtonProperties, StepProperties };
