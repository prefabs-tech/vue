import{d as m,I as u,J as f,b as g,o as w,h as l,e as n,g as d,y as s,u as r}from"./index-ChCRVvjK.js";import{l as b}from"./PrefabsTechVue3TanstackTable.es-CxF3R9ob.js";import{_ as v}from"./TablePage.vue_vue_type_style_index_0_lang-D9arYqZA.js";import"./PrefabsTechVue3Form.es-Hgzq1QlS.js";const y={class:"section-content"},A={name:"FilesTable"},C=m({...A,setup(N){const{locale:p}=u();return(e,o)=>{const c=f("SshPre");return w(),g(v,{title:e.$t("table.label.filesTable"),class:"demo data-table"},{default:l(()=>[n("section",null,[n("div",y,[d(r(b),{id:"files-table","columns-data":[{accessorKey:"uploadedBy",header:e.$t("table.label.uploadedBy"),tooltip:({row:{original:a}})=>{var t,i;return`${(t=a.uploadedBy)==null?void 0:t.givenName} ${(i=a.uploadedBy)==null?void 0:i.lastName}`}},{accessorKey:"uploadedAt",header:e.$t("table.label.uploadedAt"),tooltip:!0}],files:[{description:"File 1 description",downloadCount:10,id:1,lastDownloadedAt:new Date("2025-01-14").getTime(),originalFileName:"My file",uploadedAt:new Date("2025-01-25").getTime(),uploadedBy:{givenName:"monorepo",lastName:"Admin"}},{description:"File description",downloadCount:12,id:2,lastDownloadedAt:Date.now(),originalFileName:"My file v2",uploadedAt:new Date("2025-02-17").getTime(),uploadedBy:{givenName:"Monorepo",lastName:""}}],"initial-sorting":[{id:"originalFileName",desc:!0}],locale:String(r(p)),"table-options":{paginationOptions:{itemsPerPageControlLabel:e.$t("table.label.rowsPerPage")}},"visible-columns":["originalFileName","description","uploadedBy","uploadedAt","lastDownloadedAt","downloadCount","actions"],"archive-file":"","delete-file":"","download-file":"","edit-description":"","share-file":"","view-file":"","onAction:archive":()=>{},"onAction:delete":()=>{},"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:share":()=>{},"onAction:view":()=>{}},null,8,["columns-data","files","locale","table-options"]),o[1]||(o[1]=s()),d(c,{language:"html-vue"},{default:l(()=>[...o[0]||(o[0]=[s(`
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
        `,-1)])]),_:1})])])]),_:1},8,["title"])}}});export{C as default};
