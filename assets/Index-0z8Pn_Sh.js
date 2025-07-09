import{d as m,I as f,e as g,o as v,i as s,E as e,f as n,g as i,t as l,u as r,N as d,x as C}from"./index-PRImDS5U.js";import{_ as $}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CdoUf2Cr.js";import{_ as b}from"./UiPage.vue_vue_type_style_index_0_lang-DCj5eSq7.js";import"./DzangolabVue3TanstackTable.es-DDwqZUfE.js";import"./DzangolabVue3Form.es-CUmjrk93.js";const c={class:"section-content"},h={class:"content"},z={class:"section-content"},I={class:"content"},S={class:"section-content"},y={class:"content"},k={class:"section-content"},D={class:"title"},N={class:"content"},w={class:"footer"},j=m({__name:"Index",setup(B){const u=[{default:"-",description:"Title text displayed in the card header. Ignored if header slot is provided.",prop:"title",type:"String"}],p=[{description:"Default slot for the main body content of the card.",name:"default"},{description:"Slot for custom footer content, rendered at the bottom of the card.",name:"footer"},{description:"Slot for custom header content, replaces the default title if provided.",name:"header"}];return(o,t)=>{const a=f("SshPre");return v(),g(b,{"sub-title":o.$t("ui.card.subtitle"),title:o.$t("ui.card.title"),class:"demo"},{toolbar:s(()=>[i(r(C),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=P=>o.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[t[15]||(t[15]=e()),n("section",null,[n("h2",null,l(o.$t("ui.card.usage.basic")),1),t[3]||(t[3]=e()),n("div",c,[i(r(d),null,{default:s(()=>[n("p",h,l(o.$t("ui.card.content")),1)]),_:1}),t[2]||(t[2]=e()),i(a,{language:"html-vue"},{default:s(()=>t[1]||(t[1]=[e(`
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
        `)])),_:1})])]),t[16]||(t[16]=e()),n("section",null,[n("h2",null,l(o.$t("ui.card.usage.withTitle")),1),t[6]||(t[6]=e()),n("div",z,[i(r(d),{title:o.$t("ui.card.headerContent")},{default:s(()=>[n("p",I,l(o.$t("ui.card.content")),1)]),_:1},8,["title"]),t[5]||(t[5]=e()),i(a,{language:"html-vue"},{default:s(()=>t[4]||(t[4]=[e(`
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
        `)])),_:1})])]),t[17]||(t[17]=e()),n("section",null,[n("h2",null,l(o.$t("ui.card.usage.withI18n")),1),t[9]||(t[9]=e()),n("div",S,[i(r(d),{title:o.$t("ui.card.headerContent")},{default:s(()=>[n("p",y,l(o.$t("ui.card.content")),1)]),_:1},8,["title"]),t[8]||(t[8]=e()),i(a,{language:"html-vue"},{default:s(()=>t[7]||(t[7]=[e(`
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
        `)])),_:1})])]),t[18]||(t[18]=e()),n("section",null,[n("h2",null,l(o.$t("ui.card.usage.slots")),1),t[14]||(t[14]=e()),n("div",k,[i(r(d),null,{header:s(()=>[n("h3",D,l(o.$t("ui.card.headerContent")),1)]),footer:s(()=>[n("div",w,l(o.$t("ui.card.footerContent")),1)]),default:s(()=>[t[10]||(t[10]=e()),n("p",N,l(o.$t("ui.card.content")),1),t[11]||(t[11]=e())]),_:1}),t[13]||(t[13]=e()),i(a,{language:"html-vue"},{default:s(()=>t[12]||(t[12]=[e(`
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
        `)])),_:1})])]),t[19]||(t[19]=e()),i($,{"props-data":u,"props-table-title":o.$t("common.properties",{value:"CardProperties"}),"slots-data":p},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{j as default};
