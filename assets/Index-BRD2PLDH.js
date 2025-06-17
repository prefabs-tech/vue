import{d,K as p,f as m,o as f,i as s,E as n,g as e,t as l,h as i,u as a,O as u,x as g}from"./index-ozhbLx6f.js";import{_ as C}from"./UiPage.vue_vue_type_style_index_0_lang-B2jxD1Uh.js";const v={class:"section-content"},$={class:"content"},b={class:"section-content"},z={class:"content"},k={class:"section-content"},I={class:"content"},w={class:"section-content"},B={class:"title"},N={class:"content"},S={class:"footer"},P=d({__name:"Index",setup(V){return(o,t)=>{const r=p("SshPre");return f(),m(C,{title:o.$t("ui.card.title"),class:"demo"},{toolbar:s(()=>[i(a(g),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=y=>o.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[t[15]||(t[15]=n()),e("section",null,[e("h2",null,l(o.$t("ui.card.usage.basic")),1),t[3]||(t[3]=n()),e("div",v,[i(a(u),null,{default:s(()=>[e("p",$,l(o.$t("ui.card.content")),1)]),_:1}),t[2]||(t[2]=n()),i(r,{language:"html-vue"},{default:s(()=>t[1]||(t[1]=[n(`
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
        `)])),_:1})])]),t[16]||(t[16]=n()),e("section",null,[e("h2",null,l(o.$t("ui.card.usage.withTitle")),1),t[6]||(t[6]=n()),e("div",b,[i(a(u),{title:o.$t("ui.card.headerContent")},{default:s(()=>[e("p",z,l(o.$t("ui.card.content")),1)]),_:1},8,["title"]),t[5]||(t[5]=n()),i(r,{language:"html-vue"},{default:s(()=>t[4]||(t[4]=[n(`
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
        `)])),_:1})])]),t[17]||(t[17]=n()),e("section",null,[e("h2",null,l(o.$t("ui.card.usage.withI18n")),1),t[9]||(t[9]=n()),e("div",k,[i(a(u),{title:o.$t("ui.card.headerContent")},{default:s(()=>[e("p",I,l(o.$t("ui.card.content")),1)]),_:1},8,["title"]),t[8]||(t[8]=n()),i(r,{language:"html-vue"},{default:s(()=>t[7]||(t[7]=[n(`
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
        `)])),_:1})])]),t[18]||(t[18]=n()),e("section",null,[e("h2",null,l(o.$t("ui.card.usage.slots")),1),t[14]||(t[14]=n()),e("div",w,[i(a(u),null,{header:s(()=>[e("h3",B,l(o.$t("ui.card.headerContent")),1)]),footer:s(()=>[e("div",S,l(o.$t("ui.card.footerContent")),1)]),default:s(()=>[t[10]||(t[10]=n()),e("p",N,l(o.$t("ui.card.content")),1),t[11]||(t[11]=n())]),_:1}),t[13]||(t[13]=n()),i(r,{language:"html-vue"},{default:s(()=>t[12]||(t[12]=[n(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{P as default};
