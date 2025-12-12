import{d as L,I as y,r as d,L as k,e as $,o as m,j as i,C as s,f as o,h as n,t as l,a as c,b as D,u as p,x as S,v as C}from"./index-Xk6NHMaT.js";import{_ as B}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-0T5GACCx.js";import{_ as F}from"./UiPage.vue_vue_type_style_index_0_lang-CbhSN3Yr.js";import"./PrefabsTechVue3TanstackTable.es-CdOEVgci.js";import"./PrefabsTechVue3Form.es-CqDGYAwZ.js";const N={class:"section-content"},V={key:0,class:"most-favourite"},q=L({__name:"Index",setup(h){const{t:a}=y(),v=d([{id:1,data:a("ui.sortableList.games.basketball")},{id:2,data:a("ui.sortableList.games.cricket")},{id:3,data:a("ui.sortableList.games.football")},{id:4,data:a("ui.sortableList.games.hockey")},{id:5,data:a("ui.sortableList.games.volleyball")}]),r=d(),b=[{description:"Emitted when the list is reordered via drag and drop. The payload is the updated list.",name:"onDrag",payload:"Array<List>"}],f=[{default:"-",description:"An array of list items to render and sort. Each item must have a unique `id` and `data`. Optionally, a `render` function can be provided to customize rendering.(required)",prop:"list",type:"Array<List>"}],g=e=>{r.value=e[0].data};return(e,t)=>{const u=k("SshPre");return m(),$(F,{"sub-title":e.$t("ui.sortableList.subtitle"),title:e.$t("ui.sortableList.title"),class:"demo-sortable-list"},{toolbar:i(()=>[n(p(C),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=w=>e.$router.push("/ui"))},null,8,["label"])]),default:i(()=>[t[7]||(t[7]=s()),o("section",null,[o("h2",null,l(e.$t("ui.sortableList.usage.basic")),1),t[5]||(t[5]=s()),o("div",N,[o("h3",null,l(e.$t("ui.sortableList.usage.sortSport")),1),t[2]||(t[2]=s()),n(p(S),{list:v.value,onOnDrag:g},null,8,["list"]),t[3]||(t[3]=s()),r.value?(m(),c("div",V,l(e.$t("ui.sortableList.games.favourite",{sport:r.value})),1)):D("",!0),t[4]||(t[4]=s()),n(u,{language:"html-vue"},{default:i(()=>t[1]||(t[1]=[s(`
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
        `)])),_:1})])]),t[8]||(t[8]=s()),n(B,{"events-data":b,"props-data":f,"props-table-title":e.$t("common.properties",{value:"SortableListProperties"})},null,8,["props-table-title"]),t[9]||(t[9]=s()),o("section",null,[n(u,{language:"html-vue"},{default:i(()=>t[6]||(t[6]=[s(`
          type List = {
            id: number | string;
            data: string | unknown;
            render?: (data) => VNode;
          };
        `)])),_:1})])]),_:1},8,["sub-title","title"])}}});export{q as default};
