import{K as i}from"./DzangolabVue3Form.es-db0bf4b1.js";import{_ as u}from"./FormPage.vue_vue_type_style_index_0_lang-f3bbd4a3.js";import{d as c,J as r,o as d,c as f,w as o,K as n,W as e,L as s,f as t,D as p}from"./index-35228b09-5de2cbe6.js";import"./index-970a22d1.js";const g={class:"section-content"},h={class:"section-content"},b={class:"section-content"},_={class:"section-content"},z={class:"section-content"},v={class:"section-content"},F={name:"FileInputDemo"},j=c({...F,setup(I){return(l,w)=>{const m=r("router-link"),a=r("SshPre");return d(),f(u,{title:l.$t("form.label.fileInput"),class:"demo"},{toolbar:o(()=>[n(m,{to:{name:"form"},class:"back"},{default:o(()=>[e(s(l.$t("common.back")),1)]),_:1})]),default:o(()=>[e(),t("section",null,[t("h2",null,s(l.$t("form.label.basicInput")),1),e(),t("div",g,[n(p(i)),e(),n(a,{language:"html-vue"},{default:o(()=>[e(`
          <template>
            <FileInput />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,s(l.$t("form.label.buttonOptions")),1),e(),t("div",h,[n(p(i),{"button-label":"Choose","button-label-selected":"Chose","button-props":{iconLeft:"pi pi-file-arrow-up",severity:"success",size:"small",variant:"filled"}}),e(),n(a,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,s(l.$t("form.label.dropzone")),1),e(),t("div",b,[n(p(i),{"input-method":"dropzone"}),e(),n(a,{language:"html-vue"},{default:o(()=>[e(`
          <template>
            <FileInput input-method="dropzone" />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,s(l.$t("form.label.dropzoneOptions")),1),e(),t("div",_,[n(p(i),{"dropzone-options":{accept:["image/jpeg","image/png"],maxSize:1e6,minSize:1e3},"enable-description":"","input-method":"dropzone",name:"images","show-error-message":""}),e(),n(a,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,s(l.$t("form.label.multiple")),1),e(),t("div",z,[n(p(i),{"dropzone-options":{accept:["image/jpeg","image/png"],maxFiles:5},"enable-description":"","input-method":"dropzone",multiple:"",name:"files","show-error-message":""}),e(),n(a,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,s(l.$t("form.label.append")),1),e(),t("div",v,[n(p(i),{"enable-description":"","input-method":"dropzone",mode:"append",multiple:"",name:"files","show-error-message":""}),e(),n(a,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{j as default};
