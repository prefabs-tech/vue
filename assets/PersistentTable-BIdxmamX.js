import{d as u,I as c,H as p,e as b,o as g,h as l,D as a,f as s,t as i,g as n,u as o,q as f}from"./index-0TmW327G.js";import{O as y}from"./DzangolabVue3TanstackTable.es-B2t7Qx40.js";import{d as h}from"./data-G7xVDYni.js";import{_ as C}from"./TablePage.vue_vue_type_style_index_0_lang-9rV7q774.js";import"./DzangolabVue3Form.es-j8_hFyJB.js";const v={class:"section-content"},K={name:"PersistentTable"},A=u({...K,setup(S){const{t:r}=c(),m=[{accessorKey:"email",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:r("table.label.searchByEmail"),header:"Email"},{accessorKey:"name",header:"Full name"},{accessorKey:"age",align:"right",header:"Age"},{accessorKey:"city",header:"City"}];return(t,e)=>{const d=p("SshPre");return g(),b(C,{title:t.$t("table.title"),class:"demo data-table"},{toolbar:l(()=>[n(o(f),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=k=>t.$router.push("/table"))},null,8,["label"])]),default:l(()=>[e[5]||(e[5]=a()),s("section",null,[s("h2",null,i(t.$t("table.usage.persistentState")),1),e[3]||(e[3]=a()),s("p",null,i(t.$t("table.usage.persistentInstruction")),1),e[4]||(e[4]=a()),s("div",v,[n(o(y),{id:"persistent-state","columns-data":m,data:o(h),"initial-sorting":[{id:"email",desc:!0}],"persist-state":"","show-column-action":""},null,8,["data"]),e[2]||(e[2]=a()),n(d,{language:"html-vue"},{default:l(()=>e[1]||(e[1]=[a(`
          <template>
            <Table
              id="persistent-state"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: true }]"
              persist-state
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            {
              accessorKey: "email",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: "Search by email...",
              header: "Email",
            },
            {
              accessorKey: "name",
              header: "Full name",
            },
            {
              accessorKey: "age",
              align: "right",
              header: "Age",
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{A as default};
