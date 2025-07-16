import{d as b,I as f,e as P,o as v,i as n,C as e,f as i,g as a,u as o,a8 as p,t as u,v as g,a3 as r}from"./index-B3ldsAXT.js";import{_ as $}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CmUK5edk.js";import{_ as y}from"./UiPage.vue_vue_type_style_index_0_lang-CGZ_KFnb.js";import"./DzangolabVue3TanstackTable.es-gJoIB9kA.js";import"./DzangolabVue3Form.es-WWxDZ8iF.js";const T={class:"section-content"},B={class:"section-content"},h={class:"section-content"},C={class:"section-content"},z={class:"section-content"},E={class:"section-content"},S={class:"section-content"},W={class:"section-content"},I=b({__name:"Index",setup(k){const d=[{default:"false",description:"Aligns the content in the center.",prop:"centered",type:"Boolean"},{default:"false",description:"Displays a loading overlay within the page content.",prop:"loading",type:"Boolean"},{default:"-",description:"The subtitle text displayed below the title.",prop:"subTitle",type:"String"},{default:"-",description:"The main title text displayed at the top of the page.",prop:"title",type:"String"},{default:'"h1"',description:"HTML tag to be used for the title element.",prop:"titleElement",type:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"'},{default:"-",description:"Optional label displayed next to the title, typically rendered as a badge.",prop:"titleTag",type:"String"}],m=[{description:"Main content of the page.",name:"default"},{description:"Custom subtitle slot. Replaces the `subTitle` prop.",name:"subtitle"},{description:"Toolbar area on the top-right of the page header.",name:"toolbar"},{description:"Custom title tag slot. Replaces the `titleTag` prop.",name:"titleTag"}];return(l,t)=>{const s=f("SshPre");return v(),P(y,{"sub-title":l.$t("ui.page.subtitle"),title:l.$t("ui.page.title"),class:"demo"},{toolbar:n(()=>[a(o(g),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=w=>l.$router.push("/ui"))},null,8,["label"])]),default:n(()=>[t[17]||(t[17]=e()),i("section",null,[i("div",T,[a(o(p),{title:l.$t("ui.page.usage.basic"),"title-element":"h2"},{default:n(()=>[e(u(l.$t("ui.page.label.content")),1)]),_:1},8,["title"]),t[2]||(t[2]=e()),a(s,{language:"html-vue"},{default:n(()=>t[1]||(t[1]=[e(`
          <template>
            <Page title="Basic">Page content</Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[18]||(t[18]=e()),i("section",null,[i("div",B,[a(o(p),{title:l.$t("ui.page.usage.toolbar"),"title-element":"h2"},{toolbar:n(()=>[a(o(g),{label:l.$t("ui.page.label.edit")},null,8,["label"])]),default:n(()=>[e(u(l.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),t[4]||(t[4]=e()),a(s,{language:"html-vue"},{default:n(()=>t[3]||(t[3]=[e(`
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
        `)])),_:1})])]),t[19]||(t[19]=e()),i("section",null,[i("div",h,[a(o(p),{title:l.$t("ui.page.usage.centerAligned"),centered:"","title-element":"h2"},{toolbar:n(()=>[a(o(g),{label:l.$t("ui.page.label.edit")},null,8,["label"])]),default:n(()=>[e(u(l.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),t[6]||(t[6]=e()),a(s,{language:"html-vue"},{default:n(()=>t[5]||(t[5]=[e(`
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
        `)])),_:1})])]),t[20]||(t[20]=e()),i("section",null,[i("div",C,[a(o(p),{"sub-title":l.$t("ui.page.label.subtitle"),title:l.$t("ui.page.usage.subtitle"),"title-element":"h2"},{default:n(()=>[e(u(l.$t("ui.page.label.content")),1)]),_:1},8,["sub-title","title"]),t[8]||(t[8]=e()),a(s,{language:"html-vue"},{default:n(()=>t[7]||(t[7]=[e(`
          <template>
            <Page sub-title="Page subtitle" title="With subtitle">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[21]||(t[21]=e()),i("section",null,[i("div",z,[a(o(p),{title:l.$t("ui.page.usage.subtitleSlot"),"title-element":"h2"},{subtitle:n(()=>[a(o(r),{label:l.$t("ui.page.label.subtitle")},null,8,["label"])]),default:n(()=>[e(u(l.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),t[10]||(t[10]=e()),a(s,{language:"html-vue"},{default:n(()=>t[9]||(t[9]=[e(`
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
        `)])),_:1})])]),t[22]||(t[22]=e()),i("section",null,[i("div",E,[a(o(p),{title:l.$t("ui.page.usage.titleTag"),"title-tag":l.$t("ui.page.label.titleTag"),"title-element":"h2"},{default:n(()=>[e(u(l.$t("ui.page.label.content")),1)]),_:1},8,["title","title-tag"]),t[12]||(t[12]=e()),a(s,{language:"html-vue"},{default:n(()=>t[11]||(t[11]=[e(`
          <template>
            <Page title="With title tag" title-tag="Heading tag">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[23]||(t[23]=e()),i("section",null,[i("div",S,[a(o(p),{title:l.$t("ui.page.usage.titleTagSlot"),"title-element":"h2"},{titleTag:n(()=>[a(o(r),{label:l.$t("ui.page.label.titleTag"),severity:"success"},null,8,["label"])]),default:n(()=>[e(u(l.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),t[14]||(t[14]=e()),a(s,{language:"html-vue"},{default:n(()=>t[13]||(t[13]=[e(`
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
        `)])),_:1})])]),t[24]||(t[24]=e()),i("section",null,[i("div",W,[a(o(p),{title:l.$t("ui.page.usage.titleElement"),"title-element":"h3"},{default:n(()=>[e(u(l.$t("ui.page.label.content")),1)]),_:1},8,["title"]),t[16]||(t[16]=e()),a(s,{language:"html-vue"},{default:n(()=>t[15]||(t[15]=[e(`
          <template>
            <Page title="With title element" title-element="h3">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[25]||(t[25]=e()),a($,{"props-data":d,"props-table-title":l.$t("common.properties",{value:"PageProperties"}),"slots-data":m},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{I as default};
