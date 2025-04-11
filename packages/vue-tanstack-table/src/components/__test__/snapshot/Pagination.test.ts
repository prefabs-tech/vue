import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Pagination from "../../Pagination.vue";

describe("Pagination", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Pagination, {
      global: {
        stubs: {
          DebounceInput: true,
        },
      },
      props: {
        currentPage: 1,
        showPageInput: true,
        showPageButtons: true,
        totalItems: 20,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
