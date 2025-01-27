import{d as p,K as u,o as b,c as m,w as s,L as a,C as e,M as o,f as l,E as t,au as i,ap as v,aq as h}from"./index-4dbfb8c7-0110dc13.js";import{_}from"./UiPage.vue_vue_type_style_index_0_lang-c2c19b74.js";import{_ as f}from"./index-21d7b590.js";const r=c=>(v("data-v-c775f8af"),c=c(),h(),c),B={class:"section-content"},y={class:"section-content"},$={class:"section-content"},k={class:"section-content"},I={class:"container"},w={class:"section-content"},z={class:"container"},L={class:"section-content"},S={class:"container"},C={class:"section-content"},P={class:"container"},N={class:"section-content"},R={class:"container"},V=r(()=>l("i",{class:"pi pi-check"},null,-1)),A=r(()=>l("i",{class:"pi pi-times"},null,-1)),D=p({__name:"Index",setup(c){return(n,E)=>{const g=u("router-link"),d=u("SshPre");return b(),m(_,{title:n.$t("ui.badge.title"),class:"demo-badge"},{toolbar:s(()=>[a(g,{to:{name:"ui"},class:"back"},{default:s(()=>[e(o(n.$t("common.back")),1)]),_:1})]),default:s(()=>[e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.basic")),1),e(),l("div",B,[a(t(i),{label:n.$t("ui.badge.label.basic")},null,8,["label"]),e(),a(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Basic" /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.withI18n")),1),e(),l("div",y,[a(t(i),{label:n.$t("ui.badge.label.addedIn")},null,8,["label"]),e(),a(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge :label=t("ui.badge.label.addedIn") /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.rounded")),1),e(),l("div",$,[a(t(i),{label:n.$t("ui.badge.label.rounded"),rounded:""},null,8,["label"]),e(),a(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Rounded" rounded /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.severity")),1),e(),l("div",k,[l("div",I,[a(t(i),{label:n.$t("ui.badge.label.primary"),severity:"primary"},null,8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.secondary"),severity:"secondary"},null,8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.alternate"),severity:"alternate"},null,8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.success"),severity:"success"},null,8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.danger"),severity:"danger"},null,8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.warning"),severity:"warning"},null,8,["label"])]),e(),a(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Primary" severity="primary" />
            <Badge label="Secondary" severity="secondary" />
            <Badge label="Alternate" severity="alternate" />
            <Badge label="Success" severity="success" />
            <Badge label="Danger" severity="danger" />
            <Badge label="Warning" severity="warning" />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.icon")),1),e(),l("div",w,[l("div",z,[a(t(i),{"icon-left":"pi pi-thumbs-up"}),e(),a(t(i),{"icon-right":"pi pi-thumbs-down"})]),e(),a(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge icon-left="pi pi-thumbs-up" />
            <Badge icon-right="pi pi-thumbs-down" />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.iconPackage")),1),e(),l("div",L,[l("div",S,[a(t(i),{label:n.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.unLocked"),"icon-right":"fa-solid fa-lock-open",severity:"success"},null,8,["label"])]),e(),a(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Locked" icon-left="pi pi-lock" />
            <Badge label="Unlocked" icon-right="fa-solid fa-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.iconAndLabel")),1),e(),l("div",C,[l("div",P,[a(t(i),{label:n.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.unLocked"),"icon-right":"pi pi-lock-open",severity:"success"},null,8,["label"])]),e(),a(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Locked" icon-left="pi pi-lock" />
            <Badge label="Unlocked" icon-right="pi pi-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.iconElement")),1),e(),l("div",N,[l("div",R,[a(t(i),{label:n.$t("ui.badge.label.correct")},{iconLeft:s(()=>[V]),_:1},8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.wrong"),severity:"danger"},{iconRight:s(()=>[A]),_:1},8,["label"])]),e(),a(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Correct">
              <template #iconLeft>
                <i class="pi pi-check" >
              </template>
            </Badge>

            <Badge label="Wrong" severity="danger">
              <template #iconRight>
                <i class="pi pi-times" >
              </template>
            </Badge>
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});const q=f(D,[["__scopeId","data-v-c775f8af"]]);export{q as default};
