import{d as u,H as p,e as d,o as f,h as a,B as i,f as t,t as n,g as s,u as o,V as c,q as v}from"./index-v8URLa41.js";import{_ as k}from"./UiPage.vue_vue_type_style_index_0_lang-COf0BS1w.js";const m={class:"section-content"},y={class:"section-content"},h=u({__name:"Index",setup(g){const r=[{children:"Description",key:"1",label:"Description"},{children:"Reviews",closable:!0,key:"2",label:"Reviews"},{children:"Specifications",closable:!0,key:"3",label:"Specifications"},{children:"Pricing",closable:!0,key:"4",label:"Pricing"},{children:"Installation Instructions",key:"5",label:"Installation"},{children:"Certifications",key:"6",label:"Certifications"}];return(l,e)=>{const b=p("SshPre");return f(),d(k,{title:l.$t("ui.tabView.title"),class:"demo-tab-view"},{toolbar:a(()=>[s(o(v),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=w=>l.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[e[8]||(e[8]=i()),t("section",null,[t("h2",null,n(l.$t("ui.tabView.usage.basic")),1),e[3]||(e[3]=i()),t("div",m,[s(o(c),{id:"tab-view",tabs:r,"visible-tabs":["1","5","6"],"active-key":"1"}),e[2]||(e[2]=i()),s(b,{language:"html-vue"},{default:a(()=>e[1]||(e[1]=[i(`
          <template>
            <TabView
              id="tab-view"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
            />
          </template>

          <script setup lang="ts">
          import { TabVIew } from "@dzangolab/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          <\/script>
        `)])),_:1})])]),e[9]||(e[9]=i()),t("section",null,[t("h2",null,n(l.$t("ui.tabView.usage.disableTabState.title")),1),e[7]||(e[7]=i()),t("div",y,[t("p",null,n(l.$t("ui.tabView.usage.disableTabState.subtitle")),1),e[5]||(e[5]=i()),s(o(c),{"persist-state":!1,tabs:r,"visible-tabs":["1","5","6"],"active-key":"1"}),e[6]||(e[6]=i()),s(b,{language:"html-vue"},{default:a(()=>e[4]||(e[4]=[i(`
          <template>
            <TabView
              :persist-state="false"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
            />
          </template>

          <script setup lang="ts">
          import { TabVIew } from "@dzangolab/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{h as default};
