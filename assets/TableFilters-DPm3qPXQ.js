import{N as T}from"./DzangolabVue3Form.es-BbhZLtC1.js";import{d as K,L as V,k as s,C as q,r as k,v as f,K as R,f as w,o as z,i as o,D as a,g as l,t as m,h as r,u as i}from"./index-4qXijAqf.js";import{B as c}from"./DzangolabVue3TanstackTable.es-OufCTp9H.js";import{d as b,f as I}from"./data-C-ninj2G.js";import{_ as E}from"./TablePage.vue_vue_type_style_index_0_lang-BSKO6oxw.js";const O={class:"section-content"},A={class:"section-content"},P={class:"section-content"},B={class:"section-content"},$={name:"TableFilters"},Q=K({...$,setup(N){const{t:d}=V(),g=[{accessorKey:"email",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:"Search by email...",header:"Email"},{accessorKey:"name",enableSorting:!0,header:"Full name"},{accessorKey:"age",align:"right",enableSorting:!0,header:"Age"},{accessorKey:"city",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:"Select city",header:"City",meta:{filterVariant:"multiselect",filterOptions:[{label:"Atlanta",value:"Atlanta"},{label:"Chicago",value:"Chicago"},{label:"Boston",value:"Boston"},{label:"Denver",value:"Denver"}]}}],y=[...g.map(t=>t.accessorKey==="email"?{...t,customFilterComponent:e=>s(q,{debounceTime:200,modelValue:e.getFilterValue(),placeholder:d("table.label.customFilter"),"onUpdate:modelValue":n=>{e.setFilterValue(n)}}),meta:{serverFilterFn:"contains"}}:t.accessorKey==="city"?{accessorKey:"city",enableSorting:!0,header:"City"}:t)],v=[{accessorKey:"description",enableColumnFilter:!0,enableSorting:!0,filterFn:"customEqualStringFilter",filterPlaceholder:d("table.label.matchDescription"),header:"Description"},{accessorKey:"quantity",dataType:"number",enableSorting:!0,header:"Quantity",numberOptions:{locale:"en-IN"}},{accessorKey:"amount",dataType:"currency",enableSorting:!0,header:"Amount",numberOptions:{locale:"en-US",formatOptions:{currency:"EUR"}}},{accessorKey:"date",customFilterComponent:t=>s("div",{class:"filter-date"},[s(T,{modelValue:p.value,multiCalendars:!0,name:"date-range",placeholder:d("table.label.dateRange"),range:!0,"onUpdate:modelValue":e=>{p.value=e,t.setFilterValue(e)}})]),dataType:"date",enableColumnFilter:!0,enableSorting:!0,filterFn:"inDateRangeFilter",header:"Date"},{accessorKey:"action",cell:()=>s(f,{iconLeft:"pi pi-eye",rounded:!0,variant:"textOnly"}),dataType:"other",header:()=>s("i",{class:"pi pi-cog"})}],F=[...g.map(t=>t.accessorKey==="email"?{...t,meta:{serverFilterFn:"equals"}}:t.accessorKey==="city"?{accessorKey:"city",enableSorting:!0,header:"City"}:t)],p=k([]),D=(t,e,n)=>!!n.includes(t.getValue(e)),h=(t,e,n)=>{if(!n||!n[0]||!n[1])return!0;const u=t.getValue(e)?new Date(t.getValue(e)):null,C=new Date(n[1]),S=new Date(n[0]);return!!(u&&S.getTime()<=u.getTime()&&u.getTime()<C.getTime())};return(t,e)=>{const n=R("SshPre");return z(),w(E,{title:t.$t("table.title"),class:"demo data-table"},{toolbar:o(()=>[r(i(f),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=u=>t.$router.push("/table"))},null,8,["label"])]),default:o(()=>[e[13]||(e[13]=a()),l("section",null,[l("h2",null,m(t.$t("table.usage.filterableColumn")),1),e[3]||(e[3]=a()),l("div",O,[r(i(c),{"columns-data":g,data:i(b)},null,8,["data"]),e[2]||(e[2]=a()),r(n,{language:"html-vue"},{default:o(()=>e[1]||(e[1]=[a(`
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
              enableSorting: true,
              header: "Full name",
            },
            {
              align: "right",
              accessorKey: "age",
              enableSorting: true,
              header: "Age",
            },
            {
              accessorKey: "city",
              header: "City",
              enableColumnFilter: true,
              enableSorting: true,
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
        `)])),_:1})])]),e[14]||(e[14]=a()),l("section",null,[l("h2",null,m(t.$t("table.usage.customStaticFilter")),1),e[6]||(e[6]=a()),l("div",A,[r(i(c),{"columns-data":v,data:i(I),"initial-sorting":[{id:"quantity",desc:!0}],paginated:!1,"table-options":{filterFns:{customEqualStringFilter:D,inDateRangeFilter:h}},class:"custom-static-filter-table"},null,8,["data","table-options"]),e[5]||(e[5]=a()),r(n,{language:"html-vue"},{default:o(()=>e[4]||(e[4]=[a(`
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

          const customFilterColumns: Array<TableColumnDefinition> = [
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
            enableSorting: true,
            header: "Quantity",
            numberOptions: {
              locale: "en-IN",
            },
          },
          {
            accessorKey: "amount",
            dataType: "currency",
            enableSorting: true,
            header: "Amount",
            numberOptions: {
              locale: "en-US",
              formatOptions: {
                currency: "EUR",
              },
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
            header: () => h("i", {
              class: "pi pi-cog"
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
        `)])),_:1})])]),e[15]||(e[15]=a()),l("section",null,[l("h2",null,m(t.$t("table.usage.customFilter")),1),e[9]||(e[9]=a()),l("div",P,[r(i(c),{"columns-data":y,data:i(b).slice(10,15),"initial-sorting":[{id:"email",desc:!1}],"is-server-table":""},null,8,["data"]),e[8]||(e[8]=a()),r(n,{language:"html-vue"},{default:o(()=>e[7]||(e[7]=[a(`
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
                      placeholder: t('table.label.customFilter'),
                      "onUpdate:modelValue": (value) => {
                        column.setFilterValue(value);
                      },
                    });
                  },
                  meta: {
                    serverFilterFn: "contains",
                  }
                };
              } else if (columnData.accessorKey === "city") {
                return {
                  accessorKey: "city",
                  enableSorting: true,
                  header: "City",
                };
              }

              return columnData;
            })
          ];
  
          const data = [
            ...
          ];
          <\/script>
        `)])),_:1})])]),e[16]||(e[16]=a()),l("section",null,[l("h2",null,m(t.$t("table.usage.equalServerFilter")),1),e[12]||(e[12]=a()),l("div",B,[r(i(c),{"columns-data":F,data:i(b).slice(10,15),"initial-sorting":[{id:"email",desc:!1}],"is-server-table":""},null,8,["data"]),e[11]||(e[11]=a()),r(n,{language:"html-vue"},{default:o(()=>e[10]||(e[10]=[a(`
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
              if (columnData.accessorKey === "email") {
                return {
                  ...columnData,
                  meta: {
                    serverFilterFn: "equals",
                  }
                };
              } else if (columnData.accessorKey === "city") {
                return {
                  accessorKey: "city",
                  enableSorting: true,
                  header: "City",
                };
              }

              return columnData;
            })
          ];
  
          const data = [
            ...
          ];
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{Q as default};
