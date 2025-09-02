import{_ as T}from"./PrefabsTechVue3Form.es-B5mCsZPN.js";import{d as S,I as K,k as u,U as P,r as $,v as g,J as q,e as R,o as k,j as s,C as n,f as r,t as c,h as i,u as o}from"./index-DhI5jERR.js";import{Q as d}from"./PrefabsTechVue3TanstackTable.es-BRRM-lG-.js";import{c as I,d as f,f as w}from"./data-gOxi8Wva.js";import{_ as E}from"./TablePage.vue_vue_type_style_index_0_lang-BzQvfEFW.js";const O={class:"section-content"},U={class:"section-content"},x={class:"section-content"},A={class:"section-content"},N={name:"TableFilters"},Y=S({...N,setup(B){const{t:l}=K(),p=[{accessorKey:"email",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:"Search by email...",header:"Email"},{accessorKey:"name",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:l("table.placeholder.search"),header:"Full name"},{accessorKey:"age",align:"right",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${l("table.placeholder.min")},${l("table.placeholder.max")}`,header:"Age",meta:{filterVariant:"range"}},{accessorKey:"city",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:l("table.placeholder.city"),header:"City",meta:{filterVariant:"multiselect",filterOptions:I}}],h=[...p.map(t=>t.accessorKey==="email"?{...t,customFilterComponent:e=>u(P,{debounceTime:200,modelValue:e.getFilterValue(),placeholder:l("table.label.customFilter"),"onUpdate:modelValue":a=>{e.setFilterValue(a)}}),meta:{serverFilterFn:"contains"}}:t.accessorKey==="age"?{...t,meta:{filterVariant:"range"}}:t)],y=[{accessorKey:"description",enableColumnFilter:!0,enableSorting:!0,filterFn:"customEqualStringFilter",filterPlaceholder:l("table.label.matchDescription"),header:"Description"},{accessorKey:"quantity",dataType:"number",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${l("table.placeholder.min")},${l("table.placeholder.max")}`,header:()=>"Quantity",meta:{filterVariant:"range"},numberOptions:{locale:"en-IN"}},{accessorKey:"amount",dataType:"currency",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${l("table.placeholder.min")},${l("table.placeholder.max")}`,header:"Amount",meta:{filterVariant:"range"},numberOptions:{formatOptions:{currency:"EUR"},locale:"en-US"}},{accessorKey:"date",customFilterComponent:t=>u("div",{class:"filter-date"},[u(T,{modelValue:b.value,multiCalendars:!0,name:"date-range",placeholder:l("table.label.dateRange"),range:!0,"onUpdate:modelValue":e=>{b.value=e,t.setFilterValue(e)}})]),dataType:"date",enableColumnFilter:!0,enableSorting:!0,filterFn:"inDateRangeFilter",filterPlaceholder:l("table.placeholder.dateRange"),header:"Date"},{accessorKey:"action",cell:()=>u(g,{iconLeft:"pi pi-eye",rounded:!0,variant:"textOnly"}),dataType:"other",header:()=>u("i",{class:"pi pi-cog"})}],F=[...p.map(t=>t.accessorKey==="email"?{...t,meta:{serverFilterFn:"equals"}}:t.accessorKey==="age"?{...t,meta:{filterVariant:"range"}}:t)],b=$([]),v=(t,e,a)=>!!a.includes(t.getValue(e)),D=(t,e,a)=>{if(!a||!a[0]||!a[1])return!0;const m=t.getValue(e)?new Date(t.getValue(e)):null,C=new Date(a[1]),V=new Date(a[0]);return!!(m&&V.getTime()<=m.getTime()&&m.getTime()<C.getTime())};return(t,e)=>{const a=q("SshPre");return k(),R(E,{title:t.$t("table.title"),class:"demo data-table"},{toolbar:s(()=>[i(o(g),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=m=>t.$router.push("/table"))},null,8,["label"])]),default:s(()=>[e[13]||(e[13]=n()),r("section",null,[r("h2",null,c(t.$t("table.usage.filterableColumn")),1),e[3]||(e[3]=n()),r("div",O,[i(o(d),{"columns-data":p,data:o(f)},null,8,["data"]),e[2]||(e[2]=n()),i(a,{language:"html-vue"},{default:s(()=>e[1]||(e[1]=[n(`
          <template>
            <Table :columns-data="columns" :data="data" />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import { city } from "./data";

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
              filterPlaceholder: t("table.placeholder.search"),
              header: "Full name",
            },
            {
              accessorKey: "age",
              align: "right",
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
              filterPlaceholder: t("table.placeholder.city"),
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
        `)])),_:1})])]),e[14]||(e[14]=n()),r("section",null,[r("h2",null,c(t.$t("table.usage.customStaticFilter")),1),e[6]||(e[6]=n()),r("div",U,[i(o(d),{"columns-data":y,data:o(w),"initial-sorting":[{id:"quantity",desc:!0}],paginated:!1,"table-options":{filterFns:{customEqualStringFilter:v,inDateRangeFilter:D}},class:"custom-static-filter-table"},null,8,["data","table-options"]),e[5]||(e[5]=n()),i(a,{language:"html-vue"},{default:s(()=>e[4]||(e[4]=[n(`
          <template>
            <Table
              :columns-data="customFilterColumns"
              :data="data"
              :initial-sorting="[{ id: 'quantity', desc: true }]"
              :paginated="false"
              :table-options="{
                filterFns: {
                  customEqualStringFilter: customEqualStringFilter,
                  inDateRangeFilter: inDateRangeFilter,
                },
              }"
              class="custom-static-filter-table"
            />
          </template>
    
          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
          import { h, ref } from "vue";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const { t } = useI18n();

          const customFilterColumns = [
            {
              accessorKey: "description",
              enableColumnFilter: true,
              enableSorting: true,
              filterFn: "customEqualStringFilter",
              filterPlaceholder: t("table.label.matchDescription"),
              header: "Description",
            },
            {
              accessorKey: "quantity",
              dataType: "number",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: \`\${t("table.placeholder.min")},\${t("table.placeholder.max")}\`,
              header: () => "Quantity",
              meta: {
                filterVariant: "range",
              },
              numberOptions: {
                locale: "en-IN",
              },
            },
            {
              accessorKey: "amount",
              dataType: "currency",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: \`\${t("table.placeholder.min")},\${t("table.placeholder.max")}\`,
              header: "Amount",
              meta: {
                filterVariant: "range",
              },
              numberOptions: {
                formatOptions: {
                  currency: "EUR",
                },
                locale: "en-US",
              },
            },
            {
              accessorKey: "date",
              customFilterComponent: (column) => {
                return h(
                  "div",
                  {
                    class: "filter-date",
                  },
                  [
                    h(DatePicker, {
                      modelValue: dateRange.value,
                      multiCalendars: true,
                      name: "date-range",
                      placeholder: t("table.label.dateRange"),
                      range: true,
                      "onUpdate:modelValue": (value) => {
                        dateRange.value = value;
                        column.setFilterValue(value);
                      },
                    }),
                  ],
                );
              },
              dataType: "date",
              enableColumnFilter: true,
              enableSorting: true,
              filterFn: "inDateRangeFilter",
              filterPlaceholder: t("table.placeholder.dateRange"),
              header: "Date",
            },
            {
              accessorKey: "action",
              cell: () =>
                h(ButtonElement, {
                  iconLeft: "pi pi-eye",
                  rounded: true,
                  variant: "textOnly",
                }),
              dataType: "other",
              header: () =>
                h("i", {
                  class: "pi pi-cog",
                }),
            },
          ];
  
          const data = [
            {
              id: 1001,
              amount: 1_234_567.89,
              quantity: 420,
              date: null,
              datetime: null,
              description: "Purchase of equipment",
            },
            {
              id: 1002,
              amount: 987_654.32,
              quantity: 175,
              date: new Date("2023-12-01T12:30:00"),
              datetime: "2023-12-01T11:00:00",
              description: "Office rent payment",
            },
            ...
          ];

          const dateRange = ref([]);

          const customEqualStringFilter: FilterFunction<any> = (
            row,
            columnId,
            value: string,
          ) => {
            if (value.includes(row.getValue(columnId) as string)) {
              return true;
            }

            return false;
          };

          const inDateRangeFilter: FilterFunction<any> = (
              row,
              columnId,
              value: [Date, Date],
            ) => {
              if (!value || !value[0] || !value[1]) {
                return true;
              }

              const columnDate = row.getValue(columnId)
                ? new Date(row.getValue(columnId) as Date)
                : null;
              const endDate = new Date(value[1]);
              const startDate = new Date(value[0]);

              if (
                columnDate &&
                startDate.getTime() <= columnDate.getTime() &&
                columnDate.getTime() < endDate.getTime()
              ) {
                return true;
              } else {
                return false;
              }
            };
          <\/script>
        `)])),_:1})])]),e[15]||(e[15]=n()),r("section",null,[r("h2",null,c(t.$t("table.usage.customFilter")),1),e[9]||(e[9]=n()),r("div",x,[i(o(d),{"columns-data":h,data:o(f).slice(10,15),"initial-sorting":[{id:"email",desc:!1}],"is-server-table":""},null,8,["data"]),e[8]||(e[8]=n()),i(a,{language:"html-vue"},{default:s(()=>e[7]||(e[7]=[n(`
          <template>
            <Table
              :columns-data="customColumns"
              :data="data.slice(10, 15)"
              :initial-sorting="[{ id: 'email', desc: false }]"
              is-server-table
            />
          </template>
    
          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
          import { DebouncedInput } from "@prefabs.tech/vue3-ui";
          import { h, ref } from "vue";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const { t } = useI18n();

          const customColumns = [
            ...columns.map((columnData) => {
              if (columnData.accessorKey === "email") {
                return {
                  ...columnData,
                  customFilterComponent: (column) => {
                    return h(DebouncedInput, {
                      debounceTime: 200,
                      modelValue: column.getFilterValue() as string,
                      placeholder: t("table.label.customFilter"),
                      "onUpdate:modelValue": (value) => {
                        column.setFilterValue(value);
                      },
                    });
                  },
                  meta: {
                    serverFilterFn: "contains",
                  },
                };
              } else if (columnData.accessorKey === "age") {
                return {
                  ...columnData,
                  meta: {
                    filterVariant: "range",
                  },
                }
              }

              return columnData;
            }),
          ];
  
          const data = [
            ...
          ];
          <\/script>
        `)])),_:1})])]),e[16]||(e[16]=n()),r("section",null,[r("h2",null,c(t.$t("table.usage.equalServerFilter")),1),e[12]||(e[12]=n()),r("div",A,[i(o(d),{"columns-data":F,data:o(f).slice(10,15),"initial-sorting":[{id:"email",desc:!1}],"is-server-table":""},null,8,["data"]),e[11]||(e[11]=n()),i(a,{language:"html-vue"},{default:s(()=>e[10]||(e[10]=[n(`
          <template>
            <Table
              :columns-data="equalFilterColumns"
              :data="data.slice(10, 15)"
              :initial-sorting="[{ id: 'email', desc: false }]"
              is-server-table
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
          import { h, ref } from "vue";

          const equalFilterColumns = [
            ...columns.map((columnData) => {
              if (columnData.accessorKey === "email") {
                return {
                  ...columnData,
                  meta: {
                    serverFilterFn: "equals",
                  },
                };
              } else if (columnData.accessorKey === "age") {
                return {
                  ...columnData,
                  meta: {
                    filterVariant: "range",
                  },
                };
              }

              return columnData;
            }),
          ];
  
          const data = [
            ...
          ];
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{Y as default};
