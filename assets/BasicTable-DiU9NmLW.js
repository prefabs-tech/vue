import{d as M,u as q,E as c,C as E,l as y,r as v,o as D,h as N,w as r,a as n,t as s,b as t,e as i,f as o,c as L,H as U,g as j,j as z}from"./index-DLqblxUV.js";import{i as u}from"./PrefabsTechVue3TanstackTable.es-mCRN2yKV.js";import{c as C,d as m,f as T}from"./data-Ds_gM0N4.js";import{_ as I}from"./TablePage.vue_vue_type_style_index_0_lang-dCAbfpgE.js";import{_ as J}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-Cbg9pBb_.js";const H={class:"section-content"},Q={class:"section-content"},W={class:"section-content"},Y={class:"section-content"},G={class:"section-content"},X={class:"section-content"},Z={class:"section-content"},x={class:"section-content"},_={class:"section-content"},ee=["colspan"],te={class:"section-content"},ae={class:"section-content"},ne={class:"section-content"},le={key:0},oe={class:"section-content"},ie={class:"section-content"},re={class:"section-content"},se={class:"section-content"},de={class:"section-content"},ue={class:"section-content"},me={class:"section-content"},pe={class:"section-content"},ce={name:"TableDemo"},De=M({...ce,setup(be){const{t:a}=q(),w=[{accessorKey:"email",align:"left",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.search"),header:"Email"},{accessorKey:"name",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.search"),header:"Full name"},{accessorKey:"age",align:"right",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${a("table.placeholder.min")},${a("table.placeholder.max")}`,header:"Age",meta:{filterVariant:"range"}},{accessorKey:"city",align:"center",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.city"),header:"City",meta:{filterVariant:"multiselect",filterOptions:C}}],p=[{accessorKey:"email",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.search"),header:"Email"},{accessorKey:"name",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.search"),header:"Full name"},{align:"right",accessorKey:"age",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${a("table.placeholder.min")},${a("table.placeholder.max")}`,header:"Age",meta:{filterVariant:"range"}},{accessorKey:"city",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.city"),header:"City",meta:{filterVariant:"multiselect",filterOptions:C}}],g=z(!1),S=p.map(l=>({...l,enableSorting:!0})),$=["right","top","bottom","left"],A=[...p,{accessorKey:"disabled",align:"center",cell:({row:l})=>c(E,{label:l.original?.disabled?a("table.label.disabled"):a("table.label.enabled"),severity:l.original?.disabled?"danger":"success"}),enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.status"),header:"Status",meta:{filterVariant:"select",filterOptions:[{label:a("table.label.enabled"),value:!1},{label:a("table.label.disabled"),value:!0}]}}],k=p.map((l,e)=>({...l,tooltip:!0,tooltipOptions:{position:$[e]}})),F=[{accessorKey:"description",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.search"),header:"Description"},{accessorKey:"quantity",dataType:"number",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${a("table.placeholder.min")},${a("table.placeholder.max")}`,header:()=>"Quantity",meta:{filterVariant:"range"}},{accessorKey:"amount",dataType:"currency",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${a("table.placeholder.min")},${a("table.placeholder.max")}`,header:"Amount",meta:{filterVariant:"range"}},{accessorKey:"date",dataType:"date",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.dateRange"),header:"Date",meta:{filterVariant:"dateRange"}},{id:"action",cell:()=>c(y,{iconLeft:"pi pi-eye",variant:"textOnly",rounded:!0}),dataType:"other",header:()=>c("i",{class:"pi pi-cog"})}],P=[{description:a("table.documentation.eventDescription.actionSelect"),name:"action:select",payload:"{ action: string; data: object }"},{description:a("table.documentation.eventDescription.changeRowSelection"),name:"change:rowSelection",payload:"selectedRows: Array"},{description:a("table.documentation.eventDescription.updateRequest"),name:"update:request",payload:"requestJSON: TRequestJSON"}],K=[{accessorKey:"description",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.search"),header:"Description"},{accessorKey:"quantity",dataType:"number",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${a("table.placeholder.min")},${a("table.placeholder.max")}`,header:()=>"Quantity",meta:{filterVariant:"range"},numberOptions:{locale:"en-IN"}},{accessorKey:"amount",dataType:"currency",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${a("table.placeholder.min")},${a("table.placeholder.max")}`,header:"Amount",meta:{filterVariant:"range"},numberOptions:{formatOptions:{currency:"EUR"},locale:"en-US"}},{accessorKey:"date",dataType:"date",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.dateRange"),header:"Date",meta:{filterVariant:"dateRange"}},{accessorKey:"datetime",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.dateRange"),header:"Datetime",dataType:"datetime",meta:{filterVariant:"dateRange"}},{id:"action",cell:()=>c(y,{iconLeft:"pi pi-eye",variant:"textOnly",rounded:!0}),dataType:"other",header:()=>c("i",{class:"pi pi-cog"})}],O=[{default:"auto",description:a("table.documentation.propsDescription.actionsMode"),prop:"actionsMode",type:"auto | buttons | dropdown"},{default:"1",description:a("table.documentation.propsDescription.autoModeCount"),prop:"autoModeCount",type:"Number"},{default:"[]",description:a("table.documentation.propsDescription.dataActionMenu"),prop:"dataActionMenu",type:"Array<DataActionsMenuItem>"},{default:"-",description:a("table.documentation.propsDescription.columnActionButtonLabel"),prop:"columnActionButtonLabel",type:"String"},{default:"[]",description:a("table.documentation.propsDescription.columnsData"),prop:"columnsData",type:"Array<ColumnDef>"},{default:"{}",description:a("table.documentation.propsDescription.customFormatters"),prop:"customFormatters",type:"Record<string, Function>"},{default:"[]",description:a("table.documentation.propsDescription.data"),prop:"data",type:"Array"},{default:"true",description:a("table.documentation.propsDescription.displayActions"),prop:"displayActions",type:"Boolean | Function"},{default:"-",description:a("table.documentation.propsDescription.emptyTableMessage"),prop:"emptyTableMessage",type:"String"},{default:"false",description:a("table.documentation.propsDescription.enableRowSelection"),prop:"enableRowSelection",type:"Boolean"},{default:"false",description:a("table.documentation.propsDescription.enableSortingRemoval"),prop:"enableSortingRemoval",type:"Boolean"},{default:"false",description:a("table.documentation.propsDescription.highlightActiveHeaderColumn"),prop:"highlightActiveHeaderColumn",type:"Boolean"},{default:"-",description:a("table.documentation.propsDescription.id"),prop:"id",type:"String"},{default:"[]",description:a("table.documentation.propsDescription.initialFilters"),prop:"initialFilters",type:"ColumnFiltersState"},{default:"[]",description:a("table.documentation.propsDescription.initialSorting"),prop:"initialSorting",type:"SortingState"},{default:"-",description:a("table.documentation.propsDescription.inputDebounceTime"),prop:"inputDebounceTime",type:"Number"},{default:"false",description:a("table.documentation.propsDescription.isLoading"),prop:"isLoading",type:"Boolean"},{default:"false",description:a("table.documentation.propsDescription.isServerTable"),prop:"isServerTable",type:"Boolean"},{default:"-",description:a("table.documentation.propsDescription.locale"),prop:"locale",type:"String"},{default:"true",description:a("table.documentation.propsDescription.paginated"),prop:"paginated",type:"Boolean"},{default:"{}",description:a("table.documentation.propsDescription.paginationOptions"),prop:"paginationOptions",type:"Object"},{default:"true",description:a("table.documentation.propsDescription.persistState"),prop:"persistState",type:"Boolean"},{default:"localStorage",description:a("table.documentation.propsDescription.persistStateStorage"),prop:"persistStateStorage",type:"localStorage | sessionStorage"},{default:"-",description:a("table.documentation.propsDescription.resetButtonLabel"),prop:"resetButtonLabel",type:"String"},{default:"10",description:a("table.documentation.propsDescription.rowPerPage"),prop:"rowPerPage",type:"Number"},{default:"[10, 20, 30]",description:a("table.documentation.propsDescription.rowPerPageOptions"),prop:"rowPerPageOptions",type:"number[]"},{default:"false",description:a("table.documentation.propsDescription.showColumnAction"),prop:"showColumnAction",type:"Boolean"},{default:"false",description:a("table.documentation.propsDescription.showResetButton"),prop:"showResetButton",type:"Boolean"},{default:"{}",description:a("table.documentation.propsDescription.tableOptions"),prop:"tableOptions",type:"Object"},{default:"-",description:a("table.documentation.propsDescription.titleInfo"),prop:"titleInfo",type:"{ text: string; align?: string }"},{default:"0",description:a("table.documentation.propsDescription.totalRecords"),prop:"totalRecords",type:"Number"},{default:"[]",description:a("table.documentation.propsDescription.visibleColumns"),prop:"visibleColumns",type:"string[]"}],V=[{description:a("table.documentation.slotDescription.toolbar"),name:"toolbar"},{description:a("table.documentation.slotDescription.footer"),name:"footer"},{description:a("table.documentation.slotDescription.pagination"),name:"pagination"}],R=l=>({body:a("table.label.deleteUserMessage",{user:l?.name}),header:a("table.label.confirmation")}),B=l=>({body:c(v("i18n-t"),{keypath:"table.label.deleteUserMessage",tag:"p"},{user:c("strong",l?.name||"")}),header:a("table.label.confirmation")}),h=l=>l.id!==11,b=l=>l.id!==12;return(l,e)=>{const d=v("SshPre");return D(),N(I,{subtitle:l.$t("table.subtitle.base"),title:l.$t("table.title"),class:"demo data-table"},{default:r(()=>[n("section",null,[n("h2",null,s(l.$t("table.usage.basic")),1),e[3]||(e[3]=t()),n("div",H,[i(o(u),{id:"basic","columns-data":p,data:o(m).slice(0,15),paginated:!1},null,8,["data"]),e[2]||(e[2]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[1]||(e[1]=[t(`
          <template>
            <Table
              id="basic"
              :columns-data="columns"
              :data="data"
              :paginated="false"
            />
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
              filterPlaceholder: t("table.placeholder.search"),
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
        `,-1)])]),_:1})])]),e[64]||(e[64]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.pagination")),1),e[6]||(e[6]=t()),n("div",Q,[i(o(u),{id:"pagination","columns-data":p,data:o(m)},null,8,["data"]),e[5]||(e[5]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[4]||(e[4]=[t(`
          <template>
            <Table id="pagination" :columns-data="columns" :data="data" />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            {
              accessorKey: "email",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
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
        `,-1)])]),_:1})])]),e[65]||(e[65]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.sortable")),1),e[9]||(e[9]=t()),n("div",W,[i(o(u),{id:"sortable","columns-data":o(S),data:o(m),"initial-sorting":[{id:"email",desc:!1}],"show-reset-button":""},null,8,["columns-data","data"]),e[8]||(e[8]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[7]||(e[7]=[t(`
          <template>
            <Table
              id="sortable"
              :columns-data="sortableColumns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              show-reset-button
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]

          const sortableColumns = columns.map((column) => ({
            ...columns,
            enableSorting: true,
          }));
          <\/script>
        `,-1)])]),_:1})])]),e[66]||(e[66]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.rowSelection")),1),e[12]||(e[12]=t()),n("div",Y,[i(o(u),{id:"row-selection","columns-data":p,data:o(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["data"]),e[11]||(e[11]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[10]||(e[10]=[t(`
          <template>
            <Table
              id="row-selection"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              enable-row-selection
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `,-1)])]),_:1})])]),e[67]||(e[67]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.tooltip")),1),e[15]||(e[15]=t()),n("div",G,[i(o(u),{id:"tooltip","columns-data":o(k),data:o(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["columns-data","data"]),e[14]||(e[14]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[13]||(e[13]=[t(`
            <template>
              <Table
                id="tooltip"
                :columns-data="columnsWithTooltip"
                :data="data"
                :initial-sorting="[{ id: 'email', desc: false }]"
                enable-row-selection
              />
            </template>
      
            <script setup lang="ts">
            import { Table } from "@prefabs.tech/vue3-tanstack-table";
      
            import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
      
            const columns: Array<TableColumnDefinition> = [
              ...
            ];
    
            const data = [
              ...
            ];
  
            const tooltipPositions = ["right", "top", "bottom", "left"];
  
            const columnsWithTooltip = columns.map((column, index) => ({
              ...column,
              tooltip: true,
              tooltipOptions: {
                position: tooltipPositions[index],
              },
            }));
            <\/script>
          `,-1)])]),_:1})])]),e[68]||(e[68]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.columnAlignment")),1),e[18]||(e[18]=t()),n("div",X,[i(o(u),{id:"alignment","columns-data":w,data:o(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["data"]),e[17]||(e[17]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[16]||(e[16]=[t(`
          <template>
            <Table
              id="alignment"
              :columns-data="alignmentColumns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              enable-row-selection
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const alignmentColumns = [
            {
              accessorKey: "email",
              align: "left",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
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
              align: "center",
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
            ...
          ]
          <\/script>
        `,-1)])]),_:1})])]),e[69]||(e[69]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.columnAction")),1),e[21]||(e[21]=t()),n("div",Z,[i(o(u),{id:"column-action","columns-data":p,data:o(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"show-column-action":""},null,8,["data"]),e[20]||(e[20]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[19]||(e[19]=[t(`
          <template>
            <Table
              id="column-action"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              show-column-action
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `,-1)])]),_:1})])]),e[70]||(e[70]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.title")),1),e[24]||(e[24]=t()),n("div",x,[i(o(u),{id:"title","columns-data":p,data:o(m).slice(0,5),"title-info":{text:l.$t("table.label.users"),align:"left"}},null,8,["data","title-info"]),e[23]||(e[23]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[22]||(e[22]=[t(`
          <template>
            <Table 
              id="title"
              :columns-data="columns"
              :data="data"
              :title-info="{ text: 'Users', align: 'left' }"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `,-1)])]),_:1})])]),e[71]||(e[71]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.footer")),1),e[27]||(e[27]=t()),n("div",_,[i(o(u),{id:"footer","columns-data":p,data:o(m)},{footer:r(()=>[n("tr",null,[n("td",{colspan:p.length},s(`${l.$t("table.label.totalRecords")}: ${o(m).length??"0"}`),9,ee)])]),_:1},8,["data"]),e[26]||(e[26]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[25]||(e[25]=[t(`
          <template>
            <Table id="footer" :columns-data="columns" :data="data">
              <template #footer>
                <tr>
                  <td :colspan="columns.length">
                    {{ \`Total records: \${data.length ?? "0"}\` }}
                  </td>
                </tr>
              </template>
            </Table>
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `,-1)])]),_:1})])]),e[72]||(e[72]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.customVerticalBorder")),1),e[30]||(e[30]=t()),n("div",te,[i(o(u),{id:"vertical-border","column-action-button-label":l.$t("table.label.order"),"columns-data":p,data:o(m),"initial-sorting":[{id:"email",desc:!1}],"visible-columns":["email","name","age","city"],class:"vertical","show-column-action":""},null,8,["column-action-button-label","data"]),e[29]||(e[29]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[28]||(e[28]=[t(`
          <template>
            <Table
              id="vertical-border"
              :column-action-button-label="$t('table.label.columnAction')"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :visible-columns="['email', 'name', 'age', 'city']"
              class="vertical"
              show-column-action
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>

          <style lang="css">
          .table-container.vertical .table-wrapper > table > tbody > tr,
          .table-container.vertical .table-wrapper > table > tbody > tr > td,
          .table-container.vertical .table-wrapper > table > thead tr > th {
            border: none;
          }

          .table-container.vertical .table-wrapper > table > tbody > tr > td,
          .table-container.vertical .table-wrapper > table > thead tr > th {
            border-left: var(--table-border);
            border-right: var(--table-border);
          }
          </style>
        `,-1)])]),_:1})])]),e[73]||(e[73]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.customHorizontalBorder")),1),e[33]||(e[33]=t()),n("div",ae,[i(o(u),{id:"horizontal-border","column-action-button-label":l.$t("table.label.order"),"columns-data":p,data:o(m),"initial-sorting":[{id:"email",desc:!1}],"visible-columns":["email","name","age","city"],class:"horizontal","show-column-action":""},null,8,["column-action-button-label","data"]),e[32]||(e[32]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[31]||(e[31]=[t(`
          <template>
            <Table
              id="horizontal-border"
              :column-action-button-label="$t('table.label.columnAction')"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :visible-columns="['email', 'name', 'age', 'city']"
              class="vertical"
              show-column-action
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>

          <style lang="css">
          .table-container.horizontal .table-wrapper > table > tbody > tr > td,
          .table-container.horizontal .table-wrapper > table > thead tr > th {
            border: none;
          }
          </style>
        `,-1)])]),_:1})])]),e[74]||(e[74]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.customToolbar")),1),e[37]||(e[37]=t()),n("div",ne,[i(o(u),{id:"custom-toolbar","columns-data":p,data:o(m).slice(0,5)},{toolbar:r(()=>[g.value?(D(),L("span",le,s(o(U)(Date())),1)):j("",!0),e[34]||(e[34]=t()),i(o(y),{label:l.$t("table.label.clickMe"),onClick:e[0]||(e[0]=f=>g.value=!g.value)},null,8,["label"])]),_:1},8,["data"]),e[36]||(e[36]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[35]||(e[35]=[t(`
          <template>
            <Table id="custom-toolbar" :columns-data="columns" :data="data">
              <template #toolbar>
                <span v-if="showDate">
                  {{ formatDateTime(Date()) }}
                </span>
                <ButtonElement 
                  label="Add record"
                  @click="showDate = !showDate"
                />
              </template>
            </Table>
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
          import { ButtonElement, formatDateTime } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ];

          const showDate = ref<boolean>(false);
          <\/script>
        `,-1)])]),_:1})])]),e[75]||(e[75]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.singleAction")),1),e[40]||(e[40]=t()),n("div",oe,[i(o(u),{id:"single-action","columns-data":p,data:o(m).slice(10,15),"data-action-menu":[{icon:"pi pi-eye",key:"show"}],"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"actions-mode":"buttons","onAction:select":()=>{}},null,8,["data"]),e[39]||(e[39]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[38]||(e[38]=[t(`
          <template>
            <Table
              id="single-action"
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  icon: 'pi pi-eye',
                  key: 'show',
                },
              ]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              actions-mode="buttons"
              @action:select="() => {}"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `,-1)])]),_:1})])]),e[76]||(e[76]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.multipleButtonAction")),1),e[43]||(e[43]=t()),n("div",ie,[i(o(u),{id:"multiple-button-action","columns-data":p,data:o(m).slice(10,15),"data-action-menu":[{icon:"pi pi-eye",key:"show"},{icon:"pi pi-pencil",key:"edit"},{icon:"pi pi-share-alt",key:"share"},{confirmationOptions:{header:l.$t("table.label.confirmation"),body:l.$t("table.label.deleteRecordMessage")},icon:"pi pi-trash",key:"delete",requireConfirmationModal:!0,severity:"danger"}],"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"actions-mode":"buttons","onAction:select":()=>{}},null,8,["data","data-action-menu"]),e[42]||(e[42]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[41]||(e[41]=[t(`
          <template>
            <Table
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  icon: 'pi pi-eye',
                  key: 'show',
                },
                {
                  icon: 'pi pi-pencil',
                  key: 'edit',
                },
                {
                  icon: 'pi pi-share-alt',
                  key: 'share',
                },
                {
                  confirmationOptions: {
                    header: 'Are you sure!',
                    body: 'You are going to delete this data.',
                  },
                  icon: 'pi pi-trash',
                  key: 'delete',
                  requireConfirmationModal: true,
                  severity: 'danger',
                },
              ]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              actions-mode="buttons"
              @action:select="() => {}"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `,-1)])]),_:1})])]),e[77]||(e[77]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.builtinActions")),1),e[46]||(e[46]=t()),n("div",re,[i(o(u),{id:"builtin-actions","columns-data":p,data:o(m).slice(10,15),"data-action-menu":[{label:l.$t("table.label.view")},{disabled:!0,label:l.$t("table.label.edit")},{disabled:h,label:l.$t("table.label.share")},{confirmationOptions:R,label:l.$t("table.label.delete"),requireConfirmationModal:!0}],"display-actions":b,"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:select":()=>{}},null,8,["data","data-action-menu"]),e[45]||(e[45]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[44]||(e[44]=[t(`
          <template>
            <Table
              id="builtin-actions"
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  label: 'View',
                },
                {
                  disabled: true,
                  label: 'Edit',
                },
                {
                  label: 'Share',
                  disabled: (rowData) => rowData.id !== 11,
                },
                {
                  confirmationOptions: (rowData) => {
                    return {
                      body: $t('table.label.deleteUserMessage', {
                        user: rowData?.name,
                      }),
                      header: $t('table.label.confirmation'),
                    };
                  },
                  label: 'Delete',
                  requireConfirmationModal: true,'
                },
              ]"
              :display-actions="shouldDisplayAction"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              @action:select="() => {}"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `,-1)])]),_:1})])]),e[78]||(e[78]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.filteredActions")),1),e[49]||(e[49]=t()),n("div",se,[i(o(u),{id:"filtered-actions","columns-data":p,data:o(m).slice(10,15),"data-action-menu":[{display:b,label:l.$t("table.label.view")},{disabled:!0,display:b,label:l.$t("table.label.edit")},{disabled:h,display:b,label:l.$t("table.label.share")},{confirmationOptions:B,label:l.$t("table.label.delete"),requireConfirmationModal:!0}],"initial-sorting":[{id:"email",desc:!1}],"actions-mode":"dropdown","onAction:select":()=>{}},null,8,["data","data-action-menu"]),e[48]||(e[48]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[47]||(e[47]=[t(`
          <template>
            <Table
              id="filtered-actions"
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  display: (rowData) => rowData.id !== 12,
                  label: 'View',
                },
                {
                  disabled: true,
                  display: (rowData) => rowData.id !== 12,
                  label: 'Edit',
                },
                {
                  disabled: (rowData) => rowData.id !== 11,
                  display: (rowData) => rowData.id !== 12
                  label: 'Share',
                },
                {
                  confirmationOptions: (rowData) => {
                    return {
                      body: h(
                        resolveComponent('i18n-t'),
                        { keypath: 'table.label.deleteUserMessage', tag: 'p' },
                        {
                          user: h('strong', rowData?.name || ''),
                        },
                      ),
                      header: $t('table.label.confirmation'),
                    };
                  },
                  label: 'Delete',
                  requireConfirmationModal: true,'
                },
              ]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              actions-mode="dropdown"
              @action:select="() => {}"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
          import { h, resolveComponent } from "vue";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `,-1)])]),_:1})])]),e[79]||(e[79]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.singleActionMenu")),1),e[52]||(e[52]=t()),n("div",de,[i(o(u),{id:"single-action-menu","columns-data":p,data:o(m).slice(10,15),"data-action-menu":[{label:l.$t("table.label.view")}],"initial-sorting":[{id:"email",desc:!1}],"actions-mode":"dropdown","onAction:select":()=>{}},null,8,["data","data-action-menu"]),e[51]||(e[51]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[50]||(e[50]=[t(`
          <template>
            <Table
              id="single-action-menu"
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  label: 'View',
                },
              ]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              actions-mode="dropdown"
              @action:select="() => {}"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `,-1)])]),_:1})])]),e[80]||(e[80]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.cellDataFormatting")),1),e[55]||(e[55]=t()),n("div",ue,[i(o(u),{id:"cell-data-formatting","columns-data":K,data:o(T),"initial-sorting":[{id:"quantity",desc:!0}],paginated:!1},null,8,["data"]),e[54]||(e[54]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[53]||(e[53]=[t(`
          <template>
            <Table
              id="cell-data-formatting"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'quantity', desc: true }]"
              :paginated="false"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            {
              accessorKey: "description",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
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
              dataType: "date",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.dateRange"),
              header: "Date",
              meta: {
                filterVariant: "dateRange",
              },
            },
            {
              accessorKey: "datetime",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.dateRange"),
              header: "Datetime",
              dataType: "datetime",
              meta: {
                filterVariant: "dateRange",
              },
            },
            {
              id: "action",
              cell: () =>
                h(ButtonElement, {
                  iconLeft: "pi pi-eye",
                  variant: "textOnly",
                  rounded: true,
                }),
              dataType: "other",
              header: () =>
                h("i", {
                  class: "pi pi-cog",
                }),
            },
          ];
  
          const data = [
            ...
          ];
          <\/script>
        `,-1)])]),_:1})])]),e[81]||(e[81]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.customCellDataFormatting")),1),e[58]||(e[58]=t()),n("div",me,[i(o(u),{id:"custom-cell-data-formatting","columns-data":F,"custom-formatters":{currency:f=>`$${f}`,number:f=>`~${f}`},data:o(T),"initial-sorting":[{id:"quantity",desc:!0}],paginated:!1},null,8,["custom-formatters","data"]),e[57]||(e[57]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[56]||(e[56]=[t(`
          <template>
            <Table
              id="custom-cell-data-formatting"
              :columns-data="columns"
              :custom-formatters="{
                currency: (value) => \`$\${value}\`,
                number: (value) => \`~\${value}\`,
              }"
              :data="formatDemoData"
              :initial-sorting="[{ id: 'quantity', desc: true }]"
              :paginated="false"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            {
              accessorKey: "description",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
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
            },
            {
              accessorKey: "date",
              dataType: "date",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.dateRange"),
              header: "Date",
              meta: {
                filterVariant: "dateRange",
              },
            },
            {
              id: "action",
              cell: () =>
                h(ButtonElement, {
                  iconLeft: "pi pi-eye",
                  variant: "textOnly",
                  rounded: true,
                }),
              dataType: "other",
              header: () =>
                h("i", {
                  class: "pi pi-cog",
                }),
            },
          ];
  
          const data = [
            ...
          ];
          <\/script>
        `,-1)])]),_:1})])]),e[82]||(e[82]=t()),n("section",null,[n("h2",null,s(l.$t("table.usage.centeredAlignedTable")),1),e[61]||(e[61]=t()),n("div",pe,[i(o(u),{id:"center-aligned-content","columns-data":A,data:o(m).slice(10,15),"initial-sorting":[{id:"email",desc:!1}],class:"center-aligned-content-table"},null,8,["data"]),e[60]||(e[60]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[59]||(e[59]=[t(`
          <template>
            <Table
              id="center-aligned-content"
              :columns-data="centerAlignedTableColumns"
              :data="data.slice(10, 15)"
              :initial-sorting="[{ id: 'email', desc: false }]"
              class="center-aligned-content-table"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ];

          const centerAlignedTableColumns = [
            ...columns,
            {
              accessorKey: "disabled",
              align: "center",
              cell: ({ row }) => {
                return h(BadgeComponent, {
                  label: row.original?.disabled
                    ? "Disabled"
                    : "Enabled",
                  severity: row.original?.disabled ? "danger" : "success",
                });
              },
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.status"),
              header: "Status",
              meta: {
                filterVariant: "select",
                filterOptions: [
                  {
                    label: "Enabled",
                    value: false,
                  },
                  {
                    label: "Disabled",
                    value: true,
                  },
                ],
              },
            },
          ];
          <\/script>

          <style lang="css">
          .demo-data-tables-page
            .table-wrapper
            > table
            > tbody
            > tr
            > td
            > .cell-name {
            background-color: #ccc;
            width: 300px;
          }

          .table-container.center-aligned-content-table .column-name {
            max-width: 30rem;
            min-width: 30rem;
            width: 30rem;
          }

          .table-container.center-aligned-content-table .column-age {
            max-width: 6rem;
            min-width: 6rem;
            width: 6rem;
          }

          .table-container.center-aligned-content-table .column-city {
            max-width: 8rem;
            min-width: 8rem;
            width: 8rem;
          }
          </style>
        `,-1)])]),_:1})])]),e[83]||(e[83]=t()),i(J,{"events-data":P,"props-data":O,"props-table-title":l.$t("common.properties",{value:"TableProperties"}),"slots-data":V},null,8,["props-table-title"]),e[84]||(e[84]=t()),n("section",null,[n("h2",null,s(l.$t("common.type")),1),e[63]||(e[63]=t()),i(d,{language:"html-vue"},{default:r(()=>[...e[62]||(e[62]=[t(`
        interface ColumnFilter {
            id: string;
            value: unknown;
        }

        interface ColumnSort {
            desc: boolean;
            id: string;
        }

        type ColumnFiltersState = ColumnFilter[];

        type ConfirmationOptions = {
          body?: string | VNode;
          footer?: string | VNode;
          header?: string | VNode;
        };

        type DataActionsMenuItem = {
          class?: string;
          confirmationOptions?: ConfirmationOptions | ((data) => ConfirmationOptions);
          disabled?: boolean | ((data) => boolean);
          display?: boolean | ((data) => boolean);
          key?: string;
          label?: string;
          icon?: string;
          requireConfirmationModal?: boolean;
        };

        type SortingState = ColumnSort[];
      `,-1)])]),_:1})])]),_:1},8,["subtitle","title"])}}});export{De as default};
