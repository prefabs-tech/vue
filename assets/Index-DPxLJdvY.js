import{d,J as b,e as m,o as v,j as n,C as e,f as i,h as a,t as l,u,aa as r,v as f}from"./index-Ds2msYCw.js";import{_ as c}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-B0kn2xaD.js";import{_ as g}from"./UiPage.vue_vue_type_style_index_0_lang-AIG7okUj.js";import"./PrefabsTechVue3TanstackTable.es-P3WI3auJ.js";import"./PrefabsTechVue3Form.es-Bvobumkz.js";const w={class:"section-content"},k={class:"section-content"},y={class:"section-content"},P=d({__name:"Index",setup(B){const p=[{default:"-",description:"Alternative text for the video thumbnail, used for accessibility and the iframe title.",prop:"alt",type:"String"},{default:'"16/9"',description:"Specifies the aspect ratio for the video container (e.g., '16/9', '3/4').",prop:"aspectRatio",type:"String"},{default:"-",description:"Custom thumbnail image for the youtube video.",prop:"imageSource",type:"String"},{default:"-",description:"YouTube video link.(required)",prop:"videoLink",type:"String"},{default:"-",description:"The YouTube video token, used to generate the embed URL and default thumbnail.(required)",prop:"videoToken",type:"String"}];return(o,t)=>{const s=b("SshPre");return v(),m(g,{"sub-title":o.$t("ui.youtubeFacade.subtitle"),title:o.$t("ui.youtubeFacade.title"),class:"demo-youtube-facade"},{toolbar:n(()=>[a(u(f),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=F=>o.$router.push("/ui"))},null,8,["label"])]),default:n(()=>[t[10]||(t[10]=e()),i("section",null,[i("h2",null,l(o.$t("ui.youtubeFacade.usage.basic")),1),t[3]||(t[3]=e()),i("div",w,[a(u(r),{alt:o.$t("ui.youtubeFacade.alternativeMessage"),"video-link":"https://www.youtube.com/watch?v=YrxBCBibVo0","video-token":"YrxBCBibVo0"},null,8,["alt"]),t[2]||(t[2]=e()),a(s,{language:"html-vue"},{default:n(()=>t[1]||(t[1]=[e(`
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
        `)])),_:1})])]),t[11]||(t[11]=e()),i("section",null,[i("h2",null,l(o.$t("ui.youtubeFacade.usage.aspectRatio")),1),t[6]||(t[6]=e()),i("div",k,[a(u(r),{alt:o.$t("ui.youtubeFacade.alternativeMessage"),"aspect-ratio":"16/10","video-link":"https://www.youtube.com/watch?v=F7PLPJqVotk","video-token":"F7PLPJqVotk"},null,8,["alt"]),t[5]||(t[5]=e()),a(s,{language:"html-vue"},{default:n(()=>t[4]||(t[4]=[e(`
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
        `)])),_:1})])]),t[12]||(t[12]=e()),i("section",null,[i("h2",null,l(o.$t("ui.youtubeFacade.usage.customThumbnail")),1),t[9]||(t[9]=e()),i("div",y,[a(u(r),{alt:o.$t("ui.youtubeFacade.alternativeMessage"),"aspect-ratio":"1.95/1","image-source":"logo.png","video-link":"https://www.youtube.com/watch?v=YrxBCBibVo0","video-token":"YrxBCBibVo0"},null,8,["alt"]),t[8]||(t[8]=e()),a(s,{language:"html-vue"},{default:n(()=>t[7]||(t[7]=[e(`
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
        `)])),_:1})])]),t[13]||(t[13]=e()),a(c,{"props-data":p,"props-table-title":o.$t("common.properties",{value:"YoutubeFacadeProperties"})},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{P as default};
