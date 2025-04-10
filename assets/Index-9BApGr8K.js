import{d as b,H as g,r as u,G as L,e as c,o as m,g as i,A as e,f as a,t as r,i as l,a as k,b as $,u as d,F,p as S}from"./index-BzuCpy3w.js";import{_ as y}from"./UiPage.vue_vue_type_style_index_0_lang-DHmkYiWL.js";const B={class:"section-content"},C={key:0,class:"most-favourite"},I=b({__name:"Index",setup(D){const{t:o}=g(),v=u([{id:1,data:o("ui.sortableList.games.basketball")},{id:2,data:o("ui.sortableList.games.cricket")},{id:3,data:o("ui.sortableList.games.football")},{id:4,data:o("ui.sortableList.games.hockey")},{id:5,data:o("ui.sortableList.games.volleyball")}]),n=u(),f=s=>{n.value=s[0].data};return(s,t)=>{const p=L("SshPre");return m(),c(y,{title:s.$t("ui.sortableList.title"),class:"demo-sortable-list"},{toolbar:i(()=>[l(d(S),{label:s.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=N=>s.$router.push("/ui"))},null,8,["label"])]),default:i(()=>[t[6]||(t[6]=e()),a("section",null,[a("h2",null,r(s.$t("ui.sortableList.usage.basic")),1),t[5]||(t[5]=e()),a("div",B,[a("h3",null,r(s.$t("ui.sortableList.usage.sortSport")),1),t[2]||(t[2]=e()),l(d(F),{list:v.value,onOnDrag:f},null,8,["list"]),t[3]||(t[3]=e()),n.value?(m(),k("div",C,r(s.$t("ui.sortableList.games.favourite",{sport:n.value})),1)):$("",!0),t[4]||(t[4]=e()),l(p,{language:"html-vue"},{default:i(()=>t[1]||(t[1]=[e(`
          <template>
            <h3>Sort sports from most to least favorite</h3>

            <SortableList :list="list" @on-drag="onDrag" />

            <div v-if="mostFavourite" class="most-favourite">
              {{ mostFavorite + " is your most favorite sport." }}
            </div>
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

            const mostFavourite = ref<string>();

            const onDrag = (sortedList: [{ id: number, data: string }]) => {
              mostFavourite.value = sortedList[0].data;
            };
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{I as default};
