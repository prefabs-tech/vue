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
              aspect-ratio="16/9"
              video-link="https://www.youtube.com/watch?v=zhnIruPa0XI"
              video-token="zhnIruPa0XI"
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
          video-link="https://www.youtube.com/watch?v=zhnIruPa0XI"
          video-token="zhnIruPa0XI"
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
