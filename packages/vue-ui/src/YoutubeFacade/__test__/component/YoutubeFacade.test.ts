import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import YoutubeFacade from "../../Index.vue";

const defaultProps = {
  videoLink: "https://www.youtube.com/watch?v=abc123",
  videoToken: "abc123",
};

describe("YoutubeFacade", () => {
  it("uses imageSource prop when provided", () => {
    const wrapper = mount(YoutubeFacade, {
      props: { ...defaultProps, imageSource: "https://example.com/thumb.jpg" },
    });

    expect(wrapper.find("img").attributes("src")).toBe(
      "https://example.com/thumb.jpg",
    );
  });

  it("falls back to YouTube thumbnail URL when imageSource is not provided", () => {
    const wrapper = mount(YoutubeFacade, { props: defaultProps });

    expect(wrapper.find("img").attributes("src")).toBe(
      "https://img.youtube.com/vi/abc123/maxresdefault.jpg",
    );
  });

  it("replaces img with iframe when the video link is clicked", async () => {
    const wrapper = mount(YoutubeFacade, { props: defaultProps });

    await wrapper.find("a[data-youtube-video-token]").trigger("click");

    expect(wrapper.find("iframe").exists()).toBe(true);
    expect(wrapper.find("img").exists()).toBe(false);
  });

  it("sets iframe src to youtube embed URL with autoplay on click", async () => {
    const wrapper = mount(YoutubeFacade, { props: defaultProps });

    await wrapper.find("a[data-youtube-video-token]").trigger("click");

    expect(wrapper.find("iframe").attributes("src")).toContain(
      "https://www.youtube.com/embed/abc123?autoplay=1",
    );
  });
});
