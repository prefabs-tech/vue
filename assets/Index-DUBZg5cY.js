import{d as f,z as p,r as u,s as g,j as L,o as m,w as n,C as e,e as a,t as i,g as r,a as h,b as _,u as d,a2 as k,D as $}from"./index-CVjUtB44.js";import{_ as S}from"./UiPage.vue_vue_type_style_index_0_lang-Sn8JrzpY.js";const y={class:"section-content"},C={key:0,class:"most-favourite"},V=f({__name:"Index",setup(D){const{t:s}=p(),c=u([{id:1,data:s("ui.sortableList.games.basketball")},{id:2,data:s("ui.sortableList.games.cricket")},{id:3,data:s("ui.sortableList.games.football")},{id:4,data:s("ui.sortableList.games.hockey")},{id:5,data:s("ui.sortableList.games.volleyball")}]),o=u(),v=t=>{o.value=t[0].data};return(t,l)=>{const b=g("SshPre");return m(),L(S,{title:t.$t("ui.sortableList.title"),class:"demo-sortable-list"},{toolbar:n(()=>[r(d($),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=B=>t.$router.push("/ui"))},null,8,["label"])]),default:n(()=>[e(),a("section",null,[a("h2",null,i(t.$t("ui.sortableList.usage.basic")),1),e(),a("div",y,[a("h3",null,i(t.$t("ui.sortableList.usage.sortSport")),1),e(),r(d(k),{list:c.value,onOnDrag:v},null,8,["list"]),e(),o.value?(m(),h("div",C,i(t.$t("ui.sortableList.games.favourite",{sport:o.value})),1)):_("",!0),e(),r(b,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{V as default};
