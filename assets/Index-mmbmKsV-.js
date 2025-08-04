import{d as b,H as f,e as P,o as v,j as n,B as e,f as i,h as a,u as s,a8 as p,t as u,v as g,a3 as r}from"./index-7DYOETMS.js";import{_ as $}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CbNeRugZ.js";import{_ as h}from"./UiPage.vue_vue_type_style_index_0_lang-ht0CzUMP.js";import"./PrefabsTechVue3TanstackTable.es-BQRYxunA.js";import"./PrefabsTechVue3Form.es-DkZwwYlu.js";const y={class:"section-content"},T={class:"section-content"},B={class:"section-content"},C={class:"section-content"},E={class:"section-content"},S={class:"section-content"},W={class:"section-content"},c={class:"section-content"},M=b({__name:"Index",setup(k){const m=[{default:"false",description:"Aligns the content in the center.",prop:"centered",type:"Boolean"},{default:"false",description:"Displays a loading overlay within the page content.",prop:"loading",type:"Boolean"},{default:"-",description:"The subtitle text displayed below the title.",prop:"subTitle",type:"String"},{default:"-",description:"The main title text displayed at the top of the page.",prop:"title",type:"String"},{default:'"h1"',description:"HTML tag to be used for the title element.",prop:"titleElement",type:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"'},{default:"-",description:"Optional label displayed next to the title, typically rendered as a badge.",prop:"titleTag",type:"String"}],d=[{description:"Main content of the page.",name:"default"},{description:"Custom subtitle slot. Replaces the `subTitle` prop.",name:"subtitle"},{description:"Toolbar area on the top-right of the page header.",name:"toolbar"},{description:"Custom title tag slot. Replaces the `titleTag` prop.",name:"titleTag"}];return(l,t)=>{const o=f("SshPre");return v(),P(h,{"sub-title":l.$t("ui.page.subtitle"),title:l.$t("ui.page.title"),class:"demo"},{toolbar:n(()=>[a(s(g),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=w=>l.$router.push("/ui"))},null,8,["label"])]),default:n(()=>[t[17]||(t[17]=e()),i("section",null,[i("div",y,[a(s(p),{title:l.$t("ui.page.usage.basic"),"title-element":"h2"},{default:n(()=>[e(u(l.$t("ui.page.label.content")),1)]),_:1},8,["title"]),t[2]||(t[2]=e()),a(o,{language:"html-vue"},{default:n(()=>t[1]||(t[1]=[e(`
          <template>
            <Page title="Basic">Page content</Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[18]||(t[18]=e()),i("section",null,[i("div",T,[a(s(p),{title:l.$t("ui.page.usage.toolbar"),"title-element":"h2"},{toolbar:n(()=>[a(s(g),{label:l.$t("ui.page.label.edit")},null,8,["label"])]),default:n(()=>[e(u(l.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),t[4]||(t[4]=e()),a(o,{language:"html-vue"},{default:n(()=>t[3]||(t[3]=[e(`
          <template>
            <Page title="With toolbar">
              Page content

              <template #toolbar>
                <ButtonElement label="Edit" />
              </template>
            </Page>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[19]||(t[19]=e()),i("section",null,[i("div",B,[a(s(p),{title:l.$t("ui.page.usage.centerAligned"),centered:"","title-element":"h2"},{toolbar:n(()=>[a(s(g),{label:l.$t("ui.page.label.edit")},null,8,["label"])]),default:n(()=>[e(u(l.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),t[6]||(t[6]=e()),a(o,{language:"html-vue"},{default:n(()=>t[5]||(t[5]=[e(`
          <template>
            <Page title="With center aligned contents" centered>
              Page content

              <template #toolbar>
                <ButtonElement label="Edit" />
              </template>
            </Page>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Page } from "@prefabs.tech/vue3-ui";
          <\/script>

          <style lang="css">
          .page[data-centered="true"] {
            --page-max-width: 400px;
          }
          </style>
        `)])),_:1})])]),t[20]||(t[20]=e()),i("section",null,[i("div",C,[a(s(p),{"sub-title":l.$t("ui.page.label.subtitle"),title:l.$t("ui.page.usage.subtitle"),"title-element":"h2"},{default:n(()=>[e(u(l.$t("ui.page.label.content")),1)]),_:1},8,["sub-title","title"]),t[8]||(t[8]=e()),a(o,{language:"html-vue"},{default:n(()=>t[7]||(t[7]=[e(`
          <template>
            <Page sub-title="Page subtitle" title="With subtitle">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[21]||(t[21]=e()),i("section",null,[i("div",E,[a(s(p),{title:l.$t("ui.page.usage.subtitleSlot"),"title-element":"h2"},{subtitle:n(()=>[a(s(r),{label:l.$t("ui.page.label.subtitle")},null,8,["label"])]),default:n(()=>[e(u(l.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),t[10]||(t[10]=e()),a(o,{language:"html-vue"},{default:n(()=>t[9]||(t[9]=[e(`
          <template>
            <Page title="With subtitle slot">
              Page content

              <template #subtitle>
                <BadgeComponent label="Page subtitle" />
              </template>
            </Page>
          </template>

          <script setup lang="ts">
          import { BadgeComponent, Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[22]||(t[22]=e()),i("section",null,[i("div",S,[a(s(p),{title:l.$t("ui.page.usage.titleTag"),"title-tag":l.$t("ui.page.label.titleTag"),"title-element":"h2"},{default:n(()=>[e(u(l.$t("ui.page.label.content")),1)]),_:1},8,["title","title-tag"]),t[12]||(t[12]=e()),a(o,{language:"html-vue"},{default:n(()=>t[11]||(t[11]=[e(`
          <template>
            <Page title="With title tag" title-tag="Heading tag">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[23]||(t[23]=e()),i("section",null,[i("div",W,[a(s(p),{title:l.$t("ui.page.usage.titleTagSlot"),"title-element":"h2"},{titleTag:n(()=>[a(s(r),{label:l.$t("ui.page.label.titleTag"),severity:"success"},null,8,["label"])]),default:n(()=>[e(u(l.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),t[14]||(t[14]=e()),a(o,{language:"html-vue"},{default:n(()=>t[13]||(t[13]=[e(`
          <template>
            <Page title="With title tag slot">
              Page content

              <template #titleTag>
                <BadgeComponent label="Heading tag" severity="success" />
              </template>
            </Page>
          </template>

          <script setup lang="ts">
          import { BadgeComponent, Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[24]||(t[24]=e()),i("section",null,[i("div",c,[a(s(p),{title:l.$t("ui.page.usage.titleElement"),"title-element":"h3"},{default:n(()=>[e(u(l.$t("ui.page.label.content")),1)]),_:1},8,["title"]),t[16]||(t[16]=e()),a(o,{language:"html-vue"},{default:n(()=>t[15]||(t[15]=[e(`
          <template>
            <Page title="With title element" title-element="h3">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[25]||(t[25]=e()),a($,{"props-data":m,"props-table-title":l.$t("common.properties",{value:"PageProperties"}),"slots-data":d},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{M as default};
