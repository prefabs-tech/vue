import { mount } from "@vue/test-utils";
import { describe, expect, it, vi, beforeAll } from "vitest";
import ConfirmationModal from "../../Index.vue";
import { ref } from "vue";

describe("ConfirmationModal", () => {
  it("matches snapshot", async () => {

  const dzangolabVueDialogMock = ref<HTMLDialogElement>();
  const wrapper = mount(ConfirmationModal, {
    global: {
      mocks: {
        dzangolabVueDialog: dzangolabVueDialogMock,
      }
    }
  });

  await wrapper.vm.$nextTick();
  expect(wrapper.element).toMatchSnapshot();
});
});
