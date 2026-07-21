import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,tr as c,v as l}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{t as u}from"./PrefabsTechVue3UI.es-EJDYzbRH.js";import{T as d}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{t as f}from"./ComponentDocumentation-CFBF3GmY.js";import{t as p}from"./UiPage-eTNUnuuQ.js";var m={class:`section-content`},h={class:`section-content`},g={class:`section-content`},_={class:`section-content`},v=a({name:`FileCardDemo`,setup(a){let{locale:v}=d(),y={severity:`warning`,size:`medium`,variant:`outlined`},b={severity:`danger`,size:`medium`,variant:`outlined`},x={severity:`primary`,size:`medium`,variant:`outlined`},S=[{description:`Emitted when edit description button is clicked`,name:`click:editDescription`,payload:`-`},{description:`Emitted when archive action is confirmed`,name:`on:archive`,payload:`File object`},{description:`Emitted when delete action is confirmed`,name:`on:delete`,payload:`File object`},{description:`Emitted when download button is clicked`,name:`on:download`,payload:`File object`},{description:`Emitted when share button is clicked`,name:`on:share`,payload:`File object`},{description:`Emitted when view button is clicked`,name:`on:view`,payload:`File object`}],C=[{description:`Slot for custom thumbnail content`,name:`thumbnail`}],w={description:`This is a file`,downloadCount:0,id:1,lastDownloadedAt:Date.now(),originalFileName:`file.png`,size:4,uploadedAt:Date.now(),uploadedBy:{givenName:`Test`,lastName:`user`}},T={archiveAction:`Archive file`,archiveConfirmationHeader:`Confirm archive?`,archiveConfirmationMessage:`Are you sure to archive this file?`,deleteAction:`Delete file`,deleteConfirmationHeader:`Confirm delete?`,deleteConfirmationMessage:`Are you sure to delete this file?`,downloadAction:`Download file`,downloadCountHeader:`Download count:`,lastDownloadedAtHeader:`Last downloaded date:`,shareAction:`Share file`,uploadedAtHeader:`Uploaded date:`,uploadedByHeader:`Uploaded by:`,viewAction:`View file`},E=[{default:`{
      archive: true,
      delete: true,
      download: true,
      share: true,
      view: true
    }`,description:`Controls visibility of action buttons`,prop:`actionButtonsVisibility`,type:`Object`},{default:`false`,description:`Whether to show edit description button`,prop:`allowEditDescription`,type:`Boolean`},{default:`-`,description:`Props for archive button`,prop:`archiveButtonProps`,type:`Object`},{default:`-`,description:`Props for delete button`,prop:`deleteButtonProps`,type:`Object`},{default:`-`,description:`Props for download button`,prop:`downloadButtonProps`,type:`Object`},{default:`-`,description:`Props for edit description button`,prop:`editDescriptionButtonProps`,type:`Object`},{default:`-`,description:`File data object (required)`,prop:`file`,type:`IFile`},{default:`-`,description:`Custom messages for action labels and confirmation headers`,prop:`messages`,type:`FileMessages`},{default:`-`,description:`Props for share button`,prop:`shareButtonProps`,type:`Object`},{default:`true`,description:`Whether to show file thumbnail`,prop:`showThumbnail`,type:`Boolean`},{default:`-`,description:`Props for view button`,prop:`viewButtonProps`,type:`Object`},{default:`{
      actions: true,
      description: true,
      downloadCount: true,
      lastDownloadedAt: true,
      originalFileName: true,
      size: true,
      uploadedAt: true,
      uploadedBy: true
    }`,description:`Controls visibility of file details`,prop:`visibilityDetail`,type:`Object`}],D={severity:`alternate`,size:`medium`,variant:`outlined`},O={severity:`secondary`,size:`medium`,variant:`outlined`};return(a,d)=>{let k=r(`SshPre`);return o(),l(p,{subtitle:a.$t(`ui.fileCard.subtitle`),title:a.$t(`ui.fileCard.title`),class:`demo-file-card`},{default:s(()=>[i(`section`,null,[i(`h2`,null,c(a.$t(`ui.fileCard.usage.basic`)),1),d[2]||=t(),i(`div`,m,[e(n(u),{file:w,locale:String(n(v))},null,8,[`locale`]),d[1]||=t(),e(k,{language:`html-vue`},{default:s(()=>[...d[0]||=[t(`
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
        `,-1)]]),_:1})])]),d[13]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.fileCard.usage.messages`)),1),d[5]||=t(),i(`div`,h,[e(n(u),{file:w,locale:String(n(v)),messages:T},null,8,[`locale`]),d[4]||=t(),e(k,{language:`html-vue`},{default:s(()=>[...d[3]||=[t(`
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
        `,-1)]]),_:1})])]),d[14]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.fileCard.usage.buttonProps`)),1),d[8]||=t(),i(`div`,g,[e(n(u),{"archive-button-props":y,"delete-button-props":b,"download-button-props":x,locale:String(n(v)),file:w,"share-button-props":D,"view-button-props":O},null,8,[`locale`]),d[7]||=t(),e(k,{language:`html-vue`},{default:s(()=>[...d[6]||=[t(`
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
        `,-1)]]),_:1})])]),d[15]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.fileCard.usage.visibilityDetail`)),1),d[11]||=t(),i(`div`,_,[e(n(u),{"action-buttons-visibility":{archive:!1,delete:!0,download:!0,share:!1,view:!0},file:w,locale:String(n(v)),"visibility-detail":{actions:!0,description:!1,downloadCount:!0,lastDownloadedAt:!1,originalFileName:!0,size:!1,uploadedAt:!0,uploadedBy:!0}},null,8,[`locale`]),d[10]||=t(),e(k,{language:`html-vue`},{default:s(()=>[...d[9]||=[t(`
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
        `,-1)]]),_:1})])]),d[16]||=t(),e(f,{"events-data":S,"props-data":E,"props-table-title":a.$t(`common.properties`,{value:`FileCardProperties`}),"slots-data":C},null,8,[`props-table-title`]),d[17]||=t(),i(`section`,null,[e(k,{language:`html-vue`},{default:s(()=>[...d[12]||=[t(`
        interface IFile {
          id: number | string;
          originalFileName: string;
          description?: string;
          size?: number;
          uploadedBy: Record<string, string>;
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
      `,-1)]]),_:1})])]),_:1},8,[`subtitle`,`title`])}}});export{v as default};