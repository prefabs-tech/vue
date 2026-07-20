import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,tr as c,v as l}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{r as u}from"./PrefabsTechVue3UI.es-CXZdzPpN.js";import{t as d}from"./ComponentDocumentation-BPcopVAa.js";import{t as f}from"./UiPage-3Ir0VIur.js";var p={class:`section-content`},m={class:`section-content`},h={class:`section-content`},g=a({name:`YoutubeFacadeDemo`,setup(a){let g=[{default:`-`,description:`Alternative text for the video thumbnail, used for accessibility and the iframe title.`,prop:`alt`,type:`String`},{default:`"16/9"`,description:`Specifies the aspect ratio for the video container (e.g., '16/9', '3/4').`,prop:`aspectRatio`,type:`String`},{default:`-`,description:`Custom thumbnail image for the youtube video.`,prop:`imageSource`,type:`String`},{default:`-`,description:`YouTube video link.(required)`,prop:`videoLink`,type:`String`},{default:`-`,description:`The YouTube video token, used to generate the embed URL and default thumbnail.(required)`,prop:`videoToken`,type:`String`}];return(a,_)=>{let v=r(`SshPre`);return o(),l(f,{subtitle:a.$t(`ui.youtubeFacade.subtitle`),title:a.$t(`ui.youtubeFacade.title`),class:`demo-youtube-facade`},{default:s(()=>[i(`section`,null,[i(`h2`,null,c(a.$t(`ui.youtubeFacade.usage.basic`)),1),_[2]||=t(),i(`div`,p,[e(n(u),{alt:a.$t(`ui.youtubeFacade.alternativeMessage`),"video-link":`https://www.youtube.com/watch?v=YrxBCBibVo0`,"video-token":`YrxBCBibVo0`},null,8,[`alt`]),_[1]||=t(),e(v,{language:`html-vue`},{default:s(()=>[..._[0]||=[t(`
          <template>
            <YoutubeFacade
              alt="Vue basic"
              video-link="https://www.youtube.com/watch?v=YrxBCBibVo0"
              video-token="YrxBCBibVo0"
            />
          </template>

          <script setup lang="ts">
            import { YoutubeFacade } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),_[9]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.youtubeFacade.usage.aspectRatio`)),1),_[5]||=t(),i(`div`,m,[e(n(u),{alt:a.$t(`ui.youtubeFacade.alternativeMessage`),"aspect-ratio":`16/10`,"video-link":`https://www.youtube.com/watch?v=F7PLPJqVotk`,"video-token":`F7PLPJqVotk`},null,8,[`alt`]),_[4]||=t(),e(v,{language:`html-vue`},{default:s(()=>[..._[3]||=[t(`
          <template>
            <YoutubeFacade
              alt="Vue basic"
              aspect-ratio="16/10"
              video-link="https://www.youtube.com/watch?v=F7PLPJqVotk"
              video-token="F7PLPJqVotk"
            />
          </template>

          <script setup lang="ts">
            import { YoutubeFacade } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),_[10]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.youtubeFacade.usage.customThumbnail`)),1),_[8]||=t(),i(`div`,h,[e(n(u),{alt:a.$t(`ui.youtubeFacade.alternativeMessage`),"aspect-ratio":`1.95/1`,"image-source":`logo.png`,"video-link":`https://www.youtube.com/watch?v=YrxBCBibVo0`,"video-token":`YrxBCBibVo0`},null,8,[`alt`]),_[7]||=t(),e(v,{language:`html-vue`},{default:s(()=>[..._[6]||=[t(`
          <template>
            <YoutubeFacade
              alt="Vue basic"
              aspect-ratio="1.95/1"
              image-source="logo.png"
              video-link="https://www.youtube.com/watch?v=YrxBCBibVo0"
              video-token="YrxBCBibVo0"
            />
          </template>

          <script setup lang="ts">
            import { YoutubeFacade } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),_[11]||=t(),e(d,{"props-data":g,"props-table-title":a.$t(`common.properties`,{value:`YoutubeFacadeProperties`})},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{g as default};