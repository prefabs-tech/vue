import{D as e,E as t,On as n,St as r,_ as i,g as a,k as o,mt as s,qt as c,tr as l,v as u}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{T as d}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{n as f}from"./PrefabsTechVue3TanstackTable.es-Dqv6JrPc.js";import{t as p}from"./ComponentDocumentation-CFBF3GmY.js";import{t as m}from"./TablePage-CBOXTkXx.js";var h={class:`section-content`},g={class:`section-content`},_=o({name:`FilesPresentationDemo`,setup(o){let{locale:_,t:v}=d(),y=[{description:`File description`,downloadCount:5,id:1,lastDownloadedAt:Date.now(),originalFileName:`file1.png`,size:100,uploadedAt:Date.now(),uploadedBy:{givenName:`Manish`,lastName:`Aryal`}},{description:`File description`,downloadCount:5,id:2,lastDownloadedAt:Date.now(),originalFileName:`document.pdf`,uploadedAt:Date.now(),uploadedBy:{givenName:`Gaurav`,lastName:`Sapkota`}},{description:`File description`,downloadCount:5,id:3,lastDownloadedAt:Date.now(),originalFileName:`photo.jpeg`,uploadedAt:Date.now(),uploadedBy:{givenName:`Deepak`,lastName:`Aryal`}},{description:`File description`,downloadCount:5,id:4,lastDownloadedAt:Date.now(),originalFileName:`manish.png`,uploadedAt:Date.now(),uploadedBy:{givenName:`Lamdiki`,lastName:`Sherpa`}}],b=a(()=>[{description:v(`table.documentation.eventDescription.actionArchive`),name:`action:archive`,payload:`data: IFile`},{description:v(`table.documentation.eventDescription.actionDelete`),name:`action:delete`,payload:`data: IFile`},{description:v(`table.documentation.eventDescription.actionDownload`),name:`action:download`,payload:`data: IFile`},{description:v(`table.documentation.eventDescription.actionEdit`),name:`action:edit`,payload:`data: IFile`},{description:v(`table.documentation.eventDescription.actionShare`),name:`action:share`,payload:`data: IFile`},{description:v(`table.documentation.eventDescription.actionView`),name:`action:view`,payload:`data: IFile`}]),x=a(()=>[{default:`{ archive: true, delete: true, download: true, edit: true, share: true, view: true }`,description:v(`table.documentation.propsDescription.actionButtonsVisibility`),prop:`actionButtonsVisibility`,type:`Object`},{default:`-`,description:v(`table.documentation.propsDescription.files`),prop:`files`,type:`Array<IFile>`},{default:`-`,description:v(`table.documentation.propsDescription.listProps`),prop:`listProps`,type:`Object`},{default:`-`,description:v(`table.documentation.propsDescription.locale`),prop:`locale`,type:`String`},{default:`-`,description:v(`table.documentation.propsDescription.messages`),prop:`messages`,type:`TableMessages`},{default:`list`,description:v(`table.documentation.propsDescription.presentation`),prop:`presentation`,type:`list | table`},{default:`-`,description:v(`table.documentation.propsDescription.tableProps`),prop:`tableProps`,type:`Object`},{default:`['actions', 'description', 'downloadCount', 'lastDownloadedAt', 'originalFileName', 'size', 'uploadedAt', 'uploadedBy']`,description:v(`table.documentation.propsDescription.visibleFileDetails`),prop:`visibleFileDetails`,type:`string[]`}]);return(a,o)=>{let d=r(`SshPre`);return s(),u(m,{subtitle:a.$t(`table.subtitle.filesPresentation`),title:a.$t(`table.label.filesPresentation`),class:`demo`},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(a.$t(`table.usage.tableMode`)),1),o[2]||=t(),i(`div`,h,[e(n(f),{files:y,locale:String(n(_)),"visible-file-details":[`originalFileName`,`description`,`size`,`uploadedBy`,`uploadedAt`,`downloadCount`,`lastDownloadedAt`,`actions`],presentation:`table`,"onAction:archive":()=>{},"onAction:delete":()=>{},"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:share":()=>{},"onAction:view":()=>{}},null,8,[`locale`]),o[1]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[0]||=[t(`
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
        `,-1)]]),_:1})])]),o[6]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`table.usage.listMode`)),1),o[5]||=t(),i(`div`,g,[e(n(f),{"action-buttons-visibility":{archive:!1,delete:!1,download:!0,edit:!0,share:!1,view:!0},files:y,locale:n(_),"visible-file-details":[`originalFileName`,`description`,`size`,`uploadedBy`,`uploadedAt`,`downloadCount`,`lastDownloadedAt`,`actions`],"onAction:download":()=>{},"onAction:edit":()=>{},"onAction:view":()=>{}},null,8,[`locale`]),o[4]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[3]||=[t(`
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
        `,-1)]]),_:1})])]),o[7]||=t(),e(p,{"events-data":b.value,"props-data":x.value,"props-table-title":a.$t(`common.properties`,{value:`FilesPresentationProperties`})},null,8,[`events-data`,`props-data`,`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{_ as default};