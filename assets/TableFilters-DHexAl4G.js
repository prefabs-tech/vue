import{Y as S}from"./DzangolabVue3Form.es-D8JqPf_4.js";import{d as q,L as K,k as u,C as V,r as k,v as f,K as P,f as w,o as E,i as s,D as a,g as n,t as c,h as o,u as i}from"./index-C9_BK2z2.js";import{G as d}from"./DzangolabVue3TanstackTable.es-D7PpfASo.js";import{c as R,d as b,f as z}from"./data-BbDBEIKR.js";import{_ as I}from"./TablePage.vue_vue_type_style_index_0_lang-D9zcke7D.js";const O={class:"section-content"},$={class:"section-content"},U={class:"section-content"},A={class:"section-content"},N={name:"TableFilters"},J=q({...N,setup(B){const{t:r}=K(),p=[{accessorKey:"email",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:"Search by email...",header:"Email"},{accessorKey:"name",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:r("table.placeholder.search"),header:"Full name"},{accessorKey:"age",align:"right",enableColumnFilter:!0,enableSorting:!0,filterFn:"weakEquals",filterPlaceholder:r("table.placeholder.search"),header:"Age"},{accessorKey:"city",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:r("table.placeholder.city"),header:"City",meta:{filterVariant:"multiselect",filterOptions:R}}],F=[...p.map(t=>t.accessorKey==="email"?{...t,customFilterComponent:e=>u(V,{debounceTime:200,modelValue:e.getFilterValue(),placeholder:r("table.label.customFilter"),"onUpdate:modelValue":l=>{e.setFilterValue(l)}}),meta:{serverFilterFn:"contains"}}:t.accessorKey==="age"?{...t,meta:{serverFilterFn:"equals"}}:t)],y=[{accessorKey:"description",enableColumnFilter:!0,enableSorting:!0,filterFn:"customEqualStringFilter",filterPlaceholder:r("table.label.matchDescription"),header:"Description"},{accessorKey:"quantity",dataType:"number",enableColumnFilter:!0,enableSorting:!0,filterFn:"weakEquals",filterPlaceholder:r("table.placeholder.search"),header:"Quantity",numberOptions:{locale:"en-IN"}},{accessorKey:"amount",dataType:"currency",enableColumnFilter:!0,enableSorting:!0,filterFn:"weakEquals",filterPlaceholder:r("table.placeholder.search"),header:"Amount",numberOptions:{formatOptions:{currency:"EUR"},locale:"en-US"}},{accessorKey:"date",customFilterComponent:t=>u("div",{class:"filter-date"},[u(S,{modelValue:g.value,multiCalendars:!0,name:"date-range",placeholder:r("table.label.dateRange"),range:!0,"onUpdate:modelValue":e=>{g.value=e,t.setFilterValue(e)}})]),dataType:"date",enableColumnFilter:!0,enableSorting:!0,filterFn:"inDateRangeFilter",filterPlaceholder:r("table.placeholder.dateRange"),header:"Date"},{accessorKey:"action",cell:()=>u(f,{iconLeft:"pi pi-eye",rounded:!0,variant:"textOnly"}),dataType:"other",header:()=>u("i",{class:"pi pi-cog"})}],h=[...p.map(t=>t.accessorKey==="email"||t.accessorKey==="age"?{...t,meta:{serverFilterFn:"equals"}}:t)],g=k([]),v=(t,e,l)=>!!l.includes(t.getValue(e)),D=(t,e,l)=>{if(!l||!l[0]||!l[1])return!0;const m=t.getValue(e)?new Date(t.getValue(e)):null,C=new Date(l[1]),T=new Date(l[0]);return!!(m&&T.getTime()<=m.getTime()&&m.getTime()<C.getTime())};return(t,e)=>{const l=P("SshPre");return E(),w(I,{title:t.$t("table.title"),class:"demo data-table"},{toolbar:s(()=>[o(i(f),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=m=>t.$router.push("/table"))},null,8,["label"])]),default:s(()=>[e[13]||(e[13]=a()),n("section",null,[n("h2",null,c(t.$t("table.usage.filterableColumn")),1),e[3]||(e[3]=a()),n("div",O,[o(i(d),{"columns-data":p,data:i(b)},null,8,["data"]),e[2]||(e[2]=a()),o(l,{language:"html-vue"},{default:s(()=>e[1]||(e[1]=[a(`
          <template>
            <Table :columns-data="columns" :data="data" />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import { city } from "./data";

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
              filterPlaceholder: t("table.placeholder.search"),
              header: "Full name",
            },
            {
              accessorKey: "age",
              align: "right",
              enableColumnFilter: true,
              enableSorting: true,
              filterFn: "weakEquals",
              filterPlaceholder: t("table.placeholder.search"),
              header: "Age",
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
        `)])),_:1})])]),e[14]||(e[14]=a()),n("section",null,[n("h2",null,c(t.$t("table.usage.customStaticFilter")),1),e[6]||(e[6]=a()),n("div",$,[o(i(d),{"columns-data":y,data:i(z),"initial-sorting":[{id:"quantity",desc:!0}],paginated:!1,"table-options":{filterFns:{customEqualStringFilter:v,inDateRangeFilter:D}},class:"custom-static-filter-table"},null,8,["data","table-options"]),e[5]||(e[5]=a()),o(l,{language:"html-vue"},{default:s(()=>e[4]||(e[4]=[a(`
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
          import { useI18n } from "@dzangolab/vue3-i18n";
          import { Table } from "@dzangolab/vue3-tanstack-table";
          import { h, ref } from "vue";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
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
              filterFn: "weakEquals",
              filterPlaceholder: t("table.placeholder.search"),
              header: "Quantity",
              numberOptions: {
                locale: "en-IN",
              },
            },
            {
              accessorKey: "amount",
              dataType: "currency",
              enableColumnFilter: true,
              enableSorting: true,
              filterFn: "weakEquals",
              filterPlaceholder: t("table.placeholder.search"),
              header: "Amount",
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
        `)])),_:1})])]),e[15]||(e[15]=a()),n("section",null,[n("h2",null,c(t.$t("table.usage.customFilter")),1),e[9]||(e[9]=a()),n("div",U,[o(i(d),{"columns-data":F,data:i(b).slice(10,15),"initial-sorting":[{id:"email",desc:!1}],"is-server-table":""},null,8,["data"]),e[8]||(e[8]=a()),o(l,{language:"html-vue"},{default:s(()=>e[7]||(e[7]=[a(`
          <template>
            <Table
              :columns-data="customColumns"
              :data="data.slice(10, 15)"
              :initial-sorting="[{ id: 'email', desc: false }]"
              is-server-table
            />
          </template>
    
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";
          import { Table } from "@dzangolab/vue3-tanstack-table";
          import { DebouncedInput } from "@dzangolab/vue3-ui";
          import { h, ref } from "vue";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
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
                    serverFilterFn: "equals",
                  }
                }
              }

              return columnData;
            }),
          ];
  
          const data = [
            ...
          ];
          <\/script>
        `)])),_:1})])]),e[16]||(e[16]=a()),n("section",null,[n("h2",null,c(t.$t("table.usage.equalServerFilter")),1),e[12]||(e[12]=a()),n("div",A,[o(i(d),{"columns-data":h,data:i(b).slice(10,15),"initial-sorting":[{id:"email",desc:!1}],"is-server-table":""},null,8,["data"]),e[11]||(e[11]=a()),o(l,{language:"html-vue"},{default:s(()=>e[10]||(e[10]=[a(`
          <template>
            <Table
              :columns-data="equalFilterColumns"
              :data="data.slice(10, 15)"
              :initial-sorting="[{ id: 'email', desc: false }]"
              is-server-table
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
          import { h, ref } from "vue";

          const equalFilterColumns = [
            ...columns.map((columnData) => {
              if (
                columnData.accessorKey === "email" ||
                columnData.accessorKey === "age"
              ) {
                return {
                  ...columnData,
                  meta: {
                    serverFilterFn: "equals",
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{J as default};
