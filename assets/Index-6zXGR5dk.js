import{n as a}from"./PrefabsTechVue3Form.es-BoUjIuSx.js";import{d as F,L as I,M as S,o as y,e as D,f as p,h as n,t as l,z as t,a as s,u as m,i as g}from"./index-taFQezeg.js";import{_ as w}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-t26bDrn_.js";import{_ as $}from"./FormPage.vue_vue_type_style_index_0_lang-BP3VjD2m.js";import"./PrefabsTechVue3TanstackTable.es-gIvQX_Uf.js";const x={class:"section-content"},B={class:"section-content"},j={class:"section-content"},M={class:"section-content"},P={class:"section-content"},L={class:"section-content"},h={class:"section-content"},k={class:"section-content"},E=["src"],O={class:"image-details"},C={name:"FileInputDemo"},q=F({...C,setup(U){const{t:i}=I(),u={accept:["image/jpeg","image/png"],maxFiles:2,minSize:10240,maxSize:1048576},b=g(()=>[{description:i("form.documentation.eventDescription.fileInput.filesUpdate"),name:"on:filesUpdate",payload:"files: FileExtended[]"}]),c=g(()=>[{default:"-",description:i("form.documentation.propsDescription.fileInput.addDescriptionLabel"),prop:"addDescriptionLabel",type:"String"},{default:'"Select"',description:i("form.documentation.propsDescription.fileInput.buttonLabel"),prop:"buttonLabel",type:"String"},{default:'"Selected"',description:i("form.documentation.propsDescription.fileInput.buttonLabelSelected"),prop:"buttonLabelSelected",type:"String"},{default:"-",description:i("form.documentation.propsDescription.fileInput.buttonProps"),prop:"buttonProps",type:"Object"},{default:"-",description:i("form.documentation.propsDescription.fileInput.descriptionPlaceholder"),prop:"descriptionPlaceholder",type:"String"},{default:'"Drag and drop or click"',description:i("form.documentation.propsDescription.fileInput.dropzoneMessage"),prop:"dropzoneMessage",type:"String"},{default:"-",description:i("form.documentation.propsDescription.fileInput.dropzoneOptions"),prop:"dropzoneOptions",type:"Object"},{default:"false",description:i("form.documentation.propsDescription.fileInput.enableDescription"),prop:"enableDescription",type:"Boolean"},{default:"-",description:i("form.documentation.propsDescription.fileInput.errorMessages"),prop:"errorMessages",type:"FileErrorMessages"},{default:'"button"',description:i("form.documentation.propsDescription.fileInput.inputMethod"),prop:"inputMethod",type:'"button" | "dropzone"'},{default:"-",description:i("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:'"update"',description:i("form.documentation.propsDescription.fileInput.mode"),prop:"mode",type:'"append" | "update"'},{default:"false",description:i("form.documentation.propsDescription.fileInput.multiple"),prop:"multiple",type:"Boolean"},{default:'"file"',description:i("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"false",description:i("form.documentation.propsDescription.fileInput.showErrorMessage"),prop:"showErrorMessage",type:"Boolean"}]),v=g(()=>[{description:i("form.documentation.slotDescription.fileInput.details"),name:"details",props:"{ file: FileExtended, index: number }"},{description:i("form.documentation.slotDescription.fileInput.preview"),name:"preview",props:"{ file: FileExtended }"}]),f=o=>{const e=(o/1024).toFixed(2);return e>=1024?`${e/1024} MB`:`${e} KB`},z=o=>URL?.createObjectURL(o);return(o,e)=>{const r=S("SshPre");return y(),D($,{subtitle:o.$t("form.subtitle.fileInput"),title:o.$t("form.label.fileInput"),class:"demo"},{default:p(()=>[n("section",null,[n("h2",null,l(o.$t("form.label.basicInput")),1),e[2]||(e[2]=t()),n("div",x,[s(m(a)),e[1]||(e[1]=t()),s(r,{language:"html-vue"},{default:p(()=>[...e[0]||(e[0]=[t(`
          <template>
            <FileInput />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),e[26]||(e[26]=t()),n("section",null,[n("h2",null,l(o.$t("form.label.buttonOptions")),1),e[5]||(e[5]=t()),n("div",B,[s(m(a),{"button-label":"Choose","button-label-selected":"Chose","button-props":{iconLeft:"pi pi-file-arrow-up",severity:"success",size:"small",variant:"filled"}}),e[4]||(e[4]=t()),s(r,{language:"html-vue"},{default:p(()=>[...e[3]||(e[3]=[t(`
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
        `,-1)])]),_:1})])]),e[27]||(e[27]=t()),n("section",null,[n("h2",null,l(o.$t("form.label.dropzone")),1),e[8]||(e[8]=t()),n("div",j,[s(m(a),{"input-method":"dropzone"}),e[7]||(e[7]=t()),s(r,{language:"html-vue"},{default:p(()=>[...e[6]||(e[6]=[t(`
          <template>
            <FileInput input-method="dropzone" />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),e[28]||(e[28]=t()),n("section",null,[n("h2",null,l(o.$t("form.label.dropzoneOptions")),1),e[11]||(e[11]=t()),n("div",M,[s(m(a),{"dropzone-options":{accept:["image/jpeg","image/png"],maxSize:1e6,minSize:1e3},"enable-description":"","input-method":"dropzone",name:"images","show-error-message":""}),e[10]||(e[10]=t()),s(r,{language:"html-vue"},{default:p(()=>[...e[9]||(e[9]=[t(`
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
        `,-1)])]),_:1})])]),e[29]||(e[29]=t()),n("section",null,[n("h2",null,l(o.$t("form.label.multiple")),1),e[14]||(e[14]=t()),n("div",P,[s(m(a),{"dropzone-options":{accept:["image/jpeg","image/png"],maxFiles:5},"enable-description":"","input-method":"dropzone",multiple:"",name:"files","show-error-message":""}),e[13]||(e[13]=t()),s(r,{language:"html-vue"},{default:p(()=>[...e[12]||(e[12]=[t(`
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
        `,-1)])]),_:1})])]),e[30]||(e[30]=t()),n("section",null,[n("h2",null,l(o.$t("form.label.customErrorMessageInput")),1),e[17]||(e[17]=t()),n("div",L,[s(m(a),{"dropzone-options":u,"error-messages":{invalid:o.$t("form.errors.file.invalid",{format:"(jpeg, png)"}),maxFiles:o.$t("form.errors.file.maxFiles",{max:u.maxFiles}),maxSize:o.$t("form.errors.file.maxSize",{max:f(u.maxSize)}),minSize:o.$t("form.errors.file.minSize",{min:f(u.minSize)})},"enable-description":"","input-method":"dropzone",multiple:"",name:"files","show-error-message":""},null,8,["error-messages"]),e[16]||(e[16]=t()),s(r,{language:"html-vue"},{default:p(()=>[...e[15]||(e[15]=[t(`
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
        `,-1)])]),_:1})])]),e[31]||(e[31]=t()),n("section",null,[n("h2",null,l(o.$t("form.label.append")),1),e[20]||(e[20]=t()),n("div",h,[s(m(a),{"enable-description":"","input-method":"dropzone",mode:"append",multiple:"",name:"files","show-error-message":""}),e[19]||(e[19]=t()),s(r,{language:"html-vue"},{default:p(()=>[...e[18]||(e[18]=[t(`
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
        `,-1)])]),_:1})])]),e[32]||(e[32]=t()),n("section",null,[n("h2",null,l(o.$t("form.label.customRender")),1),e[24]||(e[24]=t()),n("div",k,[s(m(a),{"dropzone-options":{accept:["image/jpeg","image/png"],maxFiles:5},"input-method":"dropzone",multiple:"",name:"custom-file-input","show-error-message":""},{preview:p(({file:d})=>[n("img",{src:z(d),alt:"uploaded-file",class:"image-preview"},null,8,E)]),details:p(({file:d})=>[n("span",O,l(`${d.name} (${f(d.size)})`),1)]),_:1}),e[23]||(e[23]=t()),s(r,{language:"html-vue"},{default:p(()=>[...e[22]||(e[22]=[t(`
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
        `,-1)])]),_:1})])]),e[33]||(e[33]=t()),s(w,{"events-data":b.value,"props-data":c.value,"props-table-title":o.$t("common.properties",{value:"FileInputProperties"}),"slots-data":v.value},null,8,["events-data","props-data","props-table-title","slots-data"]),e[34]||(e[34]=t()),s(r,{language:"html-vue"},{default:p(()=>[...e[25]||(e[25]=[t(`
      interface FileErrorMessages {
        invalid?: string;
        maxSize?: string;
        minSize?: string;
        maxFiles?: string;
      }

      interface FileExtended extends File {
        description?: string;
      }
    `,-1)])]),_:1})]),_:1},8,["subtitle","title"])}}});export{q as default};
