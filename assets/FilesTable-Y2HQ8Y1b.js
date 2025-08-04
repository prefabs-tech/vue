import{U as m}from"./PrefabsTechVue3TanstackTable.es-BQRYxunA.js";import{d as u,H as c,e as f,o as b,j as a,B as i,f as s,h as l,u as r,v as g}from"./index-7DYOETMS.js";import{_ as w}from"./TablePage.vue_vue_type_style_index_0_lang-n9Xq5ECh.js";import"./PrefabsTechVue3Form.es-DkZwwYlu.js";const v={class:"section-content"},y={name:"FilesTable"},h=u({...y,setup(A){return(o,e)=>{const p=c("SshPre");return b(),f(w,{title:o.$t("table.label.filesTable"),class:"demo data-table"},{toolbar:a(()=>[l(r(g),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=t=>o.$router.push("/table"))},null,8,["label"])]),default:a(()=>[e[3]||(e[3]=i()),s("section",null,[s("div",v,[l(r(m),{id:"files-table","columns-data":[{accessorKey:"uploadedBy",header:o.$t("table.label.uploadedBy"),tooltip:({row:{original:t}})=>{var n,d;return`${(n=t.uploadedBy)==null?void 0:n.givenName} ${(d=t.uploadedBy)==null?void 0:d.lastName}`}},{accessorKey:"uploadedAt",header:o.$t("table.label.uploadedAt"),tooltip:!0}],files:[{description:"File 1 description",downloadCount:10,id:1,lastDownloadedAt:new Date("2025-01-14").getTime(),originalFileName:"My file",uploadedAt:new Date("2025-01-25").getTime(),uploadedBy:{givenName:"monorepo",lastName:"Admin"}},{description:"File description",downloadCount:12,id:2,lastDownloadedAt:Date.now(),originalFileName:"My file v2",uploadedAt:new Date("2025-02-17").getTime(),uploadedBy:{givenName:"Monorepo",lastName:""}}],"initial-sorting":[{id:"originalFileName",desc:!0}],"table-options":{paginationOptions:{itemsPerPageControlLabel:o.$t("table.label.rowsPerPage")}},"visible-columns":["originalFileName","description","uploadedBy","uploadedAt","lastDownloadedAt","downloadCount","actions"],"archive-file":"","delete-file":"","download-file":"","edit-description":"","persist-state":"","share-file":"","view-file":"","onAction:archive":()=>{},"onAction:delete":()=>{},"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:share":()=>{},"onAction:view":()=>{}},null,8,["columns-data","files","table-options"]),e[2]||(e[2]=i()),l(p,{language:"html-vue"},{default:a(()=>e[1]||(e[1]=[i(`
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
          import { FilesTable } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{h as default};
