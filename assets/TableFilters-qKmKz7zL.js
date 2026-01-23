import{p as S}from"./PrefabsTechVue3Form.es-DfEd4Dds.js";import{d as T,I as K,j as s,X as q,r as P,q as $,J as R,e as w,o as I,i as u,f as r,B as n,t as c,h as o,u as i}from"./index-DoIY9s04.js";import{o as m}from"./PrefabsTechVue3TanstackTable.es-CRmWjXeO.js";import{c as k,d as f,f as E}from"./data-gOxi8Wva.js";import{_ as O}from"./TablePage.vue_vue_type_style_index_0_lang-5W-2kSWB.js";const x={class:"section-content"},U={class:"section-content"},A={class:"section-content"},N={class:"section-content"},B={name:"TableFilters"},Y=T({...B,setup(j){const{locale:g,t:l}=K(),d=[{accessorKey:"email",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:"Search by email...",header:"Email"},{accessorKey:"name",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:l("table.placeholder.search"),header:"Full name"},{accessorKey:"age",align:"right",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${l("table.placeholder.min")},${l("table.placeholder.max")}`,header:"Age",meta:{filterVariant:"range"}},{accessorKey:"city",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:l("table.placeholder.city"),header:"City",meta:{filterVariant:"multiselect",filterOptions:k}}],h=[...d.map(t=>t.accessorKey==="email"?{...t,customFilterComponent:e=>s(q,{debounceTime:200,modelValue:e.getFilterValue(),placeholder:l("table.label.customFilter"),"onUpdate:modelValue":a=>{e.setFilterValue(a)}}),meta:{serverFilterFn:"contains"}}:t.accessorKey==="age"?{...t,meta:{filterVariant:"range"}}:t)],y=[{accessorKey:"description",enableColumnFilter:!0,enableSorting:!0,filterFn:"customEqualStringFilter",filterPlaceholder:l("table.label.matchDescription"),header:"Description"},{accessorKey:"quantity",dataType:"number",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${l("table.placeholder.min")},${l("table.placeholder.max")}`,header:()=>"Quantity",meta:{filterVariant:"range"},numberOptions:{locale:"en-IN"}},{accessorKey:"amount",dataType:"currency",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${l("table.placeholder.min")},${l("table.placeholder.max")}`,header:"Amount",meta:{filterVariant:"range"},numberOptions:{formatOptions:{currency:"EUR"},locale:"en-US"}},{accessorKey:"date",customFilterComponent:t=>s("div",{class:"filter-date"},[s(S,{modelValue:b.value,multiCalendars:!0,name:"date-range",placeholder:l("table.label.dateRange"),range:!0,"onUpdate:modelValue":e=>{b.value=e,t.setFilterValue(e)}})]),dataType:"date",enableColumnFilter:!0,enableSorting:!0,filterFn:"inDateRangeFilter",filterPlaceholder:l("table.placeholder.dateRange"),header:"Date"},{accessorKey:"action",cell:()=>s($,{iconLeft:"pi pi-eye",rounded:!0,variant:"textOnly"}),dataType:"other",header:()=>s("i",{class:"pi pi-cog"})}],F=[...d.map(t=>t.accessorKey==="email"?{...t,meta:{serverFilterFn:"equals"}}:t.accessorKey==="age"?{...t,meta:{filterVariant:"range"}}:t)],b=P([]),v=(t,e,a)=>!!a.includes(t.getValue(e)),D=(t,e,a)=>{if(!a||!a[0]||!a[1])return!0;const p=t.getValue(e)?new Date(t.getValue(e)):null,C=new Date(a[1]),V=new Date(a[0]);return!!(p&&V.getTime()<=p.getTime()&&p.getTime()<C.getTime())};return(t,e)=>{const a=R("SshPre");return I(),w(O,{title:t.$t("table.title"),class:"demo data-table"},{default:u(()=>[r("section",null,[r("h2",null,c(t.$t("table.usage.filterableColumn")),1),e[2]||(e[2]=n()),r("div",x,[o(i(m),{id:"filterable-column","columns-data":d,data:i(f)},null,8,["data"]),e[1]||(e[1]=n()),o(a,{language:"html-vue"},{default:u(()=>e[0]||(e[0]=[n(`
          <template>
            <Table id="filterable-column" :columns-data="columns" :data="data" />
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
        `)])),_:1})])]),e[12]||(e[12]=n()),r("section",null,[r("h2",null,c(t.$t("table.usage.customStaticFilter")),1),e[5]||(e[5]=n()),r("div",U,[o(i(m),{id:"custom-static-filter","columns-data":y,data:i(E),"initial-sorting":[{id:"quantity",desc:!0}],locale:String(i(g)),paginated:!1,"table-options":{filterFns:{customEqualStringFilter:v,inDateRangeFilter:D}},class:"custom-static-filter-table"},null,8,["data","locale","table-options"]),e[4]||(e[4]=n()),o(a,{language:"html-vue"},{default:u(()=>e[3]||(e[3]=[n(`
          <template>
            <Table
              id="custom-static-filter"
              :columns-data="customFilterColumns"
              :data="data"
              :initial-sorting="[{ id: 'quantity', desc: true }]"
              :locale="String(locale)"
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
    
          const { locale, t } = useI18n();

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
        `)])),_:1})])]),e[13]||(e[13]=n()),r("section",null,[r("h2",null,c(t.$t("table.usage.customFilter")),1),e[8]||(e[8]=n()),r("div",A,[o(i(m),{id:"custom-filter","columns-data":h,data:i(f).slice(10,15),"initial-sorting":[{id:"email",desc:!1}],"is-server-table":""},null,8,["data"]),e[7]||(e[7]=n()),o(a,{language:"html-vue"},{default:u(()=>e[6]||(e[6]=[n(`
          <template>
            <Table
              id="custom-filter"
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
        `)])),_:1})])]),e[14]||(e[14]=n()),r("section",null,[r("h2",null,c(t.$t("table.usage.equalServerFilter")),1),e[11]||(e[11]=n()),r("div",N,[o(i(m),{id:"equal-server-filter","columns-data":F,data:i(f).slice(10,15),"initial-sorting":[{id:"email",desc:!1}],"is-server-table":""},null,8,["data"]),e[10]||(e[10]=n()),o(a,{language:"html-vue"},{default:u(()=>e[9]||(e[9]=[n(`
          <template>
            <Table
              id="equal-server-filter"              :columns-data="equalFilterColumns"
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
