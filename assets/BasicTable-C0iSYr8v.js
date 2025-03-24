import{N as b}from"./DzangolabVue3TanstackTable.es-Bqsmczy-.js";import{d as f,A as c,e as y,o as v,w as s,E as t,f as n,t as d,i as o,u as l,j as p}from"./index-DUEpciHi.js";import{d as r}from"./data-C1SmRPuO.js";import{_ as T}from"./TablePage.vue_vue_type_style_index_0_lang-Dr1PfMY0.js";import"./DzangolabVue3Form.es-DJa73C0s.js";const D={class:"section-content"},C={class:"section-content"},$={class:"section-content"},k={class:"section-content"},A={class:"section-content"},w={class:"section-content"},z={class:"section-content"},S={class:"section-content"},K={class:"section-content"},E={class:"section-content"},M={name:"SortableTable"},J=f({...M,setup(N){const m=[{accessorKey:"email",enableSorting:!0,header:"Email"},{accessorKey:"name",header:"Full name"},{align:"right",accessorKey:"age",header:"Age"},{accessorKey:"city",header:"City"}],g=m.map(e=>({...e,enableSorting:!0}));return(e,a)=>{const u=c("SshPre");return v(),y(T,{title:e.$t("table.title"),class:"demo data-table"},{toolbar:s(()=>[o(l(p),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:a[0]||(a[0]=i=>e.$router.push("/table"))},null,8,["label"])]),default:s(()=>[a[35]||(a[35]=t()),n("section",null,[n("h2",null,d(e.$t("table.usage.basic")),1),a[7]||(a[7]=t()),n("div",D,[o(l(b),{"columns-data":m,data:l(r).slice(0,15),paginated:!1,"show-reset-button":""},null,8,["data"]),a[6]||(a[6]=t()),o(u,{language:"html-vue"},{default:s(()=>a[5]||(a[5]=[t(`
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
        `)])),_:1})])]),a[36]||(a[36]=t()),n("section",null,[n("h2",null,d(e.$t("table.usage.pagination")),1),a[10]||(a[10]=t()),n("div",C,[o(l(b),{"columns-data":m,data:l(r)},null,8,["data"]),a[9]||(a[9]=t()),o(u,{language:"html-vue"},{default:s(()=>a[8]||(a[8]=[t(`
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
        `)])),_:1})])]),a[37]||(a[37]=t()),n("section",null,[n("h2",null,d(e.$t("table.usage.sortable")),1),a[13]||(a[13]=t()),n("div",$,[o(l(b),{"columns-data":l(g),data:l(r),"initial-sorting":[{id:"email",desc:!1}]},null,8,["columns-data","data"]),a[12]||(a[12]=t()),o(u,{language:"html-vue"},{default:s(()=>a[11]||(a[11]=[t(`
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
        `)])),_:1})])]),a[38]||(a[38]=t()),n("section",null,[n("h2",null,d(e.$t("table.usage.title")),1),a[16]||(a[16]=t()),n("div",k,[o(l(b),{"columns-data":m,data:l(r).slice(0,5),"title-info":{text:e.$t("table.label.users"),align:"left"}},null,8,["data","title-info"]),a[15]||(a[15]=t()),o(u,{language:"html-vue"},{default:s(()=>a[14]||(a[14]=[t(`
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
        `)])),_:1})])]),a[39]||(a[39]=t()),n("section",null,[n("h2",null,d(e.$t("table.usage.footer")),1),a[19]||(a[19]=t()),n("div",A,[o(l(b),{"columns-data":m,data:l(r)},{footer:s(()=>[t(d(`${e.$t("table.label.totalRecords")}: ${l(r).length??"0"}`),1)]),_:1},8,["data"]),a[18]||(a[18]=t()),o(u,{language:"html-vue"},{default:s(()=>a[17]||(a[17]=[t(`
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
        `)])),_:1})])]),a[40]||(a[40]=t()),n("section",null,[n("h2",null,d(e.$t("table.usage.customToolbar")),1),a[22]||(a[22]=t()),n("div",w,[o(l(b),{"columns-data":m,data:l(r).slice(0,5)},{toolbar:s(()=>[o(l(p),{label:e.$t("table.label.addRecord")},null,8,["label"])]),_:1},8,["data"]),a[21]||(a[21]=t()),o(u,{language:"html-vue"},{default:s(()=>a[20]||(a[20]=[t(`
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
        `)])),_:1})])]),a[41]||(a[41]=t()),n("section",null,[n("h2",null,d(e.$t("table.usage.singleAction")),1),a[25]||(a[25]=t()),n("div",z,[o(l(b),{"columns-data":m,data:l(r).slice(10,15),"data-action-menu":[{icon:"pi pi-eye"}],"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:click":a[1]||(a[1]=i=>{})},null,8,["data"]),a[24]||(a[24]=t()),o(u,{language:"html-vue"},{default:s(()=>a[23]||(a[23]=[t(`
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
        `)])),_:1})])]),a[42]||(a[42]=t()),n("section",null,[n("h2",null,d(e.$t("table.usage.builtinActions")),1),a[28]||(a[28]=t()),n("div",S,[o(l(b),{"columns-data":m,data:l(r).slice(10,15),"data-action-menu":[{label:e.$t("table.label.view")},{disabled:!0,label:e.$t("table.label.edit")},{disabled:i=>i.id!==11,label:e.$t("table.label.share")},{confirmationOptions:{body:e.$t("table.label.deleteRecordMessage"),header:e.$t("table.label.confirmation")},label:e.$t("table.label.delete"),requireConfirmationModal:!0}],"display-actions":i=>i.id!==12,"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:select":a[2]||(a[2]=i=>{})},null,8,["data","data-action-menu","display-actions"]),a[27]||(a[27]=t()),o(u,{language:"html-vue"},{default:s(()=>a[26]||(a[26]=[t(`
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
        `)])),_:1})])]),a[43]||(a[43]=t()),n("section",null,[n("h2",null,d(e.$t("table.usage.filteredActions")),1),a[31]||(a[31]=t()),n("div",K,[o(l(b),{"columns-data":m,data:l(r).slice(10,15),"data-action-menu":[{display:i=>i.id!==12,label:e.$t("table.label.view")},{disabled:!0,display:i=>i.id!==12,label:e.$t("table.label.edit")},{disabled:i=>i.id!==11,display:i=>i.id!==12,label:e.$t("table.label.share")},{confirmationOptions:{header:e.$t("table.label.confirmation"),body:e.$t("table.label.deleteRecordMessage")},label:e.$t("table.label.delete"),requireConfirmationModal:!0}],"initial-sorting":[{id:"email",desc:!1}],"onAction:select":a[3]||(a[3]=i=>{})},null,8,["data","data-action-menu"]),a[30]||(a[30]=t()),o(u,{language:"html-vue"},{default:s(()=>a[29]||(a[29]=[t(`
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
        `)])),_:1})])]),a[44]||(a[44]=t()),n("section",null,[n("h2",null,d(e.$t("table.usage.singleActionMenu")),1),a[34]||(a[34]=t()),n("div",E,[o(l(b),{"columns-data":m,data:l(r).slice(10,15),"data-action-menu":[{label:e.$t("table.label.view")}],"initial-sorting":[{id:"email",desc:!1}],"single-action-mode":"menu","onAction:select":a[4]||(a[4]=i=>{})},null,8,["data","data-action-menu"]),a[33]||(a[33]=t()),o(u,{language:"html-vue"},{default:s(()=>a[32]||(a[32]=[t(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{J as default};
