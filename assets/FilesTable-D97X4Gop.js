import{U as m}from"./DzangolabVue3TanstackTable.es-9hMxqgKF.js";import{d as u,K as c,f,o as g,i as a,D as t,g as s,h as l,u as r,v as b}from"./index-7No6seO6.js";import{_ as v}from"./TablePage.vue_vue_type_style_index_0_lang-DUQpAnrY.js";import"./DzangolabVue3Form.es-CVl3nFuh.js";const w={class:"section-content"},N={name:"FilesTable"},$=u({...N,setup(y){return(o,e)=>{const p=c("SshPre");return g(),f(v,{title:o.$t("table.label.filesTable"),class:"demo data-table"},{toolbar:a(()=>[l(r(b),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=i=>o.$router.push("/table"))},null,8,["label"])]),default:a(()=>[e[3]||(e[3]=t()),s("section",null,[s("div",w,[l(r(m),{"columns-data":[{id:"uploadedBy",tooltip:({row:{original:i}})=>{var n,d;return`${(n=i.uploadedBy)==null?void 0:n.givenName} ${(d=i.uploadedBy)==null?void 0:d.lastName}`}},{accessorKey:"uploadedAt",tooltip:!0}],files:[{description:"File 1 description",id:1,lastDownloadedAt:Date.now(),originalFileName:"My file",uploadedAt:Date.now(),uploadedBy:{givenName:"monorepo",lastName:"Admin"}},{description:"File description",id:2,lastDownloadedAt:Date.now(),originalFileName:"My file v2",uploadedAt:Date.now(),uploadedBy:{givenName:"Monorepo",lastName:""}}],"initial-sorting":[{id:"originalFileName",desc:!0}],"table-options":{paginationOptions:{itemsPerPageControlLabel:o.$t("table.label.rowsPerPage")}},"visible-columns":["originalFileName","description","uploadedBy","uploadedAt"],"archive-file":"","delete-file":"","download-file":"","edit-description":"","share-file":"","view-file":"","onAction:archive":()=>{},"onAction:delete":()=>{},"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:share":()=>{},"onAction:view":()=>{}},null,8,["columns-data","files","table-options"]),e[2]||(e[2]=t()),l(p,{language:"html-vue"},{default:a(()=>e[1]||(e[1]=[t(`
          <template>
            <FilesTable
              :columns-data="[
                {
                  id: 'uploadedBy',
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
                  id: 1,
                  lastDownloadedAt: Date.now(),
                  originalFileName: 'My file',
                  uploadedAt: Date.now(),
                  uploadedBy: { givenName: 'monorepo', lastName: 'Admin' },
                },
                {
                  description: 'File description',
                  id: 2,
                  lastDownloadedAt: Date.now(),
                  originalFileName: 'My file v2',
                  uploadedAt: Date.now(),
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
          import { FilesTable } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{$ as default};
