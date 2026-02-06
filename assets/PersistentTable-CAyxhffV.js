import{d as u,M as d,N as p,o as b,e as h,f as r,h as n,t as i,A as a,a as o,u as s}from"./index-DM9wUdee.js";import{i as f}from"./PrefabsTechVue3TanstackTable.es-Cu5UvKBj.js";import{c as g,d as y}from"./data-Ds_gM0N4.js";import{_ as S}from"./TablePage.vue_vue_type_style_index_0_lang-DidcaZk7.js";import"./PrefabsTechVue3Form.es-C9e69xVv.js";const C={class:"section-content"},P={name:"PersistentTable"},k=u({...P,setup(F){const{t}=d(),m=[{accessorKey:"email",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:t("table.label.searchByEmail"),header:"Email"},{accessorKey:"name",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:t("table.placeholder.search"),header:"Full name"},{align:"right",accessorKey:"age",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${t("table.placeholder.min")},${t("table.placeholder.max")}`,header:"Age",meta:{filterVariant:"range"}},{accessorKey:"city",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:t("table.placeholder.city"),header:"City",meta:{filterVariant:"multiselect",filterOptions:g}}];return(l,e)=>{const c=p("SshPre");return b(),h(S,{title:l.$t("table.title"),class:"demo data-table"},{default:r(()=>[n("section",null,[n("h2",null,i(l.$t("table.usage.persistentState")),1),e[2]||(e[2]=a()),n("p",null,i(l.$t("table.usage.persistentInstruction")),1),e[3]||(e[3]=a()),n("div",C,[o(s(f),{id:"persistent-state","columns-data":m,data:s(y),"initial-sorting":[{id:"email",desc:!0}],"persist-state":!0,"show-column-action":""},null,8,["data"]),e[1]||(e[1]=a()),o(c,{language:"html-vue"},{default:r(()=>[...e[0]||(e[0]=[a(`
          <template>
            <Table
              id="persistent-state"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: true }]"
              :persist-state="true"
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
        `,-1)])]),_:1})])])]),_:1},8,["title"])}}});export{k as default};
