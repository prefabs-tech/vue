import{B as e,D as t,E as n,On as r,St as i,_ as a,b as ee,k as o,mt as s,qt as c,tr as l,v as u,vn as d,y as f}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{D as te,o as p,p as m}from"./PrefabsTechVue3UI.es-EJDYzbRH.js";import{T as h}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{t as g}from"./PrefabsTechVue3TanstackTable.es-Dqv6JrPc.js";import{t as ne}from"./ComponentDocumentation-CFBF3GmY.js";import{n as _,r as v,t as y}from"./data-D-L-jgMw.js";import{t as b}from"./TablePage-CBOXTkXx.js";var x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T={class:`section-content`},E={class:`section-content`},D={class:`section-content`},O={class:`section-content`},k={class:`section-content`},A=[`colspan`],j={class:`section-content`},M={class:`section-content`},N={class:`section-content`},P={key:0},F={class:`section-content`},I={class:`section-content`},L={class:`section-content`},R={class:`section-content`},re={class:`section-content`},z={class:`section-content`},B={class:`section-content`},V={class:`section-content`},H=o({name:`TableDemo`,setup(o){let{t:H}=h(),U=[{accessorKey:`email`,align:`left`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:H(`table.placeholder.search`),header:`Email`},{accessorKey:`name`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:H(`table.placeholder.search`),header:`Full name`},{accessorKey:`age`,align:`right`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${H(`table.placeholder.min`)},${H(`table.placeholder.max`)}`,header:`Age`,meta:{filterVariant:`range`}},{accessorKey:`city`,align:`center`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:H(`table.placeholder.city`),header:`City`,meta:{filterOptions:y,filterVariant:`multiselect`}}],W=[{accessorKey:`email`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:H(`table.placeholder.search`),header:`Email`},{accessorKey:`name`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:H(`table.placeholder.search`),header:`Full name`},{accessorKey:`age`,align:`right`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${H(`table.placeholder.min`)},${H(`table.placeholder.max`)}`,header:`Age`,meta:{filterVariant:`range`,rangeFilterMax:100,rangeFilterMin:1}},{accessorKey:`city`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:H(`table.placeholder.city`),header:`City`,meta:{filterOptions:y,filterVariant:`multiselect`}}],G=d(!1),K=W.map(e=>({...e,enableSorting:!0})),q=[`right`,`top`,`bottom`,`left`],J=[...W,{accessorKey:`disabled`,align:`center`,cell:({row:t})=>e(te,{label:t.original?.disabled?H(`table.label.disabled`):H(`table.label.enabled`),severity:t.original?.disabled?`danger`:`success`}),enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:H(`table.placeholder.status`),header:`Status`,meta:{filterOptions:[{label:H(`table.label.enabled`),value:!1},{label:H(`table.label.disabled`),value:!0}],filterVariant:`select`}}],Y=W.map((e,t)=>({...e,tooltip:!0,tooltipOptions:{position:q[t]}})),X=[{accessorKey:`description`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:H(`table.placeholder.search`),header:`Description`},{accessorKey:`quantity`,dataType:`number`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${H(`table.placeholder.min`)},${H(`table.placeholder.max`)}`,header:()=>`Quantity`,meta:{filterVariant:`range`}},{accessorKey:`amount`,dataType:`currency`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${H(`table.placeholder.min`)},${H(`table.placeholder.max`)}`,header:`Amount`,meta:{filterVariant:`range`}},{accessorKey:`date`,dataType:`date`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:H(`table.placeholder.dateRange`),header:`Date`,meta:{filterVariant:`dateRange`}},{cell:()=>e(p,{iconLeft:`pi pi-eye`,rounded:!0,variant:`textOnly`}),dataType:`other`,header:()=>e(`i`,{class:`pi pi-cog`}),id:`action`}],ie=[{description:H(`table.documentation.eventDescription.actionSelect`),name:`action:select`,payload:`{ action: string; data: object }`},{description:H(`table.documentation.eventDescription.changeRowSelection`),name:`change:rowSelection`,payload:`selectedRows: Array`},{description:H(`table.documentation.eventDescription.updateRequest`),name:`update:request`,payload:`requestJSON: TRequestJSON`}],ae=[{accessorKey:`description`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:H(`table.placeholder.search`),header:`Description`},{accessorKey:`quantity`,dataType:`number`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${H(`table.placeholder.min`)},${H(`table.placeholder.max`)}`,header:()=>`Quantity`,meta:{filterVariant:`range`},numberOptions:{locale:`en-IN`}},{accessorKey:`amount`,dataType:`currency`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:`${H(`table.placeholder.min`)},${H(`table.placeholder.max`)}`,header:`Amount`,meta:{filterVariant:`range`},numberOptions:{formatOptions:{currency:`EUR`},locale:`en-US`}},{accessorKey:`date`,dataType:`date`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:H(`table.placeholder.dateRange`),header:`Date`,meta:{dateFilterMax:new Date,filterVariant:`dateRange`}},{accessorKey:`datetime`,dataType:`datetime`,enableColumnFilter:!0,enableSorting:!0,filterPlaceholder:H(`table.placeholder.dateRange`),header:`Datetime`,meta:{dateFilterMin:new Date(2024,0,1),filterVariant:`dateRange`}},{cell:()=>e(p,{iconLeft:`pi pi-eye`,rounded:!0,variant:`textOnly`}),dataType:`other`,header:()=>e(`i`,{class:`pi pi-cog`}),id:`action`}],Z=[{default:`auto`,description:H(`table.documentation.propsDescription.actionsMode`),prop:`actionsMode`,type:`auto | buttons | dropdown`},{default:`1`,description:H(`table.documentation.propsDescription.autoModeCount`),prop:`autoModeCount`,type:`Number`},{default:`[]`,description:H(`table.documentation.propsDescription.dataActionMenu`),prop:`dataActionMenu`,type:`Array<DataActionsMenuItem>`},{default:`-`,description:H(`table.documentation.propsDescription.columnActionButtonLabel`),prop:`columnActionButtonLabel`,type:`String`},{default:`[]`,description:H(`table.documentation.propsDescription.columnsData`),prop:`columnsData`,type:`Array<ColumnDef>`},{default:`{}`,description:H(`table.documentation.propsDescription.customFormatters`),prop:`customFormatters`,type:`Record<string, Function>`},{default:`[]`,description:H(`table.documentation.propsDescription.data`),prop:`data`,type:`Array`},{default:`true`,description:H(`table.documentation.propsDescription.displayActions`),prop:`displayActions`,type:`Boolean | Function`},{default:`-`,description:H(`table.documentation.propsDescription.emptyTableMessage`),prop:`emptyTableMessage`,type:`String`},{default:`false`,description:H(`table.documentation.propsDescription.enableRowSelection`),prop:`enableRowSelection`,type:`Boolean`},{default:`false`,description:H(`table.documentation.propsDescription.enableSortingRemoval`),prop:`enableSortingRemoval`,type:`Boolean`},{default:`false`,description:H(`table.documentation.propsDescription.highlightActiveHeaderColumn`),prop:`highlightActiveHeaderColumn`,type:`Boolean`},{default:`-`,description:H(`table.documentation.propsDescription.id`),prop:`id`,type:`String`},{default:`[]`,description:H(`table.documentation.propsDescription.initialFilters`),prop:`initialFilters`,type:`ColumnFiltersState`},{default:`[]`,description:H(`table.documentation.propsDescription.initialSorting`),prop:`initialSorting`,type:`SortingState`},{default:`-`,description:H(`table.documentation.propsDescription.inputDebounceTime`),prop:`inputDebounceTime`,type:`Number`},{default:`false`,description:H(`table.documentation.propsDescription.isLoading`),prop:`isLoading`,type:`Boolean`},{default:`false`,description:H(`table.documentation.propsDescription.isServerTable`),prop:`isServerTable`,type:`Boolean`},{default:`-`,description:H(`table.documentation.propsDescription.locale`),prop:`locale`,type:`String`},{default:`true`,description:H(`table.documentation.propsDescription.paginated`),prop:`paginated`,type:`Boolean`},{default:`{}`,description:H(`table.documentation.propsDescription.paginationOptions`),prop:`paginationOptions`,type:`Object`},{default:`true`,description:H(`table.documentation.propsDescription.persistState`),prop:`persistState`,type:`Boolean`},{default:`localStorage`,description:H(`table.documentation.propsDescription.persistStateStorage`),prop:`persistStateStorage`,type:`localStorage | sessionStorage`},{default:`-`,description:H(`table.documentation.propsDescription.resetButtonLabel`),prop:`resetButtonLabel`,type:`String`},{default:`10`,description:H(`table.documentation.propsDescription.rowPerPage`),prop:`rowPerPage`,type:`Number`},{default:`[10, 20, 30]`,description:H(`table.documentation.propsDescription.rowPerPageOptions`),prop:`rowPerPageOptions`,type:`number[]`},{default:`false`,description:H(`table.documentation.propsDescription.showColumnAction`),prop:`showColumnAction`,type:`Boolean`},{default:`false`,description:H(`table.documentation.propsDescription.showResetButton`),prop:`showResetButton`,type:`Boolean`},{default:`{}`,description:H(`table.documentation.propsDescription.tableOptions`),prop:`tableOptions`,type:`Object`},{default:`-`,description:H(`table.documentation.propsDescription.titleInfo`),prop:`titleInfo`,type:`{ text: string; align?: string }`},{default:`0`,description:H(`table.documentation.propsDescription.totalRecords`),prop:`totalRecords`,type:`Number`},{default:`[]`,description:H(`table.documentation.propsDescription.visibleColumns`),prop:`visibleColumns`,type:`string[]`}],oe=[{description:H(`table.documentation.slotDescription.toolbar`),name:`toolbar`},{description:H(`table.documentation.slotDescription.footer`),name:`footer`},{description:H(`table.documentation.slotDescription.pagination`),name:`pagination`}],se=e=>({body:H(`table.label.deleteUserMessage`,{user:e?.name}),header:H(`table.label.confirmation`)}),ce=t=>({body:e(i(`i18n-t`),{keypath:`table.label.deleteUserMessage`,tag:`p`},{user:e(`strong`,t?.name||``)}),header:H(`table.label.confirmation`)}),Q=e=>e.id!==11,$=e=>e.id!==12;return(e,o)=>{let d=i(`SshPre`);return s(),u(b,{subtitle:e.$t(`table.subtitle.base`),title:e.$t(`table.title`),class:`demo data-table`},{default:c(()=>[a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.basic`)),1),o[3]||=n(),a(`div`,x,[t(r(g),{id:`basic`,"columns-data":W,data:r(_).slice(0,15),paginated:!1},null,8,[`data`]),o[2]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[1]||=[n(`
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
        `,-1)]]),_:1})])]),o[64]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.pagination`)),1),o[6]||=n(),a(`div`,S,[t(r(g),{id:`pagination`,"columns-data":W,data:r(_)},null,8,[`data`]),o[5]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[4]||=[n(`
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
        `,-1)]]),_:1})])]),o[65]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.sortable`)),1),o[9]||=n(),a(`div`,C,[t(r(g),{id:`sortable`,"columns-data":r(K),data:r(_),"initial-sorting":[{id:`email`,desc:!1}],"show-reset-button":``},null,8,[`columns-data`,`data`]),o[8]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[7]||=[n(`
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
        `,-1)]]),_:1})])]),o[66]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.rowSelection`)),1),o[12]||=n(),a(`div`,w,[t(r(g),{id:`row-selection`,"columns-data":W,data:r(_).slice(0,5),"initial-sorting":[{id:`email`,desc:!1}],"enable-row-selection":``},null,8,[`data`]),o[11]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[10]||=[n(`
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
        `,-1)]]),_:1})])]),o[67]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.tooltip`)),1),o[15]||=n(),a(`div`,T,[t(r(g),{id:`tooltip`,"columns-data":r(Y),data:r(_).slice(0,5),"initial-sorting":[{id:`email`,desc:!1}],"enable-row-selection":``},null,8,[`columns-data`,`data`]),o[14]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[13]||=[n(`
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
          `,-1)]]),_:1})])]),o[68]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.columnAlignment`)),1),o[18]||=n(),a(`div`,E,[t(r(g),{id:`alignment`,"columns-data":U,data:r(_).slice(0,5),"initial-sorting":[{id:`email`,desc:!1}],"enable-row-selection":``},null,8,[`data`]),o[17]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[16]||=[n(`
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
        `,-1)]]),_:1})])]),o[69]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.columnAction`)),1),o[21]||=n(),a(`div`,D,[t(r(g),{id:`column-action`,"columns-data":W,data:r(_).slice(0,5),"initial-sorting":[{id:`email`,desc:!1}],"show-column-action":``},null,8,[`data`]),o[20]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[19]||=[n(`
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
        `,-1)]]),_:1})])]),o[70]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.title`)),1),o[24]||=n(),a(`div`,O,[t(r(g),{id:`title`,"columns-data":W,data:r(_).slice(0,5),"title-info":{text:e.$t(`table.label.users`),align:`left`}},null,8,[`data`,`title-info`]),o[23]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[22]||=[n(`
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
        `,-1)]]),_:1})])]),o[71]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.footer`)),1),o[27]||=n(),a(`div`,k,[t(r(g),{id:`footer`,"columns-data":W,data:r(_)},{footer:c(()=>[a(`tr`,null,[a(`td`,{colspan:W.length},l(`${e.$t(`table.label.totalRecords`)}: ${r(_).length??`0`}`),9,A)])]),_:1},8,[`data`]),o[26]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[25]||=[n(`
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
        `,-1)]]),_:1})])]),o[72]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.customVerticalBorder`)),1),o[30]||=n(),a(`div`,j,[t(r(g),{id:`vertical-border`,"column-action-button-label":e.$t(`table.label.order`),"columns-data":W,data:r(_),"initial-sorting":[{id:`email`,desc:!1}],"visible-columns":[`email`,`name`,`age`,`city`],class:`vertical`,"show-column-action":``},null,8,[`column-action-button-label`,`data`]),o[29]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[28]||=[n(`
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
        `,-1)]]),_:1})])]),o[73]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.customHorizontalBorder`)),1),o[33]||=n(),a(`div`,M,[t(r(g),{id:`horizontal-border`,"column-action-button-label":e.$t(`table.label.order`),"columns-data":W,data:r(_),"initial-sorting":[{id:`email`,desc:!1}],"visible-columns":[`email`,`name`,`age`,`city`],class:`horizontal`,"show-column-action":``},null,8,[`column-action-button-label`,`data`]),o[32]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[31]||=[n(`
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
        `,-1)]]),_:1})])]),o[74]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.customToolbar`)),1),o[37]||=n(),a(`div`,N,[t(r(g),{id:`custom-toolbar`,"columns-data":W,data:r(_).slice(0,5)},{toolbar:c(()=>[G.value?(s(),ee(`span`,P,l(r(m)(Date())),1)):f(``,!0),o[34]||=n(),t(r(p),{label:e.$t(`table.label.clickMe`),onClick:o[0]||=e=>G.value=!G.value},null,8,[`label`])]),_:1},8,[`data`]),o[36]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[35]||=[n(`
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
        `,-1)]]),_:1})])]),o[75]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.singleAction`)),1),o[40]||=n(),a(`div`,F,[t(r(g),{id:`single-action`,"columns-data":W,data:r(_).slice(10,15),"data-action-menu":[{icon:`pi pi-eye`,key:`show`}],"initial-sorting":[{id:`email`,desc:!1}],paginated:!1,"actions-mode":`buttons`,"onAction:select":()=>{}},null,8,[`data`]),o[39]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[38]||=[n(`
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
        `,-1)]]),_:1})])]),o[76]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.multipleButtonAction`)),1),o[43]||=n(),a(`div`,I,[t(r(g),{id:`multiple-button-action`,"columns-data":W,data:r(_).slice(10,15),"data-action-menu":[{icon:`pi pi-eye`,key:`show`},{icon:`pi pi-pencil`,key:`edit`},{icon:`pi pi-share-alt`,key:`share`},{confirmationOptions:{header:e.$t(`table.label.confirmation`),body:e.$t(`table.label.deleteRecordMessage`)},icon:`pi pi-trash`,key:`delete`,requireConfirmationModal:!0,severity:`danger`}],"initial-sorting":[{id:`email`,desc:!1}],paginated:!1,"actions-mode":`buttons`,"onAction:select":()=>{}},null,8,[`data`,`data-action-menu`]),o[42]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[41]||=[n(`
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
        `,-1)]]),_:1})])]),o[77]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.builtinActions`)),1),o[46]||=n(),a(`div`,L,[t(r(g),{id:`builtin-actions`,"columns-data":W,data:r(_).slice(10,15),"data-action-menu":[{label:e.$t(`table.label.view`)},{disabled:!0,label:e.$t(`table.label.edit`)},{disabled:Q,label:e.$t(`table.label.share`)},{confirmationOptions:se,label:e.$t(`table.label.delete`),requireConfirmationModal:!0}],"display-actions":$,"initial-sorting":[{id:`email`,desc:!1}],paginated:!1,"onAction:select":()=>{}},null,8,[`data`,`data-action-menu`]),o[45]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[44]||=[n(`
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
        `,-1)]]),_:1})])]),o[78]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.filteredActions`)),1),o[49]||=n(),a(`div`,R,[t(r(g),{id:`filtered-actions`,"columns-data":W,data:r(_).slice(10,15),"data-action-menu":[{display:$,label:e.$t(`table.label.view`)},{disabled:!0,display:$,label:e.$t(`table.label.edit`)},{disabled:Q,display:$,label:e.$t(`table.label.share`)},{confirmationOptions:ce,label:e.$t(`table.label.delete`),requireConfirmationModal:!0}],"initial-sorting":[{id:`email`,desc:!1}],"actions-mode":`dropdown`,"onAction:select":()=>{}},null,8,[`data`,`data-action-menu`]),o[48]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[47]||=[n(`
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
        `,-1)]]),_:1})])]),o[79]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.singleActionMenu`)),1),o[52]||=n(),a(`div`,re,[t(r(g),{id:`single-action-menu`,"columns-data":W,data:r(_).slice(10,15),"data-action-menu":[{label:e.$t(`table.label.view`)}],"initial-sorting":[{id:`email`,desc:!1}],"actions-mode":`dropdown`,"onAction:select":()=>{}},null,8,[`data`,`data-action-menu`]),o[51]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[50]||=[n(`
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
        `,-1)]]),_:1})])]),o[80]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.cellDataFormatting`)),1),o[55]||=n(),a(`div`,z,[t(r(g),{id:`cell-data-formatting`,"columns-data":ae,data:r(v),"initial-sorting":[{id:`quantity`,desc:!0}],paginated:!1},null,8,[`data`]),o[54]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[53]||=[n(`
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
                dateFilterMax: new Date(),
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
                dateFilterMin: new Date(2024, 0, 1),
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
        `,-1)]]),_:1})])]),o[81]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.customCellDataFormatting`)),1),o[58]||=n(),a(`div`,B,[t(r(g),{id:`custom-cell-data-formatting`,"columns-data":X,"custom-formatters":{currency:e=>`$${e}`,number:e=>`~${e}`},data:r(v),"initial-sorting":[{id:`quantity`,desc:!0}],paginated:!1},null,8,[`custom-formatters`,`data`]),o[57]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[56]||=[n(`
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
        `,-1)]]),_:1})])]),o[82]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`table.usage.centeredAlignedTable`)),1),o[61]||=n(),a(`div`,V,[t(r(g),{id:`center-aligned-content`,"columns-data":J,data:r(_).slice(10,15),"initial-sorting":[{id:`email`,desc:!1}],class:`center-aligned-content-table`},null,8,[`data`]),o[60]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[59]||=[n(`
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
        `,-1)]]),_:1})])]),o[83]||=n(),t(ne,{"events-data":ie,"props-data":Z,"props-table-title":e.$t(`common.properties`,{value:`TableProperties`}),"slots-data":oe},null,8,[`props-table-title`]),o[84]||=n(),a(`section`,null,[a(`h2`,null,l(e.$t(`common.type`)),1),o[63]||=n(),t(d,{language:`html-vue`},{default:c(()=>[...o[62]||=[n(`
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
      `,-1)]]),_:1})])]),_:1},8,[`subtitle`,`title`])}}});export{H as default};