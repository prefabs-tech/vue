import{d as g,H as C,e as f,o as m,i as s,B as t,f as r,g as n,t as d,u as a,O as L,a as k,F as b,y as v,M as $,v as y}from"./index-DR6bHbim.js";import{_ as B}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-X4Q4xt_Z.js";import{_}from"./UiPage.vue_vue_type_style_index_0_lang-CnvkkV66.js";import"./PrefabsTechVue3TanstackTable.es-Cxp2CAzX.js";import"./PrefabsTechVue3Form.es-DQBQoC6Z.js";const x={class:"section-content"},O=g({__name:"Index",setup(D){const l=[{name:"Card 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"}],p=[{name:"default",description:"Default slot to render grid items inside the container."}];return(i,e)=>{const u=C("SshPre");return m(),f(_,{"sub-title":i.$t("ui.gridContainer.subtitle"),title:i.$t("ui.gridContainer.title"),class:"demo"},{toolbar:s(()=>[n(a(y),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=o=>i.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[e[4]||(e[4]=t()),r("section",null,[r("h2",null,d(i.$t("ui.gridContainer.usage.basic")),1),e[3]||(e[3]=t()),r("div",x,[n(a(L),null,{default:s(()=>[(m(),k(b,null,v(l,(o,c)=>n(a($),{key:c+"-"+o.name,title:o.name},{default:s(()=>[t(d(o.description),1)]),_:2},1032,["title"])),64))]),_:1}),e[2]||(e[2]=t()),n(u,{language:"html-vue"},{default:s(()=>e[1]||(e[1]=[t(`
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
        `)])),_:1})])]),e[5]||(e[5]=t()),n(B,{"slots-data":p})]),_:1},8,["sub-title","title"])}}});export{O as default};
