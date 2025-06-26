import{j as m}from"./DzangolabVue3TanstackTable.es-Bw1nbKY4.js";import{d as S,I as b,e as h,o as v,i as s,E as e,f as n,t as l,g as o,u as i,a2 as r,Q as C,a as A,F as N,A as k,m as K,x as z}from"./index-DNdYYeNd.js";import{_ as P}from"./UiPage.vue_vue_type_style_index_0_lang-DUvnJdQV.js";import"./DzangolabVue3Form.es-BVy_WTik.js";const j={class:"section-content"},B={class:"section-content"},E={class:"data-stat-group"},G={class:"section-content"},w=S({__name:"Index",setup(J){const c=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],f=[{default:"-",description:"The caption displayed alongside the value.",id:1,prop:"caption",type:"String"},{default:"vertical",description:"Specifies the direction to display the component.",id:2,prop:"direction",type:'"horizontal" | "vertical"'},{default:"attr",description:"Defines which styling to apply to the component.",id:3,prop:"mode",type:'"attr" | "stat"'},{default:"-",description:"The value to display.",id:4,prop:"value",type:"String | Number"}],g=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}],y=[{description:"Content to place in the caption. Overrides the `caption` prop",id:1,name:"caption"},{description:"Content to place in the value. Overrides the `value` prop",id:3,name:"value"}],$=[{caption:"Name",value:"John Smith"},{caption:"Age",value:30},{caption:"Email",value:"john.smith@example.com"},{caption:"Address",value:"123 Main St, Springfield, USA"},{caption:"Status",value:"Active"}],p={name:"John Smith",revenue:"$1,030,217",visitors:"3,825"};return(a,t)=>{const u=b("SshPre");return v(),h(P,{title:a.$t("ui.data.title"),"sub-title":a.$t("ui.data.subtitle"),class:"demo"},{toolbar:s(()=>[o(i(z),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=d=>a.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[t[13]||(t[13]=e()),n("section",null,[n("h2",null,l(a.$t("ui.data.usage.basic")),1),t[3]||(t[3]=e()),n("div",j,[o(i(r),{caption:a.$t("ui.data.label.name"),value:p.name},null,8,["caption","value"]),t[2]||(t[2]=e()),o(u,{language:"html-vue"},{default:s(()=>t[1]||(t[1]=[e(`
          <template>
            <Data caption="Name" value="John Smith" />
          </template>

          <script setup lang="ts">
          import { Data } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[14]||(t[14]=e()),n("section",null,[n("h2",null,l(a.$t("ui.data.usage.statMode")),1),t[7]||(t[7]=e()),n("div",B,[n("div",E,[o(i(r),{caption:a.$t("ui.data.label.visitors"),value:p.visitors,mode:"stat"},null,8,["caption","value"]),t[4]||(t[4]=e()),o(i(r),{caption:a.$t("ui.data.label.revenue"),value:p.revenue,mode:"stat"},null,8,["caption","value"])]),t[6]||(t[6]=e()),o(u,{language:"html-vue"},{default:s(()=>t[5]||(t[5]=[e(`
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
        `)])),_:1})])]),t[15]||(t[15]=e()),n("section",null,[n("h2",null,l(a.$t("ui.data.usage.structuredData")),1),t[10]||(t[10]=e()),n("div",G,[o(i(C),null,{default:s(()=>[(v(),A(N,null,k($,(d,D)=>o(i(r),K({key:`${d.caption}-${D}`,ref_for:!0},d),null,16)),64))]),_:1}),t[9]||(t[9]=e()),o(u,{language:"html-vue"},{default:s(()=>t[8]||(t[8]=[e(`
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
        `)])),_:1})])]),t[16]||(t[16]=e()),n("section",null,[n("h2",null,l(a.$t("common.properties",{value:"DataProperties"})),1),t[11]||(t[11]=e()),o(i(m),{"columns-data":c,data:f,paginated:!1})]),t[17]||(t[17]=e()),n("section",null,[n("h2",null,l(a.$t("common.slots")),1),t[12]||(t[12]=e()),o(i(m),{"columns-data":g,data:y,paginated:!1})])]),_:1},8,["title","sub-title"])}}});export{w as default};
