import{D as e,E as t,On as n,St as r,_ as i,b as a,bt as o,et as s,k as c,mt as l,o as u,qt as d,tr as f,v as p}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{b as m,x as h}from"./PrefabsTechVue3UI.es-EJDYzbRH.js";import{t as g}from"./PrefabsTechVue3TanstackTable.es-Dqv6JrPc.js";import{t as _}from"./UiPage-eTNUnuuQ.js";var v={class:`section-content`},y={class:`section-content`},b={class:`data-stat-group`},x={class:`section-content`},S=c({name:`DataDemo`,setup(c){let S=[{accessorKey:`prop`,header:`Property`},{accessorKey:`type`,header:`Type`},{accessorKey:`default`,header:`Default`},{accessorKey:`description`,header:`Description`}],C=[{default:`-`,description:`The caption displayed alongside the value.`,id:1,prop:`caption`,type:`String`},{default:`vertical`,description:`Specifies the direction to display the component.`,id:2,prop:`direction`,type:`"horizontal" | "vertical"`},{default:`attr`,description:`Defines which styling to apply to the component.`,id:3,prop:`mode`,type:`"attr" | "stat"`},{default:`-`,description:`The value to display.`,id:4,prop:`value`,type:`String | Number`}],w=[{accessorKey:`name`,header:`Name`},{accessorKey:`description`,header:`Description`}],T=[{description:"Content to place in the caption. Overrides the `caption` prop",id:1,name:`caption`},{description:"Content to place in the value. Overrides the `value` prop",id:3,name:`value`}],E=[{caption:`Name`,value:`John Smith`},{caption:`Age`,value:30},{caption:`Email`,value:`john.smith@example.com`},{caption:`Address`,value:`123 Main St, Springfield, USA`},{caption:`Status`,value:`Active`}],D={name:`John Smith`,revenue:`$1,030,217`,visitors:`3,825`};return(c,O)=>{let k=r(`SshPre`);return l(),p(_,{title:c.$t(`ui.data.title`),subtitle:c.$t(`ui.data.subtitle`),class:`demo`},{default:d(()=>[i(`section`,null,[i(`h2`,null,f(c.$t(`ui.data.usage.basic`)),1),O[2]||=t(),i(`div`,v,[e(n(h),{caption:c.$t(`ui.data.label.name`),value:D.name},null,8,[`caption`,`value`]),O[1]||=t(),e(k,{language:`html-vue`},{default:d(()=>[...O[0]||=[t(`
          <template>
            <Data caption="Name" value="John Smith" />
          </template>

          <script setup lang="ts">
          import { Data } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),O[12]||=t(),i(`section`,null,[i(`h2`,null,f(c.$t(`ui.data.usage.statMode`)),1),O[6]||=t(),i(`div`,y,[i(`div`,b,[e(n(h),{caption:c.$t(`ui.data.label.visitors`),value:D.visitors,mode:`stat`},null,8,[`caption`,`value`]),O[3]||=t(),e(n(h),{caption:c.$t(`ui.data.label.revenue`),value:D.revenue,mode:`stat`},null,8,[`caption`,`value`])]),O[5]||=t(),e(k,{language:`html-vue`},{default:d(()=>[...O[4]||=[t(`
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
        `,-1)]]),_:1})])]),O[13]||=t(),i(`section`,null,[i(`h2`,null,f(c.$t(`ui.data.usage.structuredData`)),1),O[9]||=t(),i(`div`,x,[e(n(m),null,{default:d(()=>[(l(),a(u,null,o(E,(t,r)=>e(n(h),s({key:`${t.caption}-${r}`},{ref_for:!0},t),null,16)),64))]),_:1}),O[8]||=t(),e(k,{language:`html-vue`},{default:d(()=>[...O[7]||=[t(`
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
        `,-1)]]),_:1})])]),O[14]||=t(),i(`section`,null,[i(`h2`,null,f(c.$t(`common.properties`,{value:`DataProperties`})),1),O[10]||=t(),e(n(g),{"columns-data":S,data:C,paginated:!1,"persist-state":!1})]),O[15]||=t(),i(`section`,null,[i(`h2`,null,f(c.$t(`common.slots`)),1),O[11]||=t(),e(n(g),{"columns-data":w,data:T,paginated:!1,"persist-state":!1})])]),_:1},8,[`title`,`subtitle`])}}});export{S as default};