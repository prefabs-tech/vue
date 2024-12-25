import{d as h,K as u,o as g,c as v,w as o,L as a,C as t,M as n,f as e,E as s,aw as r}from"./index-137faed7-295202b8.js";import{_ as w}from"./UiPage.vue_vue_type_style_index_0_lang-2b84fc9e.js";const _={class:"section-content"},f={class:"content-wrapper"},b={class:"section-content"},y={class:"content-wrapper vertical"},z=h({__name:"Index",setup(x){const c="Programming isn’t about what you know; it’s about what you can figure out.",l="Code is read much more often than it is written.",d="The most dangerous phrase in the language is, ‘We’ve always done it this way.'";return(i,k)=>{const m=u("router-link"),p=u("SshPre");return g(),v(w,{title:i.$t("ui.divider.title"),class:"demo"},{toolbar:o(()=>[a(m,{to:{name:"ui"},class:"back"},{default:o(()=>[t(n(i.$t("common.back")),1)]),_:1})]),default:o(()=>[t(),e("section",null,[e("h2",null,n(i.$t("ui.divider.usage.horizontal")),1),t(),e("div",_,[a(p,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),e("div",f,[e("p",{class:"content-item"},n(c)),t(),a(s(r)),t(),e("p",{class:"content-item"},n(l)),t(),a(s(r),{orientation:"horizontal"}),t(),e("p",{class:"content-item"},n(d))])])]),t(),e("section",null,[e("h2",null,n(i.$t("ui.divider.usage.vertical")),1),t(),e("div",b,[a(p,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),e("div",y,[e("p",{class:"content-item"},n(c)),t(),a(s(r),{orientation:"vertical"}),t(),e("p",{class:"content-item"},n(l)),t(),a(s(r),{orientation:"vertical"}),t(),e("p",{class:"content-item"},n(d))])])])]),_:1},8,["title"])}}});export{z as default};
