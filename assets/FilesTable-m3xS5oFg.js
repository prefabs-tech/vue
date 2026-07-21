import{D as e,E as t,On as n,St as r,_ as i,g as a,k as o,mt as s,qt as c,v as l}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{T as u}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{r as d}from"./PrefabsTechVue3TanstackTable.es-Dqv6JrPc.js";import{t as f}from"./ComponentDocumentation-CFBF3GmY.js";import{t as p}from"./TablePage-CBOXTkXx.js";var m={class:`section-content`},h=o({name:`FilesTableDemo`,setup(o){let{locale:h,t:g}=u(),_=a(()=>[{description:g(`table.documentation.eventDescription.actionArchive`),name:`action:archive`,payload:`data: IFile`},{description:g(`table.documentation.eventDescription.actionDelete`),name:`action:delete`,payload:`data: IFile`},{description:g(`table.documentation.eventDescription.actionDownload`),name:`action:download`,payload:`data: IFile`},{description:g(`table.documentation.eventDescription.actionEdit`),name:`action:edit`,payload:`data: IFile`},{description:g(`table.documentation.eventDescription.actionShare`),name:`action:share`,payload:`data: IFile`},{description:g(`table.documentation.eventDescription.actionView`),name:`action:view`,payload:`data: IFile`},{description:g(`table.documentation.eventDescription.updateRequest`),name:`update:request`,payload:`requestJSON: TRequestJSON`}]),v=a(()=>[{default:`false`,description:g(`table.documentation.propsDescription.archiveFile`),prop:`archiveFile`,type:`Boolean`},{default:`-`,description:g(`table.documentation.propsDescription.columnsData`),prop:`columnsData`,type:`Array<TableColumnDefinition<IFile>>`},{default:`false`,description:g(`table.documentation.propsDescription.deleteFile`),prop:`deleteFile`,type:`Boolean`},{default:`false`,description:g(`table.documentation.propsDescription.downloadFile`),prop:`downloadFile`,type:`Boolean`},{default:`false`,description:g(`table.documentation.propsDescription.editDescription`),prop:`editDescription`,type:`Boolean`},{default:`-`,description:g(`table.documentation.propsDescription.files`),prop:`files`,type:`Array<IFile>`},{default:`files-table`,description:g(`table.documentation.propsDescription.id`),prop:`id`,type:`String`},{default:`-`,description:g(`table.documentation.propsDescription.initialSorting`),prop:`initialSorting`,type:`SortingState`},{default:`false`,description:g(`table.documentation.propsDescription.isLoading`),prop:`isLoading`,type:`Boolean`},{default:`false`,description:g(`table.documentation.propsDescription.isServerTable`),prop:`isServerTable`,type:`Boolean`},{default:`-`,description:g(`table.documentation.propsDescription.locale`),prop:`locale`,type:`String`},{default:`-`,description:g(`table.documentation.propsDescription.messages`),prop:`messages`,type:`TableMessages`},{default:`true`,description:g(`table.documentation.propsDescription.persistState`),prop:`persistState`,type:`Boolean`},{default:`localStorage`,description:g(`table.documentation.propsDescription.persistStateStorage`),prop:`persistStateStorage`,type:`localStorage | sessionStorage`},{default:`false`,description:g(`table.documentation.propsDescription.shareFile`),prop:`shareFile`,type:`Boolean`},{default:`-`,description:g(`table.documentation.propsDescription.tableOptions`),prop:`tableOptions`,type:`Object`},{default:`0`,description:g(`table.documentation.propsDescription.totalRecords`),prop:`totalRecords`,type:`Number`},{default:`false`,description:g(`table.documentation.propsDescription.viewFile`),prop:`viewFile`,type:`Boolean`},{default:`-`,description:g(`table.documentation.propsDescription.visibleColumns`),prop:`visibleColumns`,type:`string[]`}]),y=a(()=>[{description:g(`table.documentation.slotDescription.footer`),name:`footer`,props:`-`},{description:g(`table.documentation.slotDescription.pagination`),name:`pagination`,props:`-`},{description:g(`table.documentation.slotDescription.toolbar`),name:`toolbar`,props:`-`}]),b=({row:{original:e}})=>`${e.uploadedBy?.givenName} ${e.uploadedBy?.lastName}`;return(a,o)=>{let u=r(`SshPre`);return s(),l(p,{subtitle:a.$t(`table.subtitle.files`),title:a.$t(`table.label.filesTable`),class:`demo data-table`},{default:c(()=>[i(`section`,null,[i(`div`,m,[e(n(d),{id:`files-table`,"columns-data":[{accessorKey:`uploadedBy`,header:a.$t(`table.label.uploadedBy`),tooltip:String(b)},{accessorKey:`uploadedAt`,header:a.$t(`table.label.uploadedAt`),tooltip:!0}],files:[{description:`File 1 description`,downloadCount:10,id:1,lastDownloadedAt:new Date(`2025-01-14`).getTime(),originalFileName:`My file`,uploadedAt:new Date(`2025-01-25`).getTime(),uploadedBy:{givenName:`monorepo`,lastName:`Admin`}},{description:`File description`,downloadCount:12,id:2,lastDownloadedAt:Date.now(),originalFileName:`My file v2`,uploadedAt:new Date(`2025-02-17`).getTime(),uploadedBy:{givenName:`Monorepo`,lastName:``}}],"initial-sorting":[{id:`originalFileName`,desc:!0}],locale:String(n(h)),"table-options":{paginationOptions:{itemsPerPageControlLabel:a.$t(`table.label.rowsPerPage`)}},"visible-columns":[`originalFileName`,`description`,`uploadedBy`,`uploadedAt`,`lastDownloadedAt`,`downloadCount`,`actions`],"archive-file":``,"delete-file":``,"download-file":``,"edit-description":``,"share-file":``,"view-file":``,"onAction:archive":()=>{},"onAction:delete":()=>{},"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:share":()=>{},"onAction:view":()=>{}},null,8,[`columns-data`,`files`,`locale`,`table-options`]),o[1]||=t(),e(u,{language:`html-vue`},{default:c(()=>[...o[0]||=[t(`
          <template>
            <FilesTable
              id="files-table"
              :columns-data="[
                {
                  accessorKey: 'uploadedBy',
                  tooltip: ({ row: { original } }) => {
                    return \`\${original.uploadedBy?.givenName} \${original.uploadedBy?.lastName}\`;
                  },
                },
                {
                  accessorKey: 'uploadedAt',
                  tooltip: true,
                },
              ]"
              :files="[
                {
                  description: 'File 1 description',
                  downloadCount: 10,
                  id: 1,
                  lastDownloadedAt: new Date('2025-01-14').getTime(),
                  originalFileName: 'My file',
                  uploadedAt: new Date('2025-01-25').getTime(),
                  uploadedBy: { givenName: 'monorepo', lastName: 'Admin' },
                },
                {
                  description: 'File description',
                  downloadCount: 12,
                  id: 2,
                  lastDownloadedAt: Date.now(),
                  originalFileName: 'My file v2',
                  uploadedAt: new Date('2025-02-17').getTime(),
                  uploadedBy: { givenName: 'Monorepo', lastName: '' },
                },
              ]"
              :initial-sorting="[{ id: 'originalFileName', desc: true }]"
              :locale="String(locale)"
              :table-options="{
                paginationOptions: {
                  itemsPerPageControlLabel: $t('table.label.rowsPerPage'),
                },
              }"
              :visible-columns="[
                'originalFileName',
                'description',
                'uploadedBy',
                'uploadedAt',
                'lastDownloadedAt',
                'downloadCount',
                'actions',
              ]"
              archive-file
              delete-file
              download-file
              edit-description
              share-file
              view-file
              @action:archive="() => {}"
              @action:delete="() => {}"
              @action:download="() => {}"
              @action:edit="() => {}"
              @action:share="() => {}"
              @action:view="() => {}"
            />
          </template>
    
          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { FilesTable } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
          
          const { locale } = useI18n();
          <\/script>
        `,-1)]]),_:1})])]),o[3]||=t(),e(f,{"events-data":_.value,"props-data":v.value,"props-table-title":a.$t(`common.properties`,{value:`FilesTableProperties`}),"slots-data":y.value},null,8,[`events-data`,`props-data`,`props-table-title`,`slots-data`]),o[4]||=t(),i(`section`,null,[e(u,{language:`html-vue`},{default:c(()=>[...o[2]||=[t(`
        interface IFile {
          description?: string;
          downloadCount?: number;
          id: number | string;
          lastDownloadedAt?: number;
          originalFileName: string;
          size?: number;
          uploadedAt: number;
          uploadedBy: Record<string, string>;
        }
      `,-1)]]),_:1})])]),_:1},8,[`subtitle`,`title`])}}});export{h as default};