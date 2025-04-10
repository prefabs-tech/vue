import{Y as b}from"./DzangolabVue3TanstackTable.es-DgswUth_.js";import{d as T,r as D,D as w,e as C,o as g,w as i,B as a,f as l,t as d,i as o,u as e,a as $,b as k,Q as z,p as c}from"./index-Ds4pur8o.js";import{d as r}from"./data-G7xVDYni.js";import{_ as A}from"./TablePage.vue_vue_type_style_index_0_lang-CnYWISEE.js";import"./DzangolabVue3Form.es-De2gkO1z.js";const K={class:"section-content"},S={class:"section-content"},E={class:"section-content"},B={class:"section-content"},M={class:"section-content"},V={class:"section-content"},O={class:"section-content"},N={class:"section-content"},Y={class:"section-content"},P={class:"section-content"},j={class:"section-content"},q={key:0},J={class:"section-content"},F={class:"section-content"},R={class:"section-content"},W={class:"section-content"},L={name:"SortableTable"},Z=T({...L,setup(Q){const m=[{accessorKey:"email",header:"Email"},{accessorKey:"name",header:"Full name"},{align:"right",accessorKey:"age",header:"Age"},{accessorKey:"city",header:"City"}],p=D(!1),f=m.map(n=>({...n,enableSorting:!0})),v=["right","top","bottom","left"],y=m.map((n,t)=>({...n,tooltip:!0,tooltipOptions:{position:v[t]}}));return(n,t)=>{const u=w("SshPre");return g(),C(A,{title:n.$t("table.title"),class:"demo data-table"},{toolbar:i(()=>[o(e(c),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=s=>n.$router.push("/table"))},null,8,["label"])]),default:i(()=>[t[52]||(t[52]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.basic")),1),t[8]||(t[8]=a()),l("div",K,[o(e(b),{"columns-data":m,data:e(r).slice(0,15),paginated:!1},null,8,["data"]),t[7]||(t[7]=a()),o(u,{language:"html-vue"},{default:i(()=>t[6]||(t[6]=[a(`
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
              header: "Email",
            },
            {
              accessorKey: "name",
              header: "Full name",
            },
            {
              accessorKey: "age",
              header: "Age",
              align: "right",
            },
            {
              accessorKey: "city",
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
        `)])),_:1})])]),t[53]||(t[53]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.pagination")),1),t[11]||(t[11]=a()),l("div",S,[o(e(b),{"columns-data":m,data:e(r)},null,8,["data"]),t[10]||(t[10]=a()),o(u,{language:"html-vue"},{default:i(()=>t[9]||(t[9]=[a(`
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
              header: "Full name",
            },
            {
              accessorKey: "age",
              header: "Age",
              align: "right",
            },
            {
              accessorKey: "city",
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
        `)])),_:1})])]),t[54]||(t[54]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.sortable")),1),t[14]||(t[14]=a()),l("div",E,[o(e(b),{"columns-data":e(f),data:e(r),"initial-sorting":[{id:"email",desc:!1}],"show-reset-button":""},null,8,["columns-data","data"]),t[13]||(t[13]=a()),o(u,{language:"html-vue"},{default:i(()=>t[12]||(t[12]=[a(`
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
        `)])),_:1})])]),t[55]||(t[55]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.rowSelection")),1),t[17]||(t[17]=a()),l("div",B,[o(e(b),{"columns-data":m,data:e(r).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["data"]),t[16]||(t[16]=a()),o(u,{language:"html-vue"},{default:i(()=>t[15]||(t[15]=[a(`
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
        `)])),_:1})])]),t[56]||(t[56]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.tooltip")),1),t[20]||(t[20]=a()),l("div",M,[o(e(b),{"columns-data":e(y),data:e(r).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["columns-data","data"]),t[19]||(t[19]=a()),o(u,{language:"html-vue"},{default:i(()=>t[18]||(t[18]=[a(`
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
          `)])),_:1})])]),t[57]||(t[57]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.columnAction")),1),t[23]||(t[23]=a()),l("div",V,[o(e(b),{"columns-data":m,data:e(r).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"show-column-action":""},null,8,["data"]),t[22]||(t[22]=a()),o(u,{language:"html-vue"},{default:i(()=>t[21]||(t[21]=[a(`
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
        `)])),_:1})])]),t[58]||(t[58]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.title")),1),t[26]||(t[26]=a()),l("div",O,[o(e(b),{"columns-data":m,data:e(r).slice(0,5),"title-info":{text:n.$t("table.label.users"),align:"left"}},null,8,["data","title-info"]),t[25]||(t[25]=a()),o(u,{language:"html-vue"},{default:i(()=>t[24]||(t[24]=[a(`
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
        `)])),_:1})])]),t[59]||(t[59]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.footer")),1),t[29]||(t[29]=a()),l("div",N,[o(e(b),{"columns-data":m,data:e(r)},{footer:i(()=>[l("tr",null,[l("td",null,d(`${n.$t("table.label.totalRecords")}: ${e(r).length??"0"}`),1)])]),_:1},8,["data"]),t[28]||(t[28]=a()),o(u,{language:"html-vue"},{default:i(()=>t[27]||(t[27]=[a(`
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
        `)])),_:1})])]),t[60]||(t[60]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.customVerticalBorder")),1),t[32]||(t[32]=a()),l("div",Y,[o(e(b),{"column-action-button-label":n.$t("table.label.order"),"columns-data":m,data:e(r),"initial-sorting":[{id:"email",desc:!1}],"visible-columns":["email","name","age","city"],class:"vertical","show-column-action":""},null,8,["column-action-button-label","data"]),t[31]||(t[31]=a()),o(u,{language:"html-vue"},{default:i(()=>t[30]||(t[30]=[a(`
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
        `)])),_:1})])]),t[61]||(t[61]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.customHorizontalBorder")),1),t[35]||(t[35]=a()),l("div",P,[o(e(b),{"column-action-button-label":n.$t("table.label.order"),"columns-data":m,data:e(r),"initial-sorting":[{id:"email",desc:!1}],"visible-columns":["email","name","age","city"],class:"horizontal","show-column-action":""},null,8,["column-action-button-label","data"]),t[34]||(t[34]=a()),o(u,{language:"html-vue"},{default:i(()=>t[33]||(t[33]=[a(`
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
        `)])),_:1})])]),t[62]||(t[62]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.customToolbar")),1),t[39]||(t[39]=a()),l("div",j,[o(e(b),{"columns-data":m,data:e(r).slice(0,5)},{toolbar:i(()=>[p.value?(g(),$("span",q,d(e(z)(Date())),1)):k("",!0),t[36]||(t[36]=a()),o(e(c),{label:n.$t("table.label.clickMe"),onClick:t[1]||(t[1]=s=>p.value=!p.value)},null,8,["label"])]),_:1},8,["data"]),t[38]||(t[38]=a()),o(u,{language:"html-vue"},{default:i(()=>t[37]||(t[37]=[a(`
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
        `)])),_:1})])]),t[63]||(t[63]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.singleAction")),1),t[42]||(t[42]=a()),l("div",J,[o(e(b),{"columns-data":m,data:e(r).slice(10,15),"data-action-menu":[{icon:"pi pi-eye"}],"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:click":t[2]||(t[2]=s=>{})},null,8,["data"]),t[41]||(t[41]=a()),o(u,{language:"html-vue"},{default:i(()=>t[40]||(t[40]=[a(`
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
        `)])),_:1})])]),t[64]||(t[64]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.builtinActions")),1),t[45]||(t[45]=a()),l("div",F,[o(e(b),{"columns-data":m,data:e(r).slice(10,15),"data-action-menu":[{label:n.$t("table.label.view")},{disabled:!0,label:n.$t("table.label.edit")},{disabled:s=>s.id!==11,label:n.$t("table.label.share")},{confirmationOptions:{body:n.$t("table.label.deleteRecordMessage"),header:n.$t("table.label.confirmation")},label:n.$t("table.label.delete"),requireConfirmationModal:!0}],"display-actions":s=>s.id!==12,"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:select":t[3]||(t[3]=s=>{})},null,8,["data","data-action-menu","display-actions"]),t[44]||(t[44]=a()),o(u,{language:"html-vue"},{default:i(()=>t[43]||(t[43]=[a(`
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
        `)])),_:1})])]),t[65]||(t[65]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.filteredActions")),1),t[48]||(t[48]=a()),l("div",R,[o(e(b),{"columns-data":m,data:e(r).slice(10,15),"data-action-menu":[{display:s=>s.id!==12,label:n.$t("table.label.view")},{disabled:!0,display:s=>s.id!==12,label:n.$t("table.label.edit")},{disabled:s=>s.id!==11,display:s=>s.id!==12,label:n.$t("table.label.share")},{confirmationOptions:{header:n.$t("table.label.confirmation"),body:n.$t("table.label.deleteRecordMessage")},label:n.$t("table.label.delete"),requireConfirmationModal:!0}],"initial-sorting":[{id:"email",desc:!1}],"onAction:select":t[4]||(t[4]=s=>{})},null,8,["data","data-action-menu"]),t[47]||(t[47]=a()),o(u,{language:"html-vue"},{default:i(()=>t[46]||(t[46]=[a(`
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
        `)])),_:1})])]),t[66]||(t[66]=a()),l("section",null,[l("h2",null,d(n.$t("table.usage.singleActionMenu")),1),t[51]||(t[51]=a()),l("div",W,[o(e(b),{"columns-data":m,data:e(r).slice(10,15),"data-action-menu":[{label:n.$t("table.label.view")}],"initial-sorting":[{id:"email",desc:!1}],"single-action-mode":"menu","onAction:select":t[5]||(t[5]=s=>{})},null,8,["data","data-action-menu"]),t[50]||(t[50]=a()),o(u,{language:"html-vue"},{default:i(()=>t[49]||(t[49]=[a(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{Z as default};
