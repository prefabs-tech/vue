import{I as r}from"./PrefabsTechVue3Form.es-DV1FRZxy.js";import{d,L as f,e as g,o as b,j as i,C as n,f as t,t as m,h as s,u as l,v as z}from"./index-STrZF6Wn.js";import{_ as v}from"./FormPage.vue_vue_type_style_index_0_lang-B08UBD6i.js";const F={class:"section-content"},$={class:"section-content"},S={class:"section-content"},I={class:"section-content"},B={class:"section-content"},y={class:"section-content"},x={class:"section-content"},w={name:"FileInputDemo"},O=d({...w,setup(j){const a={accept:["image/jpeg","image/png"],maxFiles:2,minSize:10240,maxSize:1048576},u=o=>{const e=o/1024;return e>=1024?`${e/1024} MB`:`${e} KB`};return(o,e)=>{const p=f("SshPre");return b(),g(v,{title:o.$t("form.label.fileInput"),class:"demo"},{toolbar:i(()=>[s(l(z),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=k=>o.$router.push("/form"))},null,8,["label"])]),default:i(()=>[e[22]||(e[22]=n()),t("section",null,[t("h2",null,m(o.$t("form.label.basicInput")),1),e[3]||(e[3]=n()),t("div",F,[s(l(r)),e[2]||(e[2]=n()),s(p,{language:"html-vue"},{default:i(()=>e[1]||(e[1]=[n(`
          <template>
            <FileInput />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[23]||(e[23]=n()),t("section",null,[t("h2",null,m(o.$t("form.label.buttonOptions")),1),e[6]||(e[6]=n()),t("div",$,[s(l(r),{"button-label":"Choose","button-label-selected":"Chose","button-props":{iconLeft:"pi pi-file-arrow-up",severity:"success",size:"small",variant:"filled"}}),e[5]||(e[5]=n()),s(p,{language:"html-vue"},{default:i(()=>e[4]||(e[4]=[n(`
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
        `)])),_:1})])]),e[24]||(e[24]=n()),t("section",null,[t("h2",null,m(o.$t("form.label.dropzone")),1),e[9]||(e[9]=n()),t("div",S,[s(l(r),{"input-method":"dropzone"}),e[8]||(e[8]=n()),s(p,{language:"html-vue"},{default:i(()=>e[7]||(e[7]=[n(`
          <template>
            <FileInput input-method="dropzone" />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[25]||(e[25]=n()),t("section",null,[t("h2",null,m(o.$t("form.label.dropzoneOptions")),1),e[12]||(e[12]=n()),t("div",I,[s(l(r),{"dropzone-options":{accept:["image/jpeg","image/png"],maxSize:1e6,minSize:1e3},"enable-description":"","input-method":"dropzone",name:"images","show-error-message":""}),e[11]||(e[11]=n()),s(p,{language:"html-vue"},{default:i(()=>e[10]||(e[10]=[n(`
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
        `)])),_:1})])]),e[26]||(e[26]=n()),t("section",null,[t("h2",null,m(o.$t("form.label.multiple")),1),e[15]||(e[15]=n()),t("div",B,[s(l(r),{"dropzone-options":{accept:["image/jpeg","image/png"],maxFiles:5},"enable-description":"","input-method":"dropzone",multiple:"",name:"files","show-error-message":""}),e[14]||(e[14]=n()),s(p,{language:"html-vue"},{default:i(()=>e[13]||(e[13]=[n(`
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
        `)])),_:1})])]),e[27]||(e[27]=n()),t("section",null,[t("h2",null,m(o.$t("form.label.customErrorMessageInput")),1),e[18]||(e[18]=n()),t("div",y,[s(l(r),{"dropzone-options":a,"error-messages":{invalid:o.$t("form.errors.file.invalid",{format:"(jpeg, png)"}),maxFiles:o.$t("form.errors.file.maxFiles",{max:a.maxFiles}),maxSize:o.$t("form.errors.file.maxSize",{max:u(a.maxSize)}),minSize:o.$t("form.errors.file.minSize",{min:u(a.minSize)})},"enable-description":"","input-method":"dropzone",multiple:"",name:"files","show-error-message":""},null,8,["error-messages"]),e[17]||(e[17]=n()),s(p,{language:"html-vue"},{default:i(()=>e[16]||(e[16]=[n(`
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
        `)])),_:1})])]),e[28]||(e[28]=n()),t("section",null,[t("h2",null,m(o.$t("form.label.append")),1),e[21]||(e[21]=n()),t("div",x,[s(l(r),{"enable-description":"","input-method":"dropzone",mode:"append",multiple:"",name:"files","show-error-message":""}),e[20]||(e[20]=n()),s(p,{language:"html-vue"},{default:i(()=>e[19]||(e[19]=[n(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{O as default};
