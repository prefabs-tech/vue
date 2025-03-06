import{b as d}from"./DzangolabVue3TanstackTable.es-CjwTgySK.js";import{d as g,z as f,e as c,o as y,w as s,D as t,f as a,t as i,h as o,u as e,p as b}from"./index-Bq7LBzNw.js";import{d as m}from"./data-C1SmRPuO.js";import{_ as T}from"./TablePage.vue_vue_type_style_index_0_lang-BbYa3Rar.js";import"./DzangolabVue3Form.es-BjYrQu0V.js";const v={class:"section-content"},C={class:"section-content"},k={class:"section-content"},z={class:"section-content"},$={class:"section-content"},D={class:"section-content"},A={name:"SortableTable"},j=g({...A,setup(K){const r=[{accessorKey:"email",enableSorting:!0,header:"Email"},{accessorKey:"name",header:"Full name"},{align:"right",accessorKey:"age",header:"Age"},{accessorKey:"city",header:"City"}],p=r.map(l=>({...l,enableSorting:!0}));return(l,n)=>{const u=f("SshPre");return y(),c(T,{title:l.$t("table.title"),class:"demo data-table"},{toolbar:s(()=>[o(e(b),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=S=>l.$router.push("/table"))},null,8,["label"])]),default:s(()=>[n[19]||(n[19]=t()),a("section",null,[a("h2",null,i(l.$t("table.usage.basic")),1),n[3]||(n[3]=t()),a("div",v,[o(e(d),{"columns-data":r,data:e(m).slice(0,15),paginated:!1,"show-reset-button":""},null,8,["data"]),n[2]||(n[2]=t()),o(u,{language:"html-vue"},{default:s(()=>n[1]||(n[1]=[t(`
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
        `)])),_:1})])]),n[20]||(n[20]=t()),a("section",null,[a("h2",null,i(l.$t("table.usage.pagination")),1),n[6]||(n[6]=t()),a("div",C,[o(e(d),{"columns-data":r,data:e(m)},null,8,["data"]),n[5]||(n[5]=t()),o(u,{language:"html-vue"},{default:s(()=>n[4]||(n[4]=[t(`
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
        `)])),_:1})])]),n[21]||(n[21]=t()),a("section",null,[a("h2",null,i(l.$t("table.usage.sortable")),1),n[9]||(n[9]=t()),a("div",k,[o(e(d),{"columns-data":e(p),data:e(m),"initial-sorting":[{id:"email",desc:!1}]},null,8,["columns-data","data"]),n[8]||(n[8]=t()),o(u,{language:"html-vue"},{default:s(()=>n[7]||(n[7]=[t(`
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
        `)])),_:1})])]),n[22]||(n[22]=t()),a("section",null,[a("h2",null,i(l.$t("table.usage.title")),1),n[12]||(n[12]=t()),a("div",z,[o(e(d),{"columns-data":r,data:e(m).slice(0,5),"title-info":{text:l.$t("table.label.users"),align:"left"}},null,8,["data","title-info"]),n[11]||(n[11]=t()),o(u,{language:"html-vue"},{default:s(()=>n[10]||(n[10]=[t(`
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
        `)])),_:1})])]),n[23]||(n[23]=t()),a("section",null,[a("h2",null,i(l.$t("table.usage.footer")),1),n[15]||(n[15]=t()),a("div",$,[o(e(d),{"columns-data":r,data:e(m)},{footer:s(()=>[t(i(`${l.$t("table.label.totalRecords")}: ${e(m).length??"0"}`),1)]),_:1},8,["data"]),n[14]||(n[14]=t()),o(u,{language:"html-vue"},{default:s(()=>n[13]||(n[13]=[t(`
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
        `)])),_:1})])]),n[24]||(n[24]=t()),a("section",null,[a("h2",null,i(l.$t("table.usage.customToolbar")),1),n[18]||(n[18]=t()),a("div",D,[o(e(d),{"columns-data":r,data:e(m).splice(0,5)},{toolbar:s(()=>[o(e(b),{label:l.$t("table.label.addRecord")},null,8,["label"])]),_:1},8,["data"]),n[17]||(n[17]=t()),o(u,{language:"html-vue"},{default:s(()=>n[16]||(n[16]=[t(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{j as default};
