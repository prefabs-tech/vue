import{d as f,L as v,M as b,o as g,e as A,f as d,h as a,t as c,z as o,a as n,u as l,i as u}from"./index-C7ch2MF9.js";import{A as m}from"./PrefabsTechVue3TanstackTable.es-BbS_od31.js";import{_ as F}from"./TablePage.vue_vue_type_style_index_0_lang-1mC8qrb9.js";import{_ as y}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-ClDG4-uz.js";import"./PrefabsTechVue3Form.es-BmJfIqTO.js";const N={class:"section-content"},h={class:"section-content"},B={name:"FilesPresentationDemo"},M=f({...B,setup(C){const{locale:s,t}=v(),p=[{description:"File description",downloadCount:5,id:1,lastDownloadedAt:Date.now(),originalFileName:"file1.png",size:100,uploadedAt:Date.now(),uploadedBy:{givenName:"Manish",lastName:"Aryal"}},{description:"File description",downloadCount:5,id:2,lastDownloadedAt:Date.now(),originalFileName:"document.pdf",uploadedAt:Date.now(),uploadedBy:{givenName:"Gaurav",lastName:"Sapkota"}},{description:"File description",downloadCount:5,id:3,lastDownloadedAt:Date.now(),originalFileName:"photo.jpeg",uploadedAt:Date.now(),uploadedBy:{givenName:"Deepak",lastName:"Aryal"}},{description:"File description",downloadCount:5,id:4,lastDownloadedAt:Date.now(),originalFileName:"manish.png",uploadedAt:Date.now(),uploadedBy:{givenName:"Lamdiki",lastName:"Sherpa"}}],w=u(()=>[{description:t("table.documentation.eventDescription.actionArchive"),name:"action:archive",payload:"data: IFile"},{description:t("table.documentation.eventDescription.actionDelete"),name:"action:delete",payload:"data: IFile"},{description:t("table.documentation.eventDescription.actionDownload"),name:"action:download",payload:"data: IFile"},{description:t("table.documentation.eventDescription.actionEdit"),name:"action:edit",payload:"data: IFile"},{description:t("table.documentation.eventDescription.actionShare"),name:"action:share",payload:"data: IFile"},{description:t("table.documentation.eventDescription.actionView"),name:"action:view",payload:"data: IFile"}]),D=u(()=>[{default:"{ archive: true, delete: true, download: true, edit: true, share: true, view: true }",description:t("table.documentation.propsDescription.actionButtonsVisibility"),prop:"actionButtonsVisibility",type:"Object"},{default:"-",description:t("table.documentation.propsDescription.files"),prop:"files",type:"Array<IFile>"},{default:"-",description:t("table.documentation.propsDescription.listProps"),prop:"listProps",type:"Object"},{default:"-",description:t("table.documentation.propsDescription.locale"),prop:"locale",type:"String"},{default:"-",description:t("table.documentation.propsDescription.messages"),prop:"messages",type:"TableMessages"},{default:"list",description:t("table.documentation.propsDescription.presentation"),prop:"presentation",type:"list | table"},{default:"-",description:t("table.documentation.propsDescription.tableProps"),prop:"tableProps",type:"Object"},{default:"['actions', 'description', 'downloadCount', 'lastDownloadedAt', 'originalFileName', 'size', 'uploadedAt', 'uploadedBy']",description:t("table.documentation.propsDescription.visibleFileDetails"),prop:"visibleFileDetails",type:"string[]"}]);return(i,e)=>{const r=b("SshPre");return g(),A(F,{subtitle:i.$t("table.subtitle.filesPresentation"),title:i.$t("table.label.filesPresentation"),class:"demo"},{default:d(()=>[a("section",null,[a("h2",null,c(i.$t("table.usage.tableMode")),1),e[2]||(e[2]=o()),a("div",N,[n(l(m),{files:p,locale:String(l(s)),"visible-file-details":["originalFileName","description","size","uploadedBy","uploadedAt","downloadCount","lastDownloadedAt","actions"],presentation:"table","onAction:archive":()=>{},"onAction:delete":()=>{},"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:share":()=>{},"onAction:view":()=>{}},null,8,["locale"]),e[1]||(e[1]=o()),n(r,{language:"html-vue"},{default:d(()=>[...e[0]||(e[0]=[o(`
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
        `,-1)])]),_:1})])]),e[6]||(e[6]=o()),a("section",null,[a("h2",null,c(i.$t("table.usage.listMode")),1),e[5]||(e[5]=o()),a("div",h,[n(l(m),{"action-buttons-visibility":{archive:!1,delete:!1,download:!0,edit:!0,share:!1,view:!0},files:p,locale:l(s),"visible-file-details":["originalFileName","description","size","uploadedBy","uploadedAt","downloadCount","lastDownloadedAt","actions"],"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:view":()=>{}},null,8,["locale"]),e[4]||(e[4]=o()),n(r,{language:"html-vue"},{default:d(()=>[...e[3]||(e[3]=[o(`
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
        `,-1)])]),_:1})])]),e[7]||(e[7]=o()),n(y,{"events-data":w.value,"props-data":D.value,"props-table-title":i.$t("common.properties",{value:"FilesPresentationProperties"})},null,8,["events-data","props-data","props-table-title"])]),_:1},8,["subtitle","title"])}}});export{M as default};
