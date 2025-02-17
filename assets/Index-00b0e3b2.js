import{d as m,J as h,o as v,c as g,w as s,K as n,D as o,ao as w,W as e,f as t,L as i,ax as r}from"./index-729398ab-b294403d.js";import{_ as f}from"./UiPage.vue_vue_type_style_index_0_lang-ae0d4afa.js";const _={class:"section-content"},b={class:"content-wrapper"},y={class:"section-content"},x={class:"content-wrapper vertical"},z=m({__name:"Index",setup(D){const l="Programming isn’t about what you know; it’s about what you can figure out.",c="Code is read much more often than it is written.",d="The most dangerous phrase in the language is, ‘We’ve always done it this way.'";return(a,p)=>{const u=h("SshPre");return v(),g(f,{title:a.$t("ui.divider.title"),class:"demo"},{toolbar:s(()=>[n(o(w),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:p[0]||(p[0]=k=>a.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[e(),t("section",null,[t("h2",null,i(a.$t("ui.divider.usage.horizontal")),1),e(),t("div",_,[t("div",b,[t("p",{class:"content-item"},i(l)),e(),n(o(r)),e(),t("p",{class:"content-item"},i(c)),e(),n(o(r),{orientation:"horizontal"}),e(),t("p",{class:"content-item"},i(d))]),e(),n(u,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <div class="content-wrapper">
              <p class="content-item">
                Programming isn’t about what you know; it’s about what you can figure out.
              </p>
              <Divider />
              <p class="content-item">
                Code is read much more often than it is written.
              </p>
              <Divider orientation="horizontal" />
              <p class="content-item">
                The most dangerous phrase in the language is, ‘We’ve always done it this way.'
              </p>
            </div>
          </template>

          <script setup lang="ts">
          import { Divider } from "@dzangolab/vue3-ui";
          <\/script>

          <style lang="css">
          .content-wrapper {
            border: 1px solid #b5b5b5;
            border-radius: 0.3rem;
            display: flex;
            flex-direction: column;
            padding: 1rem 0.75rem;
          }
          </style>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,i(a.$t("ui.divider.usage.vertical")),1),e(),t("div",y,[t("div",x,[t("p",{class:"content-item"},i(l)),e(),n(o(r),{orientation:"vertical"}),e(),t("p",{class:"content-item"},i(c)),e(),n(o(r),{orientation:"vertical"}),e(),t("p",{class:"content-item"},i(d))]),e(),n(u,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <div class="content-wrapper vertical">
              <p class="content-item">
                Programming isn’t about what you know; it’s about what you can figure out.
              </p>
              <Divider orientation="vertical" />
              <p class="content-item">
                Code is read much more often than it is written.
              </p>
              <Divider orientation="vertical" />
              <p class="content-item">
                The most dangerous phrase in the language is, ‘We’ve always done it this way.'
              </p>
            </div>
          </template>

          <script setup lang="ts">
          import { Divider } from "@dzangolab/vue3-ui";
          <\/script>

          <style lang="css">
          .content-wrapper {
            border: 1px solid #b5b5b5;
            border-radius: 0.3rem;
            display: flex;
            flex-direction: column;
            padding: 1rem 0.75rem;
          }

          .content-wrapper > .content-item {
            width: 100%;
          }

          .content-wrapper.vertical {
            flex-direction: row;
          }
          </style>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{z as default};
