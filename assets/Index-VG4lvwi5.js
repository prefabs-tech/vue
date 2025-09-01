import{d as m,J as f,e as v,o as C,j as s,C as e,f as n,h as r,t as i,u as l,O as d,v as $}from"./index-DcjgAK9n.js";import{_ as g}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CdLcuhE8.js";import{_ as b}from"./UiPage.vue_vue_type_style_index_0_lang-sf8Em065.js";import"./PrefabsTechVue3TanstackTable.es-D9QS2TX2.js";import"./PrefabsTechVue3Form.es-Dm1vBmAc.js";const c={class:"section-content"},h={class:"content"},S={class:"section-content"},y={class:"content"},I={class:"section-content"},k={class:"content"},D={class:"section-content"},w={class:"title"},B={class:"content"},N={class:"footer"},J=m({__name:"Index",setup(P){const p=[{default:"-",description:"Title text displayed in the card header. Ignored if header slot is provided.",prop:"title",type:"String"}],u=[{description:"Default slot for the main body content of the card.",name:"default"},{description:"Slot for custom footer content, rendered at the bottom of the card.",name:"footer"},{description:"Slot for custom header content, replaces the default title if provided.",name:"header"}];return(o,t)=>{const a=f("SshPre");return C(),v(b,{"sub-title":o.$t("ui.card.subtitle"),title:o.$t("ui.card.title"),class:"demo"},{toolbar:s(()=>[r(l($),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=T=>o.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[t[15]||(t[15]=e()),n("section",null,[n("h2",null,i(o.$t("ui.card.usage.basic")),1),t[3]||(t[3]=e()),n("div",c,[r(l(d),null,{default:s(()=>[n("p",h,i(o.$t("ui.card.content")),1)]),_:1}),t[2]||(t[2]=e()),r(a,{language:"html-vue"},{default:s(()=>t[1]||(t[1]=[e(`
          <template>
            <Card>
              <p>
                ...
              </p>
            </Card>
          </template>

          <script setup lang="ts">
          import { Card } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[16]||(t[16]=e()),n("section",null,[n("h2",null,i(o.$t("ui.card.usage.withTitle")),1),t[6]||(t[6]=e()),n("div",S,[r(l(d),{title:o.$t("ui.card.headerContent")},{default:s(()=>[n("p",y,i(o.$t("ui.card.content")),1)]),_:1},8,["title"]),t[5]||(t[5]=e()),r(a,{language:"html-vue"},{default:s(()=>t[4]||(t[4]=[e(`
          <template>
            <Card title="Lorem ipsum">
              <p>
                ...
              </p>
            </Card>
          </template>

          <script setup lang="ts">
          import { Card } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[17]||(t[17]=e()),n("section",null,[n("h2",null,i(o.$t("ui.card.usage.withI18n")),1),t[9]||(t[9]=e()),n("div",I,[r(l(d),{title:o.$t("ui.card.headerContent")},{default:s(()=>[n("p",k,i(o.$t("ui.card.content")),1)]),_:1},8,["title"]),t[8]||(t[8]=e()),r(a,{language:"html-vue"},{default:s(()=>t[7]||(t[7]=[e(`
          <template>
            <Card :title="t('ui.card.headerContent')">
              <p>
                {{ t('ui.card.content') }}
              </p>
            </Card>
          </template>

          <script setup lang="ts">
          import { Card } from "@prefabs.tech/vue3-ui";

          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),t[18]||(t[18]=e()),n("section",null,[n("h2",null,i(o.$t("ui.card.usage.slots")),1),t[14]||(t[14]=e()),n("div",D,[r(l(d),null,{header:s(()=>[n("h3",w,i(o.$t("ui.card.headerContent")),1)]),footer:s(()=>[n("div",N,i(o.$t("ui.card.footerContent")),1)]),default:s(()=>[t[10]||(t[10]=e()),n("p",B,i(o.$t("ui.card.content")),1),t[11]||(t[11]=e())]),_:1}),t[13]||(t[13]=e()),r(a,{language:"html-vue"},{default:s(()=>t[12]||(t[12]=[e(`
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
          import { Card } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[19]||(t[19]=e()),r(g,{"props-data":p,"props-table-title":o.$t("common.properties",{value:"CardProperties"}),"slots-data":u},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{J as default};
