import{b as u}from"./DzangolabVue3TanstackTable.es-5Yxz_8Mi.js";import{d as b,p as g,e as y,o as f,w as i,C as a,f as n,t as m,h as o,u as t,q as c}from"./index-C44VGcWd.js";import{_ as v}from"./TablePage.vue_vue_type_style_index_0_lang-DLPoJumj.js";import"./DzangolabVue3Form.es-B8d0Mxve.js";const s=[{id:1,name:"John Doe",email:"john.doe@example.com",age:28,city:"New York"},{id:2,name:"Jane Elizabeth Smith",email:"jane.smith@example.com",age:32,city:"Los Angeles"},{id:3,name:"Robert Johnson",email:"bob.j@example.com",age:25,city:"Chicago"},{id:4,name:"Alice Brown",email:"alice.brown@example.com",age:22,city:"San Francisco Bay Area"},{id:5,name:"Charles William Wilson Jr.",email:"charlie.w@example.com",age:35,city:"Houston"},{id:6,name:"Evangeline Martinez",email:"eva.martinez@example.com",age:30,city:"Miami Beach"},{id:7,name:"David Lawrence",email:"david.lee@example.com",age:27,city:"Seattle"},{id:8,name:"Sophia Turner",email:"sophie.t@example.com",age:29,city:"Atlanta"},{id:9,name:"Michael Anthony Adams",email:"michael.a@example.com",age:31,city:"Dallas-Fort Worth"},{id:10,name:"Olivia Charlotte Carter",email:"olivia.carter@example.com",age:26,city:"Denver"},{id:11,name:"Ryan Alexander Cooper",email:"ryan.cooper@example.com",age:34,city:"Boston"},{id:12,name:"Emily Davis",email:"emily.d@example.com",age:33,city:"Phoenix"},{id:13,name:"Daniel William White",email:"daniel.white@example.com",age:28,city:"Philadelphia"},{id:14,name:"Ava Rose Moore",email:"ava.m@example.com",age:24,city:"Austin"},{id:15,name:"Nicholas Harrison",email:"nicholas.h@example.com",age:27,city:"San Diego"},{id:16,name:"Emma Grace Turner",email:"emma.t@example.com",age:29,city:"Portland"},{id:17,name:"William Lewis Jr.",email:"william.l@example.com",age:32,city:"Detroit"},{id:18,name:"Grace Margaret Murphy",email:"grace.murphy@example.com",age:26,city:"Minneapolis"},{id:19,name:"Matthew Wright",email:"matthew.w@example.com",age:30,city:"Charlotte"},{id:20,name:"Lily Alexandra Adams",email:"lily.adams@example.com",age:31,city:"Nashville"}],h={class:"section-content"},T={class:"section-content"},C={class:"section-content"},A={class:"section-content"},D={class:"section-content"},x={class:"section-content"},k={name:"SortableTable"},B=b({...k,setup(z){const r=[{accessorKey:"email",enableSorting:!0,header:"Email"},{accessorKey:"name",header:"Full name"},{align:"right",accessorKey:"age",header:"Age"},{accessorKey:"city",header:"City"}],p=r.map(l=>({...l,enableSorting:!0}));return(l,e)=>{const d=g("SshPre");return f(),y(v,{title:l.$t("table.title"),class:"demo data-table"},{toolbar:i(()=>[o(t(c),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=w=>l.$router.push("/table"))},null,8,["label"])]),default:i(()=>[e[19]||(e[19]=a()),n("section",null,[n("h2",null,m(l.$t("table.usage.basic")),1),e[3]||(e[3]=a()),n("div",h,[o(t(u),{"columns-data":r,data:t(s).slice(0,15),paginated:!1,"show-reset-button":""},null,8,["data"]),e[2]||(e[2]=a()),o(d,{language:"html-vue"},{default:i(()=>e[1]||(e[1]=[a(`
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
        `)])),_:1})])]),e[20]||(e[20]=a()),n("section",null,[n("h2",null,m(l.$t("table.usage.pagination")),1),e[6]||(e[6]=a()),n("div",T,[o(t(u),{"columns-data":r,data:t(s)},null,8,["data"]),e[5]||(e[5]=a()),o(d,{language:"html-vue"},{default:i(()=>e[4]||(e[4]=[a(`
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
        `)])),_:1})])]),e[21]||(e[21]=a()),n("section",null,[n("h2",null,m(l.$t("table.usage.sortable")),1),e[9]||(e[9]=a()),n("div",C,[o(t(u),{"columns-data":t(p),data:t(s),"initial-sorting":[{id:"email",desc:!1}]},null,8,["columns-data","data"]),e[8]||(e[8]=a()),o(d,{language:"html-vue"},{default:i(()=>e[7]||(e[7]=[a(`
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
        `)])),_:1})])]),e[22]||(e[22]=a()),n("section",null,[n("h2",null,m(l.$t("table.usage.title")),1),e[12]||(e[12]=a()),n("div",A,[o(t(u),{"columns-data":r,data:t(s).slice(0,5),"title-info":{text:l.$t("table.label.users"),align:"left"}},null,8,["data","title-info"]),e[11]||(e[11]=a()),o(d,{language:"html-vue"},{default:i(()=>e[10]||(e[10]=[a(`
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
        `)])),_:1})])]),e[23]||(e[23]=a()),n("section",null,[n("h2",null,m(l.$t("table.usage.footer")),1),e[15]||(e[15]=a()),n("div",D,[o(t(u),{"columns-data":r,data:t(s)},{footer:i(()=>[a(m(`${l.$t("table.label.totalRecords")}: ${t(s).length??"0"}`),1)]),_:1},8,["data"]),e[14]||(e[14]=a()),o(d,{language:"html-vue"},{default:i(()=>e[13]||(e[13]=[a(`
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
        `)])),_:1})])]),e[24]||(e[24]=a()),n("section",null,[n("h2",null,m(l.$t("table.usage.customToolbar")),1),e[18]||(e[18]=a()),n("div",x,[o(t(u),{"columns-data":r,data:t(s).splice(0,5)},{toolbar:i(()=>[o(t(c),{label:l.$t("table.label.addRecord")},null,8,["label"])]),_:1},8,["data"]),e[17]||(e[17]=a()),o(d,{language:"html-vue"},{default:i(()=>e[16]||(e[16]=[a(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{B as default};
