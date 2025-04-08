import{L as r}from"./DzangolabVue3Form.es-fB4Y1Uvk.js";import{d as a,D as u,e as d,o as f,w as s,B as t,f as n,t as m,i as o,u as i,p as g}from"./index-CcXXiZBJ.js";import{_ as b}from"./FormPage.vue_vue_type_style_index_0_lang-DDRZ3oD3.js";const z={class:"section-content"},v={class:"section-content"},F={class:"section-content"},I={class:"section-content"},$={class:"section-content"},w={class:"section-content"},C={name:"FileInputDemo"},L=a({...C,setup(S){return(l,e)=>{const p=u("SshPre");return f(),d(b,{title:l.$t("form.label.fileInput"),class:"demo"},{toolbar:s(()=>[o(i(g),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=j=>l.$router.push("/form"))},null,8,["label"])]),default:s(()=>[e[19]||(e[19]=t()),n("section",null,[n("h2",null,m(l.$t("form.label.basicInput")),1),e[3]||(e[3]=t()),n("div",z,[o(i(r)),e[2]||(e[2]=t()),o(p,{language:"html-vue"},{default:s(()=>e[1]||(e[1]=[t(`
          <template>
            <FileInput />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),e[20]||(e[20]=t()),n("section",null,[n("h2",null,m(l.$t("form.label.buttonOptions")),1),e[6]||(e[6]=t()),n("div",v,[o(i(r),{"button-label":"Choose","button-label-selected":"Chose","button-props":{iconLeft:"pi pi-file-arrow-up",severity:"success",size:"small",variant:"filled"}}),e[5]||(e[5]=t()),o(p,{language:"html-vue"},{default:s(()=>e[4]||(e[4]=[t(`
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
          import { FileInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),e[21]||(e[21]=t()),n("section",null,[n("h2",null,m(l.$t("form.label.dropzone")),1),e[9]||(e[9]=t()),n("div",F,[o(i(r),{"input-method":"dropzone"}),e[8]||(e[8]=t()),o(p,{language:"html-vue"},{default:s(()=>e[7]||(e[7]=[t(`
          <template>
            <FileInput input-method="dropzone" />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),e[22]||(e[22]=t()),n("section",null,[n("h2",null,m(l.$t("form.label.dropzoneOptions")),1),e[12]||(e[12]=t()),n("div",I,[o(i(r),{"dropzone-options":{accept:["image/jpeg","image/png"],maxSize:1e6,minSize:1e3},"enable-description":"","input-method":"dropzone",name:"images","show-error-message":""}),e[11]||(e[11]=t()),o(p,{language:"html-vue"},{default:s(()=>e[10]||(e[10]=[t(`
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
          import { FileInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),e[23]||(e[23]=t()),n("section",null,[n("h2",null,m(l.$t("form.label.multiple")),1),e[15]||(e[15]=t()),n("div",$,[o(i(r),{"dropzone-options":{accept:["image/jpeg","image/png"],maxFiles:5},"enable-description":"","input-method":"dropzone",multiple:"",name:"files","show-error-message":""}),e[14]||(e[14]=t()),o(p,{language:"html-vue"},{default:s(()=>e[13]||(e[13]=[t(`
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
          import { FileInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),e[24]||(e[24]=t()),n("section",null,[n("h2",null,m(l.$t("form.label.append")),1),e[18]||(e[18]=t()),n("div",w,[o(i(r),{"enable-description":"","input-method":"dropzone",mode:"append",multiple:"",name:"files","show-error-message":""}),e[17]||(e[17]=t()),o(p,{language:"html-vue"},{default:s(()=>e[16]||(e[16]=[t(`
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
          import { FileInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{L as default};
