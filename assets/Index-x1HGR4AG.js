import{i as m}from"./PrefabsTechVue3TanstackTable.es-BptiQ22o.js";import{d as S,M as $,o as v,e as b,f as o,h as a,t as l,z as e,a as s,u as i,a2 as r,S as C,c as A,F as N,s as K,m as k}from"./index-DkcL5sjS.js";import{_ as P}from"./UiPage.vue_vue_type_style_index_0_lang-BG3FTNkV.js";import"./PrefabsTechVue3Form.es-CMSC9DV6.js";const B={class:"section-content"},J={class:"section-content"},M={class:"data-stat-group"},T={class:"section-content"},V={name:"DataDemo"},F=S({...V,setup(E){const c=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],f=[{default:"-",description:"The caption displayed alongside the value.",id:1,prop:"caption",type:"String"},{default:"vertical",description:"Specifies the direction to display the component.",id:2,prop:"direction",type:'"horizontal" | "vertical"'},{default:"attr",description:"Defines which styling to apply to the component.",id:3,prop:"mode",type:'"attr" | "stat"'},{default:"-",description:"The value to display.",id:4,prop:"value",type:"String | Number"}],g=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}],y=[{description:"Content to place in the caption. Overrides the `caption` prop",id:1,name:"caption"},{description:"Content to place in the value. Overrides the `value` prop",id:3,name:"value"}],D=[{caption:"Name",value:"John Smith"},{caption:"Age",value:30},{caption:"Email",value:"john.smith@example.com"},{caption:"Address",value:"123 Main St, Springfield, USA"},{caption:"Status",value:"Active"}],p={name:"John Smith",revenue:"$1,030,217",visitors:"3,825"};return(n,t)=>{const u=$("SshPre");return v(),b(P,{title:n.$t("ui.data.title"),subtitle:n.$t("ui.data.subtitle"),class:"demo"},{default:o(()=>[a("section",null,[a("h2",null,l(n.$t("ui.data.usage.basic")),1),t[2]||(t[2]=e()),a("div",B,[s(i(r),{caption:n.$t("ui.data.label.name"),value:p.name},null,8,["caption","value"]),t[1]||(t[1]=e()),s(u,{language:"html-vue"},{default:o(()=>[...t[0]||(t[0]=[e(`
          <template>
            <Data caption="Name" value="John Smith" />
          </template>

          <script setup lang="ts">
          import { Data } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),t[12]||(t[12]=e()),a("section",null,[a("h2",null,l(n.$t("ui.data.usage.statMode")),1),t[6]||(t[6]=e()),a("div",J,[a("div",M,[s(i(r),{caption:n.$t("ui.data.label.visitors"),value:p.visitors,mode:"stat"},null,8,["caption","value"]),t[3]||(t[3]=e()),s(i(r),{caption:n.$t("ui.data.label.revenue"),value:p.revenue,mode:"stat"},null,8,["caption","value"])]),t[5]||(t[5]=e()),s(u,{language:"html-vue"},{default:o(()=>[...t[4]||(t[4]=[e(`
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
          import { Data } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),t[13]||(t[13]=e()),a("section",null,[a("h2",null,l(n.$t("ui.data.usage.structuredData")),1),t[9]||(t[9]=e()),a("div",T,[s(i(C),null,{default:o(()=>[(v(),A(N,null,K(D,(d,h)=>s(i(r),k({key:`${d.caption}-${h}`},{ref_for:!0},d),null,16)),64))]),_:1}),t[8]||(t[8]=e()),s(u,{language:"html-vue"},{default:o(()=>[...t[7]||(t[7]=[e(`
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
          import { Data, GridContainer } from "@prefabs.tech/vue3-ui";

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
        `,-1)])]),_:1})])]),t[14]||(t[14]=e()),a("section",null,[a("h2",null,l(n.$t("common.properties",{value:"DataProperties"})),1),t[10]||(t[10]=e()),s(i(m),{"columns-data":c,data:f,paginated:!1,"persist-state":!1})]),t[15]||(t[15]=e()),a("section",null,[a("h2",null,l(n.$t("common.slots")),1),t[11]||(t[11]=e()),s(i(m),{"columns-data":g,data:y,paginated:!1,"persist-state":!1})])]),_:1},8,["title","subtitle"])}}});export{F as default};
