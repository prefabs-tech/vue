import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,v as c}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{E as l}from"./PrefabsTechVue3UI.es-EJDYzbRH.js";import{t as u}from"./ComponentDocumentation-CFBF3GmY.js";import{t as d}from"./UiPage-eTNUnuuQ.js";var f={class:`section-content`},p=a({name:`FilesListDemo`,setup(a){let p=[{description:`Emitted when archive action is triggered`,name:`action:archive`,payload:`IFile object`},{description:`Emitted when delete action is triggered`,name:`action:delete`,payload:`IFile object`},{description:`Emitted when download action is triggered`,name:`action:download`,payload:`IFile object`},{description:`Emitted when edit description is triggered`,name:`action:edit`,payload:`IFile object`},{description:`Emitted when share action is triggered`,name:`action:share`,payload:`IFile object`},{description:`Emitted when view action is triggered`,name:`action:view`,payload:`IFile object`}],m=[{downloadCount:5,id:1,lastDownloadedAt:Date.now(),originalFileName:`file1.png`,uploadedAt:Date.now(),uploadedBy:{givenName:`Manish`,lastName:`Aryal`}},{downloadCount:5,id:2,lastDownloadedAt:Date.now(),originalFileName:`document.pdf`,uploadedAt:Date.now(),uploadedBy:{givenName:`Gaurav`,lastName:`Sapkota`}},{downloadCount:5,id:3,lastDownloadedAt:Date.now(),originalFileName:`photo.jpeg`,uploadedAt:Date.now(),uploadedBy:{givenName:`Deepak`,lastName:`Aryal`}},{downloadCount:5,id:4,lastDownloadedAt:Date.now(),originalFileName:`manish.png`,uploadedAt:Date.now(),uploadedBy:{givenName:`Lamdiki`,lastName:`Sherpa`}}],h=[{default:`{
      archive: true,
      delete: true,
      download: true,
      edit: true,
      share: true,
      view: true
    }`,description:`Controls visibility of action buttons for all files`,prop:`actionButtonsVisibility`,type:`Object`},{default:`-`,description:`Props for archive button`,prop:`archiveButtonProps`,type:`Object`},{default:`-`,description:`Props for delete button`,prop:`deleteButtonProps`,type:`Object`},{default:`-`,description:`Props for download button`,prop:`downloadButtonProps`,type:`Object`},{default:`-`,description:`Props for edit description button`,prop:`editDescriptionButtonProps`,type:`Object`},{default:`-`,description:`Array of file objects (required)`,prop:`files`,required:`true`,type:`Array<IFile>`},{default:`-`,description:`Custom messages for file cards`,prop:`messages`,type:`FileMessages`},{default:`-`,description:`Props for share button`,prop:`shareButtonProps`,type:`Object`},{default:`true`,description:`Whether to show thumbnails`,prop:`showThumbnail`,type:`Boolean`},{default:`-`,description:`Props for view button`,prop:`viewButtonProps`,type:`Object`},{default:`{
      actions: true,
      description: true,
      downloadCount: true,
      lastDownloadedAt: true,
      originalFileName: true,
      size: true,
      uploadedAt: true,
      uploadedBy: true
    }`,description:`Controls visibility of file details for all files`,prop:`fileDetailVisibility`,type:`Object`}],g=[{description:`Slot to customize thumbnail for all files`,name:`thumbnail`}];return(a,_)=>{let v=r(`SshPre`);return o(),c(d,{subtitle:a.$t(`ui.filesList.subtitle`),title:a.$t(`ui.filesList.title`),class:`demo-files-list`},{default:s(()=>[i(`section`,null,[i(`div`,f,[e(n(l),{"action-buttons-visibility":{download:!0,view:!0},files:m}),_[1]||=t(),e(v,{language:`html-vue`},{default:s(()=>[..._[0]||=[t(`
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
        `,-1)]]),_:1})])]),_[3]||=t(),e(u,{"events-data":p,"props-data":h,"props-table-title":a.$t(`common.properties`,{value:`FilesListProperties`}),"slots-data":g},null,8,[`props-table-title`]),_[4]||=t(),i(`section`,null,[e(v,{language:`html-vue`},{default:s(()=>[..._[2]||=[t(`
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
      `,-1)]]),_:1})])]),_:1},8,[`subtitle`,`title`])}}});export{p as default};