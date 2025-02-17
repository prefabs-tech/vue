import{d as g,J as w,o as y,c as C,w as a,K as i,D as t,ao as b,W as e,f as n,L as r,az as d}from"./index-729398ab-b294403d.js";import{_ as A}from"./UiPage.vue_vue_type_style_index_0_lang-ae0d4afa.js";const z={class:"section-content"},B={class:"section-content"},F={class:"section-content"},D={class:"section-content"},I=g({__name:"Index",setup(P){const p={severity:"warning",size:"medium",variant:"outlined"},c={severity:"danger",size:"medium",variant:"outlined"},m={severity:"primary",size:"medium",variant:"outlined"},l={description:"This is a file",downloadCount:0,id:1,lastDownloadedAt:Date.now(),originalFileName:"file.png",size:4,uploadedBy:{givenName:"Test",lastName:"user"},uploadedAt:Date.now()},f={archiveAction:"Archive file",archiveConfirmationHeader:"Confirm archive?",archiveConfirmationMessage:"Are you sure to archive this file?",deleteAction:"Delete file",deleteConfirmationHeader:"Confirm delete?",deleteConfirmationMessage:"Are you sure to delete this file?",downloadAction:"Download file",downloadCountHeader:"Download count:",lastDownloadedAtHeader:"Last downloaded date:",shareAction:"Share file",uploadedAtHeader:"Uploaded date:",uploadedByHeader:"Uploaded by:",viewAction:"View file"},v={severity:"alternate",size:"medium",variant:"outlined"},h={severity:"secondary",size:"medium",variant:"outlined"};return(o,u)=>{const s=w("SshPre");return y(),C(A,{title:o.$t("ui.fileCard.title"),class:"demo"},{toolbar:a(()=>[i(t(b),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:u[0]||(u[0]=_=>o.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[e(),n("section",null,[n("h2",null,r(o.$t("ui.fileCard.usage.basic")),1),e(),n("div",z,[i(t(d),{file:t(l)},null,8,["file"]),e(),i(s,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,r(o.$t("ui.fileCard.usage.messages")),1),e(),n("div",B,[i(t(d),{file:t(l),messages:t(f)},null,8,["file","messages"]),e(),i(s,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,r(o.$t("ui.fileCard.usage.buttonProps")),1),e(),n("div",F,[i(t(d),{"archive-button-props":p,"delete-button-props":c,"download-button-props":m,file:t(l),"share-button-props":v,"view-button-props":h},null,8,["file"]),e(),i(s,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,r(o.$t("ui.fileCard.usage.visibilityDetail")),1),e(),n("div",D,[i(t(d),{"action-buttons-visibility":{archive:!1,delete:!0,download:!0,share:!1,view:!0},file:t(l),"visibility-detail":{actions:!0,description:!1,downloadCount:!0,lastDownloadedAt:!1,originalFileName:!0,size:!1,uploadedAt:!0,uploadedBy:!0}},null,8,["file"]),e(),i(s,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{I as default};
