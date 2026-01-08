import{p}from"./PrefabsTechVue3Form.es-B7qvGqkM.js";import{_ as d}from"./FormPage.vue_vue_type_style_index_0_lang-CHkJVneL.js";import{d as f,J as g,e as b,o as z,i,f as n,B as t,t as r,h as s,u as m}from"./index-DaYJGkw_.js";const v={class:"section-content"},F={class:"section-content"},S={class:"section-content"},$={class:"section-content"},I={class:"section-content"},B={class:"section-content"},y={class:"section-content"},x={name:"FileInputDemo"},P=f({...x,setup(w){const a={accept:["image/jpeg","image/png"],maxFiles:2,minSize:10240,maxSize:1048576},u=o=>{const e=o/1024;return e>=1024?`${e/1024} MB`:`${e} KB`};return(o,e)=>{const l=g("SshPre");return z(),b(d,{title:o.$t("form.label.fileInput"),class:"demo"},{default:i(()=>[n("section",null,[n("h2",null,r(o.$t("form.label.basicInput")),1),e[2]||(e[2]=t()),n("div",v,[s(m(p)),e[1]||(e[1]=t()),s(l,{language:"html-vue"},{default:i(()=>e[0]||(e[0]=[t(`
          <template>
            <FileInput />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[21]||(e[21]=t()),n("section",null,[n("h2",null,r(o.$t("form.label.buttonOptions")),1),e[5]||(e[5]=t()),n("div",F,[s(m(p),{"button-label":"Choose","button-label-selected":"Chose","button-props":{iconLeft:"pi pi-file-arrow-up",severity:"success",size:"small",variant:"filled"}}),e[4]||(e[4]=t()),s(l,{language:"html-vue"},{default:i(()=>e[3]||(e[3]=[t(`
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
        `)])),_:1})])]),e[22]||(e[22]=t()),n("section",null,[n("h2",null,r(o.$t("form.label.dropzone")),1),e[8]||(e[8]=t()),n("div",S,[s(m(p),{"input-method":"dropzone"}),e[7]||(e[7]=t()),s(l,{language:"html-vue"},{default:i(()=>e[6]||(e[6]=[t(`
          <template>
            <FileInput input-method="dropzone" />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[23]||(e[23]=t()),n("section",null,[n("h2",null,r(o.$t("form.label.dropzoneOptions")),1),e[11]||(e[11]=t()),n("div",$,[s(m(p),{"dropzone-options":{accept:["image/jpeg","image/png"],maxSize:1e6,minSize:1e3},"enable-description":"","input-method":"dropzone",name:"images","show-error-message":""}),e[10]||(e[10]=t()),s(l,{language:"html-vue"},{default:i(()=>e[9]||(e[9]=[t(`
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
        `)])),_:1})])]),e[24]||(e[24]=t()),n("section",null,[n("h2",null,r(o.$t("form.label.multiple")),1),e[14]||(e[14]=t()),n("div",I,[s(m(p),{"dropzone-options":{accept:["image/jpeg","image/png"],maxFiles:5},"enable-description":"","input-method":"dropzone",multiple:"",name:"files","show-error-message":""}),e[13]||(e[13]=t()),s(l,{language:"html-vue"},{default:i(()=>e[12]||(e[12]=[t(`
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
        `)])),_:1})])]),e[25]||(e[25]=t()),n("section",null,[n("h2",null,r(o.$t("form.label.customErrorMessageInput")),1),e[17]||(e[17]=t()),n("div",B,[s(m(p),{"dropzone-options":a,"error-messages":{invalid:o.$t("form.errors.file.invalid",{format:"(jpeg, png)"}),maxFiles:o.$t("form.errors.file.maxFiles",{max:a.maxFiles}),maxSize:o.$t("form.errors.file.maxSize",{max:u(a.maxSize)}),minSize:o.$t("form.errors.file.minSize",{min:u(a.minSize)})},"enable-description":"","input-method":"dropzone",multiple:"",name:"files","show-error-message":""},null,8,["error-messages"]),e[16]||(e[16]=t()),s(l,{language:"html-vue"},{default:i(()=>e[15]||(e[15]=[t(`
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
        `)])),_:1})])]),e[26]||(e[26]=t()),n("section",null,[n("h2",null,r(o.$t("form.label.append")),1),e[20]||(e[20]=t()),n("div",y,[s(m(p),{"enable-description":"","input-method":"dropzone",mode:"append",multiple:"",name:"files","show-error-message":""}),e[19]||(e[19]=t()),s(l,{language:"html-vue"},{default:i(()=>e[18]||(e[18]=[t(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{P as default};
