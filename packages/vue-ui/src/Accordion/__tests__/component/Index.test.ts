import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Accordion from "../../Index.vue";

interface AccordionContent {
  [key: string]: {
    content: string;
    icon?: string;
    title: string;
  };
}

interface AccordionProperties {
  activeIcon?: string;
  canSelfCollapse?: boolean;
  defaultIndex: number;
  direction: "horizontal" | "vertical";
  inactiveIcon?: string;
}

describe("Accordion", () => {
  const contents: AccordionContent = {
    first: {
      content: "Accordion 1 content",
      icon: "home.svg",
      title: "Accordion 1",
    },
    second: {
      content: "Accordion 2 content",
      title: "Accordion 2",
    },
    third: {
      content: "Accordion 3 content",
      title: "Accordion 3",
    },
  };

  const props: AccordionProperties = {
    activeIcon: "upchevron.svg",
    canSelfCollapse: true,
    defaultIndex: 1,
    direction: "horizontal",
    inactiveIcon: "downchevron.svg",
  };

  const wrapper = mount(Accordion, {
    props: props,
    slots: {
      default: `
        <div title="${contents.first.title}" icon="${contents.first.icon}">
          <p>${contents.first.content}</p>
        </div>
        <div title="${contents.second.title}">
          <p>${contents.second.content}</p>
        </div>
        <div title="${contents.third.title}">
          <p>${contents.third.content}</p>
        </div>
      `,
    },
  });

  it("correctly renders all titles", () => {
    for (const key in contents) {
      const title = contents[key].title;

      expect(wrapper.html()).toContain(title);
    }
  });

  it("correctly shows active and inactive icons", async () => {
    const buttons = wrapper.findAll(".accordion > li");
    buttons.map(async (button, index) => {
      const icon = button.find("img:last-child");

      if (props.defaultIndex === index) {
        expect(icon.attributes("src")).toBe(props.activeIcon);
        return;
      }

      expect(icon.attributes("src")).toBe(props.inactiveIcon);
    });
  });

  it("correctly show SubPane with matching defaultIndex", () => {
    const active = wrapper.findAll(".accordion > section");

    expect(active[props.defaultIndex].html()).toContain(
      contents.second.content
    );
  });

  it("correctly add direction class from props", () => {
    expect(wrapper.find(".accordion").classes()).toContain(props.direction);
  });
});
