import{m as p}from"./PrefabsTechVue3TanstackTable.es-DFgNjZel.js";import{d as u,J as m,e as w,o as c,i as n,C as o,f as a,t as r,g as i,u as l,v as f}from"./index-B9AZRdEG.js";import{_ as g}from"./TablePage.vue_vue_type_style_index_0_lang-piak8kW3.js";import"./PrefabsTechVue3Form.es-DceiuSry.js";const A={class:"section-content"},v={class:"section-content"},D={name:"FilesPresentation"},B=u({...D,setup(N){const d=[{description:"File description",downloadCount:5,id:1,lastDownloadedAt:Date.now(),originalFileName:"file1.png",size:100,uploadedAt:Date.now(),uploadedBy:{givenName:"Manish",lastName:"Aryal"}},{description:"File description",downloadCount:5,id:2,lastDownloadedAt:Date.now(),originalFileName:"document.pdf",uploadedAt:Date.now(),uploadedBy:{givenName:"Gaurav",lastName:"Sapkota"}},{description:"File description",downloadCount:5,id:3,lastDownloadedAt:Date.now(),originalFileName:"photo.jpeg",uploadedAt:Date.now(),uploadedBy:{givenName:"Deepak",lastName:"Aryal"}},{description:"File description",downloadCount:5,id:4,lastDownloadedAt:Date.now(),originalFileName:"manish.png",uploadedAt:Date.now(),uploadedBy:{givenName:"Lamdiki",lastName:"Sherpa"}}];return(t,e)=>{const s=m("SshPre");return c(),w(g,{title:t.$t("table.label.filesPresentation"),class:"demo"},{toolbar:n(()=>[i(l(f),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=F=>t.$router.push("/table"))},null,8,["label"])]),default:n(()=>[e[7]||(e[7]=o()),a("section",null,[a("h2",null,r(t.$t("table.usage.tableMode")),1),e[3]||(e[3]=o()),a("div",A,[i(l(p),{files:d,"visible-file-details":["originalFileName","description","size","uploadedBy","uploadedAt","downloadCount","lastDownloadedAt","actions"],presentation:"table","onAction:archive":()=>{},"onAction:delete":()=>{},"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:share":()=>{},"onAction:view":()=>{}}),e[2]||(e[2]=o()),i(s,{language:"html-vue"},{default:n(()=>e[1]||(e[1]=[o(`
          <template>
            <FilesPresentation
              :files="files"
              :visible-file-details="[
                'originalFileName',
                'description',
                'size',
                'uploadedBy',
                'uploadedAt',
                'downloadCount',
                'lastDownloadedAt',
                'actions',
              ]"
              presentation="table"
              @action:archive="() => {}"
              @action:delete="() => {}"
              @action:download="() => {}"
              @action:edit="() => {}"
              @action:share="() => {}"
              @action:view="() => {}"
            />
          </template>
    
          <script setup lang="ts">
          import { FilesPresentation } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { IFile } from "@prefabs.tech/vue3-ui";

          const files = [
            {
              description: "File description",
              downloadCount: 5,
              id: 1,
              lastDownloadedAt: Date.now(),
              originalFileName: "file1.png",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Manish", lastName: "Aryal" },
            },
            {
              description: "File description",
              downloadCount: 5,
              id: 2,
              lastDownloadedAt: Date.now(),
              originalFileName: "document.pdf",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Gaurav", lastName: "Sapkota" },
            },
            {
              description: "File description",
              downloadCount: 5,
              id: 3,
              lastDownloadedAt: Date.now(),
              originalFileName: "photo.jpeg",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Deepak", lastName: "Aryal" },
            },
            {
              description: "File description",
              downloadCount: 5,
              id: 4,
              lastDownloadedAt: Date.now(),
              originalFileName: "manish.png",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Lamdiki", lastName: "Sherpa" },
            },
          ] as IFile[];
          <\/script>
        `)])),_:1})])]),e[8]||(e[8]=o()),a("section",null,[a("h2",null,r(t.$t("table.usage.listMode")),1),e[6]||(e[6]=o()),a("div",v,[i(l(p),{"action-buttons-visibility":{archive:!1,delete:!1,download:!0,edit:!0,share:!1,view:!0},files:d,"visible-file-details":["originalFileName","description","size","uploadedBy","uploadedAt","downloadCount","lastDownloadedAt","actions"],"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:view":()=>{}}),e[5]||(e[5]=o()),i(s,{language:"html-vue"},{default:n(()=>e[4]||(e[4]=[o(`
          <template>
            <FilesPresentation
              :action-buttons-visibility="{
                archive: false,
                delete: false,
                download: true,
                edit: true,
                share: false,
                view: true,
              }"
              :files="files"
              :visible-file-details="[
                'originalFileName',
                'description',
                'size',
                'uploadedBy',
                'uploadedAt',
                'downloadCount',
                'lastDownloadedAt',
                'actions',
              ]"
              @action:download="() => {}"
              @action:edit="() => {}"
              @action:view="() => {}"
            />
          </template>
    
          <script setup lang="ts">
          import { FilesPresentation } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { IFile } from "@prefabs.tech/vue3-ui";

          const files = [
            {
              description: "File description",
              downloadCount: 5,
              id: 1,
              lastDownloadedAt: Date.now(),
              originalFileName: "file1.png",
              size: 100,
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Manish", lastName: "Aryal" },
            },
            {
              description: "File description",
              downloadCount: 5,
              id: 2,
              lastDownloadedAt: Date.now(),
              originalFileName: "document.pdf",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Gaurav", lastName: "Sapkota" },
            },
            {
              description: "File description",
              downloadCount: 5,
              id: 3,
              lastDownloadedAt: Date.now(),
              originalFileName: "photo.jpeg",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Deepak", lastName: "Aryal" },
            },
            {
              description: "File description",
              downloadCount: 5,
              id: 4,
              lastDownloadedAt: Date.now(),
              originalFileName: "manish.png",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Lamdiki", lastName: "Sherpa" },
            },
          ] as IFile[];
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{B as default};
