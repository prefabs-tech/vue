import{d as C,L as g,e as f,o as d,j as s,C as t,f as r,h as n,t as m,u as a,S as L,a as k,F as v,z as b,P as $,v as _}from"./index-Bs8kt_YR.js";import{_ as y}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-DepqjIJY.js";import{_ as B}from"./UiPage.vue_vue_type_style_index_0_lang-BMgPiMHO.js";import"./PrefabsTechVue3TanstackTable.es-BWy_mAUE.js";import"./PrefabsTechVue3Form.es-CvBW0pAr.js";const S={class:"section-content"},z=C({__name:"Index",setup(x){const l=[{name:"Card 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"}],p=[{name:"default",description:"Default slot to render grid items inside the container."}];return(i,e)=>{const u=g("SshPre");return d(),f(B,{"sub-title":i.$t("ui.gridContainer.subtitle"),title:i.$t("ui.gridContainer.title"),class:"demo"},{toolbar:s(()=>[n(a(_),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=o=>i.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[e[4]||(e[4]=t()),r("section",null,[r("h2",null,m(i.$t("ui.gridContainer.usage.basic")),1),e[3]||(e[3]=t()),r("div",S,[n(a(L),null,{default:s(()=>[(d(),k(v,null,b(l,(o,c)=>n(a($),{key:c+"-"+o.name,title:o.name},{default:s(()=>[t(m(o.description),1)]),_:2},1032,["title"])),64))]),_:1}),e[2]||(e[2]=t()),n(u,{language:"html-vue"},{default:s(()=>e[1]||(e[1]=[t(`
          <template>
            <GridContainer>
              <Card
                v-for="(menu, index) in packages"
                :key="index + '-' + menu.name"
                :title="menu.name"
              >
                {{ menu.description }}
              </Card>
            </GridContainer>
          </template>

          <script setup lang="ts">
          import { Card, GridContainer } from "@prefabs.tech/vue3-ui";

          const packages = [
            {
              name: "Card 1",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
            {
              name: "Card 2",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
            {
              name: "Card 3",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },

            {
              name: "Card 4",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
            {
              name: "Card 5",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
          ];
          <\/script>
        `)])),_:1})])]),e[5]||(e[5]=t()),n(y,{"slots-data":p})]),_:1},8,["sub-title","title"])}}});export{z as default};
