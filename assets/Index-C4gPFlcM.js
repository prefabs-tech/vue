import{d as u,s as g,j as C,o as c,w as t,C as e,e as s,t as d,g as n,u as o,U as f,a as _,F as L,h as k,G as h,D as v}from"./index-B_oNSRZ1.js";import{_ as b}from"./UiPage.vue_vue_type_style_index_0_lang-DP8OldWZ.js";const $={class:"section-content"},G=u({__name:"Index",setup(x){const m=[{name:"Card 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"}];return(i,r)=>{const p=g("SshPre");return c(),C(b,{title:i.$t("ui.gridContainer.title"),class:"demo"},{toolbar:t(()=>[n(o(v),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:r[0]||(r[0]=a=>i.$router.push("/ui"))},null,8,["label"])]),default:t(()=>[e(),s("section",null,[s("h2",null,d(i.$t("ui.gridContainer.usage.basic")),1),e(),s("div",$,[n(o(f),null,{default:t(()=>[(c(),_(L,null,k(m,(a,l)=>n(o(h),{key:l+"-"+a.name,title:a.name},{default:t(()=>[e(d(a.description),1)]),_:2},1032,["title"])),64))]),_:1}),e(),n(p,{language:"html-vue"},{default:t(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{G as default};
