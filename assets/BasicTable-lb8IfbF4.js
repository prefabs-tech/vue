import{n as b}from"./DzangolabVue3TanstackTable.es-C99D3zUQ.js";import{d as T,r as D,G as w,e as C,o as g,g as i,A as a,f as n,t as d,i as o,u as e,a as $,b as k,Q as z,p as c}from"./index-BzuCpy3w.js";import{d as r}from"./data-G7xVDYni.js";import{_ as A}from"./TablePage.vue_vue_type_style_index_0_lang-BLdkx4eW.js";import"./DzangolabVue3Form.es-lbQj3UTX.js";const K={class:"section-content"},S={class:"section-content"},E={class:"section-content"},B={class:"section-content"},M={class:"section-content"},V={class:"section-content"},O={class:"section-content"},N={class:"section-content"},P={class:"section-content"},j={class:"section-content"},q={class:"section-content"},J={key:0},Y={class:"section-content"},F={class:"section-content"},R={class:"section-content"},W={class:"section-content"},L={name:"SortableTable"},Z=T({...L,setup(Q){const m=[{accessorKey:"email",header:"Email"},{accessorKey:"name",header:"Full name"},{align:"right",accessorKey:"age",header:"Age"},{accessorKey:"city",header:"City"}],p=D(!1),f=m.map(l=>({...l,enableSorting:!0})),v=["right","top","bottom","left"],y=m.map((l,t)=>({...l,tooltip:!0,tooltipOptions:{position:v[t]}}));return(l,t)=>{const u=w("SshPre");return g(),C(A,{title:l.$t("table.title"),class:"demo data-table"},{toolbar:i(()=>[o(e(c),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=s=>l.$router.push("/table"))},null,8,["label"])]),default:i(()=>[t[52]||(t[52]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.basic")),1),t[8]||(t[8]=a()),n("div",K,[o(e(b),{"columns-data":m,data:e(r).slice(0,15),paginated:!1},null,8,["data"]),t[7]||(t[7]=a()),o(u,{language:"html-vue"},{default:i(()=>t[6]||(t[6]=[a(`
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
        `)])),_:1})])]),t[53]||(t[53]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.pagination")),1),t[11]||(t[11]=a()),n("div",S,[o(e(b),{"columns-data":m,data:e(r)},null,8,["data"]),t[10]||(t[10]=a()),o(u,{language:"html-vue"},{default:i(()=>t[9]||(t[9]=[a(`
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
        `)])),_:1})])]),t[54]||(t[54]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.sortable")),1),t[14]||(t[14]=a()),n("div",E,[o(e(b),{"columns-data":e(f),data:e(r),"initial-sorting":[{id:"email",desc:!1}],"show-reset-button":""},null,8,["columns-data","data"]),t[13]||(t[13]=a()),o(u,{language:"html-vue"},{default:i(()=>t[12]||(t[12]=[a(`
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
        `)])),_:1})])]),t[55]||(t[55]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.rowSelection")),1),t[17]||(t[17]=a()),n("div",B,[o(e(b),{"columns-data":m,data:e(r).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["data"]),t[16]||(t[16]=a()),o(u,{language:"html-vue"},{default:i(()=>t[15]||(t[15]=[a(`
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
        `)])),_:1})])]),t[56]||(t[56]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.tooltip")),1),t[20]||(t[20]=a()),n("div",M,[o(e(b),{"columns-data":e(y),data:e(r).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["columns-data","data"]),t[19]||(t[19]=a()),o(u,{language:"html-vue"},{default:i(()=>t[18]||(t[18]=[a(`
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
          `)])),_:1})])]),t[57]||(t[57]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.columnAction")),1),t[23]||(t[23]=a()),n("div",V,[o(e(b),{"columns-data":m,data:e(r).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"show-column-action":""},null,8,["data"]),t[22]||(t[22]=a()),o(u,{language:"html-vue"},{default:i(()=>t[21]||(t[21]=[a(`
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
        `)])),_:1})])]),t[58]||(t[58]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.title")),1),t[26]||(t[26]=a()),n("div",O,[o(e(b),{"columns-data":m,data:e(r).slice(0,5),"title-info":{text:l.$t("table.label.users"),align:"left"}},null,8,["data","title-info"]),t[25]||(t[25]=a()),o(u,{language:"html-vue"},{default:i(()=>t[24]||(t[24]=[a(`
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
        `)])),_:1})])]),t[59]||(t[59]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.footer")),1),t[29]||(t[29]=a()),n("div",N,[o(e(b),{"columns-data":m,data:e(r)},{footer:i(()=>[n("tr",null,[n("td",null,d(`${l.$t("table.label.totalRecords")}: ${e(r).length??"0"}`),1)])]),_:1},8,["data"]),t[28]||(t[28]=a()),o(u,{language:"html-vue"},{default:i(()=>t[27]||(t[27]=[a(`
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
        `)])),_:1})])]),t[60]||(t[60]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.customVerticalBorder")),1),t[32]||(t[32]=a()),n("div",P,[o(e(b),{"column-action-button-label":l.$t("table.label.order"),"columns-data":m,data:e(r),"initial-sorting":[{id:"email",desc:!1}],"visible-columns":["email","name","age","city"],class:"vertical","show-column-action":""},null,8,["column-action-button-label","data"]),t[31]||(t[31]=a()),o(u,{language:"html-vue"},{default:i(()=>t[30]||(t[30]=[a(`
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
        `)])),_:1})])]),t[61]||(t[61]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.customHorizontalBorder")),1),t[35]||(t[35]=a()),n("div",j,[o(e(b),{"column-action-button-label":l.$t("table.label.order"),"columns-data":m,data:e(r),"initial-sorting":[{id:"email",desc:!1}],"visible-columns":["email","name","age","city"],class:"horizontal","show-column-action":""},null,8,["column-action-button-label","data"]),t[34]||(t[34]=a()),o(u,{language:"html-vue"},{default:i(()=>t[33]||(t[33]=[a(`
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
        `)])),_:1})])]),t[62]||(t[62]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.customToolbar")),1),t[39]||(t[39]=a()),n("div",q,[o(e(b),{"columns-data":m,data:e(r).slice(0,5)},{toolbar:i(()=>[p.value?(g(),$("span",J,d(e(z)(Date())),1)):k("",!0),t[36]||(t[36]=a()),o(e(c),{label:l.$t("table.label.clickMe"),onClick:t[1]||(t[1]=s=>p.value=!p.value)},null,8,["label"])]),_:1},8,["data"]),t[38]||(t[38]=a()),o(u,{language:"html-vue"},{default:i(()=>t[37]||(t[37]=[a(`
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
        `)])),_:1})])]),t[63]||(t[63]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.singleAction")),1),t[42]||(t[42]=a()),n("div",Y,[o(e(b),{"columns-data":m,data:e(r).slice(10,15),"data-action-menu":[{icon:"pi pi-eye"}],"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:click":t[2]||(t[2]=s=>{})},null,8,["data"]),t[41]||(t[41]=a()),o(u,{language:"html-vue"},{default:i(()=>t[40]||(t[40]=[a(`
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
        `)])),_:1})])]),t[64]||(t[64]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.builtinActions")),1),t[45]||(t[45]=a()),n("div",F,[o(e(b),{"columns-data":m,data:e(r).slice(10,15),"data-action-menu":[{label:l.$t("table.label.view")},{disabled:!0,label:l.$t("table.label.edit")},{disabled:s=>s.id!==11,label:l.$t("table.label.share")},{confirmationOptions:{body:l.$t("table.label.deleteRecordMessage"),header:l.$t("table.label.confirmation")},label:l.$t("table.label.delete"),requireConfirmationModal:!0}],"display-actions":s=>s.id!==12,"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:select":t[3]||(t[3]=s=>{})},null,8,["data","data-action-menu","display-actions"]),t[44]||(t[44]=a()),o(u,{language:"html-vue"},{default:i(()=>t[43]||(t[43]=[a(`
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
        `)])),_:1})])]),t[65]||(t[65]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.filteredActions")),1),t[48]||(t[48]=a()),n("div",R,[o(e(b),{"columns-data":m,data:e(r).slice(10,15),"data-action-menu":[{display:s=>s.id!==12,label:l.$t("table.label.view")},{disabled:!0,display:s=>s.id!==12,label:l.$t("table.label.edit")},{disabled:s=>s.id!==11,display:s=>s.id!==12,label:l.$t("table.label.share")},{confirmationOptions:{header:l.$t("table.label.confirmation"),body:l.$t("table.label.deleteRecordMessage")},label:l.$t("table.label.delete"),requireConfirmationModal:!0}],"initial-sorting":[{id:"email",desc:!1}],"onAction:select":t[4]||(t[4]=s=>{})},null,8,["data","data-action-menu"]),t[47]||(t[47]=a()),o(u,{language:"html-vue"},{default:i(()=>t[46]||(t[46]=[a(`
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
        `)])),_:1})])]),t[66]||(t[66]=a()),n("section",null,[n("h2",null,d(l.$t("table.usage.singleActionMenu")),1),t[51]||(t[51]=a()),n("div",W,[o(e(b),{"columns-data":m,data:e(r).slice(10,15),"data-action-menu":[{label:l.$t("table.label.view")}],"initial-sorting":[{id:"email",desc:!1}],"single-action-mode":"menu","onAction:select":t[5]||(t[5]=s=>{})},null,8,["data","data-action-menu"]),t[50]||(t[50]=a()),o(u,{language:"html-vue"},{default:i(()=>t[49]||(t[49]=[a(`
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
