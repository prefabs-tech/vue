import{d as u,I as d,J as b,e as p,o as f,j as r,C as a,f as l,t as s,h as i,u as o,v as h}from"./index-DhI5jERR.js";import{Q as g}from"./PrefabsTechVue3TanstackTable.es-BRRM-lG-.js";import{c as y,d as C}from"./data-gOxi8Wva.js";import{_ as S}from"./TablePage.vue_vue_type_style_index_0_lang-BzQvfEFW.js";import"./PrefabsTechVue3Form.es-B5mCsZPN.js";const P={class:"section-content"},$={name:"PersistentTable"},A=u({...$,setup(F){const{t}=d(),m=[{accessorKey:"email",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:t("table.label.searchByEmail"),header:"Email"},{accessorKey:"name",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:t("table.placeholder.search"),header:"Full name"},{align:"right",accessorKey:"age",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${t("table.placeholder.min")},${t("table.placeholder.max")}`,header:"Age",meta:{filterVariant:"range"}},{accessorKey:"city",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:t("table.placeholder.city"),header:"City",meta:{filterVariant:"multiselect",filterOptions:y}}];return(n,e)=>{const c=b("SshPre");return f(),p(S,{title:n.$t("table.title"),class:"demo data-table"},{toolbar:r(()=>[i(o(h),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=v=>n.$router.push("/table"))},null,8,["label"])]),default:r(()=>[e[5]||(e[5]=a()),l("section",null,[l("h2",null,s(n.$t("table.usage.persistentState")),1),e[3]||(e[3]=a()),l("p",null,s(n.$t("table.usage.persistentInstruction")),1),e[4]||(e[4]=a()),l("div",P,[i(o(g),{id:"persistent-state","columns-data":m,data:o(C),"initial-sorting":[{id:"email",desc:!0}],"persist-state":"","show-column-action":""},null,8,["data"]),e[2]||(e[2]=a()),i(c,{language:"html-vue"},{default:r(()=>e[1]||(e[1]=[a(`
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
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
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
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: "Search",
              header: "Full name",
            },
            {
              align: "right",
              accessorKey: "age",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: \`\${t("table.placeholder.min")},\${t("table.placeholder.max")}\`,
              header: "Age",
              meta: {
                filterVariant: "range",
              },
            },
            {
              accessorKey: "city",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: "Select city",
              header: "City",
              meta: {
                filterVariant: "multiselect",
                filterOptions: city,
              },
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
