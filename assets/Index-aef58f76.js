import{d as c,J as r,o as d,c as b,w as n,K as l,D as i,ao as g,W as e,f as a,aC as o,L as u,at as m}from"./index-729398ab-97e0bd19.js";import{_ as h}from"./UiPage.vue_vue_type_style_index_0_lang-7e455287.js";const P={class:"section-content"},f={class:"section-content"},v={class:"section-content"},$={class:"section-content"},_={class:"section-content"},B={class:"section-content"},z={class:"section-content"},C={class:"section-content"},S=c({__name:"Index",setup(y){return(t,p)=>{const s=r("SshPre");return d(),b(h,{title:t.$t("ui.page.title"),class:"demo"},{toolbar:n(()=>[l(i(g),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:p[0]||(p[0]=W=>t.$router.push("/ui"))},null,8,["label"])]),default:n(()=>[e(),a("section",null,[a("div",P,[l(i(o),{title:t.$t("ui.page.usage.basic"),"title-element":"h2"},{default:n(()=>[e(u(t.$t("ui.page.label.content")),1)]),_:1},8,["title"]),e(),l(s,{language:"html-vue"},{default:n(()=>[e(`
          <template>
            <Page title="Basic">Page content</Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("div",f,[l(i(o),{title:t.$t("ui.page.usage.toolbar"),"title-element":"h2"},{toolbar:n(()=>[l(i(g),{label:t.$t("ui.page.label.edit")},null,8,["label"])]),default:n(()=>[e(u(t.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e(),l(s,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("div",v,[l(i(o),{title:t.$t("ui.page.usage.centerAligned"),centered:"","title-element":"h2"},{toolbar:n(()=>[l(i(g),{label:t.$t("ui.page.label.edit")},null,8,["label"])]),default:n(()=>[e(u(t.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e(),l(s,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("div",$,[l(i(o),{"sub-title":t.$t("ui.page.label.subtitle"),title:t.$t("ui.page.usage.subtitle"),"title-element":"h2"},{default:n(()=>[e(u(t.$t("ui.page.label.content")),1)]),_:1},8,["sub-title","title"]),e(),l(s,{language:"html-vue"},{default:n(()=>[e(`
          <template>
            <Page sub-title="Page subtitle" title="With subtitle">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("div",_,[l(i(o),{title:t.$t("ui.page.usage.subtitleSlot"),"title-element":"h2"},{subtitle:n(()=>[l(i(m),{label:t.$t("ui.page.label.subtitle")},null,8,["label"])]),default:n(()=>[e(u(t.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e(),l(s,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("div",B,[l(i(o),{title:t.$t("ui.page.usage.titleTag"),"title-tag":t.$t("ui.page.label.titleTag"),"title-element":"h2"},{default:n(()=>[e(u(t.$t("ui.page.label.content")),1)]),_:1},8,["title","title-tag"]),e(),l(s,{language:"html-vue"},{default:n(()=>[e(`
          <template>
            <Page title="With title tag" title-tag="Heading tag">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("div",z,[l(i(o),{title:t.$t("ui.page.usage.titleTagSlot"),"title-element":"h2"},{titleTag:n(()=>[l(i(m),{label:t.$t("ui.page.label.titleTag"),severity:"success"},null,8,["label"])]),default:n(()=>[e(u(t.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e(),l(s,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("div",C,[l(i(o),{title:t.$t("ui.page.usage.titleElement"),"title-element":"h3"},{default:n(()=>[e(u(t.$t("ui.page.label.content")),1)]),_:1},8,["title"]),e(),l(s,{language:"html-vue"},{default:n(()=>[e(`
          <template>
            <Page title="With title element" title-element="h3">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{S as default};
