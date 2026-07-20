import{D as e,E as t,On as n,St as r,_ as i,b as a,k as o,mt as s,qt as c,tr as l,v as u,vn as d,y as f}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{s as p}from"./PrefabsTechVue3UI.es-CXZdzPpN.js";import{E as m}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as h}from"./ComponentDocumentation-BPcopVAa.js";import{t as g}from"./UiPage-3Ir0VIur.js";var _={class:`section-content`},v={key:0,class:`most-favourite`},y=o({name:`SortableListDemo`,setup(o){let{t:y}=m(),b=d([{data:y(`ui.sortableList.games.basketball`),id:1},{data:y(`ui.sortableList.games.cricket`),id:2},{data:y(`ui.sortableList.games.football`),id:3},{data:y(`ui.sortableList.games.hockey`),id:4},{data:y(`ui.sortableList.games.volleyball`),id:5}]),x=d(),S=[{description:`Emitted when the list is reordered via drag and drop. The payload is the updated list.`,name:`onDrag`,payload:`Array<List>`}],C=[{default:`-`,description:"An array of list items to render and sort. Each item must have a unique `id` and `data`. Optionally, a `render` function can be provided to customize rendering.(required)",prop:`list`,type:`Array<List>`}],w=e=>{x.value=e[0].data};return(o,d)=>{let m=r(`SshPre`);return s(),u(g,{subtitle:o.$t(`ui.sortableList.subtitle`),title:o.$t(`ui.sortableList.title`),class:`demo-sortable-list`},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(o.$t(`ui.sortableList.usage.basic`)),1),d[4]||=t(),i(`div`,_,[i(`h3`,null,l(o.$t(`ui.sortableList.usage.sortSport`)),1),d[1]||=t(),e(n(p),{list:b.value,onOnDrag:w},null,8,[`list`]),d[2]||=t(),x.value?(s(),a(`div`,v,l(o.$t(`ui.sortableList.games.favourite`,{sport:x.value})),1)):f(``,!0),d[3]||=t(),e(m,{language:`html-vue`},{default:c(()=>[...d[0]||=[t(`
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
        `,-1)]]),_:1})])]),d[6]||=t(),e(h,{"events-data":S,"props-data":C,"props-table-title":o.$t(`common.properties`,{value:`SortableListProperties`})},null,8,[`props-table-title`]),d[7]||=t(),i(`section`,null,[e(m,{language:`html-vue`},{default:c(()=>[...d[5]||=[t(`
          type List = {
            id: number | string;
            data: string | unknown;
            render?: (data) => VNode;
          };
        `,-1)]]),_:1})])]),_:1},8,[`subtitle`,`title`])}}});export{y as default};