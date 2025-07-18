import{d as h,I as C,e as A,o as B,i as a,D as t,f as n,g as i,t as d,u as r,O as u,v as F}from"./index-DGEdpNlT.js";import{_ as P}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-w-1MG47i.js";import{_ as D}from"./UiPage.vue_vue_type_style_index_0_lang-CJfgoDj8.js";import"./DzangolabVue3TanstackTable.es-BzFwKY2H.js";import"./DzangolabVue3Form.es-DymaP3TR.js";const z={class:"section-content"},H={class:"section-content"},j={class:"section-content"},N={class:"section-content"},T=h({__name:"Index",setup(I){const p={severity:"warning",size:"medium",variant:"outlined"},m={severity:"danger",size:"medium",variant:"outlined"},f={severity:"primary",size:"medium",variant:"outlined"},c=[{description:"Emitted when edit description button is clicked",name:"click:editDescription",payload:"-"},{description:"Emitted when archive action is confirmed",name:"on:archive",payload:"File object"},{description:"Emitted when delete action is confirmed",name:"on:delete",payload:"File object"},{description:"Emitted when download button is clicked",name:"on:download",payload:"File object"},{description:"Emitted when share button is clicked",name:"on:share",payload:"File object"},{description:"Emitted when view button is clicked",name:"on:view",payload:"File object"}],v=[{description:"Slot for custom thumbnail content",name:"thumbnail"}],l={description:"This is a file",downloadCount:0,id:1,lastDownloadedAt:Date.now(),originalFileName:"file.png",size:4,uploadedBy:{givenName:"Test",lastName:"user"},uploadedAt:Date.now()},b={archiveAction:"Archive file",archiveConfirmationHeader:"Confirm archive?",archiveConfirmationMessage:"Are you sure to archive this file?",deleteAction:"Delete file",deleteConfirmationHeader:"Confirm delete?",deleteConfirmationMessage:"Are you sure to delete this file?",downloadAction:"Download file",downloadCountHeader:"Download count:",lastDownloadedAtHeader:"Last downloaded date:",shareAction:"Share file",uploadedAtHeader:"Uploaded date:",uploadedByHeader:"Uploaded by:",viewAction:"View file"},g=[{default:`{
      archive: true,
      delete: true,
      download: true,
      share: true,
      view: true
    }`,description:"Controls visibility of action buttons",prop:"actionButtonsVisibility",type:"Object"},{default:"false",description:"Whether to show edit description button",prop:"allowEditDescription",type:"Boolean"},{default:"-",description:"Props for archive button",prop:"archiveButtonProps",type:"Object"},{default:"-",description:"Props for delete button",prop:"deleteButtonProps",type:"Object"},{default:"-",description:"Props for download button",prop:"downloadButtonProps",type:"Object"},{default:"-",description:"Props for edit description button",prop:"editDescriptionButtonProps",type:"Object"},{default:"-",description:"File data object (required)",prop:"file",type:"IFile"},{default:"-",description:"Custom messages for action labels and confirmation headers",prop:"messages",type:"FileMessages"},{default:"-",description:"Props for share button",prop:"shareButtonProps",type:"Object"},{default:"true",description:"Whether to show file thumbnail",prop:"showThumbnail",type:"Boolean"},{default:"-",description:"Props for view button",prop:"viewButtonProps",type:"Object"},{default:`{
      actions: true,
      description: true,
      downloadCount: true,
      lastDownloadedAt: true,
      originalFileName: true,
      size: true,
      uploadedAt: true,
      uploadedBy: true
    }`,description:"Controls visibility of file details",prop:"visibilityDetail",type:"Object"}],w={severity:"alternate",size:"medium",variant:"outlined"},y={severity:"secondary",size:"medium",variant:"outlined"};return(o,e)=>{const s=C("SshPre");return B(),A(D,{"sub-title":o.$t("ui.fileCard.subtitle"),title:o.$t("ui.fileCard.title"),class:"demo-file-card"},{toolbar:a(()=>[i(r(F),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=$=>o.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[e[14]||(e[14]=t()),n("section",null,[n("h2",null,d(o.$t("ui.fileCard.usage.basic")),1),e[3]||(e[3]=t()),n("div",z,[i(r(u),{file:l}),e[2]||(e[2]=t()),i(s,{language:"html-vue"},{default:a(()=>e[1]||(e[1]=[t(`
          <template>
            <FileCard :file="file" />
          </template>

          <script setup lang="ts">
          import { FileCard } from "@dzangolab/vue3-ui";

          import type { IFile } from "@dzangolab/vue3-ui";

          const file = {
            description: "This is a file",
            downloadCount: 0,
            id: 1,
            lastDownloadedAt: Date.now(),
            originalFileName: "file.png",
            size: 4,
            uploadedBy: { givenName: "Test", lastName: "user" },
            uploadedAt: Date.now(),
          } as IFile;
          <\/script>
        `)])),_:1})])]),e[15]||(e[15]=t()),n("section",null,[n("h2",null,d(o.$t("ui.fileCard.usage.messages")),1),e[6]||(e[6]=t()),n("div",H,[i(r(u),{file:l,messages:b}),e[5]||(e[5]=t()),i(s,{language:"html-vue"},{default:a(()=>e[4]||(e[4]=[t(`
          <template>
            <FileCard :file="file" :messages="messages" />
          </template>

          <script setup lang="ts">
          import { FileCard } from "@dzangolab/vue3-ui";

          import type { FileMessages, IFile } from "@dzangolab/vue3-ui";

          const file = {
            ...
          } as IFile;

          const messages = {
            archiveAction: "Archive file",
            archiveConfirmationHeader: "Confirm archive?",
            archiveConfirmationMessage: "Are you sure to archive this file?",
            deleteAction: "Delete file",
            deleteConfirmationHeader: "Confirm delete?",
            deleteConfirmationMessage: "Are you sure to delete this file?",
            downloadAction: "Download file",
            downloadCountHeader: "Download count:",
            lastDownloadedAtHeader: "Last downloaded date:",
            shareAction: "Share file",
            uploadedAtHeader: "Uploaded date:",
            uploadedByHeader: "Uploaded by:",
            viewAction: "View file",
          } as FileMessages;
          <\/script>
        `)])),_:1})])]),e[16]||(e[16]=t()),n("section",null,[n("h2",null,d(o.$t("ui.fileCard.usage.buttonProps")),1),e[9]||(e[9]=t()),n("div",j,[i(r(u),{"archive-button-props":p,"delete-button-props":m,"download-button-props":f,file:l,"share-button-props":w,"view-button-props":y}),e[8]||(e[8]=t()),i(s,{language:"html-vue"},{default:a(()=>e[7]||(e[7]=[t(`
          <template>
            <FileCard
            :archive-button-props="archiveButtonProps"
            :delete-button-props="deleteButtonProps"
            :download-button-props="downloadButtonProps"
            :file="file"
            :share-button-props="shareButtonProps"
            :view-button-props="viewButtonProps"
            />
          </template>

          <script setup lang="ts">
          import { FileCard } from "@dzangolab/vue3-ui";

          import type { FileMessages, IFile } from "@dzangolab/vue3-ui";

          const archiveButtonProps = {
            severity: "warning",
            size: "medium",
            variant: "outlined",
          };

          const deleteButtonProps = {
            severity: "danger",
            size: "medium",
            variant: "outlined",
          };

          const downloadButtonProps = {
            severity: "primary",
            size: "medium",
            variant: "outlined",
          };

          const file = {
            ...
          } as IFile;

          const shareButtonProps = {
            severity: "alternate",
            size: "medium",
            variant: "outlined",
          };

          const viewButtonProps = {
            severity: "secondary",
            size: "medium",
            variant: "outlined",
          };
        `)])),_:1})])]),e[17]||(e[17]=t()),n("section",null,[n("h2",null,d(o.$t("ui.fileCard.usage.visibilityDetail")),1),e[12]||(e[12]=t()),n("div",N,[i(r(u),{"action-buttons-visibility":{archive:!1,delete:!0,download:!0,share:!1,view:!0},file:l,"visibility-detail":{actions:!0,description:!1,downloadCount:!0,lastDownloadedAt:!1,originalFileName:!0,size:!1,uploadedAt:!0,uploadedBy:!0}}),e[11]||(e[11]=t()),i(s,{language:"html-vue"},{default:a(()=>e[10]||(e[10]=[t(`
          <template>
            <FileCard
              :action-buttons-visibility="{
                archive: false,
                delete: true,
                download: true,
                share: false,
                view: true,
              }"
              :file="file"
              :visibility-detail="{
                actions: true,
                description: false,
                downloadCount: true,
                lastDownloadedAt: false,
                originalFileName: true,
                size: false,
                uploadedAt: true,
                uploadedBy: true,
              }"
            />
          </template>

          <script setup lang="ts">
          import { FileCard } from "@dzangolab/vue3-ui";

          import type { IFile } from "@dzangolab/vue3-ui";

          const file = {
            ...
          } as IFile;
        `)])),_:1})])]),e[18]||(e[18]=t()),i(P,{"events-data":c,"props-data":g,"props-table-title":o.$t("common.properties",{value:"FileCardProperties"}),"slots-data":v},null,8,["props-table-title"]),e[19]||(e[19]=t()),n("section",null,[i(s,{language:"html-vue"},{default:a(()=>e[13]||(e[13]=[t(`
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
      `)])),_:1})])]),_:1},8,["sub-title","title"])}}});export{T as default};
