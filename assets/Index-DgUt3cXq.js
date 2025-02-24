import{d as g,s as p,j as b,o as m,w as s,C as e,e as l,t as d,g as a,u as t,O as i,D as v,P as h,Q as f,_}from"./index-B_oNSRZ1.js";import{_ as B}from"./UiPage.vue_vue_type_style_index_0_lang-DP8OldWZ.js";const r=u=>(h("data-v-6f4cd0b3"),u=u(),f(),u),y={class:"section-content"},$={class:"section-content"},k={class:"section-content"},I={class:"section-content"},w={class:"container"},z={class:"section-content"},S={class:"container"},L={class:"section-content"},C={class:"container"},P={class:"section-content"},D={class:"container"},N={class:"section-content"},R={class:"container"},V=r(()=>l("i",{class:"pi pi-check"},null,-1)),A=r(()=>l("i",{class:"pi pi-times"},null,-1)),O=g({__name:"Index",setup(u){return(n,c)=>{const o=p("SshPre");return m(),b(B,{title:n.$t("ui.badge.title"),class:"demo-badge"},{toolbar:s(()=>[a(t(v),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:c[0]||(c[0]=U=>n.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.basic")),1),e(),l("div",y,[a(t(i),{label:n.$t("ui.badge.label.basic")},null,8,["label"]),e(),a(o,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Basic" /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.withI18n")),1),e(),l("div",$,[a(t(i),{label:n.$t("ui.badge.label.addedIn")},null,8,["label"]),e(),a(o,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge :label=t("ui.badge.label.addedIn") /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.rounded")),1),e(),l("div",k,[a(t(i),{label:n.$t("ui.badge.label.rounded"),rounded:""},null,8,["label"]),e(),a(o,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Rounded" rounded /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.severity")),1),e(),l("div",I,[l("div",w,[a(t(i),{label:n.$t("ui.badge.label.primary"),severity:"primary"},null,8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.secondary"),severity:"secondary"},null,8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.alternate"),severity:"alternate"},null,8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.success"),severity:"success"},null,8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.danger"),severity:"danger"},null,8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.warning"),severity:"warning"},null,8,["label"])]),e(),a(o,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.icon")),1),e(),l("div",z,[l("div",S,[a(t(i),{"icon-left":"pi pi-thumbs-up"}),e(),a(t(i),{"icon-right":"pi pi-thumbs-down"})]),e(),a(o,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge icon-left="pi pi-thumbs-up" />
            <Badge icon-right="pi pi-thumbs-down" />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.iconPackage")),1),e(),l("div",L,[l("div",C,[a(t(i),{label:n.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.unLocked"),"icon-right":"fa-solid fa-lock-open",severity:"success"},null,8,["label"])]),e(),a(o,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Locked" icon-left="pi pi-lock" />
            <Badge label="Unlocked" icon-right="fa-solid fa-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.iconAndLabel")),1),e(),l("div",P,[l("div",D,[a(t(i),{label:n.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.unLocked"),"icon-right":"pi pi-lock-open",severity:"success"},null,8,["label"])]),e(),a(o,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Locked" icon-left="pi pi-lock" />
            <Badge label="Unlocked" icon-right="pi pi-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.iconElement")),1),e(),l("div",N,[l("div",R,[a(t(i),{label:n.$t("ui.badge.label.correct")},{iconLeft:s(()=>[V]),_:1},8,["label"]),e(),a(t(i),{label:n.$t("ui.badge.label.wrong"),severity:"danger"},{iconRight:s(()=>[A]),_:1},8,["label"])]),e(),a(o,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}}),E=_(O,[["__scopeId","data-v-6f4cd0b3"]]);export{E as default};
