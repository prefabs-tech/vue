import{d as u,I as p,e as m,o as r,i as a,E as o,f as l,g as t,u as i,X as w,x as g}from"./index-NvIlo0bN.js";import{_ as N}from"./UiPage.vue_vue_type_style_index_0_lang-Bhm3xsQ4.js";const D={class:"section-content"},c=u({__name:"Index",setup(f){const d=[{downloadCount:5,id:1,lastDownloadedAt:Date.now(),originalFileName:"file1.png",uploadedAt:Date.now(),uploadedBy:{givenName:"Manish",lastName:"Aryal"}},{downloadCount:5,id:2,lastDownloadedAt:Date.now(),originalFileName:"document.pdf",uploadedAt:Date.now(),uploadedBy:{givenName:"Gaurav",lastName:"Sapkota"}},{downloadCount:5,id:3,lastDownloadedAt:Date.now(),originalFileName:"photo.jpeg",uploadedAt:Date.now(),uploadedBy:{givenName:"Deepak",lastName:"Aryal"}},{downloadCount:5,id:4,lastDownloadedAt:Date.now(),originalFileName:"manish.png",uploadedAt:Date.now(),uploadedBy:{givenName:"Lamdiki",lastName:"Sherpa"}}];return(n,e)=>{const s=p("SshPre");return r(),m(N,{title:n.$t("ui.filesList.title"),class:"demo"},{toolbar:a(()=>[t(i(g),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=v=>n.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[e[3]||(e[3]=o()),l("section",null,[l("div",D,[t(i(w),{"action-buttons-visibility":{download:!0,view:!0},files:d}),e[2]||(e[2]=o()),t(s,{language:"html-vue"},{default:a(()=>e[1]||(e[1]=[o(`
          <template>
            <FilesList
              :action-buttons-visibility="{
                download: true,
                view: true,
              }"
              :files="files"
            />
          </template>

          <script setup lang="ts">
          import { FileList } from "@dzangolab/vue3-ui";

          import type { IFile } from "@dzangolab/vue3-ui";

          const files = [
            {
              downloadCount: 5,
              id: 1,
              lastDownloadedAt: Date.now(),
              originalFileName: "file1.png",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Manish", lastName: "Aryal" },
            },
            {
              downloadCount: 5,
              id: 2,
              lastDownloadedAt: Date.now(),
              originalFileName: "document.pdf",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Gaurav", lastName: "Sapkota" },
            },
            {
              downloadCount: 5,
              id: 3,
              lastDownloadedAt: Date.now(),
              originalFileName: "photo.jpeg",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Deepak", lastName: "Aryal" },
            },
            {
              downloadCount: 5,
              id: 4,
              lastDownloadedAt: Date.now(),
              originalFileName: "manish.png",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Lamdiki", lastName: "Sherpa" },
            },
          ] as IFile[];
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{c as default};
