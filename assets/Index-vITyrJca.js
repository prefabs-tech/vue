import{d,s as c,j as p,o as m,w as a,C as t,e,t as s,g as o,u as l,G as r,D as h}from"./index-CVjUtB44.js";import{_ as f}from"./UiPage.vue_vue_type_style_index_0_lang-Sn8JrzpY.js";const _={class:"section-content"},g={class:"content"},C={class:"section-content"},v={class:"content"},$={class:"section-content"},b={class:"content"},z={class:"section-content"},k={class:"title"},w={class:"content"},I={class:"footer"},y=d({__name:"Index",setup(B){return(n,u)=>{const i=c("SshPre");return m(),p(f,{title:n.$t("ui.card.title"),class:"demo"},{toolbar:a(()=>[o(l(h),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:u[0]||(u[0]=N=>n.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[t(),e("section",null,[e("h2",null,s(n.$t("ui.card.usage.basic")),1),t(),e("div",_,[o(l(r),null,{default:a(()=>[e("p",g,s(n.$t("ui.card.content")),1)]),_:1}),t(),o(i,{language:"html-vue"},{default:a(()=>[t(`
          <template>
            <Card>
              <p>
                ...
              </p>
            </Card>
          </template>

          <script setup lang="ts">
          import { Card } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t()])]),t(),e("section",null,[e("h2",null,s(n.$t("ui.card.usage.withTitle")),1),t(),e("div",C,[o(l(r),{title:n.$t("ui.card.headerContent")},{default:a(()=>[e("p",v,s(n.$t("ui.card.content")),1)]),_:1},8,["title"]),t(),o(i,{language:"html-vue"},{default:a(()=>[t(`
          <template>
            <Card title="Lorem ipsum">
              <p>
                ...
              </p>
            </Card>
          </template>

          <script setup lang="ts">
          import { Card } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t()])]),t(),e("section",null,[e("h2",null,s(n.$t("ui.card.usage.withI18n")),1),t(),e("div",$,[o(l(r),{title:n.$t("ui.card.headerContent")},{default:a(()=>[e("p",b,s(n.$t("ui.card.content")),1)]),_:1},8,["title"]),t(),o(i,{language:"html-vue"},{default:a(()=>[t(`
          <template>
            <Card :title="t('ui.card.headerContent')">
              <p>
                {{ t('ui.card.content') }}
              </p>
            </Card>
          </template>

          <script setup lang="ts">
          import { Card } from "@dzangolab/vue3-ui";

          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),t()])]),t(),e("section",null,[e("h2",null,s(n.$t("ui.card.usage.slots")),1),t(),e("div",z,[o(l(r),null,{header:a(()=>[e("h3",k,s(n.$t("ui.card.headerContent")),1)]),footer:a(()=>[e("div",I,s(n.$t("ui.card.footerContent")),1)]),default:a(()=>[t(),e("p",w,s(n.$t("ui.card.content")),1),t()]),_:1}),t(),o(i,{language:"html-vue"},{default:a(()=>[t(`
          <template>
            <Card>
              <template #header>
                <h3>Lorem ipsum</h3>
              </template>
              <p>
                ...
              </p>
              <template #footer>
                <div class="footer">
                  ...
                </div>
              </template>
            </Card>
          </template>

          <script setup lang="ts">
          import { Card } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t()])])]),_:1},8,["title"])}}});export{y as default};
