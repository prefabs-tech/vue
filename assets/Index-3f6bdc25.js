import{d as _,K as v,o as m,c as S,w as t,L as n,C as a,M as o,f as e,E as s,aw as u,ax as k,a as b,F as h,b as g,N as f}from"./index-8e1c3ab6-8617714e.js";import{_ as A}from"./UiPage.vue_vue_type_style_index_0_lang-a569b0fb.js";const y={class:"section-content"},J={class:"section-content"},$={class:"section-content"},N={class:"section-content"},E=_({__name:"Index",setup(x){const c=[{label:"Name",value:"John Doe"},{label:"Age",value:30},{label:"Email",value:{email:"john.doe@example.com",user:"John Doe"},dataKey:"email"},{label:"Address",value:"123 Main St, Springfield, USA"},{label:"Status",value:"Active"}],p={email:"john.doe@example.com",name:"John Doe"};return(l,C)=>{const D=v("router-link"),i=v("SshPre");return m(),S(A,{title:l.$t("ui.data.title"),class:"demo"},{toolbar:t(()=>[n(D,{to:{name:"ui"},class:"back"},{default:t(()=>[a(o(l.$t("common.back")),1)]),_:1})]),default:t(()=>[a(),e("section",null,[e("h2",null,o(l.$t("ui.data.usage.basic")),1),a(),e("div",y,[n(i,{language:"html-vue"},{default:t(()=>[a(`
          <template>
            <Data label="Name" value="John Doe" />
          </template>

          <script setup lang="ts">
          import { Data } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),a(),n(s(u),{label:l.$t("ui.data.label.name"),value:p.name},null,8,["label","value"])])]),a(),e("section",null,[e("h2",null,o(l.$t("ui.data.usage.displayObject")),1),a(),e("div",J,[n(i,{language:"html-vue"},{default:t(()=>[a(`
          <template>
            <Data
              :value="userData"
              data-key="email"
              label="Email"
            />
          </template>

          <script setup lang="ts">
          import { Data } from "@dzangolab/vue3-ui";

          const userData = {
            email: "john.doe@example.com",
            name: "John Doe",
          };
          <\/script>
        `)]),_:1}),a(),n(s(u),{label:l.$t("ui.data.label.email"),value:p,"data-key":"email"},null,8,["label"])])]),a(),e("section",null,[e("h2",null,o(l.$t("ui.data.usage.structuredData")),1),a(),e("div",$,[n(i,{language:"html-vue"},{default:t(()=>[a(`
          <template>
            <GridContainer>
              <Data v-for="(data, index) in data" :key="index" v-bind="data" />
            </GridContainer>
          </template>

          <script setup lang="ts">
          import { Data, GridContainer } from "@dzangolab/vue3-ui";

          const data = [
            {
              label: "Name",
              value: "John Doe",
            },
            {
              label: "Age",
              value: 30,
            },
            {
              label: "Email",
              value: {
                email: "john.doe@example.com",
                user: "John Doe",
              },
              dataKey: "email",
            },
            {
              label: "Address",
              value: "123 Main St, Springfield, USA",
            },
            {
              label: "Status",
              value: "Active",
            },
          ];
          <\/script>
        `)]),_:1}),a(),n(s(k),null,{default:t(()=>[(m(),b(h,null,g(c,(r,d)=>n(s(u),f({key:d},r),null,16)),64))]),_:1})])]),a(),e("section",null,[e("h2",null,o(l.$t("ui.data.usage.separatorSlot")),1),a(),e("div",N,[n(i,{language:"html-vue"},{default:t(()=>[a(`
          <template>
            <Data
              v-for="(data, index) in data"
              :key="index"
              v-bind="data"
              direction="horizontal"
            >
              <template #separator>:</template>
            </Data>
          </template>

          <script setup lang="ts">
          import { Data } from "@dzangolab/vue3-ui";

          const data = [
            {
              label: "Name",
              value: "John Doe",
            },
            {
              label: "Age",
              value: 30,
            },
            {
              label: "Email",
              value: {
                email: "john.doe@example.com",
                user: "John Doe",
              },
              dataKey: "email",
            },
            {
              label: "Address",
              value: "123 Main St, Springfield, USA",
            },
            {
              label: "Status",
              value: "Active",
            },
          ];
          <\/script>
        `)]),_:1}),a(),(m(),b(h,null,g(c,(r,d)=>n(s(u),f({key:d},r,{direction:"horizontal"}),{separator:t(()=>[a(":")]),_:2},1040)),64))])])]),_:1},8,["title"])}}});export{E as default};
