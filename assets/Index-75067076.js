import{d as b,o as p,c as m,w as i,a as l,t as d,f as e,g as a,h as t,a4 as s,r as c,a0 as h,a1 as v,_}from"./index-8250d14f.js";const g=u=>(h("data-v-b028a9a3"),u=u(),v(),u),f={class:"section-content"},B={class:"section-content"},y={class:"section-content"},$={class:"section-content"},k={class:"section-content"},I={class:"container"},w={class:"section-content"},z={class:"container"},S={class:"section-content"},W={class:"container"},C={class:"section-content"},P={class:"container"},L=g(()=>l("i",{class:"pi pi-check"},null,-1)),N=g(()=>l("i",{class:"pi pi-times"},null,-1)),R={class:"section-content"},V=b({__name:"Index",setup(u){return(n,D)=>{const o=c("SshPre"),r=c("Page");return p(),m(r,{title:n.$t("ui.badge.title"),class:"demo-badge"},{default:i(()=>[l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.basic")),1),e(),l("div",f,[a(o,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Basic" /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),a(t(s),{label:n.$t("ui.badge.label.basic")},null,8,["label"])])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.withI18n")),1),e(),l("div",B,[a(o,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge :label=t("ui.badge.label.addedIn") /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),a(t(s),{label:n.$t("ui.badge.label.addedIn")},null,8,["label"])])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.rounded")),1),e(),l("div",y,[a(o,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Rounded" rounded /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),a(t(s),{label:n.$t("ui.badge.label.rounded"),rounded:""},null,8,["label"])])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.fullWidth")),1),e(),l("div",$,[a(o,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="fullWidth" fullWidth /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),a(t(s),{label:n.$t("ui.badge.label.fullWidth"),fullWidth:""},null,8,["label"])])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.severity")),1),e(),l("div",k,[a(o,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e(),l("div",I,[a(t(s),{label:n.$t("ui.badge.label.primary"),severity:"primary"},null,8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.secondary"),severity:"secondary"},null,8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.alternate"),severity:"alternate"},null,8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.success"),severity:"success"},null,8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.danger"),severity:"danger"},null,8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.warning"),severity:"warning"},null,8,["label"])])])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.iconName")),1),e(),l("div",w,[a(o,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge icon-left="pi pi-thumbs-up" />
            <Badge icon-right="pi pi-thumbs-down" />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",z,[a(t(s),{"icon-left":"pi pi-thumbs-up"}),e(),a(t(s),{"icon-right":"pi pi-thumbs-down"})])])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.iconWithText")),1),e(),l("div",S,[a(o,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Locked" icon-left="pi pi-lock" />
            <Badge label="Unlocked" icon-right="pi pi-lock-open" />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",W,[a(t(s),{label:n.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.unLocked"),"icon-right":"pi pi-lock-open"},null,8,["label"])])])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.iconElement")),1),e(),l("div",C,[a(o,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Correct" icon-left="true">
              <template #iconLeft>
                <i class="pi pi-check" >
              </template>
            </Badge>

            <Badge label="Wrong" icon-right="true">
              <template #iconRight>
                <i class="pi pi-times" >
              </template>
            </Badge>
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",P,[a(t(s),{label:n.$t("ui.badge.label.correct"),"icon-left":"true"},{iconLeft:i(()=>[L]),_:1},8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.wrong"),"icon-right":"true"},{iconRight:i(()=>[N]),_:1},8,["label"])])])]),e(),l("section",null,[l("h2",null,d(n.$t("ui.badge.usage.customStyle")),1),e(),l("div",R,[a(o,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Custom" class="custom-badge" /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>

          <style lang="css" scoped>
            .custom-badge {
              --_badge-color: #0dcaf0;
              --_badge-font-size: 1rem;
              --_badge-font-weight: 800;
              --_badge-padding: 0.5rem 1rem;
              --_badge-text-color: black;
            }
          </style>
        `)]),_:1}),e(),a(t(s),{label:n.$t("ui.badge.label.custom"),class:"custom-badge"},null,8,["label"])])])]),_:1},8,["title"])}}});const A=_(V,[["__scopeId","data-v-b028a9a3"]]);export{A as default};
