import{r as i}from"./DzangolabVue3Form.es-k-Xjvcvt.js";import{d as m,s as u,j as c,o as d,w as l,B as e,e as t,t as p,g as n,u as s,C as g}from"./index-CqimUq5D.js";import{_ as f}from"./FormPage.vue_vue_type_style_index_0_lang-g4uxL8pa.js";const h={class:"section-content"},b={class:"section-content"},z={class:"section-content"},v={class:"section-content"},_={class:"section-content"},F={class:"section-content"},I={name:"FileInputDemo"},k=m({...I,setup($){return(o,r)=>{const a=u("SshPre");return d(),c(f,{title:o.$t("form.label.fileInput"),class:"demo"},{toolbar:l(()=>[n(s(g),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:r[0]||(r[0]=w=>o.$router.push("/form"))},null,8,["label"])]),default:l(()=>[e(),t("section",null,[t("h2",null,p(o.$t("form.label.basicInput")),1),e(),t("div",h,[n(s(i)),e(),n(a,{language:"html-vue"},{default:l(()=>[e(`
          <template>
            <FileInput />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,p(o.$t("form.label.buttonOptions")),1),e(),t("div",b,[n(s(i),{"button-label":"Choose","button-label-selected":"Chose","button-props":{iconLeft:"pi pi-file-arrow-up",severity:"success",size:"small",variant:"filled"}}),e(),n(a,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,p(o.$t("form.label.dropzone")),1),e(),t("div",z,[n(s(i),{"input-method":"dropzone"}),e(),n(a,{language:"html-vue"},{default:l(()=>[e(`
          <template>
            <FileInput input-method="dropzone" />
          </template>

          <script setup lang="ts">
          import { FileInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,p(o.$t("form.label.dropzoneOptions")),1),e(),t("div",v,[n(s(i),{"dropzone-options":{accept:["image/jpeg","image/png"],maxSize:1e6,minSize:1e3},"enable-description":"","input-method":"dropzone",name:"images","show-error-message":""}),e(),n(a,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,p(o.$t("form.label.multiple")),1),e(),t("div",_,[n(s(i),{"dropzone-options":{accept:["image/jpeg","image/png"],maxFiles:5},"enable-description":"","input-method":"dropzone",multiple:"",name:"files","show-error-message":""}),e(),n(a,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,p(o.$t("form.label.append")),1),e(),t("div",F,[n(s(i),{"enable-description":"","input-method":"dropzone",mode:"append",multiple:"",name:"files","show-error-message":""}),e(),n(a,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{k as default};
