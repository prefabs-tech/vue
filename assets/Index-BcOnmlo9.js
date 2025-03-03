import{d as u,y as g,l as C,o as d,p as t,C as i,e as o,t as m,g as a,u as r,H as f,a as L,F as k,j as v,J as b,D as $}from"./index-C0L6_lhn.js";import{_ as y}from"./UiPage.vue_vue_type_style_index_0_lang-BVNwWCJe.js";const _={class:"section-content"},N=u({__name:"Index",setup(x){const p=[{name:"Card 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"}];return(n,e)=>{const l=g("SshPre");return d(),C(y,{title:n.$t("ui.gridContainer.title"),class:"demo"},{toolbar:t(()=>[a(r($),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=s=>n.$router.push("/ui"))},null,8,["label"])]),default:t(()=>[e[4]||(e[4]=i()),o("section",null,[o("h2",null,m(n.$t("ui.gridContainer.usage.basic")),1),e[3]||(e[3]=i()),o("div",_,[a(r(f),null,{default:t(()=>[(d(),L(k,null,v(p,(s,c)=>a(r(b),{key:c+"-"+s.name,title:s.name},{default:t(()=>[i(m(s.description),1)]),_:2},1032,["title"])),64))]),_:1}),e[2]||(e[2]=i()),a(l,{language:"html-vue"},{default:t(()=>e[1]||(e[1]=[i(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{N as default};
