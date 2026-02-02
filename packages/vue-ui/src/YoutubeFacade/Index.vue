<template>
  <div
    class="youtube-facade"
    :style="`background-image: url(${videoImageLink})`"
  >
    <div :style="`aspect-ratio: ${aspectRatio}`">
      <a
        :aria-label="(alt ?? 'youtube') + ' video'"
        :href="videoLink"
        :data-youtube-video-token="videoToken"
        rel="noreferrer"
        target="_blank"
        :style="`aspect-ratio: ${aspectRatio}`"
        @click="loadYoutubeVideo"
      >
        <img
          :src="videoImageLink"
          :alt="alt"
          :data-aspect-ratio="aspectRatio"
          :style="`aspect-ratio: ${aspectRatio}`"
        />
      </a>
      <a :href="videoLink" rel="noreferrer" target="_blank">
        Watch On <b>YouTube</b>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "YoutubeFacade",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  alt: {
    default: null,
    required: false,
    type: String,
  },

  aspectRatio: {
    default: "16/9",
    required: false,
    type: String,
  },

  imageSource: {
    default: null,
    required: false,
    type: String,
  },

  videoLink: {
    required: true,
    type: String,
  },

  videoToken: {
    required: true,
    type: String,
  },
});

const loadYoutubeVideo = (event: Event) => {
  event.preventDefault();
  event.stopPropagation();

  const currentTarget = event.currentTarget as HTMLElement;
  const img = currentTarget.firstElementChild as HTMLImageElement;

  const iFrame = Object.assign(document.createElement("iframe"), {
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    className: "videoEmbed",
    frameborder: "0",
    src:
      "https://www.youtube.com/embed/" +
      currentTarget.dataset.youtubeVideoToken +
      "?autoplay=1",
    title: img.alt,
  });

  if (img.dataset.aspectRatio) {
    iFrame.style.aspectRatio = img.dataset.aspectRatio;
  }

  const parentNode = currentTarget.parentNode;

  if (parentNode) {
    currentTarget.replaceWith(iFrame);
  }
};

const videoImageLink = computed(() => {
  return (
    props.imageSource ||
    `https://img.youtube.com/vi/${props.videoToken}/maxresdefault.jpg`
  );
});
</script>
