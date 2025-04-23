import{d as r,H as d,e as b,o as P,h as l,D as e,f as i,g as a,u as s,a6 as u,t as g,q as p,a0 as m}from"./index-0TmW327G.js";import{_ as f}from"./UiPage.vue_vue_type_style_index_0_lang-DVRlBSC9.js";const v={class:"section-content"},$={class:"section-content"},B={class:"section-content"},z={class:"section-content"},C={class:"section-content"},E={class:"section-content"},T={class:"section-content"},W={class:"section-content"},N=r({__name:"Index",setup(y){return(n,t)=>{const o=d("SshPre");return P(),b(f,{title:n.$t("ui.page.title"),class:"demo"},{toolbar:l(()=>[a(s(p),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=S=>n.$router.push("/ui"))},null,8,["label"])]),default:l(()=>[t[17]||(t[17]=e()),i("section",null,[i("div",v,[a(s(u),{title:n.$t("ui.page.usage.basic"),"title-element":"h2"},{default:l(()=>[e(g(n.$t("ui.page.label.content")),1)]),_:1},8,["title"]),t[2]||(t[2]=e()),a(o,{language:"html-vue"},{default:l(()=>t[1]||(t[1]=[e(`
          <template>
            <Page title="Basic">Page content</Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[18]||(t[18]=e()),i("section",null,[i("div",$,[a(s(u),{title:n.$t("ui.page.usage.toolbar"),"title-element":"h2"},{toolbar:l(()=>[a(s(p),{label:n.$t("ui.page.label.edit")},null,8,["label"])]),default:l(()=>[e(g(n.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),t[4]||(t[4]=e()),a(o,{language:"html-vue"},{default:l(()=>t[3]||(t[3]=[e(`
          <template>
            <Page title="With toolbar">
              Page content

              <template #toolbar>
                <ButtonElement label="Edit" />
              </template>
            </Page>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[19]||(t[19]=e()),i("section",null,[i("div",B,[a(s(u),{title:n.$t("ui.page.usage.centerAligned"),centered:"","title-element":"h2"},{toolbar:l(()=>[a(s(p),{label:n.$t("ui.page.label.edit")},null,8,["label"])]),default:l(()=>[e(g(n.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),t[6]||(t[6]=e()),a(o,{language:"html-vue"},{default:l(()=>t[5]||(t[5]=[e(`
          <template>
            <Page title="With center aligned contents" centered>
              Page content

              <template #toolbar>
                <ButtonElement label="Edit" />
              </template>
            </Page>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Page } from "@dzangolab/vue3-ui";
          <\/script>

          <style lang="css">
          .page[data-centered="true"] {
            --page-max-width: 400px;
          }
          </style>
        `)])),_:1})])]),t[20]||(t[20]=e()),i("section",null,[i("div",z,[a(s(u),{"sub-title":n.$t("ui.page.label.subtitle"),title:n.$t("ui.page.usage.subtitle"),"title-element":"h2"},{default:l(()=>[e(g(n.$t("ui.page.label.content")),1)]),_:1},8,["sub-title","title"]),t[8]||(t[8]=e()),a(o,{language:"html-vue"},{default:l(()=>t[7]||(t[7]=[e(`
          <template>
            <Page sub-title="Page subtitle" title="With subtitle">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[21]||(t[21]=e()),i("section",null,[i("div",C,[a(s(u),{title:n.$t("ui.page.usage.subtitleSlot"),"title-element":"h2"},{subtitle:l(()=>[a(s(m),{label:n.$t("ui.page.label.subtitle")},null,8,["label"])]),default:l(()=>[e(g(n.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),t[10]||(t[10]=e()),a(o,{language:"html-vue"},{default:l(()=>t[9]||(t[9]=[e(`
          <template>
            <Page title="With subtitle slot">
              Page content

              <template #subtitle>
                <BadgeComponent label="Page subtitle" />
              </template>
            </Page>
          </template>

          <script setup lang="ts">
          import { BadgeComponent, Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[22]||(t[22]=e()),i("section",null,[i("div",E,[a(s(u),{title:n.$t("ui.page.usage.titleTag"),"title-tag":n.$t("ui.page.label.titleTag"),"title-element":"h2"},{default:l(()=>[e(g(n.$t("ui.page.label.content")),1)]),_:1},8,["title","title-tag"]),t[12]||(t[12]=e()),a(o,{language:"html-vue"},{default:l(()=>t[11]||(t[11]=[e(`
          <template>
            <Page title="With title tag" title-tag="Heading tag">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[23]||(t[23]=e()),i("section",null,[i("div",T,[a(s(u),{title:n.$t("ui.page.usage.titleTagSlot"),"title-element":"h2"},{titleTag:l(()=>[a(s(m),{label:n.$t("ui.page.label.titleTag"),severity:"success"},null,8,["label"])]),default:l(()=>[e(g(n.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),t[14]||(t[14]=e()),a(o,{language:"html-vue"},{default:l(()=>t[13]||(t[13]=[e(`
          <template>
            <Page title="With title tag slot">
              Page content

              <template #titleTag>
                <BadgeComponent label="Heading tag" severity="success" />
              </template>
            </Page>
          </template>

          <script setup lang="ts">
          import { BadgeComponent, Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[24]||(t[24]=e()),i("section",null,[i("div",W,[a(s(u),{title:n.$t("ui.page.usage.titleElement"),"title-element":"h3"},{default:l(()=>[e(g(n.$t("ui.page.label.content")),1)]),_:1},8,["title"]),t[16]||(t[16]=e()),a(o,{language:"html-vue"},{default:l(()=>t[15]||(t[15]=[e(`
          <template>
            <Page title="With title element" title-element="h3">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{N as default};
