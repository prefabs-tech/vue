import{d as u,G as c,o as p,c as m,w as a,K as s,C as t,S as o,f as e,D as i,ap as r}from"./index-d658739c-0fec2303.js";import{_ as h}from"./UiPage.vue_vue_type_style_index_0_lang-fbdc470f.js";const _={class:"section-content"},f={class:"content"},g={class:"section-content"},C={class:"content"},v={class:"section-content"},$={class:"content"},b={class:"section-content"},k={class:"title"},z={class:"content"},w={class:"footer"},V=u({__name:"Index",setup(I){return(n,S)=>{const d=c("router-link"),l=c("SshPre");return p(),m(h,{title:n.$t("ui.card.title"),class:"demo"},{toolbar:a(()=>[s(d,{to:{name:"ui"},class:"back"},{default:a(()=>[t(o(n.$t("common.back")),1)]),_:1})]),default:a(()=>[t(),e("section",null,[e("h2",null,o(n.$t("ui.card.usage.basic")),1),t(),e("div",_,[s(l,{language:"html-vue"},{default:a(()=>[t(`
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
        `)]),_:1}),t(),s(i(r),null,{default:a(()=>[e("p",f,o(n.$t("ui.card.content")),1)]),_:1})])]),t(),e("section",null,[e("h2",null,o(n.$t("ui.card.usage.withTitle")),1),t(),e("div",g,[s(l,{language:"html-vue"},{default:a(()=>[t(`
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
        `)]),_:1}),t(),s(i(r),{title:n.$t("ui.card.headerContent")},{default:a(()=>[e("p",C,o(n.$t("ui.card.content")),1)]),_:1},8,["title"])])]),t(),e("section",null,[e("h2",null,o(n.$t("ui.card.usage.withI18n")),1),t(),e("div",v,[s(l,{language:"html-vue"},{default:a(()=>[t(`
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
        `)]),_:1}),t(),s(i(r),{title:n.$t("ui.card.headerContent")},{default:a(()=>[e("p",$,o(n.$t("ui.card.content")),1)]),_:1},8,["title"])])]),t(),e("section",null,[e("h2",null,o(n.$t("ui.card.usage.slots")),1),t(),e("div",b,[s(l,{language:"html-vue"},{default:a(()=>[t(`
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
        `)]),_:1}),t(),s(i(r),null,{header:a(()=>[e("h3",k,o(n.$t("ui.card.headerContent")),1)]),footer:a(()=>[e("div",w,o(n.$t("ui.card.footerContent")),1)]),default:a(()=>[t(),e("p",z,o(n.$t("ui.card.content")),1),t()]),_:1})])])]),_:1},8,["title"])}}});export{V as default};
