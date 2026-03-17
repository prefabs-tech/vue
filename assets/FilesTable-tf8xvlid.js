import{d as f,u as g,r as D,o as y,h as v,w as n,a as l,e as a,f as d,b as i,k as s}from"./index-8hfrWEeB.js";import{f as w}from"./PrefabsTechVue3TanstackTable.es-r7GKZhH-.js";import{_ as F}from"./TablePage.vue_vue_type_style_index_0_lang-BgpaPVTv.js";import{_ as A}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-Cp1TYnAN.js";const N={class:"section-content"},B={name:"FilesTableDemo"},I=f({...B,setup(S){const{locale:c,t:e}=g(),u=s(()=>[{description:e("table.documentation.eventDescription.actionArchive"),name:"action:archive",payload:"data: IFile"},{description:e("table.documentation.eventDescription.actionDelete"),name:"action:delete",payload:"data: IFile"},{description:e("table.documentation.eventDescription.actionDownload"),name:"action:download",payload:"data: IFile"},{description:e("table.documentation.eventDescription.actionEdit"),name:"action:edit",payload:"data: IFile"},{description:e("table.documentation.eventDescription.actionShare"),name:"action:share",payload:"data: IFile"},{description:e("table.documentation.eventDescription.actionView"),name:"action:view",payload:"data: IFile"},{description:e("table.documentation.eventDescription.updateRequest"),name:"update:request",payload:"requestJSON: TRequestJSON"}]),m=s(()=>[{default:"false",description:e("table.documentation.propsDescription.archiveFile"),prop:"archiveFile",type:"Boolean"},{default:"-",description:e("table.documentation.propsDescription.columnsData"),prop:"columnsData",type:"Array<TableColumnDefinition<IFile>>"},{default:"false",description:e("table.documentation.propsDescription.deleteFile"),prop:"deleteFile",type:"Boolean"},{default:"false",description:e("table.documentation.propsDescription.downloadFile"),prop:"downloadFile",type:"Boolean"},{default:"false",description:e("table.documentation.propsDescription.editDescription"),prop:"editDescription",type:"Boolean"},{default:"-",description:e("table.documentation.propsDescription.files"),prop:"files",type:"Array<IFile>"},{default:"files-table",description:e("table.documentation.propsDescription.id"),prop:"id",type:"String"},{default:"-",description:e("table.documentation.propsDescription.initialSorting"),prop:"initialSorting",type:"SortingState"},{default:"false",description:e("table.documentation.propsDescription.isLoading"),prop:"isLoading",type:"Boolean"},{default:"false",description:e("table.documentation.propsDescription.isServerTable"),prop:"isServerTable",type:"Boolean"},{default:"-",description:e("table.documentation.propsDescription.locale"),prop:"locale",type:"String"},{default:"-",description:e("table.documentation.propsDescription.messages"),prop:"messages",type:"TableMessages"},{default:"true",description:e("table.documentation.propsDescription.persistState"),prop:"persistState",type:"Boolean"},{default:"localStorage",description:e("table.documentation.propsDescription.persistStateStorage"),prop:"persistStateStorage",type:"localStorage | sessionStorage"},{default:"false",description:e("table.documentation.propsDescription.shareFile"),prop:"shareFile",type:"Boolean"},{default:"-",description:e("table.documentation.propsDescription.tableOptions"),prop:"tableOptions",type:"Object"},{default:"0",description:e("table.documentation.propsDescription.totalRecords"),prop:"totalRecords",type:"Number"},{default:"false",description:e("table.documentation.propsDescription.viewFile"),prop:"viewFile",type:"Boolean"},{default:"-",description:e("table.documentation.propsDescription.visibleColumns"),prop:"visibleColumns",type:"string[]"}]),b=s(()=>[{description:e("table.documentation.slotDescription.footer"),name:"footer",props:"-"},{description:e("table.documentation.slotDescription.pagination"),name:"pagination",props:"-"},{description:e("table.documentation.slotDescription.toolbar"),name:"toolbar",props:"-"}]);return(o,t)=>{const p=D("SshPre");return y(),v(F,{subtitle:o.$t("table.subtitle.files"),title:o.$t("table.label.filesTable"),class:"demo data-table"},{default:n(()=>[l("section",null,[l("div",N,[a(d(w),{id:"files-table","columns-data":[{accessorKey:"uploadedBy",header:o.$t("table.label.uploadedBy"),tooltip:({row:{original:r}})=>`${r.uploadedBy?.givenName} ${r.uploadedBy?.lastName}`},{accessorKey:"uploadedAt",header:o.$t("table.label.uploadedAt"),tooltip:!0}],files:[{description:"File 1 description",downloadCount:10,id:1,lastDownloadedAt:new Date("2025-01-14").getTime(),originalFileName:"My file",uploadedAt:new Date("2025-01-25").getTime(),uploadedBy:{givenName:"monorepo",lastName:"Admin"}},{description:"File description",downloadCount:12,id:2,lastDownloadedAt:Date.now(),originalFileName:"My file v2",uploadedAt:new Date("2025-02-17").getTime(),uploadedBy:{givenName:"Monorepo",lastName:""}}],"initial-sorting":[{id:"originalFileName",desc:!0}],locale:String(d(c)),"table-options":{paginationOptions:{itemsPerPageControlLabel:o.$t("table.label.rowsPerPage")}},"visible-columns":["originalFileName","description","uploadedBy","uploadedAt","lastDownloadedAt","downloadCount","actions"],"archive-file":"","delete-file":"","download-file":"","edit-description":"","share-file":"","view-file":"","onAction:archive":()=>{},"onAction:delete":()=>{},"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:share":()=>{},"onAction:view":()=>{}},null,8,["columns-data","files","locale","table-options"]),t[1]||(t[1]=i()),a(p,{language:"html-vue"},{default:n(()=>[...t[0]||(t[0]=[i(`
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
        `,-1)])]),_:1})])]),t[3]||(t[3]=i()),a(A,{"events-data":u.value,"props-data":m.value,"props-table-title":o.$t("common.properties",{value:"FilesTableProperties"}),"slots-data":b.value},null,8,["events-data","props-data","props-table-title","slots-data"]),t[4]||(t[4]=i()),l("section",null,[a(p,{language:"html-vue"},{default:n(()=>[...t[2]||(t[2]=[i(`
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
      `,-1)])]),_:1})])]),_:1},8,["subtitle","title"])}}});export{I as default};
