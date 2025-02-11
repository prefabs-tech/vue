import{Z as u}from"./DzangolabVue3TanstackTable.es-cbb5f279.js";import{d as S,J as d,o as m,c as $,w as o,K as n,W as t,L as s,f as e,D as i,av as l,aw as b,a as C,F as k,b as A,M as N}from"./index-729398ab-7d472bf5.js";import{_ as K}from"./UiPage.vue_vue_type_style_index_0_lang-e8194238.js";const J={class:"section-content"},P={class:"section-content"},V={class:"data-stat-group"},w={class:"section-content"},G=S({__name:"Index",setup(z){const v=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],h=[{default:"-",description:"The caption displayed alongside the value.",id:1,prop:"caption",type:"String"},{default:"vertical",description:"Specifies the direction to display the component.",id:2,prop:"direction",type:'"horizontal" | "vertical"'},{default:"attr",description:"Defines which styling to apply to the component.",id:3,prop:"mode",type:'"attr" | "stat"'},{default:"-",description:"The value to display.",id:4,prop:"value",type:"String | Number"}],f=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}],g=[{description:"Content to place in the caption. Overrides the `caption` prop",id:1,name:"caption"},{description:"Content to place in the value. Overrides the `value` prop",id:3,name:"value"}],_=[{caption:"Name",value:"John Smith"},{caption:"Age",value:30},{caption:"Email",value:"john.smith@example.com"},{caption:"Address",value:"123 Main St, Springfield, USA"},{caption:"Status",value:"Active"}],r={name:"John Smith",revenue:"$1,030,217",visitors:"3,825"};return(a,B)=>{const y=d("router-link"),c=d("SshPre");return m(),$(K,{title:a.$t("ui.data.title"),"sub-title":a.$t("ui.data.subtitle"),class:"demo"},{toolbar:o(()=>[n(y,{to:{name:"ui"},class:"back"},{default:o(()=>[t(s(a.$t("common.back")),1)]),_:1})]),default:o(()=>[t(),e("section",null,[e("h2",null,s(a.$t("ui.data.usage.basic")),1),t(),e("div",J,[n(i(l),{caption:a.$t("ui.data.label.name"),value:r.name},null,8,["caption","value"]),t(),n(c,{language:"html-vue"},{default:o(()=>[t(`
          <template>
            <Data caption="Name" value="John Smith" />
          </template>

          <script setup lang="ts">
          import { Data } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t()])]),t(),e("section",null,[e("h2",null,s(a.$t("ui.data.usage.statMode")),1),t(),e("div",P,[e("div",V,[n(i(l),{caption:a.$t("ui.data.label.visitors"),value:r.visitors,mode:"stat"},null,8,["caption","value"]),t(),n(i(l),{caption:a.$t("ui.data.label.revenue"),value:r.revenue,mode:"stat"},null,8,["caption","value"])]),t(),n(c,{language:"html-vue"},{default:o(()=>[t(`
          <template>
            <div class="data-stat-group">
              <Data
                caption="Visitors"
                mode="stat"
                value="3,825" 
              />

              <Data
                caption="Revenue"
                mode="stat"
                value="$1,030,217" 
              />
            </div>
          </template>

          <script setup lang="ts">
          import { Data } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t()])]),t(),e("section",null,[e("h2",null,s(a.$t("ui.data.usage.structuredData")),1),t(),e("div",w,[n(i(b),null,{default:o(()=>[(m(),C(k,null,A(_,(p,D)=>n(i(l),N({key:`${p.caption}-${D}`},p),null,16)),64))]),_:1}),t(),n(c,{language:"html-vue"},{default:o(()=>[t(`
          <template>
            <GridContainer>
              <Data
                v-for="(data, index) in data"
                :key="\`\${data.caption}-\${index}\`"
                v-bind="data"
              />
            </GridContainer>
          </template>

          <script setup lang="ts">
          import { Data, GridContainer } from "@dzangolab/vue3-ui";

          const data = [
            {
              caption: "Name",
              value: "John Smith",
            },
            {
              caption: "Age",
              value: 30,
            },
            {
              caption: "Email",
              value: "john.smith@example.com"
            },
            {
              caption: "Address",
              value: "123 Main St, Springfield, USA",
            },
            {
              caption: "Status",
              value: "Active",
            },
          ];
          <\/script>
        `)]),_:1}),t()])]),t(),e("section",null,[e("h2",null,s(a.$t("common.properties",{value:"DataProperties"})),1),t(),n(i(u),{"columns-data":v,data:h,paginated:!1})]),t(),e("section",null,[e("h2",null,s(a.$t("common.slots")),1),t(),n(i(u),{"columns-data":f,data:g,paginated:!1})])]),_:1},8,["title","sub-title"])}}});export{G as default};
