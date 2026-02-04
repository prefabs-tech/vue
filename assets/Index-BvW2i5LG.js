import{d as g,M as L,r as u,N as c,o as m,e as y,f as r,h as o,t as l,A as s,a as i,u as k,p as D,c as S,b as $}from"./index-DVqVAY7Y.js";import{_ as N}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-NEluZ70T.js";import{_ as h}from"./UiPage.vue_vue_type_style_index_0_lang-C3MX5W1D.js";import"./PrefabsTechVue3TanstackTable.es-DtQsdL6M.js";import"./PrefabsTechVue3Form.es-Cji55RSf.js";const B={class:"section-content"},F={key:0,class:"most-favourite"},q=g({__name:"Index",setup(V){const{t:a}=L(),p=u([{id:1,data:a("ui.sortableList.games.basketball")},{id:2,data:a("ui.sortableList.games.cricket")},{id:3,data:a("ui.sortableList.games.football")},{id:4,data:a("ui.sortableList.games.hockey")},{id:5,data:a("ui.sortableList.games.volleyball")}]),n=u(),v=[{description:"Emitted when the list is reordered via drag and drop. The payload is the updated list.",name:"onDrag",payload:"Array<List>"}],f=[{default:"-",description:"An array of list items to render and sort. Each item must have a unique `id` and `data`. Optionally, a `render` function can be provided to customize rendering.(required)",prop:"list",type:"Array<List>"}],b=e=>{n.value=e[0].data};return(e,t)=>{const d=c("SshPre");return m(),y(h,{subtitle:e.$t("ui.sortableList.subtitle"),title:e.$t("ui.sortableList.title"),class:"demo-sortable-list"},{default:r(()=>[o("section",null,[o("h2",null,l(e.$t("ui.sortableList.usage.basic")),1),t[4]||(t[4]=s()),o("div",B,[o("h3",null,l(e.$t("ui.sortableList.usage.sortSport")),1),t[1]||(t[1]=s()),i(k(D),{list:p.value,onOnDrag:b},null,8,["list"]),t[2]||(t[2]=s()),n.value?(m(),S("div",F,l(e.$t("ui.sortableList.games.favourite",{sport:n.value})),1)):$("",!0),t[3]||(t[3]=s()),i(d,{language:"html-vue"},{default:r(()=>[...t[0]||(t[0]=[s(`
          <template>
            <h3>Sort sports from most to least favorite</h3>

            <SortableList :list="list" @on-drag="onDrag" />

            <div v-if="mostFavourite" class="most-favourite">
              {{ mostFavorite + " is your most favorite sport." }}
            </div>
          </template>

          <script setup lang="ts"> 
            import { SortableList } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";
  
            const list = ref([
              {
                id: 1,
                data: "Basketball",
              },
              ...
            ]);

            const mostFavourite = ref<string>();

            const onDrag = (sortedList: [{ id: number, data: string }]) => {
              mostFavourite.value = sortedList[0].data;
            };
          <\/script>
        `,-1)])]),_:1})])]),t[6]||(t[6]=s()),i(N,{"events-data":v,"props-data":f,"props-table-title":e.$t("common.properties",{value:"SortableListProperties"})},null,8,["props-table-title"]),t[7]||(t[7]=s()),o("section",null,[i(d,{language:"html-vue"},{default:r(()=>[...t[5]||(t[5]=[s(`
          type List = {
            id: number | string;
            data: string | unknown;
            render?: (data) => VNode;
          };
        `,-1)])]),_:1})])]),_:1},8,["subtitle","title"])}}});export{q as default};
