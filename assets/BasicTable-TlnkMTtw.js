import{B as u}from"./DzangolabVue3TanstackTable.es-OufCTp9H.js";import{d as S,r as A,k as c,K as z,f as K,o as f,i,D as e,g as a,t as r,h as o,u as l,a as h,b as O,J as E,v as p}from"./index-4qXijAqf.js";import{d as m,f as y}from"./data-C-ninj2G.js";import{_ as q}from"./TablePage.vue_vue_type_style_index_0_lang-BSKO6oxw.js";import"./DzangolabVue3Form.es-BbhZLtC1.js";const B={class:"section-content"},N={class:"section-content"},F={class:"section-content"},M={class:"section-content"},V={class:"section-content"},J={class:"section-content"},L={class:"section-content"},P={class:"section-content"},R={class:"section-content"},U={class:"section-content"},j={class:"section-content"},Q={class:"section-content"},Y={key:0},W={class:"section-content"},I={class:"section-content"},H={class:"section-content"},G={class:"section-content"},X={class:"section-content"},Z={class:"section-content"},x={class:"section-content"},_={name:"SortableTable"},it=S({..._,setup(tt){const v=[{accessorKey:"email",align:"left",enableSorting:!0,header:"Email"},{accessorKey:"name",enableSorting:!0,header:"Full name"},{accessorKey:"age",align:"right",enableSorting:!0,header:"Age"},{accessorKey:"city",align:"center",enableSorting:!0,header:"City"}],b=[{accessorKey:"email",enableSorting:!0,header:"Email"},{accessorKey:"name",enableSorting:!0,header:"Full name"},{align:"right",accessorKey:"age",enableSorting:!0,header:"Age"},{accessorKey:"city",enableSorting:!0,header:"City"}],g=A(!1),T=b.map(n=>({...n,enableSorting:!0})),D=["right","top","bottom","left"],C=b.map(n=>n.accessorKey==="name"?{...n,align:"center",cell:({row:{original:t}})=>c("div",{class:"cell-name"},t.name),header:"Name"}:n),w=b.map((n,t)=>({...n,tooltip:!0,tooltipOptions:{position:D[t]}})),$=[{accessorKey:"description",enableSorting:!0,header:"Description"},{accessorKey:"quantity",dataType:"number",enableSorting:!0,header:()=>"Quantity"},{accessorKey:"amount",dataType:"currency",enableSorting:!0,header:"Amount"},{accessorKey:"date",dataType:"date",enableSorting:!0,header:"Date"},{id:"action",cell:()=>c(p,{iconLeft:"pi pi-eye",variant:"textOnly",rounded:!0}),dataType:"other",header:()=>c("i",{class:"pi pi-cog"})}],k=[{accessorKey:"description",enableSorting:!0,header:"Description"},{accessorKey:"quantity",dataType:"number",enableSorting:!0,header:()=>"Quantity",numberOptions:{locale:"en-IN"}},{accessorKey:"amount",dataType:"currency",enableSorting:!0,header:"Amount",numberOptions:{formatOptions:{currency:"EUR"},locale:"en-US"}},{accessorKey:"date",dataType:"date",enableSorting:!0,header:"Date"},{accessorKey:"datetime",enableSorting:!0,header:"Datetime",dataType:"datetime"},{id:"action",cell:()=>c(p,{iconLeft:"pi pi-eye",variant:"textOnly",rounded:!0}),dataType:"other",header:()=>c("i",{class:"pi pi-cog"})}];return(n,t)=>{const d=z("SshPre");return f(),K(q,{title:n.$t("table.title"),class:"demo data-table"},{toolbar:i(()=>[o(l(p),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=s=>n.$router.push("/table"))},null,8,["label"])]),default:i(()=>[t[64]||(t[64]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.basic")),1),t[8]||(t[8]=e()),a("div",B,[o(l(u),{"columns-data":b,data:l(m).slice(0,15),paginated:!1},null,8,["data"]),t[7]||(t[7]=e()),o(d,{language:"html-vue"},{default:i(()=>t[6]||(t[6]=[e(`
          <template>
            <Table
              :columns-data="columns"
              :data="data"
              :paginated="false"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            {
              accessorKey: "email",
              enableSorting: true,
              header: "Email",
            },
            {
              accessorKey: "name",
              enableSorting: true,
              header: "Full name",
            },
            {
              accessorKey: "age",
              enableSorting: true,
              header: "Age",
              align: "right",
            },
            {
              accessorKey: "city",
              enableSorting: true,
              header: "City",
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
        `)])),_:1})])]),t[65]||(t[65]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.pagination")),1),t[11]||(t[11]=e()),a("div",N,[o(l(u),{"columns-data":b,data:l(m)},null,8,["data"]),t[10]||(t[10]=e()),o(d,{language:"html-vue"},{default:i(()=>t[9]||(t[9]=[e(`
          <template>
            <Table :columns-data="columns" :data="data" />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            {
              accessorKey: "email",
              enableSorting: true,
              header: "Email",
            },
            {
              accessorKey: "name",
              enableSorting: true,
              header: "Full name",
            },
            {
              accessorKey: "age",
              enableSorting: true,
              header: "Age",
              align: "right",
            },
            {
              accessorKey: "city",
              enableSorting: true,
              header: "City",
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
        `)])),_:1})])]),t[66]||(t[66]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.sortable")),1),t[14]||(t[14]=e()),a("div",F,[o(l(u),{"columns-data":l(T),data:l(m),"initial-sorting":[{id:"email",desc:!1}],"show-reset-button":""},null,8,["columns-data","data"]),t[13]||(t[13]=e()),o(d,{language:"html-vue"},{default:i(()=>t[12]||(t[12]=[e(`
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
        `)])),_:1})])]),t[67]||(t[67]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.rowSelection")),1),t[17]||(t[17]=e()),a("div",M,[o(l(u),{"columns-data":b,data:l(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["data"]),t[16]||(t[16]=e()),o(d,{language:"html-vue"},{default:i(()=>t[15]||(t[15]=[e(`
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
        `)])),_:1})])]),t[68]||(t[68]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.tooltip")),1),t[20]||(t[20]=e()),a("div",V,[o(l(u),{"columns-data":l(w),data:l(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["columns-data","data"]),t[19]||(t[19]=e()),o(d,{language:"html-vue"},{default:i(()=>t[18]||(t[18]=[e(`
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
          `)])),_:1})])]),t[69]||(t[69]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.columnAlignment")),1),t[23]||(t[23]=e()),a("div",J,[o(l(u),{"columns-data":v,data:l(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["data"]),t[22]||(t[22]=e()),o(d,{language:"html-vue"},{default:i(()=>t[21]||(t[21]=[e(`
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
              enableSorting: true,
              header: "Email",
            },
            {
              accessorKey: "name",
              enableSorting: true,
              header: "Full name",
            },
            {
              accessorKey: "age",
              align: "right",
              enableSorting: true,
              header: "Age",
            },
            {
              accessorKey: "city",
              align: "center",
              enableSorting: true,
              header: "City",
            },
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `)])),_:1})])]),t[70]||(t[70]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.columnAction")),1),t[26]||(t[26]=e()),a("div",L,[o(l(u),{"columns-data":b,data:l(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"show-column-action":""},null,8,["data"]),t[25]||(t[25]=e()),o(d,{language:"html-vue"},{default:i(()=>t[24]||(t[24]=[e(`
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
        `)])),_:1})])]),t[71]||(t[71]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.title")),1),t[29]||(t[29]=e()),a("div",P,[o(l(u),{"columns-data":b,data:l(m).slice(0,5),"title-info":{text:n.$t("table.label.users"),align:"left"}},null,8,["data","title-info"]),t[28]||(t[28]=e()),o(d,{language:"html-vue"},{default:i(()=>t[27]||(t[27]=[e(`
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
        `)])),_:1})])]),t[72]||(t[72]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.footer")),1),t[32]||(t[32]=e()),a("div",R,[o(l(u),{"columns-data":b,data:l(m)},{footer:i(()=>[a("tr",null,[a("td",null,r(`${n.$t("table.label.totalRecords")}: ${l(m).length??"0"}`),1)])]),_:1},8,["data"]),t[31]||(t[31]=e()),o(d,{language:"html-vue"},{default:i(()=>t[30]||(t[30]=[e(`
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
        `)])),_:1})])]),t[73]||(t[73]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.customVerticalBorder")),1),t[35]||(t[35]=e()),a("div",U,[o(l(u),{"column-action-button-label":n.$t("table.label.order"),"columns-data":b,data:l(m),"initial-sorting":[{id:"email",desc:!1}],"visible-columns":["email","name","age","city"],class:"vertical","show-column-action":""},null,8,["column-action-button-label","data"]),t[34]||(t[34]=e()),o(d,{language:"html-vue"},{default:i(()=>t[33]||(t[33]=[e(`
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
        `)])),_:1})])]),t[74]||(t[74]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.customHorizontalBorder")),1),t[38]||(t[38]=e()),a("div",j,[o(l(u),{"column-action-button-label":n.$t("table.label.order"),"columns-data":b,data:l(m),"initial-sorting":[{id:"email",desc:!1}],"visible-columns":["email","name","age","city"],class:"horizontal","show-column-action":""},null,8,["column-action-button-label","data"]),t[37]||(t[37]=e()),o(d,{language:"html-vue"},{default:i(()=>t[36]||(t[36]=[e(`
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
        `)])),_:1})])]),t[75]||(t[75]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.customToolbar")),1),t[42]||(t[42]=e()),a("div",Q,[o(l(u),{"columns-data":b,data:l(m).slice(0,5)},{toolbar:i(()=>[g.value?(f(),h("span",Y,r(l(E)(Date())),1)):O("",!0),t[39]||(t[39]=e()),o(l(p),{label:n.$t("table.label.clickMe"),onClick:t[1]||(t[1]=s=>g.value=!g.value)},null,8,["label"])]),_:1},8,["data"]),t[41]||(t[41]=e()),o(d,{language:"html-vue"},{default:i(()=>t[40]||(t[40]=[e(`
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
        `)])),_:1})])]),t[76]||(t[76]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.singleAction")),1),t[45]||(t[45]=e()),a("div",W,[o(l(u),{"columns-data":b,data:l(m).slice(10,15),"data-action-menu":[{icon:"pi pi-eye"}],"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:click":t[2]||(t[2]=s=>{})},null,8,["data"]),t[44]||(t[44]=e()),o(d,{language:"html-vue"},{default:i(()=>t[43]||(t[43]=[e(`
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
        `)])),_:1})])]),t[77]||(t[77]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.builtinActions")),1),t[48]||(t[48]=e()),a("div",I,[o(l(u),{"columns-data":b,data:l(m).slice(10,15),"data-action-menu":[{label:n.$t("table.label.view")},{disabled:!0,label:n.$t("table.label.edit")},{disabled:s=>s.id!==11,label:n.$t("table.label.share")},{confirmationOptions:{body:n.$t("table.label.deleteRecordMessage"),header:n.$t("table.label.confirmation")},label:n.$t("table.label.delete"),requireConfirmationModal:!0}],"display-actions":s=>s.id!==12,"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:select":t[3]||(t[3]=s=>{})},null,8,["data","data-action-menu","display-actions"]),t[47]||(t[47]=e()),o(d,{language:"html-vue"},{default:i(()=>t[46]||(t[46]=[e(`
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
        `)])),_:1})])]),t[78]||(t[78]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.filteredActions")),1),t[51]||(t[51]=e()),a("div",H,[o(l(u),{"columns-data":b,data:l(m).slice(10,15),"data-action-menu":[{display:s=>s.id!==12,label:n.$t("table.label.view")},{disabled:!0,display:s=>s.id!==12,label:n.$t("table.label.edit")},{disabled:s=>s.id!==11,display:s=>s.id!==12,label:n.$t("table.label.share")},{confirmationOptions:{header:n.$t("table.label.confirmation"),body:n.$t("table.label.deleteRecordMessage")},label:n.$t("table.label.delete"),requireConfirmationModal:!0}],"initial-sorting":[{id:"email",desc:!1}],"onAction:select":t[4]||(t[4]=s=>{})},null,8,["data","data-action-menu"]),t[50]||(t[50]=e()),o(d,{language:"html-vue"},{default:i(()=>t[49]||(t[49]=[e(`
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
        `)])),_:1})])]),t[79]||(t[79]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.singleActionMenu")),1),t[54]||(t[54]=e()),a("div",G,[o(l(u),{"columns-data":b,data:l(m).slice(10,15),"data-action-menu":[{label:n.$t("table.label.view")}],"initial-sorting":[{id:"email",desc:!1}],"single-action-mode":"menu","onAction:select":t[5]||(t[5]=s=>{})},null,8,["data","data-action-menu"]),t[53]||(t[53]=e()),o(d,{language:"html-vue"},{default:i(()=>t[52]||(t[52]=[e(`
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
        `)])),_:1})])]),t[80]||(t[80]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.cellDataFormatting")),1),t[57]||(t[57]=e()),a("div",X,[o(l(u),{"columns-data":k,data:l(y),"initial-sorting":[{id:"quantity",desc:!0}],paginated:!1},null,8,["data"]),t[56]||(t[56]=e()),o(d,{language:"html-vue"},{default:i(()=>t[55]||(t[55]=[e(`
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
              enableSorting: true,
              header: "Description",
            },
            {
              accessorKey: "quantity",
              dataType: "number",
              enableSorting: true,
              header: () => "Quantity",
              numberOptions: {
                locale: "en-IN",
              }
            },
            {
              accessorKey: "amount",
              dataType: "currency",
              enableSorting: true,
              header: "Amount",
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
              enableSorting: true,
              header: "Date",
            },
            {
              accessorKey: "datetime",
              enableSorting: true,
              header: "Datetime",
              dataType: "datetime",
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
        `)])),_:1})])]),t[81]||(t[81]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.customCellDataFormatting")),1),t[60]||(t[60]=e()),a("div",Z,[o(l(u),{"columns-data":$,"custom-formatters":{currency:s=>`$${s}`,number:s=>`~${s}`},data:l(y),"initial-sorting":[{id:"quantity",desc:!0}],paginated:!1},null,8,["custom-formatters","data"]),t[59]||(t[59]=e()),o(d,{language:"html-vue"},{default:i(()=>t[58]||(t[58]=[e(`
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
              enableSorting: true,
              header: "Description",
            },
            {
              accessorKey: "quantity",
              dataType: "number",
              enableSorting: true,
              header: () => "Quantity",
            },
            {
              accessorKey: "amount",
              dataType: "currency",
              enableSorting: true,
              header: "Amount",
            },
            {
              accessorKey: "date",
              dataType: "date",
              enableSorting: true,
              header: "Date",
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
        `)])),_:1})])]),t[82]||(t[82]=e()),a("section",null,[a("h2",null,r(n.$t("table.usage.centeredAlignedTable")),1),t[63]||(t[63]=e()),a("div",x,[o(l(u),{"columns-data":l(C),data:l(m).slice(10,15),"initial-sorting":[{id:"email",desc:!1}],class:"center-aligned-content-table"},null,8,["columns-data","data"]),t[62]||(t[62]=e()),o(d,{language:"html-vue"},{default:i(()=>t[61]||(t[61]=[e(`
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

          const centerAlignedTableColumns = columns.map((column) => {
            if (column.accessorKey === "name") {
              return {
                ...column,
                align: "center",
                cell: ({ row: { original } }) => h(
                  "div",
                  {
                    class: "cell-name",
                  },
                  original.name
                ),
                header: "Name"
              };
            }

            return column;
          });
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{it as default};
