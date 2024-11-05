<template>
  <Page :title="$t('ui.youtubeFacade.title')" class="demo-youtube-facade">
    <template #toolbar>
      <router-link :to="{ name: 'ui' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("ui.youtubeFacade.usage.basic") }}</h2>

      <div class="section-content">
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
            import { YoutubeFacade } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <YoutubeFacade
          :alt="$t('ui.youtubeFacade.alternativeMessage')"
          video-link="https://www.youtube.com/watch?v=YrxBCBibVo0"
          video-token="YrxBCBibVo0"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.youtubeFacade.usage.aspectRatio") }}</h2>

      <div class="section-content">
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
            import { YoutubeFacade } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <YoutubeFacade
          :alt="$t('ui.youtubeFacade.alternativeMessage')"
          aspect-ratio="16/10"
          video-link="https://www.youtube.com/watch?v=F7PLPJqVotk"
          video-token="F7PLPJqVotk"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.youtubeFacade.usage.customThumbnail") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;YoutubeFacade
              alt="Vue basic"
              aspect-ratio="1.85/1"
              image-source="logo.png"
              video-link="https://www.youtube.com/watch?v=YrxBCBibVo0"
              video-token="YrxBCBibVo0"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { YoutubeFacade } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <YoutubeFacade
          :alt="$t('ui.youtubeFacade.alternativeMessage')"
          aspect-ratio="1.85/1"
          image-source="logo.png"
          video-link="https://www.youtube.com/watch?v=YrxBCBibVo0"
          video-token="YrxBCBibVo0"
        />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { YoutubeFacade } from "@dzangolab/vue3-ui";
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
