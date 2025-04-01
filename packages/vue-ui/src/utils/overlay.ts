import { useWindowSize } from "@vueuse/core";

export const getBestPosition = (triggerRect: DOMRect): string => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const positions = {
    top: triggerRect.top,
    bottom: windowHeight.value - triggerRect.bottom,
    left: triggerRect.left,
    right: windowWidth.value - triggerRect.right,
  };

  const maxSpace = Math.max(...Object.values(positions));
  return (
    (Object.keys(positions) as Array<keyof typeof positions>).find(
      (key) => positions[key] === maxSpace,
    ) || "bottom"
  );
};

export const getScrollableParents = (element: HTMLElement): Element[] => {
  const parents: Element[] = [];
  let current = element.parentElement;

  while (current) {
    const style = window.getComputedStyle(current);
    if (
      ["auto", "scroll"].includes(style.overflow) ||
      ["auto", "scroll"].includes(style.overflowX) ||
      ["auto", "scroll"].includes(style.overflowY)
    ) {
      parents.push(current);
    }
    current = current.parentElement;
  }

  return parents;
};
