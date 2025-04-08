import{N as K}from"./DzangolabVue3Form.es-fB4Y1Uvk.js";import{d as V,E as S,h as s,I as q,r as k,p as g,D as w,e as I,o as R,w as i,B as a,f as l,t as m,i as r,u as o}from"./index-CcXXiZBJ.js";import{Y as c}from"./DzangolabVue3TanstackTable.es-Cpb9HpNv.js";import{d as b,f as z}from"./data-G7xVDYni.js";import{_ as E}from"./TablePage.vue_vue_type_style_index_0_lang-BiBflRuM.js";const O={class:"section-content"},A={class:"section-content"},P={class:"section-content"},B={class:"section-content"},$={name:"TableFilters"},J=V({...$,setup(N){const{t:d}=S(),p=[{accessorKey:"email",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:"Search by email...",header:"Email"},{accessorKey:"name",header:"Full name"},{accessorKey:"age",align:"right",header:"Age"},{accessorKey:"city",enableColumnFilter:!0,filterPlaceholder:"Select city",header:"City",meta:{filterVariant:"multiselect",filterOptions:[{label:"Atlanta",value:"Atlanta"},{label:"Chicago",value:"Chicago"},{label:"Boston",value:"Boston"},{label:"Denver",value:"Denver"}]}}],y=[...p.map(t=>t.accessorKey==="email"?{...t,customFilterComponent:e=>s(q,{debounceTime:200,modelValue:e.getFilterValue(),placeholder:d("table.label.customFilter"),"onUpdate:modelValue":n=>{e.setFilterValue(n)}}),meta:{serverFilterFn:"contains"}}:t.accessorKey==="city"?{accessorKey:"city",header:"City"}:t)],v=[{accessorKey:"description",enableColumnFilter:!0,filterFn:"customEqualStringFilter",filterPlaceholder:d("table.label.matchDescription"),header:"Description"},{accessorKey:"quantity",dataType:"number",enableSorting:!0,header:"Quantity",numberOptions:{locale:"en-IN"}},{accessorKey:"amount",dataType:"currency",header:"Amount",numberOptions:{locale:"en-US",formatOptions:{currency:"EUR"}}},{accessorKey:"date",customFilterComponent:t=>s("div",{class:"filter-date"},[s(K,{modelValue:f.value,multiCalendars:!0,name:"date-range",placeholder:d("table.label.dateRange"),range:!0,"onUpdate:modelValue":e=>{f.value=e,t.setFilterValue(e)}})]),dataType:"date",enableColumnFilter:!0,filterFn:"inDateRangeFilter",header:"Date"},{accessorKey:"action",cell:()=>s(g,{iconLeft:"pi pi-eye",rounded:!0,variant:"textOnly"}),dataType:"other",header:()=>s("i",{class:"pi pi-cog"})}],F=[...p.map(t=>t.accessorKey==="email"?{...t,meta:{serverFilterFn:"equals"}}:t.accessorKey==="city"?{accessorKey:"city",header:"City"}:t)],f=k([]),D=(t,e,n)=>!!n.includes(t.getValue(e)),h=(t,e,n)=>{if(!n||!n[0]||!n[1])return!0;const u=t.getValue(e)?new Date(t.getValue(e)):null,C=new Date(n[1]),T=new Date(n[0]);return!!(u&&T.getTime()<=u.getTime()&&u.getTime()<C.getTime())};return(t,e)=>{const n=w("SshPre");return R(),I(E,{title:t.$t("table.title"),class:"demo data-table"},{toolbar:i(()=>[r(o(g),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=u=>t.$router.push("/table"))},null,8,["label"])]),default:i(()=>[e[13]||(e[13]=a()),l("section",null,[l("h2",null,m(t.$t("table.usage.filterableColumn")),1),e[3]||(e[3]=a()),l("div",O,[r(o(c),{"columns-data":p,data:o(b)},null,8,["data"]),e[2]||(e[2]=a()),r(n,{language:"html-vue"},{default:i(()=>e[1]||(e[1]=[a(`
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
        `)])),_:1})])]),e[14]||(e[14]=a()),l("section",null,[l("h2",null,m(t.$t("table.usage.customStaticFilter")),1),e[6]||(e[6]=a()),l("div",A,[r(o(c),{"columns-data":v,data:o(z),"initial-sorting":[{id:"quantity",desc:!0}],paginated:!1,"table-options":{filterFns:{customEqualStringFilter:D,inDateRangeFilter:h}},class:"custom-static-filter-table"},null,8,["data","table-options"]),e[5]||(e[5]=a()),r(n,{language:"html-vue"},{default:i(()=>e[4]||(e[4]=[a(`
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

          const customFilterColumns: Array<TableColumnDefinition<unknown, unknown>> = [
          {
            accessorKey: "description",
            enableColumnFilter: true,
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
        `)])),_:1})])]),e[15]||(e[15]=a()),l("section",null,[l("h2",null,m(t.$t("table.usage.customFilter")),1),e[9]||(e[9]=a()),l("div",P,[r(o(c),{"columns-data":y,data:o(b).slice(10,15),"initial-sorting":[{id:"email",desc:!1}],"is-server-table":""},null,8,["data"]),e[8]||(e[8]=a()),r(n,{language:"html-vue"},{default:i(()=>e[7]||(e[7]=[a(`
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
        `)])),_:1})])]),e[16]||(e[16]=a()),l("section",null,[l("h2",null,m(t.$t("table.usage.equalServerFilter")),1),e[12]||(e[12]=a()),l("div",B,[r(o(c),{"columns-data":F,data:o(b).slice(10,15),"initial-sorting":[{id:"email",desc:!1}],"is-server-table":""},null,8,["data"]),e[11]||(e[11]=a()),r(n,{language:"html-vue"},{default:i(()=>e[10]||(e[10]=[a(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{J as default};
