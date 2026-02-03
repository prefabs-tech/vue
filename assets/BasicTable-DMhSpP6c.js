import{d as O,I as V,j as b,a1 as R,l as g,J as y,b as B,o as h,h as d,e as n,y as t,g as i,t as u,u as o,c as M,a as q,r as E,K as N}from"./index-CcgkNhek.js";import{i as p}from"./PrefabsTechVue3TanstackTable.es-CMugsYiG.js";import{c as v,d as m,f as C}from"./data-gOxi8Wva.js";import{_ as L}from"./TablePage.vue_vue_type_style_index_0_lang-DM8TkMHN.js";import{_ as U}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-3HTF-xmp.js";import"./PrefabsTechVue3Form.es-CviYuyTJ.js";const j={class:"section-content"},z={class:"section-content"},I={class:"section-content"},J={class:"section-content"},Q={class:"section-content"},H={class:"section-content"},W={class:"section-content"},Y={class:"section-content"},G={class:"section-content"},X=["colspan"],Z={class:"section-content"},x={class:"section-content"},_={class:"section-content"},ee={key:0},te={class:"section-content"},ae={class:"section-content"},ne={class:"section-content"},le={class:"section-content"},oe={class:"section-content"},ie={class:"section-content"},re={class:"section-content"},se={class:"section-content"},de={name:"SortableTable"},ye=O({...de,setup(ue){const{t:a}=V(),D=[{accessorKey:"email",align:"left",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.search"),header:"Email"},{accessorKey:"name",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.search"),header:"Full name"},{accessorKey:"age",align:"right",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${a("table.placeholder.min")},${a("table.placeholder.max")}`,header:"Age",meta:{filterVariant:"range"}},{accessorKey:"city",align:"center",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.city"),header:"City",meta:{filterVariant:"multiselect",filterOptions:v}}],c=[{accessorKey:"email",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.search"),header:"Email"},{accessorKey:"name",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.search"),header:"Full name"},{align:"right",accessorKey:"age",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${a("table.placeholder.min")},${a("table.placeholder.max")}`,header:"Age",meta:{filterVariant:"range"}},{accessorKey:"city",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.city"),header:"City",meta:{filterVariant:"multiselect",filterOptions:v}}],f=E(!1),T=c.map(l=>({...l,enableSorting:!0})),S=["right","top","bottom","left"],$=[...c,{accessorKey:"disabled",align:"center",cell:({row:l})=>{var e,s;return b(R,{label:(e=l.original)!=null&&e.disabled?a("table.label.disabled"):a("table.label.enabled"),severity:(s=l.original)!=null&&s.disabled?"danger":"success"})},enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.status"),header:"Status",meta:{filterVariant:"select",filterOptions:[{label:a("table.label.enabled"),value:!1},{label:a("table.label.disabled"),value:!0}]}}],w=c.map((l,e)=>({...l,tooltip:!0,tooltipOptions:{position:S[e]}})),A=[{accessorKey:"description",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.search"),header:"Description"},{accessorKey:"quantity",dataType:"number",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${a("table.placeholder.min")},${a("table.placeholder.max")}`,header:()=>"Quantity",meta:{filterVariant:"range"}},{accessorKey:"amount",dataType:"currency",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${a("table.placeholder.min")},${a("table.placeholder.max")}`,header:"Amount",meta:{filterVariant:"range"}},{accessorKey:"date",dataType:"date",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.dateRange"),header:"Date",meta:{filterVariant:"dateRange"}},{id:"action",cell:()=>b(g,{iconLeft:"pi pi-eye",variant:"textOnly",rounded:!0}),dataType:"other",header:()=>b("i",{class:"pi pi-cog"})}],k=[{description:a("table.documentation.eventDescription.actionSelect"),name:"action:select",payload:"{ action: string; data: object }"},{description:a("table.documentation.eventDescription.changeRowSelection"),name:"change:rowSelection",payload:"selectedRows: Array"},{description:a("table.documentation.eventDescription.updateRequest"),name:"update:request",payload:"requestJSON: TRequestJSON"}],F=[{accessorKey:"description",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.search"),header:"Description"},{accessorKey:"quantity",dataType:"number",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${a("table.placeholder.min")},${a("table.placeholder.max")}`,header:()=>"Quantity",meta:{filterVariant:"range"},numberOptions:{locale:"en-IN"}},{accessorKey:"amount",dataType:"currency",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${a("table.placeholder.min")},${a("table.placeholder.max")}`,header:"Amount",meta:{filterVariant:"range"},numberOptions:{formatOptions:{currency:"EUR"},locale:"en-US"}},{accessorKey:"date",dataType:"date",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.dateRange"),header:"Date",meta:{filterVariant:"dateRange"}},{accessorKey:"datetime",enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:a("table.placeholder.dateRange"),header:"Datetime",dataType:"datetime",meta:{filterVariant:"dateRange"}},{id:"action",cell:()=>b(g,{iconLeft:"pi pi-eye",variant:"textOnly",rounded:!0}),dataType:"other",header:()=>b("i",{class:"pi pi-cog"})}],P=[{default:"auto",description:a("table.documentation.propsDescription.actionsMode"),prop:"actionsMode",type:"auto | buttons | dropdown"},{default:"1",description:a("table.documentation.propsDescription.autoModeCount"),prop:"autoModeCount",type:"Number"},{default:"[]",description:a("table.documentation.propsDescription.dataActionMenu"),prop:"dataActionMenu",type:"Array<DataActionsMenuItem>"},{default:"-",description:a("table.documentation.propsDescription.columnActionButtonLabel"),prop:"columnActionButtonLabel",type:"String"},{default:"[]",description:a("table.documentation.propsDescription.columnsData"),prop:"columnsData",type:"Array<ColumnDef>"},{default:"{}",description:a("table.documentation.propsDescription.customFormatters"),prop:"customFormatters",type:"Record<string, Function>"},{default:"[]",description:a("table.documentation.propsDescription.data"),prop:"data",type:"Array"},{default:"true",description:a("table.documentation.propsDescription.displayActions"),prop:"displayActions",type:"Boolean | Function"},{default:"-",description:a("table.documentation.propsDescription.emptyTableMessage"),prop:"emptyTableMessage",type:"String"},{default:"false",description:a("table.documentation.propsDescription.enableRowSelection"),prop:"enableRowSelection",type:"Boolean"},{default:"false",description:a("table.documentation.propsDescription.enableSortingRemoval"),prop:"enableSortingRemoval",type:"Boolean"},{default:"false",description:a("table.documentation.propsDescription.highlightActiveHeaderColumn"),prop:"highlightActiveHeaderColumn",type:"Boolean"},{default:"-",description:a("table.documentation.propsDescription.id"),prop:"id",type:"String"},{default:"[]",description:a("table.documentation.propsDescription.initialFilters"),prop:"initialFilters",type:"ColumnFiltersState"},{default:"[]",description:a("table.documentation.propsDescription.initialSorting"),prop:"initialSorting",type:"SortingState"},{default:"-",description:a("table.documentation.propsDescription.inputDebounceTime"),prop:"inputDebounceTime",type:"Number"},{default:"false",description:a("table.documentation.propsDescription.isLoading"),prop:"isLoading",type:"Boolean"},{default:"false",description:a("table.documentation.propsDescription.isServerTable"),prop:"isServerTable",type:"Boolean"},{default:"-",description:a("table.documentation.propsDescription.locale"),prop:"locale",type:"String"},{default:"true",description:a("table.documentation.propsDescription.paginated"),prop:"paginated",type:"Boolean"},{default:"{}",description:a("table.documentation.propsDescription.paginationOptions"),prop:"paginationOptions",type:"Object"},{default:"true",description:a("table.documentation.propsDescription.persistState"),prop:"persistState",type:"Boolean"},{default:"localStorage",description:a("table.documentation.propsDescription.persistStateStorage"),prop:"persistStateStorage",type:"localStorage | sessionStorage"},{default:"-",description:a("table.documentation.propsDescription.resetButtonLabel"),prop:"resetButtonLabel",type:"String"},{default:"10",description:a("table.documentation.propsDescription.rowPerPage"),prop:"rowPerPage",type:"Number"},{default:"[10, 20, 30]",description:a("table.documentation.propsDescription.rowPerPageOptions"),prop:"rowPerPageOptions",type:"number[]"},{default:"false",description:a("table.documentation.propsDescription.showColumnAction"),prop:"showColumnAction",type:"Boolean"},{default:"false",description:a("table.documentation.propsDescription.showResetButton"),prop:"showResetButton",type:"Boolean"},{default:"{}",description:a("table.documentation.propsDescription.tableOptions"),prop:"tableOptions",type:"Object"},{default:"-",description:a("table.documentation.propsDescription.titleInfo"),prop:"titleInfo",type:"{ text: string; align?: string }"},{default:"0",description:a("table.documentation.propsDescription.totalRecords"),prop:"totalRecords",type:"Number"},{default:"[]",description:a("table.documentation.propsDescription.visibleColumns"),prop:"visibleColumns",type:"string[]"}],K=[{description:a("table.documentation.slotDescription.toolbar"),name:"toolbar"},{description:a("table.documentation.slotDescription.footer"),name:"footer"},{description:a("table.documentation.slotDescription.pagination"),name:"pagination"}];return(l,e)=>{const s=y("SshPre");return h(),B(L,{subtitle:l.$t("table.subtitle"),title:l.$t("table.title"),class:"demo data-table"},{default:d(()=>[n("section",null,[n("h2",null,u(l.$t("table.usage.basic")),1),e[8]||(e[8]=t()),n("div",j,[i(o(p),{id:"basic","columns-data":c,data:o(m).slice(0,15),paginated:!1},null,8,["data"]),e[7]||(e[7]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[6]||(e[6]=[t(`
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
        `,-1)])]),_:1})])]),e[69]||(e[69]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.pagination")),1),e[11]||(e[11]=t()),n("div",z,[i(o(p),{id:"pagination","columns-data":c,data:o(m)},null,8,["data"]),e[10]||(e[10]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[9]||(e[9]=[t(`
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
        `,-1)])]),_:1})])]),e[70]||(e[70]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.sortable")),1),e[14]||(e[14]=t()),n("div",I,[i(o(p),{id:"sortable","columns-data":o(T),data:o(m),"initial-sorting":[{id:"email",desc:!1}],"show-reset-button":""},null,8,["columns-data","data"]),e[13]||(e[13]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[12]||(e[12]=[t(`
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
        `,-1)])]),_:1})])]),e[71]||(e[71]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.rowSelection")),1),e[17]||(e[17]=t()),n("div",J,[i(o(p),{id:"row-selection","columns-data":c,data:o(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["data"]),e[16]||(e[16]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[15]||(e[15]=[t(`
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
        `,-1)])]),_:1})])]),e[72]||(e[72]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.tooltip")),1),e[20]||(e[20]=t()),n("div",Q,[i(o(p),{id:"tooltip","columns-data":o(w),data:o(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["columns-data","data"]),e[19]||(e[19]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[18]||(e[18]=[t(`
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
          `,-1)])]),_:1})])]),e[73]||(e[73]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.columnAlignment")),1),e[23]||(e[23]=t()),n("div",H,[i(o(p),{id:"alignment","columns-data":D,data:o(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"enable-row-selection":""},null,8,["data"]),e[22]||(e[22]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[21]||(e[21]=[t(`
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
        `,-1)])]),_:1})])]),e[74]||(e[74]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.columnAction")),1),e[26]||(e[26]=t()),n("div",W,[i(o(p),{id:"column-action","columns-data":c,data:o(m).slice(0,5),"initial-sorting":[{id:"email",desc:!1}],"show-column-action":""},null,8,["data"]),e[25]||(e[25]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[24]||(e[24]=[t(`
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
        `,-1)])]),_:1})])]),e[75]||(e[75]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.title")),1),e[29]||(e[29]=t()),n("div",Y,[i(o(p),{id:"title","columns-data":c,data:o(m).slice(0,5),"title-info":{text:l.$t("table.label.users"),align:"left"}},null,8,["data","title-info"]),e[28]||(e[28]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[27]||(e[27]=[t(`
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
        `,-1)])]),_:1})])]),e[76]||(e[76]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.footer")),1),e[32]||(e[32]=t()),n("div",G,[i(o(p),{id:"footer","columns-data":c,data:o(m)},{footer:d(()=>[n("tr",null,[n("td",{colspan:c.length},u(`${l.$t("table.label.totalRecords")}: ${o(m).length??"0"}`),9,X)])]),_:1},8,["data"]),e[31]||(e[31]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[30]||(e[30]=[t(`
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
        `,-1)])]),_:1})])]),e[77]||(e[77]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.customVerticalBorder")),1),e[35]||(e[35]=t()),n("div",Z,[i(o(p),{id:"vertical-border","column-action-button-label":l.$t("table.label.order"),"columns-data":c,data:o(m),"initial-sorting":[{id:"email",desc:!1}],"visible-columns":["email","name","age","city"],class:"vertical","show-column-action":""},null,8,["column-action-button-label","data"]),e[34]||(e[34]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[33]||(e[33]=[t(`
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
        `,-1)])]),_:1})])]),e[78]||(e[78]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.customHorizontalBorder")),1),e[38]||(e[38]=t()),n("div",x,[i(o(p),{id:"horizontal-border","column-action-button-label":l.$t("table.label.order"),"columns-data":c,data:o(m),"initial-sorting":[{id:"email",desc:!1}],"visible-columns":["email","name","age","city"],class:"horizontal","show-column-action":""},null,8,["column-action-button-label","data"]),e[37]||(e[37]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[36]||(e[36]=[t(`
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
        `,-1)])]),_:1})])]),e[79]||(e[79]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.customToolbar")),1),e[42]||(e[42]=t()),n("div",_,[i(o(p),{id:"custom-toolbar","columns-data":c,data:o(m).slice(0,5)},{toolbar:d(()=>[f.value?(h(),M("span",ee,u(o(N)(Date())),1)):q("",!0),e[39]||(e[39]=t()),i(o(g),{label:l.$t("table.label.clickMe"),onClick:e[0]||(e[0]=r=>f.value=!f.value)},null,8,["label"])]),_:1},8,["data"]),e[41]||(e[41]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[40]||(e[40]=[t(`
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
        `,-1)])]),_:1})])]),e[80]||(e[80]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.singleAction")),1),e[45]||(e[45]=t()),n("div",te,[i(o(p),{id:"single-action","columns-data":c,data:o(m).slice(10,15),"data-action-menu":[{icon:"pi pi-eye",key:"show"}],"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"actions-mode":"buttons","onAction:select":e[1]||(e[1]=r=>{})},null,8,["data"]),e[44]||(e[44]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[43]||(e[43]=[t(`
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
              @action:select="(data) => {}"
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
        `,-1)])]),_:1})])]),e[81]||(e[81]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.multipleButtonAction")),1),e[48]||(e[48]=t()),n("div",ae,[i(o(p),{id:"multiple-button-action","columns-data":c,data:o(m).slice(10,15),"data-action-menu":[{icon:"pi pi-eye",key:"show"},{icon:"pi pi-pencil",key:"edit"},{icon:"pi pi-share-alt",key:"share"},{confirmationOptions:{header:l.$t("table.label.confirmation"),body:l.$t("table.label.deleteRecordMessage")},icon:"pi pi-trash",key:"delete",requireConfirmationModal:!0,severity:"danger"}],"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"actions-mode":"buttons","onAction:select":e[2]||(e[2]=r=>{})},null,8,["data","data-action-menu"]),e[47]||(e[47]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[46]||(e[46]=[t(`
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
              @action:select="(data) => {}"
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
        `,-1)])]),_:1})])]),e[82]||(e[82]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.builtinActions")),1),e[51]||(e[51]=t()),n("div",ne,[i(o(p),{id:"builtin-actions","columns-data":c,data:o(m).slice(10,15),"data-action-menu":[{label:l.$t("table.label.view")},{disabled:!0,label:l.$t("table.label.edit")},{disabled:r=>r.id!==11,label:l.$t("table.label.share")},{confirmationOptions:r=>({body:l.$t("table.label.deleteUserMessage",{user:r==null?void 0:r.name}),header:l.$t("table.label.confirmation")}),label:l.$t("table.label.delete"),requireConfirmationModal:!0}],"display-actions":r=>r.id!==12,"initial-sorting":[{id:"email",desc:!1}],paginated:!1,"onAction:select":e[3]||(e[3]=r=>{})},null,8,["data","data-action-menu","display-actions"]),e[50]||(e[50]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[49]||(e[49]=[t(`
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
              :display-actions="(data) => data.id !== 12"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              @action:select="(data) => {}"
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
        `,-1)])]),_:1})])]),e[83]||(e[83]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.filteredActions")),1),e[54]||(e[54]=t()),n("div",le,[i(o(p),{id:"filtered-actions","columns-data":c,data:o(m).slice(10,15),"data-action-menu":[{display:r=>r.id!==12,label:l.$t("table.label.view")},{disabled:!0,display:r=>r.id!==12,label:l.$t("table.label.edit")},{disabled:r=>r.id!==11,display:r=>r.id!==12,label:l.$t("table.label.share")},{confirmationOptions:r=>({body:b(y("i18n-t"),{keypath:"table.label.deleteUserMessage",tag:"p"},{user:b("strong",(r==null?void 0:r.name)||"")}),header:l.$t("table.label.confirmation")}),label:l.$t("table.label.delete"),requireConfirmationModal:!0}],"initial-sorting":[{id:"email",desc:!1}],"actions-mode":"dropdown","onAction:select":e[4]||(e[4]=r=>{})},null,8,["data","data-action-menu"]),e[53]||(e[53]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[52]||(e[52]=[t(`
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
              @action:select="(rowData) => {}"
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
        `,-1)])]),_:1})])]),e[84]||(e[84]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.singleActionMenu")),1),e[57]||(e[57]=t()),n("div",oe,[i(o(p),{id:"single-action-menu","columns-data":c,data:o(m).slice(10,15),"data-action-menu":[{label:l.$t("table.label.view")}],"initial-sorting":[{id:"email",desc:!1}],"actions-mode":"dropdown","onAction:select":e[5]||(e[5]=r=>{})},null,8,["data","data-action-menu"]),e[56]||(e[56]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[55]||(e[55]=[t(`
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
              @action:select="(rowData) => {}"
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
        `,-1)])]),_:1})])]),e[85]||(e[85]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.cellDataFormatting")),1),e[60]||(e[60]=t()),n("div",ie,[i(o(p),{id:"cell-data-formatting","columns-data":F,data:o(C),"initial-sorting":[{id:"quantity",desc:!0}],paginated:!1},null,8,["data"]),e[59]||(e[59]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[58]||(e[58]=[t(`
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
        `,-1)])]),_:1})])]),e[86]||(e[86]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.customCellDataFormatting")),1),e[63]||(e[63]=t()),n("div",re,[i(o(p),{id:"custom-cell-data-formatting","columns-data":A,"custom-formatters":{currency:r=>`$${r}`,number:r=>`~${r}`},data:o(C),"initial-sorting":[{id:"quantity",desc:!0}],paginated:!1},null,8,["custom-formatters","data"]),e[62]||(e[62]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[61]||(e[61]=[t(`
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
        `,-1)])]),_:1})])]),e[87]||(e[87]=t()),n("section",null,[n("h2",null,u(l.$t("table.usage.centeredAlignedTable")),1),e[66]||(e[66]=t()),n("div",se,[i(o(p),{id:"center-aligned-content","columns-data":$,data:o(m).slice(10,15),"initial-sorting":[{id:"email",desc:!1}],class:"center-aligned-content-table"},null,8,["data"]),e[65]||(e[65]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[64]||(e[64]=[t(`
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
        `,-1)])]),_:1})])]),e[88]||(e[88]=t()),i(U,{"events-data":k,"props-data":P,"props-table-title":l.$t("common.properties",{value:"TableProperties"}),"slots-data":K},null,8,["props-table-title"]),e[89]||(e[89]=t()),n("section",null,[n("h2",null,u(l.$t("common.type")),1),e[68]||(e[68]=t()),i(s,{language:"html-vue"},{default:d(()=>[...e[67]||(e[67]=[t(`
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
      `,-1)])]),_:1})])]),_:1},8,["subtitle","title"])}}});export{ye as default};
