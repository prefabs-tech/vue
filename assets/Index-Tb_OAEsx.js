import{D as e,E as t,On as n,St as r,_ as i,g as a,k as o,mt as s,qt as c,tr as l,v as u}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{E as d}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as f}from"./FormPage-qAqvgJ-r.js";import{f as p}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{t as m}from"./ComponentDocumentation-BPcopVAa.js";var h={class:`section-content`},g={class:`section-content`},_={class:`section-content`},v={class:`section-content`},y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C=[`src`],w={class:`image-details`},T=o({name:`FileInputDemo`,setup(o){let{t:T}=d(),E={accept:[`image/jpeg`,`image/png`],maxFiles:2,maxSize:1048576,minSize:10240},D=a(()=>[{description:T(`form.documentation.eventDescription.fileInput.filesUpdate`),name:`on:filesUpdate`,payload:`files: FileExtended[]`}]),O=a(()=>[{default:`-`,description:T(`form.documentation.propsDescription.fileInput.addDescriptionLabel`),prop:`addDescriptionLabel`,type:`String`},{default:`"Select"`,description:T(`form.documentation.propsDescription.fileInput.buttonLabel`),prop:`buttonLabel`,type:`String`},{default:`"Selected"`,description:T(`form.documentation.propsDescription.fileInput.buttonLabelSelected`),prop:`buttonLabelSelected`,type:`String`},{default:`-`,description:T(`form.documentation.propsDescription.fileInput.buttonProps`),prop:`buttonProps`,type:`Object`},{default:`-`,description:T(`form.documentation.propsDescription.fileInput.descriptionPlaceholder`),prop:`descriptionPlaceholder`,type:`String`},{default:`"Drag and drop or click"`,description:T(`form.documentation.propsDescription.fileInput.dropzoneMessage`),prop:`dropzoneMessage`,type:`String`},{default:`-`,description:T(`form.documentation.propsDescription.fileInput.dropzoneOptions`),prop:`dropzoneOptions`,type:`Object`},{default:`false`,description:T(`form.documentation.propsDescription.fileInput.enableDescription`),prop:`enableDescription`,type:`Boolean`},{default:`-`,description:T(`form.documentation.propsDescription.fileInput.errorMessages`),prop:`errorMessages`,type:`FileErrorMessages`},{default:`"button"`,description:T(`form.documentation.propsDescription.fileInput.inputMethod`),prop:`inputMethod`,type:`"button" | "dropzone"`},{default:`-`,description:T(`form.documentation.propsDescription.input.label`),prop:`label`,type:`String`},{default:`"update"`,description:T(`form.documentation.propsDescription.fileInput.mode`),prop:`mode`,type:`"append" | "update"`},{default:`false`,description:T(`form.documentation.propsDescription.fileInput.multiple`),prop:`multiple`,type:`Boolean`},{default:`"file"`,description:T(`form.documentation.propsDescription.input.name`),prop:`name`,type:`String`},{default:`false`,description:T(`form.documentation.propsDescription.fileInput.showErrorMessage`),prop:`showErrorMessage`,type:`Boolean`}]),k=a(()=>[{description:T(`form.documentation.slotDescription.fileInput.details`),name:`details`,props:`{ file: FileExtended, index: number }`},{description:T(`form.documentation.slotDescription.fileInput.preview`),name:`preview`,props:`{ file: FileExtended }`}]),A=e=>{let t=Number((e/1024).toFixed(2));return t>=1024?`${(t/1024).toFixed(2)} MB`:`${t} KB`},j=e=>URL?.createObjectURL(e);return(a,o)=>{let d=r(`SshPre`);return s(),u(f,{subtitle:a.$t(`form.subtitle.fileInput`),title:a.$t(`form.label.fileInput`),class:`demo`},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.basicInput`)),1),o[2]||=t(),i(`div`,h,[e(n(p)),o[1]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[0]||=[t(`
          <template>
            <FileInput />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[26]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.buttonOptions`)),1),o[5]||=t(),i(`div`,g,[e(n(p),{"button-label":`Choose`,"button-label-selected":`Chose`,"button-props":{iconLeft:`pi pi-file-arrow-up`,severity:`success`,size:`small`,variant:`filled`}}),o[4]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[3]||=[t(`
          <template>
            <FileInput
              button-label="Choose"
              button-label-selected="Chose"
              :button-props="{
                iconLeft: 'pi pi-file-arrow-up',
                severity: 'success',
                size: 'small',
                variant: 'filled',
              }"
            />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[27]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.dropzone`)),1),o[8]||=t(),i(`div`,_,[e(n(p),{"input-method":`dropzone`}),o[7]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[6]||=[t(`
          <template>
            <FileInput input-method="dropzone" />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[28]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.dropzoneOptions`)),1),o[11]||=t(),i(`div`,v,[e(n(p),{"dropzone-options":{accept:[`image/jpeg`,`image/png`],maxSize:1e6,minSize:1e3},"enable-description":``,"input-method":`dropzone`,name:`images`,"show-error-message":``}),o[10]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[9]||=[t(`
          <template>
            <FileInput
              :dropzone-options="{
                accept: ['image/jpeg', 'image/png'],
                maxSize: 1000000,
                minSize: 1000,
              }"
              enable-description
              input-method="dropzone"
              name="images"
              show-error-message
            />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[29]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.multiple`)),1),o[14]||=t(),i(`div`,y,[e(n(p),{"dropzone-options":{accept:[`image/jpeg`,`image/png`],maxFiles:5},"enable-description":``,"input-method":`dropzone`,multiple:``,name:`files`,"show-error-message":``}),o[13]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[12]||=[t(`
          <template>
            <FileInput
              :dropzone-options="{
                accept: ['image/jpeg', 'image/png'],
                maxFiles: 5,
              }"
              enable-description
              input-method="dropzone"
              multiple
              name="files"
              show-error-message
            />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[30]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.customErrorMessageInput`)),1),o[17]||=t(),i(`div`,b,[e(n(p),{"dropzone-options":E,"error-messages":{invalid:a.$t(`form.errors.file.invalid`,{format:`(jpeg, png)`}),maxFiles:a.$t(`form.errors.file.maxFiles`,{max:E.maxFiles}),maxSize:a.$t(`form.errors.file.maxSize`,{max:A(E.maxSize)}),minSize:a.$t(`form.errors.file.minSize`,{min:A(E.minSize)})},"enable-description":``,"input-method":`dropzone`,multiple:``,name:`files`,"show-error-message":``},null,8,[`error-messages`]),o[16]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[15]||=[t(`
          <template>
            <FileInput
              :dropzone-options="options"
              :error-messages="{
                invalid: 'Please upload valid images (jpeg, png)',
                maxFiles: \`Please upload max \${options.maxFiles} files\`,
                maxSize: \`Please upload files smaller than \${formatBytes(options.maxSize)}\`,
                minSize: \`Please upload files larger than \${formatBytes(options.minSize)}\`
              }"
              enable-description
              input-method="dropzone"
              multiple
              name="files"
              show-error-message
            />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@prefabs.tech/vue3-form";

          const options = {
            accept: ['image/jpeg', 'image/png'],
            maxFiles: 2,
            minSize: 10240,
            maxSize: 1048576,
          };

          const formatBytes = (bytes: number): number => {
            const kiloBytes = bytes / 1024;

            return kiloBytes >= 1024 ? \`\${kiloBytes / 1024} MB\` : \`\${kiloBytes} KB\`;
          };
          <\/script>
        `,-1)]]),_:1})])]),o[31]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.append`)),1),o[20]||=t(),i(`div`,x,[e(n(p),{"enable-description":``,"input-method":`dropzone`,mode:`append`,multiple:``,name:`files`,"show-error-message":``}),o[19]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[18]||=[t(`
          <template>
            <FileInput
              enable-description
              input-method="dropzone"
              mode="append"
              multiple
              name="files"
              show-error-message
            />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[32]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.customRender`)),1),o[24]||=t(),i(`div`,S,[e(n(p),{"dropzone-options":{accept:[`image/jpeg`,`image/png`],maxFiles:5},"input-method":`dropzone`,multiple:``,name:`custom-file-input`,"show-error-message":``},{preview:c(({file:e})=>[i(`img`,{src:j(e),alt:`uploaded-file`,class:`image-preview`},null,8,C)]),details:c(({file:e})=>[i(`span`,w,l(`${e.name} (${A(e.size)})`),1)]),_:1}),o[23]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[22]||=[t(`
          <template>
            <FileInput
              :dropzone-options="{
                accept: ['image/jpeg', 'image/png'],
                maxFiles: 5,
              }"
              input-method="dropzone"
              multiple
              name="file"
              show-error-message
            >
              <template #preview="{ file }">
                <img :src="getPreview(file)"
                  alt="uploaded-file"
                  class="image-preview"
                >
              </template>

              <template #details="{ file }">
                <span class="image-details">
                  {{ \`\${file.name} (\${formatBytes(file.size)})\` }}
                </span>
              </template>
            </FileInput>
          </template>

          <script setup lang="ts">
          import { FileInput } from "@prefabs.tech/vue3-form";

          const getPreview = (file: File) => window?.URL.createObjectURL(file);
          <\/script>

          <style lang="css">
          .image-preview {
            border: 1px solid var(--border-color);
            border-radius: 0.25rem;
            height: 5rem;
            object-fit: cover;
            width: 5rem;
          }
          </style>
        `,-1)]]),_:1})])]),o[33]||=t(),e(m,{"events-data":D.value,"props-data":O.value,"props-table-title":a.$t(`common.properties`,{value:`FileInputProperties`}),"slots-data":k.value},null,8,[`events-data`,`props-data`,`props-table-title`,`slots-data`]),o[34]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[25]||=[t(`
      interface FileErrorMessages {
        invalid?: string;
        maxSize?: string;
        minSize?: string;
        maxFiles?: string;
      }

      interface FileExtended extends File {
        description?: string;
      }
    `,-1)]]),_:1})]),_:1},8,[`subtitle`,`title`])}}});export{T as default};