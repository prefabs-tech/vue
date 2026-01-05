<template>
  <UiPage
    :subtitle="$t('ui.youtubeFacade.subtitle')"
    :title="$t('ui.youtubeFacade.title')"
    class="demo-youtube-facade"
  >
    <section>
      <h2>{{ $t("ui.youtubeFacade.usage.basic") }}</h2>

      <div class="section-content">
        <YoutubeFacade
          :alt="$t('ui.youtubeFacade.alternativeMessage')"
          video-link="https://www.youtube.com/watch?v=YrxBCBibVo0"
          video-token="YrxBCBibVo0"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;YoutubeFacade
              alt="Vue basic"
              video-link="https://www.youtube.com/watch?v=YrxBCBibVo0"
              video-token="YrxBCBibVo0"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { YoutubeFacade } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.youtubeFacade.usage.aspectRatio") }}</h2>

      <div class="section-content">
        <YoutubeFacade
          :alt="$t('ui.youtubeFacade.alternativeMessage')"
          aspect-ratio="16/10"
          video-link="https://www.youtube.com/watch?v=F7PLPJqVotk"
          video-token="F7PLPJqVotk"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;YoutubeFacade
              alt="Vue basic"
              aspect-ratio="16/10"
              video-link="https://www.youtube.com/watch?v=F7PLPJqVotk"
              video-token="F7PLPJqVotk"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { YoutubeFacade } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.youtubeFacade.usage.customThumbnail") }}</h2>

      <div class="section-content">
        <YoutubeFacade
          :alt="$t('ui.youtubeFacade.alternativeMessage')"
          aspect-ratio="1.95/1"
          image-source="logo.png"
          video-link="https://www.youtube.com/watch?v=YrxBCBibVo0"
          video-token="YrxBCBibVo0"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;YoutubeFacade
              alt="Vue basic"
              aspect-ratio="1.95/1"
              image-source="logo.png"
              video-link="https://www.youtube.com/watch?v=YrxBCBibVo0"
              video-token="YrxBCBibVo0"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { YoutubeFacade } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'YoutubeFacadeProperties' })
      "
    />
  </UiPage>
</template>

<script setup lang="ts">
import { YoutubeFacade } from "@prefabs.tech/vue3-ui";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

const propsData = [
  {
    default: "-",
    description:
      "Alternative text for the video thumbnail, used for accessibility and the iframe title.",
    prop: "alt",
    type: "String",
  },
  {
    default: `"16/9"`,
    description:
      "Specifies the aspect ratio for the video container (e.g., '16/9', '3/4').",
    prop: "aspectRatio",
    type: "String",
  },
  {
    default: "-",
    description: "Custom thumbnail image for the youtube video.",
    prop: "imageSource",
    type: "String",
  },
  {
    default: "-",
    description: "YouTube video link.(required)",
    prop: "videoLink",
    type: "String",
  },
  {
    default: "-",
    description:
      "The YouTube video token, used to generate the embed URL and default thumbnail.(required)",
    prop: "videoToken",
    type: "String",
  },
];
</script>

<style lang="css">
.custom-youtube-facade {
  --_margin: 0 auto;
  --_width: 50%;
}

.demo-youtube-facade section {
  margin-bottom: 2.5em;
}

.demo-youtube-facade .section-content {
  display: grid;
  gap: 1.5rem;
}
</style>
