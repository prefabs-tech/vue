import{w as c}from"./PrefabsTechVue3Form.es-qh8wDnMJ.js";import{d as k,I as C,r as $,J as g,e as F,o as S,j as s,C as e,f as n,h as o,t as r,u as a,a3 as b,v as p,O as B}from"./index-VOKHa5hN.js";import{_ as w}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BeJ-vFO0.js";import{_ as V}from"./LayoutPage.vue_vue_type_style_index_0_lang-DX65liyD.js";import"./PrefabsTechVue3TanstackTable.es-CKsUW9jk.js";const z={class:"section-content"},A={class:"section-content"},D={name:"StickyCollapsibleFooter"},j=k({...D,setup(I){const{t:m}=C(),u=$(),y=[{default:"true",description:m("layout.documentation.propsDescription.fixed"),prop:"fixed",type:"Boolean"}],v=[{description:m("layout.documentation.slotDescription.default"),name:"default"}],d=l=>{l&&alert(l)};return(l,t)=>{const f=g("SshPre");return S(),F(V,{"sub-title":l.$t("layout.subtitle.stickyCollapsibleFooter"),title:l.$t("layout.label.stickyCollapsibleFooter"),class:"demo sticky-collapsible-footer"},{toolbar:s(()=>[o(a(p),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=i=>l.$router.push("/layout"))},null,8,["label"])]),default:s(()=>[t[12]||(t[12]=e()),n("section",null,[n("h2",null,r(l.$t("layout.label.footerFixed")),1),t[8]||(t[8]=e()),n("div",z,[o(a(b),null,{default:s(()=>[o(a(c),{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=i=>u.value=i),placeholder:l.$t("layout.placeholder.input")},null,8,["modelValue","placeholder"]),t[4]||(t[4]=e()),o(a(p),{label:l.$t("layout.label.submit"),size:"small",onClick:t[2]||(t[2]=i=>d(u.value))},null,8,["label"]),t[5]||(t[5]=e()),o(a(p),{label:l.$t("layout.label.cancel"),severity:"secondary",size:"small",variant:"outlined",onClick:t[3]||(t[3]=i=>d(l.$t("layout.label.cancelled")))},null,8,["label"])]),_:1}),t[7]||(t[7]=e()),o(f,{language:"html-vue"},{default:s(()=>t[6]||(t[6]=[e(`
          <template>
            <StickyCollapsibleFooter>
              <Input
                v-model="input"
                :placeholder="$t('layout.placeholder.input')"
              />

              <ButtonElement
                :label="$t('layout.label.submit')"
                size="small"
                @click="showAlert(input)"
              />
              <ButtonElement
                :label="$t('layout.label.cancel')"
                severity="secondary"
                size="small"
                variant="outlined"
                @click="showAlert($t('layout.label.cancelled'))"
              />
            </StickyCollapsibleFooter>
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          import { StickyCollapsibleFooter } from "@prefabs.tech/vue3-layout";
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const input = ref();

          const showAlert = (message: string) => {
            if (message) {
              alert(message);
            }
          };
          <\/script>

          <style lang="css">
          .sticky-collapsible .content {
            display: flex;
            gap: 0.5rem;
          }
          </style>
        `)])),_:1})])]),t[13]||(t[13]=e()),n("section",null,[n("h2",null,r(l.$t("layout.label.footerAbsolute")),1),t[11]||(t[11]=e()),n("div",A,[o(a(B),null,{default:s(()=>[e(r(l.$t("layout.label.bodyContent"))+" ",1),o(a(b),{fixed:!1},{default:s(()=>[e(r(l.$t("layout.label.stickyFooterContent")),1)]),_:1})]),_:1}),t[10]||(t[10]=e()),o(f,{language:"html-vue"},{default:s(()=>t[9]||(t[9]=[e(`
          <template>
            <Card>
              Body content

              <StickyCollapsibleFooter :fixed="false">
                This is sticky footer content.
              </StickyCollapsibleFooter>
            </Card>
          </template>

          <script setup lang="ts">
          import { StickyCollapsibleFooter } from "@prefabs.tech/vue3-layout";
          import { Card } from "@prefabs.tech/vue3-ui";
          <\/script>

          <style lang="css">
          .card {
            position: relative;
          }
          </style>
        `)])),_:1})])]),t[14]||(t[14]=e()),o(w,{"props-data":y,"props-table-title":l.$t("common.properties",{value:"StickyCollapsibleFooterProperties"}),"slots-data":v},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{j as default};
