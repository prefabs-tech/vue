import{U as b}from"./DzangolabVue3TanstackTable.es-DmUifOYz.js";import{d as y,D as T,e as v,o as D,w as i,B as a,f as n,t as d,i as o,u as l,p}from"./index-CzFyCMyE.js";import{d as m}from"./data-C1SmRPuO.js";import{_ as C}from"./TablePage.vue_vue_type_style_index_0_lang-DoCMX3nU.js";import"./DzangolabVue3Form.es-BVka-kVz.js";const $={class:"section-content"},k={class:"section-content"},w={class:"section-content"},z={class:"section-content"},A={class:"section-content"},S={class:"section-content"},K={class:"section-content"},E={class:"section-content"},M={class:"section-content"},O={class:"section-content"},B={class:"section-content"},V={class:"section-content"},N={class:"section-content"},P={name:"SortableTable"},U=y({...P,setup(j){const u=[{accessorKey:"email",enableSorting:!0,header:"Email"},{accessorKey:"name",header:"Full name"},{align:"right",accessorKey:"age",header:"Age"},{accessorKey:"city",header:"City"}],g=u.map(e=>({...e,enableSorting:!0})),f=["right","top","bottom","left"],c=u.map((e,t)=>({...e,tooltip:!0,tooltipOptions:{position:f[t]}}));return(e,t)=>{const r=T("SshPre");return D(),v(C,{title:e.$t("table.title"),class:"demo data-table"},{toolbar:i(()=>[o(l(p),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=s=>e.$router.push("/table"))},null,8,["label"])]),default:i(()=>[t[44]||(t[44]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.basic")),1),t[7]||(t[7]=a()),n("div",$,[o(l(b),{"columns-data":u,data:l(m).slice(0,15),paginated:!1,"show-reset-button":""},null,8,["data"]),t[6]||(t[6]=a()),o(r,{language:"html-vue"},{default:i(()=>t[5]||(t[5]=[a(`
          <template>
            <Table
              :columns-data="columns"
              :data="data"
              :paginated="false"
              show-reset-button
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
        `)])),_:1})])]),t[45]||(t[45]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.pagination")),1),t[10]||(t[10]=a()),n("div",k,[o(l(b),{"columns-data":u,data:l(m)},null,8,["data"]),t[9]||(t[9]=a()),o(r,{language:"html-vue"},{default:i(()=>t[8]||(t[8]=[a(`
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
        `)])),_:1})])]),t[46]||(t[46]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.sortable")),1),t[13]||(t[13]=a()),n("div",w,[o(l(b),{"columns-data":l(g),data:l(m),"initial-sorting":[{id:"email",desc:!1}]},null,8,["columns-data","data"]),t[12]||(t[12]=a()),o(r,{language:"html-vue"},{default:i(()=>t[11]||(t[11]=[a(`
          <template>
            <Table
              :columns-data="sortableColumns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
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
        `)])),_:1})])]),t[47]||(t[47]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.rowSelection")),1),t[16]||(t[16]=a()),n("div",z,[o(l(b),{"columns-data":u,data:l(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["data"]),t[15]||(t[15]=a()),o(r,{language:"html-vue"},{default:i(()=>t[14]||(t[14]=[a(`
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
        `)])),_:1})])]),t[48]||(t[48]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.tooltip")),1),t[19]||(t[19]=a()),n("div",A,[o(l(b),{"columns-data":l(c),data:l(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["columns-data","data"]),t[18]||(t[18]=a()),o(r,{language:"html-vue"},{default:i(()=>t[17]||(t[17]=[a(`
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
          `)])),_:1})])]),t[49]||(t[49]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.columnAction")),1),t[22]||(t[22]=a()),n("div",S,[o(l(b),{"columns-data":u,data:l(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"show-column-action":""},null,8,["data"]),t[21]||(t[21]=a()),o(r,{language:"html-vue"},{default:i(()=>t[20]||(t[20]=[a(`
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
        `)])),_:1})])]),t[50]||(t[50]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.title")),1),t[25]||(t[25]=a()),n("div",K,[o(l(b),{"columns-data":u,data:l(m).slice(0,5),"title-info":{text:e.$t("table.label.users"),align:"left"}},null,8,["data","title-info"]),t[24]||(t[24]=a()),o(r,{language:"html-vue"},{default:i(()=>t[23]||(t[23]=[a(`
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
        `)])),_:1})])]),t[51]||(t[51]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.footer")),1),t[28]||(t[28]=a()),n("div",E,[o(l(b),{"columns-data":u,data:l(m)},{footer:i(()=>[a(d(`${e.$t("table.label.totalRecords")}: ${l(m).length??"0"}`),1)]),_:1},8,["data"]),t[27]||(t[27]=a()),o(r,{language:"html-vue"},{default:i(()=>t[26]||(t[26]=[a(`
          <template>
            <Table :columns-data="columns" :data="data">
              <template #footer>
                {{ \`Total records: \${data.length ?? "0"}\` }}
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
        `)])),_:1})])]),t[52]||(t[52]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.customToolbar")),1),t[31]||(t[31]=a()),n("div",M,[o(l(b),{"columns-data":u,data:l(m).slice(0,5)},{toolbar:i(()=>[o(l(p),{label:e.$t("table.label.addRecord")},null,8,["label"])]),_:1},8,["data"]),t[30]||(t[30]=a()),o(r,{language:"html-vue"},{default:i(()=>t[29]||(t[29]=[a(`
          <template>
            <Table :columns-data="columns" :data="data">
              <template #toolbar>
                <ButtonElement label="Add record" />
              </template>
            </Table>
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
          import { ButtonElement } from "@dzangolab/vue3-ui";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `)])),_:1})])]),t[53]||(t[53]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.singleAction")),1),t[34]||(t[34]=a()),n("div",O,[o(l(b),{"columns-data":u,data:l(m).slice(10,15),"data-action-menu":[{icon:"pi pi-eye"}],"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:click":t[1]||(t[1]=s=>{})},null,8,["data"]),t[33]||(t[33]=a()),o(r,{language:"html-vue"},{default:i(()=>t[32]||(t[32]=[a(`
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
        `)])),_:1})])]),t[54]||(t[54]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.builtinActions")),1),t[37]||(t[37]=a()),n("div",B,[o(l(b),{"columns-data":u,data:l(m).slice(10,15),"data-action-menu":[{label:e.$t("table.label.view")},{disabled:!0,label:e.$t("table.label.edit")},{disabled:s=>s.id!==11,label:e.$t("table.label.share")},{confirmationOptions:{body:e.$t("table.label.deleteRecordMessage"),header:e.$t("table.label.confirmation")},label:e.$t("table.label.delete"),requireConfirmationModal:!0}],"display-actions":s=>s.id!==12,"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:select":t[2]||(t[2]=s=>{})},null,8,["data","data-action-menu","display-actions"]),t[36]||(t[36]=a()),o(r,{language:"html-vue"},{default:i(()=>t[35]||(t[35]=[a(`
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
        `)])),_:1})])]),t[55]||(t[55]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.filteredActions")),1),t[40]||(t[40]=a()),n("div",V,[o(l(b),{"columns-data":u,data:l(m).slice(10,15),"data-action-menu":[{display:s=>s.id!==12,label:e.$t("table.label.view")},{disabled:!0,display:s=>s.id!==12,label:e.$t("table.label.edit")},{disabled:s=>s.id!==11,display:s=>s.id!==12,label:e.$t("table.label.share")},{confirmationOptions:{header:e.$t("table.label.confirmation"),body:e.$t("table.label.deleteRecordMessage")},label:e.$t("table.label.delete"),requireConfirmationModal:!0}],"initial-sorting":[{id:"email",desc:!1}],"onAction:select":t[3]||(t[3]=s=>{})},null,8,["data","data-action-menu"]),t[39]||(t[39]=a()),o(r,{language:"html-vue"},{default:i(()=>t[38]||(t[38]=[a(`
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
        `)])),_:1})])]),t[56]||(t[56]=a()),n("section",null,[n("h2",null,d(e.$t("table.usage.singleActionMenu")),1),t[43]||(t[43]=a()),n("div",N,[o(l(b),{"columns-data":u,data:l(m).slice(10,15),"data-action-menu":[{label:e.$t("table.label.view")}],"initial-sorting":[{id:"email",desc:!1}],"single-action-mode":"menu","onAction:select":t[4]||(t[4]=s=>{})},null,8,["data","data-action-menu"]),t[42]||(t[42]=a()),o(r,{language:"html-vue"},{default:i(()=>t[41]||(t[41]=[a(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{U as default};
