import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Accordion from "../../Index.vue";

interface AccordionContent {
  [key: string]: {
    content: string;
    title: string;
  };
}

interface AccordionProperties {
  canSelfCollapse?: boolean;
  defaultIndex: number;
  direction: "horizontal" | "vertical";
}

describe("Accordion", () => {
  const contents: AccordionContent = {
    first: {
      content: "Accordion 1 content",
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
    canSelfCollapse: true,
    defaultIndex: 1,
    direction: "horizontal",
  };

  const wrapper = mount(Accordion, {
    props: props,
    slots: {
      default: `
        <div title="${contents.first.title}">
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

  it("correctly show SubPane with matching defaultIndex", () => {
    const active = wrapper.findAll(".accordion > section");

    expect(active[props.defaultIndex].html()).toContain(
      contents.second.content,
    );
  });

  it("correctly add direction class from props", () => {
    expect(wrapper.find(".accordion").classes()).toContain(props.direction);
  });

  it("collapses active panel when canSelfCollapse is true and same panel is clicked", async () => {
    const wrapper = mount(Accordion, {
      props: {
        canSelfCollapse: true,
        defaultIndex: 0,
      },
      slots: {
        default: `
          <div title="${contents.first.title}">
            <p>${contents.first.content}</p>
          </div>
          <div title="${contents.second.title}">
            <p>${contents.second.content}</p>
          </div>
        `,
      },
    });

    const firstButton = wrapper.findAll("button")[0];

    // First panel is active by default
    expect(wrapper.find('[data-expanded="true"]').exists()).toBe(true);

    // Click the active panel
    await firstButton.trigger("click");
    await wrapper.vm.$nextTick();

    // Panel should collapse
    expect(wrapper.find('[data-expanded="true"]').exists()).toBe(false);
  });

  it("does not collapse active panel when canSelfCollapse is false", async () => {
    const wrapper = mount(Accordion, {
      props: {
        canSelfCollapse: false,
        defaultIndex: 0,
      },
      slots: {
        default: `
          <div title="${contents.first.title}">
            <p>${contents.first.content}</p>
          </div>
          <div title="${contents.second.title}">
            <p>${contents.second.content}</p>
          </div>
        `,
      },
    });

    const firstButton = wrapper.findAll("button")[0];

    // Click the active panel
    await firstButton.trigger("click");
    await wrapper.vm.$nextTick();

    // Panel should remain active
    expect(wrapper.find('[data-expanded="true"]').exists()).toBe(true);
  });

  it("switches to different panel when clicked", async () => {
    const wrapper = mount(Accordion, {
      props: {
        defaultIndex: 0,
      },
      slots: {
        default: `
          <div title="${contents.first.title}">
            <p>${contents.first.content}</p>
          </div>
          <div title="${contents.second.title}">
            <p>${contents.second.content}</p>
          </div>
        `,
      },
    });

    const secondButton = wrapper.findAll("button")[1];

    // Click second panel
    await secondButton.trigger("click");
    await wrapper.vm.$nextTick();

    // Second panel should be active
    const sections = wrapper.findAll("section");
    expect(sections[1].attributes("data-expanded")).toBe("true");
    expect(sections[0].attributes("data-expanded")).toBe("false");
  });
});
