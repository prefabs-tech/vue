import{d as y,H as C,e as b,o as c,h as a,C as n,f as t,t as d,g as i,u as l,N as u,p as A}from"./index-B0WoFnxH.js";import{_ as B}from"./UiPage.vue_vue_type_style_index_0_lang-Diujfw7R.js";const z={class:"section-content"},F={class:"section-content"},h={class:"section-content"},D={class:"section-content"},$=y({__name:"Index",setup(P){const p={severity:"warning",size:"medium",variant:"outlined"},m={severity:"danger",size:"medium",variant:"outlined"},f={severity:"primary",size:"medium",variant:"outlined"},s={description:"This is a file",downloadCount:0,id:1,lastDownloadedAt:Date.now(),originalFileName:"file.png",size:4,uploadedBy:{givenName:"Test",lastName:"user"},uploadedAt:Date.now()},v={archiveAction:"Archive file",archiveConfirmationHeader:"Confirm archive?",archiveConfirmationMessage:"Are you sure to archive this file?",deleteAction:"Delete file",deleteConfirmationHeader:"Confirm delete?",deleteConfirmationMessage:"Are you sure to delete this file?",downloadAction:"Download file",downloadCountHeader:"Download count:",lastDownloadedAtHeader:"Last downloaded date:",shareAction:"Share file",uploadedAtHeader:"Uploaded date:",uploadedByHeader:"Uploaded by:",viewAction:"View file"},g={severity:"alternate",size:"medium",variant:"outlined"},w={severity:"secondary",size:"medium",variant:"outlined"};return(o,e)=>{const r=C("SshPre");return c(),b(B,{title:o.$t("ui.fileCard.title"),class:"demo"},{toolbar:a(()=>[i(l(A),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=H=>o.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[e[13]||(e[13]=n()),t("section",null,[t("h2",null,d(o.$t("ui.fileCard.usage.basic")),1),e[3]||(e[3]=n()),t("div",z,[i(l(u),{file:s}),e[2]||(e[2]=n()),i(r,{language:"html-vue"},{default:a(()=>e[1]||(e[1]=[n(`
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
        `)])),_:1})])]),e[14]||(e[14]=n()),t("section",null,[t("h2",null,d(o.$t("ui.fileCard.usage.messages")),1),e[6]||(e[6]=n()),t("div",F,[i(l(u),{file:s,messages:v}),e[5]||(e[5]=n()),i(r,{language:"html-vue"},{default:a(()=>e[4]||(e[4]=[n(`
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
        `)])),_:1})])]),e[15]||(e[15]=n()),t("section",null,[t("h2",null,d(o.$t("ui.fileCard.usage.buttonProps")),1),e[9]||(e[9]=n()),t("div",h,[i(l(u),{"archive-button-props":p,"delete-button-props":m,"download-button-props":f,file:s,"share-button-props":g,"view-button-props":w}),e[8]||(e[8]=n()),i(r,{language:"html-vue"},{default:a(()=>e[7]||(e[7]=[n(`
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
        `)])),_:1})])]),e[16]||(e[16]=n()),t("section",null,[t("h2",null,d(o.$t("ui.fileCard.usage.visibilityDetail")),1),e[12]||(e[12]=n()),t("div",D,[i(l(u),{"action-buttons-visibility":{archive:!1,delete:!0,download:!0,share:!1,view:!0},file:s,"visibility-detail":{actions:!0,description:!1,downloadCount:!0,lastDownloadedAt:!1,originalFileName:!0,size:!1,uploadedAt:!0,uploadedBy:!0}}),e[11]||(e[11]=n()),i(r,{language:"html-vue"},{default:a(()=>e[10]||(e[10]=[n(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{$ as default};
