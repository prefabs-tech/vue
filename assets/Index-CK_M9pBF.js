import{d as m,L as c,e as f,o as g,j as i,C as t,f as a,h as o,u as d,X as w,v as b}from"./index-B6N9A8ln.js";import{_ as y}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-B33n00XA.js";import{_ as v}from"./UiPage.vue_vue_type_style_index_0_lang-BFxmnG7Y.js";import"./PrefabsTechVue3TanstackTable.es-CR43FMod.js";import"./PrefabsTechVue3Form.es-Di8AZxfp.js";const A={class:"section-content"},P=m({__name:"Index",setup(D){const r=[{description:"Emitted when archive action is triggered",name:"action:archive",payload:"IFile object"},{description:"Emitted when delete action is triggered",name:"action:delete",payload:"IFile object"},{description:"Emitted when download action is triggered",name:"action:download",payload:"IFile object"},{description:"Emitted when edit description is triggered",name:"action:edit",payload:"IFile object"},{description:"Emitted when share action is triggered",name:"action:share",payload:"IFile object"},{description:"Emitted when view action is triggered",name:"action:view",payload:"IFile object"}],s=[{downloadCount:5,id:1,lastDownloadedAt:Date.now(),originalFileName:"file1.png",uploadedAt:Date.now(),uploadedBy:{givenName:"Manish",lastName:"Aryal"}},{downloadCount:5,id:2,lastDownloadedAt:Date.now(),originalFileName:"document.pdf",uploadedAt:Date.now(),uploadedBy:{givenName:"Gaurav",lastName:"Sapkota"}},{downloadCount:5,id:3,lastDownloadedAt:Date.now(),originalFileName:"photo.jpeg",uploadedAt:Date.now(),uploadedBy:{givenName:"Deepak",lastName:"Aryal"}},{downloadCount:5,id:4,lastDownloadedAt:Date.now(),originalFileName:"manish.png",uploadedAt:Date.now(),uploadedBy:{givenName:"Lamdiki",lastName:"Sherpa"}}],p=[{default:`{
      archive: true,
      delete: true,
      download: true,
      edit: true,
      share: true,
      view: true
    }`,description:"Controls visibility of action buttons for all files",prop:"actionButtonsVisibility",type:"Object"},{default:"-",description:"Props for archive button",prop:"archiveButtonProps",type:"Object"},{default:"-",description:"Props for delete button",prop:"deleteButtonProps",type:"Object"},{default:"-",description:"Props for download button",prop:"downloadButtonProps",type:"Object"},{default:"-",description:"Props for edit description button",prop:"editDescriptionButtonProps",type:"Object"},{default:"-",description:"Array of file objects (required)",prop:"files",type:"Array<IFile>",required:"true"},{default:"-",description:"Custom messages for file cards",prop:"messages",type:"FileMessages"},{default:"-",description:"Props for share button",prop:"shareButtonProps",type:"Object"},{default:"true",description:"Whether to show thumbnails",prop:"showThumbnail",type:"Boolean"},{default:"-",description:"Props for view button",prop:"viewButtonProps",type:"Object"},{default:`{
      actions: true,
      description: true,
      downloadCount: true,
      lastDownloadedAt: true,
      originalFileName: true,
      size: true,
      uploadedAt: true,
      uploadedBy: true
    }`,description:"Controls visibility of file details for all files",prop:"fileDetailVisibility",type:"Object"}],u=[{description:"Slot to customize thumbnail for all files",name:"thumbnail"}];return(n,e)=>{const l=c("SshPre");return g(),f(v,{"sub-title":n.$t("ui.filesList.subtitle"),title:n.$t("ui.filesList.title"),class:"demo-files-list"},{toolbar:i(()=>[o(d(b),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=h=>n.$router.push("/ui"))},null,8,["label"])]),default:i(()=>[e[4]||(e[4]=t()),a("section",null,[a("div",A,[o(d(w),{"action-buttons-visibility":{download:!0,view:!0},files:s}),e[2]||(e[2]=t()),o(l,{language:"html-vue"},{default:i(()=>e[1]||(e[1]=[t(`
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
          import { FileList } from "@prefabs.tech/vue3-ui";

          import type { IFile } from "@prefabs.tech/vue3-ui";

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
        `)])),_:1})])]),e[5]||(e[5]=t()),o(y,{"events-data":r,"props-data":p,"props-table-title":n.$t("common.properties",{value:"FilesListProperties"}),"slots-data":u},null,8,["props-table-title"]),e[6]||(e[6]=t()),a("section",null,[o(l,{language:"html-vue"},{default:i(()=>e[3]||(e[3]=[t(`
        interface IFile {
          id: number | string;
          originalFileName: string;
          description?: string;
          size?: number;
          uploadedBy: any;
          uploadedAt: number;
          downloadCount?: number;
          lastDownloadedAt?: number;
        }

        type FileMessages = {
          archiveAction?: string;
          archiveConfirmationHeader?: string;
          archiveConfirmationMessage?: string;
          downloadAction?: string;
          editDescriptionAction?: string;
          renameAction?: string;
          deleteAction?: string;
          deleteConfirmationHeader?: string;
          deleteConfirmationMessage?: string;
          downloadCountHeader?: string;
          lastDownloadedAtHeader?: string;
          uploadedByHeader?: string;
          uploadedAtHeader?: string;
          shareAction?: string;
          viewAction?: string;
        };
      `)])),_:1})])]),_:1},8,["sub-title","title"])}}});export{P as default};
