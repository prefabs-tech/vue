import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import FormActions from "../../FormActions.vue";

describe("FormActions", () => {
  it("renders custom actions when provided", () => {
    const wrapper = mount(FormActions, {
      props: {
        actions: [
          { id: "save", label: "Save Changes", type: "submit" },
          { id: "delete", label: "Delete", severity: "danger" },
        ],
      },
      global: {
        stubs: {
          ButtonElement: {
            props: ["label", "id", "type", "severity"],
            template: `<button :data-id="id" :type="type" :data-severity="severity">{{ label }}</button>`,
          },
        },
      },
    });

    const buttons = wrapper.findAll("button");
    expect(buttons.length).toBe(2);
    expect(buttons[0].text()).toBe("Save Changes");
    expect(buttons[1].text()).toBe("Delete");
  });

  it("merges custom actions with defaults by id", () => {
    const wrapper = mount(FormActions, {
      props: {
        actions: [{ id: "submit", label: "Send Form", customProp: "value" }],
      },
      global: {
        stubs: {
          ButtonElement: {
            props: ["label", "type", "customProp"],
            template: `<button :type="type" :data-custom="customProp">{{ label }}</button>`,
          },
        },
      },
    });

    const buttons = wrapper.findAll("button");
    // Should use custom label but inherit default type
    expect(buttons[0].text()).toBe("Send Form");
    expect(buttons[0].attributes("type")).toBe("submit");
  });

  it("emits dynamic event when Submit button is clicked", async () => {
    const wrapper = mount(FormActions, {
      global: {
        stubs: {
          ButtonElement: {
            props: ["label", "type"],
            template: `<button :type="type" @click="$emit('click', $event)">{{ label }}</button>`,
          },
        },
      },
    });

    const buttons = wrapper.findAll("button");
    await buttons[0].trigger("click");

    // Should emit 'submit' event (lowercased id)
    expect(wrapper.emitted("submit")).toBeTruthy();
  });

  it("emits dynamic event when Cancel button is clicked", async () => {
    const wrapper = mount(FormActions, {
      global: {
        stubs: {
          ButtonElement: {
            props: ["label", "type"],
            template: `<button :type="type" @click="$emit('click', $event)">{{ label }}</button>`,
          },
        },
      },
    });

    const buttons = wrapper.findAll("button");
    await buttons[1].trigger("click");

    // Should emit 'cancel' event (lowercased id)
    expect(wrapper.emitted("cancel")).toBeTruthy();
  });

  it("disables all buttons when disabled prop is true", () => {
    const wrapper = mount(FormActions, {
      props: {
        disabled: true,
      },
      global: {
        stubs: {
          ButtonElement: {
            props: ["disabled"],
            template: `<button :disabled="disabled">Button</button>`,
          },
        },
      },
    });

    const buttons = wrapper.findAll("button");
    expect(buttons[0].attributes("disabled")).toBeDefined();
    expect(buttons[1].attributes("disabled")).toBeDefined();
  });

  it("disables all buttons when loading prop is true", () => {
    const wrapper = mount(FormActions, {
      props: {
        loading: true,
      },
      global: {
        stubs: {
          ButtonElement: {
            props: ["disabled"],
            template: `<button :disabled="disabled">Button</button>`,
          },
        },
      },
    });

    const buttons = wrapper.findAll("button");
    expect(buttons[0].attributes("disabled")).toBeDefined();
    expect(buttons[1].attributes("disabled")).toBeDefined();
  });
});
