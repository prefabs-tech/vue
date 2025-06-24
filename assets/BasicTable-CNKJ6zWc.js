import{d as A,J as F,r as z,k as p,a1 as P,x as g,I as K,e as V,o as y,i as r,E as t,f as a,t as u,g as o,u as l,a as O,b as E,l as R}from"./index-CS6scmA6.js";import{j as m}from"./DzangolabVue3TanstackTable.es-DRQI2BX1.js";import{c as h,d as b,f as v}from"./data-BbDBEIKR.js";import{_ as q}from"./TablePage.vue_vue_type_style_index_0_lang-DsTj25Rr.js";import"./DzangolabVue3Form.es-DhvwW6mt.js";const B={class:"section-content"},M={class:"section-content"},N={class:"section-content"},j={class:"section-content"},L={class:"section-content"},J={class:"section-content"},U={class:"section-content"},I={class:"section-content"},Q={class:"section-content"},Y={class:"section-content"},W={class:"section-content"},H={class:"section-content"},X={key:0},G={class:"section-content"},Z={class:"section-content"},x={class:"section-content"},_={class:"section-content"},ee={class:"section-content"},te={class:"section-content"},ae={class:"section-content"},ne={name:"SortableTable"},ue=A({...ne,setup(le){const{t:i}=F(),T=[{accessorKey:"email",align:"left",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:i("table.placeholder.search"),header:"Email"},{accessorKey:"name",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:i("table.placeholder.search"),header:"Full name"},{accessorKey:"age",align:"right",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${i("table.placeholder.min")},${i("table.placeholder.max")}`,header:"Age",meta:{filterVariant:"range"}},{accessorKey:"city",align:"center",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:i("table.placeholder.city"),header:"City",meta:{filterVariant:"multiselect",filterOptions:h}}],c=[{accessorKey:"email",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:i("table.placeholder.search"),header:"Email"},{accessorKey:"name",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:i("table.placeholder.search"),header:"Full name"},{align:"right",accessorKey:"age",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${i("table.placeholder.min")},${i("table.placeholder.max")}`,header:"Age",meta:{filterVariant:"range"}},{accessorKey:"city",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:i("table.placeholder.city"),header:"City",meta:{filterVariant:"multiselect",filterOptions:h}}],f=z(!1),C=c.map(n=>({...n,enableSorting:!0})),D=["right","top","bottom","left"],$=[...c,{accessorKey:"disabled",align:"center",cell:({row:n})=>{var e,s;return p(P,{label:(e=n.original)!=null&&e.disabled?i("table.label.disabled"):i("table.label.enabled"),severity:(s=n.original)!=null&&s.disabled?"danger":"success"})},enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:i("table.placeholder.status"),header:"Status",meta:{filterVariant:"select",filterOptions:[{label:i("table.label.enabled"),value:!1},{label:i("table.label.disabled"),value:!0}]}}],w=c.map((n,e)=>({...n,tooltip:!0,tooltipOptions:{position:D[e]}})),S=[{accessorKey:"description",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:i("table.placeholder.search"),header:"Description"},{accessorKey:"quantity",dataType:"number",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${i("table.placeholder.min")},${i("table.placeholder.max")}`,header:()=>"Quantity",meta:{filterVariant:"range"}},{accessorKey:"amount",dataType:"currency",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${i("table.placeholder.min")},${i("table.placeholder.max")}`,header:"Amount",meta:{filterVariant:"range"}},{accessorKey:"date",dataType:"date",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:i("table.placeholder.dateRange"),header:"Date",meta:{filterVariant:"dateRange"}},{id:"action",cell:()=>p(g,{iconLeft:"pi pi-eye",variant:"textOnly",rounded:!0}),dataType:"other",header:()=>p("i",{class:"pi pi-cog"})}],k=[{accessorKey:"description",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:i("table.placeholder.search"),header:"Description"},{accessorKey:"quantity",dataType:"number",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${i("table.placeholder.min")},${i("table.placeholder.max")}`,header:()=>"Quantity",meta:{filterVariant:"range"},numberOptions:{locale:"en-IN"}},{accessorKey:"amount",dataType:"currency",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${i("table.placeholder.min")},${i("table.placeholder.max")}`,header:"Amount",meta:{filterVariant:"range"},numberOptions:{formatOptions:{currency:"EUR"},locale:"en-US"}},{accessorKey:"date",dataType:"date",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:i("table.placeholder.dateRange"),header:"Date",meta:{filterVariant:"dateRange"}},{accessorKey:"datetime",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:i("table.placeholder.dateRange"),header:"Datetime",dataType:"datetime",meta:{filterVariant:"dateRange"}},{id:"action",cell:()=>p(g,{iconLeft:"pi pi-eye",variant:"textOnly",rounded:!0}),dataType:"other",header:()=>p("i",{class:"pi pi-cog"})}];return(n,e)=>{const s=K("SshPre");return y(),V(q,{title:n.$t("table.title"),class:"demo data-table"},{toolbar:r(()=>[o(l(g),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=d=>n.$router.push("/table"))},null,8,["label"])]),default:r(()=>[e[64]||(e[64]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.basic")),1),e[8]||(e[8]=t()),a("div",B,[o(l(m),{"columns-data":c,data:l(b).slice(0,15),paginated:!1},null,8,["data"]),e[7]||(e[7]=t()),o(s,{language:"html-vue"},{default:r(()=>e[6]||(e[6]=[t(`
          <template>
            <Table
              :columns-data="columns"
              :data="data"
              :paginated="false"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import { city } from "./data";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            {
              accessorKey: "email",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
              header: "Email",
            },
            {
              accessorKey: "name",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
              header: "Full name",
            },
            {
              align: "right",
              accessorKey: "age",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: \`\${t("table.placeholder.min")},\${t("table.placeholder.max")}\`,
              header: "Age",
              meta: {
                filterVariant: "range",
              },
            },
            {
              accessorKey: "city",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.city"),
              header: "City",
              meta: {
                filterVariant: "multiselect",
                filterOptions: city,
              },
            },
          ];
  
          const data = [
            {
              id: 1,
              name: "John Doe",
              email: "john.doe@example.com",
              age: 28,
              city: "New York",
            },
            {
              id: 2,
              name: "Jane Elizabeth Smith",
              email: "jane.smith@example.com",
              age: 32,
              city: "Los Angeles",
            },
            ...
          ]
          <\/script>
        `)])),_:1})])]),e[65]||(e[65]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.pagination")),1),e[11]||(e[11]=t()),a("div",M,[o(l(m),{"columns-data":c,data:l(b)},null,8,["data"]),e[10]||(e[10]=t()),o(s,{language:"html-vue"},{default:r(()=>e[9]||(e[9]=[t(`
          <template>
            <Table :columns-data="columns" :data="data" />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            {
              accessorKey: "email",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
              header: "Email",
            },
            {
              accessorKey: "name",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
              header: "Full name",
            },
            {
              align: "right",
              accessorKey: "age",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: \`\${t("table.placeholder.min")},\${t("table.placeholder.max")}\`,
              header: "Age",
              meta: {
                filterVariant: "range",
              },
            },
            {
              accessorKey: "city",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.city"),
              header: "City",
              meta: {
                filterVariant: "multiselect",
                filterOptions: city,
              },
            },
          ];
  
          const data = [
            {
              id: 1,
              name: "John Doe",
              email: "john.doe@example.com",
              age: 28,
              city: "New York",
            },
            {
              id: 2,
              name: "Jane Elizabeth Smith",
              email: "jane.smith@example.com",
              age: 32,
              city: "Los Angeles",
            },
            ...
          ]
          <\/script>
        `)])),_:1})])]),e[66]||(e[66]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.sortable")),1),e[14]||(e[14]=t()),a("div",N,[o(l(m),{"columns-data":l(C),data:l(b),"initial-sorting":[{id:"email",desc:!1}],"show-reset-button":""},null,8,["columns-data","data"]),e[13]||(e[13]=t()),o(s,{language:"html-vue"},{default:r(()=>e[12]||(e[12]=[t(`
          <template>
            <Table
              :columns-data="sortableColumns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              show-reset-button
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]

          const sortableColumns = columns.map((column) => ({
            ...columns,
            enableSorting: true,
          }));
          <\/script>
        `)])),_:1})])]),e[67]||(e[67]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.rowSelection")),1),e[17]||(e[17]=t()),a("div",j,[o(l(m),{"columns-data":c,data:l(b).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["data"]),e[16]||(e[16]=t()),o(s,{language:"html-vue"},{default:r(()=>e[15]||(e[15]=[t(`
          <template>
            <Table
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              enable-row-selection
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `)])),_:1})])]),e[68]||(e[68]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.tooltip")),1),e[20]||(e[20]=t()),a("div",L,[o(l(m),{"columns-data":l(w),data:l(b).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["columns-data","data"]),e[19]||(e[19]=t()),o(s,{language:"html-vue"},{default:r(()=>e[18]||(e[18]=[t(`
            <template>
              <Table
                :columns-data="columnsWithTooltip"
                :data="data"
                :initial-sorting="[{ id: 'email', desc: false }]"
                enable-row-selection
              />
            </template>
      
            <script setup lang="ts">
            import { Table } from "@dzangolab/vue3-tanstack-table";
      
            import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
      
            const columns: Array<TableColumnDefinition> = [
              ...
            ];
    
            const data = [
              ...
            ];
  
            const tooltipPositions = ["right", "top", "bottom", "left"];
  
            const columnsWithTooltip = columns.map((column, index) => ({
              ...column,
              tooltip: true,
              tooltipOptions: {
                position: tooltipPositions[index],
              },
            }));
            <\/script>
          `)])),_:1})])]),e[69]||(e[69]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.columnAlignment")),1),e[23]||(e[23]=t()),a("div",J,[o(l(m),{"columns-data":T,data:l(b).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["data"]),e[22]||(e[22]=t()),o(s,{language:"html-vue"},{default:r(()=>e[21]||(e[21]=[t(`
          <template>
            <Table
              :columns-data="alignmentColumns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              enable-row-selection
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const alignmentColumns = [
            {
              accessorKey: "email",
              align: "left",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
              header: "Email",
            },
            {
              accessorKey: "name",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
              header: "Full name",
            },
            {
              accessorKey: "age",
              align: "right",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: \`\${t("table.placeholder.min")},\${t("table.placeholder.max")}\`,
              header: "Age",
              meta: {
                filterVariant: "range",
              },
            },
            {
              accessorKey: "city",
              align: "center",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.city"),
              header: "City",
              meta: {
                filterVariant: "multiselect",
                filterOptions: city,
              },
            },
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `)])),_:1})])]),e[70]||(e[70]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.columnAction")),1),e[26]||(e[26]=t()),a("div",U,[o(l(m),{"columns-data":c,data:l(b).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"show-column-action":""},null,8,["data"]),e[25]||(e[25]=t()),o(s,{language:"html-vue"},{default:r(()=>e[24]||(e[24]=[t(`
          <template>
            <Table
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              show-column-action
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `)])),_:1})])]),e[71]||(e[71]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.title")),1),e[29]||(e[29]=t()),a("div",I,[o(l(m),{"columns-data":c,data:l(b).slice(0,5),"title-info":{text:n.$t("table.label.users"),align:"left"}},null,8,["data","title-info"]),e[28]||(e[28]=t()),o(s,{language:"html-vue"},{default:r(()=>e[27]||(e[27]=[t(`
          <template>
            <Table 
              :columns-data="columns"
              :data="data"
              :title-info="{ text: 'Users', align: 'left' }"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `)])),_:1})])]),e[72]||(e[72]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.footer")),1),e[32]||(e[32]=t()),a("div",Q,[o(l(m),{"columns-data":c,data:l(b)},{footer:r(()=>[a("tr",null,[a("td",null,u(`${n.$t("table.label.totalRecords")}: ${l(b).length??"0"}`),1)])]),_:1},8,["data"]),e[31]||(e[31]=t()),o(s,{language:"html-vue"},{default:r(()=>e[30]||(e[30]=[t(`
          <template>
            <Table :columns-data="columns" :data="data">
              <template #footer>
                <tr>
                  <td>
                    {{ \`Total records: \${data.length ?? "0"}\` }}
                  </td>
                </tr>
              </template>
            </Table>
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `)])),_:1})])]),e[73]||(e[73]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.customVerticalBorder")),1),e[35]||(e[35]=t()),a("div",Y,[o(l(m),{"column-action-button-label":n.$t("table.label.order"),"columns-data":c,data:l(b),"initial-sorting":[{id:"email",desc:!1}],"visible-columns":["email","name","age","city"],class:"vertical","show-column-action":""},null,8,["column-action-button-label","data"]),e[34]||(e[34]=t()),o(s,{language:"html-vue"},{default:r(()=>e[33]||(e[33]=[t(`
          <template>
            <Table
              :column-action-button-label="$t('table.label.columnAction')"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :visible-columns="['email', 'name', 'age', 'city']"
              class="vertical"
              show-column-action
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>

          <style lang="css">
          .table-container.vertical .table-wrapper > table > tbody > tr,
          .table-container.vertical .table-wrapper > table > tbody > tr > td,
          .table-container.vertical .table-wrapper > table > thead tr > th {
            border: none;
          }

          .table-container.vertical .table-wrapper > table > tbody > tr > td,
          .table-container.vertical .table-wrapper > table > thead tr > th {
            border-left: var(--table-border);
            border-right: var(--table-border);
          }
          </style>
        `)])),_:1})])]),e[74]||(e[74]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.customHorizontalBorder")),1),e[38]||(e[38]=t()),a("div",W,[o(l(m),{"column-action-button-label":n.$t("table.label.order"),"columns-data":c,data:l(b),"initial-sorting":[{id:"email",desc:!1}],"visible-columns":["email","name","age","city"],class:"horizontal","show-column-action":""},null,8,["column-action-button-label","data"]),e[37]||(e[37]=t()),o(s,{language:"html-vue"},{default:r(()=>e[36]||(e[36]=[t(`
          <template>
            <Table
              :column-action-button-label="$t('table.label.columnAction')"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :visible-columns="['email', 'name', 'age', 'city']"
              class="vertical"
              show-column-action
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>

          <style lang="css">
          .table-container.horizontal .table-wrapper > table > tbody > tr > td,
          .table-container.horizontal .table-wrapper > table > thead tr > th {
            border: none;
          }
          </style>
        `)])),_:1})])]),e[75]||(e[75]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.customToolbar")),1),e[42]||(e[42]=t()),a("div",H,[o(l(m),{"columns-data":c,data:l(b).slice(0,5)},{toolbar:r(()=>[f.value?(y(),O("span",X,u(l(R)(Date())),1)):E("",!0),e[39]||(e[39]=t()),o(l(g),{label:n.$t("table.label.clickMe"),onClick:e[1]||(e[1]=d=>f.value=!f.value)},null,8,["label"])]),_:1},8,["data"]),e[41]||(e[41]=t()),o(s,{language:"html-vue"},{default:r(()=>e[40]||(e[40]=[t(`
          <template>
            <Table :columns-data="columns" :data="data">
              <template #toolbar>
                <span v-if="showDate">
                  {{ formatDateTime(Date()) }}
                </span>
                <ButtonElement 
                  label="Add record"
                  @click="showDate = !showDate"
                />
              </template>
            </Table>
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
          import { ButtonElement, formatDateTime } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ];

          const showDate = ref<boolean>(false);
          <\/script>
        `)])),_:1})])]),e[76]||(e[76]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.singleAction")),1),e[45]||(e[45]=t()),a("div",G,[o(l(m),{"columns-data":c,data:l(b).slice(10,15),"data-action-menu":[{icon:"pi pi-eye"}],"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:click":e[2]||(e[2]=d=>{})},null,8,["data"]),e[44]||(e[44]=t()),o(s,{language:"html-vue"},{default:r(()=>e[43]||(e[43]=[t(`
          <template>
            <Table
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  icon: 'pi pi-eye',
                },
              ]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              @action:click="(data) => {}"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `)])),_:1})])]),e[77]||(e[77]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.builtinActions")),1),e[48]||(e[48]=t()),a("div",Z,[o(l(m),{"columns-data":c,data:l(b).slice(10,15),"data-action-menu":[{label:n.$t("table.label.view")},{disabled:!0,label:n.$t("table.label.edit")},{disabled:d=>d.id!==11,label:n.$t("table.label.share")},{confirmationOptions:{body:n.$t("table.label.deleteRecordMessage"),header:n.$t("table.label.confirmation")},label:n.$t("table.label.delete"),requireConfirmationModal:!0}],"display-actions":d=>d.id!==12,"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:select":e[3]||(e[3]=d=>{})},null,8,["data","data-action-menu","display-actions"]),e[47]||(e[47]=t()),o(s,{language:"html-vue"},{default:r(()=>e[46]||(e[46]=[t(`
          <template>
            <Table
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  label: 'View',
                },
                {
                  disabled: true,
                  label: 'Edit',
                },
                {
                  label: 'Share',
                  disabled: (rowData) => rowData.id !== 11,
                },
                {
                  confirmationOptions: {
                    header: 'Are you sure!',
                    body: 'You are going to delete this data.',
                  },
                  label: 'Delete',
                  requireConfirmationModal: true,'
                },
              ]"
              :display-actions="(data) => data.id !== 12"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              @action:select="(data) => {}"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `)])),_:1})])]),e[78]||(e[78]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.filteredActions")),1),e[51]||(e[51]=t()),a("div",x,[o(l(m),{"columns-data":c,data:l(b).slice(10,15),"data-action-menu":[{display:d=>d.id!==12,label:n.$t("table.label.view")},{disabled:!0,display:d=>d.id!==12,label:n.$t("table.label.edit")},{disabled:d=>d.id!==11,display:d=>d.id!==12,label:n.$t("table.label.share")},{confirmationOptions:{header:n.$t("table.label.confirmation"),body:n.$t("table.label.deleteRecordMessage")},label:n.$t("table.label.delete"),requireConfirmationModal:!0}],"initial-sorting":[{id:"email",desc:!1}],"onAction:select":e[4]||(e[4]=d=>{})},null,8,["data","data-action-menu"]),e[50]||(e[50]=t()),o(s,{language:"html-vue"},{default:r(()=>e[49]||(e[49]=[t(`
          <template>
            <Table
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  display: (rowData) => rowData.id !== 12,
                  label: 'View',
                },
                {
                  disabled: true,
                  display: (rowData) => rowData.id !== 12,
                  label: 'Edit',
                },
                {
                  disabled: (rowData) => rowData.id !== 11,
                  display: (rowData) => rowData.id !== 12
                  label: 'Share',
                },
                {
                  confirmationOptions: {
                    header: 'Are you sure!',
                    body: 'You are going to delete this data.',
                  },
                  label: 'Delete',
                  requireConfirmationModal: true,'
                },
              ]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              @action:select="(rowData) => {}"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `)])),_:1})])]),e[79]||(e[79]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.singleActionMenu")),1),e[54]||(e[54]=t()),a("div",_,[o(l(m),{"columns-data":c,data:l(b).slice(10,15),"data-action-menu":[{label:n.$t("table.label.view")}],"initial-sorting":[{id:"email",desc:!1}],"single-action-mode":"menu","onAction:select":e[5]||(e[5]=d=>{})},null,8,["data","data-action-menu"]),e[53]||(e[53]=t()),o(s,{language:"html-vue"},{default:r(()=>e[52]||(e[52]=[t(`
          <template>
            <Table
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  label: 'View',
                },
              ]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              single-action-mode="menu"
              @action:select="(rowData) => {}"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `)])),_:1})])]),e[80]||(e[80]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.cellDataFormatting")),1),e[57]||(e[57]=t()),a("div",ee,[o(l(m),{"columns-data":k,data:l(v),"initial-sorting":[{id:"quantity",desc:!0}],paginated:!1},null,8,["data"]),e[56]||(e[56]=t()),o(s,{language:"html-vue"},{default:r(()=>e[55]||(e[55]=[t(`
          <template>
            <Table
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'quantity', desc: true }]"
              :paginated="false"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            {
              accessorKey: "description",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
              header: "Description",
            },
            {
              accessorKey: "quantity",
              dataType: "number",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: \`\${t("table.placeholder.min")},\${t("table.placeholder.max")}\`,
              header: () => "Quantity",
              meta: {
                filterVariant: "range",
              },
              numberOptions: {
                locale: "en-IN",
              },
            },
            {
              accessorKey: "amount",
              dataType: "currency",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: \`\${t("table.placeholder.min")},\${t("table.placeholder.max")}\`,
              header: "Amount",
              meta: {
                filterVariant: "range",
              },
              numberOptions: {
                formatOptions: {
                  currency: "EUR",
                },
                locale: "en-US",
              },
            },
            {
              accessorKey: "date",
              dataType: "date",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.dateRange"),
              header: "Date",
              meta: {
                filterVariant: "dateRange",
              },
            },
            {
              accessorKey: "datetime",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.dateRange"),
              header: "Datetime",
              dataType: "datetime",
              meta: {
                filterVariant: "dateRange",
              },
            },
            {
              id: "action",
              cell: () =>
                h(ButtonElement, {
                  iconLeft: "pi pi-eye",
                  variant: "textOnly",
                  rounded: true,
                }),
              dataType: "other",
              header: () =>
                h("i", {
                  class: "pi pi-cog",
                }),
            },
          ];
  
          const data = [
            ...
          ];
          <\/script>
        `)])),_:1})])]),e[81]||(e[81]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.customCellDataFormatting")),1),e[60]||(e[60]=t()),a("div",te,[o(l(m),{"columns-data":S,"custom-formatters":{currency:d=>`$${d}`,number:d=>`~${d}`},data:l(v),"initial-sorting":[{id:"quantity",desc:!0}],paginated:!1},null,8,["custom-formatters","data"]),e[59]||(e[59]=t()),o(s,{language:"html-vue"},{default:r(()=>e[58]||(e[58]=[t(`
          <template>
            <Table
              :columns-data="columns"
              :custom-formatters="{
                currency: (value) => \`$\${value}\`,
                number: (value) => \`~\${value}\`,
              }"
              :data="formatDemoData"
              :initial-sorting="[{ id: 'quantity', desc: true }]"
              :paginated="false"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            {
              accessorKey: "description",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
              header: "Description",
            },
            {
              accessorKey: "quantity",
              dataType: "number",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: \`\${t("table.placeholder.min")},\${t("table.placeholder.max")}\`,
              header: () => "Quantity",
              meta: {
                filterVariant: "range",
              },
            },
            {
              accessorKey: "amount",
              dataType: "currency",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: \`\${t("table.placeholder.min")},\${t("table.placeholder.max")}\`,
              header: "Amount",
              meta: {
                filterVariant: "range",
              },
            },
            {
              accessorKey: "date",
              dataType: "date",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.dateRange"),
              header: "Date",
              meta: {
                filterVariant: "dateRange",
              },
            },
            {
              id: "action",
              cell: () =>
                h(ButtonElement, {
                  iconLeft: "pi pi-eye",
                  variant: "textOnly",
                  rounded: true,
                }),
              dataType: "other",
              header: () =>
                h("i", {
                  class: "pi pi-cog",
                }),
            },
          ];
  
          const data = [
            ...
          ];
          <\/script>
        `)])),_:1})])]),e[82]||(e[82]=t()),a("section",null,[a("h2",null,u(n.$t("table.usage.centeredAlignedTable")),1),e[63]||(e[63]=t()),a("div",ae,[o(l(m),{"columns-data":$,data:l(b).slice(10,15),"initial-sorting":[{id:"email",desc:!1}],class:"center-aligned-content-table"},null,8,["data"]),e[62]||(e[62]=t()),o(s,{language:"html-vue"},{default:r(()=>e[61]||(e[61]=[t(`
          <template>
            <Table
              :columns-data="centerAlignedTableColumns"
              :data="data.slice(10, 15)"
              :initial-sorting="[{ id: 'email', desc: false }]"
              class="center-aligned-content-table"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ];

          const centerAlignedTableColumns = [
            ...columns,
            {
              accessorKey: "disabled",
              align: "center",
              cell: ({ row }) => {
                return h(BadgeComponent, {
                  label: row.original?.disabled
                    ? "Disabled"
                    : "Enabled",
                  severity: row.original?.disabled ? "danger" : "success",
                });
              },
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.status"),
              header: "Status",
              meta: {
                filterVariant: "select",
                filterOptions: [
                  {
                    label: "Enabled",
                    value: false,
                  },
                  {
                    label: "Disabled",
                    value: true,
                  },
                ],
              },
            },
          ];
          <\/script>

          <style lang="css">
          .demo-data-tables-page
            .table-wrapper
            > table
            > tbody
            > tr
            > td
            > .cell-name {
            background-color: #ccc;
            width: 300px;
          }

          .table-container.center-aligned-content-table .column-name {
            max-width: 30rem;
            min-width: 30rem;
            width: 30rem;
          }

          .table-container.center-aligned-content-table .column-age {
            max-width: 6rem;
            min-width: 6rem;
            width: 6rem;
          }

          .table-container.center-aligned-content-table .column-city {
            max-width: 8rem;
            min-width: 8rem;
            width: 8rem;
          }
          </style>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{ue as default};
