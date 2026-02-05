import{d as p,M as c,N as m,o as u,e as f,f as t,h as i,a as l,u as n,A as d}from"./index-BOKL-xq7.js";import{l as g}from"./PrefabsTechVue3TanstackTable.es-7gB2SFG-.js";import{_ as w}from"./TablePage.vue_vue_type_style_index_0_lang-CGyWyRry.js";import"./PrefabsTechVue3Form.es-BWc4QQ6k.js";const b={class:"section-content"},v={name:"FilesTable"},D=p({...v,setup(A){const{locale:s}=c();return(e,o)=>{const r=m("SshPre");return u(),f(w,{title:e.$t("table.label.filesTable"),class:"demo data-table"},{default:t(()=>[i("section",null,[i("div",b,[l(n(g),{id:"files-table","columns-data":[{accessorKey:"uploadedBy",header:e.$t("table.label.uploadedBy"),tooltip:({row:{original:a}})=>`${a.uploadedBy?.givenName} ${a.uploadedBy?.lastName}`},{accessorKey:"uploadedAt",header:e.$t("table.label.uploadedAt"),tooltip:!0}],files:[{description:"File 1 description",downloadCount:10,id:1,lastDownloadedAt:new Date("2025-01-14").getTime(),originalFileName:"My file",uploadedAt:new Date("2025-01-25").getTime(),uploadedBy:{givenName:"monorepo",lastName:"Admin"}},{description:"File description",downloadCount:12,id:2,lastDownloadedAt:Date.now(),originalFileName:"My file v2",uploadedAt:new Date("2025-02-17").getTime(),uploadedBy:{givenName:"Monorepo",lastName:""}}],"initial-sorting":[{id:"originalFileName",desc:!0}],locale:String(n(s)),"table-options":{paginationOptions:{itemsPerPageControlLabel:e.$t("table.label.rowsPerPage")}},"visible-columns":["originalFileName","description","uploadedBy","uploadedAt","lastDownloadedAt","downloadCount","actions"],"archive-file":"","delete-file":"","download-file":"","edit-description":"","share-file":"","view-file":"","onAction:archive":()=>{},"onAction:delete":()=>{},"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:share":()=>{},"onAction:view":()=>{}},null,8,["columns-data","files","locale","table-options"]),o[1]||(o[1]=d()),l(r,{language:"html-vue"},{default:t(()=>[...o[0]||(o[0]=[d(`
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
        `,-1)])]),_:1})])])]),_:1},8,["title"])}}});export{D as default};
