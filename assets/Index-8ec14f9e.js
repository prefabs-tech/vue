import{I as y}from"./DzangolabVue3Form.es-81449376.js";import{d as b,j as f,J as v,o as k,c as C,w as a,K as t,D as n,ao as p,W as e,f as s,L as r,ar as d,ae as g}from"./index-729398ab-97e0bd19.js";import{_ as $}from"./LayoutPage.vue_vue_type_style_index_0_lang-4fd0c573.js";import"./index-4c2549d2.js";const h={class:"section-content"},_={class:"section-content"},z={name:"StickyCollapsibleFooter"},A=b({...z,setup(F){const u=f(),c=l=>{l&&alert(l)};return(l,o)=>{const m=v("SshPre");return k(),C($,{title:l.$t("layout.label.stickyCollapsibleFooter"),class:"demo sticky-collapsible-footer"},{toolbar:a(()=>[t(n(p),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:o[0]||(o[0]=i=>l.$router.push("/layout"))},null,8,["label"])]),default:a(()=>[e(),s("section",null,[s("h2",null,r(l.$t("layout.label.footerFixed")),1),e(),s("div",h,[t(n(d),null,{default:a(()=>[t(n(y),{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=i=>u.value=i),placeholder:l.$t("layout.placeholder.input")},null,8,["modelValue","placeholder"]),e(),t(n(p),{label:l.$t("layout.label.submit"),size:"small",onClick:o[2]||(o[2]=i=>c(u.value))},null,8,["label"]),e(),t(n(p),{label:l.$t("layout.label.cancel"),severity:"secondary",size:"small",variant:"outlined",onClick:o[3]||(o[3]=i=>c(l.$t("layout.label.cancelled")))},null,8,["label"])]),_:1}),e(),t(m,{language:"html-vue"},{default:a(()=>[e(`
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
          import { Input } from "@dzangolab/vue3-form";
          import { StickyCollapsibleFooter } from "@dzangolab/vue3-layout";
          import { ButtonElement } from "@dzangolab/vue3-ui";
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
        `)]),_:1}),e()])]),e(),s("section",null,[s("h2",null,r(l.$t("layout.label.footerAbsolute")),1),e(),s("div",_,[t(n(g),null,{default:a(()=>[e(r(l.$t("layout.label.bodyContent"))+" ",1),t(n(d),{fixed:!1},{default:a(()=>[e(r(l.$t("layout.label.stickyFooterContent")),1)]),_:1})]),_:1}),e(),t(m,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Card>
              Body content

              <StickyCollapsibleFooter :fixed="false">
                This is sticky footer content.
              </StickyCollapsibleFooter>
            </Card>
          </template>

          <script setup lang="ts">
          import { StickyCollapsibleFooter } from "@dzangolab/vue3-layout";
          import { Card } from "@dzangolab/vue3-ui";
          <\/script>

          <style lang="css">
          .card {
            position: relative;
          }
          </style>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{A as default};
