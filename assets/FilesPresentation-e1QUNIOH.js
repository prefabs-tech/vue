import{d as c,M as m,N as w,o as A,e as f,f as n,h as a,t as p,A as o,a as t,u as i}from"./index-BOKL-xq7.js";import{A as u}from"./PrefabsTechVue3TanstackTable.es-7gB2SFG-.js";import{_ as g}from"./TablePage.vue_vue_type_style_index_0_lang-CGyWyRry.js";import"./PrefabsTechVue3Form.es-BWc4QQ6k.js";const D={class:"section-content"},N={class:"section-content"},v={name:"FilesPresentation"},C=c({...v,setup(F){const{locale:d}=m(),s=[{description:"File description",downloadCount:5,id:1,lastDownloadedAt:Date.now(),originalFileName:"file1.png",size:100,uploadedAt:Date.now(),uploadedBy:{givenName:"Manish",lastName:"Aryal"}},{description:"File description",downloadCount:5,id:2,lastDownloadedAt:Date.now(),originalFileName:"document.pdf",uploadedAt:Date.now(),uploadedBy:{givenName:"Gaurav",lastName:"Sapkota"}},{description:"File description",downloadCount:5,id:3,lastDownloadedAt:Date.now(),originalFileName:"photo.jpeg",uploadedAt:Date.now(),uploadedBy:{givenName:"Deepak",lastName:"Aryal"}},{description:"File description",downloadCount:5,id:4,lastDownloadedAt:Date.now(),originalFileName:"manish.png",uploadedAt:Date.now(),uploadedBy:{givenName:"Lamdiki",lastName:"Sherpa"}}];return(l,e)=>{const r=w("SshPre");return A(),f(g,{title:l.$t("table.label.filesPresentation"),class:"demo"},{default:n(()=>[a("section",null,[a("h2",null,p(l.$t("table.usage.tableMode")),1),e[2]||(e[2]=o()),a("div",D,[t(i(u),{files:s,locale:String(i(d)),"visible-file-details":["originalFileName","description","size","uploadedBy","uploadedAt","downloadCount","lastDownloadedAt","actions"],presentation:"table","onAction:archive":()=>{},"onAction:delete":()=>{},"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:share":()=>{},"onAction:view":()=>{}},null,8,["locale"]),e[1]||(e[1]=o()),t(r,{language:"html-vue"},{default:n(()=>[...e[0]||(e[0]=[o(`
          <template>
            <FilesPresentation
              :files="files"
              :locale="String(locale)"
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
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { FilesPresentation } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { IFile } from "@prefabs.tech/vue3-ui";

          const { locale } = useI18n();
          
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
        `,-1)])]),_:1})])]),e[6]||(e[6]=o()),a("section",null,[a("h2",null,p(l.$t("table.usage.listMode")),1),e[5]||(e[5]=o()),a("div",N,[t(i(u),{"action-buttons-visibility":{archive:!1,delete:!1,download:!0,edit:!0,share:!1,view:!0},files:s,locale:i(d),"visible-file-details":["originalFileName","description","size","uploadedBy","uploadedAt","downloadCount","lastDownloadedAt","actions"],"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:view":()=>{}},null,8,["locale"]),e[4]||(e[4]=o()),t(r,{language:"html-vue"},{default:n(()=>[...e[3]||(e[3]=[o(`
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
              :locale="locale"
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
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { FilesPresentation } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { IFile } from "@prefabs.tech/vue3-ui";

          const { locale } = useI18n();

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
        `,-1)])]),_:1})])])]),_:1},8,["title"])}}});export{C as default};
