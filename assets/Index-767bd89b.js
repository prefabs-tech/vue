import{d as r,J as g,o as d,c as b,w as n,K as l,W as e,L as s,f as a,D as i,aC as u,aq as p,at as c}from"./index-729398ab-c88618b2.js";import{_ as h}from"./UiPage.vue_vue_type_style_index_0_lang-c38888ae.js";const P={class:"section-content"},f={class:"section-content"},_={class:"section-content"},v={class:"section-content"},$={class:"section-content"},B={class:"section-content"},z={class:"section-content"},C={class:"section-content"},k=r({__name:"Index",setup(W){return(t,y)=>{const m=g("router-link"),o=g("SshPre");return d(),b(h,{title:t.$t("ui.page.title"),class:"demo"},{toolbar:n(()=>[l(m,{to:{name:"ui"},class:"back"},{default:n(()=>[e(s(t.$t("common.back")),1)]),_:1})]),default:n(()=>[e(),a("section",null,[a("div",P,[l(i(u),{title:t.$t("ui.page.usage.basic"),"title-element":"h2"},{default:n(()=>[e(s(t.$t("ui.page.label.content")),1)]),_:1},8,["title"]),e(),l(o,{language:"html-vue"},{default:n(()=>[e(`
          <template>
            <Page title="Basic">Page content</Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("div",f,[l(i(u),{title:t.$t("ui.page.usage.toolbar"),"title-element":"h2"},{toolbar:n(()=>[l(i(p),{label:t.$t("ui.page.label.edit")},null,8,["label"])]),default:n(()=>[e(s(t.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e(),l(o,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("div",_,[l(i(u),{title:t.$t("ui.page.usage.centerAligned"),centered:"","title-element":"h2"},{toolbar:n(()=>[l(i(p),{label:t.$t("ui.page.label.edit")},null,8,["label"])]),default:n(()=>[e(s(t.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e(),l(o,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("div",v,[l(i(u),{"sub-title":t.$t("ui.page.label.subtitle"),title:t.$t("ui.page.usage.subtitle"),"title-element":"h2"},{default:n(()=>[e(s(t.$t("ui.page.label.content")),1)]),_:1},8,["sub-title","title"]),e(),l(o,{language:"html-vue"},{default:n(()=>[e(`
          <template>
            <Page sub-title="Page subtitle" title="With subtitle">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("div",$,[l(i(u),{title:t.$t("ui.page.usage.subtitleSlot"),"title-element":"h2"},{subtitle:n(()=>[l(i(c),{label:t.$t("ui.page.label.subtitle")},null,8,["label"])]),default:n(()=>[e(s(t.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e(),l(o,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("div",B,[l(i(u),{title:t.$t("ui.page.usage.titleTag"),"title-tag":t.$t("ui.page.label.titleTag"),"title-element":"h2"},{default:n(()=>[e(s(t.$t("ui.page.label.content")),1)]),_:1},8,["title","title-tag"]),e(),l(o,{language:"html-vue"},{default:n(()=>[e(`
          <template>
            <Page title="With title tag" title-tag="Heading tag">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("div",z,[l(i(u),{title:t.$t("ui.page.usage.titleTagSlot"),"title-element":"h2"},{titleTag:n(()=>[l(i(c),{label:t.$t("ui.page.label.titleTag"),severity:"success"},null,8,["label"])]),default:n(()=>[e(s(t.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e(),l(o,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("div",C,[l(i(u),{title:t.$t("ui.page.usage.titleElement"),"title-element":"h3"},{default:n(()=>[e(s(t.$t("ui.page.label.content")),1)]),_:1},8,["title"]),e(),l(o,{language:"html-vue"},{default:n(()=>[e(`
          <template>
            <Page title="With title element" title-element="h3">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{k as default};
