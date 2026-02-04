import{s as v}from"./PrefabsTechVue3Form.es-Cji55RSf.js";import{d as $,M as k,N as C,o as g,e as F,f as s,h as a,t as i,A as e,a as o,u as n,a2 as f,l as y,$ as S,r as B}from"./index-DVqVAY7Y.js";import{_ as A}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-NEluZ70T.js";import{_ as V}from"./LayoutPage.vue_vue_type_style_index_0_lang-DXcs0rua.js";import"./PrefabsTechVue3TanstackTable.es-DtQsdL6M.js";const w={class:"section-content"},D={class:"section-content"},z={name:"StickyCollapsibleFooter"},M=$({...z,setup(N){const{t:p}=k(),r=B(),b=[{default:"true",description:p("layout.documentation.propsDescription.fixed"),prop:"fixed",type:"Boolean"}],c=[{description:p("layout.documentation.slotDescription.default"),name:"default"}],m=l=>{l&&alert(l)};return(l,t)=>{const d=C("SshPre");return g(),F(V,{subtitle:l.$t("layout.subtitle.stickyCollapsibleFooter"),title:l.$t("layout.label.stickyCollapsibleFooter"),class:"demo sticky-collapsible-footer"},{default:s(()=>[a("section",null,[a("h2",null,i(l.$t("layout.label.footerFixed")),1),t[7]||(t[7]=e()),a("div",w,[o(n(f),null,{default:s(()=>[o(n(v),{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=u=>r.value=u),placeholder:l.$t("layout.placeholder.input")},null,8,["modelValue","placeholder"]),t[3]||(t[3]=e()),o(n(y),{label:l.$t("layout.label.submit"),size:"small",onClick:t[1]||(t[1]=u=>m(r.value))},null,8,["label"]),t[4]||(t[4]=e()),o(n(y),{label:l.$t("layout.label.cancel"),severity:"secondary",size:"small",variant:"outlined",onClick:t[2]||(t[2]=u=>m(l.$t("layout.label.cancelled")))},null,8,["label"])]),_:1}),t[6]||(t[6]=e()),o(d,{language:"html-vue"},{default:s(()=>[...t[5]||(t[5]=[e(`
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
        `,-1)])]),_:1})])]),t[11]||(t[11]=e()),a("section",null,[a("h2",null,i(l.$t("layout.label.footerAbsolute")),1),t[10]||(t[10]=e()),a("div",D,[o(n(S),null,{default:s(()=>[e(i(l.$t("layout.label.bodyContent"))+" ",1),o(n(f),{fixed:!1},{default:s(()=>[e(i(l.$t("layout.label.stickyFooterContent")),1)]),_:1})]),_:1}),t[9]||(t[9]=e()),o(d,{language:"html-vue"},{default:s(()=>[...t[8]||(t[8]=[e(`
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
        `,-1)])]),_:1})])]),t[12]||(t[12]=e()),o(A,{"props-data":b,"props-table-title":l.$t("common.properties",{value:"StickyCollapsibleFooterProperties"}),"slots-data":c},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}});export{M as default};
