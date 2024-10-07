<template>
  <Page :title="$t('ui.youtubeFacade.title')" class="demo-youtube-facade">
    <section>
      <h2>{{ $t("ui.youtubeFacade.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;YoutubeFacade
              alt="Video alt"
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
          alt="Video alt"
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
              alt="Video alt"
              aspect-ratio="4/3"
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
          alt="Video alt"
          aspect-ratio="4/3"
          video-link="https://www.youtube.com/watch?v=F7PLPJqVotk"
          video-token="F7PLPJqVotk"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.youtubeFacade.usage.defaultThumbnail") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;YoutubeFacade
              alt="Video alt"
              aspect-ratio="16/9"
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
          alt="Video alt"
          aspect-ratio="16/9"
          image-source="logo.png"
          video-link="https://www.youtube.com/watch?v=YrxBCBibVo0"
          video-token="YrxBCBibVo0"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.youtubeFacade.usage.width") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;YoutubeFacade
              alt="Video alt"
              aspect-ratio="16/9"
              video-link="https://www.youtube.com/watch?v=CYPZBK8zUik"
              video-token="CYPZBK8zUik"
              width="50%";
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { YoutubeFacade } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <YoutubeFacade
          alt="Video alt"
          aspect-ratio="16/9"
          video-link="https://www.youtube.com/watch?v=CYPZBK8zUik"
          video-token="CYPZBK8zUik"
          width="50%"
        />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { YoutubeFacade } from "@dzangolab/vue3-ui";
</script>

<style lang="css">
.demo-youtube-facade section {
  margin-bottom: 2.5em;
}

.demo-youtube-facade .section-content {
  display: grid;
  gap: 1.5rem;
}
</style>
