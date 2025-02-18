import{d as u,J as c,o as p,c as m,w as a,K as s,D as l,ao as h,X as t,f as e,L as o,ae as r}from"./index-729398ab-f7824fe4.js";import{_ as f}from"./UiPage.vue_vue_type_style_index_0_lang-a00b0a2a.js";const _={class:"section-content"},g={class:"content"},C={class:"section-content"},v={class:"content"},$={class:"section-content"},b={class:"content"},z={class:"section-content"},k={class:"title"},w={class:"content"},I={class:"footer"},V=u({__name:"Index",setup(B){return(n,d)=>{const i=c("SshPre");return p(),m(f,{title:n.$t("ui.card.title"),class:"demo"},{toolbar:a(()=>[s(l(h),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:d[0]||(d[0]=L=>n.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[t(),e("section",null,[e("h2",null,o(n.$t("ui.card.usage.basic")),1),t(),e("div",_,[s(l(r),null,{default:a(()=>[e("p",g,o(n.$t("ui.card.content")),1)]),_:1}),t(),s(i,{language:"html-vue"},{default:a(()=>[t(`
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
        `)]),_:1}),t()])]),t(),e("section",null,[e("h2",null,o(n.$t("ui.card.usage.withTitle")),1),t(),e("div",C,[s(l(r),{title:n.$t("ui.card.headerContent")},{default:a(()=>[e("p",v,o(n.$t("ui.card.content")),1)]),_:1},8,["title"]),t(),s(i,{language:"html-vue"},{default:a(()=>[t(`
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
        `)]),_:1}),t()])]),t(),e("section",null,[e("h2",null,o(n.$t("ui.card.usage.withI18n")),1),t(),e("div",$,[s(l(r),{title:n.$t("ui.card.headerContent")},{default:a(()=>[e("p",b,o(n.$t("ui.card.content")),1)]),_:1},8,["title"]),t(),s(i,{language:"html-vue"},{default:a(()=>[t(`
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
        `)]),_:1}),t()])]),t(),e("section",null,[e("h2",null,o(n.$t("ui.card.usage.slots")),1),t(),e("div",z,[s(l(r),null,{header:a(()=>[e("h3",k,o(n.$t("ui.card.headerContent")),1)]),footer:a(()=>[e("div",I,o(n.$t("ui.card.footerContent")),1)]),default:a(()=>[t(),e("p",w,o(n.$t("ui.card.content")),1),t()]),_:1}),t(),s(i,{language:"html-vue"},{default:a(()=>[t(`
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
        `)]),_:1}),t()])])]),_:1},8,["title"])}}});export{V as default};
