import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Typeahead from "../../Typeahead.vue";

describe("Typeahead", () => {
  const suggestionItems = [
    {
      label: "Roslabel - A fragrant flower often associated with romance",
      value: "Roslabel",
    },
    {
      label: "Tulip - A bright, cup-shaped flower popular in spring",
      value: "Tulip",
    },
    {
      label: "Daisy - A simple, white flower with a yellow center",
      value: "Daisy",
    },
    {
      label: "Sunflower - A tall plant with a large, yellow flower head",
      value: "Sunflower",
    },
    {
      label: "Lily - An elegant flower often used in bouquets",
      value: "Lily",
    },
    {
      label: "Orchid - An exotic flower with a unique shape",
      value: "Orchid",
    },
    {
      label: "Marigold - A vibrant, orange or yellow flower",
      value: "Marigold",
    },
    {
      label: "Lavender - A fragrant flower known for its calming scent",
      value: "Lavender",
    },
    {
      label: "Peony - A lush, full flower often used in weddings",
      value: "Peony",
    },
    {
      label: "Chrysanthemum - A hardy flower with a variety of colors",
      value: "Chrysanthemum",
    },
    {
      label: "Daffodil - A bright, yellow flower that blooms in spring",
      value: "Daffodil",
    },
    {
      label: "Hydrangea - A large, cluster-like flower that changes color",
      value: "Hydrangea",
    },
  ];

  it("matches snapshot", () => {
    const wrapper = mount(Typeahead, {
      global: {
        mocks: {
          showSuggestions: true,
        },
      },
      props: {
        label: "Input",
        modelValue: "Lily",
        placeholder: "Placeholder",
        suggestions: suggestionItems,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
