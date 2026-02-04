import{d as u,N as m,o as c,e as f,f as i,h as a,a as n,u as g,J as w,A as t}from"./index-DVqVAY7Y.js";import{_ as b}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-NEluZ70T.js";import{_ as y}from"./UiPage.vue_vue_type_style_index_0_lang-C3MX5W1D.js";import"./PrefabsTechVue3TanstackTable.es-DtQsdL6M.js";import"./PrefabsTechVue3Form.es-Cji55RSf.js";const v={class:"section-content"},C=u({__name:"Index",setup(h){const l=[{description:"Emitted when archive action is triggered",name:"action:archive",payload:"IFile object"},{description:"Emitted when delete action is triggered",name:"action:delete",payload:"IFile object"},{description:"Emitted when download action is triggered",name:"action:download",payload:"IFile object"},{description:"Emitted when edit description is triggered",name:"action:edit",payload:"IFile object"},{description:"Emitted when share action is triggered",name:"action:share",payload:"IFile object"},{description:"Emitted when view action is triggered",name:"action:view",payload:"IFile object"}],s=[{downloadCount:5,id:1,lastDownloadedAt:Date.now(),originalFileName:"file1.png",uploadedAt:Date.now(),uploadedBy:{givenName:"Manish",lastName:"Aryal"}},{downloadCount:5,id:2,lastDownloadedAt:Date.now(),originalFileName:"document.pdf",uploadedAt:Date.now(),uploadedBy:{givenName:"Gaurav",lastName:"Sapkota"}},{downloadCount:5,id:3,lastDownloadedAt:Date.now(),originalFileName:"photo.jpeg",uploadedAt:Date.now(),uploadedBy:{givenName:"Deepak",lastName:"Aryal"}},{downloadCount:5,id:4,lastDownloadedAt:Date.now(),originalFileName:"manish.png",uploadedAt:Date.now(),uploadedBy:{givenName:"Lamdiki",lastName:"Sherpa"}}],r=[{default:`{
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
    }`,description:"Controls visibility of file details for all files",prop:"fileDetailVisibility",type:"Object"}],p=[{description:"Slot to customize thumbnail for all files",name:"thumbnail"}];return(o,e)=>{const d=m("SshPre");return c(),f(y,{subtitle:o.$t("ui.filesList.subtitle"),title:o.$t("ui.filesList.title"),class:"demo-files-list"},{default:i(()=>[a("section",null,[a("div",v,[n(g(w),{"action-buttons-visibility":{download:!0,view:!0},files:s}),e[1]||(e[1]=t()),n(d,{language:"html-vue"},{default:i(()=>[...e[0]||(e[0]=[t(`
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
        `,-1)])]),_:1})])]),e[3]||(e[3]=t()),n(b,{"events-data":l,"props-data":r,"props-table-title":o.$t("common.properties",{value:"FilesListProperties"}),"slots-data":p},null,8,["props-table-title"]),e[4]||(e[4]=t()),a("section",null,[n(d,{language:"html-vue"},{default:i(()=>[...e[2]||(e[2]=[t(`
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
      `,-1)])]),_:1})])]),_:1},8,["subtitle","title"])}}});export{C as default};
