import{d as m,J as f,e as v,o as C,i as s,f as e,B as n,h as i,t as r,u as l,O as d}from"./index-CTAJGeeo.js";import{_ as g}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-C2budLv3.js";import{_ as c}from"./UiPage.vue_vue_type_style_index_0_lang-VAT-R9qL.js";import"./PrefabsTechVue3TanstackTable.es-DJK4eGFK.js";import"./PrefabsTechVue3Form.es-Cni582VJ.js";const $={class:"section-content"},b={class:"content"},h={class:"section-content"},S={class:"content"},I={class:"section-content"},y={class:"content"},B={class:"section-content"},D={class:"title"},w={class:"content"},N={class:"footer"},O=m({__name:"Index",setup(P){const p=[{default:"-",description:"Title text displayed in the card header. Ignored if header slot is provided.",prop:"title",type:"String"}],u=[{description:"Default slot for the main body content of the card.",name:"default"},{description:"Slot for custom footer content, rendered at the bottom of the card.",name:"footer"},{description:"Slot for custom header content, replaces the default title if provided.",name:"header"}];return(o,t)=>{const a=f("SshPre");return C(),v(c,{subtitle:o.$t("ui.card.subtitle"),title:o.$t("ui.card.title"),class:"demo"},{default:s(()=>[e("section",null,[e("h2",null,r(o.$t("ui.card.usage.basic")),1),t[2]||(t[2]=n()),e("div",$,[i(l(d),null,{default:s(()=>[e("p",b,r(o.$t("ui.card.content")),1)]),_:1}),t[1]||(t[1]=n()),i(a,{language:"html-vue"},{default:s(()=>t[0]||(t[0]=[n(`
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
        `)])),_:1})])]),t[14]||(t[14]=n()),e("section",null,[e("h2",null,r(o.$t("ui.card.usage.withTitle")),1),t[5]||(t[5]=n()),e("div",h,[i(l(d),{title:o.$t("ui.card.headerContent")},{default:s(()=>[e("p",S,r(o.$t("ui.card.content")),1)]),_:1},8,["title"]),t[4]||(t[4]=n()),i(a,{language:"html-vue"},{default:s(()=>t[3]||(t[3]=[n(`
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
        `)])),_:1})])]),t[15]||(t[15]=n()),e("section",null,[e("h2",null,r(o.$t("ui.card.usage.withI18n")),1),t[8]||(t[8]=n()),e("div",I,[i(l(d),{title:o.$t("ui.card.headerContent")},{default:s(()=>[e("p",y,r(o.$t("ui.card.content")),1)]),_:1},8,["title"]),t[7]||(t[7]=n()),i(a,{language:"html-vue"},{default:s(()=>t[6]||(t[6]=[n(`
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
        `)])),_:1})])]),t[16]||(t[16]=n()),e("section",null,[e("h2",null,r(o.$t("ui.card.usage.slots")),1),t[13]||(t[13]=n()),e("div",B,[i(l(d),null,{header:s(()=>[e("h3",D,r(o.$t("ui.card.headerContent")),1)]),footer:s(()=>[e("div",N,r(o.$t("ui.card.footerContent")),1)]),default:s(()=>[t[9]||(t[9]=n()),e("p",w,r(o.$t("ui.card.content")),1),t[10]||(t[10]=n())]),_:1}),t[12]||(t[12]=n()),i(a,{language:"html-vue"},{default:s(()=>t[11]||(t[11]=[n(`
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
        `)])),_:1})])]),t[17]||(t[17]=n()),i(g,{"props-data":p,"props-table-title":o.$t("common.properties",{value:"CardProperties"}),"slots-data":u},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}});export{O as default};
