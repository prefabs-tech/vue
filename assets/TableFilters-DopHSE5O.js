import{X as m}from"./DzangolabVue3TanstackTable.es-Cs7AfVxX.js";import{d as c,D as u,e as d,o as b,w as t,B as a,f as l,t as p,i as o,u as r,p as f}from"./index-cBKKDCP1.js";import{d as g}from"./data-C1SmRPuO.js";import{_ as h}from"./TablePage.vue_vue_type_style_index_0_lang-Crq0Wc9X.js";import"./DzangolabVue3Form.es-CUdsX3QP.js";const y={class:"section-content"},v={name:"SortableTable"},F=c({...v,setup(C){const i=[{accessorKey:"email",enableSorting:!0,header:"Email",enableColumnFilter:!0,filterPlaceholder:"Search by email..."},{accessorKey:"name",header:"Full name"},{align:"right",accessorKey:"age",header:"Age"},{accessorKey:"city",header:"City",enableColumnFilter:!0,filterPlaceholder:"Select city",meta:{filterVariant:"multiselect",filterOptions:[{value:"Atlanta",label:"Atlanta"},{value:"Chicago",label:"Chicago"},{value:"Boston",label:"Boston"},{value:"Denver",label:"Denver"}]}}];return(n,e)=>{const s=u("SshPre");return b(),d(h,{title:n.$t("table.title"),class:"demo data-table"},{toolbar:t(()=>[o(r(f),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=S=>n.$router.push("/table"))},null,8,["label"])]),default:t(()=>[e[4]||(e[4]=a()),l("section",null,[l("h2",null,p(n.$t("table.usage.filterableColumn")),1),e[3]||(e[3]=a()),l("div",y,[o(r(m),{"columns-data":i,data:r(g)},null,8,["data"]),e[2]||(e[2]=a()),o(s,{language:"html-vue"},{default:t(()=>e[1]||(e[1]=[a(`
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
              enableColumnFilter: true,
              filterPlaceholder: "Search by email...",
            },
            {
              accessorKey: "name",
              header: "Full name",
            },
            {
              align: "right",
              accessorKey: "age",
              header: "Age",
            },
            {
              accessorKey: "city",
              header: "City",
              enableColumnFilter: true,
              filterPlaceholder: "Select city",
              meta: {
                filterVariant: "multiselect",
                filterOptions: [
                  {
                    value: "Atlanta",
                    label: "Atlanta",
                  },
                  {
                    value: "Chicago",
                    label: "Chicago",
                  },
                  {
                    value: "Boston",
                    label: "Boston",
                  },
                  {
                    value: "Denver",
                    label: "Denver",
                  },
                ],
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{F as default};
