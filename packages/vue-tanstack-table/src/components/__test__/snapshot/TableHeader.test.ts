import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import TableHeader from "../../TableHeader.vue";
import { mockedTable } from "../table";

describe("TableHeader", () => {
  it("matches snapshot", () => {
    const wrapper = mount(TableHeader, {
      props: {
        isFilterRowVisible: true,
        table: mockedTable,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
