import{w as y}from"./PrefabsTechVue3Form.es-CexM7XFj.js";import{d as b,r as v,J as k,e as C,o as $,i as n,C as t,f as s,t as r,g as o,u as a,a2 as f,v as p,N as c}from"./index-DzMrXnDW.js";import{_ as g}from"./LayoutPage.vue_vue_type_style_index_0_lang-DUD0gR6E.js";const F={class:"section-content"},S={class:"section-content"},w={name:"StickyCollapsibleFooter"},N=b({...w,setup(B){const u=v(),m=e=>{e&&alert(e)};return(e,l)=>{const d=k("SshPre");return $(),C(g,{title:e.$t("layout.label.stickyCollapsibleFooter"),class:"demo sticky-collapsible-footer"},{toolbar:n(()=>[o(a(p),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=i=>e.$router.push("/layout"))},null,8,["label"])]),default:n(()=>[l[12]||(l[12]=t()),s("section",null,[s("h2",null,r(e.$t("layout.label.footerFixed")),1),l[8]||(l[8]=t()),s("div",F,[o(a(f),null,{default:n(()=>[o(a(y),{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=i=>u.value=i),placeholder:e.$t("layout.placeholder.input")},null,8,["modelValue","placeholder"]),l[4]||(l[4]=t()),o(a(p),{label:e.$t("layout.label.submit"),size:"small",onClick:l[2]||(l[2]=i=>m(u.value))},null,8,["label"]),l[5]||(l[5]=t()),o(a(p),{label:e.$t("layout.label.cancel"),severity:"secondary",size:"small",variant:"outlined",onClick:l[3]||(l[3]=i=>m(e.$t("layout.label.cancelled")))},null,8,["label"])]),_:1}),l[7]||(l[7]=t()),o(d,{language:"html-vue"},{default:n(()=>l[6]||(l[6]=[t(`
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
        `)])),_:1})])]),l[13]||(l[13]=t()),s("section",null,[s("h2",null,r(e.$t("layout.label.footerAbsolute")),1),l[11]||(l[11]=t()),s("div",S,[o(a(c),null,{default:n(()=>[t(r(e.$t("layout.label.bodyContent"))+" ",1),o(a(f),{fixed:!1},{default:n(()=>[t(r(e.$t("layout.label.stickyFooterContent")),1)]),_:1})]),_:1}),l[10]||(l[10]=t()),o(d,{language:"html-vue"},{default:n(()=>l[9]||(l[9]=[t(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{N as default};
