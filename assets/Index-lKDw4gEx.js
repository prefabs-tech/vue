import{d as C,I as A,J as B,e as F,o as P,i as s,f as n,B as t,h as i,t as u,u as o,P as p}from"./index-DoIY9s04.js";import{_ as D}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BduynALj.js";import{_ as I}from"./UiPage.vue_vue_type_style_index_0_lang-DrtmNUAy.js";import"./PrefabsTechVue3TanstackTable.es-CRmWjXeO.js";import"./PrefabsTechVue3Form.es-DfEd4Dds.js";const H={class:"section-content"},z={class:"section-content"},j={class:"section-content"},S={class:"section-content"},T=C({__name:"Index",setup(N){const{locale:l}=A(),c={severity:"warning",size:"medium",variant:"outlined"},m={severity:"danger",size:"medium",variant:"outlined"},f={severity:"primary",size:"medium",variant:"outlined"},v=[{description:"Emitted when edit description button is clicked",name:"click:editDescription",payload:"-"},{description:"Emitted when archive action is confirmed",name:"on:archive",payload:"File object"},{description:"Emitted when delete action is confirmed",name:"on:delete",payload:"File object"},{description:"Emitted when download button is clicked",name:"on:download",payload:"File object"},{description:"Emitted when share button is clicked",name:"on:share",payload:"File object"},{description:"Emitted when view button is clicked",name:"on:view",payload:"File object"}],b=[{description:"Slot for custom thumbnail content",name:"thumbnail"}],d={description:"This is a file",downloadCount:0,id:1,lastDownloadedAt:Date.now(),originalFileName:"file.png",size:4,uploadedBy:{givenName:"Test",lastName:"user"},uploadedAt:Date.now()},g={archiveAction:"Archive file",archiveConfirmationHeader:"Confirm archive?",archiveConfirmationMessage:"Are you sure to archive this file?",deleteAction:"Delete file",deleteConfirmationHeader:"Confirm delete?",deleteConfirmationMessage:"Are you sure to delete this file?",downloadAction:"Download file",downloadCountHeader:"Download count:",lastDownloadedAtHeader:"Last downloaded date:",shareAction:"Share file",uploadedAtHeader:"Uploaded date:",uploadedByHeader:"Uploaded by:",viewAction:"View file"},w=[{default:`{
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
    }`,description:"Controls visibility of file details",prop:"visibilityDetail",type:"Object"}],y={severity:"alternate",size:"medium",variant:"outlined"},h={severity:"secondary",size:"medium",variant:"outlined"};return(a,e)=>{const r=B("SshPre");return P(),F(I,{subtitle:a.$t("ui.fileCard.subtitle"),title:a.$t("ui.fileCard.title"),class:"demo-file-card"},{default:s(()=>[n("section",null,[n("h2",null,u(a.$t("ui.fileCard.usage.basic")),1),e[2]||(e[2]=t()),n("div",H,[i(o(p),{file:d,locale:String(o(l))},null,8,["locale"]),e[1]||(e[1]=t()),i(r,{language:"html-vue"},{default:s(()=>e[0]||(e[0]=[t(`
          <template>
            <FileCard :file="file" :locale="String(locale)" />
          </template>

          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { FileCard } from "@prefabs.tech/vue3-ui";

          import type { FileMessages, IFile } from "@prefabs.tech/vue3-ui";

          const { locale } = useI18n();

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
        `)])),_:1})])]),e[13]||(e[13]=t()),n("section",null,[n("h2",null,u(a.$t("ui.fileCard.usage.messages")),1),e[5]||(e[5]=t()),n("div",z,[i(o(p),{file:d,locale:String(o(l)),messages:g},null,8,["locale"]),e[4]||(e[4]=t()),i(r,{language:"html-vue"},{default:s(()=>e[3]||(e[3]=[t(`
          <template>
            <FileCard :file="file" :locale="String(locale)" :messages="messages" />
          </template>

          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { FileCard } from "@prefabs.tech/vue3-ui";

          import type { FileMessages, IFile } from "@prefabs.tech/vue3-ui";

          const { locale } = useI18n();

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
        `)])),_:1})])]),e[14]||(e[14]=t()),n("section",null,[n("h2",null,u(a.$t("ui.fileCard.usage.buttonProps")),1),e[8]||(e[8]=t()),n("div",j,[i(o(p),{"archive-button-props":c,"delete-button-props":m,"download-button-props":f,locale:String(o(l)),file:d,"share-button-props":y,"view-button-props":h},null,8,["locale"]),e[7]||(e[7]=t()),i(r,{language:"html-vue"},{default:s(()=>e[6]||(e[6]=[t(`
          <template>
            <FileCard
            :archive-button-props="archiveButtonProps"
            :delete-button-props="deleteButtonProps"
            :download-button-props="downloadButtonProps"
            :locale="String(locale)"
            :file="file"
            :share-button-props="shareButtonProps"
            :view-button-props="viewButtonProps"
            />
          </template>

          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { FileCard } from "@prefabs.tech/vue3-ui";

          import type { FileMessages, IFile } from "@prefabs.tech/vue3-ui";

          const { locale } = useI18n();

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
        `)])),_:1})])]),e[15]||(e[15]=t()),n("section",null,[n("h2",null,u(a.$t("ui.fileCard.usage.visibilityDetail")),1),e[11]||(e[11]=t()),n("div",S,[i(o(p),{"action-buttons-visibility":{archive:!1,delete:!0,download:!0,share:!1,view:!0},file:d,locale:String(o(l)),"visibility-detail":{actions:!0,description:!1,downloadCount:!0,lastDownloadedAt:!1,originalFileName:!0,size:!1,uploadedAt:!0,uploadedBy:!0}},null,8,["locale"]),e[10]||(e[10]=t()),i(r,{language:"html-vue"},{default:s(()=>e[9]||(e[9]=[t(`
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
              :locale="String(locale)"
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
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { FileCard } from "@prefabs.tech/vue3-ui";

          import type { IFile } from "@prefabs.tech/vue3-ui";

          const { locale } = useI18n();

          const file = {
            ...
          } as IFile;
        `)])),_:1})])]),e[16]||(e[16]=t()),i(D,{"events-data":v,"props-data":w,"props-table-title":a.$t("common.properties",{value:"FileCardProperties"}),"slots-data":b},null,8,["props-table-title"]),e[17]||(e[17]=t()),n("section",null,[i(r,{language:"html-vue"},{default:s(()=>e[12]||(e[12]=[t(`
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
      `)])),_:1})])]),_:1},8,["subtitle","title"])}}});export{T as default};
