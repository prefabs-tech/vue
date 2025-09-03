import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { mockedTable } from "../table";
import TableBody from "../../TableBody.vue";

describe("TableBody", () => {
  it("matches snapshot", () => {
    const wrapper = mount(TableBody, {
      props: {
        table: mockedTable,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
