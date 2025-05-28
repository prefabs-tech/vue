import{d as c,L as d,K as b,f as p,o as f,i,D as a,g as r,t as s,h as n,u as o,v as h}from"./index-BIIEzxxY.js";import{G as g}from"./DzangolabVue3TanstackTable.es-Dfl9wy4b.js";import{c as y,d as S}from"./data-BbDBEIKR.js";import{_ as C}from"./TablePage.vue_vue_type_style_index_0_lang-B6SxPX6y.js";import"./DzangolabVue3Form.es-CfpDv6A6.js";const F={class:"section-content"},P={name:"PersistentTable"},D=c({...P,setup(k){const{t:l}=d(),m=[{accessorKey:"email",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:l("table.label.searchByEmail"),header:"Email"},{accessorKey:"name",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:l("table.placeholder.search"),header:"Full name"},{align:"right",accessorKey:"age",enableColumnFilter:!0,enableSorting:!0,filterFn:"weakEquals",filterPlaceholder:l("table.placeholder.search"),header:"Age"},{accessorKey:"city",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:l("table.placeholder.city"),header:"City",meta:{filterVariant:"multiselect",filterOptions:y}}];return(t,e)=>{const u=b("SshPre");return f(),p(C,{title:t.$t("table.title"),class:"demo data-table"},{toolbar:i(()=>[n(o(h),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=v=>t.$router.push("/table"))},null,8,["label"])]),default:i(()=>[e[5]||(e[5]=a()),r("section",null,[r("h2",null,s(t.$t("table.usage.persistentState")),1),e[3]||(e[3]=a()),r("p",null,s(t.$t("table.usage.persistentInstruction")),1),e[4]||(e[4]=a()),r("div",F,[n(o(g),{id:"persistent-state","columns-data":m,data:o(S),"initial-sorting":[{id:"email",desc:!0}],"persist-state":"","show-column-action":""},null,8,["data"]),e[2]||(e[2]=a()),n(u,{language:"html-vue"},{default:i(()=>e[1]||(e[1]=[a(`
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
              filterFn: "weakEquals",
              filterPlaceholder: "Search",
              header: "Age",
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{D as default};
