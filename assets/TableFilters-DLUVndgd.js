import{B as e,D as t,E as n,On as r,St as i,_ as a,k as o,mt as s,qt as c,tr as l,v as u,vn as d}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{c as f,o as p}from"./PrefabsTechVue3UI.es-CXZdzPpN.js";import{E as m}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{c as h,n as g}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{n as _,r as v,t as y}from"./data-D-L-jgMw.js";import{t as b}from"./TablePage-pNK1JmgP.js";var x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T=o({name:`TableFiltersDemo`,setup(o){let{locale:T,t:E}=m(),D=[{accessorKey:`email`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`Search by email...`,header:`Email`},{accessorKey:`name`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:E(`table.placeholder.search`),header:`Full name`},{accessorKey:`age`,align:`right`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${E(`table.placeholder.min`)},${E(`table.placeholder.max`)}`,header:`Age`,meta:{filterVariant:`range`}},{accessorKey:`city`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:E(`table.placeholder.city`),header:`City`,meta:{filterOptions:y,filterVariant:`multiselect`}}],O=D.map(t=>t.accessorKey===`email`?{...t,customFilterComponent:t=>e(f,{debounceTime:200,modelValue:t.getFilterValue(),"onUpdate:modelValue":e=>{t.setFilterValue(e)},placeholder:E(`table.label.customFilter`)}),meta:{serverFilterFn:`contains`}}:t.accessorKey===`age`?{...t,meta:{filterVariant:`range`}}:t),k=[{accessorKey:`description`,enableColumnFilter:!0,enableSorting:!0,filterFn:`customEqualStringFilter`,filterPlaceholder:E(`table.label.matchDescription`),header:`Description`},{accessorKey:`quantity`,dataType:`number`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${E(`table.placeholder.min`)},${E(`table.placeholder.max`)}`,header:()=>`Quantity`,meta:{filterVariant:`range`},numberOptions:{locale:`en-IN`}},{accessorKey:`amount`,dataType:`currency`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${E(`table.placeholder.min`)},${E(`table.placeholder.max`)}`,header:`Amount`,meta:{filterVariant:`range`},numberOptions:{formatOptions:{currency:`EUR`},locale:`en-US`}},{accessorKey:`date`,customFilterComponent:t=>e(`div`,{class:`filter-date`},[e(h,{modelValue:j.value,multiCalendars:!0,name:`date-range`,"onUpdate:modelValue":e=>{j.value=e,t.setFilterValue(e)},placeholder:E(`table.label.dateRange`),range:!0,teleport:!0})]),dataType:`date`,enableColumnFilter:!0,enableSorting:!0,filterFn:`inDateRangeFilter`,filterPlaceholder:E(`table.placeholder.dateRange`),header:`Date`},{accessorKey:`action`,cell:()=>e(p,{iconLeft:`pi pi-eye`,rounded:!0,variant:`textOnly`}),dataType:`other`,header:()=>e(`i`,{class:`pi pi-cog`})}],A=D.map(e=>e.accessorKey===`email`?{...e,meta:{serverFilterFn:`equals`}}:e.accessorKey===`age`?{...e,meta:{filterVariant:`range`}}:e),j=d([]),M=(e,t,n)=>!!n.includes(e.getValue(t)),N=(e,t,n)=>{if(!n||!n[0]||!n[1])return!0;let r=e.getValue(t)?new Date(e.getValue(t)):null,i=new Date(n[1]),a=new Date(n[0]);return!!(r&&a.getTime()<=r.getTime()&&r.getTime()<i.getTime())};return(e,o)=>{let d=i(`SshPre`);return s(),u(b,{title:e.$t(`table.title`),class:`demo data-table`},{default:c(()=>[a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.filterableColumn`)),1),o[2]||=n(),a(`div`,x,[t(r(g),{id:`filterable-column`,"columns-data":D,data:r(_)},null,8,[`data`]),o[1]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[0]||=[n(`
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
                filterVariant: "range" as const,
              },
            },
            {
              accessorKey: "city",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.city"),
              header: "City",
              meta: {
                filterVariant: "multiselect" as const,
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
        `,-1)]]),_:1})])]),o[12]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.customStaticFilter`)),1),o[5]||=n(),a(`div`,S,[t(r(g),{id:`custom-static-filter`,"columns-data":k,data:r(v),"initial-sorting":[{id:`quantity`,desc:!0}],locale:String(r(T)),paginated:!1,"table-options":{filterFns:{customEqualStringFilter:M,inDateRangeFilter:N}},class:`custom-static-filter-table`},null,8,[`data`,`locale`,`table-options`]),o[4]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[3]||=[n(`
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
                filterVariant: "range" as const,
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
                filterVariant: "range" as const,
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
        `,-1)]]),_:1})])]),o[13]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.customFilter`)),1),o[8]||=n(),a(`div`,C,[t(r(g),{id:`custom-filter`,"columns-data":r(O),data:r(_).slice(10,15),"initial-sorting":[{id:`email`,desc:!1}],"is-server-table":``},null,8,[`columns-data`,`data`]),o[7]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[6]||=[n(`
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
                    filterVariant: "range" as const,
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
        `,-1)]]),_:1})])]),o[14]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.equalServerFilter`)),1),o[11]||=n(),a(`div`,w,[t(r(g),{id:`equal-server-filter`,"columns-data":r(A),data:r(_).slice(10,15),"initial-sorting":[{id:`email`,desc:!1}],"is-server-table":``},null,8,[`columns-data`,`data`]),o[10]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[9]||=[n(`
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
                    filterVariant: "range" as const,
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
        `,-1)]]),_:1})])])]),_:1},8,[`title`])}}});export{T as default};