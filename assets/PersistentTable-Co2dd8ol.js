import{d,L as c,K as p,f as b,o as g,i as n,D as a,g as l,t as i,h as s,u as o,v as f}from"./index-4qXijAqf.js";import{B as y}from"./DzangolabVue3TanstackTable.es-OufCTp9H.js";import{d as h}from"./data-C-ninj2G.js";import{_ as S}from"./TablePage.vue_vue_type_style_index_0_lang-BSKO6oxw.js";import"./DzangolabVue3Form.es-BbhZLtC1.js";const C={class:"section-content"},v={name:"PersistentTable"},z=d({...v,setup(K){const{t:r}=c(),m=[{accessorKey:"email",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:r("table.label.searchByEmail"),header:"Email"},{accessorKey:"name",enableSorting:!0,header:"Full name"},{accessorKey:"age",align:"right",enableSorting:!0,header:"Age"},{accessorKey:"city",enableSorting:!0,header:"City"}];return(t,e)=>{const u=p("SshPre");return g(),b(S,{title:t.$t("table.title"),class:"demo data-table"},{toolbar:n(()=>[s(o(f),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=k=>t.$router.push("/table"))},null,8,["label"])]),default:n(()=>[e[5]||(e[5]=a()),l("section",null,[l("h2",null,i(t.$t("table.usage.persistentState")),1),e[3]||(e[3]=a()),l("p",null,i(t.$t("table.usage.persistentInstruction")),1),e[4]||(e[4]=a()),l("div",C,[s(o(y),{id:"persistent-state","columns-data":m,data:o(h),"initial-sorting":[{id:"email",desc:!0}],"persist-state":"","show-column-action":""},null,8,["data"]),e[2]||(e[2]=a()),s(u,{language:"html-vue"},{default:n(()=>e[1]||(e[1]=[a(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{z as default};
