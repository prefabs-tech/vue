import{d as g,I as C,e as f,o as d,i as s,E as t,f as r,g as n,t as m,u as a,Q as L,a as k,F as b,A as v,N as $,x as _}from"./index-DcmBGXRe.js";import{_ as x}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-vgnZxmzK.js";import{_ as y}from"./UiPage.vue_vue_type_style_index_0_lang-DpVtSpAA.js";import"./DzangolabVue3TanstackTable.es-Cu8P28Bt.js";import"./DzangolabVue3Form.es-Bhd4fL6B.js";const B={class:"section-content"},E=g({__name:"Index",setup(N){const l=[{name:"Card 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"}],p=[{name:"default",description:"Default slot to render grid items inside the container."}];return(i,e)=>{const u=C("SshPre");return d(),f(y,{"sub-title":i.$t("ui.gridContainer.subtitle"),title:i.$t("ui.gridContainer.title"),class:"demo"},{toolbar:s(()=>[n(a(_),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=o=>i.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[e[4]||(e[4]=t()),r("section",null,[r("h2",null,m(i.$t("ui.gridContainer.usage.basic")),1),e[3]||(e[3]=t()),r("div",B,[n(a(L),null,{default:s(()=>[(d(),k(b,null,v(l,(o,c)=>n(a($),{key:c+"-"+o.name,title:o.name},{default:s(()=>[t(m(o.description),1)]),_:2},1032,["title"])),64))]),_:1}),e[2]||(e[2]=t()),n(u,{language:"html-vue"},{default:s(()=>e[1]||(e[1]=[t(`
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
          import { Card, GridContainer } from "@dzangolab/vue3-ui";

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
        `)])),_:1})])]),e[5]||(e[5]=t()),n(x,{"slots-data":p})]),_:1},8,["sub-title","title"])}}});export{E as default};
