import{d,u as _,e as m,r as o,o as g,c as p,w as l,a,t as b,f as s,g as i,h as f,ab as v}from"./index-305334af.js";const L={class:"section-content"},x=d({__name:"Index",setup(h){const{t}=_(),n=m([{id:1,data:t("ui.sortableList.games.basketball")},{id:2,data:t("ui.sortableList.games.cricket")},{id:3,data:t("ui.sortableList.games.football")},{id:4,data:t("ui.sortableList.games.hokey")},{id:5,data:t("ui.sortableList.games.volleyball")}]),r=e=>{n.value=e};return(e,k)=>{const c=o("SshPre"),u=o("Page");return g(),p(u,{title:e.$t("ui.sortableList.title"),class:"demo-sortable-list"},{default:l(()=>[a("section",null,[a("h2",null,b(e.$t("ui.sortableList.usage.basic")),1),s(),a("div",L,[i(c,{language:"html-vue"},{default:l(()=>[s(`
          <template>
            <SortableList :list="list" @onDrag="onDrag" />
          </template>

          <script setup lang="ts"> 
            import { SortableList } from "@dzangolab/vue3-ui";
            import { ref } from "vue";
  
            const list = ref([
              {
                id: 1,
                data: "Basketball",
              },
              ...
            ]);

            const onDrag = (sortedList: []) => {
              ...
            };
          <\/script>
        `)]),_:1}),s(),i(f(v),{list:n.value,onOnDrag:r},null,8,["list"])])])]),_:1},8,["title"])}}});export{x as default};
