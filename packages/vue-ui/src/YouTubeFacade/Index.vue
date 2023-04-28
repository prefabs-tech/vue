<template>
  <div class="youTubeFacade">
    <a
      v-if="!show"
      :href="href"
      :data-yt-video-token="token"
      :title="title"
      target="_blank"
      @click.prevent="onclick"
    >
      <img
        :src="imageUrl"
        :alt="title"
        :style="'aspect-ratio:' + aspectRatio"
      />
    </a>
    <a v-if="!show" :href="href" target="_blank">Watch On <b>YouTube</b></a>
    <iframe
      v-if="show"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      class="videoEmbed"
      :style="'aspect-ratio:' + aspectRatio"
      frameborder="0"
      :src="embeddedUrl"
      :title="title"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "YouTubeFacade",
};
</script>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps({
  aspectRatio: {
    default: "16/9",
    required: false,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  token: {
    required: true,
    type: String,
  },
});

const show = ref(false);

const href = computed(() => {
  return `https://youtu.be/${props.token}`;
});

const embeddedUrl = computed(() => {
  return `https://www.youtube.com/embed/${props.token}?autoplay=1`;
});

const imageUrl = computed(() => {
  return `https://img.youtube.com/vi/${props.token}/mqdefault.jpg`;
});

const onclick = () => {
  show.value = true;
};
</script>
