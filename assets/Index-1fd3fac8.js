import{Z as d}from"./DzangolabVue3TanstackTable.es-4d22ca0d.js";import{d as D,J as _,o as m,c as S,w as i,K as n,D as o,ao as b,W as e,f as t,L as s,av as l,aw as C,a as A,F as N,b as k,M as K}from"./index-729398ab-b294403d.js";import{_ as z}from"./UiPage.vue_vue_type_style_index_0_lang-ae0d4afa.js";const J={class:"section-content"},P={class:"section-content"},V={class:"data-stat-group"},w={class:"section-content"},G=D({__name:"Index",setup(B){const v=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],h=[{default:"-",description:"The caption displayed alongside the value.",id:1,prop:"caption",type:"String"},{default:"vertical",description:"Specifies the direction to display the component.",id:2,prop:"direction",type:'"horizontal" | "vertical"'},{default:"attr",description:"Defines which styling to apply to the component.",id:3,prop:"mode",type:'"attr" | "stat"'},{default:"-",description:"The value to display.",id:4,prop:"value",type:"String | Number"}],f=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}],g=[{description:"Content to place in the caption. Overrides the `caption` prop",id:1,name:"caption"},{description:"Content to place in the value. Overrides the `value` prop",id:3,name:"value"}],y=[{caption:"Name",value:"John Smith"},{caption:"Age",value:30},{caption:"Email",value:"john.smith@example.com"},{caption:"Address",value:"123 Main St, Springfield, USA"},{caption:"Status",value:"Active"}],r={name:"John Smith",revenue:"$1,030,217",visitors:"3,825"};return(a,c)=>{const p=_("SshPre");return m(),S(z,{title:a.$t("ui.data.title"),"sub-title":a.$t("ui.data.subtitle"),class:"demo"},{toolbar:i(()=>[n(o(b),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:c[0]||(c[0]=u=>a.$router.push("/ui"))},null,8,["label"])]),default:i(()=>[e(),t("section",null,[t("h2",null,s(a.$t("ui.data.usage.basic")),1),e(),t("div",J,[n(o(l),{caption:a.$t("ui.data.label.name"),value:r.name},null,8,["caption","value"]),e(),n(p,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Data caption="Name" value="John Smith" />
          </template>

          <script setup lang="ts">
          import { Data } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,s(a.$t("ui.data.usage.statMode")),1),e(),t("div",P,[t("div",V,[n(o(l),{caption:a.$t("ui.data.label.visitors"),value:r.visitors,mode:"stat"},null,8,["caption","value"]),e(),n(o(l),{caption:a.$t("ui.data.label.revenue"),value:r.revenue,mode:"stat"},null,8,["caption","value"])]),e(),n(p,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,s(a.$t("ui.data.usage.structuredData")),1),e(),t("div",w,[n(o(C),null,{default:i(()=>[(m(),A(N,null,k(y,(u,$)=>n(o(l),K({key:`${u.caption}-${$}`},u),null,16)),64))]),_:1}),e(),n(p,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,s(a.$t("common.properties",{value:"DataProperties"})),1),e(),n(o(d),{"columns-data":v,data:h,paginated:!1})]),e(),t("section",null,[t("h2",null,s(a.$t("common.slots")),1),e(),n(o(d),{"columns-data":f,data:g,paginated:!1})])]),_:1},8,["title","sub-title"])}}});export{G as default};
