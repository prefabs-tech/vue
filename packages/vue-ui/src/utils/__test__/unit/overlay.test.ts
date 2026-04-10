import { describe, expect, it, beforeEach } from "vitest";

import { getScrollableParents } from "../../overlay";

describe("getScrollableParents", () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.append(container);
  });

  it("returns empty array when no scrollable parents exist", () => {
    const child = document.createElement("div");

    container.append(child);

    const parents = getScrollableParents(child);

    expect(parents).toHaveLength(0);
  });

  it("finds a parent with overflow auto", () => {
    const scrollable = document.createElement("div");

    scrollable.style.overflow = "auto";
    container.append(scrollable);

    const child = document.createElement("div");

    scrollable.append(child);

    const parents = getScrollableParents(child);

    expect(parents).toContain(scrollable);
  });

  it("finds a parent with overflow scroll", () => {
    const scrollable = document.createElement("div");

    scrollable.style.overflow = "scroll";
    container.append(scrollable);

    const child = document.createElement("div");

    scrollable.append(child);

    const parents = getScrollableParents(child);

    expect(parents).toContain(scrollable);
  });

  it("finds multiple scrollable ancestors", () => {
    const outerScrollable = document.createElement("div");

    outerScrollable.style.overflow = "auto";

    const innerScrollable = document.createElement("div");

    innerScrollable.style.overflow = "scroll";
    outerScrollable.append(innerScrollable);
    container.append(outerScrollable);

    const child = document.createElement("div");

    innerScrollable.append(child);

    const parents = getScrollableParents(child);

    expect(parents).toContain(innerScrollable);
    expect(parents).toContain(outerScrollable);
  });
});
