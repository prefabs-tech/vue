import{Y as b}from"./DzangolabVue3TanstackTable.es-Cpb9HpNv.js";import{d as T,r as D,D as C,e as k,o as g,w as s,B as a,f as n,t as d,i as o,u as l,a as w,b as $,Q as z,p as f}from"./index-CcXXiZBJ.js";import{d as m}from"./data-G7xVDYni.js";import{_ as A}from"./TablePage.vue_vue_type_style_index_0_lang-BiBflRuM.js";import"./DzangolabVue3Form.es-fB4Y1Uvk.js";const K={class:"section-content"},S={class:"section-content"},E={class:"section-content"},M={class:"section-content"},B={class:"section-content"},O={class:"section-content"},V={class:"section-content"},N={class:"section-content"},Y={class:"section-content"},P={key:0},j={class:"section-content"},q={class:"section-content"},J={class:"section-content"},F={class:"section-content"},R={name:"SortableTable"},I=T({...R,setup(W){const u=[{accessorKey:"email",header:"Email"},{accessorKey:"name",header:"Full name"},{align:"right",accessorKey:"age",header:"Age"},{accessorKey:"city",header:"City"}],p=D(!1),c=u.map(e=>({...e,enableSorting:!0})),y=["right","top","bottom","left"],v=u.map((e,t)=>({...e,tooltip:!0,tooltipOptions:{position:y[t]}}));return(e,t)=>{const r=C("SshPre");return g(),k(A,{title:e.$t("table.title"),class:"demo data-table"},{toolbar:s(()=>[o(l(f),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=i=>e.$router.push("/table"))},null,8,["label"])]),default:s(()=>[t[46]||(t[46]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.basic")),1),t[8]||(t[8]=a()),n("div",K,[o(l(b),{"columns-data":u,data:l(m).slice(0,15),paginated:!1},null,8,["data"]),t[7]||(t[7]=a()),o(r,{language:"html-vue"},{default:s(()=>t[6]||(t[6]=[a(`
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
        `)])),_:1})])]),t[47]||(t[47]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.pagination")),1),t[11]||(t[11]=a()),n("div",S,[o(l(b),{"columns-data":u,data:l(m)},null,8,["data"]),t[10]||(t[10]=a()),o(r,{language:"html-vue"},{default:s(()=>t[9]||(t[9]=[a(`
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
        `)])),_:1})])]),t[48]||(t[48]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.sortable")),1),t[14]||(t[14]=a()),n("div",E,[o(l(b),{"columns-data":l(c),data:l(m),"initial-sorting":[{id:"email",desc:!1}],"show-reset-button":""},null,8,["columns-data","data"]),t[13]||(t[13]=a()),o(r,{language:"html-vue"},{default:s(()=>t[12]||(t[12]=[a(`
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
        `)])),_:1})])]),t[49]||(t[49]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.rowSelection")),1),t[17]||(t[17]=a()),n("div",M,[o(l(b),{"columns-data":u,data:l(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["data"]),t[16]||(t[16]=a()),o(r,{language:"html-vue"},{default:s(()=>t[15]||(t[15]=[a(`
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
        `)])),_:1})])]),t[50]||(t[50]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.tooltip")),1),t[20]||(t[20]=a()),n("div",B,[o(l(b),{"columns-data":l(v),data:l(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["columns-data","data"]),t[19]||(t[19]=a()),o(r,{language:"html-vue"},{default:s(()=>t[18]||(t[18]=[a(`
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
          `)])),_:1})])]),t[51]||(t[51]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.columnAction")),1),t[23]||(t[23]=a()),n("div",O,[o(l(b),{"columns-data":u,data:l(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"show-column-action":""},null,8,["data"]),t[22]||(t[22]=a()),o(r,{language:"html-vue"},{default:s(()=>t[21]||(t[21]=[a(`
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
        `)])),_:1})])]),t[52]||(t[52]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.title")),1),t[26]||(t[26]=a()),n("div",V,[o(l(b),{"columns-data":u,data:l(m).slice(0,5),"title-info":{text:e.$t("table.label.users"),align:"left"}},null,8,["data","title-info"]),t[25]||(t[25]=a()),o(r,{language:"html-vue"},{default:s(()=>t[24]||(t[24]=[a(`
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
        `)])),_:1})])]),t[53]||(t[53]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.footer")),1),t[29]||(t[29]=a()),n("div",N,[o(l(b),{"columns-data":u,data:l(m)},{footer:s(()=>[n("tr",null,[n("td",null,d(`${e.$t("table.label.totalRecords")}: ${l(m).length??"0"}`),1)])]),_:1},8,["data"]),t[28]||(t[28]=a()),o(r,{language:"html-vue"},{default:s(()=>t[27]||(t[27]=[a(`
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
        `)])),_:1})])]),t[54]||(t[54]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.customToolbar")),1),t[33]||(t[33]=a()),n("div",Y,[o(l(b),{"columns-data":u,data:l(m).slice(0,5)},{toolbar:s(()=>[p.value?(g(),w("span",P,d(l(z)(Date())),1)):$("",!0),t[30]||(t[30]=a()),o(l(f),{label:e.$t("table.label.clickMe"),onClick:t[1]||(t[1]=i=>p.value=!p.value)},null,8,["label"])]),_:1},8,["data"]),t[32]||(t[32]=a()),o(r,{language:"html-vue"},{default:s(()=>t[31]||(t[31]=[a(`
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
        `)])),_:1})])]),t[55]||(t[55]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.singleAction")),1),t[36]||(t[36]=a()),n("div",j,[o(l(b),{"columns-data":u,data:l(m).slice(10,15),"data-action-menu":[{icon:"pi pi-eye"}],"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:click":t[2]||(t[2]=i=>{})},null,8,["data"]),t[35]||(t[35]=a()),o(r,{language:"html-vue"},{default:s(()=>t[34]||(t[34]=[a(`
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
        `)])),_:1})])]),t[56]||(t[56]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.builtinActions")),1),t[39]||(t[39]=a()),n("div",q,[o(l(b),{"columns-data":u,data:l(m).slice(10,15),"data-action-menu":[{label:e.$t("table.label.view")},{disabled:!0,label:e.$t("table.label.edit")},{disabled:i=>i.id!==11,label:e.$t("table.label.share")},{confirmationOptions:{body:e.$t("table.label.deleteRecordMessage"),header:e.$t("table.label.confirmation")},label:e.$t("table.label.delete"),requireConfirmationModal:!0}],"display-actions":i=>i.id!==12,"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:select":t[3]||(t[3]=i=>{})},null,8,["data","data-action-menu","display-actions"]),t[38]||(t[38]=a()),o(r,{language:"html-vue"},{default:s(()=>t[37]||(t[37]=[a(`
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
        `)])),_:1})])]),t[57]||(t[57]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.filteredActions")),1),t[42]||(t[42]=a()),n("div",J,[o(l(b),{"columns-data":u,data:l(m).slice(10,15),"data-action-menu":[{display:i=>i.id!==12,label:e.$t("table.label.view")},{disabled:!0,display:i=>i.id!==12,label:e.$t("table.label.edit")},{disabled:i=>i.id!==11,display:i=>i.id!==12,label:e.$t("table.label.share")},{confirmationOptions:{header:e.$t("table.label.confirmation"),body:e.$t("table.label.deleteRecordMessage")},label:e.$t("table.label.delete"),requireConfirmationModal:!0}],"initial-sorting":[{id:"email",desc:!1}],"onAction:select":t[4]||(t[4]=i=>{})},null,8,["data","data-action-menu"]),t[41]||(t[41]=a()),o(r,{language:"html-vue"},{default:s(()=>t[40]||(t[40]=[a(`
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
        `)])),_:1})])]),t[58]||(t[58]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.singleActionMenu")),1),t[45]||(t[45]=a()),n("div",F,[o(l(b),{"columns-data":u,data:l(m).slice(10,15),"data-action-menu":[{label:e.$t("table.label.view")}],"initial-sorting":[{id:"email",desc:!1}],"single-action-mode":"menu","onAction:select":t[5]||(t[5]=i=>{})},null,8,["data","data-action-menu"]),t[44]||(t[44]=a()),o(r,{language:"html-vue"},{default:s(()=>t[43]||(t[43]=[a(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{I as default};
