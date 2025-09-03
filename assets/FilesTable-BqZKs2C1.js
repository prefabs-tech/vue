import{d as u,I as c,J as f,e as b,o as g,j as a,C as i,f as r,h as l,u as n,v as w}from"./index-CMtleJwi.js";import{Y as v}from"./PrefabsTechVue3TanstackTable.es-fTlbAKE0.js";import{_ as y}from"./TablePage.vue_vue_type_style_index_0_lang-BGBbqMuN.js";import"./PrefabsTechVue3Form.es-BU3NEoOO.js";const A={class:"section-content"},N={name:"FilesTable"},$=u({...N,setup(B){const{locale:p}=c();return(o,e)=>{const m=f("SshPre");return g(),b(y,{title:o.$t("table.label.filesTable"),class:"demo data-table"},{toolbar:a(()=>[l(n(w),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=t=>o.$router.push("/table"))},null,8,["label"])]),default:a(()=>[e[3]||(e[3]=i()),r("section",null,[r("div",A,[l(n(v),{id:"files-table","columns-data":[{accessorKey:"uploadedBy",header:o.$t("table.label.uploadedBy"),tooltip:({row:{original:t}})=>{var d,s;return`${(d=t.uploadedBy)==null?void 0:d.givenName} ${(s=t.uploadedBy)==null?void 0:s.lastName}`}},{accessorKey:"uploadedAt",header:o.$t("table.label.uploadedAt"),tooltip:!0}],files:[{description:"File 1 description",downloadCount:10,id:1,lastDownloadedAt:new Date("2025-01-14").getTime(),originalFileName:"My file",uploadedAt:new Date("2025-01-25").getTime(),uploadedBy:{givenName:"monorepo",lastName:"Admin"}},{description:"File description",downloadCount:12,id:2,lastDownloadedAt:Date.now(),originalFileName:"My file v2",uploadedAt:new Date("2025-02-17").getTime(),uploadedBy:{givenName:"Monorepo",lastName:""}}],"initial-sorting":[{id:"originalFileName",desc:!0}],locale:String(n(p)),"table-options":{paginationOptions:{itemsPerPageControlLabel:o.$t("table.label.rowsPerPage")}},"visible-columns":["originalFileName","description","uploadedBy","uploadedAt","lastDownloadedAt","downloadCount","actions"],"archive-file":"","delete-file":"","download-file":"","edit-description":"","persist-state":"","share-file":"","view-file":"","onAction:archive":()=>{},"onAction:delete":()=>{},"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:share":()=>{},"onAction:view":()=>{}},null,8,["columns-data","files","locale","table-options"]),e[2]||(e[2]=i()),l(m,{language:"html-vue"},{default:a(()=>e[1]||(e[1]=[i(`
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
              persist-state
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{$ as default};
