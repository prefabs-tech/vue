import{Q as d}from"./DzangolabVue3TanstackTable.es-Dxc3Or9y.js";import{d as D,s as S,j as b,o as m,w as i,B as e,e as t,t as s,g as n,u as o,Q as l,U as C,a as _,F as A,h as N,m as k,C as K}from"./index-Cc4iPlXT.js";import{_ as z}from"./UiPage.vue_vue_type_style_index_0_lang-DxERaYRa.js";const B={class:"section-content"},P={class:"section-content"},j={class:"data-stat-group"},J={class:"section-content"},E=D({__name:"Index",setup(T){const v=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],h=[{default:"-",description:"The caption displayed alongside the value.",id:1,prop:"caption",type:"String"},{default:"vertical",description:"Specifies the direction to display the component.",id:2,prop:"direction",type:'"horizontal" | "vertical"'},{default:"attr",description:"Defines which styling to apply to the component.",id:3,prop:"mode",type:'"attr" | "stat"'},{default:"-",description:"The value to display.",id:4,prop:"value",type:"String | Number"}],f=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}],g=[{description:"Content to place in the caption. Overrides the `caption` prop",id:1,name:"caption"},{description:"Content to place in the value. Overrides the `value` prop",id:3,name:"value"}],y=[{caption:"Name",value:"John Smith"},{caption:"Age",value:30},{caption:"Email",value:"john.smith@example.com"},{caption:"Address",value:"123 Main St, Springfield, USA"},{caption:"Status",value:"Active"}],r={name:"John Smith",revenue:"$1,030,217",visitors:"3,825"};return(a,c)=>{const p=S("SshPre");return m(),b(z,{title:a.$t("ui.data.title"),"sub-title":a.$t("ui.data.subtitle"),class:"demo"},{toolbar:i(()=>[n(o(K),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:c[0]||(c[0]=u=>a.$router.push("/ui"))},null,8,["label"])]),default:i(()=>[e(),t("section",null,[t("h2",null,s(a.$t("ui.data.usage.basic")),1),e(),t("div",B,[n(o(l),{caption:a.$t("ui.data.label.name"),value:r.name},null,8,["caption","value"]),e(),n(p,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Data caption="Name" value="John Smith" />
          </template>

          <script setup lang="ts">
          import { Data } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,s(a.$t("ui.data.usage.statMode")),1),e(),t("div",P,[t("div",j,[n(o(l),{caption:a.$t("ui.data.label.visitors"),value:r.visitors,mode:"stat"},null,8,["caption","value"]),e(),n(o(l),{caption:a.$t("ui.data.label.revenue"),value:r.revenue,mode:"stat"},null,8,["caption","value"])]),e(),n(p,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,s(a.$t("ui.data.usage.structuredData")),1),e(),t("div",J,[n(o(C),null,{default:i(()=>[(m(),_(A,null,N(y,(u,$)=>n(o(l),k({key:`${u.caption}-${$}`},u),null,16)),64))]),_:1}),e(),n(p,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,s(a.$t("common.properties",{value:"DataProperties"})),1),e(),n(o(d),{"columns-data":v,data:h,paginated:!1})]),e(),t("section",null,[t("h2",null,s(a.$t("common.slots")),1),e(),n(o(d),{"columns-data":f,data:g,paginated:!1})])]),_:1},8,["title","sub-title"])}}});export{E as default};
