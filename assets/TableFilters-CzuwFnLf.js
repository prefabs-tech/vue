import{N as F}from"./DzangolabVue3Form.es-D_L3YI2H.js";import{d as C,E as T,h as s,r as S,p as d,D as K,e as V,o as w,w as u,B as n,f as l,t as p,i as r,u as o}from"./index-_VHwa3nM.js";import{Y as g}from"./DzangolabVue3TanstackTable.es-DuFsj-4Z.js";import{d as R,f as k}from"./data-G7xVDYni.js";import{_ as q}from"./TablePage.vue_vue_type_style_index_0_lang-Bu3__HXC.js";const E={class:"section-content"},O={class:"section-content"},A={name:"TableFilters"},U=C({...A,setup(P){const{t:c}=T(),f=[{accessorKey:"email",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:"Search by email...",header:"Email"},{accessorKey:"name",header:"Full name"},{accessorKey:"age",align:"right",header:"Age"},{accessorKey:"city",enableColumnFilter:!0,filterPlaceholder:"Select city",header:"City",meta:{filterVariant:"multiselect",filterOptions:[{label:"Atlanta",value:"Atlanta"},{label:"Chicago",value:"Chicago"},{label:"Boston",value:"Boston"},{label:"Denver",value:"Denver"}]}}],b=[{accessorKey:"description",enableColumnFilter:!0,filterFn:"customEqualStringFilter",filterPlaceholder:c("table.label.matchDescription"),header:"Description"},{accessorKey:"quantity",dataType:"number",enableSorting:!0,header:"Quantity",numberOptions:{locale:"en-IN"}},{accessorKey:"amount",dataType:"currency",header:"Amount",numberOptions:{locale:"en-US",formatOptions:{currency:"EUR"}}},{accessorKey:"date",customFilterComponent:t=>s("div",{class:"filter-date"},[s(F,{modelValue:m.value,multiCalendars:!0,name:"date-range",placeholder:c("table.label.dateRange"),range:!0,"onUpdate:modelValue":e=>{m.value=e,t.setFilterValue(e)}})]),dataType:"date",enableColumnFilter:!0,filterFn:"inDateRangeFilter",header:"Date"},{accessorKey:"action",cell:()=>s(d,{iconLeft:"pi pi-eye",rounded:!0,variant:"textOnly"}),dataType:"other",header:()=>s("i",{class:"pi pi-cog"})}],m=S([]),y=(t,e,a)=>!!a.includes(t.getValue(e)),D=(t,e,a)=>{if(!a||!a[0]||!a[1])return!0;const i=t.getValue(e)?new Date(t.getValue(e)):null,h=new Date(a[1]),v=new Date(a[0]);return!!(i&&v.getTime()<=i.getTime()&&i.getTime()<h.getTime())};return(t,e)=>{const a=K("SshPre");return w(),V(q,{title:t.$t("table.title"),class:"demo data-table"},{toolbar:u(()=>[r(o(d),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=i=>t.$router.push("/table"))},null,8,["label"])]),default:u(()=>[e[7]||(e[7]=n()),l("section",null,[l("h2",null,p(t.$t("table.usage.filterableColumn")),1),e[3]||(e[3]=n()),l("div",E,[r(o(g),{"columns-data":f,data:o(R)},null,8,["data"]),e[2]||(e[2]=n()),r(a,{language:"html-vue"},{default:u(()=>e[1]||(e[1]=[n(`
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
        `)])),_:1})])]),e[8]||(e[8]=n()),l("section",null,[l("h2",null,p(t.$t("table.usage.customStaticFilter")),1),e[6]||(e[6]=n()),l("div",O,[r(o(g),{"columns-data":b,data:o(k),"initial-sorting":[{id:"quantity",desc:!0}],paginated:!1,"table-options":{filterFns:{customEqualStringFilter:y,inDateRangeFilter:D}},class:"custom-static-filter-table"},null,8,["data","table-options"]),e[5]||(e[5]=n()),r(a,{language:"html-vue"},{default:u(()=>e[4]||(e[4]=[n(`
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
          import { DatePicker } from "@dzangolab/vue3-form";
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{U as default};
