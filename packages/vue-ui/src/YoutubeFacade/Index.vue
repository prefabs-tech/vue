<template>
  <div
    class="youtube-facade"
    :style="`background-image: url(${videoImageLink})`"
  >
    <div :style="`aspect-ratio: ${aspectRatio}`">
      <a
        :href="videoLink"
        :data-youtube-video-token="videoToken"
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
    default: null,
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
    parentNode.replaceChild(iFrame, currentTarget);
  }
};

const videoImageLink = computed(() => {
  return (
    props.imageSource ||
    `https://img.youtube.com/vi/${props.videoToken}/maxresdefault.jpg`
  );
});
</script>

<style lang="css">
.youtube-facade div:first-child {
  width: 100%;
}

.youtube-facade {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.youtube-facade div {
  display: flex;
  position: relative;
  width: 100%;
}

.videoEmbed,
.youtube-facade img {
  border: none;
  height: auto;
  width: 100%;
}

.youtube-facade div img {
  display: block;
}

.youtube-facade div a {
  text-decoration: none;
}

.youtube-facade div a:first-child:after {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 234.67 165.33'%3E%3Cpath d='M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85' fill='red'%3E%3C/path%3E%3Cpath d='M93.333 117.559l61.333-34.89-61.333-34.894z' fill='%23fff'%3E%3C/path%3E%3C/svg%3E")
    center no-repeat;
  background-size: 4rem;
  content: "";
  height: 4rem;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 4rem;
}
</style>
