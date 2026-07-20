import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,tr as c,v as l}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{E as u}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{n as d}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{n as f,t as p}from"./data-D-L-jgMw.js";import{t as m}from"./TablePage-pNK1JmgP.js";var h={class:`section-content`},g=a({name:`PersistentTableDemo`,setup(a){let{t:g}=u(),_=[{accessorKey:`email`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:g(`table.label.searchByEmail`),header:`Email`},{accessorKey:`name`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:g(`table.placeholder.search`),header:`Full name`},{accessorKey:`age`,align:`right`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${g(`table.placeholder.min`)},${g(`table.placeholder.max`)}`,header:`Age`,meta:{filterVariant:`range`}},{accessorKey:`city`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:g(`table.placeholder.city`),header:`City`,meta:{filterOptions:p,filterVariant:`multiselect`}}];return(a,u)=>{let p=r(`SshPre`);return o(),l(m,{title:a.$t(`table.title`),class:`demo data-table`},{default:s(()=>[i(`section`,null,[i(`h2`,null,c(a.$t(`table.usage.persistentState`)),1),u[2]||=t(),i(`p`,null,c(a.$t(`table.usage.persistentInstruction`)),1),u[3]||=t(),i(`div`,h,[e(n(d),{id:`persistent-state`,"columns-data":_,data:n(f),"initial-sorting":[{id:`email`,desc:!0}],"persist-state":!0,"show-column-action":``},null,8,[`data`]),u[1]||=t(),e(p,{language:`html-vue`},{default:s(()=>[...u[0]||=[t(`
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
        `,-1)]]),_:1})])])]),_:1},8,[`title`])}}});export{g as default};