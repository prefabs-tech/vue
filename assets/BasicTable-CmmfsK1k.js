import{k as d}from"./DzangolabVue3TanstackTable.es-SW3U1RSx.js";import{d as f,z as c,e as y,o as T,w as s,D as t,f as a,t as i,i as l,u as e,j as b}from"./index-BptziAgc.js";import{d as m}from"./data-C1SmRPuO.js";import{_ as v}from"./TablePage.vue_vue_type_style_index_0_lang-lAJm5NT5.js";import"./DzangolabVue3Form.es-BEwcchFt.js";const k={class:"section-content"},C={class:"section-content"},z={class:"section-content"},D={class:"section-content"},$={class:"section-content"},A={class:"section-content"},K={class:"section-content"},S={name:"SortableTable"},F=f({...S,setup(E){const r=[{accessorKey:"email",enableSorting:!0,header:"Email"},{accessorKey:"name",header:"Full name"},{align:"right",accessorKey:"age",header:"Age"},{accessorKey:"city",header:"City"}],p=r.map(o=>({...o,enableSorting:!0}));return(o,n)=>{const u=c("SshPre");return T(),y(v,{title:o.$t("table.title"),class:"demo data-table"},{toolbar:s(()=>[l(e(b),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=g=>o.$router.push("/table"))},null,8,["label"])]),default:s(()=>[n[23]||(n[23]=t()),a("section",null,[a("h2",null,i(o.$t("table.usage.basic")),1),n[4]||(n[4]=t()),a("div",k,[l(e(d),{"columns-data":r,data:e(m).slice(0,15),paginated:!1,"show-reset-button":""},null,8,["data"]),n[3]||(n[3]=t()),l(u,{language:"html-vue"},{default:s(()=>n[2]||(n[2]=[t(`
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
        `)])),_:1})])]),n[24]||(n[24]=t()),a("section",null,[a("h2",null,i(o.$t("table.usage.pagination")),1),n[7]||(n[7]=t()),a("div",C,[l(e(d),{"columns-data":r,data:e(m)},null,8,["data"]),n[6]||(n[6]=t()),l(u,{language:"html-vue"},{default:s(()=>n[5]||(n[5]=[t(`
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
        `)])),_:1})])]),n[25]||(n[25]=t()),a("section",null,[a("h2",null,i(o.$t("table.usage.sortable")),1),n[10]||(n[10]=t()),a("div",z,[l(e(d),{"columns-data":e(p),data:e(m),"initial-sorting":[{id:"email",desc:!1}]},null,8,["columns-data","data"]),n[9]||(n[9]=t()),l(u,{language:"html-vue"},{default:s(()=>n[8]||(n[8]=[t(`
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
        `)])),_:1})])]),n[26]||(n[26]=t()),a("section",null,[a("h2",null,i(o.$t("table.usage.title")),1),n[13]||(n[13]=t()),a("div",D,[l(e(d),{"columns-data":r,data:e(m).slice(0,5),"title-info":{text:o.$t("table.label.users"),align:"left"}},null,8,["data","title-info"]),n[12]||(n[12]=t()),l(u,{language:"html-vue"},{default:s(()=>n[11]||(n[11]=[t(`
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
        `)])),_:1})])]),n[27]||(n[27]=t()),a("section",null,[a("h2",null,i(o.$t("table.usage.footer")),1),n[16]||(n[16]=t()),a("div",$,[l(e(d),{"columns-data":r,data:e(m)},{footer:s(()=>[t(i(`${o.$t("table.label.totalRecords")}: ${e(m).length??"0"}`),1)]),_:1},8,["data"]),n[15]||(n[15]=t()),l(u,{language:"html-vue"},{default:s(()=>n[14]||(n[14]=[t(`
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
        `)])),_:1})])]),n[28]||(n[28]=t()),a("section",null,[a("h2",null,i(o.$t("table.usage.customToolbar")),1),n[19]||(n[19]=t()),a("div",A,[l(e(d),{"columns-data":r,data:e(m).splice(0,5)},{toolbar:s(()=>[l(e(b),{label:o.$t("table.label.addRecord")},null,8,["label"])]),_:1},8,["data"]),n[18]||(n[18]=t()),l(u,{language:"html-vue"},{default:s(()=>n[17]||(n[17]=[t(`
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
        `)])),_:1})])]),n[29]||(n[29]=t()),a("section",null,[a("h2",null,i(o.$t("table.usage.singleAction")),1),n[22]||(n[22]=t()),a("div",K,[l(e(d),{"columns-data":r,data:e(m).splice(10,15),"data-action-menu":[{icon:"pi pi-eye"}],"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:click":n[1]||(n[1]=g=>{})},null,8,["data"]),n[21]||(n[21]=t()),l(u,{language:"html-vue"},{default:s(()=>n[20]||(n[20]=[t(`
          <template>
            <Table
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :dataActionMenu="[
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{F as default};
